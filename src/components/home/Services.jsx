import React, { useEffect, useState } from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import api from "../../services/api";
import { useChatBot } from "../../contexts/ChatBotContext";

const Services = () => {
  const { toggleChatBot } = useChatBot();

  const [servicesComponentData, setServicesComponentData] = useState([]);
  const [componentHeading, setComponentHeading] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Updated to use new API endpoint
        const res = await api.get("/home/services-component");
        // Backend returns { componentHeading: '', services: [...] }
        if (res.data) {
          setComponentHeading(res.data.componentHeading || '');
          setServicesComponentData(res.data.services || []);
        }
      } catch (error) {
        console.error("Error fetching Services data:", error);
      }
    };
    fetchData();
  }, []);


        

  const [activeBox, setActiveBox] = useState(null);

  const toggleBox = (id) => {
    setActiveBox(activeBox === id ? null : id);
  };

  return (
    <section className="max-w-[1600px] m-auto overflow-hidden" id="services">
      <div className='w-[95%] m-auto'>
      <h1 className="font-[Raleway] smallShadow lg:textShadow text-black text-3xl sm:text-4xl lg:text-6xl  mt-10 lg:mt-30 text-center">
        {componentHeading}
      </h1>

      <div className="mt-12">
        {servicesComponentData.map((item, index) => {
          const isActive = activeBox === index;

          return (
            <div key={index}>
              {/* Service Header */}
              <div
                className="border-1 border-[#ed7d7d] w-full h-21 sm:h-25 rounded-2xl flex justify-between items-center mt-12 cursor-pointer shadow-lg"
                onClick={() => toggleBox(index)}
              >
                <h1 className="text-lg sm:text-3xl lg:text-4xl  font-[Raleway] ml-6 lg:ml-12">
                  {item.serviceHeading}
                </h1>

                {/* Animated Icon Circle */}
                <div
                  className={`bg-[white] rotate-[25deg]   border-1 mt-10 border-t-[#ed7d7d] border-l-[#ed7d7d] border-r-[white] border-b-[white] flex justify-center items-center rounded-full transition-all duration-500 ease-in-out ${
                    isActive ? "h-20  sm:h-24 w-20 sm:w-24 relative top-0" : "h-24 sm:h-28 w-24 sm:w-28 relative top-3 left-1"
                  }`}
                >
                  <div
                    className={`bg-[#EC7979] flex justify-center items-center rounded-full transition-all duration-500 ease-in-out ${
                      isActive ? "h-16 sm:h-20 w-16 sm:w-20" : "h-20 sm:h-24 w-20 sm:w-24"
                    }`}
                  >
                    {isActive ? (
                      <BsArrowUpRight className="text-3xl rotate-[-23deg] font-extrabold transition-transform duration-500 " />
                    ) : (
                      <BsArrowDownRight className="text-3xl rotate-[-23deg] font-extrabold transition-transform duration-500" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expandable Box */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isActive
                    ? "max-h-[1000px] opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-[#EC7979] rounded-2xl p-4 sm:p-10">
                  <p className="text-white text-base sm:text-lg mt-4">{item.serviceOpenPara1}</p>
                  <p className="text-white text-base sm:text-lg mt-4">{item.serviceOpenPara2}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="flex justify-center items-center mt-10">
            <button onClick={toggleChatBot} className="bg-[#EC7979] text-sm sm:text-lg p-3 rounded-4xl px-12 font-semibold hover:text-white 
                hover:bg-[#F05A5A] flex items-center">
                Get Started
            
            </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;
