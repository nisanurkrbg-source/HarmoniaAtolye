import React from 'react';
import { Mail, Store } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-light-sage/30 pt-16 pb-8 border-t border-brand-sage/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="font-heading font-bold text-2xl text-brand-dark mb-4 inline-block">
              Nisa <span className="text-brand-sage font-medium text-xl">| Okul Öncesi Uzmanı</span>
            </a>
            <p className="text-brand-dark/70 max-w-sm mt-4">
              Çocukların sihirli dünyasını akademik bir perspektifle anlamlandırıyor, ebeveynlere güven dolu bir rehberlik sunuyorum.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li><a href="#etkinlik-kiti" className="text-brand-dark/70 hover:text-brand-sage transition-colors">Etkinlik Kiti</a></li>
              <li><a href="#sihirli-bilgiler" className="text-brand-dark/70 hover:text-brand-sage transition-colors">Sihirli Bilgiler</a></li>
              <li><a href="#ebeveyn-bilgiler" className="text-brand-dark/70 hover:text-brand-sage transition-colors">Veliye Bilgilendirme</a></li>
              <li><a href="#gelisim-bilgileri" className="text-brand-dark/70 hover:text-brand-sage transition-colors">Gelişim Bilgileri</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">İletişim & Sosyal</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-sage hover:bg-brand-sage hover:text-white transition-all shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-sage hover:bg-brand-sage hover:text-white transition-all shadow-sm">
                <Mail size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-peach flex items-center justify-center text-brand-dark hover:bg-brand-peach/80 transition-all shadow-sm">
                <Store size={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-brand-sage/20 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-dark/60">
          <p>© {new Date().getFullYear()} Nisa. Tüm hakları saklıdır.</p>
          <p>Made with ❤️ for Preschoolers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
