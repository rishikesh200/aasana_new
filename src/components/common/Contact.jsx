import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [contactData, setContactData] = useState({
    heading: 'Ready to Feel Better Naturally?',
    description: 'Take the first step toward a healthier gut and a balanced life. Our certified wellness team is here to guide you with personalized care, natural therapies, and modern diagnostics.',
    phoneText: 'Call +91 8035735721 to book an appointment instantly through our AI voice system.',
    phoneNumber: '+91 8035735721',
    buttonText: 'Book a Consultation',
    backgroundImage: '',
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await api.get('/common/contact');
        if (res.data) {
          setContactData({
            heading: res.data.heading || contactData.heading,
            description: res.data.description || contactData.description,
            phoneText: res.data.phoneText || contactData.phoneText,
            phoneNumber: res.data.phoneNumber || contactData.phoneNumber,
            buttonText: res.data.buttonText || contactData.buttonText,
            backgroundImage: res.data.backgroundImage || contactData.backgroundImage,
          });
        }
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };
    fetchContact();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add API call here to submit the form
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative py-16 md:py-20 lg:py-24 px-4 md:px-8">
      {/* Background Image */}
      {contactData.backgroundImage && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat blur-sm"
          style={{
            backgroundImage: `url(${contactData.backgroundImage})`,
          }}
        ></div>
      )}
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16">
            
            {/* Left Section - Information */}
            <div className="flex flex-col justify-center text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[Raleway] mb-6 leading-tight">
                {contactData.heading}
              </h2>
              
              <p className="text-base md:text-lg font-[Raleway] mb-6 leading-relaxed text-white/90">
                {contactData.description}
              </p>
              
              <p className="text-base md:text-lg font-[Raleway] text-white/90">
                {contactData.phoneText.split(contactData.phoneNumber)[0]}
                <span className="font-bold text-white">{contactData.phoneNumber}</span>
                {contactData.phoneText.split(contactData.phoneNumber)[1]}
              </p>
            </div>

            {/* Right Section - Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-white rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#EC7979] font-[Raleway]"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-white rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#EC7979] font-[Raleway]"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-white rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#EC7979] font-[Raleway]"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-white rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#EC7979] font-[Raleway] resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-b from-[#EC7979] to-purple-800 text-white py-4 px-8 rounded-lg font-semibold text-lg font-[Raleway] hover:from-[#d86565] hover:to-purple-700 transition-all duration-300 shadow-lg"
                >
                  {contactData.buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

