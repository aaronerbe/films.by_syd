////import Image from "next/image";
////import Banner from "@/app/components/common/banner"

export default function Home() {
  return (
    <div className="absolute inset-0 h-screen w-screen bg-cover bg-center" style={{ backgroundImage: "url('/home/couple.jpg')" }}>
      <div className="flex items-center justify-center h-[300px]">
        <h1 className="font-playfair text-5xl font-bold text-white">Films By Syd</h1>
      </div>

    </div>
  );
}


//export default function Home() {
//  return (
//    <div className="relative flex flex-col min-h-screen">
//      {/* Background Image Layer */}
//      <div
//        className="absolute inset-0 h-screen bg-cover bg-center z-0"
//        style={{ backgroundImage: "url('/home/couple.jpg')" }}
//      />

//      {/* Content Layer */}
//      <div className="relative z-10 flex-grow flex items-center justify-center">
//        <h1 className="font-playfair text-5xl font-bold text-white">
//          Films By Syd
//        </h1>
//      </div>
//    </div>
//  );
//}
