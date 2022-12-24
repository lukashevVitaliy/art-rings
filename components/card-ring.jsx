import React, { useContext, useState, memo } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import SliderCard from './sliders/slider-card';
import { Store } from '../utils/store';
import { BsFillHeartFill } from 'react-icons/bs';
import { MdFiberNew } from 'react-icons/md';
import { motion } from 'framer-motion';

const CardRing = memo(({ ring, rings }) => {
  const [active, setActive] = useState('');
  const { dispatch } = useContext(Store);

  const {
    articule,
    rating,
    colorImage,
    priceNew,
    priceOld,
    currency,
    category,
    noveltie,
  } = ring;

  let urlRing;

  if (category === 'Обручальные кольца') {
    urlRing = '/wedding-rings/';
  } else if (category === 'Помолвочные кольца') {
    urlRing = '/engagement-rings/';
  } else if (category === 'Свадебные трио') {
    urlRing = '/wedding-trios-rings/';
  }

  const handlerClickRing = (articule) => {
    const ringsItems = rings.find((x) => x.articule === articule);
    if (!active) {
      dispatch({ type: 'FAVORITES_ADD_ITEM', payload: ringsItems });
      setActive(!active);
    } else if (active) {
      dispatch({ type: 'FAVORITES_DEL_ITEM', payload: ringsItems });
      setActive(!active);
    }
  };

  return (
    <motion.div
      className="relative card"
      whileHover={{
        scale: 0.95,
        transition: { duration: 0.3 },
      }}
      initial="cardInitial"
      animate="cardAnimate"
      variants={{
        cardInitial: {
          opacity: 0,
        },
        cardAnimate: {
          opacity: 1,
        },
      }}
      transition={{ duration: 0.6 }}
    >
      <Link href={`${urlRing}${articule}`}>
        <a>
          <div className="p-5">
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-gray-400">Арт. {articule}</p>
              <p className=" text-lg text-orange-400">{rating}</p>
            </div>
            <div className="mb-5">
              <SliderCard colorImage={colorImage} />
            </div>
            <div className="text-right">
              <p className="font-semibold text-red-800">
                {Intl.NumberFormat().format(priceNew)} {currency}
              </p>
              {priceOld !== 0 ? (
                <p className="text-sm text-gray-400 line-through">
                  {priceOld} {currency}
                </p>
              ) : (
                <p className="hidden">
                  {Intl.NumberFormat().format(priceOld)} {currency}
                </p>
              )}
            </div>
          </div>
        </a>
      </Link>
      <button
        className="absolute bottom-0 left-0 p-5"
        onClick={() => handlerClickRing(articule)}
      >
        <BsFillHeartFill
          className={
            !active
              ? 'favorites_icon'
              : `favorites_icon ${'favorites_icon__active'}`
          }
        />
      </button>
      {noveltie && (
        <MdFiberNew className="absolute top-16 right-4 p-0 m-0 w-12 h-10 text-blue-800 z-10" />
      )}
    </motion.div>
  );
});

CardRing.displayName = 'CardRing';
export default CardRing;

// проверка данных props
CardRing.propTypes = {
  ring: PropTypes.shape({
    articule: PropTypes.string,
    insertInRings: PropTypes.bool,
    countInStock: PropTypes.number,
    category: PropTypes.string,
    rating: PropTypes.string,
    currency: PropTypes.string,
    priceNew: PropTypes.number,
    priceOld: PropTypes.number,
    sampleOffice: PropTypes.bool,
    noveltie: PropTypes.bool,
    colorImage: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
      })
    ).isRequired,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        weight: PropTypes.string,
        material: PropTypes.string,
        inserts: PropTypes.string,
        composition: PropTypes.string,
        view: PropTypes.string,
      })
    ),
    description: PropTypes.string,
  }),

  rings: PropTypes.arrayOf(
    PropTypes.shape({
      articule: PropTypes.string,
      insertInRings: PropTypes.bool,
      countInStock: PropTypes.number,
      category: PropTypes.string,
      rating: PropTypes.string,
      currency: PropTypes.string,
      priceNew: PropTypes.number,
      priceOld: PropTypes.number,
      sampleOffice: PropTypes.bool,
      noveltie: PropTypes.bool,
      colorImage: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.string,
        })
      ),
      features: PropTypes.arrayOf(
        PropTypes.shape({
          weight: PropTypes.string,
          material: PropTypes.string,
          inserts: PropTypes.string,
          composition: PropTypes.string,
          view: PropTypes.string,
        })
      ),
      description: PropTypes.string,
    })
  ),

  handlerClickRing: PropTypes.func,
};

CardRing.defaultTypes = {
  handlerClickRing() {},
};
