import React from 'react';
import BandingPiles_hero from '../components/banding_piles/BandingPiles_hero';
import BandingPiles_content from '../components/banding_piles/BandingPiles_content';
import WhyChooseAssana from '../components/common/WhyChooseAssana';
import HomeFrequentlyQA from '../components/home/HomeFrequentlyQA';
import HowAssanaTreats from '../components/common/HowAssanaTreats';
import Contact from '../components/common/Contact';

const Banding_piles = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <BandingPiles_hero />
      <BandingPiles_content />
      <WhyChooseAssana />
      <HowAssanaTreats />
      <HomeFrequentlyQA />
      
      <Contact />
    </div>
  );
};

export default Banding_piles;
