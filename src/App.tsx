import React from 'react';
import { UtensilsCrossed, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MenuSlider from './components/MenuSlider';

function App() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[90vh]"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1550367363-ea12860cc124?auto=format&fit=crop&q=80&w=2940"
            alt="Chinese cuisine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">蘭亭</h1>
            <p className="text-xl md:text-2xl text-white mb-8 font-light tracking-wide">
              伝統と革新が織りなす、至高の中国料理
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-700 text-white px-8 py-3 rounded-full text-lg hover:bg-red-800 transition duration-300"
            >
              ご予約はこちら
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            whileHover={{ y: -5 }}
            className="text-center"
          >
            <UtensilsCrossed className="w-12 h-12 text-red-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">本格広東料理</h3>
            <p className="text-gray-600">最高級の食材を使用した伝統的な広東料理をご提供</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="text-center"
          >
            <Clock className="w-12 h-12 text-red-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">営業時間</h3>
            <p className="text-gray-600">ランチ 11:30-15:00<br />ディナー 17:30-22:00</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="text-center"
          >
            <MapPin className="w-12 h-12 text-red-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">アクセス</h3>
            <p className="text-gray-600">東京都中央区銀座X-X-X<br />銀座駅 徒歩3分</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Menu Slider */}
      <MenuSlider />

      <Footer />
    </div>
  );
}

export default App;