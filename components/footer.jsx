import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import SocialLinks from './social-links';

const info = [
  { id: uuidv4(), title: 'Студия', path: '/studio' },
  { id: uuidv4(), title: 'О нас', path: '/about' },
  { id: uuidv4(), title: 'Доставка и Оплата', path: '/delivery-and-payment' },
  { id: uuidv4(), title: 'Гарантии', path: '/buyer-protection' },
  // { id: uuidv4(), title: 'Отзывы', path: '#' },
  { id: uuidv4(), title: 'Контакты', path: '/contacts' },
];
const buyers = [
  { id: uuidv4(), title: 'Бриллиант в подарок', path: '/diamond-for-free' },
  {
    id: uuidv4(),
    title: 'Как выбрать обручальные кольца',
    path: '/selection-wedding-rings',
  },
  {
    id: uuidv4(),
    title: 'О помолвочных кольцах',
    path: '/selection-engagement-rings',
  },
];
const assortment = [
  { id: uuidv4(), title: 'Обручальные кольца', path: '/wedding-rings' },
  { id: uuidv4(), title: 'Помолвочные кольца', path: '/engagement-rings' },
  { id: uuidv4(), title: 'Сваденое трио', path: '/wedding-trios-rings' },
  { id: uuidv4(), title: 'На заказ', path: '/rings-to-order' },
];
const contacts = [
  { id: uuidv4(), title: '+7(977) 841 23 40	', path: 'tel:+79778412340' },
  { id: uuidv4(), title: '+7(499) 940 87 77', path: 'tel:+74999408777' },
  {
    id: uuidv4(),
    title: 'Москва, Большой Кисловский переулок, 5-7с1',
    path: 'https://yandex.ru/maps/213/moscow/house/bolshoy_kislovskiy_pereulok_5_7s1/Z04YcAdlTkMPQFtvfXt0dXRjZQ==/?ll=37.605768%2C55.754801&z=17.16',
  },
  {
    id: uuidv4(),
    title: 'info@art-rings.ru',
    path: 'mailto:info@art-rings.ru',
  },
];

export default function Footer() {
  return (
    <div className="container mx-auto px-4 py-7 md:py-14">
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-5">
        <div className="col-span-2 order-6 text-center mx-auto lg:text-left lg:col-span-1 md:m-0 lg:order-1">
          <Link href="/">
            <a className="block mb-3">
              <Image
                src="/assets/icons/logo_text.svg"
                width={140}
                height={44}
                alt="logo footer"
              />
            </a>
          </Link>
          <Link href="/private-policy">
            <a target="_blank" className="text-xs block mb-3">
              Политика конфиденциальности
            </a>
          </Link>
          <p className="text-xs text-gray-400 uppercase mb-1">
            ИНН 672208547140
          </p>
          <p className="text-xs mb-2">
            Дизайн сайта <br /> digital-foton
          </p>
          <p className="text-xs text-blue-900 font-semibold">
            Разработка сайта <br /> Lukashev Vitaly
          </p>
        </div>

        <div className="order-2">
          <p className="text-sm text-center font-light uppercase mb-3 md:text-base lg:text-left">
            ИНФОРМАЦИЯ
          </p>
          <ul className="flex flex-col items-start text-xs font-light text-gray-400 md:text-sm">
            {info.map(({ id, title, path }) => (
              <li
                key={id}
                className="mb-1 mx-auto text-center lg:text-left lg:mx-0 hover:text-blue-600 transition-all"
              >
                <Link href={path}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-3">
          <p className="text-sm text-center font-light uppercase mb-3 md:text-base lg:text-left">
            ПОКУПАТЕЛЯМ
          </p>
          <ul className="flex flex-col items-start justify-between text-xs font-light text-gray-400 md:text-sm">
            {buyers.map(({ id, title, path }) => (
              <li
                key={id}
                className="mb-1 mx-auto text-center lg:text-left lg:mx-0 hover:text-blue-600 transition-all"
              >
                <Link href={path}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-4">
          <p className="text-sm text-center font-light uppercase mb-3 md:text-base lg:text-left">
            АССОРТИМЕНТ
          </p>
          <ul className="flex flex-col items-start justify-between text-xs font-light text-gray-400 md:text-sm">
            {assortment.map(({ id, title, path }) => (
              <li
                key={id}
                className="mb-1 mx-auto text-center lg:text-left lg:mx-0 hover:text-blue-600 transition-all"
              >
                <Link href={path}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-5">
          <p className="text-sm text-center font-light uppercase mb-3 lg:text-left lg:text-left">
            КОНТАКТЫ
          </p>
          <ul className="flex flex-col items-start justify-between text-xs font-light text-gray-400 mb-4 md:text-sm">
            {contacts.map(({ id, title, path }) => (
              <li
                key={id}
                className="mb-1 mx-auto text-center lg:text-left lg:mx-0 hover:text-blue-600 transition-all"
              >
                <Link href={path}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden w-48 mx-auto md:flex lg:mx-0 lg:w-full">
            <SocialLinks />
          </div>
        </div>
        <div className="w-48 order-7 col-span-2 mx-auto  md:hidden ">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
