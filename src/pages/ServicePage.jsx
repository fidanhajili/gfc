// src/pages/ServicePage.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from '../layout/Header'

const ServicePage = () => {
  const { slug } = useParams()
  const { t } = useTranslation()

  // Tərcümədən başlıq və təsvirləri alırıq
  const title = t(`services.${slug}.title1`)
  const descriptions = t(`services.${slug}.description1`, { returnObjects: true })

  // Əgər başlıq yoxdursa və ya təsvir massiv deyilsə səhifə tapılmadı göstər
  if (!title || !Array.isArray(descriptions)) {
    return (
      <div className="p-8 text-red-600 font-semibold text-center text-xl">
        Xidmət tapılmadı
      </div>
    )
  }

  return (
    <>
      <Header />
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/xidmetler/artistic-blurry-colorful-wallpaper-background.jpg')" }}
      />

      <div className="max-w-7xl mx-auto p-8 bg-gradient-to-br from-blue-50/90 via-white/95 to-emerald-50/90 backdrop-blur-sm shadow-xl rounded-2xl border border-blue-200/30 relative overflow-hidden mt-24 mb-16">
        
        {/* Decorative corner elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#1e3c5610] to-[#101b3600] rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#1e3c5610] to-[#101b5600] rounded-tr-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-[#1e3c5610] to-[#101b5600] rounded-full blur-3xl -z-10" />

        <Link
          to="/services"
          className="inline-flex items-center gap-3 mb-8 px-5 py-3 text-blue-950 font-semibold hover:text-white transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-[#1e3c56] hover:to-[#101b56] hover:shadow-lg hover:shadow-[#1e3c56] hover:-translate-y-0.5 border border-[#1e3c56] hover:border-transparent bg-blue-100/50 hover:bg-transparent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Geri dön
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#1e3c56] via-[#1e3c56] to-[#1e3c56] bg-clip-text text-transparent leading-tight mb-2">
            {title}
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[#1e3c56] via-[#1e3c56] to-[#1e3c56] rounded-full shadow-sm" />
        </div>

        <div className="space-y-3">
          {descriptions.map((item, index) => (
            <div
              key={index}
              className="group p-5 text-left flex items-center gap-4 text-lg rounded-xl hover:bg-gradient-to-r hover:from-[#1e3c56] hover:to-[#1e3c56] transition-all duration-500 hover:shadow-md hover:shadow-blue-500/15 hover:translate-x-2 border border-transparent hover:border-blue-200/50 bg-blue-50/30"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'slideInLeft 0.6s ease-out forwards'
              }}
            >
              <div className="relative">
                <div className="w-4 h-4 bg-gradient-to-r from-[#1e3c56] via-[#1e3c56] to-[#1e3c56] rounded-full flex-shrink-0 group-hover:scale-125 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/40" />
                <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-[#1e3c56] to-[#1e3c56] rounded-full animate-ping opacity-0 group-hover:opacity-75" />
              </div>
              <span className="text-blue-800 leading-relaxed group-hover:text-white font-medium">{item}</span>

              <svg
                className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1 ml-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}

export default ServicePage
