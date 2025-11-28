import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const AboutTeam = () => {
  const [data, setData] = useState({
    sectionHeading: '',
    teamMembers: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/about/team');
        setData(res.data);
      } catch (error) {
        console.error('Error fetching About Team data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className='w-full overflow-hidden py-12 lg:py-20 bg-gray-100'>
      <div className='w-[95%] m-auto'>
        {/* Section Heading */}
        <h1 className='font-[Raleway] text-black text-center text-3xl sm:text-4xl lg:text-5xl font-light mb-12'>
          {data?.sectionHeading || 'Meet our Team'}
        </h1>

        {/* Team Members Grid */}
        <div className='flex flex-col lg:flex-row  justify-center items-center lg:justify-evenly gap-15 lg:gap-20 max-w-[90%] m-auto'>
          {data?.teamMembers?.map((member, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-6 lg:p-8 shadow-lg relative'
            >
              {/* Role Tag - Centered above card, overlapping */}
              {member.role && (
                <div 
                  className='absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white  text-[#E54B4B] px-8 py-4 rounded-full text-base lg:text-lg font-semibold z-10'
                  style={{ boxShadow: '2.69px 0.9px 19.9px 0px #F05A5A66' }}
                >
                  {member.role}
                </div>
              )}

              {/* Content Layout - Horizontal */}
              <div className='flex flex-col md:flex-row gap-6 mt-4'>
                {/* Profile Picture - Left Side */}
                <div className='flex-shrink-0 flex justify-center md:justify-start'>
                  <div className='relative w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-[#E54B4B] overflow-hidden flex items-center justify-center'>
                    {member.profileImage ? (
                      <img
                        src={member.profileImage}
                        alt={member.name || `Team Member ${index + 1}`}
                        className='w-full h-full object-cover'
                      />
                    ) : (
                      <div className='text-white text-4xl font-bold'>
                        {(member.name || 'TM')[0].toUpperCase()}
                      </div>
                    )}
                  </div>
                </div>

                {/* Name and Title - Right Side */}
                <div className='flex-1  flex flex-col justify-center'>
                  {/* Name */}
                  <h2 className='font-[Raleway] text-[#E54B4B] text-xl lg:text-2xl font-bold mb-2'>
                    {member.name || ''}
                  </h2>

                  {/* Title */}
                  <p className='font-[Raleway] text-[#666666] text-sm lg:text-base mb-4'>
                    {member.title || ''}
                  </p>
                </div>
              </div>

              {/* Description - Full Width Below */}
              <p className='font-[Raleway] text-[#666666] text-sm lg:text-base leading-relaxed mt-4'>
                {member.description || ''}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;

