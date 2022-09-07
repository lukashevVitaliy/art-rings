import React from 'react';
import Breadcrumbs from '../components/breadcrumbs';
import Layout from '../components/layout';

export default function BuyerProtection() {
  return (
    <Layout title="Buyer Protection">
      <Breadcrumbs title="Доставка и Оплата" path={'/buyer-protection'} />
      <div
        className="w-full bg-right bg-no-repeat bg-cover mb-5 md:mb-10"
        style={{ backgroundImage: "url('/assets/bg/buyer-protection.jpg')" }}
      >
        <div className="container mx-auto px-4 py-12 md:py-24 lg:py-48">
          <div className="w-2/3 md:w-3/5">
            <h1 className="text-left mb-3 md:mb-5">ГАРАНТИИ</h1>
            <p className="text-sm md:text-base font-normal">
              Art-Rings предоставляет своим клиентам пожизненную гарантию на
              подлинность материалов и камней, из которых изготовлены наши
              ювелирные изделия. Все ювелирные изделия Art-Rings клеймированы в
              соответствии с требованиями Пробирной палаты Российской Федерации,
              камни прошли геммологическую экспертизу.
              <br />
              Гарантия на форму кольца, полировку, гальванические покрытия и
              закрепку камней до 0,01 Кт составляет 1 год.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
