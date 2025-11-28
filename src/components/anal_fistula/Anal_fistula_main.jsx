import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/config';
import api from '../../services/api';

const Anal_fistula_main = () => {
  const [sectionsData, setSectionsData] = useState([]);
  const [conclusionData, setConclusionData] = useState({
    title: 'Conclusion',
    description: 'An anal fistula can be uncomfortable and recurrent, but it is treatable with proper medical or surgical intervention. If you suspect an anal fistula, early diagnosis and treatment are key to avoiding complications and promoting healing.',
    buttonText: 'Book a Consultation',
  });

  useEffect(() => {
    const fetchMain = async () => {
      try {
        const res = await api.get('/anal-fistula/main');
        if (res.data) {
          setSectionsData(res.data.sections || []);
          setConclusionData(res.data.conclusion || {
            title: 'Conclusion',
            description: '',
            buttonText: 'Book a Consultation',
          });
        }
      } catch (error) {
        console.error('Error fetching anal fistula main:', error);
        // Keep default/empty state if API fails
      }
    };
    fetchMain();
  }, []);

  return (
    <div className="bg-white py-12 md:py-16 lg:p-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 lg:px-16 space-y-8 md:space-y-12">
        {sectionsData.map((section, index) => {
          // Alternate column layout: odd index (0, 2, 4...) = image left, even index (1, 3, 5...) = image right
          const isImageLeft = index % 2 === 0;
          const gridCols = isImageLeft ? 'lg:grid-cols-[35%_65%]' : 'lg:grid-cols-[65%_35%]';

          return (
            <div key={index} className="bg-[#FEF6F6] rounded-2xl shadow-lg overflow-hidden">
              <div className={`grid grid-cols-1 ${gridCols} gap-6 lg:gap-8 items-center p-6 md:p-8 lg:p-10`}>
                {/* Image - Always on top for mobile, position alternates on lg screens */}
                <div className={`md:h-[50vh] ${!isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                
                {/* Content - Always on bottom for mobile, position alternates on lg screens */}
                <div className={`${!isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-[Raleway] mb-6 text-black/90">
                    {section.title}
                  </h2>
                  <ul className="space-y-2 md:space-y-3 text-base md:text-lg md:ml-6 font-[Raleway] text-gray-700 leading-relaxed list-none">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="text-[#EC7979] font-bold flex-shrink-0 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Conclusion Section */}
      <div className='max-w-[1600px] p-8 md:p-10 m-auto'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-[Raleway] mb-4 text-black/90'>
          {conclusionData.title}
        </h1>
        <p className='text-base md:text-lg font-[Raleway] mb-4 text-gray-700 leading-relaxed'>
          {conclusionData.description}
        </p>
        <Link to={ROUTES.CONTACT}>
          <button className="bg-[#EC7979] text-white py-3 px-8 rounded-4xl cursor-pointer hover:bg-[#d86565] transition-colors font-medium text-base md:text-lg font-[Raleway]">
            {conclusionData.buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Anal_fistula_main;

