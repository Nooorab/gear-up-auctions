
import React from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { language, t } = useLanguage();

  const translations = {
    title: {
      en: "Find Your Perfect Car at the Right Price",
      ar: "ابحث عن سيارتك المثالية بالسعر المناسب"
    },
    subtitle: {
      en: "Thousands of verified cars up for auction or immediate purchase. Transparent process, professional inspections, and secure transactions.",
      ar: "آلاف السيارات المعتمدة للمزاد أو الشراء الفوري. عملية شفافة، وفحوصات احترافية، ومعاملات آمنة."
    },
    searchPlaceholder: {
      en: "Search by make, model, or keywords...",
      ar: "ابحث حسب الماركة أو الموديل أو الكلمات الرئيسية..."
    },
    searchButton: {
      en: "Search Cars",
      ar: "ابحث عن السيارات"
    },
    browseAuctions: {
      en: "Browse Active Auctions",
      ar: "تصفح المزادات النشطة"
    },
    sellYourCar: {
      en: "Sell Your Car",
      ar: "بيع سيارتك"
    },
    howItWorks: {
      en: "How It Works",
      ar: "كيف يعمل"
    }
  };

  return (
    <section className={`relative bg-auction-primary text-white overflow-hidden ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=1536&ixlib=rb-4.0.3')",
          opacity: '0.2'
        }}
      />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {translations.title[language]}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            {translations.subtitle[language]}
          </p>
          
          {/* Search bar */}
          <div className="bg-white p-2 rounded-lg shadow-lg flex flex-col md:flex-row">
            <div className="flex-grow p-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder={translations.searchPlaceholder[language]}
                  className={`search-input w-full p-2 rounded-md border border-gray-300 ${language === 'ar' ? 'pr-4 pl-10 text-right' : 'pl-4 pr-10'}`}
                />
                <Search className={`absolute ${language === 'ar' ? 'left-4' : 'right-4'} top-3 h-5 w-5 text-gray-400`} />
              </div>
            </div>
            <div className="p-2">
              <Button size="lg" className="w-full bg-auction-accent hover:bg-auction-accent/90">
                {translations.searchButton[language]}
              </Button>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/auctions" className="inline-flex items-center text-auction-accent hover:underline">
              {translations.browseAuctions[language]}
              <ChevronRight className={`h-4 w-4 ${language === 'ar' ? 'mr-1 rotate-180' : 'ml-1'}`} />
            </a>
            <a href="/sell" className="inline-flex items-center text-auction-accent hover:underline">
              {translations.sellYourCar[language]}
              <ChevronRight className={`h-4 w-4 ${language === 'ar' ? 'mr-1 rotate-180' : 'ml-1'}`} />
            </a>
            <a href="/how-it-works" className="inline-flex items-center text-auction-accent hover:underline">
              {translations.howItWorks[language]}
              <ChevronRight className={`h-4 w-4 ${language === 'ar' ? 'mr-1 rotate-180' : 'ml-1'}`} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
