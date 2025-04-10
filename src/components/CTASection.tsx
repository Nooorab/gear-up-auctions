
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CTASection = () => {
  const { language } = useLanguage();

  const translations = {
    title: {
      en: "Ready to Find Your Next Car?",
      ar: "مستعد للعثور على سيارتك القادمة؟"
    },
    subtitle: {
      en: "Join thousands of satisfied customers who have found their perfect vehicle through our platform.",
      ar: "انضم إلى آلاف العملاء الراضين الذين وجدوا سيارتهم المثالية من خلال منصتنا."
    },
    forBuyers: {
      title: {
        en: "For Buyers",
        ar: "للمشترين"
      },
      benefits: [
        {
          en: "Access to verified vehicles with detailed inspections",
          ar: "الوصول إلى سيارات معتمدة مع فحوصات مفصلة"
        },
        {
          en: "Transparent bidding process with no hidden fees",
          ar: "عملية مزايدة شفافة بدون رسوم خفية"
        },
        {
          en: "Secure payments and buyer protection",
          ar: "مدفوعات آمنة وحماية المشتري"
        },
        {
          en: "Option to buy immediately or bid in auctions",
          ar: "خيار الشراء فورًا أو المزايدة في المزادات"
        }
      ]
    },
    forSellers: {
      title: {
        en: "For Sellers",
        ar: "للبائعين"
      },
      benefits: [
        {
          en: "Free professional valuation of your vehicle",
          ar: "تقييم مهني مجاني لسيارتك"
        },
        {
          en: "Expert advice on maximizing your sale price",
          ar: "نصائح خبراء لتعظيم سعر بيع سيارتك"
        },
        {
          en: "Exposure to thousands of potential buyers",
          ar: "التعرض لآلاف المشترين المحتملين"
        },
        {
          en: "Hassle-free process with dedicated support",
          ar: "عملية خالية من المتاعب مع دعم مخصص"
        }
      ]
    },
    buttons: {
      browseCars: {
        en: "Browse Cars",
        ar: "تصفح السيارات"
      },
      sellYourCar: {
        en: "Sell Your Car",
        ar: "بيع سيارتك"
      }
    }
  };

  return (
    <section className={`py-16 bg-gradient-to-br from-auction-primary to-auction-dark text-white ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations.title[language]}</h2>
          <p className="text-xl mb-8 text-gray-200">
            {translations.subtitle[language]}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">{translations.forBuyers.title[language]}</h3>
              <ul className="space-y-3 text-left">
                {translations.forBuyers.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-auction-accent mr-2 mt-0.5" />
                    <span>{benefit[language]}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">{translations.forSellers.title[language]}</h3>
              <ul className="space-y-3 text-left">
                {translations.forSellers.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-auction-accent mr-2 mt-0.5" />
                    <span>{benefit[language]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-auction-accent hover:bg-auction-accent/90">
              {translations.buttons.browseCars[language]}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              {translations.buttons.sellYourCar[language]}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
