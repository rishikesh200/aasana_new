import React, { useEffect, useState } from 'react'
import axios from 'axios';
import api from '../../services/api';

const FrequentlyQA = () => {
  const [askedQuestionsComponentData, setAskedQuestionsComponentData] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {  
      try {
        // Updated to use new API endpoint
        const res = await api.get("/home/asked-questions");
        setAskedQuestionsComponentData(res.data);
      } catch (error) {
        console.error("Error fetching Asked Questions data:", error);
      }
    };
    fetchData();
  }, []);

  // ⭐ Prevent crash: if data not loaded yet, return nothing
  if (!askedQuestionsComponentData) {
    return null; 
  }

  const faqs = askedQuestionsComponentData.faqs || [];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='max-w-[1600px] m-auto overflow-hidden w-[95%] lg:w-[75%]'>

      {/* Heading */}
      <h1 className="font-[Raleway] smallShadow lg:textShadow text-black text-3xl sm:text-4xl lg:text-6xl mt-8 lg:mt-15 text-center">
        {askedQuestionsComponentData?.componentHeading}
      </h1>

      {/* FAQs */}
      <div className='mt-14'>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 rounded-xl overflow-hidden">

            <button
              className="w-full text-[#EB5466] flex justify-between font-medium items-center px-4 py-5 text-base sm:text-xl font-[Raleway] bg-[#0000000a] text-left cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              {faq.questionHeading}
              <span
                className={`transform text-black transition-transform ${
                  openIndex === index ? "rotate-45" : ""
                } text-3xl`}
              >
                +
              </span>
            </button>

            {openIndex === index && (
              <div className="px-4 pb-4 bg-[#0000000a] cursor-pointer font-[Raleway] text-black font-medium text-base">
                {faq.answerPara}
              </div>
            )}

          </div>
        ))}
      </div>

    </section>
  );
};

export default FrequentlyQA;
