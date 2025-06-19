import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Check, Shield, Zap, Wifi } from 'lucide-react';
import { Solutions } from './../components/homepage/solutions';
import { Pub } from './../components/homepage/pub';
import { Callcenter } from './../components/homepage/callcenter';
import { Blog } from './../components/homepage/blog';
import { Cta } from './../components/homepage/cta';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

interface HeroSlide {
  image: string;
  title: string;
  description: string;
  cta: string;
  ctaLink: string;
}

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const heroSlides: HeroSlide[] = [
  {
    image: "/home/portrait-male-engineer-working-field-engineers-day-celebration.jpg",
    title: "Ultravelocidade dentro e fora de casa",
    description: "Internet de alta performance para sua família",
    cta: "Ver Planos",
    ctaLink: "/residencial"
  },
  {
    image: "/home/cloud.jpg",
    title: "Conecte toda sua família",
    description: "Soluções completas para residências e empresas",
    cta: "Fale com um Especialista",
    ctaLink: "/contacto"
  },
  {
    image: "/home/home.jpg",
    title: "Velocidade máxima para gamers",
    description: "Experiência sem limites para jogos e streaming",
    cta: "Conheça Nossos Planos",
    ctaLink: "/residencial"
  },
];


export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
        
      try {
        await Promise.all(heroSlides.map(slide => loadImage(slide.image)));
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };
    preloadImages();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="pt-16">
      <Helmet>
        <title>Multitel - Internet de Alta Performance</title>
        <meta name="description" content="Internet de alta velocidade, segurança e confiabilidade para sua residência ou empresa. Conecte-se com a melhor tecnologia do mercado." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#2b489e] via-[#2b489e] to-white">
        <div className="relative min-h-[600px] overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="absolute inset-0 bg-black/40" />
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 w-full">
                  <div className="max-w-2xl text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                    <p className="text-xl mb-8">{slide.description}</p>
                    <Link 
                      to={slide.ctaLink}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      {slide.cta}
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
      
      
      <Solutions />
      <Pub />
      <Blog />
      <Callcenter />
      <Cta />
    </div>
  );
}
