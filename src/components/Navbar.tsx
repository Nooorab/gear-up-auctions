
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const { language, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { title: t('home'), path: '/' },
    { title: t('auctions'), path: '/auctions' },
    { title: t('buyNow'), path: '/buy-now' },
    { title: t('sell'), path: '/sell' },
    { title: t('about'), path: '/about' },
    { title: t('contact'), path: '/contact' },
    { title: t('howItWorks'), path: '/how-it-works' },
    { title: t('faq'), path: '/faq' },
  ];

  return (
    <header className={`bg-white shadow-sm sticky top-0 z-40 w-full ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <span className="text-xl font-bold text-auction-primary">CarAuction</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-auction-primary",
                  isActive(link.path) ? "text-auction-primary" : "text-gray-600"
                )}
                onClick={closeMenu}
              >
                {link.title}
              </Link>
            ))}
            <LanguageSwitcher />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  isActive(link.path)
                    ? "bg-auction-light text-auction-primary"
                    : "text-gray-600 hover:bg-gray-50"
                )}
                onClick={closeMenu}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
