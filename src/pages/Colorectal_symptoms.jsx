import React from 'react';
import Colorectal_symptoms_hero from '../components/colorectal_symptoms/Colorectal_symptoms_hero';
import Colorectal_symptoms_main from '../components/colorectal_symptoms/Colorectal_symptoms_main';
import HomeFrequentlyQA from '../components/home/HomeFrequentlyQA';
import Contact from '../components/common/Contact';
import WhyChooseAssana from '../components/common/WhyChooseAssana';
import HowAssanaTreats from '../components/common/HowAssanaTreats';

const Colorectal_symptoms = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <Colorectal_symptoms_hero />
      <Colorectal_symptoms_main />
      <WhyChooseAssana/>
      <HowAssanaTreats/>
      <HomeFrequentlyQA/>
      <Contact/>
    </div>
  );
};

export default Colorectal_symptoms;