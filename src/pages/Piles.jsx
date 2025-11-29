import React from 'react';
import Piles_hero from '../components/piles/Piles_hero';
import Piles_content from '../components/piles/Piles_content';
import FrequentlyQA from '../components/home/FrequentlyQA';

const Piles = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <Piles_hero />
      <Piles_content />
      <FrequentlyQA/>
    </div>
  );
};

export default Piles;

