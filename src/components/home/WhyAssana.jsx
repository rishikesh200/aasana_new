import axios from 'axios';
import React, { useEffect, useState, } from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import api from '../../services/api';


const WhyAssana = () => {

   const [whyAssanaComponentData,setWhyAssanaComponentData]= useState([]);  

 useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await api.get("/homeWhyAssana/dataGet");
      setWhyAssanaComponentData(res.data.data);
    } catch (error) {
      console.error("Error fetching Why Assana data:", error);
    }
  };

  fetchData();
}, []);
  return (
    <section className='max-w-[1600px] bg-[] m-auto overflow-hidden'>
      <div className='w-[95%] m-auto'>
        <h1 className='font-[Raleway] smallShadow lg:textShadow text-black text-center lg:text-start text-3xl sm:text-4xl lg:text-6xl mt-2 lg:mt-30'>{whyAssanaComponentData?.mainTitle}</h1>

        <div className='flex flex-col justify-end items-center lg:items-start bg-[]'>
            <h1 className='font-[Raleway]  text-base sm:text-xl text-center lg:text-start mt-5 lg:mt-13 lg:ml-100 bg-[]'>{whyAssanaComponentData?.subtitle}</h1>
             <h1 className='font-[Raleway] text-base sm:text-xl text-center lg:text-start w-[100%] lg:w-[70%] mt-4 lg:ml-100'>
             {whyAssanaComponentData?.introductionParagraph}
            </h1>
        </div>
        <div className='flex justify-center lg:justify-end'>
        <div className="inline-flex items-center group mt-5 mb-5">
            <Link onClick={()=> window.scrollTo({ top: 0, behavior: 'smooth' })} to={'/bookNow'} ><button className="bg-[#EC7979] text-sm sm:text-lg p-3 text-white rounded-4xl pr-0 sm:pr-3 px-8 sm:px-12 group-hover:pr-8 font-semibold group-hover:text-white 
                transition-all duration-300 ease-in-out group-hover:bg-[#F05A5A] flex items-center">
                Book a Consultation
                <IoIosArrowDroprightCircle 
                className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 
                transition-all duration-300 ease-in-out text-3xl sm:text-4xl ml-3"
                />
            </button></Link>
        </div>
        </div>
      </div>
    </section>
  )
}

export default WhyAssana