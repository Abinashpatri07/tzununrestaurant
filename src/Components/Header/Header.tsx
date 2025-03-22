// import React, { useState } from "react";
// import { FaFacebookF, FaInstagram, FaYelp, FaGoogle, FaBars, FaTimes } from "react-icons/fa";

// const Header: React.FC = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-black text-white py-4 px-5">
//       <div className="flex items-center justify-between w-full max-w-7xl mx-auto relative">
        
//         {/* Mobile Menu Button (Left side) */}
//         <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-lg">
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         {/* Left-side Navigation (Hidden on Mobile) */}
//         <nav className="hidden md:flex space-x-6 text-sm">
//           <a href="#" className="hover:text-gray-400">MENU</a>
//           <a href="#" className="hover:text-gray-400">DRINKS</a>
//           <a href="#" className="hover:text-gray-400">SPECIALS</a>
//           <a href="#" className="hover:text-gray-400">EVENTS</a>
//         </nav>

//         {/* Logo (Always Centered) */}
//         <img
//           src="https://static.spotapps.co/website_images/ab_websites/173000_website_v1/logo_new1.jpg"
//           alt="logo"
//           className="w-32 md:w-[15%] object-contain"
//         />

//         {/* Right-side Navigation (Hidden on Mobile) */}
//         <nav className="hidden md:flex space-x-6 text-sm">
//           <a href="#" className="hover:text-gray-400">RESERVE</a>
//           <a href="#" className="hover:text-gray-400">PRIVATE PARTIES</a>
//           <a href="#" className="hover:text-gray-400">CATERING</a>
//           <a href="#" className="hover:text-gray-400">CAREERS</a>
//         </nav>

//         {/* Social Media Icons (Hidden on Mobile) */}
//         <div className="hidden md:flex space-x-4 text-lg">
//           <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
//           <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
//           <a href="#" className="hover:text-gray-400"><FaYelp /></a>
//           <a href="#" className="hover:text-gray-400"><FaGoogle /></a>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div className="md:hidden flex flex-col items-center bg-black py-4 space-y-4 mt-2">
//           <a href="#" className="hover:text-gray-400">MENU</a>
//           <a href="#" className="hover:text-gray-400">DRINKS</a>
//           <a href="#" className="hover:text-gray-400">SPECIALS</a>
//           <a href="#" className="hover:text-gray-400">EVENTS</a>
//           <a href="#" className="hover:text-gray-400">RESERVE</a>
//           <a href="#" className="hover:text-gray-400">PRIVATE PARTIES</a>
//           <a href="#" className="hover:text-gray-400">CATERING</a>
//           <a href="#" className="hover:text-gray-400">CAREERS</a>
//           <div className="flex space-x-4 text-lg">
//             <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
//             <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
//             <a href="#" className="hover:text-gray-400"><FaYelp /></a>
//             <a href="#" className="hover:text-gray-400"><FaGoogle /></a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaYelp, FaGoogle, FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-5 transition-all duration-300 ${
        isScrolled ? "bg-black text-white shadow-lg py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto relative">
        
        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-lg">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Left-side Navigation (Hidden on Mobile) */}
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="hover:text-gray-400">MENU</a>
          <a href="#" className="hover:text-gray-400">DRINKS</a>
          <a href="#" className="hover:text-gray-400">SPECIALS</a>
          <a href="#" className="hover:text-gray-400">EVENTS</a>
        </nav>

        {/* Logo (Always Centered) */}
        <img
          src="https://static.spotapps.co/website_images/ab_websites/173000_website_v1/logo_new1.jpg"
          alt="logo"
          className="w-32 md:w-[15%] object-contain"
        />

        {/* Right-side Navigation (Hidden on Mobile) */}
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="hover:text-gray-400">RESERVE</a>
          <a href="#" className="hover:text-gray-400">PRIVATE PARTIES</a>
          <a href="#" className="hover:text-gray-400">CATERING</a>
          <a href="#" className="hover:text-gray-400">CAREERS</a>
        </nav>

        {/* Social Media Icons (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-4 text-lg">
          <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-400"><FaYelp /></a>
          <a href="#" className="hover:text-gray-400"><FaGoogle /></a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-black py-4 space-y-4 mt-2">
          <a href="#" className="hover:text-gray-400">MENU</a>
          <a href="#" className="hover:text-gray-400">DRINKS</a>
          <a href="#" className="hover:text-gray-400">SPECIALS</a>
          <a href="#" className="hover:text-gray-400">EVENTS</a>
          <a href="#" className="hover:text-gray-400">RESERVE</a>
          <a href="#" className="hover:text-gray-400">PRIVATE PARTIES</a>
          <a href="#" className="hover:text-gray-400">CATERING</a>
          <a href="#" className="hover:text-gray-400">CAREERS</a>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-400"><FaYelp /></a>
            <a href="#" className="hover:text-gray-400"><FaGoogle /></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;