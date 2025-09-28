import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className='max-w-7xl mx-auto bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-2xl my-4 shadow-2xl shadow-blue-900/20 border border-blue-800/30 backdrop-blur-xl px-4'>
      <div className='flex flex-col md:flex-row justify-between items-center p-6 text-white'>

        {/* Sol: Logo ve 2 Link alt alta */}
        <div className='mb-6 md:mb-0 flex flex-col items-center md:items-start'>
          <a href="/" className="transform hover:scale-110 transition-transform duration-300">
            <img src="/header/glogo.png" alt="Logo" className='w-[120px] mb-4 brightness-0 invert' />
          </a>
          <ul className='flex flex-col space-y-2 text-lg'>
            <li><a href="/" className='relative text-slate-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 transition-all duration-300 transform hover:scale-105'>{t('nav.home')}</a></li>
            <li><a href="/about" className='relative text-slate-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 transition-all duration-300 transform hover:scale-105'>{t('nav.about')}</a></li>
          </ul>
        </div>

        {/* Ortada: 3 Link */}
        <div className='mb-6 md:mb-0'>
          <ul className='space-y-1 text-lg text-center md:text-left'>
            <li><a href="/services" className='relative text-slate-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 transition-all duration-300 transform hover:scale-105'>{t('nav.services')}</a></li>
            <li><a href="/trainings" className='relative text-slate-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 transition-all duration-300 transform hover:scale-105'>{t('nav.trainings')}</a></li>
            <li><a href="/contact" className='relative text-slate-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 transition-all duration-300 transform hover:scale-105'>{t('nav.contact')}</a></li>
          </ul>
        </div>

        {/* Sağ: Sosial Media və Əlaqə */}
        <div className='flex flex-col items-center md:items-end space-y-2'>
          <h4 className='font-semibold mb-2 text-slate-200'>{t('footer.contact_title')}</h4>
          <p className='text-sm text-slate-300'>{t('footer.email_label')} contact@yourdomain.com</p>
          <p className='text-sm text-slate-300'>{t('footer.phone_label')} +994 55 123 45 67</p>

          <div className='flex space-x-4 mt-4'>
            {/* Facebook */}
            <a href="https://www.facebook.com/people/Global-Finance-Company/61567856030705/?mibextid=wwXIfr&rdid=4zGguH2SUQu8x18G&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16qtGG3pKH%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer" className='text-slate-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1' aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.64 9.87v-6.98h-2.8v-2.89h2.8v-2.2c0-2.77 1.64-4.3 4.15-4.3 1.2 0 2.45.22 2.45.22v2.7h-1.38c-1.36 0-1.78.84-1.78 1.7v2h3.04l-.49 2.89h-2.55v6.98A10 10 0 0022 12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/global-finance-company-az/about/" target="_blank" rel="noopener noreferrer" className='hover:text-green-900' aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.061-1.865-3.061-1.865 0-2.151 1.459-2.151 2.966v5.699h-3v-10h2.881v1.367h.041c.401-.76 1.379-1.562 2.839-1.562 3.037 0 3.6 2 3.6 4.599v5.596z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/audit_academy_?igsh=MWljbWt5c2ZocHQwcw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className='hover:text-green-900' aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 2.75a.75.75 0 110 1.5.75.75 0 010-1.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/994555553305"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.372 0 0 5.372 0 12c0 2.116.555 4.156 1.608 5.97L0 24l6.303-1.59A11.885 11.885 0 0012 24c6.627 0 12-5.373 12-12 0-3.206-1.248-6.21-3.48-8.52zM12 21.6c-2.362 0-4.59-.814-6.31-2.303l-.452-.345-3.74.94.99-3.628-.28-.432A9.953 9.953 0 012.4 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.323-7.146c-.076-.13-.274-.21-.574-.368-.3-.16-1.77-.87-2.04-.97-.27-.1-.47-.16-.67.16-.2.3-.77.97-.95 1.17-.18.2-.36.23-.66.08-.3-.15-1.26-.47-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.018-.46.13-.61.13-.13.3-.33.45-.5.15-.17.2-.29.3-.48.1-.19.05-.35-.025-.5-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51-.17 0-.37 0-.56 0-.19 0-.5.07-.77.35-.27.29-1.03 1-1.03 2.44s1.06 2.83 1.2 3.02c.14.19 2.07 3.18 5.02 4.46.7.3 1.25.48 1.68.62.7.23 1.34.2 1.85.12.57-.1 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42z" />
              </svg>
            </a>

            {/* Telegram */}
            <a href="https://t.me/+994555553305" target="_blank" rel="noopener noreferrer" className='text-slate-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1' aria-label="Telegram">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.371 0 0 5.371 0 12c0 6.628 5.371 12 12 12 6.627 0 12-5.372 12-12 0-6.629-5.373-12-12-12zm5.408 7.07l-1.67 7.893c-.125.565-.45.7-.91.44l-2.52-1.85-1.217 1.17c-.134.135-.246.247-.505.247l.18-2.55 4.63-4.187c.2-.18-.043-.28-.31-.1l-5.73 3.6-2.47-.77c-.535-.17-.545-.53.11-.78l9.678-3.73c.45-.164.84.105.69.777z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div className='border-t border-blue-800/30 text-center py-4 text-sm text-slate-300'>
        © {new Date().getFullYear()} {t('footer.rights')}
      </div>
    </footer>
  );
};

export default Footer;