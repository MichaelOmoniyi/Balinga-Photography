import React from 'react'
import { X } from 'lucide-react';

const Video = ({isOpen, closeVideo}) => {
  return (
    <div
      className={`${
        isOpen ? "translate-y-0" : "-translate-y-full opacity-0"
      } videoMagnified flex flex-col gap-4 justify-between fixed inset-0 w-full h-screen top-0 left-0 p-6 md:p-8 md:px-12 bg-black/95 text-gray-600 dark:text-gray-200 overflow-auto`}
    >
      {/* Close Button */}
      <button
        className="absolute top-5 right-5 text-gray-400 dark:text-gray-200 text-2xl"
        onClick={closeVideo}
      >
        <X size={32} />
      </button>
    </div>
  );
}

export default Video