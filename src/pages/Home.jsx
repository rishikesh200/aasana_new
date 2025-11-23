import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/config';
import Banner from '../components/home/Banner';
import DropdownMenu from '../components/home/DropdownMenu';
import WhyAssana from '../components/home/WhyAssana';
import WhyDifferent from '../components/home/WhyDifferent';
import Healing from '../components/home/Healing';
import PatientSays from '../components/home/PatientSays';
import FrequentlyQA from '../components/home/FrequentlyQA';


const Home = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white ">
      <Banner />
      <DropdownMenu/>
      <WhyAssana/>
      <WhyDifferent/>
      <Healing/>
      <PatientSays/>
      {/* <FrequentlyQA/> */}
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Assana
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Build modern, scalable web applications with cutting-edge technology.
            Experience the future of web development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={ROUTES.CONTACT}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              to={ROUTES.ABOUT}
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Fast & Reliable
            </h3>
            <p className="text-gray-600">
              Built with performance in mind. Experience lightning-fast load times
              and reliable service.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Secure
            </h3>
            <p className="text-gray-600">
              Your data is protected with industry-standard security measures and
              encryption.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Modern Stack
            </h3>
            <p className="text-gray-600">
              Built with the latest technologies including React, Vite, and
              Tailwind CSS.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-blue-600 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch with us to learn more about our services.
          </p>
          <Link
            to={ROUTES.CONTACT}
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

