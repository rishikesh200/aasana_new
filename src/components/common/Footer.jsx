import React from 'react';
import { Link } from 'react-router-dom';
import assanaLogo from '../../assets/images/assanaLogo.png';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { ROUTES } from '../../constants/config';

const Footer = () => {
  // Footer data - matching old site structure
  const footerQuickLinks = [
    { title: 'Home', link: ROUTES.HOME },
    { title: 'About Us', link: ROUTES.ABOUT },
    { title: 'Colorectal Clinic', link: ROUTES.HOME },
    { title: 'Gut Wellness', link: ROUTES.HOME },
    { title: 'Wellness Programmes', link: ROUTES.HOME },
    { title: 'Products', link: ROUTES.HOME },
  ];

  const footerServices = [
    { title: 'Colorectal Clinic', link: ROUTES.HOME },
    { title: 'Colorectal & Gut Tests', link: ROUTES.HOME },
    { title: 'Colon Hydrotherapy & Cleanse', link: ROUTES.HOME },
    { title: 'Nutrition & Dietary Advice', link: ROUTES.HOME },
    { title: 'Assana Life - Wellness Programme', link: ROUTES.HOME },
    { title: 'Lifestyle Counselling', link: ROUTES.HOME },
  ];

  const footerContact = [
    { icon: <IoMailUnread className='inline' />, title: 'No: 126 P.S. Sivasamy Road, Mylapore, Chennai 600004, Tamil Nadu, India', link: '' },
    { icon: <IoLogoWhatsapp className='inline' />, title: 'info@assanawellness.com', link: '' },
    { icon: <BiSolidPhoneCall className='inline' />, title: '+91 44 3505 7120, +91 9384017122', link: '' },
  ];

  return (
    <section className='  overflow-hidden md:pt-10'>
      <div className='grid sm:grid-cols-2 md:grid-cols-4  w-[95%] md:w-[90%] m-auto'>
        <div className='bg-[] flex flex-col justify-center items-start md:items-start'>
          <Link 
            to={ROUTES.HOME} 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src={assanaLogo} alt='assanaLogo' className='h-15 mb-3 lg:mt-7' />
          </Link>
          {footerContact.map((item, index) => (
            <div key={index} className='flex items-center gap-x-2'>
              <span className='text-[#ED7D7D]'>{item.icon}</span>
              <h1 className='font-[Sora] text-[#00000094] mt-2 w-[95%]'>{item.title}</h1>
            </div>
          ))}
          
          <div className='flex gap-x-4 mt-5 text-2xl text-[#ED7D7D]'>
            <FaFacebookSquare />
            <FaInstagram />
            <FaXTwitter />
          </div>
        </div>

        <div className='bg-[] font-[Raleway] flex flex-col'>
          <h1 className='font-bold mb-2 mt-10 text-[#EB5466]'>Quick Links</h1>
          {footerQuickLinks.map((item, index) => (
            <Link key={index} to={item.link}>
              <h1 className='font-[Raleway] text-[#00000094] font-semibold mt-1 cursor-pointer'>{item.title}</h1>
            </Link>
          ))}
        </div>

        <div className='bg-[] font-[Raleway]'>
          <h1 className='font-bold mb-2 mt-10 text-[#EB5466]'>Services</h1>
          {footerServices.map((item, index) => (
            <Link key={index} to={item.link || ROUTES.HOME}>
              <h1 className='font-[Raleway] text-[#00000094] font-semibold mt-1 cursor-pointer hover:text-[#8d454594]'>{item.title}</h1>
            </Link>
          ))}
        </div>

        <div className='bg-[] font-[Raleway]'>
          <h1 className='font-bold mb-2 mt-10 text-[#EB5466]'>Contact Info</h1>
          {footerContact.map((item, index) => (
            <div key={index} className='flex items-center gap-x-2'>
              <span className='text-[#ED7D7D]'>{item.icon}</span>
              <h1 className='font-[Sora] text-[#00000094] mt-2 w-[95%]'>{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
      <hr className='text-[#ED7D7D] mt-10 w-[90%] m-auto' />
      <h1 className='font-normal text-center my-5 text-[#555555] '>©2025 by Assana</h1>
    </section>
  );
};

export default Footer;
