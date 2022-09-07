import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import IMask from 'imask';
import { useForm } from 'react-hook-form';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaTrashAlt } from 'react-icons/fa';
import Breadcrumbs from '../components/breadcrumbs';
import Layout from '../components/layout';
import { Store } from '../utils/store';
import SliderRingInCart from '../components/sliders/slider-ring-in-cart';
import Modal from '../components/modal';

function CartScreen() {
  const [modalActive, setModalActive] = useState(false);
  const [modalResponse, setModalResponse] = useState(false);
  const { state, dispatch } = useContext(Store);
  const { cartItems } = state.cart;

  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
    toast.success('Товар удален...');
  };
  const removeItemsHandler = () => {
    dispatch({ type: 'CART_RESET' });
  };

  // обновление кол-ва товара в корзине
  const updateCartHandler = async (item, qty) => {
    const quantity = Number(qty);
    const { data } = await axios.get(`/api/rings/${item._id}`);
    // добавляем после получение из mongodb
    if (data.countInStock < quantity) {
      toast.error('Извините. Товара нет в наличии.');
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
    toast.success('Данные обновлены...');
  };

  const handleClickOrder = () => {
    setModalActive(true);
  };

  // Стоимость итого заказа, с учетом новой цены
  const totalOrder = cartItems.reduce((a, c) => a + c.quantity * c.priceNew, 0);
  // Стоимость итого заказа, с учетом предыдущей цены
  const totalOldOrder = cartItems.reduce(
    (a, c) => a + c.quantity * c.priceOld,
    0
  );

  // валидация формы
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm();

  // отправка отзыва на сервер
  const submitHandler = async ({
    name,
    phone,
    email,
    city,
    location,
    isPrivatePolicy,
  }) => {
    try {
      await axios.post('/api/orders', {
        name,
        phone,
        email,
        city,
        location,
        isPrivatePolicy,
        totalOrder,
        cartItems,
      });
      setModalResponse(true);
    } catch (err) {
      toast.error(`Ошибка: ${err}`);
      console.log(err);
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: '',
        phone: '',
        email: '',
        city: '',
        location: '',
        isPrivatePolicy: '',
      });
      dispatch({ type: 'CART_RESET' });
      setModalActive(false);
    }
  }, [dispatch, formState.isSubmitSuccessful, reset]);

  const getInputValue = () => {
    let element = document.getElementById('phone');
    let maskOptions = {
      mask: '+{7} (000) 000-00-00',
    };
    let mask = new IMask(element, maskOptions);
    console.log(mask);
  };

  return (
    <Layout title="Cart Page">
      <Breadcrumbs title="Корзина" path={'/cart'} />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-3 md:mb-5 md:mb-10">
          <h2>Корзина</h2>
          <button
            className="text-xs md:text-sm lg:text-base font-normal md:font-semibold text-gray-400 left-5 uppercase hover:text-blue-900"
            type="button"
            onClick={removeItemsHandler}
          >
            Удалить все
          </button>
        </div>
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-12 gap-y-2 md:gap-y-0 md:gap-x-10 lg:gap-x-5 mb-6 md:mb-12">
            <div className="overflow-x-auto col-start-1 col-end-13 md:col-start-1 md:col-end-9 lg:col-start-1 lg:col-end-8 mb-5">
              <Table className="min-w-full">
                <Thead className="border-b border-gray-200 text-xs sm:text-sm font-light text-gray-400">
                  <Tr className="border-b border-gray-400">
                    <Th colSpan="1" className="w-24"></Th>
                    <Th className="text-left">Название</Th>
                    <Th>Размер</Th>
                    <Th>Кол-во</Th>
                    <Th>Цена/шт.</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {cartItems.map((item) => (
                    <Tr
                      key={item.articule}
                      className="text-xs sm:text-sm font-normal text-center border-b mb-2"
                    >
                      <Td>
                        <Link href="#">
                          <a className="flex justify-start">
                            <SliderRingInCart colorImage={item.colorImage} />
                          </a>
                        </Link>
                      </Td>
                      <Td>
                        <Link href="#">
                          <a>
                            <p className="text-center">Арт. {item.articule}</p>
                          </a>
                        </Link>
                      </Td>
                      <Td>
                        <div className="text-center">
                          {item.sizeRingWoman && (
                            <p>{item.sizeRingWoman} (жен)</p>
                          )}
                          {item.sizeRingMan && <p>{item.sizeRingMan} (муж)</p>}
                        </div>
                      </Td>
                      <Td>
                        <div className="text-center">
                          <select
                            value={item.quantity}
                            onChange={(e) =>
                              updateCartHandler(item, e.target.value)
                            }
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option
                                key={x + 1}
                                value={x + 1}
                                className="text-center"
                              >
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                      </Td>
                      <Td>
                        <p className="text-center">
                          {Intl.NumberFormat().format(item.priceNew)}&nbsp;
                          {item.currency}
                        </p>
                        {!!item.priceOld && (
                          <p className="text-xs text-gray-400 line-through">
                            {Intl.NumberFormat().format(item.priceOld)}&nbsp;
                            {item.currency}
                          </p>
                        )}
                      </Td>
                      <Td>
                        <button
                          className="block ml-auto mr-1 mb-1 sm:mx-auto sm:mb-0 sm:mx-auto "
                          onClick={() => removeItemHandler(item)}
                        >
                          <FaTrashAlt className="text-base text-gray-400 hover:text-gray-500 transition-all" />
                        </button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </div>
            <div className="col-start-1 col-end-13 md:col-start-9 md:col-end-13 bg-gray-100">
              <div className="p-5 lg:p-7 xl:p-14">
                <div className="flex justify-between mb-5">
                  <p className="text-lg md:text-xl lg:text-2xl xl:text-4xl font-normal">
                    Итого:
                  </p>
                  <div>
                    <p className="text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold text-right">
                      {Intl.NumberFormat().format(totalOrder)} ₽
                    </p>
                    {totalOldOrder > 0 && (
                      <p className="relative text-sm md:text-base lg:text-lg xl:text-2xl font-normal text-right text-gray-400">
                        {Intl.NumberFormat().format(totalOldOrder)} ₽
                        <span className="absolute inset-y-4 left-0 w-full h-px bg-red-400 -rotate-12"></span>
                      </p>
                    )}
                  </div>
                </div>
                <button
                  className="bg-blue-900 text-sm lg:text-base font-normal lg:font-semibold text-white tracking-wider uppercase w-full pt-2 pb-2 md:pt-3 md:pb-3 lg:pt-5 lg:pb-5 hover:bg-blue-600 transition-all"
                  onClick={handleClickOrder}
                >
                  Оформить заказ
                </button>
              </div>
            </div>
            <div className="col-start-3 col-end-11 md:col-start-2 md:col-end-7">
              <Image
                src="/assets/image/discount/discount-cart.jpg"
                width={690}
                height={84}
                alt="discount"
                layout="responsive"
              />
            </div>
          </div>
        ) : (
          <div className="text-1xl font-semibold  mb-5">
            Ваша Корзина Пуста!!! Перейти на{' '}
            <Link href="/">
              <a className="text-blue-900 uppercase hover:text-blue-600">
                Главную Страницу.
              </a>
            </Link>
          </div>
        )}
        <Modal active={modalActive} setActive={setModalActive}>
          <h1 className="text-center mb-1">ОСТАВЬТЕ ЗАЯВКУ</h1>
          <p className="text-center text-sm md:text-base font-normal text-center text-gray-400 mb-6 md:mb-12">
            И мы свяжемся с вами для уточнения деталей заказа
          </p>
          <form
            className="w-full grid grid-cols-1 gap-2 xl:gap-5 xl:grid-cols-2 xl:grid-rows-5 xl:gap-x-10"
            onSubmit={handleSubmit(submitHandler)}
          >
            <div className="col-span-1 xl:col-span-2">
              <label
                htmlFor="name"
                className="text-xs font-normal text-gray-400 mb-1"
              >
                Ваше имя
              </label>
              <input
                type="text"
                name="name"
                className="w-full"
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

            <div>
              <label
                htmlFor="phone"
                className="text-xs font-normal text-gray-400 mb-1"
              >
                Ваш телефон
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+7 (000) 000-00-00"
                className="w-full"
                {...register('phone', {
                  required: 'Пожалуйста, введите номер телефона !!!',
                  minLength: {
                    value: 5,
                    message: 'Введите больше 5 символов !!!',
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

            <div>
              <label
                htmlFor="email"
                className="text-xs font-normal text-gray-400 mb-1"
              >
                Ваш e-mail
              </label>
              <input
                type="email"
                name="email"
                className="w-full"
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

            <div>
              <label
                htmlFor="city"
                className="text-xs font-normal text-gray-400 mb-1"
              >
                Город
              </label>
              <input
                type="text"
                name="city"
                className="w-full"
                {...register('city', {
                  required: 'Пожалуйста, введите название Вашего города !!!',
                  minLength: {
                    value: 2,
                    message: 'Введите более 2 символов !!!',
                  },
                  maxLength: {
                    value: 30,
                    message: 'Введите менее 30 символов !!!',
                  },
                })}
              />
              {errors.city && (
                <div className="text-xs text-red-500">
                  {errors.city.message}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="location"
                className="text-xs font-normal text-gray-400 mb-1"
              >
                Адрес
              </label>
              <input
                type="text"
                name="location"
                className="w-full"
                {...register('location', {
                  required: 'Пожалуйста, введите название Ваш адрес !!!',
                  minLength: {
                    value: 2,
                    message: 'Введите более 2 символов !!!',
                  },
                  maxLength: {
                    value: 200,
                    message: 'Введите менее 200 символов !!!',
                  },
                })}
              />
              {errors.location && (
                <div className="text-xs text-red-500">
                  {errors.location.message}
                </div>
              )}
            </div>

            <div className="col-span-1 xl:col-span-2 text-xs md:text-sm font-normal text-center md:text-left text-gray-400">
              <input
                type="checkbox"
                value="yes"
                checked
                className="mr-2"
                {...register('isPrivatePolicy')}
              />
              Даю согласие на{' '}
              <Link href="/private-policy">
                <a className="font-semibold hover:text-blue-600 active:text-blue-900 transition-all">
                  обработку персональных данных
                </a>
              </Link>
            </div>

            <button className="col-span-1 xl:col-span-2 bg-blue-900 text-sm md:text-base font-normal md:font-semibold text-white tracking-wider uppercase w-full py-3 md:py-5 hover:bg-blue-600 transition-all">
              ПЕРЕЗВОНИТЕ МНЕ
            </button>
          </form>
        </Modal>
        <Modal active={modalResponse} setActive={setModalResponse}>
          <h1 className="text-center mb-5">ВАША ЗАЯВКА ПРИНЯТА!</h1>
          <p className="text-sm md:text-base font-normal text-center text-gray-400 mb-12">
            В ближайшее время с вами свяжется оператор для подтверждения заказа.
          </p>
          <button className="block col-span-1 xl:col-span-2 bg-blue-900 text-sm md:text-base font-normal md:font-semibold text-white tracking-wider uppercase w-full md:w-1/2 md:mx-auto py-3 md:py-5 hover:bg-blue-600 transition-all">
            <Link href="/">
              <a>ВЕРНУТЬСЯ В КАТАЛОГ</a>
            </Link>
          </button>
        </Modal>
      </div>
    </Layout>
  );
}

export default CartScreen;

CartScreen.propsTypes = {
  state: PropTypes.object,
  dispatch: PropTypes.func,
  removeItemHandler: PropTypes.func,
  removeItemsHandler: PropTypes.func,
  updateCartHandler: PropTypes.func,
  handleClickOrder: PropTypes.func,
  submitHandler: PropTypes.func,
};
