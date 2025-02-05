import video from "../../assets/video.webm";
const VideoSection = () => {
  return (
    <div className=" h-auto flex gap-[10px] justify-center ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-[1320px] h-[559px] object-cover"
      >
        <source src={video} type="video/webm" />
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;
