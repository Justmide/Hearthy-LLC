import React, { useEffect, useRef, useState } from 'react';
// import { withPrefix } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';
import heroImg1 from "../assets/Images/studentImg3.jpg";
import heroImg2 from "../assets/Images/studentImg2.jpg";
import heroImg3 from "../assets/Images/studentImg1.jpg";
import { useNavigate } from 'react-router-dom';

export const CarouselDarkVariant = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const navigate = useNavigate();
  
  const slides = [
    {
      image: heroImg1,
      title: 'Welcome to Hearthy Consulting LLC',
      description: 'Hearthy Consulting champions a collaborative approach to special education. We work alongside schools, families, and communities to foster inclusive learning experiences for students with disabilities',
      buttonText: 'Explore Services',
      link: '/service',
    },
    {
      image: heroImg2,
      title: 'Practical Training for Passionate Educators',
      description: "Transform your teaching with our practical, research-backed workshops and coaching. Perfect for all educators, our training gives you the tools, knowledge, and confidence to support every learner.",
      buttonText: 'Explore Our Trainings',
      link: '/training',
    },
    {
      image: heroImg3,
      title: 'Inclusive Learning Starts Here',
      description: "Every child deserves engaging, empowering learning. At Hearthy Consulting, we help educators create inclusive classrooms where all students feel valued and supported.",
      buttonText: 'Contact Us',
      link: '/contact',
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const startAutoplay = () => {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    };

    const stopAutoplay = () => {
      clearInterval(intervalRef.current);
    };

    startAutoplay();
    
    const carousel = carouselRef.current;
    carousel?.addEventListener('mouseenter', stopAutoplay);
    carousel?.addEventListener('mouseleave', startAutoplay);

    return () => {
      clearInterval(intervalRef.current);
      carousel?.removeEventListener('mouseenter', stopAutoplay);
      carousel?.removeEventListener('mouseleave', startAutoplay);
    };
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetAutoplay();
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoplay();
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetAutoplay();
  };

  const resetAutoplay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const handleButtonClick = (link) => {
    if (link) {
      navigate(link, { replace: false });
    }
  };

  return (
    <div 
      className="relative w-full overflow-hidden rounded-lg"
      ref={carouselRef}
    >
      {/* Carousel track */}
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index}
            className="w-full flex-shrink-0 relative"
            style={{ minHeight: '80vh' }} // Responsive height
          >
            <img
              src={slide.image}
              className="absolute w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
            
            {/* Animated Caption Container - Visible on all screens */}
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <AnimatePresence>
                {currentSlide === index && (
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="bg-black/50 text-white flex justify-center items-center flex-col rounded-lg h-full w-full "
                  >
                    <motion.h5 
                      className="text-2xl md:text-5xl font-bold mb-4 font-heading px-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      {slide.title}
                    </motion.h5>
                    <motion.p 
                      className="text-sm md:text-lg mb-4 lg:px-[170px] px-[30px]"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      {slide.description}
                    </motion.p>
                    <motion.button
                      className="px-6 py-2 bg-[#cce4ed] text-[#000000] rounded-lg hover:bg-sped-highlight transition-colors duration-300"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleButtonClick(slide.link)}
                    >
                      {slide.buttonText}
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        type="button"
        className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-transparent"
        onClick={goToPrev}
      >
        <span className="text-white text-5xl">‹</span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-3 transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-transparent"
        onClick={goToNext}
      >
        <span className="text-white text-5xl">›</span>
        <span className="sr-only">Next</span>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/30'}`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};