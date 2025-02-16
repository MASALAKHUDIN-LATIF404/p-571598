import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center">
      <HeroSection />
      <main className="w-full flex flex-col items-center">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/e158cef4d4b079a174bb20ff0b32001c083939746657408925d740858d18eb40?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/e158cef4d4b079a174bb20ff0b32001c083939746657408925d740858d18eb40?placeholderIfAbsent=true&width=200 200w"
          alt="Welcome Banner"
          className="aspect-[1.68] object-contain w-full max-w-[1202px] mt-[53px] max-md:max-w-full max-md:mt-10"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/d60cdfd540c657d5756111291cf65ba3f27b416ce4a92e2583a691d1155d333a?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/d60cdfd540c657d5756111291cf65ba3f27b416ce4a92e2583a691d1155d333a?placeholderIfAbsent=true&width=200 200w"
          alt="About Section"
          className="aspect-[2.39] object-contain w-full max-w-[1202px] mt-20 max-md:max-w-full max-md:mt-10"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/1b11dacd9872a41a979cdf3b83d11bbadeca0b360d4644970e0c4d3ae305d997?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/1b11dacd9872a41a979cdf3b83d11bbadeca0b360d4644970e0c4d3ae305d997?placeholderIfAbsent=true&width=200 200w"
          alt="Features Section"
          className="aspect-[2.67] object-contain w-full mt-[87px] max-md:max-w-full max-md:mt-10"
        />
        <VideoSection />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/ce129c3c5e9eba51fbf33aaba37bc02bf04bb50fac2f4620bf48f58a6a914b8c?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/ce129c3c5e9eba51fbf33aaba37bc02bf04bb50fac2f4620bf48f58a6a914b8c?placeholderIfAbsent=true&width=200 200w"
          alt="Activities Section"
          className="aspect-[2.91] object-contain w-full mt-[82px] max-md:max-w-full max-md:mt-10"
        />
        <FacilitiesSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
