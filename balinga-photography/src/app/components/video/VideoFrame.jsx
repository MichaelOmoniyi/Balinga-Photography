import React from 'react'

const VideoFrame = () => {
  return (
    <div className="section_">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/PQBllE0LRdw?si=vEL7TZr2iokm7G3T"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        className="transitionEffect scale-110 opacity-0 w-full h-[calc(100vw)] lg:h-[calc(100vh-9rem)]"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoFrame