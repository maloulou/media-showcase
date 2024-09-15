import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ImageProps {
  src: string;
  className: string;
  alt: string;
  width: string | number;
  height: string | number;
}

const Image: React.FC<ImageProps> = ({
  src,
  className,
  width,
  alt,
  height,
}) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      height={height}
      width={width}
      className={className}
    />
  );
};

export default Image;
