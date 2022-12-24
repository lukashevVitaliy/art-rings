import React, { memo } from 'react';
import Image from 'next/image';
import { Autoplay, FreeMode, Keyboard, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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
const pagiNation = {
  clickable: true,
  type: 'progressbar',
};
const breakPoints = {
  640: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 3,
  },
};

const SliderContacts = memo(() => {
  return (
    <Swiper
      modules={[Keyboard, FreeMode, Autoplay, Pagination]}
      spaceBetween={10}
      slidesPerView="auto"
      autoplay={true}
      speed={2500}
      freeMode={false}
      keyboard={keyBoard}
      navigation={true}
      pagination={pagiNation}
      loop={true}
      breakpoints={breakPoints}
      className="slider-contacts"
    >
      <SwiperSlide>
        <Image
          src="/assets/image/address/image-1.jpg"
          blurDataURL={
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzAyMEY1OSIgZD0iTTU1Ljc4MyAxNS4yNyA0Ni40NSA0LjA3YS45MzUuOTM1IDAgMCAwLS43MTctLjMzNUgxMC4yNjdhLjkzMi45MzIgMCAwIDAtLjcxNy4zMzVMLjIxNyAxNS4yN2EuOTMuOTMgMCAwIDAgLjcxNyAxLjUzaDU0LjEzMmEuOTM1LjkzNSAwIDAgMCAuNzE3LTEuNTNabS01Mi44NTYtLjMzNkwxMC43MDQgNS42aDM0LjU5Mmw3Ljc3NyA5LjMzNEgyLjkyN1oiLz48cGF0aCBmaWxsPSIjMDIwRjU5IiBkPSJNMjguODYzIDQuMzFhLjkzMy45MzMgMCAwIDAtLjg2Mi0uNTc2SDEwLjI2OGEuOTMzLjkzMyAwIDAgMC0uODA3IDEuNDAzbDYuNTM0IDExLjJhLjkzNC45MzQgMCAwIDAgMS40NjYuMTlsMTEuMi0xMS4yYS45MzMuOTMzIDAgMCAwIC4yMDItMS4wMThaTTE2Ljk5NiAxNC4zNWwtNS4xMDQtOC43NWgxMy44NTVsLTguNzUxIDguNzVaIi8+PHBhdGggZmlsbD0iIzAyMEY1OSIgZD0iTTU1LjkwMyAxNS40NTNhLjkzMy45MzMgMCAwIDAtLjgzNy0uNTJILjkzNGEuOTM0LjkzNCAwIDAgMC0uNzQxIDEuNWwyNy4wNjYgMzUuNDY2YS45MzMuOTMzIDAgMCAwIDEuNDgyIDBsMjcuMDY2LTM1LjQ2NmEuOTM0LjkzNCAwIDAgMCAuMDk2LS45OFpNMjggNDkuNzk1IDIuODIgMTYuOGg1MC4zNmwtMjUuMTggMzIuOTk1WiIvPjxwYXRoIGZpbGw9IiMwMjBGNTkiIGQ9Im0yOC44OSA1MS4wNTEtMTEuMi0zNS40NjZhLjkzNC45MzQgMCAwIDAtLjg5LS42NTJILjkzNGEuOTM0LjkzNCAwIDAgMC0uNzQxIDEuNWwyNy4wNjYgMzUuNDY2YS45MzEuOTMxIDAgMCAwIDEuMTcxLjI2MS45MzMuOTMzIDAgMCAwIC40Ni0xLjEwOVpNMi44MiAxNi44MDFoMTMuMjk2bDkuMzg2IDI5LjcyTDIuODIgMTYuODAxWk00Ni41NDIgNC4yMDJhLjkzMi45MzIgMCAwIDAtLjgwOS0uNDY4SDI4YS45MzQuOTM0IDAgMCAwLS42NiAxLjU5M2wxMS4yIDExLjJhLjkzLjkzIDAgMCAwIC43OC4yNjUuOTMzLjkzMyAwIDAgMCAuNjg2LS40NTVsNi41MzMtMTEuMmEuOTM1LjkzNSAwIDAgMCAuMDAzLS45MzVabS03LjUzOCAxMC4xNDktOC43NTEtOC43NWgxMy44NTVsLTUuMTA0IDguNzVaIi8+PHBhdGggZmlsbD0iIzAyMEY1OSIgZD0iTTU1LjkwNCAxNS40NTRhLjkzMy45MzMgMCAwIDAtLjgzNy0uNTJIMzkuMjAxYS45MzMuOTMzIDAgMCAwLS44OS42NTNsLTExLjIgMzUuNDY2YS45MzQuOTM0IDAgMCAwIDEuNjMxLjg0OGwyNy4wNjYtMzUuNDY3YS45MzQuOTM0IDAgMCAwIC4wOTYtLjk4Wk0zMC40OTkgNDYuNTIxbDkuMzg1LTI5LjcySDUzLjE4TDMwLjUgNDYuNTJaIi8+PC9zdmc+'
          }
          width={640}
          height={480}
          alt="image address"
          placeholder="blur"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/assets/image/address/image-2.jpg"
          blurDataURL={
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzAyMEY1OSIgZD0iTTU1Ljc4MyAxNS4yNyA0Ni40NSA0LjA3YS45MzUuOTM1IDAgMCAwLS43MTctLjMzNUgxMC4yNjdhLjkzMi45MzIgMCAwIDAtLjcxNy4zMzVMLjIxNyAxNS4yN2EuOTMuOTMgMCAwIDAgLjcxNyAxLjUzaDU0LjEzMmEuOTM1LjkzNSAwIDAgMCAuNzE3LTEuNTNabS01Mi44NTYtLjMzNkwxMC43MDQgNS42aDM0LjU5Mmw3Ljc3NyA5LjMzNEgyLjkyN1oiLz48cGF0aCBmaWxsPSIjMDIwRjU5IiBkPSJNMjguODYzIDQuMzFhLjkzMy45MzMgMCAwIDAtLjg2Mi0uNTc2SDEwLjI2OGEuOTMzLjkzMyAwIDAgMC0uODA3IDEuNDAzbDYuNTM0IDExLjJhLjkzNC45MzQgMCAwIDAgMS40NjYuMTlsMTEuMi0xMS4yYS45MzMuOTMzIDAgMCAwIC4yMDItMS4wMThaTTE2Ljk5NiAxNC4zNWwtNS4xMDQtOC43NWgxMy44NTVsLTguNzUxIDguNzVaIi8+PHBhdGggZmlsbD0iIzAyMEY1OSIgZD0iTTU1LjkwMyAxNS40NTNhLjkzMy45MzMgMCAwIDAtLjgzNy0uNTJILjkzNGEuOTM0LjkzNCAwIDAgMC0uNzQxIDEuNWwyNy4wNjYgMzUuNDY2YS45MzMuOTMzIDAgMCAwIDEuNDgyIDBsMjcuMDY2LTM1LjQ2NmEuOTM0LjkzNCAwIDAgMCAuMDk2LS45OFpNMjggNDkuNzk1IDIuODIgMTYuOGg1MC4zNmwtMjUuMTggMzIuOTk1WiIvPjxwYXRoIGZpbGw9IiMwMjBGNTkiIGQ9Im0yOC44OSA1MS4wNTEtMTEuMi0zNS40NjZhLjkzNC45MzQgMCAwIDAtLjg5LS42NTJILjkzNGEuOTM0LjkzNCAwIDAgMC0uNzQxIDEuNWwyNy4wNjYgMzUuNDY2YS45MzEuOTMxIDAgMCAwIDEuMTcxLjI2MS45MzMuOTMzIDAgMCAwIC40Ni0xLjEwOVpNMi44MiAxNi44MDFoMTMuMjk2bDkuMzg2IDI5LjcyTDIuODIgMTYuODAxWk00Ni41NDIgNC4yMDJhLjkzMi45MzIgMCAwIDAtLjgwOS0uNDY4SDI4YS45MzQuOTM0IDAgMCAwLS42NiAxLjU5M2wxMS4yIDExLjJhLjkzLjkzIDAgMCAwIC43OC4yNjUuOTMzLjkzMyAwIDAgMCAuNjg2LS40NTVsNi41MzMtMTEuMmEuOTM1LjkzNSAwIDAgMCAuMDAzLS45MzVabS03LjUzOCAxMC4xNDktOC43NTEtOC43NWgxMy44NTVsLTUuMTA0IDguNzVaIi8+PHBhdGggZmlsbD0iIzAyMEY1OSIgZD0iTTU1LjkwNCAxNS40NTRhLjkzMy45MzMgMCAwIDAtLjgzNy0uNTJIMzkuMjAxYS45MzMuOTMzIDAgMCAwLS44OS42NTNsLTExLjIgMzUuNDY2YS45MzQuOTM0IDAgMCAwIDEuNjMxLjg0OGwyNy4wNjYtMzUuNDY3YS45MzQuOTM0IDAgMCAwIC4wOTYtLjk4Wk0zMC40OTkgNDYuNTIxbDkuMzg1LTI5LjcySDUzLjE4TDMwLjUgNDYuNTJaIi8+PC9zdmc+'
          }
          width={640}
          height={480}
          alt="image address"
          placeholder="blur"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/assets/image/address/image-3.jpg"
          blurDataURL={
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzAyMEY1OSIgZD0iTTU1Ljc4MyAxNS4yNyA0Ni40NSA0LjA3YS45MzUuOTM1IDAgMCAwLS43MTctLjMzNUgxMC4yNjdhLjkzMi45MzIgMCAwIDAtLjcxNy4zMzVMLjIxNyAxNS4yN2EuOTMuOTMgMCAwIDAgLjcxNyAxLjUzaDU0LjEzMmEuOTM1LjkzNSAwIDAgMCAuNzE3LTEuNTNabS01Mi44NTYtLjMzNkwxMC43MDQgNS42aDM0LjU5Mmw3Ljc3NyA5LjMzNEgyLjkyN1oiLz48cGF0aCBmaWxsPSIjMDIwRjU5IiBkPSJNMjguODYzIDQuMzFhLjkzMy45MzMgMCAwIDAtLjg2Mi0uNTc2SDEwLjI2OGEuOTMzLjkzMyAwIDAgMC0uODA3IDEuNDAzbDYuNTM0IDExLjJhLjkzNC45MzQgMCAwIDAgMS40NjYuMTlsMTEuMi0xMS4yYS45MzMuOTMzIDAgMCAwIC4yMDItMS4wMThaTTE2Ljk5NiAxNC4zNWwtNS4xMDQtOC43NWgxMy44NTVsLTguNzUxIDguNzVaIi8+PHBhdGggZmlsbD0iIzAyMEY1OSIgZD0iTTU1LjkwMyAxNS40NTNhLjkzMy45MzMgMCAwIDAtLjgzNy0uNTJILjkzNGEuOTM0LjkzNCAwIDAgMC0uNzQxIDEuNWwyNy4wNjYgMzUuNDY2YS45MzMuOTMzIDAgMCAwIDEuNDgyIDBsMjcuMDY2LTM1LjQ2NmEuOTM0LjkzNCAwIDAgMCAuMDk2LS45OFpNMjggNDkuNzk1IDIuODIgMTYuOGg1MC4zNmwtMjUuMTggMzIuOTk1WiIvPjxwYXRoIGZpbGw9IiMwMjBGNTkiIGQ9Im0yOC44OSA1MS4wNTEtMTEuMi0zNS40NjZhLjkzNC45MzQgMCAwIDAtLjg5LS42NTJILjkzNGEuOTM0LjkzNCAwIDAgMC0uNzQxIDEuNWwyNy4wNjYgMzUuNDY2YS45MzEuOTMxIDAgMCAwIDEuMTcxLjI2MS45MzMuOTMzIDAgMCAwIC40Ni0xLjEwOVpNMi44MiAxNi44MDFoMTMuMjk2bDkuMzg2IDI5LjcyTDIuODIgMTYuODAxWk00Ni41NDIgNC4yMDJhLjkzMi45MzIgMCAwIDAtLjgwOS0uNDY4SDI4YS45MzQuOTM0IDAgMCAwLS42NiAxLjU5M2wxMS4yIDExLjJhLjkzLjkzIDAgMCAwIC43OC4yNjUuOTMzLjkzMyAwIDAgMCAuNjg2LS40NTVsNi41MzMtMTEuMmEuOTM1LjkzNSAwIDAgMCAuMDAzLS45MzVabS03LjUzOCAxMC4xNDktOC43NTEtOC43NWgxMy44NTVsLTUuMTA0IDguNzVaIi8+PHBhdGggZmlsbD0iIzAyMEY1OSIgZD0iTTU1LjkwNCAxNS40NTRhLjkzMy45MzMgMCAwIDAtLjgzNy0uNTJIMzkuMjAxYS45MzMuOTMzIDAgMCAwLS44OS42NTNsLTExLjIgMzUuNDY2YS45MzQuOTM0IDAgMCAwIDEuNjMxLjg0OGwyNy4wNjYtMzUuNDY3YS45MzQuOTM0IDAgMCAwIC4wOTYtLjk4Wk0zMC40OTkgNDYuNTIxbDkuMzg1LTI5LjcySDUzLjE4TDMwLjUgNDYuNTJaIi8+PC9zdmc+'
          }
          width={640}
          height={480}
          alt="image address"
          placeholder="blur"
        />
      </SwiperSlide>
    </Swiper>
  );
});

SliderContacts.displayName = 'SliderContacts';
export default SliderContacts;
