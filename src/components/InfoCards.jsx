import React from 'react';
import { BookOpen, BrainCircuit, Sparkles } from 'lucide-react';

const InfoCards = () => {
  const cards = [
    {
      id: 'ebeveyn-bilgiler',
      title: 'Veliye Bilgilendirme',
      description: 'Ebeveynlik yolculuğunuzda size rehberlik edecek pratik ipuçları ve günlük hayatta uygulayabileceğiniz basit, etkili yöntemler.',
      icon: <BookOpen size={32} className="text-brand-sage" />,
      bgColor: 'bg-brand-sage/10',
      hoverColor: 'hover:border-brand-sage/30'
    },
    {
      id: 'gelisim-bilgileri',
      title: 'Gelişim Bilgileri',
      description: 'Çocukların yaş gruplarına göre bilişsel, motor ve sosyal-duygusal gelişim özellikleri ile akademik araştırmalardan damıtılmış gerçekler.',
      icon: <BrainCircuit size={32} className="text-[#8B7355]" />, // Slightly darker beige/brown
      bgColor: 'bg-[#8B7355]/10',
      hoverColor: 'hover:border-[#8B7355]/30'
    },
    {
      id: 'sihirli-bilgiler',
      title: 'Çocuğumu Nasıl Anlarım',
      description: 'Çocuğunuzun davranışlarının ardındaki dili çözmenize yardımcı olacak sihirli bilgiler ve uzman perspektifinden kısa notlar.',
      icon: <Sparkles size={32} className="text-brand-peach" />,
      bgColor: 'bg-brand-peach/20',
      hoverColor: 'hover:border-brand-peach/40'
    }
  ];

  return (
    <section className="py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Akademik Bilgi, Anne Şefkatiyle</h2>
          <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
            Çocuğunuzun dünyasını daha iyi anlamak için ihtiyacınız olan tüm bilgiler tek bir yerde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div 
              key={card.id}
              id={card.id}
              className="bg-white rounded-3xl p-8 border-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group flex flex-col h-full cursor-default"
            >
              <div className={`w-16 h-16 rounded-2xl ${card.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              
              <p className="text-brand-dark/70 leading-relaxed flex-grow">
                {card.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-brand-dark/5">
                <a href="#" className="text-sm font-semibold hover:text-brand-sage transition-colors flex items-center gap-2">
                  Devamını Oku
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InfoCards;
