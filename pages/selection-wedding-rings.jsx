import Image from 'next/image';
import React from 'react';
import Breadcrumbs from '../components/breadcrumbs';
import Layout from '../components/layout';

const SelectionWeddingRings = () => {
  return (
    <Layout title="Selection Wedding Rings">
      <Breadcrumbs
        title="Как выбрать обручальные кольца"
        path={'/selection-wedding-rings'}
      />
      <div className="container mx-auto px-4 mb-6 md:mb-12">
        <h2 className="mb-3 md:mb-5">КАК ВЫБРАТЬ ОБРУЧАЛЬНЫЕ КОЛЬЦА?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-32 text-sm md:text-base font-normal   ">
          <div className="overflow-x-auto col-span-1 md:col-span-2">
            <p className="mb-2">
              Выбрать кольца - очень ответственное дело. Они будут с вами
              всегда. Очень часто в повседневной жизни и для мужчины, и для
              женщины обручальное кольцо - единственное украшение на пальцах. И
              оно должно не только обозначать, что Вы уже нашли свою вторую
              половинку, но и украшать руку.
            </p>
            <p className="mb-2">
              Раньше обручальные кольца были доступны только в вариантах
              &quot;бублик пошире&quot; и &quot;бублик поуже&quot;, при этом на
              гладкости семейной жизни гладкость обручального кольца никак не
              сказывается.
            </p>
            <p className="mb-2">
              В настоящее время есть всевозможные вариации обручальных колец:{' '}
              <span className="text-blue-900 font-semibold">ажурные</span>,{' '}
              <span className="text-blue-900 font-semibold">
                комбинированные
              </span>
              , с крутяшками,{' '}
              <span className="text-blue-900 font-semibold">
                с бриллиантами
              </span>{' '}
              и другими драгоценными камнями, с эмалью или чернением, с
              отпечатками пальцев...
            </p>
            <p className="mb-2">
              Все обручальные кольца в Art-Rings имеют дизайн, который близок к
              классике и не выйдет из моды, так что за актуальность Ваших колец
              можно не переживать.
            </p>
            <p className="mb-2">
              Для того, чтобы выбрать кольца, лучше всего прийти и померить их,
              оценив не только красоту, но и удобство, это возможно сделать{' '}
              <span className="text-blue-900 font-semibold">в нашем офисе</span>
              . Только специалист верно определит размер, потому что более 90%
              удобства кольца определяется правильно подобранным размером.
              Кольцо никогда не должно жать (например, летом или при физической
              нагрузке пальцы утолщаются из-за притока крови); но и не быть
              свободным до такой степени, чтобы однажды оно соскользнуло с
              пальца и потерялось.
            </p>
            <p className="mb-2">
              Длину пальцев подчёркнут широкие кольца, для недлинных пальцев
              лучше выбрать кольца поуже. Ажурные обручальные кольца кольца
              придают любому образу лёгкости, а бриллианты-роскоши. Не
              забывайте, что Art-Rings дарит в каждое обручальное кольцо{' '}
              <span className="text-blue-900 font-semibold">
                бриллиант абсолютно бесплатно!
              </span>
            </p>
            <p className="mb-2">
              Кольца с узорами, особенно если они подчёркнуты чернением, никогда
              не надоест рассматривать. Комбинированные обручальные кольца не
              только интересно смотрятся, их безусловный плюс ещё и в том, что
              они сочетаются с любыми украшениями.
            </p>
            <p className="mb-2">
              Если паре понравились разные кольца, то можно подобрать
              обручальные кольца разного дизайна, например, невесте-ажурное, а
              жениху-строгое классическое с бриллиантом.
            </p>
            <p>
              В Art-Rings на обручальные кольца можно нанести гравировку с
              инициалами, словами любви и любыми другими символами.
            </p>
          </div>
          <div className="mx-auto w-1/2 md:w-full">
            <Image
              src="/assets/image/rings/wedding/obruchalnie-koltsa.jpg"
              width={326}
              height={433}
              alt="wedding ring"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SelectionWeddingRings;
