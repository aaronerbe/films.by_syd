// VideoCarousel.tsx
'use client';
import React, { useRef, useEffect, useState } from 'react';
import VideoCard from '@/app/components/VideoCard';
import CarouselControls from '@/app/components/VideoCarouselControls';

interface VideoCarouselProps {
  videos: string[];
  fadeOnScroll?: boolean; // Add the fadeOnScroll prop
}

export default function VideoCarousel({ videos, fadeOnScroll = false }: VideoCarouselProps) { // Default to false
  const carouselRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<React.MutableRefObject<HTMLVideoElement | null>[]>([]);

  useEffect(() => {
    videoRefs.current = videos.map((_, index) => videoRefs.current[index] ?? React.createRef());
  }, [videos]);

  useEffect(() => {
    if (fadeOnScroll) {
      const handleScroll = () => {
        if (carouselRef.current) {
          const rect = carouselRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const visibleRatio = Math.min(Math.max(1 - (rect.top / windowHeight) * 0.8, 0), 1);
          setOpacity(visibleRatio);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setOpacity(1); // Set to full visibility if fadeOnScroll is false
    }
  }, [fadeOnScroll]);

  const scrollTo = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[1]?.getBoundingClientRect().width || 0;
      carouselRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll snap-x snap-mandatory space-x-4 items-center scrollbar-hide transition-opacity duration-700"
        style={{ opacity }}
      >
        <div className="hidden sm:block flex-shrink-0 w-1/5"></div>
        {videos.map((videoSrc, index) => (
          <VideoCard
            key={index}
            videoSrc={videoSrc}
            isCurrent={index === currentIndex}
            onEdgeClick={() => scrollTo(index)}
            videoRef={videoRefs.current[index]}
            onPlay={() => setCurrentIndex(index)}
          />
        ))}
        <div className="hidden sm:block flex-shrink-0 w-1/5"></div>
      </div>
      <CarouselControls total={videos.length} currentIndex={currentIndex} onDotClick={scrollTo} />
    </div>
  );
}
