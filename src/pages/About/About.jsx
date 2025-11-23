const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Welcome to Assana! We are a modern web application platform built with
            cutting-edge technology to provide you with the best user experience.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-6">
            Our mission is to create powerful, scalable, and user-friendly web
            applications that help businesses and individuals achieve their goals.
            We believe in using the latest technologies to deliver exceptional
            results.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Our Technology Stack
          </h2>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>React 19 - Modern UI library</li>
            <li>Vite 7 - Lightning-fast build tool</li>
            <li>Tailwind CSS 4 - Utility-first CSS framework</li>
            <li>React Router - Client-side routing</li>
            <li>Axios - HTTP client for API requests</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 mb-6">
            We provide a complete professional website structure with:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Professional API service layer</li>
            <li>Responsive Header and Footer components</li>
            <li>Complete routing system</li>
            <li>Modern UI/UX design</li>
            <li>Scalable architecture</li>
          </ul>

          <div className="bg-blue-50 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Get in Touch
            </h3>
            <p className="text-gray-600">
              Have questions? We'd love to hear from you. Visit our{' '}
              <a href="/contact" className="text-blue-600 hover:underline">
                Contact page
              </a>{' '}
              to reach out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

