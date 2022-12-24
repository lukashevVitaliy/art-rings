import React, { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import RatingReview from './rating-review';
import { useRouter } from 'next/router';
import Modal from './modal';
import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormReviews = memo(() => {
  const [star, setStar] = useState('');
  const [modalResponse, setModalResponse] = useState(false);
  const { query } = useRouter();
  const { articule } = query;

  // валидация формы
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm();

  // отправка отзыва на сервер
  const submitHandler = async ({ name, message, bind }) => {
    try {
      await axios.post('/api/reviews', {
        bind,
        name,
        message,
        rating: star,
        // images: [{ image: { file } }],
        // date: dateReview,
      });
      setModalResponse(true);
    } catch (err) {
      toast.error(`Ошибка: ${err}`);
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: '', message: '' });
      setStar('');
    }
  }, [formState.isSubmitSuccessful, reset]);

  return (
    <form className="mb-5" onSubmit={handleSubmit(submitHandler)}>
      <div className="flex flex-wrap mb-5 md:flex-nowrap">
        <input
          type="text"
          {...register('bind')}
          name="bind"
          defaultValue={articule}
          hidden
        />
        <div className="flex flex-col w-full mb-5 md:mb-0 md:w-2/3 md:mr-5">
          <label htmlFor="name" className="text-xs text-gray-400 mb-1">
            Ваше имя
          </label>
          <input
            type="text"
            {...register('name', {
              required: 'Пожалуйста, введите имя !!!',
              minLength: { value: 2, message: 'Введите более 2 символов !!!' },
              maxLength: {
                value: 15,
                message: 'Введите менее 15 символов !!!',
              },
            })}
            name="name"
          />
          {errors.name && (
            <div className="text-xs text-red-500">{errors.name.message}</div>
          )}
        </div>

        <button
          className="upload-btn relative overflow-hidden w-full flex items-center justify-center h-10 border bg-gray-200 hover:bg-gray-400 transition-all md:mt-5 md:w-1/3"
          type="button"
        >
          <Image
            src={'/assets/icons/scraper.svg'}
            width={18.05}
            height={19}
            alt="icons"
          />
          <span className="text-sm md:text-base font-normal ml-2">
            ЗАГРУЗИТЬ ФОТО
          </span>
          <input type="file" name="file" {...register('file')} disabled />
        </button>
      </div>
      <div className="flex flex-col mb-5">
        <label htmlFor="message" className="text-xs text-gray-400 mb-1">
          Ваш отзыв
        </label>
        <textarea
          className="h-48"
          name="message"
          {...register('message', {
            required: 'Пожалуйста, введите отзыв !!!',
            minLength: { value: 5, message: 'Введите более 5 символов !!!' },
            maxLength: {
              value: 175,
              message: 'Введите менее 175 символов !!!',
            },
          })}
        />
        {errors.message && (
          <div className="text-xs text-red-500">{errors.message.message}</div>
        )}
      </div>
      <div className="flex flex-wrap  md:flex-nowrap">
        <div className="w-full mr-5 mb-5 md:mb-0 md:w-2/5">
          <p className="text-xs text-gray-400 mb-1">Ваша оценка</p>
          <RatingReview star={star} setStar={setStar} />
        </div>
        <button className="w-full inline-flex items-center justify-center border border-blue-900 text-sm md:text-base text-blue-900 font-semibold uppercase py-3 md:py-4 hover:border-blue-600 hover:text-blue-600 transition-all md:w-3/5">
          Оставить отзыв
        </button>
      </div>
      <Modal active={modalResponse} setActive={setModalResponse}>
        <h1 className="text-center mb-5">ВАШ ОТЗЫВ ПРИНЯТ!</h1>
        <p className="text-sm md:text-base font-normal text-center text-gray-400 mb-12">
          В ближайшее время отзыв будет опубликован.
        </p>
        <button className="w-full sm:w-1/2 block mx-auto bg-blue-900 text-sm md:text-base font-normal md:font-semibold text-white uppercase py-3 md:py-5 hover:bg-blue-600 transition-all">
          <Link href="/">
            <a>ВЕРНУТЬСЯ В КАТАЛОГ</a>
          </Link>
        </button>
      </Modal>
    </form>
  );
});

FormReviews.displayName = 'FormReviews';
export default FormReviews;

FormReviews.propsTypes = {
  submitHandler: PropTypes.func,
};
FormReviews.propsTypes = {
  submitHandler() {},
};
