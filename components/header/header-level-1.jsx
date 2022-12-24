import React from 'react';
import Link from 'next/link';
import SocialLinks from '../social-links';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsFillClockFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { MdMail } from 'react-icons/md';

const HeaderLevel_1 = () => {
  return (
    <div className="flex items-center h-16 bg-gray-100 text-xs font-light py-3 mb-5 lg:text-sm">
      <div className="container mx-auto px-4 flex items-center justify-center lg:justify-between">
        <div className="hidden lg:block">
          <div className="flex items-center">
            <span className="flex mr-2">
              <MdLocationOn className="w-5 h-5 text-blue-900" />
            </span>
            <Link href="https://yandex.ru/maps/213/moscow/house/bolshoy_kislovskiy_pereulok_5_7s1/Z04YcAdlTkMPQFtvfXt0dXRjZQ==/?ll=37.605768%2C55.754801&z=17.16">
              <a className="hover:text-blue-600 transition-all" target="_blank">
                Москва, Большой Кисловский переулок, 5-7с1
              </a>
            </Link>
          </div>
          <div className="flex md:items-center">
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
        </div>

        <div className="flex items-center mr-5 lg:mr-0">
          <span className="flex mr-2">
            <BsFillClockFill className="w-4 h-4 text-blue-900 md:w-5 md:h-5" />
          </span>
          <div>
            <p>пн-пт 11:00-20:00</p>
            <p>сб, вс 11:00-17:00</p>
          </div>
        </div>

        <div className="flex items-center">
          <span className="flex mr-2">
            <BsFillTelephoneFill className="w-4 h-4 text-blue-900 md:w-5 md:h-5" />
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

        <div className="hidden w-48 lg:block">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default HeaderLevel_1;
