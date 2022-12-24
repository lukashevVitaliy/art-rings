import React, { useContext, useMemo, memo } from 'react';
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

const WeddingRings = memo(({ rings }) => {
  // const { rings } = data;
  const { state } = useContext(Store);

  const weddingRings = useMemo(
    () =>
      rings
        .filter(
          (item) =>
            item.category === 'Обручальные кольца' &&
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
    count: weddingRings.length,
  });

  return (
    <Layout title="Wedding Rings">
      <Breadcrumbs title="Обручальные кольца" path="/wedding-rings" />
      <div className="container mx-auto px-4">
        <h2 className="mb-2 md:mb-5">Обручальные кольца</h2>
        <p className="mb-10 md:mb-12 text-sm sm:text-base font-light">
          Эксклюзивные обручальные кольца с оригинальным дизайном от «Арт-Рингз»
          — отличный выбор для закрепления союза Вашей любви. В такой важный
          день все должно быть идеально и ключевой деталью являются обручальные
          кольца для «нее» и «него» — будущих счастливых супругов.
        </p>
        <FiltersRings />
        <RingsList
          rings={weddingRings}
          firstContentIndex={firstContentIndex}
          lastContentIndex={lastContentIndex}
        />

        <Pagination
          page={page}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
        />
        <div className="mb-5 md:mb-10 text-sm md:text-base font-light leading-6">
          <p>
            Дизайнерские обручальные кольца от производителя хороши тем, что их
            внешний вид и особенности оформления разнообразны и можно легко
            подобрать те, которые подойдут именно Вам и Вашей второй половинке.
            В разделе представлено свыше двухсот готовых моделей обручальных
            колец — возможно, Вы захотите внести в некоторые из них свои
            небольшие дополнения или вовсе заказать неповторимую модель: мы
            создадим{' '}
            <span className="text-blue-600 font-semibold">
              уникальный дизайн
            </span>{' '}
            по Вашему описанию или рисунку, воплотив любые идеи. Можно выбрать
            любой вид поверхности: глянцевую или матовую, текстурированную,
            узорчатую… Выполним резные обручальные кольца или с любой
            гравировкой. Кольца можно дополнить драгоценными камнями, например,
            бриллиантами — такие парные кольца смотрятся роскошно и эффектно.
            Всем покупателям колец с фирменной эмблемой Art-Rings мы дарим{' '}
            <span className="text-blue-600 font-semibold">
              бриллиант в подарок.
            </span>
          </p>
          <p>
            Парные обручальные кольца от «Арт-Рингз» можно недорого{' '}
            <span className="text-blue-600 font-semibold">купить в Москве</span>{' '}
            или с удобной{' '}
            <span className="text-blue-600 font-semibold">
              доставкой в регионы
            </span>
            . С радостью ответим на Ваши вопросы по телефонам: +7 (499)
            940-87-77.
          </p>
        </div>
      </div>
    </Layout>
  );
});

WeddingRings.displayName = 'WeddingRings';
export default WeddingRings;

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
WeddingRings.propsTypes = {
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
