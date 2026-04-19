import React from 'react';
import heroImg from '../assets/images/hero.png';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Çocuğunuzun <span className="text-brand-sage">Gelişim Yolculuğunda</span> Güvenilir Rehberiniz
            </h1>
            
            <div className="mb-8 space-y-4 text-lg text-brand-dark/80 max-w-2xl mx-auto lg:mx-0">
              <p className="font-medium text-xl text-brand-dark">Nisa Kimdir?</p>
              <p>
                Okul öncesi öğretmeni ve yüksek lisans araştırmacısı olarak, çocukların sihirli dünyasını akademik bir perspektifle anlamlandırıyorum. Amacım, ebeveynlere çocuklarının gelişimsel ihtiyaçlarını karşılarken güven dolu bir rehberlik sunmak.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#etkinlik-kiti" 
                className="px-8 py-4 rounded-2xl bg-white border-2 border-brand-sage text-brand-sage font-semibold hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                Etkinlik Kitini İncele
              </a>
              <a 
                href="#" 
                className="px-8 py-4 rounded-2xl bg-brand-peach text-brand-dark font-semibold hover:-translate-y-1 hover:shadow-lg transition-all duration-300 shadow-sm"
              >
                Etsy Mağazamı Ziyaret Et
              </a>
            </div>
          </div>
          
          {/* Image/Illustration */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-brand-sage/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-brand-sage/30 transition-shadow duration-500">
              <img 
                src={heroImg} 
                alt="Okul Öncesi Öğretmeni İllüstrasyon" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
