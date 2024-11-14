export default function Home() {
    return (
    <div className="absolute inset-0 w-full min-h-screen overflow-hidden">
        {/* Background Video Layer */}
        <iframe
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://www.youtube.com/embed/A3PDXmYoF5U?autoplay=1&mute=1&loop=1&playlist=A3PDXmYoF5U&controls=0"
        title="Background video"
        allow="autoplay"
        frameBorder="0"
    />


        {/* Content Layer */}
        <div className="relative z-10 flex items-center justify-center h-screen">
        <h1 className="font-alt text-5xl font-bold text-foreground text-center h-[550px]">
            Films By Syd
        </h1>
        </div>
    </div>
    );
}