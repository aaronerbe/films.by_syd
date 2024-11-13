'use client';
import React, { useRef, useEffect, useState } from 'react';

interface VideoCarouselProps {
  videos: string[];
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]); // Array of refs to manage video elements

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const rect = carouselRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const visibleRatio = Math.min(Math.max(1 - (rect.top / windowHeight) * 0.8, 0), 1);
        setOpacity(visibleRatio);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[1]?.getBoundingClientRect().width || 0;
      const targetScrollLeft = cardWidth * index;
      carouselRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const handleEdgeClick = (index: number) => {
    // Pause the currently playing video if it exists and isn't the clicked video
    if (videoRefs.current[currentIndex] && currentIndex !== index) {
      videoRefs.current[currentIndex]?.pause();
    }
    scrollTo(index);
  };

  const togglePlayPause = (index: number) => {
    const video = videoRefs.current[index];

    // Pause the currently playing video if it's not the same as the clicked video
    if (currentIndex !== index) {
      videoRefs.current[currentIndex]?.pause();
    }

    if (video) {
      if (video.paused) {
        video.play();
        setCurrentIndex(index); // Update currently playing video
      } else {
        video.pause();
        setCurrentIndex(-1); // Reset currently playing video
      }
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Container with Opacity */}
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll snap-x snap-mandatory space-x-4 items-center scrollbar-hide transition-opacity duration-700"
        style={{ opacity }}
      >
        {/* Left Spacer */}
        <div className="flex-shrink-0 w-1/5"></div>

        {/* Video Cards */}
        {videos.map((videoSrc, index) => (
          <div
            key={index}
            className="snap-center flex-shrink-0 flex justify-center items-center relative"
            style={{
              maxWidth: '75%',
              aspectRatio: '16/9',
            }}
          >
            <div
              className={`w-full h-full max-h-[80%] bg-black rounded-3xl overflow-hidden shadow-lg flex justify-center items-center transition duration-300 ${
                (index === currentIndex - 1 || index === currentIndex + 1) && 'hover:opacity-60 cursor-pointer'
              }`}
              onClick={() => {
                if (index === currentIndex - 1 || index === currentIndex + 1) {
                  handleEdgeClick(index);
                } else {
                  togglePlayPause(index); // Play/Pause video on click
                }
              }}
            >
              <video
                ref={(el) => {
                  videoRefs.current[index] = el; // Assign ref without returning it
                }}
                src={videoSrc}
                className="max-w-[80%] max-h-[80%] object-contain rounded-3xl"
                muted
                loop
              />
            </div>
          </div>
        ))}

        {/* Right Spacer */}
        <div className="flex-shrink-0 w-1/5"></div>
      </div>

    {/* Dots for current position */}
    <div className="mx-auto flex justify-center items-center bg-gray-700 rounded-full px-8 py-4" style={{ width: 'fit-content' }}>

      <div className="flex space-x-2">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full ${index === currentIndex ? 'bg-gray-300 w-16' : 'bg-gray-500'}`}
          ></div>
        ))}
      </div>
    </div>
    </div>
  );
}
