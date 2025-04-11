
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Users, TrendingUp, Building, Award, Handshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { language, t } = useLanguage();

  return (
    <div className={`min-h-screen flex flex-col bg-background ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-auction-primary text-white py-16 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3')" }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">{t('aboutTitle')}</h1>
              <p className="text-xl mb-8">
                {t('aboutDescription')}
              </p>
              <Button size="lg" className="bg-auction-accent hover:bg-auction-accent/90">
                <a href="/contact">{t('getInTouch')}</a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-auction-primary">{t('ourStoryTitle')}</h2>
              <p className="text-lg mb-6">
                {t('ourStoryP1')}
              </p>
              <p className="text-lg mb-6">
                {t('ourStoryP2')}
              </p>
              <p className="text-lg">
                {t('ourStoryP3')}
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="py-16 bg-auction-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('ourValues')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-auction-primary/10 rounded-full p-4 inline-flex mb-4">
                  <ShieldCheck className="h-8 w-8 text-auction-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('transparency')}</h3>
                <p className="text-auction-muted">
                  {t('transparencyDesc')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-auction-primary/10 rounded-full p-4 inline-flex mb-4">
                  <Users className="h-8 w-8 text-auction-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('customerCentric')}</h3>
                <p className="text-auction-muted">
                  {t('customerCentricDesc')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-auction-primary/10 rounded-full p-4 inline-flex mb-4">
                  <TrendingUp className="h-8 w-8 text-auction-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('innovation')}</h3>
                <p className="text-auction-muted">
                  {t('innovationDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('ourLeadershipTeam')}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/76.jpg" 
                  alt="CEO" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">Ahmad Hassan</h3>
                <p className="text-auction-accent mb-2">Chief Executive Officer</p>
                <p className="text-auction-muted px-4">
                  With over 15 years in the automotive industry, Ahmad brings valuable experience and a passion for innovation.
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/65.jpg" 
                  alt="COO" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">Sofia Karlsson</h3>
                <p className="text-auction-accent mb-2">Chief Operations Officer</p>
                <p className="text-auction-muted px-4">
                  Sofia oversees our daily operations and ensures every customer interaction exceeds expectations.
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/36.jpg" 
                  alt="CTO" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">Johan Lindberg</h3>
                <p className="text-auction-accent mb-2">Chief Technology Officer</p>
                <p className="text-auction-muted px-4">
                  Johan leads our technology team, developing the platform that makes our car auctions seamless and secure.
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/33.jpg" 
                  alt="CMO" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">Emma Nilsson</h3>
                <p className="text-auction-accent mb-2">Chief Marketing Officer</p>
                <p className="text-auction-muted px-4">
                  Emma drives our marketing strategy, connecting car sellers with eager buyers across the country.
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/22.jpg" 
                  alt="Head of Inspections" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">Lars Andersson</h3>
                <p className="text-auction-accent mb-2">Head of Vehicle Inspections</p>
                <p className="text-auction-muted px-4">
                  With decades of experience as a master mechanic, Lars leads our inspection team, ensuring quality standards.
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/26.jpg" 
                  alt="Customer Success" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">Astrid Berg</h3>
                <p className="text-auction-accent mb-2">Head of Customer Success</p>
                <p className="text-auction-muted px-4">
                  Astrid ensures our customers receive exceptional support throughout their car buying or selling journey.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Achievements */}
        <div className="py-16 bg-gradient-to-br from-auction-primary to-auction-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">{t('achievements')}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <p className="text-xl">{t('vehiclesSold')}</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <p className="text-xl">{t('customerSatisfaction')}</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-2">30+</div>
                <p className="text-xl">{t('citiesCovered')}</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-2">15M+</div>
                <p className="text-xl">{t('transactionValue')}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partners */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('ourPartners')}</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              <div className="flex justify-center">
                <Building className="h-16 w-16 text-gray-400" />
              </div>
              <div className="flex justify-center">
                <Building className="h-16 w-16 text-gray-400" />
              </div>
              <div className="flex justify-center">
                <Building className="h-16 w-16 text-gray-400" />
              </div>
              <div className="flex justify-center">
                <Building className="h-16 w-16 text-gray-400" />
              </div>
              <div className="flex justify-center">
                <Building className="h-16 w-16 text-gray-400" />
              </div>
              <div className="flex justify-center">
                <Building className="h-16 w-16 text-gray-400" />
              </div>
            </div>
            
            <div className="max-w-2xl mx-auto mt-12 text-center">
              <p className="text-lg text-auction-muted">
                {t('partnersDesc')}
              </p>
            </div>
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="py-16 bg-auction-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <Award className="h-12 w-12 text-auction-accent" />
                </div>
                <p className="text-xl italic mb-6">
                  "Abo Hasan Car has revolutionized the used car market in Syria, bringing much-needed transparency 
                  and reliability to an industry that has long suffered from consumer mistrust. Their innovative approach 
                  is setting new standards for the automotive marketplace."
                </p>
                <div>
                  <h3 className="font-semibold text-lg">Swedish Automotive Association</h3>
                  <p className="text-auction-muted">{t('industryRecognition')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-16 bg-auction-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">{t('joinCommunity')}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t('joinCommunityDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-auction-accent hover:bg-gray-100">
                <Handshake className={`${language === 'ar' ? 'ml-2' : 'mr-2'} h-5 w-5`} />
                <a href="/contact">{t('contactUs')}</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="/careers">{t('joinTeam')}</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
