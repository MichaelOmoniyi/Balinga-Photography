import React from "react";
import dynamic from "next/dynamic";

const GalleryFrame = dynamic(() => import("./GalleryFrame"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const columns = [
  [
    "https://www.youtube.com/embed/mRq80n_gkHE?si=9tvGJPrgly25EjYu",
    "https://www.youtube.com/embed/A-XDsZ81C1I?si=mTqzSUbJqjg4Pzka",
  ],
  [
    "https://www.youtube.com/embed/EadSvSUeb0I?si=fBltL4aLQnMU26bu",
    "https://www.youtube.com/embed/jQclcODBRyc?si=wY9Bt58k-AEnpSwj",
  ],
  [
    "https://www.youtube.com/embed/1wK91ER23W0?si=BTeHXjdoECKeRI0S",
    "https://www.youtube.com/embed/REz2O6JN8zc?si=RmmU2Vka8I7q-agB",
  ],
  [
    "https://www.youtube.com/embed/lCAeRuVuCrM?si=x-xpIAcMkjf13ee_",
  ],
];

const VideoGallery = () => {
  return (
    <div className="w-full section_">
      <div
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        id="gallery"
      >
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="w-full grid gap-4">
            {column.map((src, index) => (
              <div>
                <GalleryFrame src={src} key={index} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
