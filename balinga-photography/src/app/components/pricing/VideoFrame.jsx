import React from 'react'

const VideoFrame = () => {
  return (
    <div className="w-full section_">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/A-XDsZ81C1I?si=VQFM_pnFMDOCarLZ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        className="w-full h-[calc(100vw)] lg:h-[calc(100vh-9rem)] bg-slate-400/50"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoFrame