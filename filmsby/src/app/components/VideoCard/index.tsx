// VideoCard.tsx
import React from 'react';

interface VideoCardProps {
  videoSrc: string;
  isCurrent: boolean;
  onEdgeClick: () => void;
  videoRef: React.MutableRefObject<HTMLVideoElement | null>;
  onPlay: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoSrc, isCurrent, onEdgeClick, videoRef, onPlay }) => {
  const togglePlayPause = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
        onPlay();
      } else {
        videoElement.pause();
      }
    }
  };

  return (
    <div
      className={`snap-center flex-shrink-0 flex justify-center items-center relative max-w-[100%] sm:max-w-[75%] w-full ${
        !isCurrent ? 'cursor-pointer hover:opacity-60' : ''
      }`}
      style={{ aspectRatio: '16/9' }}
      onClick={!isCurrent ? onEdgeClick : togglePlayPause}
    >
      <div className="w-full h-full max-h-[100%] sm:max-h-[80%] bg-primary sm:rounded-3xl overflow-hidden shadow-lg flex justify-center items-center">
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-contain sm:max-w-[80%] sm:max-h-[80%] sm:rounded-3xl"
          muted
          loop
        />
      </div>
    </div>
  );
};

export default VideoCard;
