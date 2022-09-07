import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

const itemsCatalog = [
  {
    id: uuidv4(),
    image: '/assets/image/home/1.jpg',
    title: 'ПОМОЛВОЧНЫЕ КОЛЬЦА',
    path: '/engagement-rings',
  },
  {
    id: uuidv4(),
    image: '/assets/image/home/2.jpg',
    title: 'ОБРУЧАЛЬНЫЕ КОЛЬЦА',
    path: '/wedding-rings',
  },
  {
    id: uuidv4(),
    image: '/assets/image/home/3.jpg',
    title: 'НА ЗАКАЗ',
    path: '/rings-to-order',
  },
];

export default function Catalog() {
  return (
    <div className="bg-blue-900 mb-6 md:mb-12">
      <div className="container mx-auto px-4 py-6 md:py-12">
        <h1 className="text-white text-center mb-3 md:mb-6">КАТАЛОГ</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6 justify-center">
          {itemsCatalog.map(({ id, image, title, path }) => (
            <motion.div
              whileHover={{
                scale: 0.95,
                transition: { duration: 0.3 },
              }}
              key={id}
              className="relative"
            >
              <Link href={path}>
                <a>
                  <Image
                    src={image}
                    width={400}
                    height={300}
                    alt={title}
                    layout="responsive"
                  />
                  <div className="absolute bottom-2 w-full py-1 bg-slate-50/30 hover:bg-slate-50/100 transition-all">
                    <p className="text-sm font-semibold text-blue-900 text-center uppercase">
                      {title}
                    </p>
                  </div>
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
