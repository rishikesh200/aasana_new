import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const HowAssanaTreats = () => {
  const [treatmentsData, setTreatmentsData] = useState({
    title: 'How Assana Treats It',
    treatments: [
      {
        title: 'Ayurvedic Therapies',
        image: '',
        imageAlt: 'Ayurvedic Therapies',
      },
      {
        title: 'Lifestyle & Diet Coaching',
        image: '',
        imageAlt: 'Lifestyle & Diet Coaching',
      },
      {
        title: 'Colon Hydrotherapy',
        image: '',
        imageAlt: 'Colon Hydrotherapy',
      },
      {
        title: 'Pelvic Floor Strengthening',
        image: '',
        imageAlt: 'Pelvic Floor Strengthening',
      },
    ],
  });

  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        const res = await api.get('/common/how-assana-treats');
        if (res.data) {
          setTreatmentsData({
            title: res.data.title || 'How Assana Treats It',
            treatments: res.data.treatments || treatmentsData.treatments,
          });
        }
      } catch (error) {
        console.error('Error fetching treatments data:', error);
      }
    };
    fetchTreatments();
  }, []);

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-[#F5F5F0] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[Raleway] text-center mb-12 md:mb-16 text-black">
          {treatmentsData.title}
        </h2>

        {/* Treatment Panels - Horizontal overlapping layout */}
        <div className="flex flex-col sm:flex-row items-center justify-center relative z-10 overflow-x-auto md:py-40 gap-10 lg:gap-0">
  {treatmentsData.treatments.map((treatment, index) => (
    <div
      key={index}
      className="relative flex-shrink-0 even:z-10 z-0 md:even:-translate-y-12 "
      style={{
        marginLeft: index === 0 ? 0 : `-${index * 15}px`,
      }}
    >
      {/* Image Panel with rounded corners */}
      <div className="w-full sm:w-full md:w-full lg:w-full">
        {treatment.image ? (
          <img
            src={treatment.image}
            alt={treatment.imageAlt || treatment.title}
            className="w-full h-40 md:h-60 object-cover rounded-[38px] shadow-lg"
          />
        ) : (
          <div className="w-full h-[200px] md:h-[150px]  bg-gray-200 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-gray-400">No image</span>
          </div>
        )}

        {/* Label below image */}
        <div className="mt-4 ">
          <h3 className="text-lg mx-auto w-[60%] md:text-xl  font-semibold font-[Raleway] text-center text-black">
            {treatment.title}
          </h3>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default HowAssanaTreats;

