import React from "react";

const VideoPlayer = ({ videoId }) => {
  return (
    <div className="flex justify-center items-center py-10 px-8">
      <div className="w-full max-w-6xl relative rounded-xl overflow-hidden shadow-lg border border-gray-300">
        <div className="relative w-full pt-[55%] md:pt-[30%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
