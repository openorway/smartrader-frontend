import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, TrendingUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md border-b border-border/50' : 'bg-white'
        }`}
      >
        <div className="ghl-inner">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-ghl-navy flex items-center justify-center">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className="font-heading text-xl md:text-2xl font-bold text-ghl-navy">
                SmartTrader
              </span>
            </Link>

            {isLandingPage && (
              <nav className="hidden md:flex items-center gap-8">
                {[
                  { label: "Fordeler", id: "features" },
                  { label: "Hvordan det fungerer", id: "how-it-works" },
                  { label: "Resultater", id: "testimonials" },
                  { label: "FAQ", id: "faq" },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-ghl-gray hover:text-ghl-navy transition-colors duration-200 text-sm font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            )}

            <div className="hidden md:block">
              <Link to="/registrer">
                <Button variant="ghl-primary" size="default">
                  Start gratis
                </Button>
              </Link>
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-ghl-navy" /> : <Menu className="w-6 h-6 text-ghl-navy" />}
            </button>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="ghl-inner py-4 bg-white border-t border-border/50">
            <nav className="flex flex-col gap-3">
              {isLandingPage && (
                <>
                  {[
                    { label: "Fordeler", id: "features" },
                    { label: "Hvordan det fungerer", id: "how-it-works" },
                    { label: "Resultater", id: "testimonials" },
                    { label: "FAQ", id: "faq" },
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left py-2 text-ghl-gray hover:text-ghl-navy transition-colors font-medium"
                    >
                      {item.label}
                    </button>
                  ))}
                </>
              )}
              <Link to="/registrer" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghl-primary" className="w-full mt-2">
                  Start gratis
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="h-16 md:h-20" />
    </>
  );
};
