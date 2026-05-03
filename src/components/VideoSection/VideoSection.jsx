/**
 * VideoSection – cinematic full-width video strip.
 */
const VideoSection = ({ src, poster }) => (
  <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
    <video
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/20" />
  </div>
);

export default VideoSection;
