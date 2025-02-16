import React from "react";

interface VideoCardProps {
  thumbnailSrc: string;
  thumbnailSrcSet: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  thumbnailSrc,
  thumbnailSrcSet,
}) => {
  return (
    <div className="flex flex-col relative min-h-60 grow items-center justify-center px-20 py-[85px] rounded-[10px] max-md:max-w-full max-md:mt-[15px] max-md:px-5">
      <img
        loading="lazy"
        src={thumbnailSrc}
        srcSet={thumbnailSrcSet}
        alt="Video Thumbnail"
        className="absolute h-full w-full object-cover inset-0"
      />
      <button
        className="relative bg-[rgba(217,217,217,0.6)] flex w-[71px] flex-col items-center justify-center h-[71px] px-3 rounded-[50%] hover:bg-[rgba(217,217,217,0.8)] transition-colors"
        aria-label="Play Video"
      >
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/ba75b34b0fb7dd60e425efa7631dc332ada088d10aed39f5243a4b4f8b5f994a?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/ba75b34b0fb7dd60e425efa7631dc332ada088d10aed39f5243a4b4f8b5f994a?placeholderIfAbsent=true&width=200 200w"
          alt=""
          className="aspect-[1] object-contain w-full"
        />
      </button>
    </div>
  );
};
