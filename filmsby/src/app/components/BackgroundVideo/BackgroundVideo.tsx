'use client';
import { useState, useEffect, useRef } from "react";

interface BackgroundVideoProps {
  videos: string[];
  speed?: number; // Optional prop to set playback speed
}

export default function BackgroundVideo({ videos, speed = 1 }: BackgroundVideoProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed; // Set the playback speed
    }
  }, [speed]);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <div className="relative w-full h-full" style={{ willChange: "transform" }}>
      <video
        preload="auto"
        ref={videoRef}
        className="w-full h-full md:object-cover object-contain"
        src={videos[currentVideoIndex]}
        autoPlay
        loop={false}
        muted
        playsInline
        onEnded={handleVideoEnd}
      />
    </div>
  );
}
