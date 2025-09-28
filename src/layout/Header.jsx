import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (e) => {
    const lng = e.target.value;
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full relative top-0 left-0 z-50 px-4 md:px-8 py-4">
      <nav className="max-w-7xl mx-auto flex justify-between items-center rounded-2xl px-6 py-2 
        bg-gradient-to-r from-[#0b3294] via-[#0b3294] to-[#132552] 
        shadow-2xl shadow-[#101b36]/30 border border-[#1e3c56]/40 backdrop-blur-xl
        transform hover:scale-[1.02] transition-all duration-300 ease-out">
        
        <a href="/" className="flex items-center transform hover:scale-110 transition-transform duration-300">
          <img src="/header/logopng.png" alt="Logo" className="w-8 h-8 relative z-10" />
        </a>

        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-8">
            {['home', 'about', 'services', 'trainings', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`/${item === 'home' ? '' : item}`}
                  className="relative text-slate-200 text-lg font-medium tracking-wide
                    hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 
                    transition-all duration-300 group cursor-pointer
                    before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 
                    before:bg-gradient-to-r before:from-blue-400 before:to-cyan-400
                    before:transition-all before:duration-300 before:rounded-full
                    hover:before:w-full
                    after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                    after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400
                    after:transition-all after:duration-300 after:blur-sm after:rounded-full
                    hover:after:w-full
                    transform hover:-translate-y-1 hover:scale-105"
                >
                  {t(`nav.${item}`)}
                </a>
              </li>
            ))}
          </ul>

          <div className="relative">
            <select
              className="bg-gradient-to-r from-[#101b36] via-[#101b36] to-[#101b56] 
                text-white font-semibold px-6 py-3 rounded-xl 
                shadow-lg shadow-[#101b36]/50 border border-[#1e3c56]/50
                transform transition-all duration-300 hover:scale-105 hover:-translate-y-1
                hover:shadow-2xl hover:shadow-[#1e3c56]/30
                focus:outline-none focus:ring-2 focus:ring-[#1e3c56]/50
                appearance-none cursor-pointer"
              onChange={changeLanguage}
              value={i18n.language}
            >
              <option value="az" className="bg-[#101b36]">AZ</option>
              <option value="en" className="bg-[#101b36]">EN</option>
              <option value="ru" className="bg-[#101b36]">RU</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-slate-200 focus:outline-none relative p-2 rounded-xl
              bg-gradient-to-r from-[#101b36] to-[#1e3c56] shadow-lg shadow-[#101b36]/50
              transform transition-all duration-300 hover:scale-110 hover:-translate-y-1
              hover:shadow-xl hover:shadow-[#1e3c56]/30 border border-[#1e3c56]/50"
            aria-label="Toggle Menu"
          >
            <div className="relative z-10">
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </div>
          </button>
        </div>
      </nav>

      <div className={`fixed top-0 left-0 w-full h-full z-40 transition-all duration-500 ease-out
        ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        bg-gradient-to-br from-[#023c76] to-[#022c56] backdrop-blur-xl
        flex flex-col items-center justify-center space-y-12`}
      >
        {/* X Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-8 right-8 text-slate-200 focus:outline-none p-3 rounded-xl
            bg-gradient-to-r from-[#101b36]/80 to-[#1e3c56]/80 shadow-lg shadow-[#101b36]/50
            transform transition-all duration-300 hover:scale-110 hover:-translate-y-1
            hover:shadow-xl hover:shadow-[#1e3c56]/30 border border-[#1e3c56]/50
            backdrop-blur-sm hover:bg-gradient-to-r hover:from-red-600/20 hover:to-red-400/20"
          aria-label="Close Menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 transition-all duration-300 hover:text-red-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>

        <ul className="flex flex-col space-y-8 text-center">
          {['home', 'about', 'services', 'trainings', 'contact'].map((item, index) => (
            <li key={item} 
              className={`transform transition-all duration-500 ease-out ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <a
                href={`/${item === 'home' ? '' : item}`}
                onClick={() => setIsOpen(false)}
                className="relative text-slate-200 text-3xl font-bold tracking-wide
                  hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 
                  transition-all duration-300 group cursor-pointer
                  transform hover:scale-110 hover:-translate-y-2
                  before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-1 
                  before:bg-gradient-to-r before:from-blue-400 before:to-cyan-400
                  before:transition-all before:duration-300 before:rounded-full before:transform before:-translate-x-1/2
                  hover:before:w-full
                  after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-1 
                  after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400
                  after:transition-all after:duration-300 after:blur-md after:rounded-full after:transform after:-translate-x-1/2
                  hover:after:w-full"
              >
                {t(`nav.${item}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className={`relative transform transition-all duration-500 ease-out ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        style={{ transitionDelay: '500ms' }}
        >
          <select
            className="bg-gradient-to-r from-[#101b36] via-[#1e3c56] to-[#101b36] 
              text-white font-semibold px-8 py-4 rounded-xl text-lg
              shadow-2xl shadow-[#101b36]/50 border border-[#1e3c56]/50
              transform transition-all duration-300 hover:scale-105 hover:-translate-y-2
              hover:shadow-2xl hover:shadow-[#1e3c56]/40
              focus:outline-none focus:ring-2 focus:ring-[#1e3c56]/50
              appearance-none cursor-pointer"
            onChange={changeLanguage}
            value={i18n.language}
          >
            <option value="az" className="bg-[#101b36]">AZ</option>
            <option value="en" className="bg-[#101b36]">EN</option>
            <option value="ru" className="bg-[#101b36]">RU</option>
          </select>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;