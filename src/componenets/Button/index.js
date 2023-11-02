import React from "react";
const variants = {
    primary: 'h-full bg-blue-500 hover:bg-blue-900 text-white text-white hover:enabled: by-indigo-700 focus:ring-indigo-500',
    danger: 'bg-red-600 text-white hover:enabled: by-red-700 focus:ring-red-500',
    naked: ' hover:text-gray-600text-gray-500 shadow-none'
};
const sizes = {
    small: 'px-2 py-1 text-xs leading-1',
    medium: 'px-4 py-2 text-sm',
    large: 'px-4 py-2 text-base',
};

export const Button = ({ className, variant = 'primary', size = ' small', ...props }) => {
    return (
        <button

            className={`inline-flex justify-center items-center border border-transparent rounded-mdfont-medium 
        shadow-sm focus:outline-none focus:ring-2 focus-ring-offset-2 disabled:opacity-50 
        disabled:cursor-not-allowed ${className} ${variants[variant]} ${sizes[size]}
        `} {...props}
        />
    );
};