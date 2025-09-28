import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Arxa plan şəkli */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(/header/logo-mobile.png)`, // default mobil üçün
        }}
      >
        <style>
          {`
            @media (min-width: 768px) {
              div.bg-cover {
                background-image: url('/header/logo.jpg'); /* desktop üçün */
              }
            }
          `}
        </style>
      </div>

      {/* Kontent */}
      <Header />

      <div className='py-[350px]'>
        {/* boş yer */}
      </div>

      <Footer />
    </>
  );
};

export default Home;
