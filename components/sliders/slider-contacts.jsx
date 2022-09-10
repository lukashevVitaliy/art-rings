import React from 'react';
import Image from 'next/image';
import { Autoplay, FreeMode, Keyboard, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';

export default function SliderContacts() {
  return (
    <Swiper
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
      className="slider-contacts"
    >
      <SwiperSlide>
        <Image
          src="/assets/image/address/image-1.jpg"
          blurDataURL="/assets/image/address/image-1.jpg"
          width={640}
          height={480}
          alt="image address"
          placeholder="blur"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/assets/image/address/image-2.jpg"
          blurDataURL="/assets/image/address/image-2.jpg"
          width={640}
          height={480}
          alt="image address"
          placeholder="blur"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/assets/image/address/image-3.jpg"
          blurDataURL="/assets/image/address/image-3.jpg"
          width={640}
          height={480}
          alt="image address"
          placeholder="blur"
        />
      </SwiperSlide>
    </Swiper>
  );
}
