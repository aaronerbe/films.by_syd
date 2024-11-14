// CarouselControls.js
import React from 'react';

interface CarouselControlsProps {
total: number;
currentIndex: number;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({ total, currentIndex }) => {
    return (
        <div className="mx-auto flex justify-center items-center bg-gray-700 rounded-full px-8 py-4 mt-8 sm:mt-0 mb-40 sm:mb-0 " style={{ width: 'fit-content' }}>
        <div className="flex space-x-2">
            {Array.from({ length: total }).map((_, index) => (
                <div
                    key={index}
                    className={`w-4 h-4 rounded-full ${index === currentIndex ? 'bg-gray-300 w-20' : 'bg-gray-500'}`}
                ></div>
            ))}
        </div>
        </div>
    );
};

export default CarouselControls;
