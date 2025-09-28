import React from 'react';
import { motion } from 'framer-motion';
import {
 
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TrainingSection = () => {
  const { t } = useTranslation();

  const trainings = [
    {
      // icon hissəsi silindi
      title: t('trainings.items.0.title'),
      description: t('trainings.items.0.description'),
      delay: 0.1,
      link: '/training',
      image: '/training-images/trainings.png',
    },
    {
      title: t('trainings.items.1.title'),
      description: t('trainings.items.1.description'),
      delay: 0.3,
      link: '/trainers',
      image: '/training-images/trainers.jpg',
    },
    {
      title: t('trainings.items.2.title'),
      description: t('trainings.items.2.description'),
      delay: 0.5,
      link: '/coffee-break',
      image: '/training-images/coffee.jpg',
    },
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto rounded-3xl px-4 md:px-10 relative">
      <motion.h2
        className="text-5xl font-bold text-center mb-20 text-white bg-clip-text drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t('trainings.title')}
      </motion.h2>

      <div className="space-y-16">
        {trainings.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: item.delay }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-10 bg-white backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-blue-900 transition-all duration-300 relative"
            style={{ minHeight: '150px' }} // minimum hündürlük, ehtiyac varsa tənzimlə
          >
            <div className="md:w-2/3 text-center md:text-left text-white">
              <h3 className="text-5xl font-semibold mb-3 text-[#0b3294]">
                {item.title}
              </h3>
              <p className="text-blue-400 text-xl mb-6">{item.description}</p>

              <Link to={item.link}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 bg-[#0b3294] hover:bg-blue-700 text-white py-4 px-8 rounded-full shadow-md"
                  title={t('trainings.details')}
                >
                  {t('trainings.details')} <ArrowRight size={16} />
                </motion.div>
              </Link>
            </div>

            <div className="md:w-1/3 flex items-center justify-end gap-4 relative h-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 md:w-full h-80 object-cover rounded-lg shadow-lg"
                style={{ flexShrink: 0 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrainingSection;
