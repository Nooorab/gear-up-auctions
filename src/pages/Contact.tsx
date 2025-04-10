
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-auction-primary text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Have questions or need assistance? Our team is here to help.
              Get in touch with us through any of the channels below.
            </p>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-auction-light rounded-lg">
                <div className="mx-auto bg-auction-primary/10 rounded-full p-4 inline-flex mb-4">
                  <MapPin className="h-8 w-8 text-auction-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <address className="not-italic text-auction-muted">
                  <p>123 Auction Street</p>
                  <p>Stockholm, Sweden 12345</p>
                </address>
              </div>
              
              <div className="text-center p-6 bg-auction-light rounded-lg">
                <div className="mx-auto bg-auction-primary/10 rounded-full p-4 inline-flex mb-4">
                  <Phone className="h-8 w-8 text-auction-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-auction-muted">Customer Support:</p>
                <p className="font-medium">+46 123 456 7890</p>
                <p className="text-auction-muted mt-2">Sales Inquiries:</p>
                <p className="font-medium">+46 123 456 7891</p>
              </div>
              
              <div className="text-center p-6 bg-auction-light rounded-lg">
                <div className="mx-auto bg-auction-primary/10 rounded-full p-4 inline-flex mb-4">
                  <Mail className="h-8 w-8 text-auction-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-auction-muted">General Inquiries:</p>
                <p className="font-medium">info@abohasan.car</p>
                <p className="text-auction-muted mt-2">Support:</p>
                <p className="font-medium">support@abohasan.car</p>
              </div>
              
              <div className="text-center p-6 bg-auction-light rounded-lg">
                <div className="mx-auto bg-auction-primary/10 rounded-full p-4 inline-flex mb-4">
                  <Clock className="h-8 w-8 text-auction-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Opening Hours</h3>
                <p className="text-auction-muted">Monday - Friday:</p>
                <p className="font-medium">9:00 AM - 6:00 PM</p>
                <p className="text-auction-muted mt-2">Saturday:</p>
                <p className="font-medium">10:00 AM - 4:00 PM</p>
                <p className="text-auction-muted mt-2">Sunday:</p>
                <p className="font-medium">Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form & Map */}
        <div className="py-12 bg-auction-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="name">
                        Full Name *
                      </label>
                      <Input type="text" id="name" placeholder="Enter your full name" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="email">
                        Email Address *
                      </label>
                      <Input type="email" id="email" placeholder="your.email@example.com" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="phone">
                      Phone Number
                    </label>
                    <Input type="tel" id="phone" placeholder="e.g. +46 70 123 4567" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="subject">
                      Subject *
                    </label>
                    <Select id="subject" required>
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="buying">Buying a Car</option>
                      <option value="selling">Selling a Car</option>
                      <option value="inspection">Vehicle Inspection</option>
                      <option value="feedback">Feedback</option>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="message">
                      Message *
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="How can we help you?" 
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
              
              {/* Map Section */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Find Us</h2>
                <div className="aspect-video bg-gray-200 rounded-md mb-4" style={{ minHeight: "300px" }}>
                  {/* Map will be embedded here - this is a placeholder */}
                  <div className="h-full w-full flex items-center justify-center text-gray-400">
                    Interactive Map
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">Abo Hasan Car - Stockholm Office</h3>
                <address className="not-italic text-auction-muted mb-4">
                  <p>123 Auction Street, Stockholm</p>
                  <p>Sweden 12345</p>
                </address>
                <p className="text-sm text-gray-600 mb-4">
                  Our main office is located in central Stockholm, easily accessible by public transportation. 
                  We're just a 5-minute walk from Central Station, with parking available nearby.
                </p>
                <Button variant="outline">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="p-6 bg-auction-light rounded-lg">
                <h3 className="text-lg font-semibold mb-2">What are your business hours?</h3>
                <p>
                  Our customer service team is available Monday to Friday from 9:00 AM to 6:00 PM and Saturday 
                  from 10:00 AM to 4:00 PM. Our online platform is accessible 24/7 for browsing and bidding.
                </p>
              </div>
              
              <div className="p-6 bg-auction-light rounded-lg">
                <h3 className="text-lg font-semibold mb-2">How long does it take to get a response?</h3>
                <p>
                  We aim to respond to all email inquiries within 24 hours during business days. For urgent matters, 
                  we recommend calling our customer service line for immediate assistance.
                </p>
              </div>
              
              <div className="p-6 bg-auction-light rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Do you have offices in other cities?</h3>
                <p>
                  Currently, our main office is in Stockholm, but we have vehicle inspection centers and collection 
                  points in Gothenburg, Malmö, and Uppsala. We're planning to expand to more cities soon.
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
