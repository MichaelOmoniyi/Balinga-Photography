"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  priority = false,
  quality = 75,
  className = '',
  sizes = '100vw',
  onLoad,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = (img) => {
    setIsLoading(false);
    if (onLoad) {
      onLoad(img);
    }
  };

  const handleError = () => {
    setError(true);
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute w-full h-full top-0 left-0 inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      )}

      {error ? (
        <div className="absolute w-full h-full top-0 left-0 inset-0 flex items-center justify-center">
          <span className="text-gray-500">Failed to load image</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          priority={priority}
          sizes={sizes}
          className={`transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          } ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  );
};

export default OptimizedImage; 