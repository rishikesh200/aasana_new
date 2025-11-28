import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const AboutWhyChoose = () => {
  const [data, setData] = useState({
    heading: '',
    subtitle: '',
    buttonText: '',
    description: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/about/why-choose');
        setData(res.data);
      } catch (error) {
        console.error('Error fetching About Why Choose data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className='max-w-[1600px] m-auto overflow-hidden py-12 lg:py-20'>
      <div className='w-[95%] m-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
          {/* Left Column */}
          <div className='flex flex-col'>
            <h1 className='font-[Raleway] text-black text-3xl sm:text-4xl lg:text-5xl font-bold mb-4'>
              {data?.heading || 'Why Choose ASSANA?'}
            </h1>
            <h2 className='font-[Raleway] text-black text-lg sm:text-xl lg:text-2xl mb-6'>
              {data?.subtitle || 'Holistic Colorectal & Gut Wellness For Everyone'}
            </h2>
            <Link to="/contact">
              <button className="bg-[#EC7979] text-white text-sm sm:text-base lg:text-lg px-6 py-3 rounded-full hover:bg-[#F05A5A] transition-colors font-semibold inline-flex items-center gap-2">
                {data?.buttonText || 'To Know More Reach Out'}
                <span>→</span>
              </button>
            </Link>
          </div>

          {/* Right Column */}
          <div className='flex flex-col'>
            <p className='font-[Raleway] text-black text-base sm:text-lg leading-relaxed'>
              {data?.description || ''}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChoose;

