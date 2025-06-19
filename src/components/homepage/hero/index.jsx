import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Spinner } from '../components/Spinner';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1920",
    title: "Ultravelocidade dentro e fora de casa",
    plan: {
      name: "brisa tudo",
      home: "500 MEGA",
      mobile: "20 GIGA",
      price: "109,99"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1920",
    title: "Conecte toda sua família"
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
    title: "Velocidade máxima para gamers",
    plan: {
      name: "brisa gamer",
      home: "1 GIGA",
      mobile: "30 GIGA",
      price: "149,99"
    }
  }
];

export function hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const preloadImages = async () => {
      const loadImage = (src: string) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(true);
          img.onerror = reject;
        });
    };

    preloadImages();
  }, []);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[currentSlide];


  return (
    <div className="relative bg-gradient-to-br from-[#3af2ff] via-[#2500f7]">
      <div className="relative min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroSlides.map((s, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover"
                onLoad={() => handleImageLoad(index)}
                style={{ display: loadedImages.has(index) ? 'block' : 'none' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#ee44eD]/80 to-transparent" />
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center justify-between">
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-20"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            
            <div className="flex items-center">
              <div className="w-1/2 pl-12">
                <h1 className="text-white text-5xl font-bold mb-8 transition-all duration-300">
                  {slide.title}
                </h1>
                
                <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold">{slide.plan.name}</div>
                      <div className="flex items-baseline mt-2">
                        <span className="text-4xl font-bold">{slide.plan.home.split(' ')[0]}</span>
                        <span className="ml-1">{slide.plan.home.split(' ')[1]}</span>
                        <span className="mx-2">+</span>
                        <span className="text-4xl font-bold">{slide.plan.mobile.split(' ')[0]}</span>
                        <span className="ml-1">{slide.plan.mobile.split(' ')[1]}</span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        NA SUA CASA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SÓ NO CELULAR
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm">POR</div>
                      <div className="text-4xl font-bold text-[#FF4D0D]">R$ {slide.plan.price}</div>
                      <div className="text-sm">/mês</div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm flex items-center space-x-2">
                    <span>APPS ILIMITADOS:</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-4" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" className="h-4" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" className="h-4" />
                  </div>
                </div>
              </div>
            </div>

            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-20"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 z-20">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === currentSlide ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}