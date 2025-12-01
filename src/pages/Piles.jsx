import React from 'react';
import Piles_hero from '../components/piles/Piles_hero';
import Piles_content from '../components/piles/Piles_content';
import WhyChooseAssana from '../components/common/WhyChooseAssana';
import HomeFrequentlyQA from '../components/home/HomeFrequentlyQA';
import HowAssanaTreats from '../components/common/HowAssanaTreats';
import Contact from '../components/common/Contact';

const Piles = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <Piles_hero />
      <Piles_content />
      <WhyChooseAssana />
      <HomeFrequentlyQA />
      <HowAssanaTreats />
      <Contact />
    </div>
  );
};

export default Piles;


