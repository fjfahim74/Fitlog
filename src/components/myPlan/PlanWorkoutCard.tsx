"use client";
import { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import { Workout } from "@/types/Workout";
import Image from "next/image";
import Link from "next/link";
import Button1 from "@/components/shared/Button-1";
import Button2 from "@/components/shared/Button-2";

interface PlanWorkoutCardProps {
    workout: Workout;
}

const PlanWorkoutCard = ({ workout }: PlanWorkoutCardProps) => {
    const {
        planWorkouts,
        setPlanWorkouts,
        completedWorkouts,
        setCompletedWorkouts,
    } = useContext(WorkoutContext);

    const handleMarkAsDone = () => {
        const alreadyCompleted = completedWorkouts.some(
            (item) => item.id === workout.id
        );

        if (alreadyCompleted) {
            return;
        }

        setCompletedWorkouts([...completedWorkouts, workout]);
    };

    const handleRemove = () => {
        setPlanWorkouts(
            planWorkouts.filter((item) => item.id !== workout.id)
        );

        setCompletedWorkouts(
            completedWorkouts.filter((item) => item.id !== workout.id)
        );
    };

    return (
        <div className="border border-zinc-800 rounded-2xl p-5 mt-6 bg-[#12141c] flex gap-4">
            <div className="relative w-32 h-24 shrink-0 overflow-hidden rounded-xl">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                />
            </div>

            <div>
                <h3 className="text-white text-lg font-bold">
                    {workout.name}
                </h3>

                <p className="text-zinc-400 text-sm mt-1">
                    {workout.equipment}
                </p>

                <div className="flex gap-4 mt-3 text-zinc-400 text-sm">
                    <span>{workout.duration} min</span>
                    <span>{workout.caloriesBurned} kcal</span>
                    <span>★ {workout.rating}</span>
                </div>
            </div>
            <div className="flex items-center gap-3 ml-auto">
                <Link href={`/workout/${workout.id}`}>
                    <Button2>
                        View Details
                    </Button2>
                </Link>

                <Button1
                    completed={completedWorkouts.some((item) => item.id === workout.id)}
                    onClick={handleMarkAsDone}
                >
                    {completedWorkouts.some((item) => item.id === workout.id)
                        ? "✓ Completed"
                        : "✓ Mark as Done"}
                </Button1>

                <button
                    onClick={handleRemove}
                    className="w-8 h-8 text-zinc-500 flex items-center justify-center hover:text-white text-xl cursor-pointer"
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default PlanWorkoutCard;

// w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-blue-50