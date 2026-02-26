import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Lock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

export const CTA = () => {
  const cardAnim = useScrollAnimation();

  return (
    <section id="cta" className="py-20 lg:py-28 bg-ghl-lightblue">
      <div className="ghl-inner">
        <div
          ref={cardAnim.ref}
          className={`bg-white rounded-2xl shadow-ghl p-8 lg:p-16 text-center max-w-4xl mx-auto scroll-reveal scroll-reveal-scale ${cardAnim.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ghl-navy mb-6 font-heading">
            Klar til å komme i gang?
          </h2>
          
          <p className="text-lg text-ghl-gray mb-8 max-w-2xl mx-auto">
            Bli med over 2 000 andre som allerede tjener med SmartTrader. 
            Start helt gratis – ingen risiko.
          </p>

          <Link to="/registrer">
            <Button variant="ghl-primary" size="xl" className="group mb-8">
              Prøv SmartTrader 3 dager gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-ghl-gray">
            {[
              { icon: CheckCircle2, text: "3 dager gratis prøveperiode" },
              { icon: Shield, text: "Personlig VIP-rådgiver" },
              { icon: Lock, text: "Ingen binding – avslutt når som helst" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-ghl-green" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          
          <p className="text-xs text-ghl-gray/60 mt-8 max-w-xl mx-auto">
            Ved å registrere deg får du 3 dager gratis tilgang til SmartTrader. 
            Full tilgang aktiveres etter deposit på 250 USD.
          </p>
        </div>
      </div>
    </section>
  );
};
