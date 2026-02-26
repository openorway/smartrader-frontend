import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Clock, TrendingUp, Star, Users } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

export const Hero = () => {
  const { containerRef, visibleItems } = useStaggeredAnimation(7, 120);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div ref={containerRef} className="ghl-inner py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 scroll-reveal ${visibleItems[0] ? 'visible' : ''}`}>
              <span className="w-2 h-2 bg-ghl-green rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-white/90">2 000+ aktive medlemmer</span>
            </div>

            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-heading scroll-reveal ${visibleItems[1] ? 'visible' : ''}`}>
              Smart trading som fungerer —{" "}
              <span className="text-ghl-yellow">helt automatisk</span>
            </h1>

            <p className={`text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed scroll-reveal ${visibleItems[2] ? 'visible' : ''}`}>
              SmartTrader bruker avansert AI for å gjøre investeringene dine enklere og mer lønnsomme. 
              Ingen erfaring nødvendig.
            </p>

            {/* Trust Indicators */}
            <div className={`flex flex-wrap justify-center lg:justify-start gap-4 mb-8 scroll-reveal ${visibleItems[3] ? 'visible' : ''}`}>
              {[
                { icon: TrendingUp, text: "Avansert AI" },
                { icon: Shield, text: "Trygg plattform" },
                { icon: Clock, text: "24/7 automatisk" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/80 text-sm">
                  <item.icon className="w-4 h-4 text-ghl-yellow" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 scroll-reveal ${visibleItems[4] ? 'visible' : ''}`}>
              <Link to="/registrer">
                <Button variant="ghl-primary" size="xl" className="group w-full sm:w-auto">
                  Prøv 3 dager gratis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="ghl-outline"
                size="xl"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                onClick={() => scrollToSection('how-it-works')}
              >
                Se hvordan det fungerer
              </Button>
            </div>

            {/* Trust info */}
            <div className={`flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-white/60 scroll-reveal ${visibleItems[5] ? 'visible' : ''}`}>
              {[
                "3 dager helt gratis",
                "Ingen betaling nødvendig",
                "VIP-rådgiver inkludert"
              ].map((text, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-ghl-green" />
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Dashboard Mockup */}
          <div className={`relative scroll-reveal ${visibleItems[6] ? 'visible' : ''}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={dashboardMockup} alt="SmartTrader Dashboard" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-white rounded-xl shadow-xl p-4 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-ghl-green/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-ghl-green" />
                </div>
                <div>
                  <div className="text-sm text-ghl-gray">Snitt daglig</div>
                  <div className="text-xl font-bold text-ghl-navy">+342 USD</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Row */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['👨‍💼', '👩‍💻', '👨‍🎓', '👩‍🔬'].map((emoji, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-ghl-yellow flex items-center justify-center text-lg border-2 border-ghl-navy">
                    {emoji}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="font-semibold text-white flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  2 000+ medlemmer
                </div>
                <div className="text-sm text-white/60">bruker SmartTrader</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-ghl-yellow text-ghl-yellow" />
                ))}
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">4.8/5 rating</div>
                <div className="text-sm text-white/60">500+ anmeldelser</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
