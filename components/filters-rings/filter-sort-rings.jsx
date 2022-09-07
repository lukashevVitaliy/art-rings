import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../../utils/store';

export default function FilterSortRings() {
  const [sort, setSort] = useState('По умолчанию');
  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch({ type: 'SORT_GENERAL', payload: sort });
  }, [dispatch, sort]);

  return (
    <div className="flex mb-5 md:mb-0">
      <p className="pr-2 text-sm md:text-base font-light">Сортировать:</p>
      <select
        className="border-b text-sm md:text-base font-light"
        name="quantity-rings"
        onChange={(e) => setSort(e.target.value)}
      >
        <option className="bg-gray-50" value="По умолчанию">
          По умолчанию
        </option>
        <option className="bg-gray-50" value="Не дорогие">
          Не дорогие
        </option>
        <option className="bg-gray-50" value="Дорогие">
          Дорогие
        </option>
        <option className="bg-gray-50" value="Рейтинг (начиная с высокого)">
          Рейтинг (начиная с высокого)
        </option>
        <option className="bg-gray-50" value="Рейтинг (начиная с низкого)">
          Рейтинг (начиная с низкого)
        </option>
        <option className="bg-gray-50" value="Новинки">
          Новинки
        </option>
      </select>
    </div>
  );
}
