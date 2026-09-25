"use client";
import { Workout } from "@/types/Workout";
import { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import Button from "@/components/shared/Button-1";
import { toast } from "react-toastify";

interface AddToPlanButtonProps {
    workout: Workout;
}

const AddToPlanButton = ({ workout }: AddToPlanButtonProps) => {
    const { planWorkouts, setPlanWorkouts } = useContext(WorkoutContext);
    const handleAddToPlan = () => {
        const alreadyAdded = planWorkouts.some(
            (item) => item.id === workout.id
        );
        if (alreadyAdded) {
            toast.info("Already added to today's plan");
            return;
        }
        if (planWorkouts.length >= 5) {
            toast.error("Today's plan can only have 5 workouts");
            return;
        }
        setPlanWorkouts([...planWorkouts, workout]);
        toast.success("Added to today's plan");
    };
    return (
        <Button onClick={handleAddToPlan}>
            Add to today's plan
        </Button>
    );
};

export default AddToPlanButton;