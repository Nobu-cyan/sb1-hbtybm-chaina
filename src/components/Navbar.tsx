import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-red-700">蘭亭</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-red-700 transition">ホーム</a>
            <a href="#" className="text-gray-700 hover:text-red-700 transition">メニュー</a>
            <a href="#" className="text-gray-700 hover:text-red-700 transition">店舗情報</a>
            <a href="#" className="text-gray-700 hover:text-red-700 transition">ご予約</a>
            <button className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition">
              お問い合わせ
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-red-700 transition">
              ホーム
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-red-700 transition">
              メニュー
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-red-700 transition">
              店舗情報
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-red-700 transition">
              ご予約
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-red-700 transition">
              お問い合わせ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;