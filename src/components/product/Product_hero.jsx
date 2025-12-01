import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/config';
import api from '../../services/api';

const Product_hero = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await api.get('/product/hero');
        setHeroData(res.data);
      } catch (error) {
        console.error('Error fetching product hero:', error);
      }
    };
    fetchHero();
  }, []);

  // Use API data if available, otherwise use defaults
  const backgroundImage = heroData?.backgroundImage || '';
  const title = heroData?.title || 'Find the Right Supplements for Your Lifestyle';
  const description = heroData?.description || 'Explore a curated range of wellness products designed to boost energy, immunity, and overall health.';
  const buttonText = heroData?.buttonText || 'Book a Consultation';

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-24 overflow-hidden">
      {/* Background with gradient pink */}


      {/* Background Image */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="relative mx-auto z-10 p-8 lg:p-12 text-center flex flex-col items-center justify-center max-w-[70%] w-fit ">
          {/* Title - White Text */}
          <h1 className="text-4xl md:text-5xl lg:w-[90%] lg:text-[70px] leading-normal tracking-wide  font-normal font-[Raleway] mb-6  p-6 text-white  bg-[#e95e5e1a] backdrop-blur-2xl rounded-2xl ">
            {title}
          </h1>

          {/* Description Paragraph - Red Text */}
          <p className=" md:text-lg lg:text-[30px] font-[Raleway]  mb-8 leading-relaxed text-white  font-medium w-[90%] m-auto">
            {description}
          </p>

          {/* Book Consultation Button */}
          <Link to={ROUTES.CONTACT}>
            <button className="bg-[#E64C4C1A] backdrop-blur-sm text-white py-3 px-8 rounded-3xl cursor-pointer hover:bg-[#E64C4C1A] transition-colors font-medium text-base md:text-lg font-[Raleway]">
              {buttonText}
            </button>
          </Link>
        </div>


     

    </section>
  );
};

export default Product_hero;

