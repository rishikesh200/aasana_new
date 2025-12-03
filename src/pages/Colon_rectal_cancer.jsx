import React from 'react';
import Colon_rectal_cancer_hero from '../components/colon_rectal_cancer/Colon_rectal_cancer_hero';
import Colon_rectal_cancer_main from '../components/colon_rectal_cancer/Colon_rectal_cancer_main';
import HomeFrequentlyQA from '../components/home/HomeFrequentlyQA';

const Colon_rectal_cancer = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <Colon_rectal_cancer_hero />
      <Colon_rectal_cancer_main />
      <HomeFrequentlyQA/>
    </div>
  );
};

export default Colon_rectal_cancer;