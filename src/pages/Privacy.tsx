
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '../context/LanguageContext';

const Privacy = () => {
  const { language } = useLanguage();

  const translations = {
    title: {
      en: "Privacy Policy",
      ar: "سياسة الخصوصية"
    },
    lastUpdated: {
      en: "Last updated: April 10, 2025",
      ar: "آخر تحديث: ١٠ أبريل ٢٠٢٥"
    },
    introduction: {
      en: "At Abo Hasan Car, we are committed to protecting your privacy and handling your personal information with transparency. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.",
      ar: "في أبو حسن للسيارات، نحن ملتزمون بحماية خصوصيتك والتعامل مع معلوماتك الشخصية بشفافية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام والكشف عن وحماية معلوماتك عند استخدام موقعنا وخدماتنا."
    },
    sections: {
      informationCollect: {
        title: {
          en: "1. Information We Collect",
          ar: "١. المعلومات التي نجمعها"
        },
        content: {
          en: "We collect the following types of information:",
          ar: "نحن نجمع الأنواع التالية من المعلومات:"
        },
        subsections: {
          personal: {
            title: {
              en: "1.1 Personal Information",
              ar: "١.١ المعلومات الشخصية"
            },
            items: {
              en: [
                "Contact information (name, email address, phone number, mailing address)",
                "Account credentials (username and password)",
                "Identity verification information (ID number, driver's license)",
                "Payment information (credit card details, bank account information)",
                "Vehicle information (when listing a car for sale)",
                "Profile information (preferences, profile picture)"
              ],
              ar: [
                "معلومات الاتصال (الاسم، عنوان البريد الإلكتروني، رقم الهاتف، العنوان البريدي)",
                "بيانات اعتماد الحساب (اسم المستخدم وكلمة المرور)",
                "معلومات التحقق من الهوية (رقم الهوية، رخصة القيادة)",
                "معلومات الدفع (تفاصيل بطاقة الائتمان، معلومات الحساب المصرفي)",
                "معلومات المركبة (عند إدراج سيارة للبيع)",
                "معلومات الملف الشخصي (التفضيلات، صورة الملف الشخصي)"
              ]
            }
          },
          automatic: {
            title: {
              en: "1.2 Automatically Collected Information",
              ar: "١.٢ المعلومات التي يتم جمعها تلقائيًا"
            },
            items: {
              en: [
                "Usage information (pages visited, time spent on site, click patterns)",
                "Device information (browser type, operating system, IP address)",
                "Location information (general location based on IP address)",
                "Cookies and similar technologies"
              ],
              ar: [
                "معلومات الاستخدام (الصفحات التي تمت زيارتها، الوقت المستغرق في الموقع، أنماط النقر)",
                "معلومات الجهاز (نوع المتصفح، نظام التشغيل، عنوان IP)",
                "معلومات الموقع (الموقع العام بناءً على عنوان IP)",
                "ملفات تعريف الارتباط والتقنيات المماثلة"
              ]
            }
          }
        }
      },
      contact: {
        title: {
          en: "12. Contact Us",
          ar: "١٢. اتصل بنا"
        },
        content: {
          en: "If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:\n\nAbo Hasan Car\n123 Auction Street\nDamascus, Syria 12345\nEmail: privacy@abohasan.car\nPhone: +46 123 456 7890",
          ar: "إذا كان لديك أي أسئلة أو مخاوف أو طلبات بخصوص سياسة الخصوصية هذه أو ممارسات الخصوصية لدينا، يرجى الاتصال بنا على:\n\nأبو حسن للسيارات\n١٢٣ شارع المزاد\nستوكهولم، السويد ١٢٣٤٥\nالبريد الإلكتروني: privacy@abohasan.car\nالهاتف: +46 123 456 7890"
        }
      }
      // Additional privacy policy sections would be defined here
    }
  };

  return (
    <div className={`min-h-screen flex flex-col bg-background ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-auction-primary text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{translations.title[language]}</h1>
            <p className="text-lg">
              {translations.lastUpdated[language]}
            </p>
          </div>
        </div>
        
        {/* Content */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p>
                {translations.introduction[language]}
              </p>
              
              <h2>{translations.sections.informationCollect.title[language]}</h2>
              <p>
                {translations.sections.informationCollect.content[language]}
              </p>
              
              <h3>{translations.sections.informationCollect.subsections.personal.title[language]}</h3>
              <ul>
                {translations.sections.informationCollect.subsections.personal.items[language].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <h3>{translations.sections.informationCollect.subsections.automatic.title[language]}</h3>
              <ul>
                {translations.sections.informationCollect.subsections.automatic.items[language].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              {/* Additional sections would be added here */}
              
              <h2>{translations.sections.contact.title[language]}</h2>
              <p>
                {translations.sections.contact.content[language].split('\n\n').map((paragraph, index) => (
                  <React.Fragment key={index}>
                    {paragraph.split('\n').map((line, lineIndex) => (
                      <React.Fragment key={lineIndex}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
