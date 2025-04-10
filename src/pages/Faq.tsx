
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// FAQ item interface
interface FaqItem {
  id: number;
  questionEn: string;
  questionAr: string;
  answerEn: string;
  answerAr: string;
  category: string;
}

const Faq = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openItems, setOpenItems] = useState<number[]>([]);

  // FAQ data
  const faqItems: FaqItem[] = [
    {
      id: 1,
      questionEn: "How do I register for an account?",
      questionAr: "كيف أسجل للحصول على حساب؟",
      answerEn: "To register for an account, click on the 'Register' button in the top right corner of the website. Fill in your personal information, agree to the terms and conditions, and submit the form. You'll receive a confirmation email to verify your account.",
      answerAr: "للتسجيل للحصول على حساب، انقر على زر 'تسجيل' في الزاوية العلوية اليمنى من الموقع. قم بملء معلوماتك الشخصية، والموافقة على الشروط والأحكام، وإرسال النموذج. ستتلقى بريدًا إلكترونيًا للتأكيد لتحقق من حسابك.",
      category: "Account"
    },
    {
      id: 2,
      questionEn: "What documents do I need to sell my car?",
      questionAr: "ما هي المستندات التي أحتاجها لبيع سيارتي؟",
      answerEn: "To sell your car on our platform, you'll need the vehicle's registration documents, service history, a valid MOT certificate (if applicable), and proof of identity. For a complete list of required documents, please visit our 'Sell Your Car' page.",
      answerAr: "لبيع سيارتك على منصتنا، ستحتاج إلى وثائق تسجيل المركبة، وتاريخ الخدمة، وشهادة الفحص الفني السارية (إن وجدت)، وإثبات الهوية. للحصول على قائمة كاملة بالمستندات المطلوبة، يرجى زيارة صفحة 'بيع سيارتك'.",
      category: "Selling"
    },
    {
      id: 3,
      questionEn: "How does the bidding process work?",
      questionAr: "كيف تعمل عملية المزايدة؟",
      answerEn: "When you place a bid, you're committing to purchase the vehicle at that price if you win the auction. You can place multiple bids throughout the auction period. If someone outbids you, you'll receive a notification so you can place a new bid if you wish. The highest bidder at the end of the auction period wins the vehicle.",
      answerAr: "عندما تضع مزايدة، فإنك تلتزم بشراء السيارة بهذا السعر إذا فزت في المزاد. يمكنك وضع عدة مزايدات خلال فترة المزاد. إذا زايد شخص آخر أكثر منك، ستتلقى إشعارًا حتى تتمكن من وضع مزايدة جديدة إذا رغبت في ذلك. أعلى مزايد في نهاية فترة المزاد يفوز بالسيارة.",
      category: "Buying"
    },
    {
      id: 4,
      questionEn: "What fees are involved in buying a car?",
      questionAr: "ما هي الرسوم المتضمنة في شراء سيارة؟",
      answerEn: "When buying a car through our platform, there's a buyer's premium of 5% of the vehicle's final price. Additional fees may include transfer fees, documentation fees, and any applicable taxes. A detailed breakdown of all fees will be provided before you complete your purchase.",
      answerAr: "عند شراء سيارة من خلال منصتنا، هناك علاوة للمشتري بنسبة 5٪ من السعر النهائي للسيارة. قد تشمل الرسوم الإضافية رسوم النقل، ورسوم التوثيق، وأي ضرائب مطبقة. سيتم تقديم تفصيل دقيق لجميع الرسوم قبل إتمام عملية الشراء.",
      category: "Buying"
    },
    {
      id: 5,
      questionEn: "What happens if I win an auction?",
      questionAr: "ماذا يحدث إذا فزت في المزاد؟",
      answerEn: "If you win an auction, you'll receive a notification via email and on the website. You'll then have 24 hours to pay the deposit (typically 10% of the vehicle's price). The full payment must be completed within 7 days, after which you can arrange for collection or delivery of the vehicle.",
      answerAr: "إذا فزت في المزاد، ستتلقى إشعارًا عبر البريد الإلكتروني وعلى الموقع. ثم سيكون لديك 24 ساعة لدفع العربون (عادة 10٪ من سعر السيارة). يجب إكمال الدفع الكامل في غضون 7 أيام، وبعد ذلك يمكنك ترتيب استلام أو توصيل السيارة.",
      category: "Buying"
    },
    {
      id: 6,
      questionEn: "How do I get paid after my car sells?",
      questionAr: "كيف أحصل على المال بعد بيع سيارتي؟",
      answerEn: "Once your car is sold and the buyer has completed payment, the funds (minus our commission) will be transferred to your designated bank account. This typically takes 2-3 business days from the completion of the sale.",
      answerAr: "بمجرد بيع سيارتك وإكمال المشتري للدفع، سيتم تحويل الأموال (ناقص عمولتنا) إلى حسابك المصرفي المحدد. عادة ما يستغرق ذلك 2-3 أيام عمل من إتمام البيع.",
      category: "Selling"
    },
    {
      id: 7,
      questionEn: "What happens if my car doesn't sell?",
      questionAr: "ماذا يحدث إذا لم تُبع سيارتي؟",
      answerEn: "If your car doesn't sell in the auction, you have several options: you can list it again in a future auction, convert it to a fixed-price listing, adjust your reserve price, or withdraw it from our platform. Our team will contact you to discuss these options.",
      answerAr: "إذا لم تُبع سيارتك في المزاد، لديك عدة خيارات: يمكنك إدراجها مرة أخرى في مزاد مستقبلي، أو تحويلها إلى قائمة بسعر ثابت، أو تعديل سعرك الاحتياطي، أو سحبها من منصتنا. سيتصل بك فريقنا لمناقشة هذه الخيارات.",
      category: "Selling"
    },
    {
      id: 8,
      questionEn: "Can I test drive a car before bidding?",
      questionAr: "هل يمكنني تجربة قيادة السيارة قبل المزايدة؟",
      answerEn: "Yes, we offer viewing and test drive opportunities for most vehicles. Check the listing details for viewing times or contact us to arrange a viewing. We recommend inspecting any vehicle in person before placing a bid.",
      answerAr: "نعم، نحن نقدم فرصًا للمشاهدة وتجربة القيادة لمعظم السيارات. تحقق من تفاصيل القائمة لمعرفة أوقات المشاهدة أو اتصل بنا لترتيب موعد للمشاهدة. نوصي بفحص أي سيارة شخصيًا قبل وضع مزايدة.",
      category: "Buying"
    },
    {
      id: 9,
      questionEn: "What inspections do cars undergo before listing?",
      questionAr: "ما هي الفحوصات التي تخضع لها السيارات قبل الإدراج؟",
      answerEn: "All vehicles undergo a comprehensive inspection by qualified technicians before being listed on our platform. The inspection covers mechanical condition, bodywork, electrical systems, and documentation verification. A detailed inspection report is available for each listing.",
      answerAr: "تخضع جميع السيارات لفحص شامل من قبل فنيين مؤهلين قبل إدراجها على منصتنا. يغطي الفحص الحالة الميكانيكية، وأعمال الهيكل، والأنظمة الكهربائية، والتحقق من الوثائق. يتوفر تقرير فحص مفصل لكل قائمة.",
      category: "General"
    },
    {
      id: 10,
      questionEn: "How do I contact customer support?",
      questionAr: "كيف أتواصل مع دعم العملاء؟",
      answerEn: "You can reach our customer support team through the 'Contact Us' page, by email at support@abohasan.car, or by phone at +46 123 456 7890. Our support hours are Monday to Friday, 9am to 5pm CET.",
      answerAr: "يمكنك الوصول إلى فريق دعم العملاء لدينا من خلال صفحة 'اتصل بنا'، أو عبر البريد الإلكتروني على support@abohasan.car، أو عبر الهاتف على +46 123 456 7890. ساعات الدعم لدينا من الاثنين إلى الجمعة، من الساعة 9 صباحًا حتى 5 مساءً بتوقيت وسط أوروبا.",
      category: "General"
    }
  ];

  const categoryTranslations = {
    "All": language === 'ar' ? "الكل" : "All",
    "Account": language === 'ar' ? "الحساب" : "Account",
    "Selling": language === 'ar' ? "البيع" : "Selling",
    "Buying": language === 'ar' ? "الشراء" : "Buying",
    "General": language === 'ar' ? "عام" : "General"
  };

  const categories = ["All", ...Array.from(new Set(faqItems.map(item => item.category)))];

  const filteredItems = activeCategory === "All" 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  const toggleItem = (id: number) => {
    setOpenItems(prevOpenItems => 
      prevOpenItems.includes(id) 
        ? prevOpenItems.filter(itemId => itemId !== id) 
        : [...prevOpenItems, id]
    );
  };

  return (
    <div className={`min-h-screen flex flex-col bg-background ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-auction-primary text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
            </h1>
            <p className="text-lg">
              {language === 'ar' 
                ? 'اعثر على إجابات للأسئلة الشائعة حول استخدام منصتنا'
                : 'Find answers to common questions about using our platform'}
            </p>
          </div>
        </div>
        
        {/* FAQ Content */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            {/* Category filters */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="mb-2"
                >
                  {categoryTranslations[category as keyof typeof categoryTranslations] || category}
                </Button>
              ))}
            </div>
            
            {/* FAQ items */}
            <div className="max-w-3xl mx-auto space-y-4">
              {filteredItems.map((item) => (
                <Collapsible
                  key={item.id}
                  open={openItems.includes(item.id)}
                  onOpenChange={() => toggleItem(item.id)}
                  className="border rounded-lg overflow-hidden"
                >
                  <CollapsibleTrigger asChild>
                    <div className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <h3 className="text-lg font-medium">
                        {language === 'ar' ? item.questionAr : item.questionEn}
                      </h3>
                      <ChevronDown 
                        className={`h-5 w-5 transition-transform ${openItems.includes(item.id) ? 'transform rotate-180' : ''}`} 
                      />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 bg-white">
                    <p className="text-auction-muted">
                      {language === 'ar' ? item.answerAr : item.answerEn}
                    </p>
                    <div className="mt-2">
                      <span className="inline-block bg-auction-light text-auction-primary text-sm px-3 py-1 rounded-full">
                        {categoryTranslations[item.category as keyof typeof categoryTranslations] || item.category}
                      </span>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
            
            {/* Additional help section */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'ar' ? 'هل لا تزال لديك أسئلة؟' : 'Still have questions?'}
              </h2>
              <p className="mb-6 text-auction-muted">
                {language === 'ar' 
                  ? 'إذا لم تتمكن من العثور على إجابة لسؤالك، فإن فريق دعم العملاء لدينا جاهز للمساعدة.'
                  : 'If you couldn\'t find the answer to your question, our customer support team is ready to help.'}
              </p>
              <Button asChild>
                <a href="/contact">
                  {language === 'ar' ? 'الاتصال بالدعم' : 'Contact Support'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Faq;
