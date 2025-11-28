import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/config';
import { ChatBotProvider } from '../contexts/ChatBotContext';
import Banner from '../components/home/Banner.example';
import DropdownMenu from '../components/home/DropdownMenu';
import WhyAssana from '../components/home/WhyAssana';

import PatientSays from '../components/home/PatientSays';
import FrequentlyQA from '../components/home/FrequentlyQA';
import Services from '../components/home/Services';
import TryDemo from '../components/home/TryDemo';
import ChatBot from '../components/home/ChatBot';
import HomeYoutube from '../components/home/HomeYoutube';



const Home = () => {
  return (
    <ChatBotProvider>
      <div className="bg-gradient-to-b from-blue-50 to-white ">
        <Banner />
        <DropdownMenu/>
        <WhyAssana/>
        
        <Services/>
       <HomeYoutube/>
        <PatientSays/>
        <FrequentlyQA/>
        <TryDemo/>
        <ChatBot/>
        {/* Hero Section */}
      </div>
    </ChatBotProvider>
  );  
};

export default Home;

