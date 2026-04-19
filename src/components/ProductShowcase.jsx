import React from 'react';
import { Package, Star, Heart, CheckCircle2 } from 'lucide-react';

const ProductShowcase = () => {
  const benefits = [
    "Motor becerilerini geliştirir",
    "Bilişsel gelişimi destekler",
    "Yaratıcılığı ve hayal gücünü artırır",
    "Ebeveyn-çocuk bağını güçlendirir"
  ];

  return (
    <section id="etkinlik-kiti" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Okul Öncesi Etkinlik Kiti</h2>
          <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
            Özenle hazırlanmış bu kit, çocuğunuzun yaş grubuna uygun, eğlenceli ve öğretici materyaller içerir.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Product Image */}
          <div className="mb-12 lg:mb-0 relative group">
            <div className="absolute inset-0 bg-brand-peach/30 rounded-[3rem] transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <img 
              src="./images/activity_kit.png" 
              alt="Etkinlik Kiti" 
              className="relative z-10 rounded-3xl shadow-lg w-full h-auto object-cover transform group-hover:-translate-y-2 transition-all duration-500"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="bg-brand-sage/20 p-2 rounded-full text-brand-sage">
                <Star size={24} fill="currentColor" />
              </div>
              <div>
                <p className="font-bold text-lg">3-6 Yaş</p>
                <p className="text-xs text-brand-dark/60">İçin Uygun</p>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="bg-brand-beige rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Package className="text-brand-sage" />
                Kutunun İçinde Neler Var?
              </h3>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-lg">
                    <CheckCircle2 className="text-brand-sage flex-shrink-0 mt-1" size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-brand-dark/10">
                <div className="flex items-center gap-2 mb-6">
                  <Heart className="text-red-400" fill="currentColor" size={20} />
                  <span className="text-sm font-medium text-brand-dark/80">
                    Tamamen güvenli ve doğa dostu materyaller
                  </span>
                </div>
                
                <a 
                  href="#" 
                  className="block w-full text-center px-8 py-4 rounded-2xl bg-brand-sage text-white font-bold text-lg hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-sage/20 transition-all duration-300"
                >
                  Etsy'den Sipariş Ver
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
