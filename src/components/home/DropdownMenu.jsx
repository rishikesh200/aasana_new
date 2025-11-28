import React, { use, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import bird from './../../assets/images/bird.png';
import api from '../../services/api';

const DropdownMenu = () => {


  const [homeServicesData, sethomeServicesData] = useState([]);

   useEffect(() => {
    const fetchdropdowns =  async () => {
      try {
        // Updated to use new API endpoint
        const res = await api.get("/home/services");
        sethomeServicesData(res.data)
      } catch (error) {
         console.error("Error fetching services:", error.message);
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

  // Use arrays from schema, fallback to old format for backward compatibility
  const getColorectalItems = () => {
    if (homeServicesData?.colorectalConditionsItems && Array.isArray(homeServicesData.colorectalConditionsItems)) {
      return homeServicesData.colorectalConditionsItems.filter(Boolean).map(label => ({ label, path: "" }));
    }
    // Fallback to old format
    return [
      homeServicesData?.colorectalConditionsItem1,
      homeServicesData?.colorectalConditionsItem2,
      homeServicesData?.colorectalConditionsItem3,
      homeServicesData?.colorectalConditionsItem4,
      homeServicesData?.colorectalConditionsItem5,
      homeServicesData?.colorectalConditionsItem6,
    ].filter(Boolean).map(label => ({ label, path: "" }));
  };

  const getGutWellnessItems = () => {
    if (homeServicesData?.gutWellnessItems && Array.isArray(homeServicesData.gutWellnessItems)) {
      return homeServicesData.gutWellnessItems.filter(Boolean).map(label => ({ label, path: "" }));
    }
    // Fallback to old format
    return [
      homeServicesData?.gutWellnessItem1,
      homeServicesData?.gutWellnessItem2,
      homeServicesData?.gutWellnessItem3,
      homeServicesData?.gutWellnessItem4,
      homeServicesData?.gutWellnessItem5,
      homeServicesData?.gutWellnessItem6,
    ].filter(Boolean).map(label => ({ label, path: "" }));
  };

  const getEducationItems = () => {
    if (homeServicesData?.educationItems && Array.isArray(homeServicesData.educationItems)) {
      return homeServicesData.educationItems.filter(Boolean).map(label => ({ label, path: "" }));
    }
    // Fallback to old format
    return [
      homeServicesData?.educationItem1,
      homeServicesData?.educationItem2,
      homeServicesData?.educationItem3,
    ].filter(Boolean).map(label => ({ label, path: "" }));
  };

  const menuData = {
    colorectal: {
      title: homeServicesData?.colorectalConditionsTitle,
      items: getColorectalItems()
    },
    gutWellness: {
      title: homeServicesData?.gutWellnessTitle,
      items: getGutWellnessItems()
    },
    education: {
      title: homeServicesData?.educationTitle,
      items: getEducationItems()
    }
  }

  

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section 
      className="w-full bg-[] bg-cover bg-center bg-no-repeat mt-10 mb-10" 
      style={{
        backgroundImage: homeServicesData?.backgroundImage 
          ? `url(${homeServicesData.backgroundImage})` 
          : `url(${bird})`,
      }}
    >
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

