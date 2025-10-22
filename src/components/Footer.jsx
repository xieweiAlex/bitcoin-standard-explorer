import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f7931a' fill-opacity='0.15'%3E%3Cpath d='M30 30c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-5c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: '60px 60px'
    }}>
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