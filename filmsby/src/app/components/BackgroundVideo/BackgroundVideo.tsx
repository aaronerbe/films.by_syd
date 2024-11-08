'use client';
import { useState } from "react";

interface BackgroundVideoProps {
  videos: string[];
}

export default function BackgroundVideo({ videos }: BackgroundVideoProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <video
      className="w-full h-full md:object-cover object-contain"
      src={videos[currentVideoIndex]}
      autoPlay
      loop={false}
      muted
      playsInline
      onEnded={handleVideoEnd}
    />
  );
}
