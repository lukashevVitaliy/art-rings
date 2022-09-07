import React from 'react';
import PropTypes from 'prop-types';
import { Autoplay, FreeMode, Keyboard, Mousewheel, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';

export default function SliderReviews({ reviewsRings }) {
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#020f59',
        '--swiper-navigation-size': '25px',
      }}
      modules={[Keyboard, FreeMode, Autoplay, Mousewheel, Navigation]}
      navigation={true}
      spaceBetween={10}
      slidesPerView="auto"
      autoplay={true}
      speed={6000}
      loop={true}
      freeMode={false}
      keyboard={{
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      }}
      mousewheel={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
      }}
      className="slider-reviews mb-5"
    >
      {reviewsRings.map(({ name, rating, message, createdAt }) => {
        let ratingStar = '';
        for (let i = 0; i < rating; i++) {
          ratingStar += '★';
        }

        const formateDate = createdAt
          .slice(0, 10)
          .split('-')
          .reverse()
          .join('.');

        return (
          <SwiperSlide key={`${name}${createdAt}`} className="bg-gray-100">
            <div className="py-10 px-7">
              <p className="text-sm md:text-base font-semibold mb-1">{name}</p>
              <div className="text-xl text-orange-400 mb-4">{ratingStar}</div>
              <p className="h-24 text-sm font-normal mb-4">{message}</p>
              <div className="flex flex-wrap mb-5">
                {/* {images.map((image) => (
										<div key={image.image} className="mr-2 ">
											<Image
												src={image.image}
												width={70}
												height={70}
												alt="images rings"
											/>
										</div>
									))} */}
              </div>
              <p className="text-xs font-normal text-gray-400">{formateDate}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

SliderReviews.propsTypes = {
  reviewsRings: PropTypes.arrayOf(
    PropTypes.shape({
      bind: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
};
