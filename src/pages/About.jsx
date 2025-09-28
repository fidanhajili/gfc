import React from 'react';
import Header from '../layout/Header';
import Accordion from '../components/Accordion';
import CountUp from 'react-countup';
import FinancialCircleUI from '../components/FinancialCircleUI';

import {
  PieChart,
  TrendingUp,
  CreditCard,
  BarChart2,
  FileText,
  FileCheck2,
  Globe,
  ClipboardList,
  UserCheck,
  BookOpen,
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const leftIcons = [
    <PieChart key="pie" />, <CreditCard key="credit" />, <BarChart2 key="bar" />,
    <FileText key="filetext" />, <TrendingUp key="trending" />
  ];
  const rightIcons = [
    <FileCheck2 key="filecheck" />, <Globe key="globe" />, <ClipboardList key="clipboard" />,
    <UserCheck key="usercheck" />, <BookOpen key="bookopen" />
  ];

  const leftServices = t('about.servicesLeft', { returnObjects: true });
  const rightServices = t('about.servicesRight', { returnObjects: true });
  const stats = t('about.stats', { returnObjects: true });

  const gradientCircle = "bg-gradient-to-br from-[#0b3294] via-[#457eb0] to-[#3d5aa4] shadow-2xl";

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/about-images/about-bg.png')" }}
    >
      <Header />

      <FinancialCircleUI gradientClass={gradientCircle} />

      {/* Partners */}
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-[#bec1ca] via-[#8f9090] to-[#f8f8fa] bg-clip-text text-transparent">
            {t('about.partners')}
          </span>
        </h2>

        <div className="max-w-6xl mx-auto px-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {Array.from({ length: 16 }).map((_, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center w-32 h-32 bg-white shadow-md p-4">
                  <img
                    src={`/partners/partner${index + 1}.jpeg`}
                    alt={`Partner ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-opacity-80">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map(({ count, label }, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#0b3294] via-[#457eb0] to-[#3d5aa4] text-white rounded-2xl shadow-xl p-6 text-center transition-transform hover:scale-105"
            >
              <h2 className="text-3xl font-bold">
                <CountUp end={count} duration={2.5} prefix="+" />
              </h2>
              <p className="mt-2 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <Accordion />
    </div>
  );
};

export default About;
