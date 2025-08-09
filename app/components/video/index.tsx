import { useRef, useState } from 'react';

export default function VideoWithOverlay({ source }: { source: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setMuted(!muted);
    }
  };

  return (
    <div
      className="relative inline-block group xl:h-164 h-140 w-fit cursor-pointer"
      onClick={handleUnmute}
    >
      <video
        className="h-full rounded-4xl max-w-full transition duration-300 ease-in-out"
        autoPlay
        loop
        muted={muted}
        ref={videoRef}
      >
        <source src={source} type="video/mp4" />
      </video>

      <div className="absolute rounded-4xl w-auto inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center pointer-events-none">
        <span
          className="material-symbols-outlined text-black drop-shadow-lg pointer-events-none"
          style={{ fontSize: '3rem' }}
        >
          {muted ? 'volume_off' : 'volume_up'}
        </span>
      </div>

      {/* Mute/Unmute Icon Button */}
      <button
        className="absolute rounded-4xl bottom-2 right-2 bg-black/70 text-black flex justify-center items-center w-16 h-16 shadow-lg"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>
          {muted ? 'volume_off' : 'volume_up'}
        </span>
      </button>
    </div>
  );
}
