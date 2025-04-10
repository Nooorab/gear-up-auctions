
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

// FAQ item interface
interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

// FAQ data
const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "How do I register for an account?",
    answer: "To register for an account, click on the 'Register' button in the top right corner of the website. Fill in your personal information, agree to the terms and conditions, and submit the form. You'll receive a confirmation email to verify your account.",
    category: "Account"
  },
  {
    id: 2,
    question: "What documents do I need to sell my car?",
    answer: "To sell your car on our platform, you'll need the vehicle's registration documents, service history, a valid MOT certificate (if applicable), and proof of identity. For a complete list of required documents, please visit our 'Sell Your Car' page.",
    category: "Selling"
  },
  {
    id: 3,
    question: "How does the bidding process work?",
    answer: "When you place a bid, you're committing to purchase the vehicle at that price if you win the auction. You can place multiple bids throughout the auction period. If someone outbids you, you'll receive a notification so you can place a new bid if you wish. The highest bidder at the end of the auction period wins the vehicle.",
    category: "Buying"
  },
  {
    id: 4,
    question: "What fees are involved in buying a car?",
    answer: "When buying a car through our platform, there's a buyer's premium of 5% of the vehicle's final price. Additional fees may include transfer fees, documentation fees, and any applicable taxes. A detailed breakdown of all fees will be provided before you complete your purchase.",
    category: "Buying"
  },
  {
    id: 5,
    question: "What happens if I win an auction?",
    answer: "If you win an auction, you'll receive a notification via email and on the website. You'll then have 24 hours to pay the deposit (typically 10% of the vehicle's price). The full payment must be completed within 7 days, after which you can arrange for collection or delivery of the vehicle.",
    category: "Buying"
  },
  {
    id: 6,
    question: "How do I get paid after my car sells?",
    answer: "Once your car is sold and the buyer has completed payment, the funds (minus our commission) will be transferred to your designated bank account. This typically takes 2-3 business days from the completion of the sale.",
    category: "Selling"
  },
  {
    id: 7,
    question: "What happens if my car doesn't sell?",
    answer: "If your car doesn't sell in the auction, you have several options: you can list it again in a future auction, convert it to a fixed-price listing, adjust your reserve price, or withdraw it from our platform. Our team will contact you to discuss these options.",
    category: "Selling"
  },
  {
    id: 8,
    question: "Can I test drive a car before bidding?",
    answer: "Yes, we offer viewing and test drive opportunities for most vehicles. Check the listing details for viewing times or contact us to arrange a viewing. We recommend inspecting any vehicle in person before placing a bid.",
    category: "Buying"
  },
  {
    id: 9,
    question: "What inspections do cars undergo before listing?",
    answer: "All vehicles undergo a comprehensive inspection by qualified technicians before being listed on our platform. The inspection covers mechanical condition, bodywork, electrical systems, and documentation verification. A detailed inspection report is available for each listing.",
    category: "General"
  },
  {
    id: 10,
    question: "How do I contact customer support?",
    answer: "You can reach our customer support team through the 'Contact Us' page, by email at support@abohasan.car, or by phone at +46 123 456 7890. Our support hours are Monday to Friday, 9am to 5pm CET.",
    category: "General"
  }
];

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openItems, setOpenItems] = useState<number[]>([]);

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
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-auction-primary text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg">
              Find answers to common questions about using our platform
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
                  {category}
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
                      <h3 className="text-lg font-medium">{item.question}</h3>
                      <ChevronDown 
                        className={`h-5 w-5 transition-transform ${openItems.includes(item.id) ? 'transform rotate-180' : ''}`} 
                      />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 bg-white">
                    <p className="text-auction-muted">{item.answer}</p>
                    <div className="mt-2">
                      <span className="inline-block bg-auction-light text-auction-primary text-sm px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
            
            {/* Additional help section */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="mb-6 text-auction-muted">
                If you couldn't find the answer to your question, our customer support team is ready to help.
              </p>
              <Button asChild>
                <a href="/contact">Contact Support</a>
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
