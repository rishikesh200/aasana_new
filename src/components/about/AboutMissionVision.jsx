import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const AboutMissionVision = () => {
  const [data, setData] = useState({
    missionHeading: '',
    missionText: '',
    visionHeading: '',
    visionText: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/about/mission-vision');
        setData(res.data);
      } catch (error) {
        console.error('Error fetching About Mission Vision data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className='max-w-[1600px] m-auto overflow-hidden py-12 lg:py-20 bg-white'>
      <div className='w-[95%] m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
          {/* Mission Box */}
          <div className='bg-[#FFF5F5] border border-[#FFE5E5] rounded-xl p-6 lg:p-8'>
            <h2 className='font-[Raleway] text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-4'>
              {data?.missionHeading || 'Our Mission'}
            </h2>
            <p className='font-[Raleway] text-black text-base sm:text-lg leading-relaxed'>
              {data?.missionText || ''}
            </p>
          </div>

          {/* Vision Box */}
          <div className='bg-[#FFF5F5] border border-[#FFE5E5] rounded-xl p-6 lg:p-8'>
            <h2 className='font-[Raleway] text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-4'>
              {data?.visionHeading || 'Our Vision'}
            </h2>
            <p className='font-[Raleway] text-black text-base sm:text-lg leading-relaxed'>
              {data?.visionText || ''}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVision;

