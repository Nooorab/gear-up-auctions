import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CarCard from '@/components/CarCard';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Search, ChevronDown, SlidersHorizontal } from 'lucide-react';

// Mock data for auctions
const auctionCars = [
  {
    id: 1,
    title: 'Mercedes-Benz E-Class 2020',
    imageUrl: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 45000,
    currentBid: 38500,
    year: 2020,
    mileage: 45000,
    location: 'Stockholm',
    timeLeft: '2d 5h',
    isAuction: true,
  },
  {
    id: 2,
    title: 'BMW 3 Series 2019',
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 38000,
    currentBid: 32000,
    year: 2019,
    mileage: 60000,
    location: 'Gothenburg',
    timeLeft: '1d 12h',
    isAuction: true,
  },
  {
    id: 3,
    title: 'Audi Q5 2021',
    imageUrl: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 52000,
    currentBid: 48000,
    year: 2021,
    mileage: 30000,
    location: 'Malmö',
    timeLeft: '3d 8h',
    isAuction: true,
  },
  {
    id: 4,
    title: 'Volvo XC60 2018',
    imageUrl: 'https://images.unsplash.com/photo-1551737823-dfc8495904b4?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 35000,
    currentBid: 29500,
    year: 2018,
    mileage: 75000,
    location: 'Uppsala',
    timeLeft: '6h 45m',
    isAuction: true,
  },
  {
    id: 9,
    title: 'Volvo XC90 2020',
    imageUrl: 'https://images.unsplash.com/photo-1538561018532-a55adc476aca?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 55000,
    currentBid: 47000,
    year: 2020,
    mileage: 40000,
    location: 'Stockholm',
    timeLeft: '4d 2h',
    isAuction: true,
  },
  {
    id: 10,
    title: 'Audi A6 2019',
    imageUrl: 'https://images.unsplash.com/photo-1623775027824-fce2563513e5?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 42000,
    currentBid: 36800,
    year: 2019,
    mileage: 55000,
    location: 'Gothenburg',
    timeLeft: '1d 18h',
    isAuction: true,
  },
  {
    id: 11,
    title: 'BMW X5 2021',
    imageUrl: 'https://images.unsplash.com/photo-1655919460455-5e34e55bb351?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 61000,
    currentBid: 55500,
    year: 2021,
    mileage: 25000,
    location: 'Malmö',
    timeLeft: '5d 3h',
    isAuction: true,
  },
  {
    id: 12,
    title: 'Mercedes-Benz GLC 2020',
    imageUrl: 'https://images.unsplash.com/photo-1554823276-9d693eda1d11?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 49000,
    currentBid: 43200,
    year: 2020,
    mileage: 38000,
    location: 'Linköping',
    timeLeft: '2d 9h',
    isAuction: true,
  },
];

const Auctions = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCars, setFilteredCars] = useState(auctionCars);
  const [sortOrder, setSortOrder] = useState('ending-soon');
  
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = auctionCars.filter(car => 
      car.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  const handleSortChange = (value: string) => {
    setSortOrder(value);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-auction-primary text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Live Auctions</h1>
            <p className="text-lg max-w-2xl">
              Browse our current live car auctions. Place your bids and get the chance to win your dream car at a great price.
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
                    <SelectTrigger>
                      <SelectValue placeholder="All Makes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="audi">Audi</SelectItem>
                      <SelectItem value="bmw">BMW</SelectItem>
                      <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                      <SelectItem value="volvo">Volvo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Year</h3>
                  <div className="flex space-x-4">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="From" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2015">2015</SelectItem>
                        <SelectItem value="2016">2016</SelectItem>
                        <SelectItem value="2017">2017</SelectItem>
                        <SelectItem value="2018">2018</SelectItem>
                        <SelectItem value="2019">2019</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="To" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <div className="px-2">
                    <Slider defaultValue={[20000, 50000]} min={0} max={100000} step={1000} />
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>$0</span>
                      <span>$100,000</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Features</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="leather" />
                      <label htmlFor="leather" className="text-sm">Leather Seats</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="navigation" />
                      <label htmlFor="navigation" className="text-sm">Navigation System</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="sunroof" />
                      <label htmlFor="sunroof" className="text-sm">Sunroof</label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Auction Listings */}
        <div className="bg-auction-light py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Current Auctions</h2>
                <p className="text-auction-muted mt-1">Showing {filteredCars.length} vehicles</p>
              </div>
              <div className="w-48">
                <Select onValueChange={handleSortChange} defaultValue={sortOrder}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ending-soon">Ending Soon</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
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

export default Auctions;
