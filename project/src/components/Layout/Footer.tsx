import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-pink-50 to-pink-100">
      {/* Ad Space */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-pink-200 p-6 text-center">
          <div className="text-gray-400 text-xs mb-2">Advertisement</div>
          <div className="h-24 bg-gray-100 rounded flex items-center justify-center relative">
            <ins className="adsbygoogle"
                 style={{display: 'block'}}
                 data-ad-client="ca-pub-8874321229002860"
                 data-ad-slot="1234567890"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
            <span className="text-gray-500 text-sm absolute">Google AdSense</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-pink-600" />
              </div>
              <span className="text-2xl font-serif text-gray-800">NuraSkin</span>
              <span className="text-sm text-pink-600 font-medium">.shop</span>
            </Link>
            <p className="text-gray-600 text-sm mb-6 max-w-md">
              Your trusted destination for luxurious skincare tips, expert advice, 
              and the latest beauty trends. Nurture your skin with love and science.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/mynuraskin/"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-blue-600" />
              </a>
              <a
                href="https://instagram.com/mynuraskin/"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-pink-600" />
              </a>
              <a
                href="https://pinterest.com"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200"
                aria-label="Pinterest"
              >
                <MessageCircle className="w-5 h-5 text-red-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-pink-600 transition-colors duration-200">Home</Link></li>
              <li><Link to="/blogs" className="text-gray-600 hover:text-pink-600 transition-colors duration-200">Blog</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-pink-600 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-pink-600 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/blogs/skincare" className="text-gray-600 hover:text-pink-600 transition-colors duration-200">Skincare</Link></li>
              <li><Link to="/blogs/diy" className="text-gray-600 hover:text-pink-600 transition-colors duration-200">DIY</Link></li>
              <li><Link to="/blogs/ingredients" className="text-gray-600 hover:text-pink-600 transition-colors duration-200">Ingredients</Link></li>
              <li><Link to="/blogs/anti-aging" className="text-gray-600 hover:text-pink-600 transition-colors duration-200">Anti-Aging</Link></li>
              <li><Link to="/blogs/acne-solutions" className="text-gray-600 hover:text-pink-600 transition-colors duration-200">Acne Solutions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-200 mt-12 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2024 NuraSkin.shop. All rights reserved. Made with love for your skin.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;