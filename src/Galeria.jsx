import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const images = [
  "https://i.postimg.cc/BZkPbHJm/BM14.png",
  "https://i.postimg.cc/y8qRQ95D/BM11.png",
  "https://i.postimg.cc/Y0qRSgkr/BM3.png",
  "https://i.postimg.cc/NFz6fzpD/BM5.png",
  "https://i.postimg.cc/RhsRJFVc/BM2.png",
  "https://i.postimg.cc/VNWXb6Kd/BM7.png",
  "https://i.postimg.cc/906Dk5L6/BM12.png",
  "https://i.postimg.cc/59npRPq6/BM4.png",
  "https://i.postimg.cc/pT08qSbv/BM10.png",
  "https://i.postimg.cc/yNHFd9XM/BM8.png",
  "https://i.postimg.cc/Hk5wd350/BM6.png",
  "https://i.postimg.cc/ncW2HCWx/BM1.png",
  "https://i.postimg.cc/vTg1XHt7/BM13.png",
];

function AutoCarousel() {
  return (
    <section className="w-full max-w-6xl mx-auto pb-12 px-6 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center uppercase text-red-700">
        Galería
      </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="rounded-xl"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1.5,
          },
          1280: {
            slidesPerView: 2,
          },
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className="flex justify-center">
            <img
              src={src}
              alt={`BlackMesa slide ${i + 1}`}
              className="rounded-lg object-cover max-h-[500px] w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default AutoCarousel;
