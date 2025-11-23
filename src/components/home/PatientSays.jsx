import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const PatientSays = () => {

  const [patientFeedbacksComponentData, setPatientFeedbacksComponentData] = useState([]);

  useEffect(() => {
    axios
      .get('https://assana-site-backend.vercel.app/api/patientFeedbackComponent/dataGet')
      .then((response) => {
        console.log("API DATA:", response.data);  
        setPatientFeedbacksComponentData(response.data.data); // ✔ FIXED
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // Prevent undefined errors
  if (!patientFeedbacksComponentData || patientFeedbacksComponentData.length === 0) {
    return null; 
  }

  const SampleNextArrow = ({ className, style, onClick }) => (
    <div
      className={`${className} !right-2 z-10`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );

  const SamplePrevArrow = ({ className, style, onClick }) => (
    <div
      className={`${className} !left-2 z-10`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className='bg-[#EB5466] p-5'>
      <div className='max-w-[1600px] m-auto overflow-hidden'> 

        {/* Heading */}
        <h1 className="font-[Raleway] text-2xl sm:text-4xl lg:text-6xl font-semibold mt-6 text-center text-white">
          {patientFeedbacksComponentData[0]?.componentHeading}
        </h1>

        {/* Subheading */}
        <p className="font-[Raleway] text-base sm:text-xl lg:font-semibold mt-4 text-white text-center">
          {patientFeedbacksComponentData[0]?.componentSubHeading}
        </p>

        {/* Slider */}
        <Slider {...settings} className="w-[100%] sm:w-[85%] m-auto mt-8 p-4">
          {patientFeedbacksComponentData.map((data, index) => (
            <div key={index}>
              <div className="border border-[#dfdddd] rounded-xl w-full mb-10 max-w-4xl m-auto sm:grid grid-cols-3">

                {/* Image */}
                <div className="flex justify-center items-center p-2 md:p-4">
                  <div className='h-60 w-60 rounded-xl'>
                    <img
                      src={data?.patientImg}
                      alt="client"
                      className="h-full w-full rounded-xl object-cover"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="text-white col-span-2 pl-2 p-6 sm:p-8">
                  <p className="text-[13px] md:text-[15px] lg:text-[16px] text-justify font-[Raleway]">
                    {data?.patientFeeback}
                  </p>
                  <h1 className="text-[13px] md:text-[15px] lg:text-[16px] mt-3 font-[Raleway] font-bold">
                    {data?.patientName}
                  </h1>
                  <p className="text-xs sm:text-sm mt-1 font-[Raleway]">
                    {data?.patientProblem}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
};

export default PatientSays;
