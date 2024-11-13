//////import Image from "next/image";
//////import Banner from "@/app/components/common/banner"

//export default function Home() {
//  return (
//    <div className="absolute inset-0 h-screen w-screen bg-cover bg-center" style={{ backgroundImage: "url('/home/couple.jpg')" }}>
//      <div className="flex items-center justify-center h-[300px]">
//      <h1 className="font-alt text-4xl lg:text-5xl font-bold text-white text-center">Films By Syd</h1>

//      </div>

//    </div>
//  );
//}

import {BackgroundVideo} from "@/app/components/BackgroundVideo";
import {VideoCarousel} from "@/app/components/VideoCarousel";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      {/* Fullscreen Background Video Section */}
      <div className="h-full relative overflow-hidden sm:h-screen pt-20 pb-40 sm:pt-0 sm:pb-0">
        <div className="relative sm:absolute inset-0 flex items-center justify-center z-10">
          <h1 className="pt-10 pb-40 sm:pt-0 sm:pb-0 font-alt text-4xl lg:text-5xl font-bold text-white text-center">
            Films By Syd
          </h1>
        </div>
        <BackgroundVideo videos={["/video/SamGarrett.mp4", "/video/TylerAddi.mp4", "/video/Aubrie.mp4"]} speed={1} />
      </div>

      {/* Video Carousel Section */}
      <section className="py-12 px-2 bg-gray-900">
        <h2 className="text-white font-alt text-3xl font-bold text-center pt-10 pb-40 sm:pt-0 sm:pt-40 sm:pb-0">Video Highlights</h2>
        <VideoCarousel videos={["/video/SamGarrett.mp4", "/video/TylerAddi.mp4", "/video/Aubrie.mp4"]} />
      </section>
    </div>
  );
}





//export default function Home() {
//  return (
//  <div className="absolute inset-0 w-full min-h-screen overflow-hidden">
//      {/* Background Video Layer */}
//      <iframe
//      className="absolute inset-0 w-full h-full object-cover z-0"
//      src="https://www.youtube.com/embed/-4NWcpA-Ufo?autoplay=1&mute=1&loop=1&playlist=-4NWcpA-Ufo&controls=0"
//      title="Background video"
//      allow="autoplay"
//      frameBorder="0"
//  />


//      {/* Content Layer */}
//      <div className="relative z-10 flex items-center justify-center h-screen">
//      <h1 className="font-alt text-5xl font-bold text-white text-center h-[550px]">
//          Films By Syd
//      </h1>
//      </div>
//  </div>
//  );
//}




//////import Image from "next/image";
//////import Banner from "@/app/components/common/banner"

//export default function Home() {
//  return (
//    <div className="absolute inset-0 h-screen w-screen bg-cover bg-center" style={{ backgroundImage: "url('/home/couple.jpg')" }}>
//      <div className="flex items-center justify-center h-[300px]">
//      <h1 className="font-alt text-4xl lg:text-5xl font-bold text-white text-center">Films By Syd</h1>

//      </div>

//    </div>
//  );
//}


//'use client'
//import { useEffect, useState } from "react";

//const videos = [
//  "https://www.youtube.com/embed/-4NWcpA-Ufo?autoplay=1&mute=1&controls=0",
//  //"https://www.youtube.com/embed/Ob2VFoGLLoI?autoplay=1&mute=1&controls=0",
//  //"https://www.youtube.com/embed/yetAnotherVideoId?autoplay=1&mute=1&controls=0",
//];

//export default function BackgroundVideo() {
//  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

//  useEffect(() => {
//    const intervalId = setInterval(() => {
//      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
//    }, 15000); // Change video every 15 seconds (adjust as needed)

//    return () => clearInterval(intervalId); // Cleanup interval on unmount
//  }, []);

//  return (
//    <div className="absolute inset-0 w-full min-h-screen overflow-hidden">
//      {/* Background Video Layer */}
//      <iframe
//        key={currentVideoIndex} // This forces a re-render when src changes
//        className="absolute inset-0 w-full h-full object-cover z-0"
//        src={videos[currentVideoIndex]}
//        title="Background video"
//        allow="autoplay"
//        frameBorder="0"
//      />
//    </div>
//  );
//}


