
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Car, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CarCardProps {
  id: string | number;
  title: string;
  imageUrl: string;
  price: number;
  currentBid?: number;
  year: number;
  mileage: number;
  location: string;
  timeLeft?: string;
  isAuction: boolean;
}

const CarCard = ({
  id,
  title,
  imageUrl,
  price,
  currentBid,
  year,
  mileage,
  location,
  timeLeft,
  isAuction
}: CarCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden transition-all hover:shadow-md">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="car-image w-full h-48 object-cover" 
        />
        
        {/* Sale type badge */}
        <Badge className={`absolute top-2 right-2 ${isAuction ? 'bg-auction-accent' : 'bg-auction-primary'}`}>
          {isAuction ? 'Auction' : 'Fixed Price'}
        </Badge>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{title}</h3>
        
        <div className="mt-2 flex justify-between items-center">
          <div>
            {isAuction ? (
              <>
                <p className="text-sm text-auction-muted">Current Bid</p>
                <p className="text-xl font-bold text-auction-primary">
                  ${currentBid?.toLocaleString() || price.toLocaleString()}
                </p>
              </>
            ) : (
              <>
                <p className="text-sm text-auction-muted">Price</p>
                <p className="text-xl font-bold text-auction-primary">
                  ${price.toLocaleString()}
                </p>
              </>
            )}
          </div>
          
          {isAuction && timeLeft && (
            <div>
              <p className="text-sm text-auction-muted">Time Left</p>
              <div className="flex items-center gap-1 text-auction-accent">
                <Clock size={16} />
                <span>{timeLeft}</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <Car size={16} />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <Gauge size={16} />
            <span>{Number(mileage).toLocaleString()} km</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-600 col-span-2">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <Link to={`/car/${id}`}>
            <Button className="w-full" variant={isAuction ? "outline" : "default"}>
              {isAuction ? 'View Auction' : 'View Details'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
