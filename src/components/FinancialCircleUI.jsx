import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  TrendingUp,
  CreditCard,
  BarChart2,
  FileSearch,
  PieChart,
  ClipboardList,
  Globe,
  FileText,
  UserCheck,
  BookOpen,
} from 'lucide-react';

const FinancialCircleUI = () => {
  const { t } = useTranslation();

  const servicesLeft = t('about.servicesLeft', { returnObjects: true });
  const servicesRight = t('about.servicesRight', { returnObjects: true });
  const centerData = t('about.servicesCenter', { returnObjects: true });

  // Sol və sağ tərəflər üçün uyğun ikonlar
  const leftIcons = [
    TrendingUp,     // Maliyyə planlaşdırması / İnvestisiya məsləhətləri
    CreditCard,     // Kredit məsləhətləri / Pul axını idarəetməsi
    BarChart2,      // Maliyyə analizləri / Maliyyə auditi
    FileSearch,     // Vergi auditi / İcbari audit
    PieChart,       // Vergi planlaşdırması / Vergi risklərinin idarə edilməsi
  ];

  const rightIcons = [
    ClipboardList,  // Vergi hesabatlarının hazırlanması / Vergi yoxlamalarında dəstək
    Globe,          // Beynəlxalq vergi xidmətləri / İkiqat vergitutma
    FileText,       // Mühasibatlıq konsaltinq / Gömrük işləri
    UserCheck,      // HR Audit / HR outsourcing
    BookOpen,       // Hüquq xidmətləri / Təlim və inkişaf
  ];

  const radius = 350;

  return (
    <div className="relative w-full flex flex-col items-center justify-start md:justify-center p-4 md:h-[1000px] min-h-[1200px] md:min-h-[1000px] font-semibold">
      {/* Masaüstü görünüş */}
      <div className="hidden md:block relative w-full h-full">
        {/* Orta dairə */}
        <div className="absolute top-1/2 left-1/2 w-108 h-108 bg-gradient-to-br from-[#0b3294] via-[#457eb0] to-[#3d5aa4] shadow-2xl rounded-full flex flex-col items-center justify-center text-white p-6 text-center -translate-x-1/2 -translate-y-1/2 z-10">
          <h2 className="text-3xl font-semibold mb-4">{centerData.title}</h2>
          <p className="text-sm leading-relaxed font-semibold">{centerData.description}</p>
        </div>

        {/* Sağ tərəf */}
        {servicesRight.map((item, i) => {
          const Icon = rightIcons[i];
          const angle = (180 / (servicesRight.length - 1)) * i;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={i}
              className="absolute w-56 h-32 bg-gradient-to-r from-[#0b3294] via-[#457eb0] to-[#3d5aa4] shadow-xl rounded-3xl flex flex-col justify-center text-white text-sm px-4 opacity-0 font-semibold"
              style={{
                top: `calc(50% + ${y}px - 64px)`,
                left: `calc(50% + ${x}px - 112px)`,
                animation: `slideInFromRight 300ms ease-out forwards`,
                animationDelay: `${i * 100}ms`,
              }}
            >
              <p className="text-center">{item.title1}</p>
              <div className="flex justify-center my-1">
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-center">{item.title2}</p>
            </div>
          );
        })}

        {/* Sol tərəf */}
        {servicesLeft.map((item, i) => {
          const Icon = leftIcons[i];
          const angle = 180 + ((180 / (servicesLeft.length - 1)) * i);
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={i}
              className="absolute w-56 h-32 bg-gradient-to-r from-[#0b3294] via-[#457eb0] to-[#3d5aa4] shadow-xl rounded-3xl flex flex-col justify-center text-white text-sm px-4 opacity-0 font-semibold"
              style={{
                top: `calc(50% + ${y}px - 64px)`,
                left: `calc(50% + ${x}px - 112px)`,
                animation: `slideInFromLeft 300ms ease-out forwards`,
                animationDelay: `${(i + servicesRight.length) * 100}ms`,
              }}
            >
              <p className="text-center">{item.title1}</p>
              <div className="flex justify-center my-1">
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-center">{item.title2}</p>
            </div>
          );
        })}
      </div>

      {/* Mobil görünüş */}
      <div className="md:hidden flex flex-col items-center gap-6 mt-8 w-full pb-16 font-semibold">
        {/* Orta dairə */}
        <div className="w-80 h-80 sm:w-60 sm:h-60 bg-gradient-to-br from-[#0b3294] via-[#457eb0] to-[#3d5aa4] shadow-2xl rounded-full flex flex-col items-center justify-center text-white p-4 sm:p-6 text-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">{centerData.title}</h2>
          <p className="text-xs sm:text-sm leading-relaxed font-semibold">{centerData.description}</p>
        </div>

        {/* Alt-alta bloklar */}
        {servicesLeft.concat(servicesRight).map((item, i) => {
          const Icon = leftIcons.concat(rightIcons)[i];
          return (
            <div
              key={i}
              className="w-full bg-gradient-to-r from-[#0b3294] via-[#457eb0] to-[#3d5aa4] shadow-xl rounded-3xl flex flex-col items-center justify-center text-white text-sm px-4 py-4 font-semibold"
            >
              <p className="text-center">{item.title1}</p>
              <div className="flex justify-center my-2">
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-center">{item.title2}</p>
            </div>
          );
        })}
      </div>

      {/* Animasiya */}
      <style>{`
        @keyframes slideInFromRight {
          0% { opacity: 0; transform: translateX(100px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInFromLeft {
          0% { opacity: 0; transform: translateX(-100px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default FinancialCircleUI;
