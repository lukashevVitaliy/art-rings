import React, { useContext, useState, memo } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Breadcrumbs from '../../components/breadcrumbs';
import Layout from '../../components/layout';
// import data from '../../utils/data';
import { BsFillHeartFill } from 'react-icons/bs';
import SliderRingId from '../../components/sliders/slider-ring-id';
import TabsRingId from '../../components/tabs-ring-id';
import { Store } from '../../utils/store';
import db from '../../utils/db';
import Ring from '../../models/ring-model';
import Review from '../../models/review-model';
import { enumerate } from '../../components/utils';

const WeddingRingScreen = memo((props) => {
  const { ring, reviews } = props;

  // для передачи value в корзину
  const [sizeRingWoman, setSizeRingWoman] = useState('');
  const [sizeRingMan, setSizeRingMan] = useState('');
  // получение данных из Хранилища
  const { state, dispatch } = useContext(Store);
  // получение параметра идентификатора
  const router = useRouter();

  // const { query } = useRouter();
  // const { articule } = query;
  // const ring = data.rings.find((x) => x.articule === articule);
  if (!ring) {
    return (
      <Layout title="Ring Not Found">
        <div className="container mx-auto mb-5 text-xl font-semibold uppercase">
          Кольцо не найдено !!!
        </div>
      </Layout>
    );
  }

  const {
    articule,
    rating,
    colorImage,
    priceNew,
    priceOld,
    currency,
    sampleOffice,
    features,
    description,
  } = ring;

  // const weddingReviews = reviews.filter((x) => x.bind === articule);
  const reviewsRings = reviews.filter((x) => x.bind === articule);

  // ф-я отправки товара в корзину
  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find(
      (x) => x.articule === ring.articule
    );
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/rings/${ring._id}`);

    if (data.countInStock < quantity) {
      toast.error('Извините. Товара нет в наличии.');
    }

    if (sizeRingWoman || sizeRingMan) {
      dispatch({
        type: 'CART_ADD_ITEM',
        payload: { ...ring, quantity, sizeRingWoman, sizeRingMan },
      });
      router.push('/cart');
    } else {
      toast.warn('Выберите размер кольца...');
    }

    if (sizeRingWoman && sizeRingMan) {
      dispatch({
        type: 'CART_ADD_ITEM',
        payload: {
          ...ring,
          quantity: quantity + 1,
          sizeRingWoman,
          sizeRingMan,
        },
      });
      router.push('/cart');
    }
  };

  // добавление конкретного товара в избранные
  const handleClickFavorites = () => {
    dispatch({ type: 'FAVORITES_ADD_ITEM', payload: ring });
    toast.success('Товар добавлен...');
  };

  return (
    <Layout title="Wedding Rings">
      <Breadcrumbs
        title="Обручальные кольца"
        path="/wedding-rings"
        title2={`Арт. ${ring.articule}`}
      />
      <div className="container mx-auto px-4">
        <div className="border-b border-gray-200">
          <div className="flex items-center justify-between w-full sm:w-2/3 md:w-3/5 lg:w-2/5">
            <p className="xl:text-xl 2xl:text-2xl font-semibold uppercase">
              Арт. {ring.articule}
            </p>
            <div className="text-base text-gray-400">
              <div>
                <span className="text-orange-400 text-xs sm:text-sm">
                  {rating}
                </span>
                <span className="ml-1 md:ml-2 text-xs sm:text-sm font-light">
                  {reviewsRings.length}{' '}
                  {enumerate(reviewsRings.length, [
                    'отзыв',
                    'отзыва',
                    'отзывов',
                  ])}
                </span>
              </div>
            </div>
            <button
              className="flex items-center text-gray-400"
              onClick={handleClickFavorites}
            >
              <span>
                <BsFillHeartFill className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 mr-1 sm:mr-2 active:text-red-800 transition-all" />
              </span>
              <span className="text-xs sm:text-sm font-light">В избранное</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 my-5 md:grid-cols-12">
          <div className="grid-cols-1 md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-8">
            {colorImage.length >= 2 && <SliderRingId images={colorImage} />}
            {colorImage.length === 1 && (
              <div className="flex justify-center">
                {colorImage.map((item) => (
                  <Image
                    key={item.image}
                    src={item.image}
                    width={690}
                    height={690}
                    alt="ring"
                    priority
                  />
                ))}
              </div>
            )}
          </div>
          <div className="grid-cols-1 md:col-start-7 md:col-end-13 lg:col-start-9 lg:col-end-13">
            <div className="grid col-span-1 md:grid-cols-2 mb-3 lg:mb-5">
              <p className="grid col-span-1 md:col-start-1 md:col-end-2 text-lg md:text-2xl lg:text-4xl font-semibold text-left">
                {Intl.NumberFormat().format(priceNew)}&nbsp;{currency}
              </p>
              {priceOld > 0 && (
                <p className="relative grid col-span-1 text-sm lg:text-xl font-semibold text-gray-400 text-left  md:col-start-1 md:col-end-2">
                  {Intl.NumberFormat().format(priceOld)}&nbsp;{currency}
                  <span className="absolute inset-y-3 -rotate-6 left-0 w-1/4 md:w-full h-px bg-red-400 "></span>
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-5 mb-3 md:mb-5">
              <div className="flex flex-col">
                <label
                  className="mb-2 text-sm lg:text-base"
                  htmlFor="woman size ring"
                >
                  Размер (жен.)
                </label>
                <select
                  className="w-1/2 sm:w-1/4 md:w-2/3 lg:w-1/2 xl:w-2/5 text-sm lg:text-base text-center text-gray-400"
                  name="woman size ring"
                  onChange={(e) => setSizeRingWoman(e.target.value)}
                >
                  <option value="">---</option>
                  <option value="14.00">14.00</option>
                  <option value="14.25">14.25</option>
                  <option value="14.50">14.50</option>
                  <option value="14.75">14.75</option>
                  <option value="15.00">15.00</option>
                  <option value="15.25">15.25</option>
                  <option value="15.50">15.50</option>
                  <option value="15.75">15.75</option>
                  <option value="16.00">16.00</option>
                  <option value="16.25">16.25</option>
                  <option value="16.50">16.50</option>
                  <option value="16.75">16.75</option>
                  <option value="17.00">17.00</option>
                  <option value="17.25">17.25</option>
                  <option value="17.50">17.50</option>
                  <option value="17.75">17.75</option>
                  <option value="18.00">18.00</option>
                  <option value="18.25">18.25</option>
                  <option value="18.50">18.50</option>
                  <option value="18.75">18.75</option>
                  <option value="19.00">19.00</option>
                  <option value="19.25">19.25</option>
                  <option value="19.50">19.50</option>
                  <option value="19.75">19.75</option>
                  <option value="20.00">20.00</option>
                  <option value="20.25">20.25</option>
                  <option value="20.50">20.50</option>
                  <option value="20.75">20.75</option>
                  <option value="21.00">21.00</option>
                  <option value="21.25">21.25</option>
                  <option value="21.50">21.50</option>
                  <option value="21.75">21.75</option>
                  <option value="22.00">22.00</option>
                  <option value="22.25">22.25</option>
                  <option value="22.50">22.50</option>
                  <option value="22.75">22.75</option>
                  <option value="23.00">23.00</option>
                  <option value="23.25">23.25</option>
                  <option value="23.50">23.50</option>
                  <option value="23.75">23.75</option>
                  <option value="24.00">24.00</option>
                  <option value="24.25">24.25</option>
                  <option value="24.50">24.50</option>
                  <option value="24.75">24.75</option>
                  <option value="25.00">25.00</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  className="mb-2 text-sm lg:text-base"
                  htmlFor="man size ring"
                >
                  Размер (муж.)
                </label>
                <select
                  className="w-1/2 sm:w-1/4 md:w-2/3 lg:w-1/2 xl:w-2/5 text-sm lg:text-base text-center text-gray-400"
                  name="man size ring"
                  onChange={(e) => setSizeRingMan(e.target.value)}
                >
                  <option value="">---</option>
                  <option value="14.00">14.00</option>
                  <option value="14.25">14.25</option>
                  <option value="14.50">14.50</option>
                  <option value="14.75">14.75</option>
                  <option value="15.00">15.00</option>
                  <option value="15.25">15.25</option>
                  <option value="15.50">15.50</option>
                  <option value="15.75">15.75</option>
                  <option value="16.00">16.00</option>
                  <option value="16.25">16.25</option>
                  <option value="16.50">16.50</option>
                  <option value="16.75">16.75</option>
                  <option value="17.00">17.00</option>
                  <option value="17.25">17.25</option>
                  <option value="17.50">17.50</option>
                  <option value="17.75">17.75</option>
                  <option value="18.00">18.00</option>
                  <option value="18.25">18.25</option>
                  <option value="18.50">18.50</option>
                  <option value="18.75">18.75</option>
                  <option value="19.00">19.00</option>
                  <option value="19.25">19.25</option>
                  <option value="19.50">19.50</option>
                  <option value="19.75">19.75</option>
                  <option value="20.00">20.00</option>
                  <option value="20.25">20.25</option>
                  <option value="20.50">20.50</option>
                  <option value="20.75">20.75</option>
                  <option value="21.00">21.00</option>
                  <option value="21.25">21.25</option>
                  <option value="21.50">21.50</option>
                  <option value="21.75">21.75</option>
                  <option value="22.00">22.00</option>
                  <option value="22.25">22.25</option>
                  <option value="22.50">22.50</option>
                  <option value="22.75">22.75</option>
                  <option value="23.00">23.00</option>
                  <option value="23.25">23.25</option>
                  <option value="23.50">23.50</option>
                  <option value="23.75">23.75</option>
                  <option value="24.00">24.00</option>
                  <option value="24.25">24.25</option>
                  <option value="24.50">24.50</option>
                  <option value="24.75">24.75</option>
                  <option value="25.00">25.00</option>
                </select>
              </div>
            </div>
            <button
              className="inline-flex items-center justify-center bg-blue-900 w-full py-2 md:py-3 lg:py-4 mb-3 md:mb-5 text-sm md:text-base text-white font-normal lg:font-semibold tracking-wider uppercase hover:bg-blue-600 transition-all"
              onClick={addToCartHandler}
            >
              <Image
                src={'/assets/icons/shopping-cart.svg'}
                width={24}
                height={24}
                alt="icon cart"
              />
              <span className="ml-2">в корзину</span>
            </button>
            <button className="inline-flex items-center justify-center border border-blue-900 w-full py-2 md:py-3 lg:py-4 mb-3 md:mb-5 text-sm md:text-base text-blue-900 font-normal lg:font-semibold tracking-wider uppercase hover:border-blue-600 hover:text-blue-600 transition-all">
              <Image
                src={'/assets/icons/social/wa.svg'}
                width={25}
                height={25}
                alt="icon WhatsApp"
              />
              <span>написать whatsapp</span>
            </button>
            <div className="text-sm font-light">
              {sampleOffice && (
                <p className="flex items-center font-normal text-sm text-gray-400 mb-1">
                  <Image
                    src={'/assets/icons/checkbox-001.svg'}
                    width={15}
                    height={15}
                    alt="checkbox in stock"
                  />
                  <span className="ml-2">Образцы в офисе: Да</span>
                </p>
              )}
              {features.map(
                ({ composition, inserts, material, view, weight }) => (
                  <ul
                    key={composition}
                    className="text-sm font-light border-b border-gray-200 pb-3 md:pb-5  mb-3 md:mb-5"
                  >
                    <li>Вес: {weight}</li>
                    <li>Материал: {material}</li>
                    <li>Вставки: {inserts}</li>
                    <li>Изготовим из: {composition}</li>
                    <li>Вид: {view}</li>
                  </ul>
                )
              )}
            </div>
            <div className="text-sm font-light">
              <p className="font-normal">Внесём любые правки в дизайн:</p>
              <ul>
                <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:content-['-'] ">
                  ширина, толщина, камни (добавить, убрать, размер, цвет)
                </li>
                <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:content-['-'] ">
                  цвет колец (одноцветные, двухцветные)
                </li>
                <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:content-['-'] ">
                  поверхность (глянцевая, матовая, текстурированная и т.д.)
                </li>
                <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:content-['-'] ">
                  можно без гравировки эмблемы (лебеди)
                </li>
                <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:content-['-'] ">
                  возможно изготовление в другой пробе и из других драгоценных
                  металлов
                </li>
                <li className="relative pl-4 before:absolute before:left-0 before:top-0 before:content-['-'] ">
                  возможно нанести свою гравировку
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-6 md:mb-12">
          <div className="grid-cols-1 col-start-1 col-end-12 lg:col-start-1 lg:col-end-8">
            <TabsRingId description={description} reviewsRings={reviewsRings} />
          </div>
          <div className="grid-cols-1 col-start-1 col-end-12 lg:col-start-9 lg:col-end-13">
            <div className="w-full lg:hidden">
              <Image
                src="/assets/image/discount/discount-cart.jpg"
                blurDataURL={
                  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzAyMEY1OSIgZD0iTTU1Ljc4MyAxNS4yNyA0Ni40NSA0LjA3YS45MzUuOTM1IDAgMCAwLS43MTctLjMzNUgxMC4yNjdhLjkzMi45MzIgMCAwIDAtLjcxNy4zMzVMLjIxNyAxNS4yN2EuOTMuOTMgMCAwIDAgLjcxNyAxLjUzaDU0LjEzMmEuOTM1LjkzNSAwIDAgMCAuNzE3LTEuNTNabS01Mi44NTYtLjMzNkwxMC43MDQgNS42aDM0LjU5Mmw3Ljc3NyA5LjMzNEgyLjkyN1oiLz48cGF0aCBmaWxsPSIjMDIwRjU5IiBkPSJNMjguODYzIDQuMzFhLjkzMy45MzMgMCAwIDAtLjg2Mi0uNTc2SDEwLjI2OGEuOTMzLjkzMyAwIDAgMC0uODA3IDEuNDAzbDYuNTM0IDExLjJhLjkzNC45MzQgMCAwIDAgMS40NjYuMTlsMTEuMi0xMS4yYS45MzMuOTMzIDAgMCAwIC4yMDItMS4wMThaTTE2Ljk5NiAxNC4zNWwtNS4xMDQtOC43NWgxMy44NTVsLTguNzUxIDguNzVaIi8+PHBhdGggZmlsbD0iIzAyMEY1OSIgZD0iTTU1LjkwMyAxNS40NTNhLjkzMy45MzMgMCAwIDAtLjgzNy0uNTJILjkzNGEuOTM0LjkzNCAwIDAgMC0uNzQxIDEuNWwyNy4wNjYgMzUuNDY2YS45MzMuOTMzIDAgMCAwIDEuNDgyIDBsMjcuMDY2LTM1LjQ2NmEuOTM0LjkzNCAwIDAgMCAuMDk2LS45OFpNMjggNDkuNzk1IDIuODIgMTYuOGg1MC4zNmwtMjUuMTggMzIuOTk1WiIvPjxwYXRoIGZpbGw9IiMwMjBGNTkiIGQ9Im0yOC44OSA1MS4wNTEtMTEuMi0zNS40NjZhLjkzNC45MzQgMCAwIDAtLjg5LS42NTJILjkzNGEuOTM0LjkzNCAwIDAgMC0uNzQxIDEuNWwyNy4wNjYgMzUuNDY2YS45MzEuOTMxIDAgMCAwIDEuMTcxLjI2MS45MzMuOTMzIDAgMCAwIC40Ni0xLjEwOVpNMi44MiAxNi44MDFoMTMuMjk2bDkuMzg2IDI5LjcyTDIuODIgMTYuODAxWk00Ni41NDIgNC4yMDJhLjkzMi45MzIgMCAwIDAtLjgwOS0uNDY4SDI4YS45MzQuOTM0IDAgMCAwLS42NiAxLjU5M2wxMS4yIDExLjJhLjkzLjkzIDAgMCAwIC43OC4yNjUuOTMzLjkzMyAwIDAgMCAuNjg2LS40NTVsNi41MzMtMTEuMmEuOTM1LjkzNSAwIDAgMCAuMDAzLS45MzVabS03LjUzOCAxMC4xNDktOC43NTEtOC43NWgxMy44NTVsLTUuMTA0IDguNzVaIi8+PHBhdGggZmlsbD0iIzAyMEY1OSIgZD0iTTU1LjkwNCAxNS40NTRhLjkzMy45MzMgMCAwIDAtLjgzNy0uNTJIMzkuMjAxYS45MzMuOTMzIDAgMCAwLS44OS42NTNsLTExLjIgMzUuNDY2YS45MzQuOTM0IDAgMCAwIDEuNjMxLjg0OGwyNy4wNjYtMzUuNDY3YS45MzQuOTM0IDAgMCAwIC4wOTYtLjk4Wk0zMC40OTkgNDYuNTIxbDkuMzg1LTI5LjcySDUzLjE4TDMwLjUgNDYuNTJaIi8+PC9zdmc+'
                }
                width={690}
                height={84}
                alt="banner discount"
                placeholder="blur"
              />
            </div>
            <div className="hidden lg:block">
              <Image
                src="/assets/image/discount/discount-cart-vertical.jpg"
                blurDataURL={
                  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzAyMEY1OSIgZD0iTTU1Ljc4MyAxNS4yNyA0Ni40NSA0LjA3YS45MzUuOTM1IDAgMCAwLS43MTctLjMzNUgxMC4yNjdhLjkzMi45MzIgMCAwIDAtLjcxNy4zMzVMLjIxNyAxNS4yN2EuOTMuOTMgMCAwIDAgLjcxNyAxLjUzaDU0LjEzMmEuOTM1LjkzNSAwIDAgMCAuNzE3LTEuNTNabS01Mi44NTYtLjMzNkwxMC43MDQgNS42aDM0LjU5Mmw3Ljc3NyA5LjMzNEgyLjkyN1oiLz48cGF0aCBmaWxsPSIjMDIwRjU5IiBkPSJNMjguODYzIDQuMzFhLjkzMy45MzMgMCAwIDAtLjg2Mi0uNTc2SDEwLjI2OGEuOTMzLjkzMyAwIDAgMC0uODA3IDEuNDAzbDYuNTM0IDExLjJhLjkzNC45MzQgMCAwIDAgMS40NjYuMTlsMTEuMi0xMS4yYS45MzMuOTMzIDAgMCAwIC4yMDItMS4wMThaTTE2Ljk5NiAxNC4zNWwtNS4xMDQtOC43NWgxMy44NTVsLTguNzUxIDguNzVaIi8+PHBhdGggZmlsbD0iIzAyMEY1OSIgZD0iTTU1LjkwMyAxNS40NTNhLjkzMy45MzMgMCAwIDAtLjgzNy0uNTJILjkzNGEuOTM0LjkzNCAwIDAgMC0uNzQxIDEuNWwyNy4wNjYgMzUuNDY2YS45MzMuOTMzIDAgMCAwIDEuNDgyIDBsMjcuMDY2LTM1LjQ2NmEuOTM0LjkzNCAwIDAgMCAuMDk2LS45OFpNMjggNDkuNzk1IDIuODIgMTYuOGg1MC4zNmwtMjUuMTggMzIuOTk1WiIvPjxwYXRoIGZpbGw9IiMwMjBGNTkiIGQ9Im0yOC44OSA1MS4wNTEtMTEuMi0zNS40NjZhLjkzNC45MzQgMCAwIDAtLjg5LS42NTJILjkzNGEuOTM0LjkzNCAwIDAgMC0uNzQxIDEuNWwyNy4wNjYgMzUuNDY2YS45MzEuOTMxIDAgMCAwIDEuMTcxLjI2MS45MzMuOTMzIDAgMCAwIC40Ni0xLjEwOVpNMi44MiAxNi44MDFoMTMuMjk2bDkuMzg2IDI5LjcyTDIuODIgMTYuODAxWk00Ni41NDIgNC4yMDJhLjkzMi45MzIgMCAwIDAtLjgwOS0uNDY4SDI4YS45MzQuOTM0IDAgMCAwLS42NiAxLjU5M2wxMS4yIDExLjJhLjkzLjkzIDAgMCAwIC43OC4yNjUuOTMzLjkzMyAwIDAgMCAuNjg2LS40NTVsNi41MzMtMTEuMmEuOTM1LjkzNSAwIDAgMCAuMDAzLS45MzVabS03LjUzOCAxMC4xNDktOC43NTEtOC43NWgxMy44NTVsLTUuMTA0IDguNzVaIi8+PHBhdGggZmlsbD0iIzAyMEY1OSIgZD0iTTU1LjkwNCAxNS40NTRhLjkzMy45MzMgMCAwIDAtLjgzNy0uNTJIMzkuMjAxYS45MzMuOTMzIDAgMCAwLS44OS42NTNsLTExLjIgMzUuNDY2YS45MzQuOTM0IDAgMCAwIDEuNjMxLjg0OGwyNy4wNjYtMzUuNDY3YS45MzQuOTM0IDAgMCAwIC4wOTYtLjk4Wk0zMC40OTkgNDYuNTIxbDkuMzg1LTI5LjcySDUzLjE4TDMwLjUgNDYuNTJaIi8+PC9zdmc+'
                }
                width={294}
                height={595}
                alt="banner discount"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
});

WeddingRingScreen.displayName = 'WeddingRingScreen';
export default WeddingRingScreen;

// получение всех колец из файла mongodb
export async function getServerSideProps(context) {
  const { params } = context;
  const { articule } = params;

  await db.connect();
  const ring = await Ring.findOne({ articule }).lean();
  await db.disconnect();
  await db.connect();
  const reviews = await Review.find().lean();
  await db.disconnect();
  return {
    props: {
      ring: JSON.parse(JSON.stringify(ring)),
      reviews: JSON.parse(JSON.stringify(reviews)),
    },
  };
}

// проверка данных props
WeddingRingScreen.propsTypes = {
  rings: PropTypes.arrayOf(
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
  totalPages: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  firstContentIndex: PropTypes.number.isRequired,
  lastContentIndex: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,

  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      bind: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,

  state: PropTypes.object.isRequired,
  addToCartHandler: PropTypes.func.isRequired,
  handleClickFavorites: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

WeddingRingScreen.defaultTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      bind: '',
      name: '',
      rating: '',
      message: '',
    })
  ).isRequired,
  addToCartHandler() {},
  handleClickFavorites() {},
};
