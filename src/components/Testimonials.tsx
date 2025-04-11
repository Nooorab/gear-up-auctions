
import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { language, t } = useLanguage();

  const translations = {
    title: {
      en: "What Our Customers Say",
      ar: "ماذا يقول عملاؤنا"
    },
    subtitle: {
      en: "Hear from our community of buyers and sellers about their experience with our platform.",
      ar: "استمع إلى مجتمعنا من المشترين والبائعين حول تجربتهم مع منصتنا."
    },
    roles: {
      buyer: {
        en: "Car Buyer",
        ar: "مشتري سيارة"
      },
      seller: {
        en: "Car Seller",
        ar: "بائع سيارة"
      }
    },
    testimonials: [
      {
        name: "Johan Andersson",
        nameAr: "يوهان أندرسون",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        role: "buyer",
        quote: {
          en: "I was skeptical about buying a car online, but Abo Hasan Car made the process incredibly easy. The car was exactly as described, and the transaction was smooth and secure.",
          ar: "كنت متشككًا في شراء سيارة عبر الإنترنت، لكن أبو حسن للسيارات جعل العملية سهلة بشكل لا يصدق. كانت السيارة تمامًا كما هو موصوف، وكانت المعاملة سلسة وآمنة."
        },
        rating: 5
      },
      {
        name: "Maria Bergman",
        nameAr: "ماريا بيرغمان",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        role: "seller",
        quote: {
          en: "Selling my car through the auction platform was much easier than I expected. The team helped me with the valuation and listing, and I got a better price than I would have elsewhere.",
          ar: "كان بيع سيارتي من خلال منصة المزاد أسهل بكثير مما توقعت. ساعدني الفريق في التقييم والإدراج، وحصلت على سعر أفضل مما كنت سأحصل عليه في مكان آخر."
        },
        rating: 5
      },
      {
        name: "Erik Johnson",
        nameAr: "إريك جونسون",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        role: "buyer",
        quote: {
          en: "The detailed inspection reports gave me confidence in my purchase. The car arrived in perfect condition, exactly as described. I wouldn't hesitate to use this service again.",
          ar: "منحتني تقارير الفحص المفصلة الثقة في عملية الشراء. وصلت السيارة في حالة ممتازة، تمامًا كما هو موصوف. لن أتردد في استخدام هذه الخدمة مرة أخرى."
        },
        rating: 4
      }
    ]
  };

  return (
    <section className={`py-16 bg-auction-light ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-auction-primary">{translations.title[language]}</h2>
          <p className="mt-4 text-auction-muted max-w-2xl mx-auto">
            {translations.subtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translations.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={language === 'ar' ? testimonial.nameAr : testimonial.name} 
                  className={`w-12 h-12 rounded-full ${language === 'ar' ? 'ml-4' : 'mr-4'}`}
                />
                <div>
                  <h3 className="font-semibold">
                    {language === 'ar' ? testimonial.nameAr : testimonial.name}
                  </h3>
                  <p className="text-auction-muted text-sm">
                    {translations.roles[testimonial.role][language]}
                  </p>
                </div>
              </div>
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="italic text-gray-600">
                "{testimonial.quote[language]}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
