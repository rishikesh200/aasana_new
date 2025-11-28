import React from 'react';
import Anal_fistula_hero from '../components/anal_fistula/Anal_fistula_hero';
import Anal_fistula_main from '../components/anal_fistula/Anal_fistula_main';
import FrequentlyQA from '../components/home/FrequentlyQA';

const Anal_fistula = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <Anal_fistula_hero />
      <Anal_fistula_main />
      <FrequentlyQA/>
    </div>
  );
};

export default Anal_fistula;
