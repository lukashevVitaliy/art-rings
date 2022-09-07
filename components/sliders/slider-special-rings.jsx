import React from 'react';
import { Autoplay, FreeMode, Keyboard, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';

export default function SliderSpecialRings() {
  return (
    <Swiper
      style={{
        '--swiper-pagination-bullet-horizontal-gap': '15px',
        '--swiper-pagination-bullet-width': '1rem',
        '--swiper-pagination-bullet-height': '1rem',
      }}
      modules={[Pagination, Keyboard, FreeMode, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={true}
      speed={6000}
      freeMode={false}
      keyboard={{
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      }}
      pagination={{ clickable: true }}
      loop={true}
      className="slider-special-ring"
    >
      <SwiperSlide className="mb-7 md:mb-10">
        <div className="w-full h-fit">
          <Image
            src="/assets/image/home/banner.jpg"
            width={1920}
            height={655}
            alt="special ringth"
            layout="responsive"
            priority
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="mb-7 md:mb-10">
        <div className="w-full h-fit">
          <Image
            src="/assets/image/home/banner.jpg"
            width={1920}
            height={655}
            alt="special ringth"
            layout="responsive"
            priority
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="mb-7 md:mb-10">
        <div className="w-full h-fit">
          <Image
            src="/assets/image/home/banner.jpg"
            width={1920}
            height={655}
            alt="special ringth"
            layout="responsive"
            priority
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
