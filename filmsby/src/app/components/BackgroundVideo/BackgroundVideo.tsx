interface BackgroundVideoProps {
    src: string;
}

const BackgroundVideo = ({ src }: BackgroundVideoProps) => {
    return (
    <div className="absolute inset-0 w-full min-h-screen overflow-hidden">
        <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={src} // The source is passed as a prop
        autoPlay
        loop
        muted
        playsInline
        />
    </div>
    );
};

export default BackgroundVideo;
