import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">
          This site is an educational summary inspired by <span className="font-serif italic">The Bitcoin Standard</span> by Saifedean Ammous.
        </p>
        <a 
          href="https://saifedean.com/thebitcoinstandard/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-bitcoin-orange hover:underline"
        >
          Visit the official book site
        </a>
        <p className="mt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} Bitcoin Standard Explorer
        </p>
      </div>
    </footer>
  );
};

export default Footer;