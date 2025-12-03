import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const Colon_rectal_cancer_main = () => {
  const [sectionsData, setSectionsData] = useState([]);

  useEffect(() => {
    const fetchMain = async () => {
      try {
        const res = await api.get('/colon-rectal-cancer/main');
        if (res.data) {
          setSectionsData(res.data.sections || []);
        }
      } catch (error) {
        console.error('Error fetching colon rectal cancer main:', error);
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
                <div className={`md:h-[50vh] ${!isImageLeft ? 'lg:order-2' : 'lg:order-1'} relative`}>
                  {section.image && (
                    <img
                      src={section.image}
                      alt={section.imageAlt || section.title}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  )}
                  {/* Image Title Overlay */}
                  {section.imageTitle && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-4 py-3 rounded-b-lg">
                      <p className="text-white text-lg md:text-xl font-[Raleway] font-medium text-center uppercase">
                        {section.imageTitle}
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Content - Always on bottom for mobile, position alternates on lg screens */}
                <div className={`${!isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Title */}
                  {section.title && (
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-[Raleway] mb-6 text-[#E64C4CE5]">
                      {section.title}
                    </h2>
                  )}

                  {/* Description */}
                  {section.description && (
                    <p className="text-base md:text-lg font-[Raleway] mb-6 text-gray-700 leading-relaxed">
                      {section.description}
                    </p>
                  )}

                  {/* List Items */}
                  {section.items && section.items.length > 0 && (
                    <ul className="space-y-2 md:space-y-3 text-base md:text-lg md:ml-6 font-[Raleway] text-gray-700 leading-relaxed list-none">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <span className="text-[#EC7979] font-bold shrink-0 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Colon_rectal_cancer_main;

