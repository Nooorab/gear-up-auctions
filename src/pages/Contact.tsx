
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLanguage } from '../context/LanguageContext';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language, t } = useLanguage();

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // In production, you would store this in Supabase or send via a Supabase Edge Function
      // For now, we'll just simulate a successful submission
      console.log('Contact form submission:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast.success(language === 'ar' ? "شكرًا لك! تم إرسال رسالتك بنجاح." : "Thank you! Your message has been sent successfully.");
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error(language === 'ar' ? "حدثت مشكلة في إرسال رسالتك. يرجى المحاولة مرة أخرى." : "There was a problem sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col bg-background ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-auction-primary text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('contactUsHeading')}</h1>
            <p className="text-lg max-w-2xl mx-auto">
              {t('contactUsDesc')}
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
                <h3 className="text-lg font-semibold mb-2">{t('visitUs')}</h3>
                <address className="not-italic text-auction-muted">
                  <p>{t('visitUsAddress1')}</p>
                  <p>{t('visitUsAddress2')}</p>
                </address>
              </div>
              
              <div className="text-center p-6 bg-auction-light rounded-lg">
                <div className="mx-auto bg-auction-primary/10 rounded-full p-4 inline-flex mb-4">
                  <Phone className="h-8 w-8 text-auction-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('callUs')}</h3>
                <p className="text-auction-muted">{t('customerSupport')}</p>
                <p className="font-medium">{t('supportPhone')}</p>
                <p className="text-auction-muted mt-2">{t('salesInquiries')}</p>
                <p className="font-medium">{t('salesPhone')}</p>
              </div>
              
              <div className="text-center p-6 bg-auction-light rounded-lg">
                <div className="mx-auto bg-auction-primary/10 rounded-full p-4 inline-flex mb-4">
                  <Mail className="h-8 w-8 text-auction-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('emailUs')}</h3>
                <p className="text-auction-muted">{t('generalInquiries')}</p>
                <p className="font-medium">{t('generalEmail')}</p>
                <p className="text-auction-muted mt-2">{t('supportLabel')}</p>
                <p className="font-medium">{t('supportEmail')}</p>
              </div>
              
              <div className="text-center p-6 bg-auction-light rounded-lg">
                <div className="mx-auto bg-auction-primary/10 rounded-full p-4 inline-flex mb-4">
                  <Clock className="h-8 w-8 text-auction-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('openingHours')}</h3>
                <p className="text-auction-muted">{t('monToFri')}</p>
                <p className="font-medium">{t('monToFriHours')}</p>
                <p className="text-auction-muted mt-2">{t('saturday')}</p>
                <p className="font-medium">{t('saturdayHours')}</p>
                <p className="text-auction-muted mt-2">{t('sunday')}</p>
                <p className="font-medium">{t('sundayClosed')}</p>
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
                <h2 className="text-2xl font-bold mb-6">{t('sendMessage')}</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('fullName')} *</FormLabel>
                            <FormControl>
                              <Input placeholder={t('enterFullName')} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('emailAddress')} *</FormLabel>
                            <FormControl>
                              <Input placeholder={t('yourEmail')} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('phoneNumber')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('phoneExample')} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('subject')} *</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={t('selectSubject')} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="support">Customer Support</SelectItem>
                              <SelectItem value="buying">Buying a Car</SelectItem>
                              <SelectItem value="selling">Selling a Car</SelectItem>
                              <SelectItem value="inspection">Vehicle Inspection</SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('message')} *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={t('howCanWeHelp')} 
                              rows={5}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      <Send className={`${language === 'ar' ? 'ml-2' : 'mr-2'} h-4 w-4`} />
                      {isSubmitting ? (language === 'ar' ? "جاري الإرسال..." : "Sending...") : t('sendMessageBtn')}
                    </Button>
                  </form>
                </Form>
              </div>
              
              {/* Map Section */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">{t('findUs')}</h2>
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
                  {language === 'ar' ? "الحصول على الاتجاهات" : "Get Directions"}
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">{language === 'ar' ? "الأسئلة المتكررة" : "Frequently Asked Questions"}</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="p-6 bg-auction-light rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{language === 'ar' ? "ما هي ساعات العمل الخاصة بكم؟" : "What are your business hours?"}</h3>
                <p>
                  {language === 'ar' 
                    ? "فريق خدمة العملاء لدينا متاح من الاثنين إلى الجمعة من الساعة 9:00 صباحًا حتى 6:00 مساءً والسبت من الساعة 10:00 صباحًا حتى 4:00 مساءً. منصتنا عبر الإنترنت متاحة على مدار الساعة طوال أيام الأسبوع للتصفح والمزايدة."
                    : "Our customer service team is available Monday to Friday from 9:00 AM to 6:00 PM and Saturday from 10:00 AM to 4:00 PM. Our online platform is accessible 24/7 for browsing and bidding."}
                </p>
              </div>
              
              <div className="p-6 bg-auction-light rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{language === 'ar' ? "كم من الوقت يستغرق الحصول على رد؟" : "How long does it take to get a response?"}</h3>
                <p>
                  {language === 'ar' 
                    ? "نهدف إلى الرد على جميع استفسارات البريد الإلكتروني في غضون 24 ساعة خلال أيام العمل. للأمور العاجلة، نوصي بالاتصال بخط خدمة العملاء للحصول على مساعدة فورية."
                    : "We aim to respond to all email inquiries within 24 hours during business days. For urgent matters, we recommend calling our customer service line for immediate assistance."}
                </p>
              </div>
              
              <div className="p-6 bg-auction-light rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{language === 'ar' ? "هل لديكم مكاتب في مدن أخرى؟" : "Do you have offices in other cities?"}</h3>
                <p>
                  {language === 'ar' 
                    ? "حاليًا، مكتبنا الرئيسي في ستوكهولم، لكن لدينا مراكز فحص المركبات ونقاط تجميع في غوتنبرغ، مالمو، وأوبسالا. نخطط للتوسع إلى المزيد من المدن قريبًا."
                    : "Currently, our main office is in Stockholm, but we have vehicle inspection centers and collection points in Gothenburg, Malmö, and Uppsala. We're planning to expand to more cities soon."}
                </p>
              </div>
              
              <div className="text-center mt-10">
                <Button asChild>
                  <a href="/faq">{language === 'ar' ? "عرض جميع الأسئلة الشائعة" : "View All FAQs"}</a>
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
