'use client';
import React, { useRef, useEffect, useState } from 'react';

interface VideoCarouselProps {
  videos: string[];
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastPlayedIndex, setLastPlayedIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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

  useEffect(() => {
    const handleCarouselScroll = () => {
      if (carouselRef.current) {
        const cardWidth = carouselRef.current.children[1]?.getBoundingClientRect().width || 0;
        const scrollLeft = carouselRef.current.scrollLeft;
        const newIndex = Math.round(scrollLeft / cardWidth);

        if (newIndex !== currentIndex) {
          // Pause the previously playing video
          videoRefs.current[currentIndex]?.pause();

          // Resume playback if the new index is the last played index
          if (newIndex === lastPlayedIndex && videoRefs.current[newIndex]?.paused) {
            videoRefs.current[newIndex]?.play();
          }

          setCurrentIndex(newIndex);
        }
      }
    };

    carouselRef.current?.addEventListener('scroll', handleCarouselScroll);
    return () => {
      carouselRef.current?.removeEventListener('scroll', handleCarouselScroll);
    };
  }, [currentIndex, lastPlayedIndex]);

  const scrollTo = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[1]?.getBoundingClientRect().width || 0;
      const targetScrollLeft = cardWidth * index;
      carouselRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
      
      videoRefs.current[currentIndex]?.pause(); // Pause the current video before scrolling
      setCurrentIndex(index);
    }
  };

  const handleEdgeClick = (index: number) => {
    if (videoRefs.current[currentIndex] && currentIndex !== index) {
      videoRefs.current[currentIndex]?.pause();
    }
    scrollTo(index);
  };

  const togglePlayPause = (index: number) => {
    const video = videoRefs.current[index];
  
    // Only update play/pause state without affecting currentIndex if already on the current video
    if (index === currentIndex) {
      if (video) {
        if (video.paused) {
          video.play();
          setLastPlayedIndex(index); // Track the last played video
        } else {
          video.pause();
          setLastPlayedIndex(null); // Clear last played index when paused
        }
      }
    } else {
      // This block would only run if we need to change videos, not for play/pause
      setCurrentIndex(index);
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
        <div className="hidden sm:block flex-shrink-0 w-1/5"></div>

        {/* Video Cards */}
        {videos.map((videoSrc, index) => (
          <div
            key={index}
            className="snap-center flex-shrink-0 flex justify-center items-center relative max-w-[100%] sm:max-w-[75%] w-full"
            style={{
              aspectRatio: '16/9',
            }}
          >
            <div
              className={`w-full h-full max-h-[100%] sm:max-h-[80%] bg-black sm:rounded-3xl overflow-hidden shadow-lg flex justify-center items-center transition duration-300 ${
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
                  videoRefs.current[index] = el;
                }}
                src={videoSrc}
                className="w-full h-full object-contain sm:max-w-[80%] sm:max-h-[80%] sm:rounded-3xl"
                muted
                loop
              />
            </div>
          </div>
        ))}

        {/* Right Spacer */}
        <div className="hidden sm:block flex-shrink-0 w-1/5"></div>
      </div>

    {/* Dots for current position */}
    <div className="mx-auto flex justify-center items-center bg-gray-700 rounded-full px-8 py-4 mt-8 sm:mt-0 mb-40 sm:mb-0 " style={{ width: 'fit-content' }}>

      <div className="flex space-x-2">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full ${index === currentIndex ? 'bg-gray-300 w-10' : 'bg-gray-500'}`}
          ></div>
        ))}
      </div>
    </div>
    </div>
  );
}
