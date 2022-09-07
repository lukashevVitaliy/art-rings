import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormReviews from './form-reviews';
import SliderReviews from './sliders/slider-reviews';
import { motion } from 'framer-motion';

export default function TabsRingId({ description, reviewsRings }) {
  const [desc, setDesc] = useState(true);
  const [reviews, setReviews] = useState(false);

  const clickDesc = () => {
    if (!desc) {
      setReviews(!reviews);
      setDesc(!desc);
    }
  };
  const clickReviews = () => {
    if (!reviews) {
      setDesc(!desc);
      setReviews(!reviews);
    }
  };

  return (
    <div>
      <div className="pb-3 mb-5 border-b border-gray-200">
        <div className="grid grid-cols-2 items-center justify-center text-center gap-5">
          {desc ? (
            <h2
              className="opacity-100 cursor-pointer transition-all"
              onClick={clickDesc}
            >
              ОПИСАНИЕ
            </h2>
          ) : (
            <h2
              className="opacity-50 cursor-pointer transition-all"
              onClick={clickDesc}
            >
              ОПИСАНИЕ
            </h2>
          )}
          {reviews ? (
            <h2
              className="opacity-100 cursor-pointer transition-all"
              onClick={clickReviews}
            >
              ОТЗЫВЫ ({reviewsRings.length})
            </h2>
          ) : (
            <h2
              className="opacity-50 cursor-pointer transition-all"
              onClick={clickReviews}
            >
              ОТЗЫВЫ ({reviewsRings.length})
            </h2>
          )}
        </div>
      </div>
      {desc && (
        <div className="font-light">
          {description ? (
            <motion.p
              initial="descriptionMenu"
              animate="descriptionAnimate"
              variants={{
                descriptionMenu: {
                  opacity: 0,
                },
                descriptionAnimate: {
                  opacity: 1,
                  scale: [0, 1],
                },
              }}
              transition={{ duration: 0.4 }}
              className="text-sm lg:text-base"
            >
              {description}
            </motion.p>
          ) : (
            <motion.p
              initial="descriptionMenu"
              animate="descriptionAnimate"
              variants={{
                descriptionMenu: {
                  opacity: 0,
                },
                descriptionAnimate: {
                  opacity: 1,
                  scale: [0, 1],
                },
              }}
              transition={{ duration: 0.4 }}
              className="text-sm lg:text-base font-semibold text-gray-400"
            >
              Описание ожидается...
            </motion.p>
          )}
        </div>
      )}
      {reviews && reviewsRings.length > 0 && (
        <motion.div
          initial="reviewsMenu"
          animate="reviewsAnimate"
          variants={{
            reviewsMenu: {
              opacity: 0,
            },
            reviewsAnimate: {
              opacity: 1,
              scale: [0, 1],
            },
          }}
          transition={{ duration: 0.4 }}
        >
          <SliderReviews reviewsRings={reviewsRings} />
          <FormReviews />
        </motion.div>
      )}
      {reviews && reviewsRings.length === 0 && (
        <motion.div
          initial="reviewsMenu"
          animate="reviewsAnimate"
          variants={{
            reviewsMenu: {
              opacity: 0,
            },
            reviewsAnimate: {
              opacity: 1,
              scale: [0, 1],
            },
          }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm lg:text-base font-semibold text-gray-400 mb-5">
            Отзывы отсутствуют...
          </p>
          <FormReviews />
        </motion.div>
      )}
    </div>
  );
}

// проверка данных props
TabsRingId.propTypes = {
  reviewsRings: PropTypes.arrayOf(
    PropTypes.shape({
      bind: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,

  description: PropTypes.string,
  clickDesc: PropTypes.func,
  clickReviews: PropTypes.func,
};

TabsRingId.defaultTypes = {
  clickDesc() {},
  clickReviews() {},
};
