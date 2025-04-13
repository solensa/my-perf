import { useState, useRef, useEffect } from "react";

interface VideoPlayerProps {
  videoSrc: string;
}

export function VideoPlayer({ videoSrc }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Video play error:", error);
            setIsPlaying(false);
          });
      }
    }
  }, [videoSrc]);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Video play error:", error);
            setIsPlaying(false);
          });
      }
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full h-auto transform -translate-y-[33px] clip-path-[inset(33px_0_33px_0)]"
        playsInline
        muted
        preload="auto"
        poster="/video-poster.jpg"
        onEnded={() => setIsPlaying(false)}
      />

      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
          onClick={playVideo}
        >
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="white"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
