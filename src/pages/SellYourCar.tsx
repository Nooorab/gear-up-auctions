
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CheckCircle, ArrowRight, Upload, Info } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { useLanguage } from '../context/LanguageContext';

// Define the available make types for cars
type CarMake = 'Audi' | 'BMW' | 'Ford' | 'Honda' | 'Mercedes' | 'Toyota' | 'Volkswagen' | 'Volvo';

// Define the available condition types for cars
type CarCondition = 'excellent' | 'very-good' | 'good' | 'fair' | 'poor';

// Define the available listing types
type ListingType = 'auction' | 'fixed-price';

interface FormData {
  make: CarMake | '';
  model: string;
  year: string;
  mileage: string;
  condition: CarCondition | '';
  description: string;
  saleType: 'auction' | 'fixed';
  price: string;
  name: string;
  email: string;
  phone: string;
}

interface ImageFile {
  file: File;
  preview: string;
}

const SellYourCar = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [images, setImages] = useState<ImageFile[]>([]);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  
  const isRTL = language === 'ar';
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSaleTypeChange = (value: 'auction' | 'fixed') => {
    setFormData(prev => ({ ...prev, saleType: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      
      // Preview images
      const imageFiles: ImageFile[] = [];
      filesArray.forEach(file => {
        if (file.type.startsWith('image/')) {
          imageFiles.push({
            file,
            preview: URL.createObjectURL(file)
          });
        }
      });
      
      setImages(prevImages => [...prevImages, ...imageFiles]);
    }
  };
  
  const removeImage = (indexToRemove: number) => {
    setImages(prevImages => prevImages.filter((_, index) => index !== indexToRemove));
  };
  
  const nextStep = () => {
    // Validate current step
    if (step === 1) {
      if (!formData.make || !formData.model || !formData.year || !formData.mileage || !formData.condition) {
        toast.error(t('requiredFields'));
        return;
      }
    } else if (step === 2) {
      if (formData.saleType === 'fixed' && !formData.price) {
        toast.error(t('enterPrice'));
        return;
      }
    } else if (step === 3) {
      if (!formData.name || !formData.email || !formData.phone || !termsAgreed) {
        toast.error(t('requiredFields'));
        return;
      }
      
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast.error(t('validEmail'));
        return;
      }
    }
    
    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // First create car entry with proper type casting
      const { data: carData, error: carError } = await supabase
        .from('cars')
        .insert({
          make: formData.make as CarMake,
          model: formData.model,
          year: parseInt(formData.year),
          mileage: parseInt(formData.mileage),
          condition: formData.condition as CarCondition,
          description: formData.description
        })
        .select()
        .single();
      
      if (carError) throw carError;
      
      // Then create listing with proper types
      const listingData = {
        car_id: carData.id,
        listing_type: formData.saleType === 'auction' ? 'auction' as ListingType : 'fixed-price' as ListingType,
        start_price: formData.saleType === 'fixed' ? parseInt(formData.price) : 0,
        user_id: '00000000-0000-0000-0000-000000000000', // This would typically be the authenticated user's ID
        auction_end_time: formData.saleType === 'auction' ? new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() : null // 7 days from now
      };
      
      const { error: listingError } = await supabase
        .from('car_listings')
        .insert(listingData);
      
      if (listingError) throw listingError;
      
      // Handle file uploads
      // This would be implemented with Supabase storage after authentication is set up
      
      toast.success(t('successMessage'));
      
      // Redirect after successful submission
      setTimeout(() => {
        navigate('/auctions');
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting car listing:', error);
      toast.error(t('errorMessage'));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render UI based on current step
  return (
    <div className={`min-h-screen flex flex-col bg-background ${isRTL ? 'rtl' : 'ltr'}`}>
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-auction-primary text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('sellYourCarWith')}</h1>
            <p className="text-lg max-w-2xl mx-auto">
              {t('getTheBestValue')}
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
                <span className="text-sm mt-1">{t('vehicleDetails')}</span>
              </div>
              <div className={`h-1 flex-grow mx-2 ${step >= 2 ? 'bg-auction-primary' : 'bg-gray-200'}`}></div>
              <div className={`flex flex-col items-center ${step >= 2 ? 'text-auction-primary' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-auction-primary text-white' : 'bg-gray-200'}`}>
                  2
                </div>
                <span className="text-sm mt-1">{t('listingType')}</span>
              </div>
              <div className={`h-1 flex-grow mx-2 ${step >= 3 ? 'bg-auction-primary' : 'bg-gray-200'}`}></div>
              <div className={`flex flex-col items-center ${step >= 3 ? 'text-auction-primary' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-auction-primary text-white' : 'bg-gray-200'}`}>
                  3
                </div>
                <span className="text-sm mt-1">{t('contactInfo')}</span>
              </div>
              <div className={`h-1 flex-grow mx-2 ${step >= 4 ? 'bg-auction-primary' : 'bg-gray-200'}`}></div>
              <div className={`flex flex-col items-center ${step >= 4 ? 'text-auction-primary' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 4 ? 'bg-auction-primary text-white' : 'bg-gray-200'}`}>
                  4
                </div>
                <span className="text-sm mt-1">{t('reviewListing')}</span>
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
                  <h2 className="text-2xl font-bold mb-6">{t('vehicleDetails')}</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="make">
                          {t('make')} *
                        </label>
                        <select 
                          name="make" 
                          id="make" 
                          value={formData.make} 
                          onChange={handleChange} 
                          required
                          className="w-full rounded-md border border-input bg-background px-3 py-2"
                        >
                          <option value="">{isRTL ? 'اختر الشركة' : 'Select Make'}</option>
                          <option value="Audi">Audi</option>
                          <option value="BMW">BMW</option>
                          <option value="Ford">Ford</option>
                          <option value="Honda">Honda</option>
                          <option value="Mercedes">Mercedes-Benz</option>
                          <option value="Toyota">Toyota</option>
                          <option value="Volkswagen">Volkswagen</option>
                          <option value="Volvo">Volvo</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="model">
                          {t('model')} *
                        </label>
                        <Input 
                          type="text" 
                          id="model" 
                          name="model" 
                          placeholder={isRTL ? 'مثال: كورولا، 3 سيريز' : 'e.g. Corolla, 3 Series'}
                          value={formData.model} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="year">
                          {t('year')} *
                        </label>
                        <Input 
                          type="number" 
                          id="year" 
                          name="year" 
                          placeholder={isRTL ? 'مثال: 2018' : 'e.g. 2018'}
                          min="1900" 
                          max={new Date().getFullYear()} 
                          value={formData.year} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="mileage">
                          {t('mileage')} *
                        </label>
                        <Input 
                          type="number" 
                          id="mileage" 
                          name="mileage" 
                          placeholder={isRTL ? 'مثال: 45000' : 'e.g. 45000'}
                          value={formData.mileage} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="condition">
                        {t('condition')} *
                      </label>
                      <select 
                        name="condition" 
                        id="condition" 
                        value={formData.condition} 
                        onChange={handleChange} 
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                      >
                        <option value="">{isRTL ? 'اختر الحالة' : 'Select Condition'}</option>
                        <option value="excellent">{t('excellent')}</option>
                        <option value="very-good">{t('veryGood')}</option>
                        <option value="good">{t('good')}</option>
                        <option value="fair">{t('fair')}</option>
                        <option value="poor">{t('poor')}</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="description">
                        {t('description')} *
                      </label>
                      <Textarea 
                        id="description" 
                        name="description" 
                        placeholder={isRTL ? 'قدم تفاصيل عن سيارتك، بما في ذلك الميزات والتاريخ وأي معلومات جديرة بالملاحظة.' : 'Provide details about your vehicle, including features, history, and any noteworthy information.'}
                        rows={5}
                        value={formData.description} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-4">
                        {t('uploadPhotos')} *
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <input
                          type="file"
                          multiple
                          onChange={handleFileChange}
                          className="hidden"
                          id="car-images"
                          accept="image/*"
                        />
                        <label htmlFor="car-images" className="cursor-pointer">
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <p className="mt-2 text-sm text-gray-600">
                            {t('dragAndDrop')}
                          </p>
                          <p className="mt-1 text-xs text-gray-500">
                            {t('includeExterior')}
                          </p>
                          <Button type="button" variant="outline" className="mt-4">
                            {t('selectFiles')}
                          </Button>
                        </label>
                      </div>
                      
                      {images.length > 0 && (
                        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {images.map((image, index) => (
                            <div key={index} className="relative group">
                              <img 
                                src={image.preview} 
                                alt={`Car preview ${index + 1}`} 
                                className="h-24 w-full object-cover rounded"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                    <Button type="button" onClick={nextStep} className="flex items-center">
                      {t('nextStep')}
                      <ArrowRight className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 2: Listing Type */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">{t('chooseListingType')}</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div 
                        className={`border rounded-lg p-6 cursor-pointer transition ${formData.saleType === 'auction' ? 'border-auction-primary bg-auction-light/20' : 'border-gray-200 hover:border-gray-300'}`}
                        onClick={() => handleSaleTypeChange('auction')}
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold">{t('auction')}</h3>
                          <RadioGroup value={formData.saleType} onValueChange={handleSaleTypeChange} className="mt-1">
                            <RadioGroupItem value="auction" id="auction" />
                          </RadioGroup>
                        </div>
                        <p className="mt-2 text-gray-600 text-sm">
                          {t('listYourCar')}
                        </p>
                        <ul className="mt-4 space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                            <span className="text-sm">{t('potentialForHigher')}</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                            <span className="text-sm">{t('widerPool')}</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                            <span className="text-sm">{t('professionalValuation')}</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div 
                        className={`border rounded-lg p-6 cursor-pointer transition ${formData.saleType === 'fixed' ? 'border-auction-primary bg-auction-light/20' : 'border-gray-200 hover:border-gray-300'}`}
                        onClick={() => handleSaleTypeChange('fixed')}
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold">{t('fixedPrice')}</h3>
                          <RadioGroup value={formData.saleType} onValueChange={handleSaleTypeChange} className="mt-1">
                            <RadioGroupItem value="fixed" id="fixed" />
                          </RadioGroup>
                        </div>
                        <p className="mt-2 text-gray-600 text-sm">
                          {t('setAFixedPrice')}
                        </p>
                        <ul className="mt-4 space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                            <span className="text-sm">{t('fasterSelling')}</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                            <span className="text-sm">{t('youSetExactPrice')}</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                            <span className="text-sm">{t('greaterPriceCertainty')}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {formData.saleType === 'fixed' && (
                      <div className="mt-6">
                        <label className="block text-sm font-medium mb-1" htmlFor="price">
                          {t('setYourPrice')} *
                        </label>
                        <Input 
                          type="number" 
                          id="price" 
                          name="price" 
                          placeholder={isRTL ? 'مثال: 250000' : 'e.g. 250000'}
                          value={formData.price} 
                          onChange={handleChange} 
                          required 
                        />
                        <p className="mt-2 text-sm text-gray-500 flex items-center">
                          <Info className="h-4 w-4 mr-1" />
                          {isRTL ? 'سنساعدك في التحقق مما إذا كان سعرك تنافسيًا في السوق الحالي.' : "We'll help you verify if your price is competitive in the current market."}
                        </p>
                      </div>
                    )}
                    
                    {formData.saleType === 'auction' && (
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="text-sm font-medium text-blue-800">{isRTL ? 'معلومات المزاد' : 'Auction Information'}</h4>
                        <p className="mt-1 text-sm text-blue-600">
                          {t('auctionInfo')}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <Button type="button" variant="outline" onClick={prevStep}>
                      {t('back')}
                    </Button>
                    <Button type="button" onClick={nextStep} className="flex items-center">
                      {t('nextStep')}
                      <ArrowRight className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Contact Information */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">{t('contactInformation')}</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="name">
                        {t('fullName')} *
                      </label>
                      <Input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder={isRTL ? 'أدخل اسمك الكامل' : 'Enter your full name'} 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="email">
                        {t('emailAddress')} *
                      </label>
                      <Input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder={isRTL ? 'بريدك.الالكتروني@مثال.كوم' : 'your.email@example.com'}
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="phone">
                        {t('phoneNumber')} *
                      </label>
                      <Input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder={isRTL ? 'مثال: +46 70 123 4567' : 'e.g. +46 70 123 4567'}
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div className="flex items-start mt-4">
                      <Checkbox 
                        id="terms" 
                        checked={termsAgreed}
                        onCheckedChange={(checked) => setTermsAgreed(checked === true)}
                        required 
                        className="mt-1" 
                      />
                      <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                        {t('agreeToTerms').split(/( and )/).map((part, i) => 
                          part === " and " ? 
                            <span key={i}> {isRTL ? 'و' : 'and'} </span> : 
                            part
                        )}
                        <a href="/terms" className="text-auction-primary hover:underline mx-1">
                          {t('termsAndConditions')}
                        </a>
                        <a href="/privacy" className="text-auction-primary hover:underline mx-1">
                          {t('privacyPolicy')}
                        </a>
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <Checkbox 
                        id="marketing" 
                        checked={marketingOptIn}
                        onCheckedChange={(checked) => setMarketingOptIn(checked === true)}
                        className="mt-1" 
                      />
                      <label htmlFor="marketing" className="ml-2 text-sm text-gray-600">
                        {t('receiveCommunications')}
                      </label>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <Button type="button" variant="outline" onClick={prevStep}>
                      {t('back')}
                    </Button>
                    <Button type="button" onClick={nextStep} className="flex items-center">
                      {t('reviewListing')}
                      <ArrowRight className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 4: Review */}
              {step === 4 && (
                <div>
                  <div className="text-center mb-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold">{t('almostDone')}</h2>
                    <p className="text-gray-600 mt-2">
                      {t('reviewDetails')}
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <h3 className="font-medium text-gray-700 mb-2">{t('vehicleInfo')}</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">{t('make')}</p>
                          <p className="font-medium">{formData.make}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{t('model')}</p>
                          <p className="font-medium">{formData.model}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{t('year')}</p>
                          <p className="font-medium">{formData.year}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{t('mileage')}</p>
                          <p className="font-medium">{formData.mileage} km</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{t('condition')}</p>
                          <p className="font-medium capitalize">{t(formData.condition as string)}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-b pb-4">
                      <h3 className="font-medium text-gray-700 mb-2">{t('listingDetails')}</h3>
                      <div>
                        <p className="text-sm text-gray-500">{t('listingType')}</p>
                        <p className="font-medium capitalize">{formData.saleType === 'auction' ? t('auction') : t('fixedPrice')}</p>
                        {formData.saleType === 'fixed' && (
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">{t('price')}</p>
                            <p className="font-medium">{Number(formData.price).toLocaleString()} SEK</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="border-b pb-4">
                      <h3 className="font-medium text-gray-700 mb-2">{t('contactInfo')}</h3>
                      <div>
                        <p className="text-sm text-gray-500">{t('name')}</p>
                        <p className="font-medium">{formData.name}</p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{t('email')}</p>
                        <p className="font-medium">{formData.email}</p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{t('phone')}</p>
                        <p className="font-medium">{formData.phone}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">{t('description')}</h3>
                      <p className="text-sm">{formData.description}</p>
                    </div>
                    
                    {images.length > 0 && (
                      <div>
                        <h3 className="font-medium text-gray-700 mb-2">{t('images')}</h3>
                        <div className="grid grid-cols-4 gap-2">
                          {images.map((image, index) => (
                            <img 
                              key={index}
                              src={image.preview} 
                              alt={`Car preview ${index + 1}`} 
                              className="h-20 w-full object-cover rounded"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <Button type="button" variant="outline" onClick={prevStep} disabled={isSubmitting}>
                      {t('back')}
                    </Button>
                    <Button 
                      type="button" 
                      className="bg-auction-accent hover:bg-auction-accent/90" 
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t('submitting') : t('submitListing')}
                    </Button>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-sm text-yellow-800">
                      {t('afterSubmission')}
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
