import React from 'react'

const GalleryFrame = ({src}) => {
  return (
    <div className="w-full transitionEffect scale-110 opacity-0">
      <iframe
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        className="w-full h-[calc(100vw)] md:h-[calc((100vw/2)-2rem)] lg:h-[calc((100vw/4)-4rem)]"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default GalleryFrame