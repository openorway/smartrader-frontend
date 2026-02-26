import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, UserPlus, Phone, DollarSign, Shield, Clock } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Registrer deg",
    description: "Opprett din gratis konto med navn, e-post og telefonnummer. Tar under ett minutt.",
    details: ["Ingen betaling nødvendig", "3 dager gratis tilgang", "Helt uforpliktende"]
  },
  {
    step: "02",
    icon: Phone,
    title: "Bli oppringt av VIP-rådgiver",
    description: "En personlig rådgiver kontakter deg for å hjelpe deg i gang og lage din strategi.",
    details: ["Personlig oppfølging", "Skreddersydd strategi", "Profesjonell veiledning"]
  },
  {
    step: "03",
    icon: DollarSign,
    title: "Gjør deposit og aktiver",
    description: "Gjør et deposit på 250 USD for å aktivere full automatisert trading med AI.",
    details: ["250 USD tradingkapital", "Full AI-tilgang", "Automatisk trading 24/7"]
  }
];

export const HowItWorks = () => {
  const headerAnim = useScrollAnimation();
  const { containerRef, visibleItems } = useStaggeredAnimation(steps.length, 150);
  const ctaAnim = useScrollAnimation();

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-ghl-lightblue">
      <div className="ghl-inner">
        <div
          ref={headerAnim.ref}
          className={`text-center mb-16 scroll-reveal ${headerAnim.isVisible ? 'visible' : ''}`}
        >
          <span className="inline-block text-ghl-blue font-semibold text-sm uppercase tracking-wider mb-4">
            Så enkelt er det
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ghl-navy mb-6 font-heading">
            Tre steg til automatisert trading
          </h2>
          <p className="text-lg text-ghl-gray max-w-3xl mx-auto">
            Kom i gang på under 5 minutter. SmartTrader gjør resten for deg.
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {steps.map((step, index) => (
            <Card
              key={index}
              className={`ghl-card p-6 lg:p-8 relative scroll-reveal ${visibleItems[index] ? 'visible' : ''}`}
            >
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-ghl-yellow rounded-full flex items-center justify-center">
                <span className="font-bold text-ghl-navy">{step.step}</span>
              </div>
              
              <div className="w-14 h-14 bg-ghl-blue/10 rounded-xl flex items-center justify-center mb-6">
                <step.icon className="w-7 h-7 text-ghl-blue" />
              </div>
              
              <h3 className="text-xl font-semibold text-ghl-navy mb-3 font-heading">{step.title}</h3>
              <p className="text-ghl-gray mb-4 leading-relaxed">{step.description}</p>

              <div className="space-y-2">
                {step.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-ghl-navy">
                    <CheckCircle className="w-4 h-4 text-ghl-green flex-shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-ghl-blue" />
                </div>
              )}
            </Card>
          ))}
        </div>

        <div
          ref={ctaAnim.ref}
          className={`bg-ghl-navy rounded-2xl p-8 lg:p-12 text-center scroll-reveal scroll-reveal-scale ${ctaAnim.isVisible ? 'visible' : ''}`}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 font-heading">
            Klar til å komme i gang?
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              { icon: Shield, text: "Trygg registrering" },
              { icon: Clock, text: "3 dager gratis" },
              { icon: CheckCircle, text: "Ingen binding" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/80 text-sm">
                <item.icon className="w-4 h-4 text-ghl-green" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          
          <Link to="/registrer">
            <Button variant="ghl-primary" size="xl" className="group">
              Start 3 dager gratis nå
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
