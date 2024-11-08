//////import Image from "next/image";
//////import Banner from "@/app/components/common/banner"

export default function Home() {
  return (
    <div className="absolute inset-0 h-screen w-screen bg-cover bg-center" style={{ backgroundImage: "url('/home/couple.jpg')" }}>
      <div className="flex items-center justify-center h-[300px]">
      <h1 className="font-alt text-4xl lg:text-5xl font-bold text-white text-center">Films By Syd</h1>

      </div>

    </div>
  );
}




