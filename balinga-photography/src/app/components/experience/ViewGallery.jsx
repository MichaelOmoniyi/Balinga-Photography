import React from 'react'
import OptimizedImage from "../OptimizedImage";
import Btn from '../Btn';

const ViewGallery = () => {
  return (
    <div className="w-full overflow-hidden mt-10 md:mt-16 relative">
      <div className="relative w-full h-[calc(100vw)] md:h-[calc(80vh)] transitionEffect scale-110 opacity-0">
        <OptimizedImage
        src="/images/portfolio/wedding/Creative-shoot.jpg"
        width={500}
        height={500}
        quality={75}
        className="w-full h-full object-cover"
          alt="Husband and Wife Photograph"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-50 flex flex-col justify-center items-center p-4 md:px-8 lg:px-24">
          <h1 className="text-5xl lg:text-7xl font-medium text-white font-serif mb-4">
            Take a look at our Images
          </h1>
          <span className="text-base lg:text-lg font-extrabold text-white uppercase mb-6">
            Soulful Photography with you in the spotlight
          </span>
          <Btn text={"VIEW OUR GALLERY"} href={"/client-area"} />
        </div>
      </div>
    </div>
  );
}

export default ViewGallery