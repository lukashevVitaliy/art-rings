import React, { memo } from 'react';
import { Autoplay, FreeMode, Keyboard, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';

const keyBoard = {
  enabled: true,
  onlyInViewport: true,
  pageUpDown: true,
};
const styles = {
  '--swiper-pagination-bullet-horizontal-gap': '15px',
  '--swiper-pagination-bullet-width': '1rem',
  '--swiper-pagination-bullet-height': '1rem',
};
const pagiNation = { clickable: true };

const SliderSpecialRings = memo(() => {
  return (
    <Swiper
      style={styles}
      modules={[Pagination, Keyboard, FreeMode, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
      }}
      speed={2500}
      freeMode={false}
      keyboard={keyBoard}
      pagination={pagiNation}
      loop={true}
      className="slider-special-ring"
    >
      <SwiperSlide className="mb-7 md:mb-10">
        <Image
          src="/assets/image/home/banner_c.jpg"
          width={1920}
          height={655}
          alt="special ringth"
          layout="responsive"
          priority
        />
      </SwiperSlide>
      <SwiperSlide className="mb-7 md:mb-10">
        <Image
          src="/assets/image/home/banner_c.jpg"
          width={1920}
          height={655}
          alt="special ringth"
          layout="responsive"
          priority
        />
      </SwiperSlide>
      <SwiperSlide className="mb-7 md:mb-10">
        <Image
          src="/assets/image/home/banner_c.jpg"
          width={1920}
          height={655}
          alt="special ringth"
          layout="responsive"
          priority
        />
      </SwiperSlide>
    </Swiper>
  );
});

SliderSpecialRings.displayName = 'SliderSpecialRings';
export default SliderSpecialRings;
