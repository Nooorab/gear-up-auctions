
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

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-auction-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">How Abo Hasan Car Works</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Our simple process makes buying and selling cars easy, transparent, and secure.
              Learn how our platform works in a few simple steps.
            </p>
          </div>
        </div>
        
        {/* Process Overview */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-auction-light p-4 rounded-full">
                    <Search className="h-10 w-10 text-auction-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Find Cars</h3>
                <p className="text-auction-muted">
                  Browse our wide selection of verified used cars and filter to find your perfect match.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-auction-light p-4 rounded-full">
                    <Clipboard className="h-10 w-10 text-auction-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Place Bids or Buy</h3>
                <p className="text-auction-muted">
                  Place bids on auction vehicles or use the Buy Now option for immediate purchase.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-auction-light p-4 rounded-full">
                    <CreditCard className="h-10 w-10 text-auction-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
                <p className="text-auction-muted">
                  Complete your purchase through our secure payment system with buyer protection.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-auction-light p-4 rounded-full">
                    <CarFront className="h-10 w-10 text-auction-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Collect Your Car</h3>
                <p className="text-auction-muted">
                  Pick up your car from our collection points or choose our delivery service.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* For Buyers Section */}
        <div className="py-16 bg-auction-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">For Buyers</h2>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-auction-primary/10 rounded-full p-4 shrink-0">
                    <User className="h-8 w-8 text-auction-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Create an Account</h3>
                    <p>
                      Sign up for a free account on our platform. You'll need to provide basic information and 
                      verify your email address. This gives you access to view auction details and car listings.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-auction-primary/10 rounded-full p-4 shrink-0">
                    <Search className="h-8 w-8 text-auction-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Browse and Research</h3>
                    <p>
                      Explore our extensive inventory of vehicles. Use filters to narrow down your search based on make, 
                      model, year, price range, and more. Each listing includes detailed information, high-quality photos, 
                      and a comprehensive vehicle inspection report.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-auction-primary/10 rounded-full p-4 shrink-0">
                    <Clipboard className="h-8 w-8 text-auction-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Bid or Buy</h3>
                    <p>
                      Choose between two purchase options:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>
                        <span className="font-medium">Auction:</span> Place bids on vehicles in our auction section. Set your maximum bid and our system will automatically bid on your behalf.
                      </li>
                      <li>
                        <span className="font-medium">Buy Now:</span> Purchase immediately at a fixed price without waiting for an auction to end.
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-auction-primary/10 rounded-full p-4 shrink-0">
                    <CreditCard className="h-8 w-8 text-auction-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Payment and Documentation</h3>
                    <p>
                      When you win an auction or purchase a car, you'll receive detailed instructions for completing the payment. 
                      We accept secure bank transfers and major credit cards. After payment confirmation, we'll handle all necessary 
                      paperwork and transfer documents.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-auction-primary/10 rounded-full p-4 shrink-0">
                    <CarFront className="h-8 w-8 text-auction-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Collection or Delivery</h3>
                    <p>
                      You can either collect your vehicle from one of our secure facilities or arrange for delivery to your 
                      preferred location. Our team will coordinate with you to ensure a smooth handover process.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <Button asChild size="lg" className="bg-auction-accent hover:bg-auction-accent/90">
                  <a href="/auctions">Browse Auctions</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* For Sellers Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">For Sellers</h2>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6 items-start bg-auction-light p-6 rounded-lg">
                  <div className="bg-auction-accent/20 rounded-full p-4 shrink-0">
                    <User className="h-8 w-8 text-auction-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Register as a Seller</h3>
                    <p>
                      Create a seller account on our platform. You'll need to provide additional information compared 
                      to a regular buyer account, including your contact details and bank information for receiving payments.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start bg-auction-light p-6 rounded-lg">
                  <div className="bg-auction-accent/20 rounded-full p-4 shrink-0">
                    <Clipboard className="h-8 w-8 text-auction-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Submit Vehicle Details</h3>
                    <p>
                      Provide comprehensive information about your vehicle, including make, model, year, mileage, condition, 
                      features, and high-quality photos. The more details you provide, the more attractive your listing will be.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start bg-auction-light p-6 rounded-lg">
                  <div className="bg-auction-accent/20 rounded-full p-4 shrink-0">
                    <ShieldCheck className="h-8 w-8 text-auction-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional Inspection</h3>
                    <p>
                      Our team of experts will conduct a thorough inspection of your vehicle. This creates trust and transparency 
                      with potential buyers. The inspection report will be attached to your listing, highlighting both the 
                      strengths of your vehicle and any areas that may need attention.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start bg-auction-light p-6 rounded-lg">
                  <div className="bg-auction-accent/20 rounded-full p-4 shrink-0">
                    <Clock className="h-8 w-8 text-auction-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Choose Your Sale Method</h3>
                    <p>
                      Decide how you want to sell your vehicle:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>
                        <span className="font-medium">Auction:</span> Set a reserve price (minimum selling price) and let buyers bid on your vehicle over a set period (typically 7 days).
                      </li>
                      <li>
                        <span className="font-medium">Fixed Price:</span> Set a specific price for immediate purchase.
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start bg-auction-light p-6 rounded-lg">
                  <div className="bg-auction-accent/20 rounded-full p-4 shrink-0">
                    <CreditCard className="h-8 w-8 text-auction-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Receive Payment</h3>
                    <p>
                      When your vehicle sells, we handle the payment processing and ensure you receive the funds securely. 
                      We'll deduct our commission fee (clearly explained in advance) and transfer the remaining amount to 
                      your designated bank account.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <Button asChild size="lg" className="bg-auction-accent hover:bg-auction-accent/90">
                  <a href="/sell">Sell Your Car</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="py-16 bg-auction-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Why Choose Abo Hasan Car</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <ShieldCheck className="h-12 w-12 text-auction-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Trust & Transparency</h3>
                <p className="text-gray-200">
                  Every vehicle undergoes a thorough inspection with detailed reports available to all buyers.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <Users className="h-12 w-12 text-auction-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                <p className="text-gray-200">
                  Our team of automotive experts is available to guide you through every step of the process.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <Truck className="h-12 w-12 text-auction-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Convenient Delivery</h3>
                <p className="text-gray-200">
                  We offer nationwide delivery options to bring your vehicle directly to your doorstep.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <CheckCircle className="h-12 w-12 text-auction-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-200">
                  We only list vehicles that meet our strict quality standards, giving you peace of mind.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <CreditCard className="h-12 w-12 text-auction-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
                <p className="text-gray-200">
                  Our secure payment system protects both buyers and sellers throughout the transaction.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <Clipboard className="h-12 w-12 text-auction-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Simple Process</h3>
                <p className="text-gray-200">
                  We handle all the paperwork and administrative tasks, making the process hassle-free.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="p-6 bg-auction-light rounded-lg">
                <h3 className="text-lg font-semibold mb-2">What is the difference between auction and buy-now options?</h3>
                <p>
                  Auction listings allow multiple buyers to place bids over a set period, potentially resulting in a higher selling price. 
                  Buy Now listings have a fixed price set by the seller for immediate purchase without waiting for an auction to end.
                </p>
              </div>
              
              <div className="p-6 bg-auction-light rounded-lg">
                <h3 className="text-lg font-semibold mb-2">How are vehicles inspected?</h3>
                <p>
                  Our professional team conducts a comprehensive 150-point inspection of each vehicle, covering mechanical condition, 
                  electrical systems, cosmetic appearance, and more. The detailed report is made available to potential buyers.
                </p>
              </div>
              
              <div className="p-6 bg-auction-light rounded-lg">
                <h3 className="text-lg font-semibold mb-2">What fees are involved?</h3>
                <p>
                  For buyers, there is no fee to register or place bids. Winning bidders pay the vehicle price plus a buyer's premium 
                  (typically 5%). For sellers, we charge a commission based on the final selling price (usually 8-10% depending on the 
                  vehicle value).
                </p>
              </div>
              
              <div className="p-6 bg-auction-light rounded-lg">
                <h3 className="text-lg font-semibold mb-2">What happens if I win an auction?</h3>
                <p>
                  When you win an auction, you'll receive a notification with payment instructions. You'll typically have 3 business 
                  days to complete the payment. After payment confirmation, you can arrange for vehicle collection or delivery.
                </p>
              </div>
              
              <div className="text-center mt-10">
                <Button asChild>
                  <a href="/faq">View All FAQs</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-16 bg-auction-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're looking to buy your dream car or sell your current vehicle, 
              Abo Hasan Car makes the process simple, transparent, and secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-auction-accent hover:bg-gray-100">
                <a href="/auctions">Browse Auctions</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="/sell">Sell Your Car</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
