"use client";
import Link from "next/link";
import Button from "@/components/shared/Button-1";
import { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import PlanWorkoutCard from "@/components/myPlan/PlanWorkoutCard";

const MyPlan = () => {
    const { planWorkouts } = useContext(WorkoutContext);
    const totalMinutes = planWorkouts.reduce(
        (total, workout) => total + workout.duration,
        0
    );
    const totalCalories = planWorkouts.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    return (
        <main className="px-5 pt-11 pb-8">
            <div className="border border-zinc-800 rounded-2xl p-5 bg-[#12141c]">
                <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-1/3 px-4 py-4 -mt-4 sm:mt-0">
                        <p className="text-zinc-400 text-sm">
                            EXERCISES
                        </p>
                        <p className="text-[#a3e635] text-3xl font-bold mt-2">
                            {planWorkouts.length}
                        </p>
                    </div>

                    <div className="hidden sm:block w-px bg-zinc-800"></div>

                    <div className="w-full sm:w-1/3 px-4 sm:px-7 py-4 border-t border-zinc-800 sm:border-t-0">
                        <p className="text-zinc-400 text-sm">
                            MINUTES
                        </p>
                        <p className="text-white text-3xl font-bold mt-2">
                            {totalMinutes}
                        </p>
                    </div>

                    <div className="hidden sm:block w-px bg-zinc-800"></div>

                    <div className="w-full sm:w-1/3 px-4 sm:px-7 py-4 -mb-4 sm:mb-0 border-t border-zinc-800 sm:border-t-0">
                        <p className="text-zinc-400 text-sm">
                            CALORIES
                        </p>
                        <p className="text-white text-3xl font-bold mt-2">
                            {totalCalories}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mt-8">
                <div className="bg-[#12141c] p-1.5 rounded-xl flex items-center border border-zinc-800">
                    <button className="bg-[#222635] text-white px-5 py-2 rounded-lg text-sm font-bold">
                        Today's Plan
                    </button>

                    <button className="text-zinc-400 px-5 py-2 rounded-lg text-sm font-medium">
                        Saved
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-zinc-400 text-sm">
                        Sort By
                    </span>

                    <select className="bg-zinc-900 border border-zinc-800 text-white rounded-lg px-3 py-2 pr-1 text-sm">
                        <option>Duration</option>
                    </select>
                </div>
            </div>

            {planWorkouts.length === 0 ? (
                <div className="border border-zinc-800 border-dashed rounded-2xl p-16 text-center mt-6 bg-zinc-950">
                    <h2 className="text-white text-2xl font-bold">
                        NOTHING HERE YET
                    </h2>

                    <p className="text-zinc-400 mt-2">
                        Browse the library and add a lift to get today moving.
                    </p>

                    <div className="flex justify-center mt-6">
                        <Link href="/">
                            <Button>
                                <div className="-mt-1">
                                    Go to workouts
                                </div>
                            </Button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div>
                    {planWorkouts.map((workout) => (
                        <PlanWorkoutCard key={workout.id} workout={workout} />
                    ))}
                </div>
            )}
        </main>
    );
};

export default MyPlan;