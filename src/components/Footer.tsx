import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">蘭亭</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                03-XXXX-XXXX
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                info@rantei.jp
              </p>
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                東京都中央区銀座X-X-X
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">営業時間</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                ランチ 11:30-15:00
              </p>
              <p className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                ディナー 17:30-22:00
              </p>
              <p className="text-zinc-400">
                定休日：毎週月曜日
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">リンク</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-red-400 transition">プライバシーポリシー</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition">特定商取引法に基づく表記</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition">サイトマップ</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-400">
          <p>&copy; 2024 蘭亭 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;