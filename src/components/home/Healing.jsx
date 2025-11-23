import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { HiMiniPlay } from "react-icons/hi2";
import api from '../../services/api';

const Healing = () => {
    const [play, setPlay] = useState(false);

    const [Video, setVideo] = useState([]);
      

    useEffect(()=>{ 
      const fetchData = async () => { 
        try {
          const res = await api.get("/video/dataGet");
          setVideo(res.data.data);    
        } catch (error) {
          console
        }
      };
      fetchData();
    },[]);
    
          // useEffect(()=>{
          //     axios.get('https://assana-site-backend.vercel.app/api/video/dataGet')
          //     .then((response) => {
          //         setVideo(response.data.data);
      
          //     })
          //     .catch((error) => {
          //     console.error("Error:", error);
          //     });
      
          // },[])
  return (
    <section className='max-w-[1600px] m-auto mb-5 bg-[]'>
      <div className='w-[95%] m-auto'>
        <h1 className="font-[Raleway] smallShadow lg:textShadow text-black  text-3xl sm:text-4xl lg:text-6xl  lg:mt-30 text-center">{Video?.Heading}</h1>
        <p className="font-[Raleway] text-base sm:text-xl text-[#555555] mt-4 text-center">{Video?.subHeading}</p>

        <div className={play? "w-full  mt-10 aspect-video rounded-[12px] shadow-xl overflow-hidden":"w-full h-130  mt-10 aspect-video rounded-[12px] shadow-xl overflow-hidden"}>
            {!play ? (
              <div
                className="w-full h-full   flex items-end  justify-end bg-black cursor-pointer"
                onClick={() => setPlay(true)}
              >
               <div className='bg-[] h-20 w-20 mb-10 mr-10 flex justify-center items-center rounded-full border-1 border-[white] hover:border-[#1bdd1b] group '> 
                  <HiMiniPlay className="text-5xl lg:text-5xl  text-[white] group-hover:text-[#1bdd1b]" />
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src={Video?.videoLink}
                title="Medora X Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>

        </div>
    </section>
  )
}

export default Healing