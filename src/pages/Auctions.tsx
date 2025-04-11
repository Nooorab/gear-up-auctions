
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CarCard from '@/components/CarCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { useLanguage } from '../context/LanguageContext';

const Auctions = () => {
  const { t, language } = useLanguage();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [auctions, setAuctions] = useState<any[]>([]);
  const [sortOrder, setSortOrder] = useState('time-asc');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAuctions = async () => {
      setIsLoading(true);
      try {
        const { data: listings, error } = await supabase
          .from('car_listings')
          .select(`
            *,
            car:car_id(*)
          `)
          .eq('listing_type', 'auction')
          .eq('is_sold', false);
        
        if (error) throw error;
        
        // Format data for display
        const transformedListings = listings.map(listing => {
          // Calculate time left (simple version - would need more complex logic in real app)
          const endTime = new Date(listing.auction_end_time || '');
          const timeLeftMs = endTime.getTime() - Date.now();
          const daysLeft = Math.floor(timeLeftMs / (1000 * 60 * 60 * 24));
          const hoursLeft = Math.floor((timeLeftMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const timeLeft = timeLeftMs > 0 ? `${daysLeft}d ${hoursLeft}h` : 'Ended';
          
          return {
            id: listing.id,
            title: `${listing.car.make} ${listing.car.model} ${listing.car.year}`,
            imageUrl: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
            price: listing.start_price,
            currentBid: listing.current_bid || listing.start_price,
            year: listing.car.year,
            mileage: listing.car.mileage,
            location: 'Damascus',
            timeLeft: timeLeft,
            isAuction: true,
          };
        });
        
        setAuctions(transformedListings);
        
      } catch (error) {
        console.error('Error fetching auctions:', error);
        toast.error('Failed to load auctions');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchAuctions();
  }, []);
  
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = auctions.filter(auction => 
      auction.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      auction.location?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setAuctions(filtered);
  };
  
  const handleSortChange = (value: string) => {
    setSortOrder(value);
    
    let sortedAuctions = [...auctions];
    
    switch(value) {
      case 'bid-low':
        sortedAuctions.sort((a, b) => a.currentBid - b.currentBid);
        break;
      case 'bid-high':
        sortedAuctions.sort((a, b) => b.currentBid - a.currentBid);
        break;
      case 'time-asc':
        sortedAuctions.sort((a, b) => {
          if (a.timeLeft === 'Ended') return 1;
          if (b.timeLeft === 'Ended') return -1;
          
          const aDays = parseInt(a.timeLeft.split('d')[0]);
          const bDays = parseInt(b.timeLeft.split('d')[0]);
          return aDays - bDays;
        });
        break;
      case 'time-desc':
        sortedAuctions.sort((a, b) => {
          if (a.timeLeft === 'Ended') return 1;
          if (b.timeLeft === 'Ended') return -1;
          
          const aDays = parseInt(a.timeLeft.split('d')[0]);
          const bDays = parseInt(b.timeLeft.split('d')[0]);
          return bDays - aDays;
        });
        break;
    }
    
    setAuctions(sortedAuctions);
  };

  return (
    <div className={`min-h-screen flex flex-col bg-background ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-auction-primary text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('auctions')}</h1>
            <p className="text-lg max-w-2xl">
              {language === 'ar' 
                ? 'اكتشف مجموعتنا من السيارات المزاد عليها. قدم عرضك واحصل على صفقة رائعة اليوم.'
                : 'Discover our collection of cars up for auction. Place your bid and get a great deal today.'}
            </p>
          </div>
        </div>
        
        <div className="bg-white border-b py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <form onSubmit={handleSearch} className="flex-grow">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder={language === 'ar' ? 'ابحث حسب الماركة أو الموديل أو الموقع...' : 'Search by make, model, or location...'}
                    className="pl-10 pr-4 py-2 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className={`absolute ${language === 'ar' ? 'right-3' : 'left-3'} top-2.5 h-5 w-5 text-gray-400`} />
                </div>
              </form>
              
              <Button 
                onClick={toggleFilter}
                variant="outline" 
                className="flex items-center gap-2"
              >
                <SlidersHorizontal size={16} />
                {language === 'ar' ? 'الفلاتر' : 'Filters'}
                <ChevronDown size={16} className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </Button>
            </div>
            
            {isFilterOpen && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 border-t">
                <div>
                  <h3 className="font-medium mb-2">{language === 'ar' ? 'الماركة' : 'Make'}</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={language === 'ar' ? 'جميع الماركات' : 'All Makes'} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ford">Ford</SelectItem>
                      <SelectItem value="honda">Honda</SelectItem>
                      <SelectItem value="hyundai">Hyundai</SelectItem>
                      <SelectItem value="kia">Kia</SelectItem>
                      <SelectItem value="mazda">Mazda</SelectItem>
                      <SelectItem value="nissan">Nissan</SelectItem>
                      <SelectItem value="toyota">Toyota</SelectItem>
                      <SelectItem value="volkswagen">Volkswagen</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">{language === 'ar' ? 'السنة' : 'Year'}</h3>
                  <div className="flex space-x-4">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={language === 'ar' ? 'من' : 'From'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2015">2015</SelectItem>
                        <SelectItem value="2016">2016</SelectItem>
                        <SelectItem value="2017">2017</SelectItem>
                        <SelectItem value="2018">2018</SelectItem>
                        <SelectItem value="2019">2019</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={language === 'ar' ? 'إلى' : 'To'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2025">2025</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">{language === 'ar' ? 'نطاق السعر' : 'Price Range'}</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={[15000, 30000]}
                      min={0}
                      max={50000}
                      step={1000}
                      value={priceRange}
                      onValueChange={(value) => setPriceRange(value as [number, number])}
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>$0</span>
                      <span>$50,000</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">{language === 'ar' ? 'الميزات' : 'Features'}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="bluetooth" />
                      <label htmlFor="bluetooth" className="text-sm">{language === 'ar' ? 'بلوتوث' : 'Bluetooth'}</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="camera" />
                      <label htmlFor="camera" className="text-sm">{language === 'ar' ? 'كاميرا خلفية' : 'Backup Camera'}</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cruise" />
                      <label htmlFor="cruise" className="text-sm">{language === 'ar' ? 'مثبت السرعة' : 'Cruise Control'}</label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-auction-light py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">{language === 'ar' ? 'المزادات النشطة' : 'Active Auctions'}</h2>
                <p className="text-auction-muted mt-1">
                  {isLoading ? 
                    (language === 'ar' ? 'جاري تحميل المزادات...' : "Loading auctions...") : 
                    (language === 'ar' ? `عرض ${auctions.length} سيارة` : `Showing ${auctions.length} vehicles`)}
                </p>
              </div>
              <div className="w-48">
                <Select onValueChange={handleSortChange} defaultValue={sortOrder}>
                  <SelectTrigger>
                    <SelectValue placeholder={language === 'ar' ? 'ترتيب حسب' : 'Sort by'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bid-low">{language === 'ar' ? 'المزايدة: من الأقل إلى الأعلى' : 'Bid: Low to High'}</SelectItem>
                    <SelectItem value="bid-high">{language === 'ar' ? 'المزايدة: من الأعلى إلى الأقل' : 'Bid: High to Low'}</SelectItem>
                    <SelectItem value="time-asc">{language === 'ar' ? 'الوقت المتبقي: الأقل' : 'Time Left: Least'}</SelectItem>
                    <SelectItem value="time-desc">{language === 'ar' ? 'الوقت المتبقي: الأكثر' : 'Time Left: Most'}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <p>{language === 'ar' ? 'جاري تحميل المزادات...' : 'Loading auctions...'}</p>
              </div>
            ) : auctions.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {auctions.map(auction => (
                  <CarCard key={auction.id} {...auction} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-auction-muted">{language === 'ar' ? 'لم يتم العثور على سيارات.' : 'No cars found.'}</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm('');
                  }}
                >
                  {language === 'ar' ? 'إعادة ضبط الفلاتر' : 'Reset Filters'}
                </Button>
              </div>
            )}
            
            {auctions.length > 0 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>{language === 'ar' ? 'السابق' : 'Previous'}</Button>
                  <Button variant="default" size="sm">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">{language === 'ar' ? 'التالي' : 'Next'}</Button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Auctions;
