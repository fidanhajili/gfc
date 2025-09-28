import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from '../layout/Header'

const serviceSlugs = ['muhasibat', 'vergi', 'audit', 'hr', 'ucot', 'huquq']

const backgroundImages = [
  '/xidmetler/xidmetbg1.jpeg',
  '/xidmetler/xidmetbg1.jpeg',
  '/xidmetler/xidmetbg1.jpeg',
  '/xidmetler/xidmetbg1.jpeg',
  '/xidmetler/xidmetbg1.jpeg',
  '/xidmetler/xidmetbg1.jpeg'
]

const thumbnailImages = [
  '/xidmetler/muhasibat1.jpeg',
  '/xidmetler/vergi1.jpeg',
  '/xidmetler/audit1.jpeg',
  '/xidmetler/hr1.jpeg',
  '/xidmetler/ucot1.jpeg',
  '/xidmetler/huquq1.jpeg'
]

const Services = () => {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const services = serviceSlugs.map((slug, index) => ({
    slug,
    backgroundImage: backgroundImages[index],
    thumbnailImage: thumbnailImages[index],
    title: t(`services.${slug}.title`),
    content: t(`services.${slug}.content`, { returnObjects: true })
  }))

  const moveSlider = (direction) => {
    if (isAnimating) return
    setIsAnimating(true)
    if (direction === 'next') {
      setCurrentIndex((prev) => (prev + 1) % services.length)
    } else {
      setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
    }
    setTimeout(() => setIsAnimating(false), 600)
  }

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === 'ArrowRight') moveSlider('next')
      else if (event.key === 'ArrowLeft') moveSlider('prev')
    }
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [])

  const currentService = services[currentIndex]

  return (
    <div className="relative bg-gray-900 min-h-screen">
      <Header />

      {/* Slider / Content */}
      <div className="relative w-full min-h-screen overflow-hidden pt-20">
        {/* Background with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1, rotateX: 5 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateX: -5 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${currentService.backgroundImage}')`, transform: 'translateZ(0)' }}
          />
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-black/90" />
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -50, rotateX: -15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-5xl mx-auto px-6 md:px-16 flex flex-col items-start justify-center h-full text-white"
          >
            <motion.h1 
              initial={{ y: 100, opacity: 0, rotateX: 30 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-8xl font-black mb-8 md:mb-12 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent"
              style={{ textShadow: '0 0 30px rgba(0,150,255,0.5), 0 0 60px rgba(0,150,255,0.3)' }}
            >
              {currentService.title}
            </motion.h1>

            <motion.div
              initial={{ y: 80, opacity: 0, rotateX: 20 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-8 md:mb-12 space-y-4 w-full"
            >
              {currentService.content.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: -60, opacity: 0, rotateY: -15 }}
                  animate={{ x: 0, opacity: 1, rotateY: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 hover:from-white/10 hover:to-white/20 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <Link to={`/services/${currentService.slug}`}>
              <motion.button
                initial={{ y: 60, opacity: 0, rotateX: 25 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotateX: -5, boxShadow: '0 20px 40px rgba(0,150,255,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-bold text-lg transition-all duration-300 border border-white/20 backdrop-blur-sm"
              >
                {t('services.detail')}
              </motion.button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails section (content-in altında) */}
      <div className="w-full flex md:flex-col flex-row justify-center md:justify-start gap-4 px-4 py-6 overflow-x-auto scrollbar-none">
        {services.map((service, index) => (
          <motion.button
            key={service.slug}
            onClick={() => !isAnimating && setCurrentIndex(index)}
            className={`flex-shrink-0 relative group overflow-hidden rounded-xl
              ${index === currentIndex ? 'w-40 h-40 md:w-48 md:h-48 border-2 border-cyan-400 shadow-lg shadow-cyan-400/50' : 'w-32 h-32 md:w-40 md:h-48 border border-white/30 opacity-70 hover:opacity-100'}
            `}
          >
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url('${service.thumbnailImage}')` }}
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-sm font-semibold">
              {service.title}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default Services
