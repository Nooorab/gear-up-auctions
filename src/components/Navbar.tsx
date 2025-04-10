
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Bell, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl text-auction-primary">Abo Hasan Car</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/auctions" className="text-gray-700 hover:text-auction-primary font-medium">
            Auctions
          </Link>
          <Link to="/buy" className="text-gray-700 hover:text-auction-primary font-medium">
            Buy Now
          </Link>
          <Link to="/sell" className="text-gray-700 hover:text-auction-primary font-medium">
            Sell Your Car
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-auction-primary font-medium">
            About Us
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button variant="outline" className="flex items-center gap-2">
            <User className="h-5 w-5" />
            <span>Log In</span>
          </Button>
          
          <Button className="bg-auction-accent hover:bg-auction-accent/90">
            Register
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link to="/auctions" className="block py-2 text-gray-700 hover:text-auction-primary font-medium">
              Auctions
            </Link>
            <Link to="/buy" className="block py-2 text-gray-700 hover:text-auction-primary font-medium">
              Buy Now
            </Link>
            <Link to="/sell" className="block py-2 text-gray-700 hover:text-auction-primary font-medium">
              Sell Your Car
            </Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-auction-primary font-medium">
              About Us
            </Link>
            <div className="flex gap-2 mt-2">
              <Button variant="outline" className="flex-1">Log In</Button>
              <Button className="flex-1 bg-auction-accent hover:bg-auction-accent/90">Register</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
