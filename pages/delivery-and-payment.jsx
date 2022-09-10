import React from 'react';
import Breadcrumbs from '../components/breadcrumbs';
import Layout from '../components/layout';

export default function DeliveryAndPayment() {
  return (
    <Layout title="Delivery And Payment">
      <Breadcrumbs title="ДОСТАВКА И ОПЛАТА" path={'/delivery-and-payment'} />
      <div
        className="w-full bg-center bg-no-repeat bg-cover mb-6 md:mb-12"
        style={{ backgroundImage: "url('/assets/bg/delivery_c.jpg')" }}
      >
        <div className="container mx-auto px-4 py-12 md:py-24 lg:py-48">
          <div className="w-2/3 md:w-3/5">
            <h1 className="text-left mb-2 md:mb-5">ДОСТАВКА И ОПЛАТА</h1>
            <p className="text-sm md:text-base">
              Все ювелирные изделия Art-Rings изготовляются после получения
              компанией информации по следующим параметрам: материал изделия
              (изделий), цвет изделия (изделий), размер изделия (изделий),
              материал вставок, а также после осуществления предоплаты в размере
              50% от стоимости заказа. Доставка в регионы России (кроме Москвы)
              осуществляется транспортной компанией согласно правил
              транспортировки ювелирных изделий и производится БЕСПЛАТНО.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
