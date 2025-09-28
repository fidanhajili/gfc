import React from 'react';

import TrainingSection from '../components/TrainingSection';
import Header from '../layout/Header';

const Trainings = () => {
  return (
    <>
      <Header />

      {/* Tam ekran background image (overlay olmadan) */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <img
          src="/training-images/training-bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <TrainingSection />
    </>
  );
};

export default Trainings;
