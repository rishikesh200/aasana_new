import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/config';
import api from '../../services/api';

const Colorectal_symptoms_hero = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => { 
    const fetchHero = async () => {
      try {
        const res = await api.get('/colorectal-symptoms/hero');
        setHeroData(res.data);
      } catch (error) {
        console.error('Error fetching colorectal symptoms hero:', error);
      }
    };
    fetchHero();
  }, []);

  // Use API data if available, otherwise use defaults
  const backgroundImage = heroData?.backgroundImage || '';
  const title = heroData?.title || 'Colorectal Symptoms';
  const description = heroData?.description || 'Understanding and recognizing colorectal symptoms early is crucial for effective treatment and better outcomes. At Azura Colorectal and Gut Wellness Clinic, we provide comprehensive evaluation and care for a wide range of colorectal conditions.';
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
                alt="Colorectal Symptoms"
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

export default Colorectal_symptoms_hero;

