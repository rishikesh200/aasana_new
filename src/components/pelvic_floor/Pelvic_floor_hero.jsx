import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/config';
import api from '../../services/api';

const Pelvic_floor_hero = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await api.get('/pelvic-floor/hero');
        setHeroData(res.data);
      } catch (error) {
        console.error('Error fetching pelvic floor hero:', error);
      }
    };
    fetchHero();
  }, []);

  // Use API data if available, otherwise use defaults
  const backgroundImage = heroData?.backgroundImage || '';
  const title = heroData?.title || 'Pelvic Floor Problems';
  const description = heroData?.description || 'At Azura Colorectal and Gut Wellness Clinic, we specialize in diagnosing and treating complex pelvic floor problems that can affect your bowel functions and overall quality of life. These conditions often require expert care and a multidisciplinary approach to ensure effective management and recovery. Below, we highlight four key pelvic floor problems and how we can help.';
  const buttonText = heroData?.buttonText || 'Book Consultation';

  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-24 " style={{ backgroundColor: '#0000000D' }}>
      <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="relative z-10">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal font-[Raleway] mb-6 text-black">
              {title}
            </h1>

            {/* Description Paragraph */}
            <p className="text-base md:text-lg lg:text-xl font-[Raleway] mb-8 leading-relaxed text-black">
              {description}
            </p>

            {/* Book Consultation Button */}
            <Link to={ROUTES.CONTACT}>
              <button className="bg-[#EC7979] text-white py-3 px-8 rounded-3xl cursor-pointer hover:bg-[#d86565] transition-colors font-medium text-base md:text-lg font-[Raleway]">
                {buttonText}
              </button>
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full h-[400px] lg:h-[700px] ">
            {backgroundImage ? (
              <img
                src={backgroundImage}
                alt="Pelvic Floor Problems"
                className="w-full h-full object-contain rounded-lg"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">No image</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pelvic_floor_hero;

