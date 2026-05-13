"use client";
interface VideoBackgroundProps {
  src: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

export function VideoBackground({
  src,
  overlay = true,
  overlayOpacity = 0.55,
}: VideoBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      {overlay && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(10,10,10,0) 0%,
              rgba(10,10,10,${overlayOpacity}) 50%,
              rgba(10,10,10,0.85) 100%
            )`,
          }}
        />
      )}
    </div>
  );
}
