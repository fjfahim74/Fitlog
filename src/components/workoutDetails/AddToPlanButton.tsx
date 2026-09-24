"use client";
import { Workout } from "@/types/Workout";
import { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import Button from "@/components/shared/Button-1";

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
            return;
        }
        if (planWorkouts.length >= 5) {
            return;
        }
        setPlanWorkouts([...planWorkouts, workout]);
    };
    return (
        <Button onClick={handleAddToPlan}>
            Add to today's plan
        </Button>
    );
};

export default AddToPlanButton;