import React from 'react';
import Image from 'next/image';
import { Autoplay, FreeMode, Keyboard, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';

export default function SliderStudio() {
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#2563eb',
        '--swiper-navigation-size': '25px',
      }}
      modules={[Keyboard, FreeMode, Autoplay, Pagination]}
      spaceBetween={10}
      slidesPerView="auto"
      autoplay={true}
      speed={2500}
      freeMode={false}
      keyboard={{
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      }}
      navigation={true}
      pagination={{
        clickable: true,
        type: 'progressbar',
      }}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
      }}
      className="slider-studio"
    >
      <SwiperSlide className="mb-5">
        <div className="text-center bg-gray-200">
          <Image
            src="/assets/image/studio/studio_1.png"
            width={433}
            height={345}
            alt="image studio"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="mb-5">
        <div className="text-center bg-gray-200">
          <Image
            src="/assets/image/studio/studio_2.png"
            width={433}
            height={345}
            alt="image studio"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="mb-5">
        <div className="text-center bg-gray-200">
          <Image
            src="/assets/image/studio/studio_3.png"
            width={433}
            height={345}
            alt="image studio"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="mb-5">
        <div className="text-center bg-gray-200">
          <Image
            src="/assets/image/studio/studio_4.png"
            width={433}
            height={345}
            alt="image studio"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
