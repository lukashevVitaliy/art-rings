import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import Footer from './footer';
import Header from './header/header';

const Layout = ({ title, children }) => {
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
          <Header />
        </header>
        <main>{children}</main>
        <footer className="bg-gray-100 text-sm font-light">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;

Layout.propsTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
