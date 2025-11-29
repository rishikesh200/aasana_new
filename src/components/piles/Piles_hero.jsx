import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/config';
import api from '../../services/api';

const Piles_hero = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await api.get('/piles/hero');
        setHeroData(res.data);
      } catch (error) {
        console.error('Error fetching piles hero:', error);
      }
    };
    fetchHero();
  }, []);

  // Use API data if available, otherwise use defaults
  const backgroundImage = heroData?.backgroundImage || '';
  const title = heroData?.title || 'Banding of Piles or Haemorrhoids';
  const description = heroData?.description || 'Explore a curated range of wellness products designed to boost energy, immunity, and overall health.';
  const buttonText = heroData?.buttonText || 'Book a Consultation';

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-24">
      {/* Background Image */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Semi-transparent Overlay with Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 lg:px-8">
        <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 lg:p-12 text-center">
          {/* Title - White Text */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal font-[Raleway] mb-6 text-white">
            {title}
          </h1>

          {/* Description Paragraph - Red Text */}
          <p className="text-base md:text-lg lg:text-xl font-[Raleway] mb-8 leading-relaxed text-[#EC7979]">
            {description}
          </p>

          {/* Book Consultation Button */}
          <Link to={ROUTES.CONTACT}>
            <button className="bg-[#EC7979] text-white py-3 px-8 rounded-3xl cursor-pointer hover:bg-[#d86565] transition-colors font-medium text-base md:text-lg font-[Raleway]">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Piles_hero;

