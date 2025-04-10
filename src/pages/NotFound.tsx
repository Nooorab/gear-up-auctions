
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-auction-light">
        <div className="text-center px-4 py-16">
          <h1 className="text-6xl font-bold text-auction-primary mb-4">404</h1>
          <p className="text-2xl text-auction-muted mb-8">
            Oops! We couldn't find the page you're looking for
          </p>
          <p className="text-auction-muted mb-8 max-w-lg mx-auto">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <div className="space-x-4">
            <Button asChild>
              <Link to="/">Back to Home</Link>
            </Button>
            <Button variant="outline">
              <Link to="/auctions">View Auctions</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
