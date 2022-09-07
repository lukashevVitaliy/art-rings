import Link from 'next/link';
import React from 'react';
import Breadcrumbs from '../components/breadcrumbs';
import Layout from '../components/layout';
import SocialLinks from '../components/social-links';
import { MdLocationOn } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsFillClockFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';

export default function About() {
  return (
    <Layout title="About">
      <Breadcrumbs title="О Нас" path={'/about'} />
      <div className="container mx-auto px-4">
        <h1 className="text-left mb-2 md:mb-5">О Нас</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-6 md:mb-12 gap-x-24 ">
          <div className="text-sm md:text-base font-normal mb-5 ">
            <p>
              Мы - московская студия Art-Rings. Мы знаем, что обручальные кольца
              должны быть неповторимы, как ваша история любви.
            </p>
            <p>
              Здесь вам помогут выбрать или создать по-настоящему эксклюзивные
              обручальные кольца.
            </p>
            <p>
              Мы работаем только с проверенными и надёжными поставщиками
              бриллиантов, поэтому гарантируем, что во вставках - самые лучшие
              камни.
            </p>
            <p>
              Все обручальные и помолвочные кольца изготовляются вручную, в
              строгом соответствии с высочайшими ювелирными стандартами.
            </p>
            <p>
              В каждое кольцо мы вкладываем не только мастерство, но и частичку
              души, поэтому они особенные.
            </p>
            <p>Кольца Art-Rings никогда не были и не будут массовыми.</p>
            <p>
              Один из самых волнующих моментов при подготовке к свадьбе - это
              выбор обручальных колец. С Art-Rings вы можете быть спокойны за
              исключительное качество и сроки исполнения вашего заказа, получая
              удовольствие от выбора и ожидания самого счастливого дня вашей
              жизни.{' '}
            </p>
            <p>С Аrt-Rings у вас будут обручальные кольца мечты!</p>
          </div>
          <div className="bg-gray-50 text-sm md:text-base">
            <div className="p-6 md:p-12">
              <div className="flex items-center mb-5">
                <span className="flex mr-2">
                  <MdLocationOn className="w-5 h-5 text-blue-900" />
                </span>
                <Link href="https://yandex.ru/maps/213/moscow/house/bolshoy_kislovskiy_pereulok_5_7s1/Z04YcAdlTkMPQFtvfXt0dXRjZQ==/?ll=37.605768%2C55.754801&z=17.16">
                  <a
                    className="hover:text-blue-600 transition-all"
                    target="_blank"
                  >
                    Москва, Большой Кисловский переулок, 5-7с1
                  </a>
                </Link>
              </div>

              <div className="flex items-center mb-5">
                <span className="flex mr-2">
                  <BsFillTelephoneFill className="w-5 h-5 text-blue-900" />
                </span>
                <div>
                  <div>
                    <Link href="tel:+74999408777">
                      <a className="hover:text-blue-600 transition-all">
                        +7 (499) 940-87-77
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="tel:+79778412340">
                      <a className="hover:text-blue-600 transition-all">
                        +7 (977) 841-23-40
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-5">
                  <span className="flex mr-2">
                    <BsFillClockFill className="w-5 h-5 text-blue-900" />
                  </span>
                  <div>
                    <p>пн-пт 11:00-20:00</p>
                    <p>сб, вс 11:00-17:00</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-5">
                <span className="flex mr-2">
                  <MdMail className="w-5 h-5 text-blue-900" />
                </span>
                <Link href="mailto:info@art-rings.ru">
                  <a
                    className="hover:text-blue-600 transition-all "
                    target="_blank"
                  >
                    info@art-rings.ru
                  </a>
                </Link>
              </div>
              <div className="w-48">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
