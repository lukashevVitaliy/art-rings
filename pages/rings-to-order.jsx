import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import IMask from 'imask';

import Breadcrumbs from '../components/breadcrumbs';
import Layout from '../components/layout';
import SliderWorkExamples from '../components/sliders/slider-work-examples';
import Modal from '../components/modal';
import Link from 'next/link';

export default function RingsToOrder() {
  const [modalResponse, setModalResponse] = useState(false);

  // валидация формы
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm();

  // отправка отзыва на сервер
  const [loading, setLoading] = useState(false);
  const submitHandler = async ({ name, email, phone, comment }) => {
    try {
      setLoading(true);
      await axios.post('/api/estimate', {
        name,
        email,
        phone,
        comment,
      });
      setLoading(false);
      setModalResponse(true);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: '',
        email: '',
        phone: '',
        comment: '',
      });
    }
  }, [formState.isSubmitSuccessful, reset]);

  const getInputValue = () => {
    let element = document.getElementById('phone');
    let maskOptions = {
      mask: '+{7} (000) 000-00-00',
    };
    let mask = new IMask(element, maskOptions);
  };

  return (
    <Layout title="На Заказ">
      <Breadcrumbs title="На заказ" path={'/rings-to-order'} />
      <div
        className="w-full bg-center bg-no-repeat bg-cover scroll-smooth"
        style={{ backgroundImage: "url('/assets/bg/order_bg.jpg')" }}
      >
        <div className="container mx-auto px-4 py-6 sm:py-12 md:py-24 lg:py-48">
          <div className="w-2/3 md:w-1/2">
            <h1 className="text-left mb-3 md:mb-5">
              СОЗДАЙТЕ СВОЕ УНИКАЛЬНОЕ УКРАШЕНИЕ
            </h1>
            <p className="mb-5 md:mb-10 text-sm md:text-base">
              Загрузите фото с любым украшением и мы с радостью изготовим его
              для вас
            </p>
            <Link href="#request">
              <a className="text-xs md:text-base font-normal lg:font-semibold text-white px-3 py-2 lg:px-10 lg:py-5 tracking-wider uppercase bg-blue-900 hover:bg-blue-600 transition-all">
                РАССЧИТАТЬ СТОИМОСТЬ
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 my-6 md:my-12">
        <h1 className="text-left mb-6 md:mb-12">ПРИМЕРЫ РАБОТ</h1>
        <SliderWorkExamples />
      </div>

      <div className="bg-blue-900 mb-6 md:mb-12">
        <div className="container mx-auto px-4 py-6 md:py-12">
          <h1 className="text-white text-center mb-6 md:mb-12">
            КАК МЫ ЭТО ДЕЛАЕМ
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            <div
              className="relative w-full bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: "url('/assets/bg/stage-1.png')" }}
            >
              <div className="h-72 md:h-96 py-5 px-7 md:py-10 md:px-14">
                <p className="text-lg md:text-2xl text-gray-400 tracking-wider mb-5">
                  1 этап
                </p>
                <h2 className="text-blue-900 mb-3">СОЗДАНИЕ КОНЦЕПЦИИ</h2>
                <p className="mb-5 text-sm md:base">
                  На этом этапе мы помогаем Вам определиться с концепцией
                  будущего украшения, металлом, подбираем вставки, рассчитываем
                  примерную стоимость готового изделия.
                </p>
                <span className="absolute bottom-5 left-7 md:bottom-10 md:left-14 text-sm md:text-base text-gray-400">
                  1-3 дня
                </span>
              </div>
            </div>

            <div
              className="relative w-full bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: "url('/assets/bg/stage-2.png')" }}
            >
              <div className="h-72 md:h-96 py-5 px-7 md:py-10 md:px-14">
                <p className="text-lg md:text-2xl text-gray-400 tracking-wider mb-5">
                  2 этап
                </p>
                <h2 className="text-blue-900 mb-3">РАЗРАБОТКА ДИЗАЙНА</h2>
                <p className="mb-5 text-sm md:base">
                  Исходя из информации, полученной от Вас ранее, дизайнеры
                  готовят эскизы будущего изделия.
                </p>
                <span className="absolute bottom-5 left-7 md:bottom-10 md:left-14 text-sm md:text-base text-gray-400">
                  5-15 дней
                </span>
              </div>
            </div>

            <div
              className="relative w-full bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: "url('/assets/bg/stage-3.png')" }}
            >
              <div className="h-72 md:h-96 py-5 px-7 md:py-10 md:px-14">
                <p className="text-lg md:text-2xl text-gray-400 tracking-wider mb-5">
                  3 этап
                </p>
                <h2 className="text-blue-900 mb-3">изготовление</h2>
                <p className="mb-5 text-sm md:base">
                  Согласованный дизайн передается ювелирам, которые
                  изготавливают будущее украшение.
                </p>
                <span className="absolute bottom-5 left-7 md:bottom-10 md:left-14 text-sm md:text-base text-gray-400">
                  1-3 дня
                </span>
              </div>
            </div>

            <div
              className="relative w-full bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: "url('/assets/bg/stage-4.png')" }}
            >
              <div className="h-72 md:h-96 py-5 px-7 md:py-10 md:px-14">
                <p className="text-lg md:text-2xl text-gray-400 tracking-wider mb-5">
                  4 этап
                </p>
                <h2 className="text-blue-900 mb-3">ДОСТАВКА и оплата</h2>
                <p className="mb-5 text-sm md:base">
                  Выполненный заказ передается клиенту. Заказ комплектуется
                  всеми необходимыми сертификатами (при наличии), гарантией,
                  подарочным футляром.
                </p>
                <span className="absolute bottom-5 left-7 md:bottom-10 md:left-14 text-sm md:text-base text-gray-400">
                  1-3 дня
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-6 md:mb-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col">
            <Link href="#">
              <a name="request"></a>
            </Link>
            <h1 className="text-center mb-6 md:mb-12">ОСТАВИТЬ ЗАЯВКУ</h1>
            <form
              className="grid grid-cols-1 md:grid-cols-4 gap-5"
              onSubmit={handleSubmit(submitHandler)}
            >
              <div className="flex flex-col col-start-1 col-end-5 lg:col-start-1 lg:col-end-3">
                <label
                  htmlFor="name"
                  className="text-xs font-normal text-gray-400 mb-1"
                >
                  Ваше имя
                </label>
                <input
                  name="name"
                  type="text"
                  {...register('name', {
                    required: 'Пожалуйста, введите имя !!!',
                    minLength: {
                      value: 2,
                      message: 'Введите более 2 символов !!!',
                    },
                    maxLength: {
                      value: 15,
                      message: 'Введите менее 15 символов !!!',
                    },
                  })}
                />
                {errors.name && (
                  <div className="text-xs text-red-500">
                    {errors.name.message}
                  </div>
                )}
              </div>
              <div className="col-start-1 col-end-5 lg:col-start-3 lg:col-end-5 lg:mt-5">
                <button
                  className="upload-btn relative py-2 border border w-full flex items-center justify-center bg-gray-200 hover:bg-gray-400 transition-all"
                  type="button"
                >
                  <Image
                    src="/assets/icons/scraper.svg"
                    width={18}
                    height={19}
                    alt="icons download"
                  />
                  <span className="text-xs md:text-base font-normal uppercase ml-3">
                    ЗАГРУЗИТЬ ФОТО
                  </span>
                  <input type="file" disabled />
                </button>
              </div>

              <div className="flex flex-col col-start-1 col-end-5 lg:col-start-1 lg:col-end-3">
                <label
                  htmlFor="email"
                  className="text-xs font-normal text-gray-400 mb-1"
                >
                  Ваш e-mail
                </label>
                <input
                  name="email"
                  type="email"
                  {...register('email', {
                    required: 'Пожалуйста, введите e-mail !!!',
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                      message: 'Пожалуйста, введите корректный e-mail !!!',
                    },
                  })}
                />
                {errors.email && (
                  <div className="text-xs text-red-500">
                    {errors.email.message}
                  </div>
                )}
              </div>

              <div className="flex flex-col col-start-1 col-end-5 lg:col-start-3 lg:col-end-5">
                <label
                  htmlFor="phone"
                  className="text-xs font-normal text-gray-400 mb-1"
                >
                  Ваш телефон
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+7 (000) 000-00-00"
                  {...register('phone', {
                    required: 'Пожалуйста, введите номер телефона !!!',
                    minLength: {
                      value: 18,
                      message: 'Введите 18 символов !!!',
                    },
                    maxLength: {
                      value: 18,
                      message: 'Введите менее 18 символов !!!',
                    },
                  })}
                  onChange={getInputValue}
                />
                {errors.phone && (
                  <div className="text-xs text-red-500">
                    {errors.phone.message}
                  </div>
                )}
              </div>

              <div className="flex flex-col col-start-1 col-end-5">
                <label
                  htmlFor="comment"
                  className="text-xs font-normal text-gray-400 mb-1"
                >
                  Комментарий
                </label>
                <textarea
                  className="resize-none h-48"
                  name="comment"
                  {...register('comment', {
                    required: 'Пожалуйста, введите комментарий !!!',
                    minLength: {
                      value: 10,
                      message: 'Введите более 10 символов !!!',
                    },
                    maxLength: {
                      value: 1000,
                      message: 'Введите менее 1000 символов !!!',
                    },
                  })}
                />
                {errors.comment && (
                  <div className="text-xs text-red-500">
                    {errors.comment.message}
                  </div>
                )}
              </div>

              <button className="col-start-1 col-end-5 lg:col-start-2 lg:col-end-4 text-xs md:text-base font-normal lg:font-semibold bg-blue-900 text-white tracking-wider uppercase py-5 hover:bg-blue-600 transition-all">
                Рассчитать стоимость
              </button>
            </form>
          </div>
          <div className="hidden md:col-span-2 lg:col-span-1 md:flex md:justify-end">
            <Image
              src="/assets/image/discount/discount-cart-vertical.jpg"
              width={274}
              height={550}
              alt="banner discount"
            />
          </div>
        </div>
      </div>
      <Modal active={modalResponse} setActive={setModalResponse}>
        <h1 className="text-center mb-5">ВАША ЗАЯВКА ПРИНЯТА!</h1>
        <p className="text-center text-gray-400 mb-12">
          После рассчета стоимости изделия, с вами свяжется оператор.
        </p>
        <button className="w-1/2 block mx-auto bg-blue-900 text-base font-semibold text-white uppercase py-5 hover:bg-blue-600 transition-all">
          <Link href="/">
            <a>ВЕРНУТЬСЯ В КАТАЛОГ</a>
          </Link>
        </button>
      </Modal>
    </Layout>
  );
}

RingsToOrder.propsTypes = {
  submitHandler: PropTypes.func,
};
RingsToOrder.defaultTypes = {
  submitHandler() {},
};
