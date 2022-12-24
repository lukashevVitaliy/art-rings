import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Layout from '../components/layout';

const NotFondPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <Layout title="NotFondPage">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center w-full mb-6 md:mb-12">
          <Image
            src="/assets/icons/404.svg"
            width={129}
            height={70}
            alt="error image"
          />
          <p className="text-sm md:text-base font-semibold text-center text-blue-900 mt-5">
            Страница, которую вы ищете, устарела или не существует.
            <br />
            <br />В течении 3 секунд, Вы автоматически будете перенаправлены на
            Главную страницу.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default NotFondPage;
