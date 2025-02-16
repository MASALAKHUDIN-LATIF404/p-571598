import React from "react";

export const FacilitiesSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <h2 className="text-black text-4xl font-bold text-center mt-[57px] max-md:mt-10">
        Fasilitas Pesantren
      </h2>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/f7e9ec16276701cdc533f53886edf69bb10af8d1982b0e0205709c945afa4f26?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/f7e9ec16276701cdc533f53886edf69bb10af8d1982b0e0205709c945afa4f26?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/f7e9ec16276701cdc533f53886edf69bb10af8d1982b0e0205709c945afa4f26?placeholderIfAbsent=true&width=400 400w"
        alt="Fasilitas Pesantren"
        className="aspect-[2.86] object-contain w-full max-w-[1308px] mt-[41px] rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-10"
      />
    </section>
  );
};
