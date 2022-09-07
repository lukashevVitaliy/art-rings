import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '../components/breadcrumbs';
import Layout from '../components/layout';
import { MdLocationOn } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsFillClockFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import SocialLinks from '../components/social-links';
import SliderContacts from '../components/sliders/slider-contacts';

export default function Contacts() {
  return (
    <Layout title="Contacts">
      <Breadcrumbs title="Контакты" path={'/contacts'} />
      <div className="container mx-auto px-4">
        <h1 className="text-left mb-3 md:mb-5">КОНТАКТЫ</h1>
        <p className="text-sm md:text-base font-normal mb-5 w-full md:w-1/3">
          Наша студия переехала с ул. Никольской на Арбат. Теперь у нас ещё
          просторнее, уютнее и больше красивых колечек!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 mb-6 md:mb-12">
          <div className="bg-gray-50 order-2 md:order-1">
            <div className="text-sm lg:text-base p-6 lg:p-12">
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
          <div className="overflow-x-auto col-span-2 order-1 md:order-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.2121370620935!2d37.60344141609888!3d55.754816999303834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a4e41323a77%3A0xd11bd86002c4812c!2z0JHQvtC70YzRiNC-0Lkg0JrQuNGB0LvQvtCy0YHQutC40Lkg0L_QtdGALiwgNS03LCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTI1MDA5!5e0!3m2!1sru!2s!4v1654628590244!5m2!1sru!2s"
              width="100%"
              height="100%"
              style={{
                border: 0,
                allowfullScreen: '',
                loading: 'lazy',
                referrerpolicy: 'no-referrer-when-downgrade',
              }}
            ></iframe>
          </div>
        </div>
        <h2 className="mb-3 md:mb-5">Фото студии с улицы</h2>
      </div>
      <div className="mb-6 md:mb-12">
        <SliderContacts />
      </div>
    </Layout>
  );
}
