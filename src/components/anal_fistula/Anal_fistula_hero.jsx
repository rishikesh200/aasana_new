import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/config'
import anal_fistula_hero from '../../assets/images/anal_fistula_hero.png'

const Anal_fistula_hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start pt-20 lg:pt-24">
      {/* Background Image */}
      <img
        src={anal_fistula_hero}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content Overlay - Direct text on background, no card */}
      <div className="relative z-10 w-full lg:w-[50%] ml-8 lg:ml-16 xl:ml-24 my-8 lg:my-0 px-4 lg:px-0">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Raleway] mb-6 text-black">
          Anal Fistula
        </h1>

        {/* Description Paragraph */}
        <p className="text-base md:text-lg lg:text-xl font-[Raleway] mb-8 leading-relaxed text-black max-w-2xl">
          An anal fistula is an abnormal tunnel that forms between the inside of the anal canal and the skin near the anus. It often develops due to an infection in an anal gland, which can cause an abscess (a pocket of pus) that drains to the skin. When the abscess heals incompletely or reopens, it can leave behind a fistula.
        </p>

        {/* Book Consultation Button */}
        <Link to={ROUTES.CONTACT}>
          <button className="bg-[#EC7979] text-white py-3 px-8 rounded-lg cursor-pointer hover:bg-[#d86565] transition-colors font-medium text-base md:text-lg font-[Raleway]">
            Book a Consultation
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Anal_fistula_hero;
