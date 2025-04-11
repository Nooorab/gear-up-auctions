
import React from 'react';
import { Button } from '@/components/ui/button';
import CarCard from './CarCard';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Mock data for buy now cars
const buyNowCars = [
  {
    id: 5,
    title: 'Toyota Corolla 2019',
    imageUrl: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 19500,
    year: 2019,
    mileage: 65000,
    location: 'Stockholm',
    isAuction: false,
  },
  {
    id: 6,
    title: 'Volkswagen Golf 2020',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 24000,
    year: 2020,
    mileage: 50000,
    location: 'Gothenburg',
    isAuction: false,
  },
  {
    id: 7,
    title: 'Nissan Qashqai 2018',
    imageUrl: 'https://images.unsplash.com/photo-1612911912304-161446194739?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 21000,
    year: 2018,
    mileage: 80000,
    location: 'Malmö',
    isAuction: false,
  },
  {
    id: 8,
    title: 'Kia Sportage 2020',
    imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 26500,
    year: 2020,
    mileage: 45000,
    location: 'Linköping',
    isAuction: false,
  },
];

const BuyNowCars = () => {
  const { language, t } = useLanguage();

  const translations = {
    buyNowCars: {
      en: "Buy Now Cars",
      ar: "سيارات للشراء الفوري"
    },
    subtitle: {
      en: "Ready for immediate purchase with no bidding required",
      ar: "جاهزة للشراء الفوري بدون الحاجة للمزايدة"
    },
    viewAllCars: {
      en: "View All Cars",
      ar: "عرض جميع السيارات"
    }
  };

  return (
    <section className={`bg-white py-12 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-auction-primary">
              {translations.buyNowCars[language]}
            </h2>
            <p className="text-auction-muted mt-2">
              {translations.subtitle[language]}
            </p>
          </div>
          <Button 
            variant="outline" 
            className="hidden md:flex items-center"
            asChild
          >
            <a href="/buy-now">
              {translations.viewAllCars[language]}
              <ChevronRight className={`${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {buyNowCars.map(car => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button 
            variant="outline" 
            className="flex items-center mx-auto"
            asChild
          >
            <a href="/buy-now">
              {translations.viewAllCars[language]}
              <ChevronRight className={`${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BuyNowCars;
