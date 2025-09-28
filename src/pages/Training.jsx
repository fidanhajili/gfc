import React from 'react';
import Header from '../layout/Header';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // <-- Link-i buradan import et

const Training = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />

      {/* Geri Linki */}
      <Link
        to="/trainings"
        className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-400 transition
                   px-4 pt-4 sm:pt-6 sm:ms-24 sm:static fixed top-20 left-2 z-30"
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

      {/* Tam ekran background image */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/training-images/training-bg.png')" }}
      />

      {/* Əsas məzmun */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 p-4 md:p-10 bg-[rgba(255,255,255,0.86)] backdrop-blur-md rounded-3xl shadow-2xl mt-8 mb-12">
        
        {/* Şəkil */}
        <div className="w-full md:w-[45%]">
          <img
            src="/training-images/training.jpg"
            alt={t('training.imageAlt')}
            className="rounded-2xl shadow-2xl object-cover w-full h-auto max-h-[400px] md:h-[600px] transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>

        {/* Mətn */}
        <div className="w-full md:w-[55%] space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold text-[#0b3294] tracking-wide text-center md:text-left">
            {t('training.title')}
          </h1>

          <div className="space-y-5 md:space-y-6 text-sm md:text-base">
            <div>
              <h2 className="text-blue-800 font-medium mb-2 tracking-wide text-base md:text-lg">
                {t('training.program1.title')}
              </h2>
              <p className="text-blue-600 leading-relaxed">
                {t('training.program1.description')}
              </p>
            </div>

            <div>
              <h2 className="text-blue-800 font-medium mb-2 tracking-wide text-base md:text-lg">
                {t('training.program2.title')}
              </h2>
              <p className="text-blue-600 leading-relaxed">
                {t('training.program2.description')}
              </p>
            </div>

            <div>
              <h2 className="text-blue-800 font-medium mb-2 tracking-wide text-base md:text-lg">
                {t('training.program3.title')}
              </h2>
              <p className="text-blue-600 leading-relaxed">
                {t('training.program3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Training;
