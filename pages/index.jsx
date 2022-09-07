import React from 'react';
import PropTypes from 'prop-types';
import Catalog from '../components/catalog';
import DiamondGift from '../components/diamond-gift';
import Layout from '../components/layout';
import SliderNovelties from '../components/sliders/slider-novelties';
import SliderSpecialRings from '../components/sliders/slider-special-rings';
import Ring from '../models/ring-model';
import db from '../utils/db';

export default function Home({ rings }) {
  const noveltieList = rings.filter((item) => item.noveltie);

  return (
    <Layout title="Home Page">
      <h2 className="text-center mb-2">Oсобенные обручальные кольца</h2>
      <SliderSpecialRings />
      <DiamondGift />
      <Catalog />
      <h1 className="text-center mb-6 md:mb-12">НОВИНКИ</h1>
      <div className="container mx-auto px-4 mb-12 relative">
        {/* <SliderNovelties noveltieList={noveltieList} url={'/wedding-rings/'} /> */}
        <SliderNovelties noveltieList={noveltieList} />
      </div>
    </Layout>
  );
}

// получение всех колец из файла mongodb
export async function getServerSideProps() {
  await db.connect();
  const rings = await Ring.find().lean();
  return {
    props: {
      rings: JSON.parse(JSON.stringify(rings)),
    },
  };
}

// проверка данных props
Home.propTypes = {
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
};
