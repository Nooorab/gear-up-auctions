
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  
  const translations = {
    company: {
      en: "Your trusted platform for buying and selling quality used cars through secure auctions and fixed-price listings.",
      ar: "منصتك الموثوقة لشراء وبيع السيارات المستعملة عالية الجودة من خلال المزادات الآمنة والقوائم بأسعار ثابتة."
    },
    quickLinks: {
      title: { en: "Quick Links", ar: "روابط سريعة" },
      activeAuctions: { en: "Active Auctions", ar: "المزادات النشطة" },
      buyNowCars: { en: "Buy Now Cars", ar: "سيارات للشراء الفوري" },
      sellYourCar: { en: "Sell Your Car", ar: "بيع سيارتك" },
      howItWorks: { en: "How It Works", ar: "كيف يعمل" }
    },
    support: {
      title: { en: "Support", ar: "الدعم" },
      faq: { en: "FAQ", ar: "الأسئلة الشائعة" },
      contactUs: { en: "Contact Us", ar: "اتصل بنا" },
      terms: { en: "Terms & Conditions", ar: "الشروط والأحكام" },
      privacy: { en: "Privacy Policy", ar: "سياسة الخصوصية" }
    },
    contact: {
      title: { en: "Contact Us", ar: "اتصل بنا" },
      address1: { en: "123 Auction Street", ar: "١٢٣ شارع المزاد" },
      address2: { en: "Damascus, Syria 12345", ar: "دمشق، سوريا ١٢٣٤٥" },
      email: { en: "Email: info@abohasan.car", ar: "البريد الإلكتروني: info@abohasan.car" },
      phone: { en: "Phone: +46 123 456 7890", ar: "الهاتف: +46 123 456 7890" }
    },
    copyright: { 
      en: "All rights reserved.", 
      ar: "جميع الحقوق محفوظة." 
    }
  };

  return (
    <footer className={`bg-auction-primary text-white ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Abo Hasan Car</h3>
            <p className="text-auction-secondary/80 mb-4">
              {translations.company[language]}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-auction-secondary hover:text-auction-accent">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-auction-secondary hover:text-auction-accent">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-auction-secondary hover:text-auction-accent">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-auction-secondary hover:text-auction-accent">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{translations.quickLinks.title[language]}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/auctions" className="text-auction-secondary/80 hover:text-auction-accent">
                  {translations.quickLinks.activeAuctions[language]}
                </Link>
              </li>
              <li>
                <Link to="/buy-now" className="text-auction-secondary/80 hover:text-auction-accent">
                  {translations.quickLinks.buyNowCars[language]}
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-auction-secondary/80 hover:text-auction-accent">
                  {translations.quickLinks.sellYourCar[language]}
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-auction-secondary/80 hover:text-auction-accent">
                  {translations.quickLinks.howItWorks[language]}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{translations.support.title[language]}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-auction-secondary/80 hover:text-auction-accent">
                  {translations.support.faq[language]}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-auction-secondary/80 hover:text-auction-accent">
                  {translations.support.contactUs[language]}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-auction-secondary/80 hover:text-auction-accent">
                  {translations.support.terms[language]}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-auction-secondary/80 hover:text-auction-accent">
                  {translations.support.privacy[language]}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{translations.contact.title[language]}</h3>
            <address className="not-italic text-auction-secondary/80 space-y-2">
              <p>{translations.contact.address1[language]}</p>
              <p>{translations.contact.address2[language]}</p>
              <p>{translations.contact.email[language]}</p>
              <p>{translations.contact.phone[language]}</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-auction-secondary/60">
          <p>&copy; {new Date().getFullYear()} Abo Hasan Car. {translations.copyright[language]}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
