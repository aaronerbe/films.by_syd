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



export default function Home() {
  return (
  <div className="absolute inset-0 w-full min-h-screen overflow-hidden">
      {/* Background Video Layer */}
      <iframe
      className="absolute inset-0 w-full h-full object-cover z-0"
      src="https://www.youtube.com/embed/-4NWcpA-Ufo?autoplay=1&mute=1&loop=1&playlist=-4NWcpA-Ufo&controls=0"
      title="Background video"
      allow="autoplay"
      frameBorder="0"
  />


      {/* Content Layer */}
      <div className="relative z-10 flex items-center justify-center h-screen">
      <h1 className="font-alt text-5xl font-bold text-white text-center h-[550px]">
          Films By Syd
      </h1>
      </div>
  </div>
  );
}
