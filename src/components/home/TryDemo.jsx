import React, { useEffect, useState } from 'react'
import star from '../../assets/images/star.png'
import api from '../../services/api';
import { Link } from 'react-router-dom';
import truDemoBg from '../../assets/images/truDemoBg.png'
import { useChatBot } from '../../contexts/ChatBotContext';

const TryDemo = () => {
  const { toggleChatBot } = useChatBot();

     const [getStartedComponentData, setSetStartedComponentData] = useState([]);
        
            useEffect(()=>{
               const fetchData = async () => {
                try {
                  const res = await api.get("/getStartedComponent/dataGet");
                  setSetStartedComponentData(res.data.data);
                } catch (error) {
                  console.error("Error fetching Get Started data:", error);
                }
               }
               fetchData();
        
            },[])

  return (
    <section className='w-full py-20 px-4 relative overflow-hidden'>
      {/* Blurred Background */}
      <div 
        className='absolute inset-0 bg-cover bg-center bg-no-repeat  scale-110'
        style={{
          backgroundImage: `url(${truDemoBg})`,
        }}
      >
      </div>

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black/40'></div>

      {/* Content Card */}
      <div className='relative z-10 max-w-4xl mx-auto'>
        <div className='backdrop-blur-[30px] rounded-2xl p-8 md:p-12 shadow-4xl border-1 border-[#6d6c6c]'>
          {/* Title */}
          <h1 className="font-[Raleway] text-white text-3xl sm:text-4xl md:text-5xl  text-center mb-6">
            {getStartedComponentData?.Heading || "Not sure what you're feeling?"}
          </h1>

          {/* Paragraph with highlighted text */}
          <p className='text-white text-base sm:text-lg font-[Raleway] text-center mb-8 leading-relaxed'>
            {getStartedComponentData?.subHeading ? (
              <span>
                {getStartedComponentData.subHeading.split('AI-powered').map((part, index, array) => 
                  index === array.length - 1 ? (
                    part
                  ) : (
                    <React.Fragment key={index}>
                      {part}
                      <span className="text-[#EB5466] ">
                        AI-powered
                      </span>
                    </React.Fragment>
                  )
                )}
              </span>
            ) : (
              <>
                Let our{' '}
                <span className="text-[#EC7979] ">
                  AI-powered
                </span>
                {' '}symptom checker help identify potential gut health issues and guide you to the right care.
              </>
            )}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <button 
              onClick={toggleChatBot} 
              className="bg-[#EC7979] text-white text-sm sm:text-base md:text-lg p-3 sm:p-4 rounded-full px-6 sm:px-8 font-semibold hover:bg-[#d86565] transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <img src={star} alt='star' className='w-5 h-5' />
              Start Free Symptom Check
            </button>

            <Link 
              to="/bookNow"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <button className="bg-[#EC7979] text-white text-sm sm:text-base md:text-lg p-3 sm:p-4 rounded-full px-6 sm:px-8 font-semibold hover:bg-[#d86565] transition-colors w-full sm:w-auto">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TryDemo