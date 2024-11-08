'use client'
import { useState } from "react";

interface BackgroundVideoProps {
videos: string[]; // Array of video URLs
}

export default function BackgroundVideo({ videos }: BackgroundVideoProps) {
const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

// Update the video index when each video ends
const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
};

return (
    <div className="absolute inset-0 w-full min-h-screen overflow-hidden">
    <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={videos[currentVideoIndex]}
        autoPlay
        loop={false} // Disable looping for individual videos
        muted
        playsInline
        onEnded={handleVideoEnd} // Trigger next video on end
    />
    </div>
);
}
