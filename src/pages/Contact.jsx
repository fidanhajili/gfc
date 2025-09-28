// Contact.jsx
import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import Header from '../layout/Header';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      href: 'https://www.facebook.com/people/Global-Finance-Company/61567856030705/?mibextid=wwXIfr&rdid=4zGguH2SUQu8x18G&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16qtGG3pKH%2F%3Fmibextid%3DwwXIfr',
      icon: <FaFacebookF />,
      name: 'Facebook',
      bg: 'bg-blue-700',
      hoverBg: 'hover:bg-blue-600',
    },
    {
      href: 'https://www.linkedin.com/company/global-finance-company-az/about/',
      icon: <FaLinkedinIn />,
      name: 'LinkedIn',
      bg: 'bg-blue-600',
      hoverBg: 'hover:bg-blue-500',
    },
    {
      href: 'https://www.instagram.com/audit_academy_?igsh=MWljbWt5c2ZocHQwcw%3D%3D&utm_source=qr',
      icon: <FaInstagram />,
      name: 'Instagram',
      bg: 'bg-blue-500',
      hoverBg: 'hover:bg-blue-400',
    },
    {
      href: 'https://wa.me/994555553305',
      icon: <FaWhatsapp />,
      name: 'WhatsApp',
      bg: 'bg-blue-800',
      hoverBg: 'hover:bg-blue-700',
    },
    {
      href: 'https://t.me/+994555553305',
      icon: <FaTelegramPlane />,
      name: 'Telegram',
      bg: 'bg-blue-400',
      hoverBg: 'hover:bg-blue-300',
    },
    {
      href: 'tel:+994555553305',
      icon: <FaPhoneAlt />,
      name: 'Zəng',
      bg: 'bg-blue-900',
      hoverBg: 'hover:bg-blue-800',
    },
  ];

  return (
    <>
      <Header />

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/video/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Sağ Tərəf - Əlaqə Vasitələri */}
          <div className="bg-blue-900 text-white p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-8">{t('contact.title')}</h2>
            <div className="flex items-center mb-6">
              <FaPhoneAlt className="text-xl mr-4" />
              <span>{t('contact.phone')}</span>
            </div>
            <div className="flex items-center mb-6">
              <FaEnvelope className="text-xl mr-4" />
              <span>{t('contact.email')}</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-xl mr-4" />
              <span>{t('contact.address')}</span>
            </div>
          </div>

          {/* Sol Tərəf - Form */}
          <div className="p-10">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">{t('contact.formTitle')}</h2>
            <form
              action="https://formsubmit.co/hacilifidan7@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder={t('contact.form.name')}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder={t('contact.form.email')}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                rows="5"
                placeholder={t('contact.form.message')}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Sosial Media Kartları – Gradient Blue */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {socialLinks.map(({ href, icon, name }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 rounded-full shadow-lg text-white text-3xl transition-transform transform bg-gradient-to-br from-blue-600 to-blue-400 hover:scale-110 hover:shadow-xl"
            >
              {icon}
            </a>
          ))}
        </div>
      </section>

      {/* Google Map */}
      <section className="w-full px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6 text-white">
            {t('contact.mapTitle')}
          </h3>
          <iframe
            title="English Yard Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.1174016685636!2d49.8404726!3d40.4062499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030878adb332867%3A0xb4e80764bbbea7e8!2sEnglish%20Yard%2C%2025a%20Mammad%20Araz%2C%20Baku!5e0!3m2!1sen!2saz!4v1750775479434!5m2!1sen!2saz"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-xl w-full"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
