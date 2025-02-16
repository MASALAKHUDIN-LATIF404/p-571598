import React from "react";

export const FooterSection: React.FC = () => {
  return (
    <footer className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1074px] mt-[121px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <nav className="w-[24%] max-md:w-full max-md:ml-0">
            <div className="flex items-stretch gap-[17px] text-black max-md:mt-10">
              <div className="flex flex-col items-stretch">
                <h3 className="text-xl font-bold">Navigasi</h3>
                <ul className="text-base font-normal mt-[13px] space-y-1">
                  <li>Berita Sekolah</li>
                  <li>Kegiatan Sekolah</li>
                  <li>Gallery Sekolah</li>
                  <li>Sosial Keagamaan</li>
                </ul>
              </div>
              <ul className="text-base font-normal mt-[33px] space-y-1">
                <li>Alumni</li>
                <li>Pendaftaran</li>
                <li>Media Sosial</li>
                <li>Karir</li>
              </ul>
            </div>
          </nav>

          <div className="w-[76%] ml-5 max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[21%] max-md:w-full max-md:ml-0">
                  <div className="w-full max-md:mt-10">
                    <h3 className="text-black text-xl font-bold">
                      Follow Kami
                    </h3>
                    <div className="flex items-stretch gap-3.5 mt-[22px] max-md:mr-[5px]">
                      {/* Social Media Icons */}
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/262db3b07cd60fdf5ce926f5e59a91605bf4dfdc38fe9ffa83494d3c7b9f682d?placeholderIfAbsent=true&width=100 100w"
                        alt="Facebook"
                        className="aspect-[1.06] object-contain w-[17px] shrink-0"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/71ba7b3472bb8a4eda241c8acce82d99fdfb866c1dd3c5aa83233ca13422c469?placeholderIfAbsent=true&width=100 100w"
                        alt="Twitter"
                        className="aspect-[1] object-contain w-4 shrink-0"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/ab25e4d44dbf93ca9808c6bffb64027ef78fbf65363466314c8036d5164a71ff?placeholderIfAbsent=true&width=100 100w"
                        alt="Instagram"
                        className="aspect-[1] object-contain w-4 shrink-0"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/6e0a026254fd4ea4a2658222c7292fe5/dd8c59a37ff2c47092dc632e88874510b364db8766f18b0bd33c342e7f8b1092?placeholderIfAbsent=true&width=100 100w"
                        alt="YouTube"
                        className="aspect-[1] object-contain w-4 shrink-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-[30%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col text-base text-black font-normal max-md:mt-10">
                    <h3 className="text-xl font-bold">Kontak Kami</h3>
                    <a href="mailto:info@alhijrah.sch.id" className="mt-[17px]">
                      info@alhijrah.sch.id
                    </a>
                    <div className="self-stretch mt-4 space-y-1">
                      <p>021-xxxxxx (Ciawi)</p>
                      <p>021-xxxxxx (Bogor)</p>
                      <p>021-xxxxxx (Bandung)</p>
                    </div>
                  </div>
                </div>

                <div className="w-[49%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col items-stretch text-black max-md:mt-10">
                    <h3 className="text-xl font-bold">Alamat Sekolah</h3>
                    <address className="text-base font-normal mt-[18px] not-italic">
                      Jl. Haji Nawi, No 115, Bandung, Jawa Barat.
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[rgba(233,233,233,1)] self-stretch flex w-full flex-col items-center text-black justify-center mt-[54px] px-[70px] py-[18px] max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-full max-w-[1077px] items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
          <div className="text-base font-medium">Pesantren Al Hijrah</div>
          <div className="flex items-stretch gap-[19px] text-sm font-normal">
            <button className="hover:underline">Syarat & Ketentuan</button>
            <button className="hover:underline">Kebijakan Privasi</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
