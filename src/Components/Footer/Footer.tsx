import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Location Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">LOCATION</h3>
          <p className="text-sm">
            2618 Pleasant Hill Road<br />
            Pleasant Hill, CA<br />
            94523
          </p>
        </div>

        {/* Hours Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">HOURS</h3>
          <p className="text-sm">
            Mon - Thurs: 1:00 AM - 9:00 PM<br />
            Fri - Sat: 1:00 AM - 9:30 PM<br />
            Sun: 1:00 AM - 8:00 PM
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">FIND US ON...</h3>
          <p className="text-sm mb-4">CONTACT US</p>
          <p className="text-sm">
            (925) 961-5552<br />
            info@txunumrestaurant.com
          </p>
        </div>
      </div>

      {/* Powered By Section */}
      <div className="text-center mt-8 text-sm text-gray-400">
        Powered by: 💬️ spofhopper
      </div>
    </footer>
  );
};

export default Footer;
