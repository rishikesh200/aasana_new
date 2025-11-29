import React from 'react';
import Pelvic_floor_hero from '../components/pelvic_floor/Pelvic_floor_hero';
import Pelvic_floor_main from '../components/pelvic_floor/Pelvic_floor_main';
import FrequentlyQA from '../components/home/FrequentlyQA';

const Pelvic_floor = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <Pelvic_floor_hero />
      <Pelvic_floor_main />
      <FrequentlyQA/>
    </div>
  );
};

export default Pelvic_floor;

