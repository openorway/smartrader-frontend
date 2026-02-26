import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Unlock, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const DepositLock = () => {
  const anim = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-ghl-lightblue">
      <div className="ghl-inner">
        <div
          ref={anim.ref}
          className={`max-w-4xl mx-auto text-center scroll-reveal ${anim.isVisible ? 'visible' : ''}`}
        >
          <div className="inline-flex items-center gap-2 bg-ghl-yellow/20 rounded-full px-4 py-2 mb-6">
            <Lock className="w-4 h-4 text-ghl-navy" />
            <span className="text-sm font-semibold text-ghl-navy">Deposit-modell</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ghl-navy mb-6 font-heading">
            Gratis i 3 dager – full tilgang etter deposit
          </h2>
          <p className="text-lg text-ghl-gray mb-10 max-w-2xl mx-auto">
            Start med 3 dager gratis tilgang. For å låse opp full automatisert trading, 
            gjør et deposit på 250 USD – dette er din tradingkapital, ikke en kostnad.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
            <div className="bg-white rounded-xl shadow-ghl p-6">
              <Unlock className="w-8 h-8 text-ghl-green mx-auto mb-3" />
              <h3 className="font-bold text-ghl-navy mb-2 font-heading">Gratis prøveperiode</h3>
              <p className="text-sm text-ghl-gray">3 dager med tilgang til signaler og VIP-rådgiver. Ingen betaling nødvendig.</p>
            </div>
            <div className="bg-white rounded-xl shadow-ghl p-6">
              <Zap className="w-8 h-8 text-ghl-yellow mx-auto mb-3" />
              <h3 className="font-bold text-ghl-navy mb-2 font-heading">Full tilgang</h3>
              <p className="text-sm text-ghl-gray">Deposit 250 USD for å aktivere automatisert trading, AI-strategier og kopiering.</p>
            </div>
          </div>

          <Link to="/registrer">
            <Button variant="ghl-primary" size="xl" className="group">
              Start gratis nå
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
