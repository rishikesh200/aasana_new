import React, { useEffect, useState } from "react";
import api from "../../services/api";

const HomeBanner = () => {
  const [homeBannerData, setHomeBannerData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        // Updated to use new API endpoint
        const res = await api.get("/home/banner");
        setHomeBannerData(res.data);
      } catch (error) {
        console.error("Banner Fetch Error:", error);
      }
    };

    fetchBanner();
  }, []);

  if (!homeBannerData) return null; // Prevent rendering before data arrives

  // Use experienceItems array from schema, fallback to old format for backward compatibility
  const primeExperienceItems = homeBannerData.experienceItems && Array.isArray(homeBannerData.experienceItems)
    ? homeBannerData.experienceItems.filter(Boolean)
    : [
        homeBannerData.experienceItems_1,
        homeBannerData.experienceItems_2,
        homeBannerData.experienceItems_3,
        homeBannerData.experienceItems_4,
        homeBannerData.experienceItems_5,
        homeBannerData.experienceItems_6,
        homeBannerData.experienceItems_7,
      ].filter(Boolean);

  return (
    <section
      className="relative min-h-screen flex items-center justify-end pt-20 lg:pt-24"
      id="banner"
    >
      <div
         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homeBannerData.backgroundImage})` }}
      ></div>

      <div className="relative z-10 w-full lg:w-[45%] mr-0 lg:mr-8 xl:mr-16 my-8 lg:my-0">
        <div className="backdrop-blur-[100px] rounded-2xl p-6 md:p-8 lg:p-10 text-white mx-4 lg:mx-0 shadow-2xl border-1 border-[#6d6c6c]">
          
          <h1 className="text-3xl md:text-4xl lg:text-4xl text-center font-bold font-[Raleway] mb-3">
            {homeBannerData.mainTitle}
          </h1>

          <h2 className="text-xl md:text-2xl mt-3 lg:text-3xl font-semibold font-[Raleway] mb-6 text-[#EB5466]">
            {homeBannerData.subtitle}
          </h2>

          <p className="text-base md:text-lg font-[Raleway] mb-8 leading-relaxed text-white">
            {homeBannerData.introductionParagraph}
          </p>

          <h3 className="text-xl md:text-2xl font-semibold font-[Raleway] mb-6 text-[#EB5466]">
            {homeBannerData.experienceSectionTitle}
          </h3>

          <ol className="space-y-4 font-[Raleway]">
            {primeExperienceItems.map((item, index) => (
              <li key={index} className="flex gap-3 md:gap-4 text-sm md:text-base lg:text-lg leading-relaxed">
                <span className="text-white font-bold flex-shrink-0">{index + 1}.</span>
                <span className="text-white">{item}</span>
              </li>
            ))}
          </ol>

        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
