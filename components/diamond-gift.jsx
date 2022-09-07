import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DiamondGift() {
  return (
    <div className="container mx-auto px-4 my-6 md:my-12">
      <div className="flex items-center justify-between w-5/6 mx-auto mb-2 lg:w-1/2 md:mb-5">
        <div className="w-72 h-px md:h-0.5 bg-blue-900"></div>
        <div className="flex justify-center w-14 mx-2 sm:mx-5">
          <Link href="/diamond">
            <a className="flex items-center">
              <Image
                src="/assets/icons/diamond.svg"
                width={56}
                height={48}
                alt="icon diamond"
              />
            </a>
          </Link>
        </div>
        <div className="w-72 h-px md:h-0.5 bg-blue-900"></div>
      </div>
      <p className="text-sm text-center uppercase md:text-xl">
        Бриллиант в подарок
      </p>
    </div>
  );
}
