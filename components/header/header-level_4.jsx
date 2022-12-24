import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import { FaShoppingCart } from 'react-icons/fa';
import { BsFillHeartFill } from 'react-icons/bs';
import { Store } from '../../utils/store';
import { AiOutlineMenu } from 'react-icons/ai';
import Modal from '../modal';

const navigate = [
  { id: uuidv4(), title: 'ОБРУЧАЛЬНЫЕ КОЛЬЦА', path: '/wedding-rings' },
  { id: uuidv4(), title: 'ПОМОЛВОЧНЫЕ КОЛЬЦА', path: '/engagement-rings' },
  { id: uuidv4(), title: 'СВАДЕБНЫЕ ТРИО', path: '/wedding-trios-rings' },
  { id: uuidv4(), title: 'НА ЗАКАЗ', path: '/rings-to-order' },
];
const info = [
  { id: uuidv4(), title: 'Студия', path: '/studio' },
  { id: uuidv4(), title: 'О нас', path: '/about' },
  { id: uuidv4(), title: 'Доставка и Оплата', path: '/delivery-and-payment' },
  { id: uuidv4(), title: 'Гарантии', path: '/buyer-protection' },
  // { id: uuidv4(), title: 'Отзывы', path: '#' },
  { id: uuidv4(), title: 'Контакты', path: '/contacts' },
];

const HeaderLevel_4 = () => {
  // export default function HeaderLevel_4({ setModalMenu }) {
  const [modalMenu, setModalMenu] = useState(false);
  const { state } = useContext(Store);
  const { cart } = state;
  const { favorites } = state;
  const { pathname } = useRouter();

  // исправление бага, после подкл Cookies с Корзиной
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [favoritesItemsCount, setFavoritesItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  useEffect(() => {
    setFavoritesItemsCount(
      JSON.parse(JSON.stringify(favorites.favoritesItems)).length
    );
  }, [favorites.favoritesItems]);

  return (
    <>
      <div className="relative container mx-auto px-4 mb-3 w-auto flex items-start justify-center md:mb-12 md:items-center md:justify-between">
        <div className="flex items-center justify-between lg:w-44">
          <Link href="/">
            <a className="hidden lg:block">
              <Image
                src="/assets/icons/logo_header.svg"
								width={106}
                height={63}
                alt="logo header"
              />
            </a>
          </Link>
          <button
            type="button"
            onClick={() => setModalMenu(true)}
            className="absolute top-0 right-2 md:relative md:right-0"
          >
            <AiOutlineMenu className="w-8 h-5 text-gray-800 transition-all hover:text-gray-600 active:text-gray-400 active:scale-90" />
          </button>
        </div>

        <nav className="w-full md:w-2/3">
          <ul className="flex flex-col text-center uppercase text-sm md:text-xs md:text-left md:flex-row md:justify-between lg:text-base">
            {navigate.map(({ id, title, path }) => (
              <li key={id} className="mb-3 md:mb-0">
                <Link href={path}>
                  <a
                    className={
                      pathname === path
                        ? 'active: text-blue-600 font-medium'
                        : 'hover:text-blue-600 transition-all'
                    }
                  >
                    {title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute top-10 right-4 flex flex-col md:w-20 md:flex-row md:justify-between md:relative md:top-0 md:right-0">
          <Link href="/cart">
            <a className="relative mb-5 md:mb-0">
              <FaShoppingCart className="w-5 h-5 lg:w-6 lg:h-6 text-blue-900 hover:text-blue-600 transition-all" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-3.5 -right-3.5 rounded-full bg-lime-400 px-2 py-1  text-xs font-bold text-blue-900">
                  {cartItemsCount}
                </span>
              )}
            </a>
          </Link>
          <Link href="/favorites">
            <a className="relative">
              <BsFillHeartFill className="w-5 h-5 lg:w-6 lg:h-6 text-blue-900 hover:text-blue-600 transition-all" />
              {favoritesItemsCount > 0 && (
                <span className="absolute -top-3.5 -right-3.5 rounded-full bg-lime-400 px-2 py-1  text-xs font-bold text-blue-900">
                  {favoritesItemsCount}
                </span>
              )}
            </a>
          </Link>
        </div>
      </div>

      <Modal active={modalMenu} setActive={setModalMenu}>
        <nav className="mb-10">
          <ul>
            {info.map(({ id, title, path }) => (
              <li key={id}>
                <Link href={path}>
                  <a>
                    <h2 className="text-center mb-5 hover:text-blue-600 active:text-blue-800 transition-all">
                      {title}
                    </h2>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Modal>
    </>
  );
};

export default HeaderLevel_4;

HeaderLevel_4.propsTypes = {
  state: PropTypes.object,
  title: PropTypes.string.isRequired,
};
