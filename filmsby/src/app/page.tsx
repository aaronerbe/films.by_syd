import BackgroundVideo from "@/app/components/BackgroundVideo";
import VideoCarousel from "@/app/components/VideoCarousel";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background overflow-x-hidden">
      {/* Fullscreen Background Video Section */}
      <div className="h-full relative overflow-hidden sm:h-screen pt-20 pb-40 sm:pt-0 sm:pb-0">
        
        {/* Text Container with Positioning */}
        <div className="relative sm:absolute inset-0 flex flex-col sm:flex-row items-center justify-center z-10">
          
          {/* Upper Left Text */}
          <p className="relative sm:absolute sm:top-20 sm:left-10 z-20 font-alt text-lg text-foreground sm:text-background sm:text-center">
            Film By Syd
          </p>
          
          {/* Centered Heading */}
          <h1 className="pt-10 pb-20 sm:pt-0 sm:pb-0 font-alt text-4xl lg:text-6xl text-foreground sm:text-background text-center z-20">
            Moments To Memories
          </h1>
        </div>
        
        {/* Background Video */}
        <BackgroundVideo videos={["/video/SamGarrett.mp4", "/video/TylerAddi.mp4", "/video/Aubrie.mp4"]} speed={1} />
      </div>
  
      {/* Video Carousel Section */}
      <section className="py-12 px-2 bg-background">
        <h2 className="text-foreground font-alt text-3xl font-bold text-center pt-10 pb-20 sm:pt-0 sm:pt-40 sm:pb-0">
          Video Highlights
        </h2>
        <VideoCarousel videos={["/video/SamGarrett.mp4", "/video/TylerAddi.mp4", "/video/Aubrie.mp4"]} fadeOnScroll={false}  />
      </section>
    </div>
  );
}
