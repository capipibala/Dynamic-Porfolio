import React from 'react';

type ButtonProps = {
    label: string;
    onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
            {label}
        </button>
    );
};
