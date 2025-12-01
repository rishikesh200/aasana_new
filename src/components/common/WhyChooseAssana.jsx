import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const WhyChooseAssana = () => {
  const [whyChooseData, setWhyChooseData] = useState({
    title: 'Why Choose Assana for Piles Treatment?',
    cards: [
      {
        title: 'Expertise in Colorectal Care',
        description: 'Our multidisciplinary team includes colorectal specialists, physiotherapists, nutritionists, and lifestyle coaches',
        icon: '',
        iconAlt: 'Expertise in Colorectal Care',
      },
      {
        title: 'Advanced Technology',
        description: 'State-of-the-art equipment ensures precision and comfort during the procedure.',
        icon: '',
        iconAlt: 'Advanced Technology',
      },
      {
        title: 'Comprehensive Care',
        description: 'Alongside the procedure, we provide personalized diet and lifestyle recommendations to prevent recurrence.',
        icon: '',
        iconAlt: 'Comprehensive Care',
      },
      {
        title: 'Patient-Centric Approach',
        description: 'We prioritize your comfort, privacy, and recovery every step of the way.',
        icon: '',
        iconAlt: 'Patient-Centric Approach',
      },
    ],
  });

  useEffect(() => {
    const fetchWhyChoose = async () => {
      try {
        const res = await api.get('/common/why-choose-assana');
        if (res.data) {
          setWhyChooseData({
            title: res.data.title || 'Why Choose Assana for Piles Treatment?',
            cards: res.data.cards || whyChooseData.cards,
          });
        }
      } catch (error) {
        console.error('Error fetching why choose data:', error);
      }
    };
    fetchWhyChoose();
  }, []);

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-[#E16C6C1A] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[Raleway] text-center mb-12 md:mb-16 text-black">
          {whyChooseData.title}
        </h2>

        {/* Cards Grid - 4 cards in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {whyChooseData.cards.map((card, index) => {
            const isEven = index % 2 === 1; // 2nd and 4th cards (index 1 and 3)
            const cardBg = isEven ? 'bg-[#EC7979]' : 'bg-white';
            const textColor = isEven ? 'text-white' : 'text-black';
            
            return (
              <div
                key={index}
                className={`${cardBg} rounded-xl shadow-lg p-6 md:p-8 flex flex-col h-full relative`}
              >
                {/* Card Title */}
                <h3 className={`text-xl md:text-2xl font-bold font-[Raleway] ${textColor} mb-4`}>
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className={`text-base md:text-lg font-[Raleway] ${textColor} mb-6 leading-relaxed grow`}>
                  {card.description}
                </p>

                {/* Card Icon - Bottom Right */}
                <div className="mt-auto flex justify-end items-end">
                  {card.icon ? (
                    <img
                      src={card.icon}
                      alt={card.iconAlt || card.title}
                      className="w-25 h-25 md:w-24 md:h-24 object-contain"
                      style={{ filter: isEven ? 'brightness(0) invert(1)' : 'none' }}
                    />
                  ) : (
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className={`text-xs ${isEven ? 'text-gray-300' : 'text-gray-400'}`}>No icon</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAssana;

