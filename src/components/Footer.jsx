import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-cardBorder mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-400 text-sm">
          &copy; {year} Jayesh Berwal. All rights reserved.
        </div>
        <div className="flex gap-4 text-sm text-gray-500">
          <span>Designed & Built by Jayesh Berwal</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
