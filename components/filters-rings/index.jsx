import React from 'react';
import FilterInsertsRings from './filter-inserts-rings';
import FilterPriceRings from './filter-price-rings ';
// import FilterQuantityRings from './filter-quantity-rings';
import FilterSortRings from './filter-sort-rings';

export default function FiltersRings() {
  return (
    <div className="flex flex-col items-end w-full mb-10 md:mb-5 md:flex-row md:items-center md:justify-end">
      {/* <FilterQuantityRings /> */}
      <FilterSortRings />
      <FilterPriceRings />
      <FilterInsertsRings />
    </div>
  );
}
