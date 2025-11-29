import { useState, useEffect } from "react";
import { RiMenuFold2Fill, RiMenuUnfold2Fill } from "react-icons/ri";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/config";
import assanaLogo from "../../assets/images/assanaLogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('banner');
  const [colorectalClinic, setColorectalClinic] = useState(false);
  const [gutWellness, setGutWellness] = useState(false);
  const [education, setEducation] = useState(false);
  const [products, setProducts] = useState(false);
  const [wellnessProgram, setWellnessProgram] = useState(false);

  // Disable background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  // Intersection Observer to detect current section
  useEffect(() => {
    const sections = [
      { id: 'banner', element: null },
      { id: 'services', element: null },
    ];

    // Get section elements
    sections.forEach(section => {
      section.element = document.getElementById(section.id);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    // Observe sections that exist
    sections.forEach(section => {
      if (section.element) {
        observer.observe(section.element);
      }
    });

    // Fallback: detect sections without IDs by scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // If no specific section is detected, use scroll-based detection
      if (scrollY < windowHeight * 0.85) {
        setCurrentSection('banner');
      } else if (scrollY > windowHeight * 0.85) {
        setCurrentSection('light-section');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Get header styles based on current section
  const getHeaderStyles = () => {
    if (currentSection === 'banner') {
      return 'bg-[#FFFFFF1F] border-gray-400';
    } else {
      return 'bg-[#00000055] border-gray-300';
    }
  };

  return (
    <header className={`fixed top-4 left-[7.5%] w-[85%] ${getHeaderStyles()} border shadow-lg backdrop-blur-[15px] m-auto rounded-full z-50 transition-all duration-700 ease-in-out`}>
      {/* Desktop menu */}
      <div className="hidden lg:flex">
        <div className="flex items-center justify-between max-w-[1600px] m-auto px-8 py-3.5 w-[95%]">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to={ROUTES.HOME}
              className="flex items-center gap-2"
            >
              <img src={assanaLogo} alt="assanaLogo" className="h-11 cursor-pointer" />
            </Link>
          </div>

          {/* Navigation Links - Centered */}
          <nav className="flex-1 flex justify-center">
            <ul className="flex text-white text-sm font-medium font-[Raleway] items-center">
              <li>
                <Link
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  to={ROUTES.HOME}
                  className="hover:text-[#EC7979] transition-colors px-2"
                >
                  Home
                </Link>
              </li>
              <li className="text-white/60 px-1">/</li>
              <li>
                <Link
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  to={ROUTES.ABOUT}
                  className="hover:text-[#EC7979] transition-colors px-2"
                >
                  About Us
                </Link>
              </li>
              <li className="text-white/60 px-1">/</li>

              {/* Colorectal Clinic */}
              <li className="relative group">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#EC7979] transition-colors px-2 py-2">
                  <span>Colorectal Clinic</span>
                  <MdOutlineArrowDropDown className="text-[20px] mt-0.5" />
                </div>
                <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                  <ul className="bg-white p-4 text-black w-80 text-left flex flex-col gap-y-2 rounded-xl shadow-lg">
                    <li><Link to="#" className="hover:text-[#EC7979] transition-colors block py-1">Colorectal Symptoms</Link></li>
                    <li><Link to="#" className="hover:text-[#EC7979] transition-colors block py-1">Piles or Haemorrhoids</Link></li>
                    <li><Link to={ROUTES.BANDING_PILES} className="hover:text-[#EC7979] transition-colors block py-1">Banding Of Piles/Haemorrhoids</Link></li>
                    <li><Link to="#" className="hover:text-[#EC7979] transition-colors block py-1">Laser Surgery For Piles</Link></li>
                    <li><Link to="#" className="hover:text-[#EC7979] transition-colors block py-1">Anal Fissure</Link></li>
                    <li><Link to={ROUTES.ANAL_FISTULA} className="hover:text-[#EC7979] transition-colors block py-1">Anal Fistula</Link></li>
                    <li><Link to="#" className="hover:text-[#EC7979] transition-colors block py-1">After Anal Surgery Wound Care</Link></li>
                    <li><Link to={ROUTES.PELVIC_FLOOR_PROBLEMS} className="hover:text-[#EC7979] transition-colors block py-1">Pelvic Floor Problems</Link></li>
                    <li><Link to="#" className="hover:text-[#EC7979] transition-colors block py-1">Colon & Rectal Cancer</Link></li>
                  </ul>
                </div>
              </li>
              <li className="text-white/60 px-1">/</li>

              {/* Gut Wellness */}
              <li className="relative group">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#EC7979] transition-colors px-2 py-2">
                  <Link to={ROUTES.HOME}>Gut wellness</Link>
                  <MdOutlineArrowDropDown className="text-[20px] mt-0.5" />
                </div>
                <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                  <ul className="bg-white p-4 text-black w-80 text-left flex flex-col gap-y-2 rounded-xl shadow-lg">
                    <li><Link to="#" className="hover:text-[#EC7979] transition-colors block py-1">Gut Brain Axis & The Gut Microbiome</Link></li>
                  </ul>
                </div>
              </li>
              <li className="text-white/60 px-1">/</li>

              {/* Education */}
              <li className="relative group">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#EC7979] transition-colors px-2 py-2">
                  <span>Education</span>
                  <MdOutlineArrowDropDown className="text-[20px] mt-0.5" />
                </div>
                <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                  <ul className="bg-white p-4 text-black w-80 text-left flex flex-col gap-y-2 rounded-xl shadow-lg">
                    <li><Link to="#" className="hover:text-[#EC7979] transition-colors block py-1">Educational Resources</Link></li>
                    <li><Link to="#" className="hover:text-[#EC7979] transition-colors block py-1">Health Articles</Link></li>
                  </ul>
                </div>
              </li>
              <li className="text-white/60 px-1">/</li>

              {/* Products */}
              <li className="relative group">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#EC7979] transition-colors px-2 py-2">
                  <span>Products</span>
                  <MdOutlineArrowDropDown className="text-[20px] mt-0.5" />
                </div>
                <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                  <ul className="bg-white p-4 text-black w-80 text-left flex flex-col gap-y-2 rounded-xl shadow-lg">
                    <li><Link to="#" className="hover:text-[#EC7979] transition-colors block py-1">Our Products</Link></li>
                    <li><Link to="#" className="hover:text-[#EC7979] transition-colors block py-1">Shop</Link></li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="flex gap-x-4 font-[Raleway] flex-shrink-0">
            <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={ROUTES.CONTACT}>
              <button className="bg-[#EC7979] text-white py-2 px-5 rounded-full cursor-pointer hover:bg-[#d86565] transition-colors font-medium text-sm">
                Book Now
              </button>
            </Link>
            <Link to={ROUTES.CONTACT}>
              <button className="bg-white text-[#1a1a1a] py-2 px-5 rounded-full cursor-pointer hover:bg-gray-100 transition-colors font-medium text-sm">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div className="flex top-0 lg:hidden items-center justify-between max-w-[1600px] m-auto px-4 py-3 w-[95%]">
        <div className="flex items-center gap-2">
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to={ROUTES.HOME}
            className="flex items-center gap-2"
          >
            <img src={assanaLogo} alt="assanaLogo" className="h-7 cursor-pointer" />
            <span className="text-white text-lg font-bold font-[Raleway]">ASSANA</span>
          </Link>
        </div>

        <div>
          {menuOpen ? (
            <RiMenuUnfold2Fill
              className="text-3xl text-white font-bold cursor-pointer"
              onClick={() => setMenuOpen((prev) => !prev)}
            />
          ) : (
            <RiMenuFold2Fill
              className="text-3xl text-white font-bold cursor-pointer"
              onClick={() => setMenuOpen((prev) => !prev)}
            />
          )}
        </div>

        {/* Mobile menu backdrop */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        {/* Mobile sliding menu */}
        <div
          className={`fixed left-0 overflow-y-auto top-0 h-screen bg-[#1a1a1a] w-[70%] sm:w-[65%] md:w-[50%] 
          transform transition-transform duration-500 ease-in-out z-50
          ${menuOpen ? "translate-x-0 opacity-100 visible" : "-translate-x-full opacity-0 invisible"}`}
        >
          {/* Header with Logo and Close Button */}
          <div className="flex justify-between items-center mt-4 px-4">
            <div className="flex items-center gap-2">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to={ROUTES.HOME}
                className="flex items-center gap-2"
              >
                <img src={assanaLogo} alt="assanaLogo" className="h-8 cursor-pointer" />
                <span className="text-white text-xl font-bold font-[Raleway]">ASSANA</span>
              </Link>
            </div>
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl p-2 hover:bg-[#2a2a2a] rounded-lg transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Menu list */}
          <ul className="mt-6 flex flex-col text-white text-lg font-semibold gap-y-4 font-[Raleway] px-4 cursor-pointer">
            <li>
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setMenuOpen(false);
                }}
                to={ROUTES.HOME}
                className="p-3 block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setMenuOpen(false);
                }}
                to={ROUTES.ABOUT}
                className="p-3 block"
              >
                About Us
              </Link>
            </li>

            {/* Mobile Colorectal Clinic */}
            <li
              onClick={() => setColorectalClinic((prev) => !prev)}
              className="p-3 relative"
            >
              <div className="flex items-center justify-between">
                <span>Colorectal Clinic</span>
                <MdOutlineArrowDropDown
                  className={`text-[20px] transition-transform ${colorectalClinic ? "rotate-180" : ""}`}
                />
              </div>
              {colorectalClinic && (
                <ul className="bg-[#2a2a2a] p-4 text-white flex flex-col gap-y-2 rounded-xl mt-2">
                  <li><Link to="#" onClick={() => setMenuOpen(false)} className="p-2 block hover:text-[#EC7979] transition-colors">Colorectal Symptoms</Link></li>
                  <li><Link to="#" onClick={() => setMenuOpen(false)} className="p-2 block hover:text-[#EC7979] transition-colors">Piles or Haemorrhoids</Link></li>
                  <li><Link to={ROUTES.BANDING_PILES} onClick={() => setMenuOpen(false)} className="p-2 block hover:text-[#EC7979] transition-colors">Banding Of Piles/Haemorrhoids</Link></li>
                  <li><Link to="#" onClick={() => setMenuOpen(false)} className="p-2 block hover:text-[#EC7979] transition-colors">Laser Surgery For Piles</Link></li>
                  <li><Link to="#" onClick={() => setMenuOpen(false)} className="p-2 block hover:text-[#EC7979] transition-colors">Anal Fissure</Link></li>
                  <li><Link to={ROUTES.ANAL_FISTULA} onClick={() => setMenuOpen(false)} className="p-2 block hover:text-[#EC7979] transition-colors">Anal Fistula</Link></li>
                  <li><Link to="#" onClick={() => setMenuOpen(false)} className="p-2 block hover:text-[#EC7979] transition-colors">After Anal Surgery Wound Care</Link></li>
                  <li><Link to={ROUTES.PELVIC_FLOOR_PROBLEMS} onClick={() => setMenuOpen(false)} className="p-2 block hover:text-[#EC7979] transition-colors">Pelvic Floor Problems</Link></li>
                  <li><Link to="#" onClick={() => setMenuOpen(false)} className="p-2 block hover:text-[#EC7979] transition-colors">Colon & Rectal Cancer</Link></li>
                </ul>
              )}
            </li>

            {/* Mobile Gut Wellness */}
            <li
              onClick={() => setGutWellness((prev) => !prev)}
              className="p-3 relative"
            >
              <div className="flex items-center justify-between">
                <Link to={ROUTES.HOME} className="block">Gut wellness</Link>
                <MdOutlineArrowDropDown
                  className={`text-[20px] transition-transform ${gutWellness ? "rotate-180" : ""}`}
                />
              </div>
              {gutWellness && (
                <ul className="bg-[#2a2a2a] p-4 text-white flex flex-col gap-y-2 rounded-xl mt-2">
                  <li><Link to="#" onClick={() => setMenuOpen(false)} className="p-2 block hover:text-[#EC7979] transition-colors">Gut Brain Axis & The Gut Microbiome</Link></li>
                </ul>
              )}
            </li>

            {/* Mobile Education */}
            <li
              onClick={() => setEducation((prev) => !prev)}
              className="p-3 relative"
            >
              <div className="flex items-center justify-between">
                <span>Education</span>
                <MdOutlineArrowDropDown
                  className={`text-[20px] transition-transform ${education ? "rotate-180" : ""}`}
                />
              </div>
              {education && (
                <ul className="bg-[#2a2a2a] p-4 text-white flex flex-col gap-y-2 rounded-xl mt-2">
                  <li><Link to="#" onClick={() => setMenuOpen(false)} className="p-2 block hover:text-[#EC7979] transition-colors">Educational Resources</Link></li>
                  <li><Link to="#" onClick={() => setMenuOpen(false)} className="p-2 block hover:text-[#EC7979] transition-colors">Health Articles</Link></li>
                </ul>
              )}
            </li>

            {/* Mobile Products */}
            <li
              onClick={() => setProducts((prev) => !prev)}
              className="p-3 relative"
            >
              <div className="flex items-center justify-between">
                <span>Products</span>
                <MdOutlineArrowDropDown
                  className={`text-[20px] transition-transform ${products ? "rotate-180" : ""}`}
                />
              </div>
              {products && (
                <ul className="bg-[#2a2a2a] p-4 text-white flex flex-col gap-y-2 rounded-xl mt-2">
                  <li><Link to="#" onClick={() => setMenuOpen(false)} className="p-2 block hover:text-[#EC7979] transition-colors">Our Products</Link></li>
                  <li><Link to="#" onClick={() => setMenuOpen(false)} className="p-2 block hover:text-[#EC7979] transition-colors">Shop</Link></li>
                </ul>
              )}
            </li>

            {/* Mobile Wellness Programmes */}
            <li
              onClick={() => setWellnessProgram((prev) => !prev)}
              className="p-3 relative"
            >
              <div className="flex items-center justify-between">
                <span>Wellness Programmes</span>
                <MdOutlineArrowDropDown
                  className={`text-[20px] transition-transform ${wellnessProgram ? "rotate-180" : ""}`}
                />
              </div>
              {wellnessProgram && (
                <ul className="bg-[#2a2a2a] p-4 text-white flex flex-col gap-y-2 rounded-xl mt-2">
                  <li><Link to="#" onClick={() => setMenuOpen(false)} className="p-2 block hover:text-[#EC7979] transition-colors">Colon Hydrotherapy & Gut Cleanse Program</Link></li>
                  <li><Link to="#" onClick={() => setMenuOpen(false)} className="p-2 block hover:text-[#EC7979] transition-colors">Assana Butt Check</Link></li>
                  <li><Link to="#" onClick={() => setMenuOpen(false)} className="p-2 block hover:text-[#EC7979] transition-colors">The New Moms Programme</Link></li>
                  <li><Link to="#" onClick={() => setMenuOpen(false)} className="p-2 block hover:text-[#EC7979] transition-colors">The Menopause Programme</Link></li>
                  <li><Link to="#" onClick={() => setMenuOpen(false)} className="p-2 block hover:text-[#EC7979] transition-colors">The Senior Citizens Programme</Link></li>
                </ul>
              )}
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col gap-y-4 mt-6 font-[Raleway] w-[90%] m-auto">
            <Link to={ROUTES.CONTACT} onClick={() => setMenuOpen(false)}>
              <button className="bg-[#EC7979] text-white py-3 px-5 w-full rounded-lg cursor-pointer hover:bg-[#d86565] transition-colors font-medium">
                Book Now
              </button>
            </Link>
            <Link to={ROUTES.CONTACT} onClick={() => setMenuOpen(false)}>
              <button className="bg-white text-[#1a1a1a] py-3 px-5 w-full rounded-lg cursor-pointer hover:bg-gray-100 transition-colors font-medium">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
