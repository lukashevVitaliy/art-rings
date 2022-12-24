import React, { useContext, memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../../components/breadcrumbs';
import FiltersRings from '../../components/filters-rings';
import Layout from '../../components/layout';
import Pagination from '../../components/pagination';
import RingsList from '../../components/rings-list';
import { usePagination } from '../../hooks/usePagination';
import Ring from '../../models/ring-model';
// import data from '../../utils/data';
import db from '../../utils/db';
import { Store } from '../../utils/store';

const WeddingTriosRings = memo(({ rings }) => {
  // const { rings } = data;
  const { state } = useContext(Store);

  const weddingTriosRings = useMemo(
    () =>
      rings
        .filter(
          (item) =>
            item.category === 'Свадебные трио' &&
            ((state.sort.sortGeneral === 'Новинки' && item.noveltie) ||
              [
                'По умолчанию',
                'Не дорогие',
                'Дорогие',
                'Рейтинг (начиная с высокого)',
                'Рейтинг (начиная с низкого)',
              ].includes(state.sort.sortGeneral)) &&
            (state.sort.sortPrice === 'Все' ||
              (state.sort.sortPrice === 'до 50 000' &&
                item.priceNew >= 0 &&
                item.priceNew < 50000 &&
                state.sort.sortPrice.includes('до 50 000')) ||
              (state.sort.sortPrice === '50-70 000' &&
                item.priceNew >= 50000 &&
                item.priceNew < 70000 &&
                state.sort.sortPrice.includes('50-70 000')) ||
              (state.sort.sortPrice === '70-100 000' &&
                item.priceNew >= 70000 &&
                item.priceNew < 100000 &&
                state.sort.sortPrice.includes('70-100 000')) ||
              (state.sort.sortPrice === 'от 100 000' &&
                item.priceNew >= 100000 &&
                state.sort.sortPrice.includes('от 100 000')) ||
              (state.sort.sortPrice === 'от 150 000' &&
                item.priceNew >= 150000 &&
                state.sort.sortPrice.includes('от 150 000'))) &&
            (state.sort.sortInserts === 'Все' ||
              (state.sort.sortInserts === 'С камнями' && item.insertInRings) ||
              (state.sort.sortInserts === 'Без камней' && !item.insertInRings))
        )

        // поиск по артикулу
        .filter((item) =>
          item.articule.toLowerCase().includes(state.search.searchItem)
        )
        // сортировка, согласно фильтрам
        .sort(
          (a, b) =>
            (state.sort.sortGeneral === 'Не дорогие' &&
              a.priceNew - b.priceNew) ||
            (state.sort.sortGeneral === 'Дорогие' && b.priceNew - a.priceNew) ||
            (state.sort.sortGeneral === 'Рейтинг (начиная с высокого)' &&
              b.rating.length - a.rating.length) ||
            (state.sort.sortGeneral === 'Рейтинг (начиная с низкого)' &&
              a.rating.length - b.rating.length) ||
            (state.sort.sortPrice === 'до 50 000' && a.priceNew - b.priceNew) ||
            (state.sort.sortPrice === '50-70 000' && a.priceNew - b.priceNew) ||
            (state.sort.sortPrice === 'от 100 000' &&
              a.priceNew - b.priceNew) ||
            (state.sort.sortPrice === 'от 150 000' && a.priceNew - b.priceNew)
        ),
    [
      rings,
      state.search.searchItem,
      state.sort.sortGeneral,
      state.sort.sortInserts,
      state.sort.sortPrice,
    ]
  );

  // pagination
  const {
    totalPages,
    nextPage,
    prevPage,
    firstContentIndex,
    lastContentIndex,
    page,
  } = usePagination({
    contentPerPage: 9,
    count: weddingTriosRings.length,
  });

  return (
    <Layout title="Wedding Trios Rings">
      <Breadcrumbs title="Свадебные трио" path={'/wedding-trios-rings'} />
      <div className="container mx-auto px-4">
        <h2 className="mb-2 md:mb-5">Свадебные трио</h2>
        <p className="mb-10 md:mb-5 text-sm sm:text-base font-light">
          В студии «Арт-Рингз» Вы найдете парные обручальные кольца на самый
          взыскательный вкус! Любую модель из представленной коллекции мы
          изготовим в срок с учетом Ваших параметров: желаемого цвет золота,
          ширины и толщины колец, количества бриллиантов или других камней.
          Парные обручальные кольца от «Арт-Рингз» - уникальные, как Ваша пара,
          как Ваша любовь!
        </p>
        <FiltersRings />
        <RingsList
          rings={weddingTriosRings}
          firstContentIndex={firstContentIndex}
          lastContentIndex={lastContentIndex}
        />
        <Pagination
          page={page}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
        />

        <p className="mb-6 md:mb-12 text-sm md:text-base font-light leading-6">
          Что символизируют парные обручальные кольца!? Думаем, что из названия
          всё очевидно. Они говорят всем вокруг, что их владельцы сначала
          выбрали друг друга, а потом уже под свой вкус и характер изготовили
          оригинальные дизайнерские обручальные кольца на заказ. Это когда
          смотришь и понимаешь, что они твои, что кольца - это отражение Вашей
          пары! Парные кольца - это симбиоз Ваших чувств и драгоценного металла,
          украшенный сияющими камнями или рельефной поверхностью. В нашей студии
          Вы можете воплотить в жизнь самые необычные и смелые фантазии, даже
          создать обручальные кольца из Вашего сна или с рисунка на бумаге.
          Может у Вас есть свой символ или узор!? Мы с радостью поможем
          разработать уникальные и неповторимые парные кольца, которые станут
          самым любимым семейным украшением со своим смыслом и историей.
          Получить консультацию и примерить понравившиеся модели колец можно в
          нашей студии ежедневно без записи по адресу Большой Кисловский
          переулок 5-7 строение 1.
        </p>
      </div>
    </Layout>
  );
});

WeddingTriosRings.displayName = 'WeddingTriosRings';
export default WeddingTriosRings;

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
WeddingTriosRings.propsTypes = {
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
  totalPages: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  firstContentIndex: PropTypes.number.isRequired,
  lastContentIndex: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  state: PropTypes.object.isRequired,
};
