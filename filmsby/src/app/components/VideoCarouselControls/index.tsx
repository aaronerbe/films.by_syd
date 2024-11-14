// CarouselControls.js
import React from 'react';

interface CarouselControlsProps {
total: number;
currentIndex: number;
onDotClick: (index: number) => void; // Add this prop for handling dot clicks
}

const CarouselControls: React.FC<CarouselControlsProps> = ({ total, currentIndex, onDotClick }) => {
return (
    <div className="mx-auto flex justify-center items-center bg-primary rounded-full px-8 py-3 mt-8 sm:mt-0 mb-40 sm:mb-0" style={{ width: 'fit-content' }}>
    <div className="flex space-x-2">
        {Array.from({ length: total }).map((_, index) => (
        <button
            key={index}
            onClick={() => onDotClick(index)} // Call onDotClick with the dot index
            className={`h-4 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-gray-300' : 'bg-gray-500'}`}
            style={{ width: index === currentIndex ? '3.25rem' : '1rem' }} // Set active dot width dynamically
        ></button>
        ))}
    </div>
    </div>
);
};

export default CarouselControls;
