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
                blurDataURL={
                  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzAyMEY1OSIgZD0iTTU1Ljc4MyAxNS4yNyA0Ni40NSA0LjA3YS45MzUuOTM1IDAgMCAwLS43MTctLjMzNUgxMC4yNjdhLjkzMi45MzIgMCAwIDAtLjcxNy4zMzVMLjIxNyAxNS4yN2EuOTMuOTMgMCAwIDAgLjcxNyAxLjUzaDU0LjEzMmEuOTM1LjkzNSAwIDAgMCAuNzE3LTEuNTNabS01Mi44NTYtLjMzNkwxMC43MDQgNS42aDM0LjU5Mmw3Ljc3NyA5LjMzNEgyLjkyN1oiLz48cGF0aCBmaWxsPSIjMDIwRjU5IiBkPSJNMjguODYzIDQuMzFhLjkzMy45MzMgMCAwIDAtLjg2Mi0uNTc2SDEwLjI2OGEuOTMzLjkzMyAwIDAgMC0uODA3IDEuNDAzbDYuNTM0IDExLjJhLjkzNC45MzQgMCAwIDAgMS40NjYuMTlsMTEuMi0xMS4yYS45MzMuOTMzIDAgMCAwIC4yMDItMS4wMThaTTE2Ljk5NiAxNC4zNWwtNS4xMDQtOC43NWgxMy44NTVsLTguNzUxIDguNzVaIi8+PHBhdGggZmlsbD0iIzAyMEY1OSIgZD0iTTU1LjkwMyAxNS40NTNhLjkzMy45MzMgMCAwIDAtLjgzNy0uNTJILjkzNGEuOTM0LjkzNCAwIDAgMC0uNzQxIDEuNWwyNy4wNjYgMzUuNDY2YS45MzMuOTMzIDAgMCAwIDEuNDgyIDBsMjcuMDY2LTM1LjQ2NmEuOTM0LjkzNCAwIDAgMCAuMDk2LS45OFpNMjggNDkuNzk1IDIuODIgMTYuOGg1MC4zNmwtMjUuMTggMzIuOTk1WiIvPjxwYXRoIGZpbGw9IiMwMjBGNTkiIGQ9Im0yOC44OSA1MS4wNTEtMTEuMi0zNS40NjZhLjkzNC45MzQgMCAwIDAtLjg5LS42NTJILjkzNGEuOTM0LjkzNCAwIDAgMC0uNzQxIDEuNWwyNy4wNjYgMzUuNDY2YS45MzEuOTMxIDAgMCAwIDEuMTcxLjI2MS45MzMuOTMzIDAgMCAwIC40Ni0xLjEwOVpNMi44MiAxNi44MDFoMTMuMjk2bDkuMzg2IDI5LjcyTDIuODIgMTYuODAxWk00Ni41NDIgNC4yMDJhLjkzMi45MzIgMCAwIDAtLjgwOS0uNDY4SDI4YS45MzQuOTM0IDAgMCAwLS42NiAxLjU5M2wxMS4yIDExLjJhLjkzLjkzIDAgMCAwIC43OC4yNjUuOTMzLjkzMyAwIDAgMCAuNjg2LS40NTVsNi41MzMtMTEuMmEuOTM1LjkzNSAwIDAgMCAuMDAzLS45MzVabS03LjUzOCAxMC4xNDktOC43NTEtOC43NWgxMy44NTVsLTUuMTA0IDguNzVaIi8+PHBhdGggZmlsbD0iIzAyMEY1OSIgZD0iTTU1LjkwNCAxNS40NTRhLjkzMy45MzMgMCAwIDAtLjgzNy0uNTJIMzkuMjAxYS45MzMuOTMzIDAgMCAwLS44OS42NTNsLTExLjIgMzUuNDY2YS45MzQuOTM0IDAgMCAwIDEuNjMxLjg0OGwyNy4wNjYtMzUuNDY3YS45MzQuOTM0IDAgMCAwIC4wOTYtLjk4Wk0zMC40OTkgNDYuNTIxbDkuMzg1LTI5LjcySDUzLjE4TDMwLjUgNDYuNTJaIi8+PC9zdmc+'
                }
                width={56}
                height={48}
                // placeholder="blur"
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
