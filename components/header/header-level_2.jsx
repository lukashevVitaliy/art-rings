import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import SearchInput from '../search-input';

const navigation = [
  { id: uuidv4(), title: 'Студия', path: '/studio' },
  { id: uuidv4(), title: 'О нас', path: '/about' },
  { id: uuidv4(), title: 'Доставка и Оплата', path: '/delivery-and-payment' },
  { id: uuidv4(), title: 'Гарантии', path: '/buyer-protection' },
  // { id: uuidv4(), title: 'Отзывы', path: '#' },
  { id: uuidv4(), title: 'Контакты', path: '/contacts' },
];

const HeaderLevel_2 = () => {
  const { pathname } = useRouter();

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

      <SearchInput />
    </div>
  );
};

export default HeaderLevel_2;
