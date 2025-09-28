import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AccordionItem = ({ title, content, isActive, onToggle, id }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isActive && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isActive]);

  return (
    <motion.div
      className={`accordion-item relative border rounded-2xl overflow-hidden
        ${isActive ? 'border-[#457eb0] shadow-2xl' : 'border-[#a3bbe4] shadow-lg'}
        bg-white/70 backdrop-blur-sm transition-all duration-500 hover:shadow-xl
        ${isActive ? 'ring-2 ring-[#3d5aa4]' : ''}
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: id * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0b3294] via-[#457eb0] to-[#3d5aa4]
        ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`} />
      
      <button
        onClick={onToggle}
        className={`accordion-header relative flex justify-between items-center w-full px-8 py-6 text-left
         text-[#0b3294] font-bold text-lg cursor-pointer group
         bg-gradient-to-r from-white/80 to-white/60 hover:from-[#457eb0]/30 hover:to-[#3d5aa4]/20
         transition-all duration-400 ${isActive ? 'bg-gradient-to-r from-[#457eb0]/40 to-[#3d5aa4]/30' : ''}
        `}
        aria-expanded={isActive}
        aria-controls={`accordion-content-${id}`}
        id={`accordion-header-${id}`}
      >
        <span className="relative z-10 group-hover:text-[#3d5aa4] transition-colors duration-300">
          {title}
        </span>
        
        <div className={`absolute inset-0 bg-gradient-to-r from-[#457eb0]/20 to-[#3d5aa4]/15 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl`} />
        
        <motion.div
          animate={{ 
            rotate: isActive ? 180 : 0,
            scale: isActive ? 1.1 : 1
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="relative z-10"
        >
          <div className={`p-2 rounded-full ${isActive ? 'bg-[#457eb0]' : 'bg-[#a3bbe4]'} 
            group-hover:bg-[#457eb0] transition-all duration-300`}>
            <ChevronDown size={18} className="text-white" />
          </div>
        </motion.div>
      </button>
      
      <motion.div
        id={`accordion-content-${id}`}
        role="region"
        aria-labelledby={`accordion-header-${id}`}
        initial={false}
        animate={{ height, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1], opacity: { duration: 0.3 } }}
        style={{ overflow: 'hidden' }}
        className="accordion-content relative"
        ref={contentRef}
      >
        <motion.div 
          className="px-8 pb-8 pt-2 text-[#0b3294] text-base leading-relaxed select-text
           bg-gradient-to-b from-[#457eb0]/20 to-white/50"
          initial={{ y: -20 }}
          animate={{ y: isActive ? 0 : -20 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#0b3294] via-[#457eb0] to-[#3d5aa4] mb-4" />
          <p className="text-[#3d5aa4] leading-7">{content}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();

  const accordionData = t('accordion.items', { returnObjects: true });

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-[60vh] max-w-7xl mx-auto rounded-3xl flex flex-col items-center justify-start 
     bg-gradient-to-br from-white/60 via-[#457eb0]/30 to-white/50 backdrop-blur-lg p-10 gap-10 
     shadow-2xl border border-white/30 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#457eb0]/20 via-transparent to-[#3d5aa4]/10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#457eb0]/20 rounded-full blur-3xl transform translate-x-48 -translate-y-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3d5aa4]/15 rounded-full blur-3xl transform -translate-x-40 translate-y-40 pointer-events-none" />
      
      <motion.h2 
        className="text-4xl font-bold text-[#0b3294] mb-6 select-none relative z-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span className="bg-gradient-to-r from-[#0b3294] via-[#457eb0] to-[#3d5aa4] bg-clip-text text-transparent">
          {t('accordion.title')}
        </span>
      </motion.h2>
      
      <div className="meqsedimiz rounded-2xl w-full max-w-4xl relative z-10">
        <div className="accordion flex flex-col gap-6">
          {accordionData.map(({ title, content }, idx) => (
            <AccordionItem 
              key={idx}
              id={idx}
              title={title}
              content={content}
              isActive={activeIndex === idx}
              onToggle={() => toggle(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
