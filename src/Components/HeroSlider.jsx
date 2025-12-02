import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MdDataExploration } from "react-icons/md";

const HeroSlider = () => {
  const slides = [
    {
      img: "https://i.ibb.co.com/TDppkBpN/dogWorm.jpg",
      title: "Keep Your Pet Warm & Cozy",
      desc: "Provide soft blankets and warm bedding during chilly winter nights.",
    },
    {
      img: "https://i.ibb.co.com/pjsNLLZk/dog2.jpg",
      title: "Protect Those Paws",
      desc: "Use pet-safe balms to protect your furry friend’s paws from cold surfaces.",
    },
    {
      img: "https://i.ibb.co.com/HpLZnYtN/hidrationdog.jpg",
      title: "Hydration Matters",
      desc: "Ensure your pets have access to fresh, unfrozen water at all times.",
    },
    {
      img: "https://i.ibb.co.com/20f20Jgs/dogwinter.webp",
      title: "Winter Exercise",
      desc: "Keep playtime indoors or short outdoor walks to avoid frostbite.",
    },
  ];

  return (
    <div className="sm:mb-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700"></h2>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full max-w-7xl mx-auto rounded-2xl shadow-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={slide?.img}
                alt={slide.title}
                className="w-full h-[450px] object-cover overflow-hidden rounded-2xl"
              />
              <div className="absolute inset-0 text-white bg-black opacity-40 flex flex-col justify-center items-center text-center  rounded-2xl ">
                <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                <p className="max-w-md text-sm mb-4">{slide.desc}</p>
                <p className="cursor-pointer btn bg-blue-800 w-[100px] text-white">
                  Explore <MdDataExploration />
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
