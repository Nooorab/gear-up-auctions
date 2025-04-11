
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Clipboard, 
  CarFront, 
  CreditCard, 
  CheckCircle, 
  ShieldCheck, 
  Truck, 
  Users, 
  User, 
  Clock 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HowItWorks = () => {
  const { language, t } = useLanguage();

  return (
    <div className={`min-h-screen flex flex-col bg-background ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-auction-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('howItWorksTitle')}</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              {t('howItWorksDesc')}
            </p>
          </div>
        </div>
        
        {/* Process Overview */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t('ourProcess')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-auction-light p-4 rounded-full">
                    <Search className="h-10 w-10 text-auction-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('findCars')}</h3>
                <p className="text-auction-muted">
                  {t('findCarsDesc')}
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-auction-light p-4 rounded-full">
                    <Clipboard className="h-10 w-10 text-auction-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('placeBidsOrBuy')}</h3>
                <p className="text-auction-muted">
                  {t('placeBidsOrBuyDesc')}
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-auction-light p-4 rounded-full">
                    <CreditCard className="h-10 w-10 text-auction-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('securePayment')}</h3>
                <p className="text-auction-muted">
                  {t('securePaymentDesc')}
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-auction-light p-4 rounded-full">
                    <CarFront className="h-10 w-10 text-auction-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('collectYourCar')}</h3>
                <p className="text-auction-muted">
                  {t('collectYourCarDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* For Buyers Section */}
        <div className="py-16 bg-auction-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">{t('forBuyers')}</h2>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-auction-primary/10 rounded-full p-4 shrink-0">
                    <User className="h-8 w-8 text-auction-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('createAccount')}</h3>
                    <p>
                      {t('createAccountDesc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-auction-primary/10 rounded-full p-4 shrink-0">
                    <Search className="h-8 w-8 text-auction-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('browseAndResearch')}</h3>
                    <p>
                      {t('browseAndResearchDesc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-auction-primary/10 rounded-full p-4 shrink-0">
                    <Clipboard className="h-8 w-8 text-auction-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('bidOrBuy')}</h3>
                    <p>
                      {t('bidOrBuyDesc')}
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>
                        <span className="font-medium">{t('auction')}:</span> {t('auctionDesc')}
                      </li>
                      <li>
                        <span className="font-medium">{t('buyNow')}:</span> {t('buyNowDesc')}
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-auction-primary/10 rounded-full p-4 shrink-0">
                    <CreditCard className="h-8 w-8 text-auction-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('paymentAndDocumentation')}</h3>
                    <p>
                      {t('paymentAndDocumentationDesc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-auction-primary/10 rounded-full p-4 shrink-0">
                    <CarFront className="h-8 w-8 text-auction-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('collectionOrDelivery')}</h3>
                    <p>
                      {t('collectionOrDeliveryDesc')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-10">
                <Button asChild>
                  <a href="/auctions">{t('browseAuctions')}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* For Sellers Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">{t('forSellers')}</h2>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6 items-start bg-auction-light p-6 rounded-lg shadow-sm">
                  <div className="bg-auction-primary/10 rounded-full p-4 shrink-0">
                    <User className="h-8 w-8 text-auction-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('registerAsSeller')}</h3>
                    <p>
                      Create a seller account on our platform. You'll need to provide detailed information about yourself 
                      and verify your identity to ensure the security of all transactions.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start bg-auction-light p-6 rounded-lg shadow-sm">
                  <div className="bg-auction-primary/10 rounded-full p-4 shrink-0">
                    <Clipboard className="h-8 w-8 text-auction-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">List Your Vehicle</h3>
                    <p>
                      Provide detailed information about your car, including make, model, year, mileage, condition, 
                      features, and service history. Upload high-quality photos showing the interior, exterior, and 
                      any notable features or flaws.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start bg-auction-light p-6 rounded-lg shadow-sm">
                  <div className="bg-auction-primary/10 rounded-full p-4 shrink-0">
                    <CheckCircle className="h-8 w-8 text-auction-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Vehicle Inspection</h3>
                    <p>
                      Schedule an inspection with our professional mechanics. They'll evaluate your car and create 
                      a detailed inspection report, which increases buyer trust and can lead to higher selling prices.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start bg-auction-light p-6 rounded-lg shadow-sm">
                  <div className="bg-auction-primary/10 rounded-full p-4 shrink-0">
                    <ShieldCheck className="h-8 w-8 text-auction-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Choose Selling Method</h3>
                    <p>
                      Decide between an auction or a fixed-price listing:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>
                        <span className="font-medium">Auction:</span> Set a reserve price (optional) and let buyers bid over a set period.
                      </li>
                      <li>
                        <span className="font-medium">Fixed Price:</span> Set a non-negotiable price for immediate purchase.
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start bg-auction-light p-6 rounded-lg shadow-sm">
                  <div className="bg-auction-primary/10 rounded-full p-4 shrink-0">
                    <Truck className="h-8 w-8 text-auction-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sale Completion</h3>
                    <p>
                      Once your car is sold, we'll handle the payment processing, documentation, and transfer procedures. 
                      You'll receive your payment securely, minus our commission fee.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-10">
                <Button asChild>
                  <a href="/sell">{t('sell')}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="py-16 bg-auction-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Find answers to common questions about how our platform works. For more detailed information, 
              visit our comprehensive FAQ page.
            </p>
            <Button asChild>
              <a href="/faq">{t('faq')}</a>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
