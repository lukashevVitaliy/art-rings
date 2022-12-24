import React, { useContext, useEffect, useState, memo } from 'react';
import { Store } from '../../utils/store';

const FilterPriceRings = memo(() => {
  const [sort, setSort] = useState('Все');
  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch({ type: 'SORT_PRICE', payload: sort });
  }, [dispatch, sort]);

  return (
    <div className="flex mb-5 md:mb-0 md:ml-12">
      <p className="pr-2 text-sm md:text-base font-light">Цена:</p>
      <select
        className="border-b text-sm md:text-base font-light"
        name="quantity-rings"
        onChange={(e) => setSort(e.target.value)}
      >
        <option className="bg-gray-50 font-semibold" value="Все">
          Все
        </option>
        <option className="bg-gray-50" value="до 50 000">
          до 50 000
        </option>
        <option className="bg-gray-50" value="50-70 000">
          50-70 000
        </option>
        <option className="bg-gray-50" value="70-100 000">
          70-100 000
        </option>
        <option className="bg-gray-50" value="от 100 000">
          от 100 000
        </option>
        <option className="bg-gray-50" value="от 150 000">
          от 150 000
        </option>
      </select>
    </div>
  );
});

FilterPriceRings.displayName = 'FilterPriceRings';
export default FilterPriceRings;
