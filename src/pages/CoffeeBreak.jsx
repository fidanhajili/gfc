import React from 'react';

import Header from '../layout/Header'
import Footer from '../layout/Footer'


const CoffeeBreak = () => {
  return (
    <>
    <Header />
    <section className="max-w-4xl mx-auto p-10 text-center text-gray-600">
      <h1 className="text-3xl font-semibold mb-6 text-blue-700">Coffee Break</h1>
      <p>Bu bölmə tezliklə yenilənəcək.</p>
    </section>
<Footer />
    </>
  );
};

export default CoffeeBreak;
