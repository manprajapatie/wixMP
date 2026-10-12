import React from 'react';
import { MoveRight } from 'lucide-react';

const AnimatedButton = ({ children = "Get Started", className = "" }) => {
    return (
        <button

            className={`group flex items-center gap-2 bg-black text-white md:text-lg font-medium px-7 py-3 rounded-full shadow-md transition-all duration-200 cursor-pointer ${className}`}
        >
            <span>{children}</span>
            <div className="transition-all duration-200 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
                <MoveRight size={20} />
            </div>
        </button>
    );
};

export default AnimatedButton;