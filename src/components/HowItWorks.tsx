
import React from 'react';
import { Search, Clipboard, CarFront, CreditCard } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HowItWorks = () => {
  const { language, t } = useLanguage();
  
  const translations = {
    title: {
      en: "How It Works",
      ar: "كيف يعمل"
    },
    description: {
      en: "Our simple process makes buying used cars easy, transparent, and secure. Get your dream car in just a few steps.",
      ar: "عمليتنا البسيطة تجعل شراء السيارات المستعملة سهلاً وشفافًا وآمنًا. احصل على سيارة أحلامك في بضع خطوات فقط."
    },
    steps: [
      {
        title: { en: "Find Cars", ar: "ابحث عن السيارات" },
        description: { 
          en: "Browse our wide selection of verified used cars and filter to find your perfect match.",
          ar: "تصفح مجموعتنا الواسعة من السيارات المستعملة المعتمدة وقم بالتصفية للعثور على ما يناسبك تمامًا."
        }
      },
      {
        title: { en: "Place Bids or Buy", ar: "ضع مزايدات أو اشتري" },
        description: { 
          en: "Place bids on auction vehicles or use the Buy Now option for immediate purchase.",
          ar: "ضع مزايدات على سيارات المزاد أو استخدم خيار الشراء الفوري للشراء المباشر."
        }
      },
      {
        title: { en: "Secure Payment", ar: "دفع آمن" },
        description: { 
          en: "Complete your purchase through our secure payment system with buyer protection.",
          ar: "أكمل عملية الشراء من خلال نظام الدفع الآمن لدينا مع حماية المشتري."
        }
      },
      {
        title: { en: "Collect Your Car", ar: "استلم سيارتك" },
        description: { 
          en: "Pick up your car from our collection points or choose our delivery service.",
          ar: "استلم سيارتك من نقاط التجميع لدينا أو اختر خدمة التوصيل."
        }
      }
    ]
  };

  const steps = [
    {
      icon: <Search className="h-10 w-10 text-auction-accent" />,
      title: translations.steps[0].title[language],
      description: translations.steps[0].description[language]
    },
    {
      icon: <Clipboard className="h-10 w-10 text-auction-accent" />,
      title: translations.steps[1].title[language],
      description: translations.steps[1].description[language]
    },
    {
      icon: <CreditCard className="h-10 w-10 text-auction-accent" />,
      title: translations.steps[2].title[language],
      description: translations.steps[2].description[language]
    },
    {
      icon: <CarFront className="h-10 w-10 text-auction-accent" />,
      title: translations.steps[3].title[language],
      description: translations.steps[3].description[language]
    }
  ];

  return (
    <section className={`bg-auction-primary text-white py-16 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{translations.title[language]}</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            {translations.description[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-auction-dark/20 p-4 rounded-full">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
