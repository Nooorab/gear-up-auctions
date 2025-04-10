
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Faq = () => {
  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      questions: [
        {
          question: 'What is Abo Hasan Car?',
          answer: 'Abo Hasan Car is a trusted platform for buying and selling used cars in Sweden, offering both auction-based and fixed-price options. Our platform provides transparent vehicle information, professional inspections, and secure transactions.'
        },
        {
          question: 'How do I create an account?',
          answer: 'Creating an account is simple. Click on the "Register" button in the top right corner of the website, fill in your personal details, verify your email address, and you\'re ready to start browsing or listing vehicles.'
        },
        {
          question: 'Is the service available nationwide?',
          answer: 'Yes, our services are available throughout Sweden. We have inspection centers and collection points in major cities including Stockholm, Gothenburg, Malmö, and Uppsala, with plans to expand to more locations soon.'
        },
        {
          question: 'What are your business hours?',
          answer: 'Our customer service team is available Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 4:00 PM. Our online platform is accessible 24/7 for browsing and bidding.'
        }
      ]
    },
    {
      id: 'buying',
      title: 'Buying a Car',
      questions: [
        {
          question: 'What\'s the difference between auction and buy-now listings?',
          answer: 'Auction listings allow multiple buyers to place bids over a set period (typically 7 days), potentially resulting in a competitive final price. Buy Now listings have a fixed price set by the seller for immediate purchase without waiting for an auction to end.'
        },
        {
          question: 'How do I place a bid?',
          answer: 'To place a bid, navigate to the auction listing you\'re interested in, enter your bid amount (which must be at least the minimum increment above the current bid), and confirm. You can also set a maximum bid and our system will automatically bid on your behalf up to that amount.'
        },
        {
          question: 'What happens if I win an auction?',
          answer: 'When you win an auction, you\'ll receive a notification with payment instructions. You\'ll typically have 3 business days to complete the payment. After payment confirmation, you can arrange for vehicle collection or delivery.'
        },
        {
          question: 'Can I inspect a car before buying?',
          answer: 'Yes, every vehicle on our platform comes with a detailed professional inspection report. Additionally, you can schedule an in-person viewing at one of our locations before making a purchase or placing a bid.'
        },
        {
          question: 'What fees should I expect as a buyer?',
          answer: 'Buyers pay the vehicle price plus a buyer\'s premium (typically 5% of the final sale price). For deliveries, there may be additional transportation fees depending on your location.'
        }
      ]
    },
    {
      id: 'selling',
      title: 'Selling a Car',
      questions: [
        {
          question: 'How do I list my car for sale?',
          answer: 'To list your car, create a seller account, provide comprehensive information about your vehicle including photos, and choose whether you want to sell it via auction or at a fixed price. Our team will contact you to arrange a professional inspection before the listing goes live.'
        },
        {
          question: 'What are the fees for sellers?',
          answer: 'Sellers pay a commission based on the final selling price (typically 8-10% depending on the vehicle value). This fee covers the professional inspection, listing creation, marketing, and transaction processing.'
        },
        {
          question: 'How quickly will my car sell?',
          answer: 'Auction listings run for a predetermined period, usually 7 days. Fixed-price listings remain active until sold or for up to 30 days, after which they can be renewed or adjusted. Well-priced vehicles in good condition typically sell quickly.'
        },
        {
          question: 'When do I get paid after my car sells?',
          answer: 'Once the buyer completes the payment, we process the funds and transfer the amount (minus our commission) to your designated bank account, typically within 3-5 business days.'
        }
      ]
    },
    {
      id: 'payments',
      title: 'Payments & Transactions',
      questions: [
        {
          question: 'What payment methods are accepted?',
          answer: 'We accept bank transfers, major credit cards, and debit cards. For security reasons, we do not accept cash payments for vehicle purchases.'
        },
        {
          question: 'Is there a deposit required for bidding?',
          answer: 'For certain high-value auctions, we may require a pre-authorization hold on your payment method to ensure serious bidding. This is clearly indicated on the auction listing and is released if you don\'t win.'
        },
        {
          question: 'How secure are the transactions?',
          answer: 'All transactions are processed through our secure payment system with encryption and fraud protection measures in place. We act as an intermediary between buyers and sellers to ensure funds are only released when all conditions are met.'
        }
      ]
    },
    {
      id: 'inspections',
      title: 'Vehicle Inspections',
      questions: [
        {
          question: 'What does the inspection cover?',
          answer: 'Our comprehensive inspection covers over 150 points including exterior condition, interior, mechanical components, electrical systems, undercarriage, fluid levels, and test drive performance. Each vehicle receives a detailed report highlighting both strengths and any issues.'
        },
        {
          question: 'How qualified are your inspectors?',
          answer: 'All inspections are conducted by certified mechanics with extensive experience in automotive diagnostics. Our inspection team undergoes regular training to stay updated on the latest vehicle technologies and inspection methods.'
        },
        {
          question: 'Can I trust the inspection reports?',
          answer: 'Absolutely. Our reputation is built on transparency and accuracy. The inspection reports provide an unbiased assessment of the vehicle\'s condition, with no interest in hiding or exaggerating issues. We document findings with photos and detailed notes.'
        }
      ]
    },
    {
      id: 'delivery',
      title: 'Collection & Delivery',
      questions: [
        {
          question: 'How do I collect the car I purchased?',
          answer: 'You can collect your vehicle from one of our secure facilities. We'll coordinate with you to schedule a convenient pickup time, where you'll complete the final paperwork and receive the keys.'
        },
        {
          question: 'Do you offer delivery services?',
          answer: 'Yes, we offer nationwide delivery for an additional fee based on distance. The vehicle is transported by professional carriers with full insurance coverage during transit.'
        },
        {
          question: 'How long does delivery take?',
          answer: 'Delivery times depend on your location and current logistics schedules. Typically, delivery within the same city takes 1-2 business days, while nationwide delivery can take 3-7 business days.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-auction-primary text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Find answers to common questions about buying and selling vehicles through our platform.
            </p>
            <div className="max-w-xl mx-auto mt-8">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for answers..."
                  className="pl-10 py-6 bg-white/10 border-white/20 placeholder:text-white/70 text-white"
                />
                <Search className="absolute left-3 top-3 h-5 w-5 text-white/70" />
                <Button className="absolute right-1 top-1 bg-auction-accent hover:bg-auction-accent/90">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Categories */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
              {faqCategories.map(category => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="flex flex-col items-center p-4 bg-auction-light rounded-lg hover:bg-auction-light/70 transition"
                >
                  <h3 className="font-medium text-center">{category.title}</h3>
                  <span className="text-sm text-auction-muted mt-1">
                    {category.questions.length} questions
                  </span>
                </a>
              ))}
            </div>
            
            {/* FAQ Accordions */}
            <div className="max-w-3xl mx-auto space-y-12">
              {faqCategories.map(category => (
                <div key={category.id} id={category.id}>
                  <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${category.id}-${index}`} className="border rounded-lg p-2">
                        <AccordionTrigger className="text-left px-4">{faq.question}</AccordionTrigger>
                        <AccordionContent className="px-4 pt-2 pb-4">
                          <p>{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Still Need Help Section */}
        <div className="py-12 bg-auction-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Can't find the answer you're looking for? Our customer support team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-auction-primary hover:bg-auction-primary/90">
                <a href="/contact">Contact Support</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+461234567890">Call Us: +46 123 456 7890</a>
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
