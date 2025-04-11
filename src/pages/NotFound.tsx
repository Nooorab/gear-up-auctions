
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "../context/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  const translations = {
    notFound: {
      en: "404",
      ar: "404"
    },
    oops: {
      en: "Oops! We couldn't find the page you're looking for",
      ar: "عفوًا! لم نتمكن من العثور على الصفحة التي تبحث عنها"
    },
    description: {
      en: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
      ar: "الصفحة التي تبحث عنها قد تكون حُذفت، أو تم تغيير اسمها، أو غير متوفرة مؤقتًا."
    },
    backToHome: {
      en: "Back to Home",
      ar: "العودة إلى الرئيسية"
    },
    viewAuctions: {
      en: "View Auctions",
      ar: "عرض المزادات"
    }
  };

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className={`min-h-screen flex flex-col ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-auction-light">
        <div className="text-center px-4 py-16">
          <h1 className="text-6xl font-bold text-auction-primary mb-4">{translations.notFound[language]}</h1>
          <p className="text-2xl text-auction-muted mb-8">
            {translations.oops[language]}
          </p>
          <p className="text-auction-muted mb-8 max-w-lg mx-auto">
            {translations.description[language]}
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/">{translations.backToHome[language]}</Link>
            </Button>
            <Button variant="outline">
              <Link to="/auctions">{translations.viewAuctions[language]}</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
