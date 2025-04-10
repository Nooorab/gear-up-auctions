
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Car, 
  Gauge, 
  Info, 
  Shield, 
  CheckCircle, 
  XCircle, 
  User, 
  Heart, 
  Share, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

// Combine auction and buy now cars for the mock database
const allCars = [
  // Featured Auctions
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
    description: 'This Mercedes-Benz E-Class is in excellent condition with low mileage. Features include leather seats, navigation system, panoramic sunroof, and advanced safety features. The car has been well-maintained with full service history.',
    additionalImages: [
      'https://images.unsplash.com/photo-1583356322882-85559b472cb8?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1617469767053-8f5983828909?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1604055986965-c0e4eac32028?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1603384080374-9724025b0d9b?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    ],
    specifications: {
      engine: '2.0L Turbo 4-Cylinder',
      power: '255 hp',
      transmission: '9-speed automatic',
      fuelType: 'Petrol',
      fuelConsumption: '6.5L/100km',
      driveType: 'Rear-wheel drive',
      color: 'Obsidian Black',
      interiorColor: 'Black Leather',
      seatingCapacity: 5,
      doors: 4,
      vin: 'WDDZF4KB1LA123456'
    },
    features: [
      'Leather seats',
      'Navigation system',
      'Panoramic sunroof',
      'Heated seats',
      'Bluetooth connectivity',
      'Backup camera',
      'Adaptive cruise control',
      'Lane keeping assist',
      'Blind spot monitoring',
      'Apple CarPlay & Android Auto'
    ],
    inspectionReport: {
      exterior: 'Excellent',
      interior: 'Excellent',
      mechanical: 'Very Good',
      electrical: 'Excellent',
      tires: 'Good',
      notes: 'Minor scratches on rear bumper. All systems functioning properly.'
    },
    sellerInfo: {
      name: 'Abo Hasan Car',
      type: 'Dealership',
      rating: 4.9,
      reviewCount: 238
    },
    history: {
      owners: 1,
      accidents: 0,
      serviceRecords: 'Full service history available',
      lastInspection: '2023-01-15'
    }
  },
  // Buy Now Cars
  {
    id: 5,
    title: 'Toyota Corolla 2019',
    imageUrl: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 19500,
    year: 2019,
    mileage: 65000,
    location: 'Stockholm',
    isAuction: false,
    description: 'Reliable Toyota Corolla with good fuel economy and lots of practical features. This car has been regularly serviced and maintained to ensure reliable performance. Great city car with easy handling and parking.',
    additionalImages: [
      'https://images.unsplash.com/photo-1622171855639-47c66361047d?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1612911912304-161446194739?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    ],
    specifications: {
      engine: '1.8L 4-Cylinder',
      power: '132 hp',
      transmission: 'CVT automatic',
      fuelType: 'Petrol',
      fuelConsumption: '5.8L/100km',
      driveType: 'Front-wheel drive',
      color: 'Silver',
      interiorColor: 'Black Fabric',
      seatingCapacity: 5,
      doors: 4,
      vin: 'JTDBR9E1K3123456'
    },
    features: [
      'Backup camera',
      'Bluetooth connectivity',
      'Lane departure warning',
      'Adaptive cruise control',
      'Apple CarPlay & Android Auto',
      'USB ports',
      'Automatic climate control'
    ],
    inspectionReport: {
      exterior: 'Good',
      interior: 'Very Good',
      mechanical: 'Excellent',
      electrical: 'Very Good',
      tires: 'Good',
      notes: 'Small dent on front passenger door. Tires have approximately 70% tread remaining.'
    },
    sellerInfo: {
      name: 'Abo Hasan Car',
      type: 'Dealership',
      rating: 4.9,
      reviewCount: 238
    },
    history: {
      owners: 2,
      accidents: 0,
      serviceRecords: 'Complete maintenance history',
      lastInspection: '2023-03-10'
    }
  }
];

const CarDetail = () => {
  const { id } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [bidAmount, setBidAmount] = useState('');
  
  // Find the car based on the ID from the URL
  const car = allCars.find(car => car.id === Number(id));
  
  if (!car) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Car Not Found</h1>
            <p className="mb-6">The car you are looking for does not exist or has been removed.</p>
            <Button asChild>
              <a href="/auctions">Browse Auctions</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const allImages = [car.imageUrl, ...(car.additionalImages || [])];
  
  const nextImage = () => {
    setActiveImageIndex((prevIndex) => 
      prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setActiveImageIndex((prevIndex) => 
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };
  
  const selectImage = (index: number) => {
    setActiveImageIndex(index);
  };

  const handleBidSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to the backend to place a bid
    alert(`Bid of $${bidAmount} placed successfully!`);
    setBidAmount('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pt-6">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-6 text-sm text-auction-muted">
            <a href="/" className="hover:text-auction-primary">Home</a>
            <span className="mx-2">/</span>
            <a href={car.isAuction ? "/auctions" : "/buy"} className="hover:text-auction-primary">
              {car.isAuction ? 'Auctions' : 'Buy Now'}
            </a>
            <span className="mx-2">/</span>
            <span className="text-auction-primary">{car.title}</span>
          </div>
          
          {/* Car Title and Action Buttons */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{car.title}</h1>
              <div className="flex items-center mt-1">
                <MapPin className="h-4 w-4 text-auction-muted mr-1" />
                <span className="text-auction-muted">{car.location}</span>
                {car.isAuction && (
                  <Badge className="ml-4 bg-auction-accent">
                    <Clock className="h-4 w-4 mr-1" />
                    {car.timeLeft} left
                  </Badge>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images */}
            <div className="lg:col-span-2">
              {/* Main Image Gallery */}
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <div className="relative">
                  <img 
                    src={allImages[activeImageIndex]} 
                    alt={car.title}
                    className="w-full h-auto rounded-md object-cover aspect-[16/9]"
                  />
                  
                  {/* Image Navigation Arrows */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-5 gap-2 mt-4">
                  {allImages.map((img, index) => (
                    <div 
                      key={index}
                      onClick={() => selectImage(index)}
                      className={`cursor-pointer rounded-md overflow-hidden ${
                        index === activeImageIndex ? 'ring-2 ring-auction-accent' : ''
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`${car.title} - Image ${index + 1}`}
                        className="w-full h-20 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Car Details Tabs */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <Tabs defaultValue="description">
                  <TabsList className="w-full border-b mb-6">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="specifications">Specifications</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="inspection">Inspection Report</TabsTrigger>
                    <TabsTrigger value="history">Vehicle History</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="description" className="space-y-4">
                    <p>{car.description}</p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-auction-accent mr-2" />
                        <div>
                          <p className="text-sm text-auction-muted">Year</p>
                          <p className="font-medium">{car.year}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Gauge className="h-5 w-5 text-auction-accent mr-2" />
                        <div>
                          <p className="text-sm text-auction-muted">Mileage</p>
                          <p className="font-medium">{car.mileage.toLocaleString()} km</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Car className="h-5 w-5 text-auction-accent mr-2" />
                        <div>
                          <p className="text-sm text-auction-muted">Engine</p>
                          <p className="font-medium">{car.specifications.engine}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="specifications">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                      {Object.entries(car.specifications).map(([key, value]) => (
                        <div key={key} className="border-b pb-2">
                          <p className="text-sm text-auction-muted capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                          <p className="font-medium">{value}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="features">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {car.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="inspection">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="font-semibold mb-2 flex items-center">
                            Exterior
                            <span className={`ml-auto ${
                              car.inspectionReport.exterior === 'Excellent' ? 'text-green-500' : 
                              car.inspectionReport.exterior === 'Very Good' ? 'text-blue-500' : 
                              car.inspectionReport.exterior === 'Good' ? 'text-yellow-500' : 'text-red-500'
                            }`}>
                              {car.inspectionReport.exterior}
                            </span>
                          </h4>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="font-semibold mb-2 flex items-center">
                            Interior
                            <span className={`ml-auto ${
                              car.inspectionReport.interior === 'Excellent' ? 'text-green-500' : 
                              car.inspectionReport.interior === 'Very Good' ? 'text-blue-500' : 
                              car.inspectionReport.interior === 'Good' ? 'text-yellow-500' : 'text-red-500'
                            }`}>
                              {car.inspectionReport.interior}
                            </span>
                          </h4>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="font-semibold mb-2 flex items-center">
                            Mechanical
                            <span className={`ml-auto ${
                              car.inspectionReport.mechanical === 'Excellent' ? 'text-green-500' : 
                              car.inspectionReport.mechanical === 'Very Good' ? 'text-blue-500' : 
                              car.inspectionReport.mechanical === 'Good' ? 'text-yellow-500' : 'text-red-500'
                            }`}>
                              {car.inspectionReport.mechanical}
                            </span>
                          </h4>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="font-semibold mb-2 flex items-center">
                            Electrical
                            <span className={`ml-auto ${
                              car.inspectionReport.electrical === 'Excellent' ? 'text-green-500' : 
                              car.inspectionReport.electrical === 'Very Good' ? 'text-blue-500' : 
                              car.inspectionReport.electrical === 'Good' ? 'text-yellow-500' : 'text-red-500'
                            }`}>
                              {car.inspectionReport.electrical}
                            </span>
                          </h4>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="font-semibold mb-2 flex items-center">
                            Tires
                            <span className={`ml-auto ${
                              car.inspectionReport.tires === 'Excellent' ? 'text-green-500' : 
                              car.inspectionReport.tires === 'Very Good' ? 'text-blue-500' : 
                              car.inspectionReport.tires === 'Good' ? 'text-yellow-500' : 'text-red-500'
                            }`}>
                              {car.inspectionReport.tires}
                            </span>
                          </h4>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-semibold mb-2">Inspector Notes</h4>
                        <p className="text-auction-muted">{car.inspectionReport.notes}</p>
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mt-6">
                        <div className="flex">
                          <Shield className="h-6 w-6 text-blue-500 mr-2 shrink-0" />
                          <div>
                            <h4 className="font-semibold text-blue-700">Professional Inspection</h4>
                            <p className="text-blue-600 text-sm">
                              This vehicle has been thoroughly inspected by our certified mechanics. 
                              The inspection includes over 150 points to ensure the vehicle meets our quality standards.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="history">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="border-b pb-2">
                          <p className="text-sm text-auction-muted">Previous Owners</p>
                          <div className="flex items-center">
                            <p className="font-medium">{car.history.owners}</p>
                            <span className="ml-2 text-sm text-gray-500">
                              {car.history.owners === 1 ? '(Single owner vehicle)' : ''}
                            </span>
                          </div>
                        </div>
                        
                        <div className="border-b pb-2">
                          <p className="text-sm text-auction-muted">Accident History</p>
                          <div className="flex items-center">
                            {car.history.accidents === 0 ? (
                              <>
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <p className="font-medium">No accidents reported</p>
                              </>
                            ) : (
                              <>
                                <XCircle className="h-5 w-5 text-red-500 mr-2" />
                                <p className="font-medium">{car.history.accidents} accidents reported</p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-b pb-2">
                        <p className="text-sm text-auction-muted">Service Records</p>
                        <p className="font-medium">{car.history.serviceRecords}</p>
                      </div>
                      
                      <div className="border-b pb-2">
                        <p className="text-sm text-auction-muted">Last Inspection Date</p>
                        <p className="font-medium">{new Date(car.history.lastInspection).toLocaleDateString()}</p>
                      </div>
                      
                      <div className="mt-6">
                        <Button variant="outline" size="sm">
                          Request Full History Report
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            {/* Right Column - Pricing/Bidding and Seller Info */}
            <div className="space-y-6">
              {/* Price/Bidding Card */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                {car.isAuction ? (
                  <>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-1">Current Bid</h3>
                      <div className="text-3xl font-bold text-auction-primary">
                        ${car.currentBid?.toLocaleString()}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="text-auction-muted">
                          <p>Reserve price: ${car.price?.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center text-auction-accent">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{car.timeLeft} left</span>
                        </div>
                      </div>
                    </div>
                    
                    <form onSubmit={handleBidSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="bidAmount" className="block text-sm font-medium mb-1">
                          Your Bid (USD)
                        </label>
                        <Input
                          id="bidAmount"
                          type="number"
                          min={Math.ceil(car.currentBid || 0) + 100}
                          step="100"
                          required
                          placeholder={`Min bid: $${Math.ceil(car.currentBid || 0) + 100}`}
                          value={bidAmount}
                          onChange={(e) => setBidAmount(e.target.value)}
                        />
                        <p className="text-xs text-auction-muted mt-1">Minimum increment: $100</p>
                      </div>
                      
                      <Button type="submit" className="w-full">Place Bid</Button>
                    </form>
                    
                    <div className="mt-6">
                      <h4 className="text-sm font-medium mb-2">Recent Bids</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="flex items-center">
                            <User className="h-4 w-4 mr-1 text-auction-muted" />
                            j****n
                          </span>
                          <span className="font-medium">${car.currentBid?.toLocaleString()}</span>
                          <span className="text-auction-muted">2h ago</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="flex items-center">
                            <User className="h-4 w-4 mr-1 text-auction-muted" />
                            s****a
                          </span>
                          <span className="font-medium">${(car.currentBid || 0) - 500}</span>
                          <span className="text-auction-muted">5h ago</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="flex items-center">
                            <User className="h-4 w-4 mr-1 text-auction-muted" />
                            m****r
                          </span>
                          <span className="font-medium">${(car.currentBid || 0) - 1000}</span>
                          <span className="text-auction-muted">8h ago</span>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-1">Price</h3>
                      <div className="text-3xl font-bold text-auction-primary">
                        ${car.price.toLocaleString()}
                      </div>
                      <div className="mt-2 text-auction-muted">
                        <p>Fixed price, no bidding required</p>
                      </div>
                    </div>
                    
                    <Button className="w-full mb-4">Buy Now</Button>
                    <Button variant="outline" className="w-full">Contact Seller</Button>
                    
                    <div className="mt-6 bg-green-50 border border-green-200 rounded-md p-4">
                      <div className="flex">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-2 shrink-0" />
                        <div>
                          <h4 className="font-semibold text-green-700">Available for Immediate Purchase</h4>
                          <p className="text-green-600 text-sm">
                            This vehicle can be purchased right away. Schedule a viewing or proceed to purchase online.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              {/* Seller Info */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Seller Information</h3>
                <div className="flex items-start">
                  <div className="bg-auction-primary/10 rounded-full p-3 mr-4">
                    <Building className="h-6 w-6 text-auction-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{car.sellerInfo.name}</h4>
                    <p className="text-auction-muted text-sm">{car.sellerInfo.type}</p>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(car.sellerInfo.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm ml-2">
                        {car.sellerInfo.rating} ({car.sellerInfo.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Seller Profile
                </Button>
              </div>
              
              {/* Additional Resources */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/faq" className="text-auction-primary hover:underline flex items-center">
                      <Info className="h-4 w-4 mr-2" />
                      Auction/Purchase FAQs
                    </a>
                  </li>
                  <li>
                    <a href="/how-it-works" className="text-auction-primary hover:underline flex items-center">
                      <Info className="h-4 w-4 mr-2" />
                      How Our Process Works
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-auction-primary hover:underline flex items-center">
                      <Info className="h-4 w-4 mr-2" />
                      Contact Customer Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Similar Cars */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Similar Vehicles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Would typically show similar cars based on make, model, price range, etc. */}
              {/* This is a simplified version showing just 1-2 cars */}
              {allCars.filter(c => c.id !== car.id).slice(0, 4).map(similarCar => (
                <a key={similarCar.id} href={`/car/${similarCar.id}`} className="block">
                  <div className="bg-white rounded-lg shadow overflow-hidden transition-all hover:shadow-md">
                    <div className="relative">
                      <img 
                        src={similarCar.imageUrl} 
                        alt={similarCar.title} 
                        className="w-full h-48 object-cover" 
                      />
                      <Badge className={`absolute top-2 right-2 ${similarCar.isAuction ? 'bg-auction-accent' : 'bg-auction-primary'}`}>
                        {similarCar.isAuction ? 'Auction' : 'Fixed Price'}
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold truncate">{similarCar.title}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <div>
                          <p className="text-sm text-auction-muted">
                            {similarCar.isAuction ? 'Current Bid' : 'Price'}
                          </p>
                          <p className="text-xl font-bold text-auction-primary">
                            ${(similarCar.isAuction ? similarCar.currentBid : similarCar.price)?.toLocaleString()}
                          </p>
                        </div>
                        {similarCar.isAuction && similarCar.timeLeft && (
                          <div>
                            <p className="text-sm text-auction-muted">Time Left</p>
                            <div className="flex items-center">
                              <Clock size={16} className="mr-1" />
                              <span>{similarCar.timeLeft}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Star component for rating
function Star(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default CarDetail;
