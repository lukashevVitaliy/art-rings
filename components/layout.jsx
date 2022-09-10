import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import HeaderLevel_1 from './header/header-level-1';
import HeaderLevel_2 from './header/header-level_2';
import HeaderLevel_3 from './header/header-level_3';
import HeaderLevel_4 from './header/header-level_4';
import Footer from './footer';
import Modal from './modal';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

const info = [
  { id: uuidv4(), title: 'Студия', path: '/studio' },
  { id: uuidv4(), title: 'О нас', path: '/about' },
  { id: uuidv4(), title: 'Доставка и Оплата', path: '/delivery-and-payment' },
  { id: uuidv4(), title: 'Гарантии', path: '/buyer-protection' },
  // { id: uuidv4(), title: 'Отзывы', path: '#' },
  { id: uuidv4(), title: 'Контакты', path: '/contacts' },
];

export default function Layout({ title, children }) {
  const [modalMenu, setModalMenu] = useState(false);

  return (
    <>
      <Head>
        <title>{title ? title + ' - Art Ringts' : 'Art Ringts'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer autoClose={600} limit={1} />
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <HeaderLevel_1 />
          <HeaderLevel_2 />
          <HeaderLevel_3 />
          <HeaderLevel_4 setModalMenu={setModalMenu} />
        </header>
        <main>{children}</main>
        <footer className="bg-gray-100 text-sm font-light">
          <Footer />
        </footer>
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
}

Layout.propsTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
