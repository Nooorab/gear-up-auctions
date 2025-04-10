
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from './context/LanguageContext';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import HowItWorks from './pages/HowItWorks';
import Auctions from './pages/Auctions';
import BuyNow from './pages/BuyNow';
import SellYourCar from './pages/SellYourCar';
import CarDetail from './pages/CarDetail';
import NotFound from './pages/NotFound';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { Toaster } from "@/components/ui/sonner";
import './App.css';

// Set up query client with retry false to prevent retries on 4xx errors
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/auctions" element={<Auctions />} />
            <Route path="/buy-now" element={<BuyNow />} />
            <Route path="/sell" element={<SellYourCar />} />
            <Route path="/car/:id" element={<CarDetail />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </BrowserRouter>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
