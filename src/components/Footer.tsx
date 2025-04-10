
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-auction-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Abo Hasan Car</h3>
            <p className="text-auction-secondary/80 mb-4">
              Your trusted platform for buying and selling quality used cars through 
              secure auctions and fixed-price listings.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-auction-secondary hover:text-auction-accent">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-auction-secondary hover:text-auction-accent">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-auction-secondary hover:text-auction-accent">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-auction-secondary hover:text-auction-accent">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/auctions" className="text-auction-secondary/80 hover:text-auction-accent">
                  Active Auctions
                </Link>
              </li>
              <li>
                <Link to="/buy" className="text-auction-secondary/80 hover:text-auction-accent">
                  Buy Now Cars
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-auction-secondary/80 hover:text-auction-accent">
                  Sell Your Car
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-auction-secondary/80 hover:text-auction-accent">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-auction-secondary/80 hover:text-auction-accent">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-auction-secondary/80 hover:text-auction-accent">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-auction-secondary/80 hover:text-auction-accent">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-auction-secondary/80 hover:text-auction-accent">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-auction-secondary/80 space-y-2">
              <p>123 Auction Street</p>
              <p>Stockholm, Sweden 12345</p>
              <p>Email: info@abohasan.car</p>
              <p>Phone: +46 123 456 7890</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-auction-secondary/60">
          <p>&copy; {new Date().getFullYear()} Abo Hasan Car. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
