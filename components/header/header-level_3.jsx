import React from 'react';
import Link from 'next/link';

export default function HeaderLevel_3() {
  return (
    <div className="container mx-auto px-4 mb-10 flex justify-center">
      <Link href="/" className="text-center justify-center">
        <a>
          <p className="text-2xl font-light text-center uppercase sm:text-3xl md:text-4xl lg:text-5xl">
            ART-RINGS
          </p>
          <p className=" text-sm text-center uppercase text-gray-400 lg:text-base">
            MOSCOW JEWELRY STUDIO
          </p>
        </a>
      </Link>
    </div>
  );
}
