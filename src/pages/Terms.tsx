import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '../context/LanguageContext';

const Terms = () => {
  const { language } = useLanguage();
  
  const translations = {
    title: {
      en: "Terms and Conditions",
      ar: "الشروط والأحكام"
    },
    lastUpdated: {
      en: "Last updated: April 10, 2025",
      ar: "آخر تحديث: ١٠ أبريل ٢٠٢٥"
    },
    introduction: {
      en: "Please read these terms and conditions carefully before using the Abo Hasan Car platform. By accessing or using our service, you agree to be bound by these terms.",
      ar: "يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام منصة أبو حسن للسيارات. من خلال الوصول إلى خدمتنا أو استخدامها، فإنك توافق على الالتزام بهذه الشروط."
    },
    sections: {
      definitions: {
        title: {
          en: "1. Definitions",
          ar: "١. التعريفات"
        },
        content: {
          en: `"Platform" refers to the Abo Hasan Car website and all related services.
          "User" refers to any individual or entity that accesses or uses our Platform.
          "Buyer" refers to a User who purchases or bids on vehicles through our Platform.
          "Seller" refers to a User who lists vehicles for sale on our Platform.
          "Listing" refers to any vehicle advertisement placed on our Platform.`,
          ar: `"المنصة" تشير إلى موقع أبو حسن للسيارات وجميع الخدمات ذات الصلة.
          "المستخدم" يشير إلى أي فرد أو كيان يصل إلى منصتنا أو يستخدمها.
          "المشتري" يشير إلى مستخدم يشتري أو يزايد على سيارات من خلال منصتنا.
          "البائع" يشير إلى مستخدم يعرض سيارات للبيع على منصتنا.
          "القائمة" تشير إلى أي إعلان عن سيارة موضوع على منصتنا.`
        }
      },
      registration: {
        title: {
          en: "2. Account Registration",
          ar: "٢. تسجيل الحساب"
        },
        content: {
          en: "2.1. To use certain features of our Platform, Users must register for an account by providing accurate and complete information.\n\n2.2. Users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account.\n\n2.3. Users must be at least 18 years old to create an account.\n\n2.4. We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.",
          ar: "٢.١. لاستخدام ميزات معينة من منصتنا، يجب على المستخدمين التسجيل للحصول على حساب من خلال تقديم معلومات دقيقة وكاملة.\n\n٢.٢. المستخدمون مسؤولون عن الحفاظ على سرية بيانات اعتماد حسابهم وعن جميع الأنشطة التي تحدث تحت حسابهم.\n\n٢.٣. يجب أن يكون عمر المستخدمين ١٨ عامًا على الأقل لإنشاء حساب.\n\n٢.٤. نحتفظ بالحق في تعليق أو إنهاء الحسابات التي تنتهك هذه الشروط أو تشارك في نشاط احتيالي."
        }
      },
      listingGuidelines: {
        title: {
          en: "3. Listing Guidelines",
          ar: "٣. قواعد الإعلان"
        },
        content: {
          en: "3.1. Sellers must provide accurate and complete information about the vehicles they list.\n\n3.2. All vehicles must undergo our professional inspection before being listed.\n\n3.3. Sellers must have legal ownership or the authority to sell the vehicle being listed.\n\n3.4. We reserve the right to refuse or remove any listing at our sole discretion.",
          ar: "٣.١. يجب على البائعين تقديم معلومات دقيقة وموثوقة عن السيارات التي يعرضونها.\n\n٣.٢. يجب أن يتم تقييم جميع السيارات قبل إضافةها إلى القائمة.\n\n٣.٣. يجب أن يكون البائعون مالكين أو يمتلكون صلاحية بيع السيارة التي يعرضونها.\n\n٣.٤. نحتفظ بالحق في رفض أو إزالة أي إعلانات على حسابنا."
        }
      },
      biddingAndPurchasing: {
        title: {
          en: "4. Bidding and Purchasing",
          ar: "٤. زكاة وشراء"
        },
        content: {
          en: "4.1. By placing a bid, Buyers commit to purchasing the vehicle if they are the winning bidder.\n\n4.2. For auction listings, the highest valid bid at the end of the auction period wins.\n\n4.3. For Buy Now listings, the first User to complete the purchase process will secure the vehicle.\n\n4.4. We reserve the right to cancel bids that we determine, in our sole discretion, to be fraudulent or in violation of these terms.",
          ar: "٤.١. عند وضع زكاة، يتعين على المشتريين شراء السيارة إذا كانت زكاةهم الفائزة.\n\n٤.٢. في إعلانات المزاد، يفوز الفائز بالزكاة في نهاية فترة المزاد.\n\n٤.٣. في إعلانات شراء الآن، يحصل أول مستخدم على السيارة عند إتمام عملية الشراء.\n\n٤.٤. نحتفظ بالحق في إلغاء زكاة إذا تم تحديدها، في حسابنا، بأنها مخالفة أو تنتهك هذه الشروط."
        }
      },
      feesAndPayments: {
        title: {
          en: "5. Fees and Payments",
          ar: "٥. رسوم ودفعات"
        },
        content: {
          en: "5.1. Sellers will be charged a commission based on the final selling price of their vehicle. The exact commission rate will be clearly communicated before listing.\n\n5.2. Buyers will be charged a buyer's premium in addition to the final purchase price. The exact premium rate will be clearly displayed before bidding or purchasing.\n\n5.3. All payments must be made through our secure payment system. Cash transactions are not permitted.\n\n5.4. Failure to complete payment for a won auction or confirmed purchase may result in account suspension and additional fees.",
          ar: "٥.١. يجب أن يدفع البائعون رسوم مالية بناءً على سعر البيع النهائي للسيارة. سعر هذه الرسوم سيكون واضحًا قبل إضافة السيارة إلى القائمة.\n\n٥.٢. يجب أن يدفع المشتريون رسوم مالية إضافية على سعر الشراء النهائي. سعر هذه الرسوم سيكون واضحًا قبل وضع زكاة أو الشراء.\n\n٥.٣. يجب أن يتم دفع جميع المدفوعات عبر نظام الدفع الآمن لدينا. لا يسمح بدفعات نقاشية.\n\n٥.٤. عدم إتمام الدفع لعائدة المزاد أو الشراء المؤكد قد يؤدي إلى تعليق حسابك ورسوم إضافية."
        }
      },
      vehicleInspectionAndCondition: {
        title: {
          en: "6. Vehicle Inspection and Condition",
          ar: "٦. تقييم السيارة والCONDİTİON"
        },
        content: {
          en: "6.1. All vehicles listed on our Platform undergo a professional inspection conducted by our certified team.\n\n6.2. While we strive for accuracy, inspection reports represent a point-in-time assessment and we cannot guarantee that all issues will be identified.\n\n6.3. Buyers are encouraged to review inspection reports carefully and, when possible, inspect vehicles in person before bidding or purchasing.\n\n6.4. Unless otherwise stated, vehicles are sold \"as is\" without any warranties, express or implied.",
          ar: "٦.١. يتم تقييم جميع السيارات على منصتنا بواسطة فريق تقييمنا الموثوق.\n\n٦.٢. نسعى لضمان الدقة، لكن تقارير التقييم تمثل تقييمًا مقتصرًا في الوقت الحالي، ولا نستطيع التأكد من أن جميع المشكلات قد تُكتشف.\n\n٦.٣. ننصح المشتريين بالقراءة الدقيقة لتقارير التقييم و، إذا كان ذلك ممكنًا، بالزيارة الفعلية للسيارة قبل وضع زكاة أو الشراء.\n\n٦.٤. إذا لم يتم تحديد ذلك، يتم بيع السيارات \"ك هي\" دون أي ضمانات، صريحة أو غير صريحة."
        }
      },
      deliveryAndCollection: {
        title: {
          en: "7. Delivery and Collection",
          ar: "٧. التوصيل والجمع"
        },
        content: {
          en: "7.1. Buyers are responsible for arranging collection of the vehicle or paying for delivery services.\n\n7.2. Risk of loss transfers to the Buyer upon collection or delivery of the vehicle.\n\n7.3. Delivery times are estimates and not guaranteed.",
          ar: "٧.١. يقع المسئولية عن جمع السيارة أو الدفع للخدمات التوصيلية على المشتريين.\n\n٧.٢. مخاطر التخليق تنتقل إلى المشتريين عند جمع أو توصيل السيارة.\n\n٧.٣. تأوقات التوصيل هي تقديرات وليست محددة."
        }
      },
      cancellationAndReturns: {
        title: {
          en: "8. Cancellation and Returns",
          ar: "٨. إلغاء ومرتجعات"
        },
        content: {
          en: "8.1. Once a bid is won or a purchase is confirmed, cancellations are generally not permitted.\n\n8.2. In exceptional circumstances, we may, at our sole discretion, allow a cancellation with an applicable fee.\n\n8.3. If a vehicle is significantly misrepresented or has undisclosed major issues not captured in the inspection report, Buyers may request a review within 24 hours of collection or delivery.",
          ar: "٨.١. إذا فازت زكاة أو تم تأكيد الشراء، فإن الإلغاءات عادةً غير مسموح بها.\n\n٨.٢. في حالة أحداث خاصة، قد نسمح بإلغاء زكاة أو الشراء مع رسوم مالية محددة.\n\n٨.٣. إذا كانت السيارة تم توضيحها بشكل غير صحيح أو إذا كانت لديها مشاكل كبيرة غير مذكورة في تقرير التقييم، يمكن للمشتريين طلب مراجعة خلال 24 ساعة من جمع أو توصيل السيارة."
        }
      },
      intellectualProperty: {
        title: {
          en: "9. Intellectual Property",
          ar: "٩. حقوق الملكية الفكرية"
        },
        content: {
          en: "9.1. All content on our Platform, including but not limited to text, graphics, logos, images, and software, is the property of Abo Hasan Car or our licensors and is protected by intellectual property laws.\n\n9.2. Users may not reproduce, distribute, modify, or create derivative works from any content on our Platform without our express written permission.",
          ar: "٩.١. جميع المحتوى على منصتنا، بما في ذلك النصوص، الرسومات، الشهارات، الصور، وبرامج البرمجيات، هي ملكية أبو حسن للسيارات أو حقوق النشر الخاصة بها وتحت حماية قوانين الملكية الفكرية.\n\n٩.٢. لا يمكن للمستخدمين إعادة إنتاج، توزيع، تحرير أو إنشاء أعمال تراثية من أي محتوى على منصتنا دون إذن كتابي مسبق مننا."
        }
      },
      limitationOfLiability: {
        title: {
          en: "10. Limitation of Liability",
          ar: "٩. الحد الأدنى للمسؤولية"
        },
        content: {
          en: "10.1. To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to the use of our Platform.\n\n10.2. Our total liability for any claim arising out of or relating to these terms or our Platform shall not exceed the amounts paid by the User to Abo Hasan Car in the 12 months preceding the claim.",
          ar: "٩.١. نحن نتحمل مسؤوليةنا على حدود القانون، ولا نتحمل مسؤولية أي ضرر غير مباشر، أو غير مباشر، أو خاصة، أو مزمن، أو مخالفة قد تحدث عن استخدام منصتنا.\n\n٩.٢. مسؤوليةنا الكاملة للجميع الأحداث التي تتعلق بهذه الشروط أو منصةنا لا تتجاوز مبالغ الدفع التي أقدمها المستخدمون لشركة أبو حسن للسيارات في السنة السابقة للحصول على هذه الأحداث."
        }
      },
      disputeResolution: {
        title: {
          en: "11. Dispute Resolution",
          ar: "٩. حل الأحداث"
        },
        content: {
          en: "11.1. Any dispute arising out of or relating to these terms or our Platform shall first be resolved through good faith negotiations.\n\n11.2. If negotiations fail, disputes shall be resolved through arbitration in Stockholm, Sweden, under the rules of the Swedish Arbitration Association.",
          ar: "٩.١. أي احتجاج ينشأ عن أو يتعلق بهذه الشروط أو منصةنا يجب أن يتم حله بالتعاون الجيد.\n\n٩.٢. إذا فشلت المفاوضات، يجب حل الأحداث من خلال الفصل بالتعاون في ستوكهولم، السويد، على أساس القواعد للاتحاد الدولي للتفاوض."
        }
      },
      changesToTerms: {
        title: {
          en: "12. Changes to Terms",
          ar: "٩. تغييرات في الشروط"
        },
        content: {
          en: "12.1. We reserve the right to modify these terms at any time, with changes effective upon posting to our Platform.\n\n12.2. Continued use of our Platform after changes constitutes acceptance of the modified terms.",
          ar: "٩.١. نحتفظ بالحق في تغيير هذه الشروط في أي وقت، مع تغييرات تصبح فعالة عند نشرها على منصتنا.\n\n٩.٢. الاستخدام المستمر من منصةنا بعد التغييرات يعتبر قبولًا للشروط المعدلة."
        }
      },
      contact: {
        title: {
          en: "13. Contact Information",
          ar: "٩. معلومات الاتصال"
        },
        content: {
          en: "For questions about these terms, please contact us at:\nAbo Hasan Car\n123 Auction Street\nStockholm, Sweden 12345\nEmail: legal@abohasan.car\nPhone: +46 123 456 7890",
          ar: "للأسئلة حول هذه الشروط، يرجى الاتصال بنا على:\nأبو حسن للسيارات\n١٢٣ شارع المزاد\nستوكهولم، السويد ١٢٣٤٥\nالبريد الإلكتروني: legal@abohasan.car\nالهاتف: +46 123 456 7890"
        }
      }
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
              
              <h2>{translations.sections.definitions.title[language]}</h2>
              <p>
                {translations.sections.definitions.content[language].split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              
              <h2>{translations.sections.registration.title[language]}</h2>
              <p>
                {translations.sections.registration.content[language].split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </p>
              
              <h2>{translations.sections.listingGuidelines.title[language]}</h2>
              <p>
                {translations.sections.listingGuidelines.content[language].split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              
              <h2>{translations.sections.biddingAndPurchasing.title[language]}</h2>
              <p>
                {translations.sections.biddingAndPurchasing.content[language].split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              
              <h2>{translations.sections.feesAndPayments.title[language]}</h2>
              <p>
                {translations.sections.feesAndPayments.content[language].split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              
              <h2>{translations.sections.vehicleInspectionAndCondition.title[language]}</h2>
              <p>
                {translations.sections.vehicleInspectionAndCondition.content[language].split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              
              <h2>{translations.sections.deliveryAndCollection.title[language]}</h2>
              <p>
                {translations.sections.deliveryAndCollection.content[language].split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              
              <h2>{translations.sections.cancellationAndReturns.title[language]}</h2>
              <p>
                {translations.sections.cancellationAndReturns.content[language].split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              
              <h2>{translations.sections.intellectualProperty.title[language]}</h2>
              <p>
                {translations.sections.intellectualProperty.content[language].split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              
              <h2>{translations.sections.limitationOfLiability.title[language]}</h2>
              <p>
                {translations.sections.limitationOfLiability.content[language].split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              
              <h2>{translations.sections.disputeResolution.title[language]}</h2>
              <p>
                {translations.sections.disputeResolution.content[language].split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              
              <h2>{translations.sections.changesToTerms.title[language]}</h2>
              <p>
                {translations.sections.changesToTerms.content[language].split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              
              <h2>{translations.sections.contact.title[language]}</h2>
              <p>
                {translations.sections.contact.content[language].split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
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

export default Terms;
