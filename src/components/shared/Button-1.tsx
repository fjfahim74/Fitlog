import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    completed?: boolean;
}

const Button = ({ children, onClick, completed = false }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={
                completed
                    ? "bg-emerald-950 text-emerald-400 border border-emerald-900 font-semibold px-5 py-3 rounded-2xl flex items-center gap-2 hover:bg-emerald-900 active:scale-95 transition-all cursor-pointer"
                    : "bg-lime-400 text-black font-semibold px-5 py-3 rounded-2xl flex items-center gap-2 hover:bg-lime-500 active:scale-95 transition-all cursor-pointer"
            }
        >
            {children}
        </button>
    );
};

export default Button;