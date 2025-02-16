import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <header className="w-full">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/38f2ca1705b5ab942f2b2e510d7fc34b2057699618a06d66ba14e6926cdee050?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/38f2ca1705b5ab942f2b2e510d7fc34b2057699618a06d66ba14e6926cdee050?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/38f2ca1705b5ab942f2b2e510d7fc34b2057699618a06d66ba14e6926cdee050?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/38f2ca1705b5ab942f2b2e510d7fc34b2057699618a06d66ba14e6926cdee050?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/38f2ca1705b5ab942f2b2e510d7fc34b2057699618a06d66ba14e6926cdee050?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/38f2ca1705b5ab942f2b2e510d7fc34b2057699618a06d66ba14e6926cdee050?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/38f2ca1705b5ab942f2b2e510d7fc34b2057699618a06d66ba14e6926cdee050?placeholderIfAbsent=true&width=2000 2000w"
        alt="Pesantren Al Hijrah Hero Banner"
        className="aspect-[2.16] object-contain w-full self-stretch"
      />
    </header>
  );
};
