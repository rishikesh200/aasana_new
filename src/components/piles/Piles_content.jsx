import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const Piles_content = () => {
  const [contentData, setContentData] = useState({
    mainTitle: 'All you need to know..',
    leftTopSection: { title: '', description: '' },
    leftBottomSection: { title: '', description: '' },
    centerImage: '',
    centerImageAlt: '',
    rightTopSection: { title: '', description: '' },
    rightBottomSection: { title: '', description: '' },
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await api.get('/piles/content');
        if (res.data) {
          setContentData({
            mainTitle: res.data.mainTitle || 'All you need to know..',
            leftTopSection: res.data.leftTopSection || { title: '', description: '' },
            leftBottomSection: res.data.leftBottomSection || { title: '', description: '' },
            centerImage: res.data.centerImage || '',
            centerImageAlt: res.data.centerImageAlt || '',
            rightTopSection: res.data.rightTopSection || { title: '', description: '' },
            rightBottomSection: res.data.rightBottomSection || { title: '', description: '' },
          });
        }
      } catch (error) {
        console.error('Error fetching piles content:', error);
      }
    };
    fetchContent();
  }, []);

  // Helper function to render a text box section
  const renderTextBox = (section, index) => {
    if (!section.title && !section.description) return null;
    
    return (
      <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-6">
        {section.title && (
          <h3 className="text-xl md:text-2xl font-[Raleway] font-semibold mb-4 text-[#EC7979]">
            {section.title}
          </h3>
        )}
        {section.description && (
          <div className="text-base md:text-lg font-[Raleway] text-gray-700 leading-relaxed whitespace-pre-line">
            {section.description}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 lg:px-16">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-[Raleway] font-semibold text-center mb-12 md:mb-16 text-black/90">
          {contentData.mainTitle}
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col">
            {renderTextBox(contentData.leftTopSection, 'left-top')}
            {renderTextBox(contentData.leftBottomSection, 'left-bottom')}
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {/* Right Top Section */}
            {renderTextBox(contentData.rightTopSection, 'right-top')}

            {/* Center Image */}
            {contentData.centerImage && (
              <div className="w-full mb-6">
                <img
                  src={contentData.centerImage}
                  alt={contentData.centerImageAlt || 'Center image'}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            )}

            {/* Right Bottom Section */}
            {renderTextBox(contentData.rightBottomSection, 'right-bottom')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Piles_content;

