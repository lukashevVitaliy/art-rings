import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Autoplay, EffectFade, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
// import 'swiper/css/mousewheel';

export default function SliderCard({ colorImage }) {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Mousewheel]}
      spaceBetween={0}
      slidesPerView={1}
      // mousewheel={true}
      autoplay={true}
      speed={600}
      loop={true}
      effect="fade"
      className="slider-card"
    >
      {colorImage.map((item) => (
        <SwiperSlide key={item.image}>
          <div className="flex items-center justify-center w-1/2 mx-auto">
            <Image
              src={item.image}
              // blurDataURL={item.image}
              width={280}
              height={280}
              alt="rings"
              priority
              // placeholder="blur"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

SliderCard.propsTypes = {
  colorImage: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
    })
  ),
};
