import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import { FaSearch } from 'react-icons/fa';
import { Store } from '../../utils/store';

const navigation = [
  { id: uuidv4(), title: 'Студия', path: '/studio' },
  { id: uuidv4(), title: 'О нас', path: '/about' },
  { id: uuidv4(), title: 'Доставка и Оплата', path: '/delivery-and-payment' },
  { id: uuidv4(), title: 'Гарантии', path: '/buyer-protection' },
  // { id: uuidv4(), title: 'Отзывы', path: '#' },
  { id: uuidv4(), title: 'Контакты', path: '/contacts' },
];

export default function HeaderLevel_2() {
  const [searchItem, setSearchItem] = useState('');
  const { dispatch } = useContext(Store);
  const { pathname } = useRouter();

  const handleClick = () => {
    if (searchItem) {
      dispatch({ type: 'SEARCH_RING', payload: searchItem });
    } else {
      dispatch({ type: 'SEARCH_RING', payload: '' });
    }
  };

  return (
    <div className="container mx-auto px-4 flex mb-10 justify-end md:justify-between">
      <nav className="text-sm font-light text-gray-400 py-2 hidden md:block md:w-1/2 lg:w-1/3 ">
        <ul className="flex items-center justify-between">
          {navigation.map(({ id, title, path }) => (
            <li key={id}>
              <Link href={path}>
                <a
                  className={
                    pathname === path
                      ? 'active: text-blue-600 font-semibold'
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

      <div className="w-52 h-5 text-xs font-light text-gray-400 md:w-72 md:text-sm">
        <input
          id="name_search"
          name="name_search"
          type="text"
          placeholder="Поиск по артикулу"
          value={searchItem.toLowerCase()}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <button
          className="w-5 outline-none"
          type="button"
          onClick={handleClick}
        >
          <FaSearch className="hover:text-blue-600 active:text-blue-900 transition-all" />
        </button>
      </div>
    </div>
  );
}

HeaderLevel_2.propsTypes = {
  dispatch: PropTypes.func,
  handleClick: PropTypes.func,
};
HeaderLevel_2.defaultTypes = {
  handleClick() {},
};
