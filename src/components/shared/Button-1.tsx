import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick}
            className="bg-lime-400 text-black font-semibold px-5 py-3 rounded-2xl flex items-center gap-2 hover:bg-lime-500 active:scale-95 transition-all">
            {children}
        </button>
    );
};

export default Button;