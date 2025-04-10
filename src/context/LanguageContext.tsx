
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'ar' | 'en';

// Define translation dictionary
export const translations = {
  en: {
    // Navbar
    home: "Home",
    auctions: "Auctions",
    buyNow: "Buy Now",
    sell: "Sell Your Car",
    about: "About",
    contact: "Contact",
    howItWorks: "How It Works",
    faq: "FAQ",

    // Car listing form
    sellYourCarWith: "Sell Your Car With Us",
    getTheBestValue: "Get the best value for your vehicle through our trusted auction platform or sell it directly at a fixed price.",
    vehicleDetails: "Vehicle Details",
    make: "Make",
    model: "Model",
    year: "Year",
    mileage: "Mileage (km)",
    condition: "Condition",
    description: "Description",
    uploadPhotos: "Upload Photos",
    dragAndDrop: "Drag and drop photos here, or click to select files",
    includeExterior: "Include exterior (front, back, sides), interior, and any damage photos",
    selectFiles: "Select Files",
    nextStep: "Next Step",
    back: "Back",
    
    // Listing type
    chooseListingType: "Choose Listing Type",
    auction: "Auction",
    fixedPrice: "Fixed Price",
    listYourCar: "List your car in our auction platform where buyers can bid on your vehicle.",
    setAFixedPrice: "Set a fixed price for your vehicle for immediate purchase by interested buyers.",
    potentialForHigher: "Potential for higher final price",
    widerPool: "Wider pool of interested buyers",
    professionalValuation: "Professional valuation included",
    fasterSelling: "Faster selling process",
    youSetExactPrice: "You set the exact price",
    greaterPriceCertainty: "Greater price certainty",
    setYourPrice: "Set Your Price (SEK)",
    auctionInfo: "Our experts will evaluate your vehicle and suggest a starting bid price. Auctions typically run for 7 days, and you'll have the option to set a reserve price.",

    // Contact Info
    contactInformation: "Contact Information",
    fullName: "Full Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    agreeToTerms: "I agree to the Terms and Conditions and acknowledge the Privacy Policy",
    termsAndConditions: "Terms and Conditions",
    privacyPolicy: "Privacy Policy",
    receiveCommunications: "I would like to receive updates, promotions, and marketing communications",
    reviewListing: "Review Listing",

    // Review page
    almostDone: "Almost Done!",
    reviewDetails: "Please review your listing details before submitting",
    vehicleInfo: "Vehicle Information",
    listingDetails: "Listing Details",
    listingType: "Listing Type",
    price: "Price",
    contactInfo: "Contact Information",
    name: "Name",
    email: "Email",
    phone: "Phone",
    images: "Images",
    submitting: "Submitting...",
    submitListing: "Submit Listing",
    afterSubmission: "After submission, our team will review your listing and contact you to arrange a vehicle inspection before it goes live on our platform.",

    // Conditions
    excellent: "Excellent",
    veryGood: "Very Good",
    good: "Good",
    fair: "Fair",
    poor: "Poor",
    
    // Form validation
    requiredFields: "Please fill all required fields",
    enterPrice: "Please enter a price for your vehicle",
    validEmail: "Please enter a valid email address",
    successMessage: "Your car has been successfully listed!",
    errorMessage: "Failed to submit your listing. Please try again.",
    
    // Car Card
    currentBid: "Current Bid",
    timeLeft: "Time Left",
    viewAuction: "View Auction",
    viewDetails: "View Details",
    
    // Language
    language: "Language",
    english: "English",
    arabic: "Arabic"
  },
  ar: {
    // Navbar
    home: "الرئيسية",
    auctions: "المزادات",
    buyNow: "شراء الآن",
    sell: "بيع سيارتك",
    about: "حول",
    contact: "اتصل بنا",
    howItWorks: "كيف يعمل",
    faq: "الأسئلة الشائعة",

    // Car listing form
    sellYourCarWith: "بيع سيارتك معنا",
    getTheBestValue: "احصل على أفضل قيمة لسيارتك من خلال منصة المزاد الموثوقة لدينا أو بيعها مباشرة بسعر ثابت.",
    vehicleDetails: "تفاصيل المركبة",
    make: "الصانع",
    model: "الموديل",
    year: "السنة",
    mileage: "المسافة المقطوعة (كم)",
    condition: "الحالة",
    description: "الوصف",
    uploadPhotos: "تحميل الصور",
    dragAndDrop: "اسحب وأفلت الصور هنا، أو انقر لتحديد الملفات",
    includeExterior: "قم بتضمين صور خارجية (أمامية، خلفية، جوانب)، داخلية، وأي صور للأضرار",
    selectFiles: "تحديد الملفات",
    nextStep: "الخطوة التالية",
    back: "رجوع",
    
    // Listing type
    chooseListingType: "اختر نوع القائمة",
    auction: "مزاد",
    fixedPrice: "سعر ثابت",
    listYourCar: "اعرض سيارتك في منصة المزاد حيث يمكن للمشترين المزايدة على سيارتك.",
    setAFixedPrice: "حدد سعرًا ثابتًا لسيارتك للشراء الفوري من قبل المشترين المهتمين.",
    potentialForHigher: "إمكانية الحصول على سعر نهائي أعلى",
    widerPool: "مجموعة أوسع من المشترين المهتمين",
    professionalValuation: "تقييم مهني مشمول",
    fasterSelling: "عملية بيع أسرع",
    youSetExactPrice: "أنت تحدد السعر الدقيق",
    greaterPriceCertainty: "يقين أكبر بالسعر",
    setYourPrice: "حدد سعرك (بالكرونة السويدية)",
    auctionInfo: "سيقوم خبراؤنا بتقييم سيارتك واقتراح سعر مزايدة أولي. عادة ما تستمر المزادات لمدة 7 أيام، وسيكون لديك خيار تحديد سعر احتياطي.",

    // Contact Info
    contactInformation: "معلومات الاتصال",
    fullName: "الاسم الكامل",
    emailAddress: "البريد الإلكتروني",
    phoneNumber: "رقم الهاتف",
    agreeToTerms: "أوافق على الشروط والأحكام وأقر بسياسة الخصوصية",
    termsAndConditions: "الشروط والأحكام",
    privacyPolicy: "سياسة الخصوصية",
    receiveCommunications: "أرغب في تلقي التحديثات والعروض الترويجية والاتصالات التسويقية",
    reviewListing: "مراجعة القائمة",

    // Review page
    almostDone: "اكتمل تقريبًا!",
    reviewDetails: "يرجى مراجعة تفاصيل قائمتك قبل التقديم",
    vehicleInfo: "معلومات المركبة",
    listingDetails: "تفاصيل القائمة",
    listingType: "نوع القائمة",
    price: "السعر",
    contactInfo: "معلومات الاتصال",
    name: "الاسم",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    images: "الصور",
    submitting: "جاري التقديم...",
    submitListing: "تقديم القائمة",
    afterSubmission: "بعد التقديم، سيقوم فريقنا بمراجعة قائمتك والاتصال بك لترتيب فحص السيارة قبل نشرها على منصتنا.",

    // Conditions
    excellent: "ممتاز",
    veryGood: "جيد جدا",
    good: "جيد",
    fair: "مقبول",
    poor: "سيء",
    
    // Form validation
    requiredFields: "يرجى ملء جميع الحقول المطلوبة",
    enterPrice: "يرجى إدخال سعر لسيارتك",
    validEmail: "يرجى إدخال بريد إلكتروني صحيح",
    successMessage: "تم إدراج سيارتك بنجاح!",
    errorMessage: "فشل في تقديم قائمتك. يرجى المحاولة مرة أخرى.",
    
    // Car Card
    currentBid: "المزايدة الحالية",
    timeLeft: "الوقت المتبقي",
    viewAuction: "عرض المزاد",
    viewDetails: "عرض التفاصيل",
    
    // Language
    language: "اللغة",
    english: "الإنجليزية",
    arabic: "العربية"
  }
};

// Create context type
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
