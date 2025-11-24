import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/config';

const Anal_fistula_main = () => {
  return (
    <div className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-16 space-y-8 md:space-y-12">
        
        {/* Section 1: What Causes an Anal Fistula? */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center p-6 md:p-8 lg:p-10">
            {/* Image Left */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
                alt="What Causes Anal Fistula"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            {/* Text Right */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[Raleway] mb-6 text-black">
                What Causes an Anal Fistula?
              </h2>
              <ul className="space-y-3 text-base md:text-lg font-[Raleway] text-gray-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#EC7979] font-bold mt-1">•</span>
                  <span><strong>Anal abscess:</strong> Most anal fistulas develop from an untreated or inadequately treated anal abscess.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EC7979] font-bold mt-1">•</span>
                  <span><strong>Crohn's disease:</strong> An inflammatory bowel disease that can cause ulcers or fistulas in the digestive tract.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EC7979] font-bold mt-1">•</span>
                  <span><strong>Infections:</strong> Certain infections like tuberculosis or sexually transmitted infections (e.g., chlamydia) can lead to fistulas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EC7979] font-bold mt-1">•</span>
                  <span><strong>Trauma:</strong> Injury to the anal or rectal area may lead to a fistula.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EC7979] font-bold mt-1">•</span>
                  <span><strong>Radiation therapy:</strong> Rarely, radiation treatment for cancers of the pelvic area can cause a fistula.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Symptoms of Anal Fistula */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center p-6 md:p-8 lg:p-10">
            {/* Text Left */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[Raleway] mb-6 text-black">
                Symptoms of Anal Fistula
              </h2>
              <ul className="space-y-3 text-base md:text-lg font-[Raleway] text-gray-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#EC7979] font-bold mt-1">•</span>
                  <span><strong>Recurrent abscesses:</strong> Constant or repeated infections near the anus.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EC7979] font-bold mt-1">•</span>
                  <span><strong>Discharge:</strong> Pus or blood draining from an opening near the anus, often accompanied by a foul smell.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EC7979] font-bold mt-1">•</span>
                  <span><strong>Pain and Swelling:</strong> Pain around the anus, especially when sitting, moving, or passing stool.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EC7979] font-bold mt-1">•</span>
                  <span><strong>Irritation:</strong> Skin irritation or redness around the anal opening.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EC7979] font-bold mt-1">•</span>
                  <span><strong>Fever or Malaise:</strong> If the fistula is infected or causes an abscess.</span>
                </li>
              </ul>
            </div>
            {/* Image Right */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
                alt="Symptoms"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Diagnosis of Anal Fistula */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center p-6 md:p-8 lg:p-10">
            {/* Image Left */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
                alt="Diagnosis"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            {/* Text Right */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[Raleway] mb-6 text-black">
                Diagnosis of Anal Fistula
              </h2>
              <ul className="space-y-3 text-base md:text-lg font-[Raleway] text-gray-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#EC7979] font-bold mt-1">•</span>
                  <span><strong>Physical Examination:</strong> A healthcare provider will often be able to diagnose a fistula through a physical exam, especially if the external opening is visible.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EC7979] font-bold mt-1">•</span>
                  <span><strong>Anoscopy:</strong> A small scope may be inserted into the anus to visualize the inside of the anal canal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EC7979] font-bold mt-1">•</span>
                  <span><strong>Imaging Tests:</strong> In complex cases, imaging tests such as MRI or endoanal ultrasound may be used to determine the exact location and extent of the fistula.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

    </div>
    </div>
  );
};

export default Anal_fistula_main;

