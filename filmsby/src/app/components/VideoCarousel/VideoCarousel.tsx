'use client';
import React, { useRef, useEffect } from 'react';

interface VideoCarouselProps {
  videos: string[];
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollTo = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[1]?.getBoundingClientRect().width || 0;
      const targetScrollLeft = cardWidth * index;
      carouselRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
      console.log(`Scrolling to index: ${index}, targetScrollLeft: ${targetScrollLeft}`);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[1]?.getBoundingClientRect().width || 0;
      const currentIndex = Math.round(carouselRef.current.scrollLeft / cardWidth);
      const newIndex = Math.max(0, currentIndex - 1);
      scrollTo(newIndex);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[1]?.getBoundingClientRect().width || 0;
      const currentIndex = Math.round(carouselRef.current.scrollLeft / cardWidth);
      const newIndex = Math.min(videos.length - 1, currentIndex + 1);
      scrollTo(newIndex);
    }
  };

  // On initial load, scroll to the start of the first video
  useEffect(() => {
    if (carouselRef.current) {
      scrollTo(1); // Scroll to first video directly to center it
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll snap-x snap-mandatory space-x-4 items-center scrollbar-hide"
      >
        {/* Left Spacer */}
        <div className="flex-shrink-0 w-1/5"></div>

        {/* Video Cards */}
        {videos.map((videoSrc, index) => (
          <div
            key={index}
            className="snap-center flex-shrink-0 flex justify-center items-center"
            style={{
              maxWidth: '75%',
              aspectRatio: '16/9',
            }}
          >
            <div className="w-full h-full max-h-[80%] bg-black rounded-3xl overflow-hidden shadow-lg flex justify-center items-center">
              <video
                src={videoSrc}
                className="max-w-[80%] max-h-[80%] object-contain rounded-3xl"
                controls
                muted
                loop={true}
              />
            </div>
          </div>
        ))}

        {/* Right Spacer */}
        <div className="flex-shrink-0 w-1/5"></div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black bg-opacity-50 rounded-full text-white hidden md:block"
      >
        &#8592;
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black bg-opacity-50 rounded-full text-white hidden md:block"
      >
        &#8594;
      </button>

      {/* Dots for current position */}
      <div className="flex justify-center space-x-2 mt-4">
        {videos.map((_, index) => (
          <div key={index} className="w-2 h-2 bg-gray-400 rounded-full"></div>
        ))}
      </div>
    </div>
  );
}
