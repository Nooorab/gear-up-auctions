
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-auction-primary to-auction-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Next Car?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Join thousands of satisfied customers who have found their perfect vehicle through our platform.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">For Buyers</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-auction-accent mr-2 mt-0.5" />
                  <span>Access to verified vehicles with detailed inspections</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-auction-accent mr-2 mt-0.5" />
                  <span>Transparent bidding process with no hidden fees</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-auction-accent mr-2 mt-0.5" />
                  <span>Secure payments and buyer protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-auction-accent mr-2 mt-0.5" />
                  <span>Option to buy immediately or bid in auctions</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">For Sellers</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-auction-accent mr-2 mt-0.5" />
                  <span>Free professional valuation of your vehicle</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-auction-accent mr-2 mt-0.5" />
                  <span>Expert advice on maximizing your sale price</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-auction-accent mr-2 mt-0.5" />
                  <span>Exposure to thousands of potential buyers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-auction-accent mr-2 mt-0.5" />
                  <span>Hassle-free process with dedicated support</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-auction-accent hover:bg-auction-accent/90">
              Browse Cars
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Sell Your Car
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
