import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const menuItems = [
  {
    id: 1,
    name: '北京ダック',
    description: '伝統的な調理法で仕上げた当店自慢の一品',
    price: '¥12,800',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=2940',
    category: '看板メニュー'
  },
  {
    id: 2,
    name: '特選点心',
    description: '職人が丁寧に手作りする本格点心',
    price: '¥3,800',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=2940',
    category: '点心'
  },
  {
    id: 3,
    name: 'フカヒレの姿煮',
    description: '最高級のフカヒレを使用した贅沢な一品',
    price: '¥15,800',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=2940',
    category: '看板メニュー'
  },
  {
    id: 4,
    name: '海老のチリソース',
    description: '厳選された大ぶりの海老を特製チリソースで',
    price: '¥4,800',
    image: 'https://images.unsplash.com/photo-1625938145744-e380515399b7?auto=format&fit=crop&q=80&w=2940',
    category: '海鮮料理'
  },
  {
    id: 5,
    name: '五目炒飯',
    description: '高温の鍋で一気に炒め上げる本格炒飯',
    price: '¥2,800',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=2940',
    category: '御飯物'
  },
  {
    id: 6,
    name: '担々麺',
    description: '花椒のしびれる辛さと濃厚ごまの旨味',
    price: '¥2,400',
    image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&q=80&w=2940',
    category: '麺類'
  }
];

const MenuSlider = () => {
  return (
    <div className="py-24 bg-zinc-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">おすすめメニュー</h2>
        <p className="text-gray-600 text-center mb-16">伝統の技と新しい発想で作り上げる至高の一品</p>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="menu-swiper"
        >
          {menuItems.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-red-700 text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-red-700 font-semibold">{item.price}</p>
                    <button className="text-sm bg-zinc-100 hover:bg-zinc-200 text-zinc-800 px-4 py-2 rounded transition duration-300">
                      詳細を見る
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default MenuSlider;