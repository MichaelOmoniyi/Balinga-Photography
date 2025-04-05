import React from 'react'

const VideoFrame = () => {
  return (
    <div className="px-6 md:px-8 lg:px-12">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/lCAeRuVuCrM?si=x-xpIAcMkjf13ee_"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        className="w-full h-[calc(100vw)] lg:h-[calc(100vh-9rem)]"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoFrame