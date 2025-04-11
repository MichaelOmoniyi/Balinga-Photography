import React from 'react'
import { X } from 'lucide-react';
import dynamic from 'next/dynamic';

const VideoFrame = dynamic(() => import("./VideoFrame"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

const Video = ({isOpen, closeVideo}) => {
  return (
    <div
      className={`${
        isOpen ? "translate-y-0" : "-translate-y-full opacity-0"
      } videoMagnified flex justify-center items-center fixed inset-0 w-screen h-screen top-0 left-0 p-6 md:p-8 md:px-12 bg-black/95 text-gray-600 dark:text-gray-200 overflow-auto`}
    >
      {/* Close Button */}
      <button
        className="absolute top-5 right-5 text-gray-400 dark:text-gray-200 text-2xl"
        onClick={closeVideo}
      >
        <X size={32} />
      </button>
      <VideoFrame />
    </div>
  );
}

export default Video