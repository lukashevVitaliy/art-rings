import React, { memo } from 'react';
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

const Catalog = memo(() => {
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
                    blurDataURL={
                      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzAyMEY1OSIgZD0iTTU1Ljc4MyAxNS4yNyA0Ni40NSA0LjA3YS45MzUuOTM1IDAgMCAwLS43MTctLjMzNUgxMC4yNjdhLjkzMi45MzIgMCAwIDAtLjcxNy4zMzVMLjIxNyAxNS4yN2EuOTMuOTMgMCAwIDAgLjcxNyAxLjUzaDU0LjEzMmEuOTM1LjkzNSAwIDAgMCAuNzE3LTEuNTNabS01Mi44NTYtLjMzNkwxMC43MDQgNS42aDM0LjU5Mmw3Ljc3NyA5LjMzNEgyLjkyN1oiLz48cGF0aCBmaWxsPSIjMDIwRjU5IiBkPSJNMjguODYzIDQuMzFhLjkzMy45MzMgMCAwIDAtLjg2Mi0uNTc2SDEwLjI2OGEuOTMzLjkzMyAwIDAgMC0uODA3IDEuNDAzbDYuNTM0IDExLjJhLjkzNC45MzQgMCAwIDAgMS40NjYuMTlsMTEuMi0xMS4yYS45MzMuOTMzIDAgMCAwIC4yMDItMS4wMThaTTE2Ljk5NiAxNC4zNWwtNS4xMDQtOC43NWgxMy44NTVsLTguNzUxIDguNzVaIi8+PHBhdGggZmlsbD0iIzAyMEY1OSIgZD0iTTU1LjkwMyAxNS40NTNhLjkzMy45MzMgMCAwIDAtLjgzNy0uNTJILjkzNGEuOTM0LjkzNCAwIDAgMC0uNzQxIDEuNWwyNy4wNjYgMzUuNDY2YS45MzMuOTMzIDAgMCAwIDEuNDgyIDBsMjcuMDY2LTM1LjQ2NmEuOTM0LjkzNCAwIDAgMCAuMDk2LS45OFpNMjggNDkuNzk1IDIuODIgMTYuOGg1MC4zNmwtMjUuMTggMzIuOTk1WiIvPjxwYXRoIGZpbGw9IiMwMjBGNTkiIGQ9Im0yOC44OSA1MS4wNTEtMTEuMi0zNS40NjZhLjkzNC45MzQgMCAwIDAtLjg5LS42NTJILjkzNGEuOTM0LjkzNCAwIDAgMC0uNzQxIDEuNWwyNy4wNjYgMzUuNDY2YS45MzEuOTMxIDAgMCAwIDEuMTcxLjI2MS45MzMuOTMzIDAgMCAwIC40Ni0xLjEwOVpNMi44MiAxNi44MDFoMTMuMjk2bDkuMzg2IDI5LjcyTDIuODIgMTYuODAxWk00Ni41NDIgNC4yMDJhLjkzMi45MzIgMCAwIDAtLjgwOS0uNDY4SDI4YS45MzQuOTM0IDAgMCAwLS42NiAxLjU5M2wxMS4yIDExLjJhLjkzLjkzIDAgMCAwIC43OC4yNjUuOTMzLjkzMyAwIDAgMCAuNjg2LS40NTVsNi41MzMtMTEuMmEuOTM1LjkzNSAwIDAgMCAuMDAzLS45MzVabS03LjUzOCAxMC4xNDktOC43NTEtOC43NWgxMy44NTVsLTUuMTA0IDguNzVaIi8+PHBhdGggZmlsbD0iIzAyMEY1OSIgZD0iTTU1LjkwNCAxNS40NTRhLjkzMy45MzMgMCAwIDAtLjgzNy0uNTJIMzkuMjAxYS45MzMuOTMzIDAgMCAwLS44OS42NTNsLTExLjIgMzUuNDY2YS45MzQuOTM0IDAgMCAwIDEuNjMxLjg0OGwyNy4wNjYtMzUuNDY3YS45MzQuOTM0IDAgMCAwIC4wOTYtLjk4Wk0zMC40OTkgNDYuNTIxbDkuMzg1LTI5LjcySDUzLjE4TDMwLjUgNDYuNTJaIi8+PC9zdmc+'
                    }
                    width={400}
                    height={300}
                    alt={title}
                    placeholder="blur"
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
});

Catalog.displayName = 'Catalog';
export default Catalog;
