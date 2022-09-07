import { Autoplay, FreeMode, Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SliderWorkExamples = () => {
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#000',
        '--swiper-navigation-size': '20px',
      }}
      modules={[Keyboard, FreeMode, Autoplay, Navigation, Pagination]}
      spaceBetween={14}
      slidesPerView="auto"
      autoplay={true}
      speed={6000}
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
      className="slider-work-examples relative"
    >
      <SwiperSlide className="flex justify-center mb-5">
        <Image
          src={'/assets/image/example-rings/example-420x420_1.jpg'}
          width={420}
          height={420}
          alt="example ring"
          priority
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center mb-5">
        <Image
          src={'/assets/image/example-rings/example-420x420_2.jpg'}
          width={420}
          height={420}
          alt="example ring"
          priority
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center mb-5">
        <Image
          src={'/assets/image/example-rings/example-420x420_3.jpg'}
          width={420}
          height={420}
          alt="example ring"
          priority
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center mb-5">
        <Image
          src={'/assets/image/example-rings/example-420x420_4.jpg'}
          width={420}
          height={420}
          alt="example ring"
          priority
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center mb-5">
        <Image
          src={'/assets/image/example-rings/example-420x420_5.jpg'}
          width={420}
          height={420}
          alt="example ring"
          priority
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderWorkExamples;
