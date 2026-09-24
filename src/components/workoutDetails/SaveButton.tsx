"use client";
import { Workout } from "@/types/Workout";
import { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import Button from "@/components/shared/Button-2";

interface SaveButtonProps {
    workout: Workout;
}

const SaveButton = ({ workout }: SaveButtonProps) => {
    const { savedWorkouts, setSavedWorkouts } = useContext(WorkoutContext);
    const handleSave = () => {
        const alreadySaved = savedWorkouts.some(
            (item) => item.id === workout.id
        );
        if (alreadySaved) {
            return;
        }
        setSavedWorkouts([...savedWorkouts, workout]);
    };
    return (
        <Button onClick={handleSave}>
            Save for later
        </Button>
    );
};

export default SaveButton;