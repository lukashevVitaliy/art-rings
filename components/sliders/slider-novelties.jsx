import React from 'react';
import { FreeMode, Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import CardRing from '../card-ring';
// import data from '../../utils/data';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function SliderNovelties({ noveltieList }) {
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#2563eb',
        '--swiper-navigation-size': '25px',
      }}
      modules={[Keyboard, FreeMode, Navigation, Pagination]}
      spaceBetween={25}
      slidesPerView="auto"
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
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="slider-novelties relative"
    >
      {noveltieList.map((ring) => (
        <SwiperSlide key={ring.articule} className="mb-5">
          <CardRing ring={ring} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

// проверка данных props
SliderNovelties.propTypes = {
  noveltieList: PropTypes.arrayOf(
    PropTypes.shape({
      articule: PropTypes.string.isRequired,
      insertInRings: PropTypes.bool.isRequired,
      countInStock: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      priceNew: PropTypes.number.isRequired,
      priceOld: PropTypes.number.isRequired,
      sampleOffice: PropTypes.bool.isRequired,
      noveltie: PropTypes.bool.isRequired,
      colorImage: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.string.isRequired,
        })
      ).isRequired,
      features: PropTypes.arrayOf(
        PropTypes.shape({
          weight: PropTypes.string.isRequired,
          material: PropTypes.string.isRequired,
          inserts: PropTypes.string.isRequired,
          composition: PropTypes.string.isRequired,
          view: PropTypes.string.isRequired,
        })
      ).isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
