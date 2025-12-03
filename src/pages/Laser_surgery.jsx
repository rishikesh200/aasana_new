import React from 'react';
import Laser_surgery_hero from '../components/laser_surgery/Laser_surgery_hero';
import Laser_surgery_content from '../components/laser_surgery/Laser_surgery_content';
import WhyChooseAssana from '../components/common/WhyChooseAssana';
import HomeFrequentlyQA from '../components/home/HomeFrequentlyQA';
import HowAssanaTreats from '../components/common/HowAssanaTreats';
import Contact from '../components/common/Contact';

const Laser_surgery = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <Laser_surgery_hero />
      <Laser_surgery_content />
      <WhyChooseAssana />
      <HowAssanaTreats />
      <HomeFrequentlyQA />
      
      <Contact />
    </div>
  );
};

export default Laser_surgery;

