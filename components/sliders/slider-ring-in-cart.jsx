import React, { memo } from 'react';
import Image from 'next/image';
import { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const SliderRingInCart = memo(({ colorImage }) => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={true}
      speed={600}
      loop={true}
      effect="fade"
      className="slider-ring-in-cart block w-24 h-24"
    >
      {colorImage.map((item) => (
        <SwiperSlide key={item.image}>
          <div className="flex items-center justify-center">
            <Image
              src={item.image}
              width={100}
              height={100}
              alt="rings"
              priority
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

SliderRingInCart.displayName = 'SliderRingInCart';
export default SliderRingInCart;
