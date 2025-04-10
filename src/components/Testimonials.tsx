
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Johan Andersson',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    role: 'Car Buyer',
    quote: 'I was skeptical about buying a car online, but Abo Hasan Car made the process incredibly easy. The car was exactly as described, and the transaction was smooth and secure.',
    rating: 5
  },
  {
    name: 'Maria Bergman',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    role: 'Car Seller',
    quote: 'Selling my car through the auction platform was much easier than I expected. The team helped me with the valuation and listing, and I got a better price than I would have elsewhere.',
    rating: 5
  },
  {
    name: 'Erik Johnson',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    role: 'Car Buyer',
    quote: 'The detailed inspection reports gave me confidence in my purchase. The car arrived in perfect condition, exactly as described. I wouldn\'t hesitate to use this service again.',
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-auction-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-auction-primary">What Our Customers Say</h2>
          <p className="mt-4 text-auction-muted max-w-2xl mx-auto">
            Hear from our community of buyers and sellers about their experience with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-auction-muted text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="italic text-gray-600">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
