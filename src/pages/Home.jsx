import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/config';
import { ChatBotProvider } from '../contexts/ChatBotContext';
import HomeBanner from '../components/home/HomeBanner';
import HomeDropdownMenu from '../components/home/HomeDropdownMenu';
import HomeWhyAssana from '../components/home/HomeWhyAssana';
import HomePatientSays from '../components/home/HomePatientSays';
import HomeFrequentlyQA from '../components/home/HomeFrequentlyQA';
import HomeServices from '../components/home/HomeServices';
import HomeTryDemo from '../components/home/HomeTryDemo';
import HomeChatBot from '../components/home/HomeChatBot';
import HomeYoutube from '../components/home/HomeYoutube';



const Home = () => {
  return (
    <ChatBotProvider>
      <div className="bg-gradient-to-b from-blue-50 to-white ">
        <HomeBanner />
        <HomeDropdownMenu/>
        <HomeWhyAssana/>
        <HomeServices/>
        <HomeYoutube/>
        <HomePatientSays/>
        <HomeFrequentlyQA/>
        <HomeTryDemo/>
        <HomeChatBot/>
        {/* Hero Section */}
      </div>
    </ChatBotProvider>
  );  
};

export default Home;

