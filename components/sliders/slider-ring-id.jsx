import React, { useState } from 'react';
import {
  FreeMode,
  Keyboard,
  Navigation,
  Mousewheel,
  EffectFade,
  Thumbs,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import 'swiper/css/mousewheel';

export default function SliderRingId({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState({
    el: '#ring-slider-thumbs',
  });

  return (
    <div className="text-black">
      <div className="flex ">
        <div className="hidden sm:flex sm:flex-col sm:justify-center sm:mr-4 sm:w-1/6">
          <div className="slider-ring-id-button-prev mx-auto">
            <BsChevronUp className="text-2xl cursor-pointer" />
          </div>
          <Swiper
            freeMode={true}
            id="ring-slider-thumbs"
            onSwiper={setThumbsSwiper}
            direction="vertical"
            slidesPerView={3}
            navigation={{
              nextEl: '.slider-ring-id-button-next',
              prevEl: '.slider-ring-id-button-prev',
            }}
            modules={[Thumbs, Keyboard, FreeMode, Navigation, EffectFade]}
            className="slider-ring-id-thumbnail w-full h-96 md:h-52 lg:h-96 text-center"
          >
            {images.map((image) => (
              <SwiperSlide
                key={image.image}
                className="opacity-50 transition-all w-full"
              >
                <Image
                  src={image.image}
                  width={100}
                  height={100}
                  alt="ring image"
                  priority
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="slider-ring-id-button-next mx-auto">
            <BsChevronDown className="text-2xl cursor-pointer" />
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          mousewheel={true}
          navigation={{
            nextEl: '.slider-ring-id-button-next',
            prevEl: '.slider-ring-id-button-prev',
          }}
          grabCursor={true}
          thumbs={{
            swiper: thumbsSwiper,
          }}
          modules={[Thumbs, Navigation, Mousewheel]}
          className="w-5/6 max-h-max slider-ring-id-image"
        >
          {images.map((image) => (
            <SwiperSlide className="swiper_slide_thumbs" key={image.image}>
              <Image
                src={image.image}
                width={690}
                height={690}
                alt="ring"
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
