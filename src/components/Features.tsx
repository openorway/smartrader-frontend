import { Card } from "@/components/ui/card";
import { Brain, Users, Zap } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Zap,
    title: "Automatisert trading",
    description: "Systemet analyserer markedet og plasserer handler automatisk – 24 timer i døgnet, 7 dager i uken.",
    highlight: "AI-drevet"
  },
  {
    icon: Users,
    title: "Personlig VIP-rådgiver",
    description: "Du får en dedikert rådgiver som hjelper deg med å lykkes. Personlig oppfølging fra dag én.",
    highlight: "Dedikert rådgiver"
  },
  {
    icon: Brain,
    title: "Eksklusive trading-signaler",
    description: "Tilgang til profesjonelle signaler med høy treffsikkerhet. Se hva som fungerer i sanntid.",
    highlight: "Høy treffsikkerhet"
  }
];

export const Features = () => {
  const headerAnim = useScrollAnimation();
  const { containerRef, visibleItems } = useStaggeredAnimation(features.length, 100);

  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="ghl-inner">
        <div
          ref={headerAnim.ref}
          className={`text-center mb-16 scroll-reveal ${headerAnim.isVisible ? 'visible' : ''}`}
        >
          <span className="inline-block text-ghl-blue font-semibold text-sm uppercase tracking-wider mb-4">
            Hvorfor SmartTrader
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ghl-navy mb-6 font-heading">
            Alt du trenger for å lykkes
          </h2>
          <p className="text-lg text-ghl-gray max-w-2xl mx-auto">
            SmartTrader kombinerer AI-teknologi, personlig oppfølging og eksklusive signaler for å gi deg best mulig resultat.
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`ghl-card p-8 hover:shadow-xl group scroll-reveal ${visibleItems[index] ? 'visible' : ''}`}
            >
              <div className="w-14 h-14 bg-ghl-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-ghl-blue/20 transition-colors">
                <feature.icon className="w-7 h-7 text-ghl-blue" />
              </div>
              
              <h3 className="text-xl font-semibold text-ghl-navy mb-3 font-heading">
                {feature.title}
              </h3>
              <p className="text-ghl-gray mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="inline-flex items-center gap-2 bg-ghl-green/10 text-ghl-green font-semibold px-3 py-1.5 rounded-full text-sm">
                <span className="w-1.5 h-1.5 bg-ghl-green rounded-full"></span>
                {feature.highlight}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
