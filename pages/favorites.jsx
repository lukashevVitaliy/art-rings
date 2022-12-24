import Link from 'next/link';
import React, { useContext, memo } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import Breadcrumbs from '../components/breadcrumbs';
import Layout from '../components/layout';
import Pagination from '../components/pagination';
import RingsList from '../components/rings-list';
import { Store } from '../utils/store';

const Favorites = memo(() => {
  const { state, dispatch } = useContext(Store);
  const favoritesRings = state.favorites.favoritesItems;

  const clickHandlerRemove = () => {
    if (state.favorites.favoritesItems.length > 0) {
      dispatch({ type: 'FAVORITES_RESET' });
      toast.success('Данные удалены...');
    }
  };

  return (
    <Layout title="Favorites Page">
      <Breadcrumbs title="Избранное" path={'/favorites'} />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-5 md:mb-10">
          <h2 className="">избранное</h2>
          <button
            className="text-xs sm:text-sm md:text-base font-semibold text-gray-400 left-5 uppercase hover:text-blue-900"
            onClick={clickHandlerRemove}
          >
            Удалить все
          </button>
        </div>
        {favoritesRings.length > 0 ? (
          <>
            <RingsList rings={favoritesRings} />
            <Pagination />
          </>
        ) : (
          <div className="text-xs sm:text-base md:text-1xl font-semibold text-center md:text-left  mb-5">
            Товар не добавлен !!! Перейти на{' '}
            <Link href="/">
              <a className=" text-blue-900 uppercase hover:text-blue-600">
                Главную Страницу.
              </a>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
});

Favorites.displayName = 'Favorites';
export default Favorites;

Favorites.propsTypes = {
  state: PropTypes.object,
  dispatch: PropTypes.func,
  clickHandlerRemove: PropTypes.func,
};
Favorites.defaultTypes = {
  clickHandlerRemove() {},
};
