import React from "react";
import { VideoCard } from "../ui/VideoCard";

export const VideoSection: React.FC = () => {
  const videoThumbnailSrcSet =
    "https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/7fefeee9ee8f22a5067ae396dc0233642d14288769faf8530cea2fa5612bfaf5?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/7fefeee9ee8f22a5067ae396dc0233642d14288769faf8530cea2fa5612bfaf5?placeholderIfAbsent=true&width=200 200w";

  return (
    <section className="w-full max-w-[1308px] mt-[55px] max-md:max-w-full max-md:mt-10">
      <h2 className="text-black text-4xl font-bold text-center mb-[57px] max-md:max-w-full max-md:mt-10">
        Video Kegiatan Pesantren
      </h2>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[33%] max-md:w-full max-md:ml-0">
          <VideoCard
            thumbnailSrc={videoThumbnailSrcSet.split(" ")[0]}
            thumbnailSrcSet={videoThumbnailSrcSet}
          />
        </div>
        <div className="w-[33%] max-md:w-full max-md:ml-0">
          <VideoCard
            thumbnailSrc={videoThumbnailSrcSet.split(" ")[0]}
            thumbnailSrcSet={videoThumbnailSrcSet}
          />
        </div>
        <div className="w-[33%] max-md:w-full max-md:ml-0">
          <VideoCard
            thumbnailSrc={videoThumbnailSrcSet.split(" ")[0]}
            thumbnailSrcSet={videoThumbnailSrcSet}
          />
        </div>
      </div>
    </section>
  );
};
