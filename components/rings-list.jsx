import React, { memo } from 'react';
import PropTypes from 'prop-types';
import CardRing from './card-ring';

const RingsList = memo(({ rings, firstContentIndex, lastContentIndex }) => {
  return (
    <div className="mb-4 border-b border-gray-200 pb-6 md:pb-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {rings.slice(firstContentIndex, lastContentIndex).map((ring) => (
          <CardRing key={ring.articule} ring={ring} rings={rings} />
        ))}
      </div>
    </div>
  );
});

RingsList.displayName = 'RingsList';
export default RingsList;

// проверка данных props
RingsList.propsTypes = {
  rings: PropTypes.arrayOf(
    PropTypes.shape({
      articule: PropTypes.string.isRequired,
      insertInRings: PropTypes.bool.isRequired,
      countInStock: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      priceNew: PropTypes.number.isRequired,
      priceOld: PropTypes.number.isRequired,
      sampleOffice: PropTypes.bool.isRequired,
      noveltie: PropTypes.bool.isRequired,
      colorImage: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.string.isRequired,
        })
      ).isRequired,
      features: PropTypes.arrayOf(
        PropTypes.shape({
          weight: PropTypes.string.isRequired,
          material: PropTypes.string.isRequired,
          inserts: PropTypes.string.isRequired,
          composition: PropTypes.string.isRequired,
          view: PropTypes.string.isRequired,
        })
      ).isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  firstContentIndex: PropTypes.number.isRequired,
  lastContentIndex: PropTypes.number.isRequired,
};
