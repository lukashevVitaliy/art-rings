import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../../utils/store';

export default function FilterInsertsRings() {
  const [sort, setSort] = useState('Все');
  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch({ type: 'SORT_INSERTS_RINGS', payload: sort });
  }, [dispatch, sort]);

  return (
    <div className="flex md:ml-12">
      <p className="pr-2 text-sm md:text-base font-light">Вставки:</p>
      <select
        className="border-b text-sm md:text-base font-light"
        name="quantity-rings"
        onChange={(e) => setSort(e.target.value)}
      >
        <option className="bg-gray-50 font-semibold" value="Все">
          Все
        </option>
        <option className="bg-gray-50" value="С камнями">
          С камнями
        </option>
        <option className="bg-gray-50" value="Без камней">
          Без камней
        </option>
      </select>
    </div>
  );
}
