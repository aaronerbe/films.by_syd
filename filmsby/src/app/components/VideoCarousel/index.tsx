// VideoCarousel.tsx
'use client';
import React, { useRef, useEffect, useState } from 'react';
import VideoCard from '@/app/components/VideoCard';
import CarouselControls from '@/app/components/VideoCarouselControls';

interface VideoCarouselProps {
  videos: string[];
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastPlayedIndex, setLastPlayedIndex] = useState<number | null>(null);
  const videoRefs = useRef<React.MutableRefObject<HTMLVideoElement | null>[]>([]);

  useEffect(() => {
    videoRefs.current = videos.map((_, index) => videoRefs.current[index] ?? React.createRef());
  }, [videos]);

  // Opacity on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const rect = carouselRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const visibleRatio = Math.min(Math.max(1 - (rect.top / windowHeight) * 0, 0), 1);  //* 0 means no sroll fade effect.  0 < x < 1 would make it have scroll effect
        setOpacity(visibleRatio);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleCarouselScroll = () => {
      if (carouselRef.current) {
        const cardWidth = carouselRef.current.children[1]?.getBoundingClientRect().width || 0;
        const scrollLeft = carouselRef.current.scrollLeft;
        const newIndex = Math.round(scrollLeft / cardWidth);

        if (newIndex !== currentIndex) {
          videoRefs.current[currentIndex]?.current?.pause();
          setCurrentIndex(newIndex);

          // Resume playback if the scrolled-to video is the last played video
          if (newIndex === lastPlayedIndex && videoRefs.current[newIndex]?.current?.paused) {
            videoRefs.current[newIndex]?.current?.play();
          }
        }
      }
    };

    carouselRef.current?.addEventListener('scroll', handleCarouselScroll);
    return () => {
      carouselRef.current?.removeEventListener('scroll', handleCarouselScroll);
    };
  }, [currentIndex, lastPlayedIndex]);

  const handleEdgeClick = (index: number) => {
    videoRefs.current[currentIndex]?.current?.pause();
    scrollTo(index);
  };

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
            onEdgeClick={() => handleEdgeClick(index)}
            videoRef={videoRefs.current[index]}
            onPlay={() => {
              setCurrentIndex(index);
              setLastPlayedIndex(index);
            }}
          />
        ))}
        <div className="hidden sm:block flex-shrink-0 w-1/5"></div>
      </div>
      <CarouselControls total={videos.length} currentIndex={currentIndex} />
    </div>
  );
}
