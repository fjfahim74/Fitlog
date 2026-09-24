import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="border border-zinc-700 text-white px-5 py-3 rounded-2xl font-medium flex items-center gap-2.5 hover:bg-zinc-900 active:scale-95 transition-all cursor-pointer">
            {children}
        </button>
    );
};

export default Button;