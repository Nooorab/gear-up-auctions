
import React from 'react';
import { Search, Clipboard, CarFront, CreditCard } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-10 w-10 text-auction-accent" />,
    title: 'Find Cars',
    description: 'Browse our wide selection of verified used cars and filter to find your perfect match.'
  },
  {
    icon: <Clipboard className="h-10 w-10 text-auction-accent" />,
    title: 'Place Bids or Buy',
    description: 'Place bids on auction vehicles or use the Buy Now option for immediate purchase.'
  },
  {
    icon: <CreditCard className="h-10 w-10 text-auction-accent" />,
    title: 'Secure Payment',
    description: 'Complete your purchase through our secure payment system with buyer protection.'
  },
  {
    icon: <CarFront className="h-10 w-10 text-auction-accent" />,
    title: 'Collect Your Car',
    description: 'Pick up your car from our collection points or choose our delivery service.'
  }
];

const HowItWorks = () => {
  return (
    <section className="bg-auction-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Our simple process makes buying used cars easy, transparent, and secure.
            Get your dream car in just a few steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-auction-dark/20 p-4 rounded-full">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
