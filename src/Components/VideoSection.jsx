import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = 'dPb8vzxw-K4'; 
  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-4 md:px-16">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1877F2]">
          Discover Hearthy's Impact
        </h2>
       <p className="text-gray-600 dark:text-gray-300 mb-8">
  Love our mission? Like the video and subscribe to support more life-changing impact through learning.
</p>


        <div className="relative max-w-full aspect-video rounded-xl overflow-hidden shadow-lg mx-auto">
          {isPlaying ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="Hearthy Consulting Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div
              className="w-full h-full bg-black relative cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt="Hearthy Consulting Video Thumbnail"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-full shadow-lg hover:scale-110 transition">
                  <FaPlay className="text-red-600 text-2xl" />
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default VideoSection;
