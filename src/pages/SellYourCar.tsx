
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CheckCircle, ArrowRight, Upload, Info } from 'lucide-react';

const SellYourCar = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    condition: '',
    description: '',
    saleType: 'auction',
    price: '',
    name: '',
    email: '',
    phone: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSaleTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, saleType: value }));
  };
  
  const nextStep = () => {
    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-auction-primary text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Sell Your Car With Us</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Get the best value for your vehicle through our trusted auction platform 
              or sell it directly at a fixed price.
            </p>
          </div>
        </div>
        
        {/* Step Indicator */}
        <div className="bg-white py-6 border-b">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center max-w-3xl mx-auto">
              <div className={`flex flex-col items-center ${step >= 1 ? 'text-auction-primary' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-auction-primary text-white' : 'bg-gray-200'}`}>
                  1
                </div>
                <span className="text-sm mt-1">Vehicle Details</span>
              </div>
              <div className={`h-1 flex-grow mx-2 ${step >= 2 ? 'bg-auction-primary' : 'bg-gray-200'}`}></div>
              <div className={`flex flex-col items-center ${step >= 2 ? 'text-auction-primary' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-auction-primary text-white' : 'bg-gray-200'}`}>
                  2
                </div>
                <span className="text-sm mt-1">Listing Type</span>
              </div>
              <div className={`h-1 flex-grow mx-2 ${step >= 3 ? 'bg-auction-primary' : 'bg-gray-200'}`}></div>
              <div className={`flex flex-col items-center ${step >= 3 ? 'text-auction-primary' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-auction-primary text-white' : 'bg-gray-200'}`}>
                  3
                </div>
                <span className="text-sm mt-1">Contact Info</span>
              </div>
              <div className={`h-1 flex-grow mx-2 ${step >= 4 ? 'bg-auction-primary' : 'bg-gray-200'}`}></div>
              <div className={`flex flex-col items-center ${step >= 4 ? 'text-auction-primary' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 4 ? 'bg-auction-primary text-white' : 'bg-gray-200'}`}>
                  4
                </div>
                <span className="text-sm mt-1">Review</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Form Container */}
        <div className="bg-auction-light py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6 md:p-8">
              {/* Step 1: Car Details */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Vehicle Details</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="make">
                          Make *
                        </label>
                        <select 
                          name="make" 
                          id="make" 
                          value={formData.make} 
                          onChange={handleChange} 
                          required
                          className="w-full rounded-md border border-input bg-background px-3 py-2"
                        >
                          <option value="">Select Make</option>
                          <option value="audi">Audi</option>
                          <option value="bmw">BMW</option>
                          <option value="ford">Ford</option>
                          <option value="honda">Honda</option>
                          <option value="mercedes">Mercedes-Benz</option>
                          <option value="toyota">Toyota</option>
                          <option value="volkswagen">Volkswagen</option>
                          <option value="volvo">Volvo</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="model">
                          Model *
                        </label>
                        <Input 
                          type="text" 
                          id="model" 
                          name="model" 
                          placeholder="e.g. Corolla, 3 Series" 
                          value={formData.model} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="year">
                          Year *
                        </label>
                        <Input 
                          type="number" 
                          id="year" 
                          name="year" 
                          placeholder="e.g. 2018" 
                          min="1900" 
                          max={new Date().getFullYear()} 
                          value={formData.year} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="mileage">
                          Mileage (km) *
                        </label>
                        <Input 
                          type="number" 
                          id="mileage" 
                          name="mileage" 
                          placeholder="e.g. 45000" 
                          value={formData.mileage} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="condition">
                        Condition *
                      </label>
                      <select 
                        name="condition" 
                        id="condition" 
                        value={formData.condition} 
                        onChange={handleChange} 
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                      >
                        <option value="">Select Condition</option>
                        <option value="excellent">Excellent</option>
                        <option value="very-good">Very Good</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="poor">Poor</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="description">
                        Description *
                      </label>
                      <Textarea 
                        id="description" 
                        name="description" 
                        placeholder="Provide details about your vehicle, including features, history, and any noteworthy information." 
                        rows={5}
                        value={formData.description} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-4">
                        Upload Photos *
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">
                          Drag and drop photos here, or click to select files
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          Include exterior (front, back, sides), interior, and any damage photos
                        </p>
                        <Button type="button" variant="outline" className="mt-4">
                          Select Files
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                    <Button type="button" onClick={nextStep} className="flex items-center">
                      Next Step
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 2: Listing Type */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Choose Listing Type</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div 
                        className={`border rounded-lg p-6 cursor-pointer transition ${formData.saleType === 'auction' ? 'border-auction-primary bg-auction-light/20' : 'border-gray-200 hover:border-gray-300'}`}
                        onClick={() => handleSaleTypeChange('auction')}
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold">Auction</h3>
                          <RadioGroup value={formData.saleType} onValueChange={handleSaleTypeChange} className="mt-1">
                            <RadioGroupItem value="auction" id="auction" />
                          </RadioGroup>
                        </div>
                        <p className="mt-2 text-gray-600 text-sm">
                          List your car in our auction platform where buyers can bid on your vehicle.
                        </p>
                        <ul className="mt-4 space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                            <span className="text-sm">Potential for higher final price</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                            <span className="text-sm">Wider pool of interested buyers</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                            <span className="text-sm">Professional valuation included</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div 
                        className={`border rounded-lg p-6 cursor-pointer transition ${formData.saleType === 'fixed' ? 'border-auction-primary bg-auction-light/20' : 'border-gray-200 hover:border-gray-300'}`}
                        onClick={() => handleSaleTypeChange('fixed')}
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold">Fixed Price</h3>
                          <RadioGroup value={formData.saleType} onValueChange={handleSaleTypeChange} className="mt-1">
                            <RadioGroupItem value="fixed" id="fixed" />
                          </RadioGroup>
                        </div>
                        <p className="mt-2 text-gray-600 text-sm">
                          Set a fixed price for your vehicle for immediate purchase by interested buyers.
                        </p>
                        <ul className="mt-4 space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                            <span className="text-sm">Faster selling process</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                            <span className="text-sm">You set the exact price</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                            <span className="text-sm">Greater price certainty</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {formData.saleType === 'fixed' && (
                      <div className="mt-6">
                        <label className="block text-sm font-medium mb-1" htmlFor="price">
                          Set Your Price (SEK) *
                        </label>
                        <Input 
                          type="number" 
                          id="price" 
                          name="price" 
                          placeholder="e.g. 250000" 
                          value={formData.price} 
                          onChange={handleChange} 
                          required 
                        />
                        <p className="mt-2 text-sm text-gray-500 flex items-center">
                          <Info className="h-4 w-4 mr-1" />
                          We'll help you verify if your price is competitive in the current market.
                        </p>
                      </div>
                    )}
                    
                    {formData.saleType === 'auction' && (
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="text-sm font-medium text-blue-800">Auction Information</h4>
                        <p className="mt-1 text-sm text-blue-600">
                          Our experts will evaluate your vehicle and suggest a starting bid price. 
                          Auctions typically run for 7 days, and you'll have the option to set a reserve price.
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button type="button" onClick={nextStep} className="flex items-center">
                      Next Step
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Contact Information */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="name">
                        Full Name *
                      </label>
                      <Input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Enter your full name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="email">
                        Email Address *
                      </label>
                      <Input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="your.email@example.com" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="phone">
                        Phone Number *
                      </label>
                      <Input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="e.g. +46 70 123 4567" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div className="flex items-start mt-4">
                      <Checkbox id="terms" required className="mt-1" />
                      <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                        I agree to the <a href="/terms" className="text-auction-primary hover:underline">Terms and Conditions</a> and 
                        acknowledge the <a href="/privacy" className="text-auction-primary hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <Checkbox id="marketing" className="mt-1" />
                      <label htmlFor="marketing" className="ml-2 text-sm text-gray-600">
                        I would like to receive updates, promotions, and marketing communications
                      </label>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button type="button" onClick={nextStep} className="flex items-center">
                      Review Listing
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 4: Review */}
              {step === 4 && (
                <div>
                  <div className="text-center mb-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold">Almost Done!</h2>
                    <p className="text-gray-600 mt-2">
                      Please review your listing details before submitting
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <h3 className="font-medium text-gray-700 mb-2">Vehicle Information</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Make</p>
                          <p className="font-medium">{formData.make}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Model</p>
                          <p className="font-medium">{formData.model}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Year</p>
                          <p className="font-medium">{formData.year}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Mileage</p>
                          <p className="font-medium">{formData.mileage} km</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Condition</p>
                          <p className="font-medium capitalize">{formData.condition}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-b pb-4">
                      <h3 className="font-medium text-gray-700 mb-2">Listing Details</h3>
                      <div>
                        <p className="text-sm text-gray-500">Listing Type</p>
                        <p className="font-medium capitalize">{formData.saleType === 'auction' ? 'Auction' : 'Fixed Price'}</p>
                        {formData.saleType === 'fixed' && (
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">Price</p>
                            <p className="font-medium">{Number(formData.price).toLocaleString()} SEK</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="border-b pb-4">
                      <h3 className="font-medium text-gray-700 mb-2">Contact Information</h3>
                      <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="font-medium">{formData.name}</p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{formData.email}</p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">{formData.phone}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Description</h3>
                      <p className="text-sm">{formData.description}</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button type="submit" className="bg-auction-accent hover:bg-auction-accent/90">
                      Submit Listing
                    </Button>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-sm text-yellow-800">
                      After submission, our team will review your listing and contact you to arrange 
                      a vehicle inspection before it goes live on our platform.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SellYourCar;
