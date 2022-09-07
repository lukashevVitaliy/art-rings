import Image from 'next/image';
import React from 'react';
import Breadcrumbs from '../components/breadcrumbs';
import DiamondGift from '../components/diamond-gift';
import Layout from '../components/layout';

export default function DiamondForFree() {
  return (
    <Layout title="Diamond For Free">
      <Breadcrumbs title="Бриллиант в подарок" path={'/diamond-for-free'} />
      <div className="container mx-auto px-4 mb-6 md:mb-12">
        <div className="flex flex-col justify-between">
          <DiamondGift />
          <div className="text-sm md:text-base font-normal md:w-1/2 mx-auto mb-5">
            <p className="text-center mb-2">
              На свадьбу все дарят подарки, и у Art-Rings для молодожёнов
              приготовлено нечто особенное!
            </p>
            <p className="text-center mb-2">
              Мы дарим подарок, который всегда будет с Вами!
            </p>
            <p className="text-center mb-2">
              Бриллиант в каждое обручальное кольцо с нашей эмблемой совершенно
              бесплатно!
            </p>
            <p className="text-center font-bold">
              Для более подробной информации, пожалуйста, свяжитесь с
              менеджерами по телефону +7 (499) 940-87-77, приезжайте в наш офис:
              Большой Кисловский переулок, 5-7с1 или пишите info@art-rings.ru
            </p>
          </div>
          <div className="mx-auto">
            <Image
              src="/assets/image/diamond.jpg"
              width={251}
              height={217}
              alt="diamond image"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
