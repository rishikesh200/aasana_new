import React, { use, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import bird from './../../assets/images/bird.png';
import api from '../../services/api';

const DropdownMenu = () => {


  const [homeServicesData, sethomeServicesData] = useState([]);

   useEffect(() => {
    const fetchdropdowns =  async () => {
      try {
        const res = await api.get("/homeServices/dataGet");
        sethomeServicesData(res.data.data)
      } catch (error) {
         console.error("Error fetching banner:", error.message);
      }
    }

    fetchdropdowns();
  },[]);
  // useEffect(() => {
  //   axios
  //     .get("https://assana-site-backend.vercel.app/api/homeServices/dataGet")
  //     .then((response) => {
  //       console.log("API Response:", response.data.data); // Debug
  //       sethomeServicesData(response.data.data || {});
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);

  const menuData = {
    colorectal: {
      title: homeServicesData?.colorectalConditionsTitle,
      items: [
        { label: homeServicesData?.colorectalConditionsItem1, path: "" },
        { label: homeServicesData?.colorectalConditionsItem2, path: "" },
        { label: homeServicesData?.colorectalConditionsItem3, path: "" },
        { label: homeServicesData?.colorectalConditionsItem4, path: "" },
        { label: homeServicesData?.colorectalConditionsItem5, path: "" },
        { label: homeServicesData?.colorectalConditionsItem6, path: "" }
      ]
    },
    gutWellness: {
      title: homeServicesData?.gutWellnessTitle,
      items: [
        { label: homeServicesData?.gutWellnessItem1, path: "" },
        { label:  homeServicesData?.gutWellnessItem2, path: "" },
        { label:  homeServicesData?.gutWellnessItem3, path: "" },
        { label:  homeServicesData?.gutWellnessItem4, path: "" },
        { label:  homeServicesData?.gutWellnessItem5, path: "" },
        { label:  homeServicesData?.gutWellnessItem6, path: "" }
      ]
    },
    education: {
      title:  homeServicesData?.educationTitle,
      items: [
        { label:homeServicesData?.educationItem1 , path: "" },
        { label: homeServicesData?.educationItem2, path: "" },
        { label: homeServicesData?.educationItem3, path: "" }
      ]
    }
  }

  

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="w-full  bg-[] bg-cover bg-center bg-no-repeat mt-10 mb-10" style={{
        backgroundImage: `url(${bird})`,
      }}>
      <div className="backdrop-blur-[36px] px-4 md:p-10">
        <div className="w-[100%] md:w-[80%] mx-auto rounded-2xl bg-[]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {/* Colorectal Conditions */}
            <div className="space-y-4 border-1 border-[#6d6c6c] w-[100%] p-5 rounded-2xl bg-[#00000052]">
              <h3 className="text-[#EB5466] text-xl font-bold font-[Raleway] mb-4">
                {menuData.colorectal.title}
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {menuData.colorectal.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-white text-sm">•</span>
                    <Link
                      to={item.path}
                      onClick={handleClick}
                      className="text-white text-sm font-[Raleway] hover:text-[#EC7979] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gut Wellness */}
            <div className="space-y-4 border-1 border-[#6d6c6c] p-5 rounded-2xl bg-[#00000052]">
              <h3 className="text-[#EB5466] text-xl font-bold font-[Raleway] mb-4">
                {menuData.gutWellness.title}
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {menuData.gutWellness.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-white text-sm">•</span>
                    <Link
                      to={item.path}
                      onClick={handleClick}
                      className="text-white text-sm font-[Raleway] hover:text-[#EC7979] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="space-y-4 border-1 border-[#6d6c6c] p-5 rounded-2xl bg-[#00000052]">
              <h3 className="text-[#EB5466] text-xl font-bold font-[Raleway] mb-4">
                {menuData.education.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {menuData.education.items.map((item, index) => (
                 <li key={index} className="flex items-center gap-2">
                    <span className="text-white text-sm">•</span>
                    <Link
                      to={item.path}
                      onClick={handleClick}
                      className="text-white text-sm font-[Raleway] hover:text-[#EC7979] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DropdownMenu

