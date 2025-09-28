import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  CreditCard,
  BarChart2,
  TrendingUp,
  FileText,
  Globe,
  ClipboardList,
  UserCheck,
  BookOpen,
  Briefcase,
  PieChart,
} from 'lucide-react';

const FinancialCircleUI = () => {
  const { t } = useTranslation();

  const servicesLeft = t('about.servicesLeft', { returnObjects: true });
  const servicesRight = t('about.servicesRight', { returnObjects: true });
  const centerData = t('about.servicesCenter', { returnObjects: true });

  const leftIcons = [CreditCard, BarChart2, TrendingUp, FileText, Globe];
  const rightIcons = [ClipboardList, UserCheck, BookOpen, Briefcase, PieChart];

  const radius = 350; // biraz kiçildildi

  return (
    <div className="relative w-full flex flex-col items-center justify-start md:justify-center p-4 md:h-[1000px] min-h-[1200px] md:min-h-[1000px]">
      {/* Desktop Layout */}
      <div className="hidden md:block relative w-full h-full">
        {/* Orta Dairə */}
        <div className="absolute top-1/2 left-1/2 w-108 h-108 bg-gradient-to-br from-[#0b3294] via-[#457eb0] to-[#3d5aa4] shadow-2xl rounded-full flex flex-col items-center justify-center text-white p-6 text-center -translate-x-1/2 -translate-y-1/2 z-10">
          <h2 className="text-3xl font-semibold mb-4">{centerData.title}</h2>
          <p className="text-sm leading-relaxed">{centerData.description}</p>
        </div>

        {/* Sağ Bloklar */}
        {servicesRight.map((item, i) => {
          const Icon = rightIcons[i];
          const angle = (180 / (servicesRight.length - 1)) * i;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={i}
              className="absolute w-56 h-32 bg-gradient-to-r from-[#0b3294] via-[#457eb0] to-[#3d5aa4] shadow-xl rounded-3xl flex flex-col justify-center text-white text-sm px-4 opacity-0"
              style={{
                top: `calc(50% + ${y}px - 64px)`,
                left: `calc(50% + ${x}px - 112px)`,
                animation: `slideInFromRight 300ms ease-out forwards`,
                animationDelay: `${i * 50}ms`,
              }}
            >
              <p className="font-semibold text-center">{item.title1}</p>
              <div className="flex justify-center my-1">
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-center">{item.title2}</p>
            </div>
          );
        })}

        {/* Sol Bloklar */}
        {servicesLeft.map((item, i) => {
          const Icon = leftIcons[i];
          const angle = 180 + ((180 / (servicesLeft.length - 1)) * i);
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={i}
              className="absolute w-56 h-32 bg-gradient-to-r from-[#0b3294] via-[#457eb0] to-[#3d5aa4] shadow-xl rounded-3xl flex flex-col justify-center text-white text-sm px-4 opacity-0"
              style={{
                top: `calc(50% + ${y}px - 64px)`,
                left: `calc(50% + ${x}px - 112px)`,
                animation: `slideInFromLeft 300ms ease-out forwards`,
                animationDelay: `${(i + servicesRight.length) * 50}ms`,
              }}
            >
              <p className="font-semibold text-center">{item.title1}</p>
              <div className="flex justify-center my-1">
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-center">{item.title2}</p>
            </div>
          );
        })}
      </div>

      {/* Mobile Layout: Alt-alta + ortadakı dairə */}
      <div className="md:hidden flex flex-col items-center gap-6 mt-8 w-full pb-16">
        {/* Orta Dairə */}
        <div className="w-70 h-70 sm:w-60 sm:h-60 bg-gradient-to-br from-[#0b3294] via-[#457eb0] to-[#3d5aa4] shadow-2xl rounded-full flex flex-col items-center justify-center text-white p-4 sm:p-6 text-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">{centerData.title}</h2>
          <p className="text-xs sm:text-sm leading-relaxed">{centerData.description}</p>
        </div>

        {/* Alt-alta bloklar */}
        {servicesLeft.concat(servicesRight).map((item, i) => {
          const Icon = leftIcons.concat(rightIcons)[i];
          return (
            <div
              key={i}
              className="w-full bg-gradient-to-r from-[#0b3294] via-[#457eb0] to-[#3d5aa4] shadow-xl rounded-3xl flex flex-col items-center justify-center text-white text-sm px-4 py-4"
            >
              <p className="font-semibold text-center">{item.title1}</p>
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
