import React from 'react';
import Link from 'next/link';
import { BsFacebook } from 'react-icons/bs';
import { FaVk } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <Link href="https://www.facebook.com">
        <a>
          <BsFacebook className="w-5 h-5 text-blue-900 hover:text-blue-600 transition-all" />
        </a>
      </Link>
      <Link href="https://vk.com">
        <a>
          <FaVk className="w-5 h-5 text-blue-900 hover:text-blue-600 transition-all" />
        </a>
      </Link>
      <Link href="https://www.whatsapp.com">
        <a>
          <FaWhatsapp className="w-5 h-5 text-blue-900 hover:text-blue-600 transition-all" />
        </a>
      </Link>

      <Link href="https://www.instagram.com">
        <a>
          <FaInstagram className="w-5 h-5 text-blue-900 hover:text-blue-600 transition-all" />
        </a>
      </Link>

      <Link href="https://web.telegram.org">
        <a>
          <FaTelegramPlane className="w-5 h-5 text-blue-900 hover:text-blue-600 transition-all" />
        </a>
      </Link>
    </div>
  );
};

export default SocialLinks;
