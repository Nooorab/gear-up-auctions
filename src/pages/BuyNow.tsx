
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CarCard from '@/components/CarCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

// Mock data for buy now cars
const buyNowCars = [
  {
    id: 5,
    title: 'Toyota Corolla 2019',
    imageUrl: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 19500,
    year: 2019,
    mileage: 65000,
    location: 'Stockholm',
    isAuction: false,
  },
  {
    id: 6,
    title: 'Volkswagen Golf 2020',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 24000,
    year: 2020,
    mileage: 50000,
    location: 'Gothenburg',
    isAuction: false,
  },
  {
    id: 7,
    title: 'Nissan Qashqai 2018',
    imageUrl: 'https://images.unsplash.com/photo-1612911912304-161446194739?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 21000,
    year: 2018,
    mileage: 80000,
    location: 'Malmö',
    isAuction: false,
  },
  {
    id: 8,
    title: 'Kia Sportage 2020',
    imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 26500,
    year: 2020,
    mileage: 45000,
    location: 'Linköping',
    isAuction: false,
  },
  {
    id: 13,
    title: 'Honda CR-V 2019',
    imageUrl: 'https://images.unsplash.com/photo-1606152421802-dbf926e76d32?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 23800,
    year: 2019,
    mileage: 58000,
    location: 'Stockholm',
    isAuction: false,
  },
  {
    id: 14,
    title: 'Mazda CX-5 2020',
    imageUrl: 'https://images.unsplash.com/photo-1609058262232-58b3f9f2b3fb?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 27500,
    year: 2020,
    mileage: 42000,
    location: 'Gothenburg',
    isAuction: false,
  },
  {
    id: 15,
    title: 'Ford Focus 2018',
    imageUrl: 'https://images.unsplash.com/photo-1510227089859-752cea7a8f5a?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 16500,
    year: 2018,
    mileage: 70000,
    location: 'Uppsala',
    isAuction: false,
  },
  {
    id: 16,
    title: 'Hyundai Tucson 2019',
    imageUrl: 'https://images.unsplash.com/photo-1604478579643-d3b6f77c6054?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 22000,
    year: 2019,
    mileage: 62000,
    location: 'Malmö',
    isAuction: false,
  },
];

const BuyNow = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCars, setFilteredCars] = useState(buyNowCars);
  
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = buyNowCars.filter(car => 
      car.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-auction-accent text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Buy Now Cars</h1>
            <p className="text-lg max-w-2xl">
              Browse our selection of quality used cars available for immediate purchase. 
              No bidding required - find your perfect car and drive it home today.
            </p>
          </div>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-white border-b py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <form onSubmit={handleSearch} className="flex-grow">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search by make, model, or location..."
                    className="pl-10 pr-4 py-2 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </form>
              
              <Button 
                onClick={toggleFilter}
                variant="outline" 
                className="flex items-center gap-2"
              >
                <SlidersHorizontal size={16} />
                Filters
                <ChevronDown size={16} className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </Button>
            </div>
            
            {/* Filter Section */}
            {isFilterOpen && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 border-t">
                <div>
                  <h3 className="font-medium mb-2">Make</h3>
                  <Select>
                    <option value="">All Makes</option>
                    <option value="ford">Ford</option>
                    <option value="honda">Honda</option>
                    <option value="hyundai">Hyundai</option>
                    <option value="kia">Kia</option>
                    <option value="mazda">Mazda</option>
                    <option value="nissan">Nissan</option>
                    <option value="toyota">Toyota</option>
                    <option value="volkswagen">Volkswagen</option>
                  </Select>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Year</h3>
                  <div className="flex space-x-4">
                    <Select>
                      <option value="">From</option>
                      <option value="2015">2015</option>
                      <option value="2016">2016</option>
                      <option value="2017">2017</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                    </Select>
                    <Select>
                      <option value="">To</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <div className="px-2">
                    <Slider defaultValue={[15000, 30000]} min={0} max={50000} step={1000} />
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>$0</span>
                      <span>$50,000</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Features</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="bluetooth" />
                      <label htmlFor="bluetooth" className="text-sm">Bluetooth</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="camera" />
                      <label htmlFor="camera" className="text-sm">Backup Camera</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cruise" />
                      <label htmlFor="cruise" className="text-sm">Cruise Control</label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Car Listings */}
        <div className="bg-auction-light py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Available Cars</h2>
                <p className="text-auction-muted mt-1">Showing {filteredCars.length} vehicles</p>
              </div>
              <Select className="w-48">
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </Select>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCars.map(car => (
                <CarCard key={car.id} {...car} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="default" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </nav>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BuyNow;
