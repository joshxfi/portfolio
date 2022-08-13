import React from "react";
import Image, { ImageProps } from "next/image";

interface Props
  extends Omit<ImageProps, "src" | "className" | "layout" | "objectFit"> {
  src: string;
  className?: string;
}

export const ImageFill = ({ src, alt, className, ...rest }: Props) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="w-full"
        {...rest}
      />
    </div>
  );
};
