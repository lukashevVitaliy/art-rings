import React from 'react';
import Link from 'next/link';

export default function Breadcrumbs({ path, title, title2 }) {
  return (
    <div className="container mx-auto px-4">
      <ul className="flex mb-5 text-xs text-gray-400 font-light list-none md:text-sm">
        <li>
          <Link href="/">
            <a>Главная</a>
          </Link>
        </li>
        &nbsp;/&nbsp;
        <li>
          <Link href={path}>
            <a>{title}</a>
          </Link>
        </li>
        &nbsp;/&nbsp;
        {title2 && JSON.stringify(title2) !== '{}' && <li>{title2}</li>}
      </ul>
    </div>
  );
}
