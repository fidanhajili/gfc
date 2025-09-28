import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

import Header from '../layout/Header';
import { useTranslation } from 'react-i18next';

const Trainers = () => {
  const { t } = useTranslation();

  // Təlimçi məlumatlarını i18n-dən alırıq
  const trainers = t('trainers.list', { returnObjects: true });

  const [activeIndex, setActiveIndex] = useState(1); // Elvin Nağıyev index 1

  return (
    <>
      <Header />

      {/* Background */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/training-images/training-bg.png')" }}
      />

      {/* Geri Linki */}
      <Link
        to="/trainings"
        className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-400 transition
                   px-4 pt-4 sm:pt-6 sm:ms-24 sm:static absolute top-20 left-2 z-30"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        {t('trainers.back')}
      </Link>

      {/* Təlimçilər */}
      <section className="max-w-7xl mx-auto px-4 pb-20 pt-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-12 text-[#eef1f7] text-center drop-shadow-lg">
          {t('trainers.title')}
        </h1>

        <Swiper
          modules={[Navigation]}
          navigation
          loop={true}
          centeredSlides={true}
          initialSlide={1} // Elvin
          spaceBetween={30}
          slidesPerView={1.2}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {trainers.map((trainer, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`transition-all duration-700 ease-in-out transform group hover:scale-[1.03] ${
                  activeIndex === idx
                    ? 'scale-[1.07] shadow-2xl'
                    : 'scale-95 opacity-60'
                } bg-white rounded-[30px] overflow-hidden h-[600px] flex flex-col cursor-pointer hover:shadow-2xl hover:rotate-[0.3deg] hover:brightness-105`}
              >
                {/* Şəkil */}
                <div className="w-full h-[300px] overflow-hidden">
                  <img
                    src={trainer.photo}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Məlumat */}
                <div className="p-6 text-center flex-1 flex flex-col justify-start">
                  <h3 className="text-2xl font-extrabold text-[#0b3294] mb-2 tracking-wide">
                    {trainer.name}
                  </h3>
                  <h4 className="text-md font-semibold text-blue-700 mb-2 italic">
                    {trainer.description}
                  </h4>
                  <p className="text-sm text-blue-600 leading-relaxed">
                    {trainer.info}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Trainers;
