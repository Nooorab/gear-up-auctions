
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
    arabic: "Arabic",

    // BuyNow Page
    buyNowCarsTitle: "Buy Now Cars",
    buyNowDescription: "Browse our selection of quality used cars available for immediate purchase. No bidding required - find your perfect car and drive it home today.",
    
    // About Page
    aboutTitle: "About Abo Hasan Car",
    aboutDescription: "We're revolutionizing how people buy and sell used cars in Sweden, making the process transparent, reliable, and enjoyable.",
    getInTouch: "Get in Touch",
    ourStoryTitle: "Our Story",
    ourStoryP1: "Abo Hasan Car was founded in 2020 by a team of automotive enthusiasts who saw an opportunity to transform the traditional used car market. Frustrated by the lack of transparency and trust in private sales and the high markups at dealerships, we set out to create a better alternative.",
    ourStoryP2: "What began as a small operation in Stockholm has quickly grown into one of Sweden's most trusted platforms for buying and selling used vehicles. By combining professional vehicle inspections with an easy-to-use auction platform, we've helped thousands of buyers find their perfect car and sellers get the best value for their vehicles.",
    ourStoryP3: "Today, Abo Hasan Car continues to innovate in the automotive marketplace, always with our core mission in mind: making car transactions transparent, fair, and enjoyable for everyone involved.",
    ourValues: "Our Values",
    transparency: "Transparency",
    transparencyDesc: "We believe in complete openness about the condition of every vehicle. Our detailed inspection reports highlight both the strengths and any issues, so buyers know exactly what they're getting.",
    customerCentric: "Customer-Centric",
    customerCentricDesc: "Our customers are at the heart of everything we do. We're committed to providing exceptional service at every stage of the buying and selling process.",
    innovation: "Innovation",
    innovationDesc: "We're constantly looking for ways to improve our platform and processes, leveraging technology to create a better experience for car buyers and sellers.",
    ourLeadershipTeam: "Our Leadership Team",
    achievements: "Our Achievements",
    vehiclesSold: "Vehicles Sold",
    customerSatisfaction: "Customer Satisfaction",
    citiesCovered: "Cities Covered",
    transactionValue: "SEK Transaction Value",
    ourPartners: "Our Partners",
    partnersDesc: "We've partnered with trusted automotive institutions, financial services, and logistics companies to provide a comprehensive and reliable service to our customers.",
    industryRecognition: "Industry Recognition, 2023",
    joinCommunity: "Join Our Community",
    joinCommunityDesc: "Whether you're looking to buy your dream car or sell your current vehicle, become part of our growing community of satisfied customers.",
    contactUs: "Contact Us",
    joinTeam: "Join Our Team",
    
    // How It Works
    howItWorksTitle: "How Abo Hasan Car Works",
    howItWorksDesc: "Our simple process makes buying and selling cars easy, transparent, and secure. Learn how our platform works in a few simple steps.",
    ourProcess: "Our Process",
    findCars: "Find Cars",
    findCarsDesc: "Browse our wide selection of verified used cars and filter to find your perfect match.",
    placeBidsOrBuy: "Place Bids or Buy",
    placeBidsOrBuyDesc: "Place bids on auction vehicles or use the Buy Now option for immediate purchase.",
    securePayment: "Secure Payment",
    securePaymentDesc: "Complete your purchase through our secure payment system with buyer protection.",
    collectYourCar: "Collect Your Car",
    collectYourCarDesc: "Pick up your car from our collection points or choose our delivery service.",
    forBuyers: "For Buyers",
    forSellers: "For Sellers",
    createAccount: "Create an Account",
    createAccountDesc: "Sign up for a free account on our platform. You'll need to provide basic information and verify your email address. This gives you access to view auction details and car listings.",
    browseAndResearch: "Browse and Research",
    browseAndResearchDesc: "Explore our extensive inventory of vehicles. Use filters to narrow down your search based on make, model, year, price range, and more. Each listing includes detailed information, high-quality photos, and a comprehensive vehicle inspection report.",
    bidOrBuy: "Bid or Buy",
    bidOrBuyDesc: "Choose between two purchase options:",
    auction: "Auction",
    auctionDesc: "Place bids on vehicles in our auction section. Set your maximum bid and our system will automatically bid on your behalf.",
    buyNow: "Buy Now",
    buyNowDesc: "Purchase immediately at a fixed price without waiting for an auction to end.",
    paymentAndDocumentation: "Payment and Documentation",
    paymentAndDocumentationDesc: "When you win an auction or purchase a car, you'll receive detailed instructions for completing the payment. We accept secure bank transfers and major credit cards. After payment confirmation, we'll handle all necessary paperwork and transfer documents.",
    collectionOrDelivery: "Collection or Delivery",
    collectionOrDeliveryDesc: "You can either collect your vehicle from one of our secure facilities or arrange for delivery to your preferred location. Our team will coordinate with you to ensure a smooth handover process.",
    browseAuctions: "Browse Auctions",
    registerAsSeller: "Register as a Seller",
    
    // Contact Page
    contactUsHeading: "Contact Us",
    contactUsDesc: "Have questions or need assistance? Our team is here to help. Get in touch with us through any of the channels below.",
    visitUs: "Visit Us",
    visitUsAddress1: "123 Auction Street",
    visitUsAddress2: "Stockholm, Sweden 12345",
    callUs: "Call Us",
    customerSupport: "Customer Support:",
    supportPhone: "+46 123 456 7890",
    salesInquiries: "Sales Inquiries:",
    salesPhone: "+46 123 456 7891",
    emailUs: "Email Us",
    generalInquiries: "General Inquiries:",
    generalEmail: "info@abohasan.car",
    supportLabel: "Support:",
    supportEmail: "support@abohasan.car",
    openingHours: "Opening Hours",
    monToFri: "Monday - Friday:",
    monToFriHours: "9:00 AM - 6:00 PM",
    saturday: "Saturday:",
    saturdayHours: "10:00 AM - 4:00 PM",
    sunday: "Sunday:",
    sundayClosed: "Closed",
    sendMessage: "Send Us a Message",
    fullName: "Full Name",
    enterFullName: "Enter your full name",
    emailAddress: "Email Address",
    yourEmail: "your.email@example.com",
    phoneNumber: "Phone Number",
    phoneExample: "e.g. +46 70 123 4567",
    subject: "Subject",
    selectSubject: "Select a subject",
    message: "Message",
    howCanWeHelp: "How can we help you?",
    sendMessageBtn: "Send Message",
    findUs: "Find Us"
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
    arabic: "العربية",
    
    // BuyNow Page
    buyNowCarsTitle: "سيارات للشراء الفوري",
    buyNowDescription: "تصفح مجموعتنا من السيارات المستعملة ذات الجودة العالية المتاحة للشراء الفوري. لا تحتاج للمزايدة - اعثر على سيارتك المثالية وقد بها إلى المنزل اليوم.",
    
    // About Page
    aboutTitle: "حول أبو حسن كار",
    aboutDescription: "نحن نحدث ثورة في كيفية شراء وبيع السيارات المستعملة في السويد، مما يجعل العملية شفافة وموثوقة وممتعة.",
    getInTouch: "تواصل معنا",
    ourStoryTitle: "قصتنا",
    ourStoryP1: "تأسست أبو حسن كار في عام 2020 من قبل فريق من عشاق السيارات الذين رأوا فرصة لتحويل سوق السيارات المستعملة التقليدي. بسبب الإحباط من نقص الشفافية والثقة في المبيعات الخاصة وارتفاع هوامش الربح عند الوكلاء، قررنا إنشاء بديل أفضل.",
    ourStoryP2: "ما بدأ كعملية صغيرة في ستوكهولم تحول بسرعة إلى واحدة من أكثر منصات بيع وشراء السيارات المستعملة موثوقية في السويد. من خلال الجمع بين فحص المركبات الاحترافي ومنصة مزاد سهلة الاستخدام، ساعدنا الآلاف من المشترين في العثور على سياراتهم المثالية والبائعين في الحصول على أفضل قيمة لسياراتهم.",
    ourStoryP3: "اليوم، تواصل أبو حسن كار الابتكار في سوق السيارات، دائمًا مع مهمتنا الأساسية في الاعتبار: جعل معاملات السيارات شفافة وعادلة وممتعة للجميع.",
    ourValues: "قيمنا",
    transparency: "الشفافية",
    transparencyDesc: "نحن نؤمن بالانفتاح الكامل حول حالة كل مركبة. تبرز تقارير الفحص المفصلة لدينا نقاط القوة وأي مشاكل، بحيث يعرف المشترون بالضبط ما يحصلون عليه.",
    customerCentric: "التركيز على العميل",
    customerCentricDesc: "عملاؤنا هم في صميم كل ما نقوم به. نحن ملتزمون بتقديم خدمة استثنائية في كل مرحلة من مراحل عملية الشراء والبيع.",
    innovation: "الابتكار",
    innovationDesc: "نحن نبحث باستمرار عن طرق لتحسين منصتنا وعملياتنا، باستخدام التكنولوجيا لخلق تجربة أفضل لمشتري وبائعي السيارات.",
    ourLeadershipTeam: "فريق القيادة لدينا",
    achievements: "إنجازاتنا",
    vehiclesSold: "سيارات تم بيعها",
    customerSatisfaction: "رضا العملاء",
    citiesCovered: "مدن تمت تغطيتها",
    transactionValue: "قيمة المعاملات بالكرونة السويدية",
    ourPartners: "شركاؤنا",
    partnersDesc: "لقد تعاونا مع مؤسسات السيارات الموثوقة والخدمات المالية وشركات الخدمات اللوجستية لتقديم خدمة شاملة وموثوقة لعملائنا.",
    industryRecognition: "تقدير الصناعة، 2023",
    joinCommunity: "انضم إلى مجتمعنا",
    joinCommunityDesc: "سواء كنت تبحث عن شراء سيارة أحلامك أو بيع سيارتك الحالية، كن جزءًا من مجتمعنا المتنامي من العملاء الراضين.",
    contactUs: "اتصل بنا",
    joinTeam: "انضم إلى فريقنا",
    
    // How It Works
    howItWorksTitle: "كيف تعمل أبو حسن كار",
    howItWorksDesc: "عمليتنا البسيطة تجعل شراء وبيع السيارات سهلاً وشفافًا وآمنًا. تعرف على كيفية عمل منصتنا في بضع خطوات بسيطة.",
    ourProcess: "عمليتنا",
    findCars: "ابحث عن السيارات",
    findCarsDesc: "تصفح مجموعتنا الواسعة من السيارات المستعملة المعتمدة واستخدم الفلاتر للعثور على سيارتك المثالية.",
    placeBidsOrBuy: "ضع مزايدات أو اشتري",
    placeBidsOrBuyDesc: "ضع مزايدات على سيارات المزاد أو استخدم خيار الشراء الآن للشراء الفوري.",
    securePayment: "دفع آمن",
    securePaymentDesc: "أكمل عملية الشراء من خلال نظام الدفع الآمن لدينا مع حماية المشتري.",
    collectYourCar: "استلم سيارتك",
    collectYourCarDesc: "استلم سيارتك من نقاط الاستلام لدينا أو اختر خدمة التوصيل.",
    forBuyers: "للمشترين",
    forSellers: "للبائعين",
    createAccount: "إنشاء حساب",
    createAccountDesc: "سجل للحصول على حساب مجاني على منصتنا. ستحتاج إلى تقديم معلومات أساسية والتحقق من عنوان بريدك الإلكتروني. هذا يمنحك إمكانية الوصول لعرض تفاصيل المزاد وقوائم السيارات.",
    browseAndResearch: "تصفح وابحث",
    browseAndResearchDesc: "استكشف مجموعة واسعة من السيارات لدينا. استخدم الفلاتر لتضييق نطاق البحث استنادًا إلى الماركة والموديل والسنة ونطاق السعر والمزيد. تتضمن كل قائمة معلومات مفصلة وصورًا عالية الجودة وتقرير فحص شامل للسيارة.",
    bidOrBuy: "مزايدة أو شراء",
    bidOrBuyDesc: "اختر بين خيارين للشراء:",
    auction: "المزاد",
    auctionDesc: "ضع مزايدات على السيارات في قسم المزاد. حدد الحد الأقصى لمزايدتك وسيقوم نظامنا بالمزايدة تلقائيًا نيابة عنك.",
    buyNow: "الشراء الآن",
    buyNowDesc: "الشراء الفوري بسعر ثابت دون انتظار انتهاء المزاد.",
    paymentAndDocumentation: "الدفع والتوثيق",
    paymentAndDocumentationDesc: "عندما تفوز بمزاد أو تشتري سيارة، ستتلقى تعليمات مفصلة لإكمال الدفع. نقبل التحويلات المصرفية الآمنة وبطاقات الائتمان الرئيسية. بعد تأكيد الدفع، سنتعامل مع جميع الأوراق اللازمة ووثائق النقل.",
    collectionOrDelivery: "الاستلام أو التوصيل",
    collectionOrDeliveryDesc: "يمكنك إما استلام سيارتك من إحدى منشآتنا الآمنة أو ترتيب توصيلها إلى الموقع الذي تفضله. سينسق فريقنا معك لضمان عملية تسليم سلسة.",
    browseAuctions: "تصفح المزادات",
    registerAsSeller: "التسجيل كبائع",
    
    // Contact Page
    contactUsHeading: "اتصل بنا",
    contactUsDesc: "هل لديك أسئلة أو تحتاج إلى مساعدة؟ فريقنا هنا للمساعدة. تواصل معنا من خلال أي من القنوات أدناه.",
    visitUs: "زورنا",
    visitUsAddress1: "123 شارع المزاد",
    visitUsAddress2: "ستوكهولم، السويد 12345",
    callUs: "اتصل بنا",
    customerSupport: "دعم العملاء:",
    supportPhone: "+46 123 456 7890",
    salesInquiries: "استفسارات المبيعات:",
    salesPhone: "+46 123 456 7891",
    emailUs: "راسلنا",
    generalInquiries: "الاستفسارات العامة:",
    generalEmail: "info@abohasan.car",
    supportLabel: "الدعم:",
    supportEmail: "support@abohasan.car",
    openingHours: "ساعات العمل",
    monToFri: "الاثنين - الجمعة:",
    monToFriHours: "9:00 صباحًا - 6:00 مساءً",
    saturday: "السبت:",
    saturdayHours: "10:00 صباحًا - 4:00 مساءً",
    sunday: "الأحد:",
    sundayClosed: "مغلق",
    sendMessage: "أرسل لنا رسالة",
    fullName: "الاسم الكامل",
    enterFullName: "أدخل اسمك الكامل",
    emailAddress: "عنوان البريد الإلكتروني",
    yourEmail: "بريدك@مثال.كوم",
    phoneNumber: "رقم الهاتف",
    phoneExample: "مثال: +46 70 123 4567",
    subject: "الموضوع",
    selectSubject: "اختر موضوعًا",
    message: "الرسالة",
    howCanWeHelp: "كيف يمكننا مساعدتك؟",
    sendMessageBtn: "إرسال الرسالة",
    findUs: "جدنا"
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
  const [language, setLanguage] = useState<Language>('ar');

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
