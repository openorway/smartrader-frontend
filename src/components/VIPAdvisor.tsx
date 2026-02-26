import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Shield, Users, Star } from "lucide-react";

export const VIPAdvisor = () => {
  const anim = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="ghl-inner">
        <div
          ref={anim.ref}
          className={`grid lg:grid-cols-2 gap-12 items-center scroll-reveal ${anim.isVisible ? 'visible' : ''}`}
        >
          {/* Content */}
          <div>
            <span className="inline-block text-ghl-blue font-semibold text-sm uppercase tracking-wider mb-4">
              Personlig oppfølging
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ghl-navy mb-6 font-heading">
              Din personlige VIP-rådgiver
            </h2>
            <p className="text-lg text-ghl-gray mb-8 leading-relaxed">
              Som medlem får du en personlig finansrådgiver som kontakter deg direkte. 
              Målet deres er enkelt: sørge for at du tjener penger.
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, text: "Personlig oppringning etter registrering" },
                { icon: Users, text: "Dedikert rådgiver som følger deg opp" },
                { icon: Star, text: "Skreddersydd strategi for dine mål" },
                { icon: Shield, text: "Profesjonell veiledning hele veien" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-ghl-blue/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-ghl-blue" />
                  </div>
                  <span className="text-ghl-navy font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual card */}
          <div className="bg-ghl-lightblue rounded-2xl p-8 lg:p-12">
            <div className="bg-white rounded-xl shadow-ghl p-6 text-center">
              <div className="w-20 h-20 bg-ghl-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-ghl-yellow" />
              </div>
              <h3 className="text-xl font-bold text-ghl-navy mb-2 font-heading">VIP-rådgiver tildelt</h3>
              <p className="text-ghl-gray mb-4">
                Din personlige rådgiver vil kontakte deg etter registrering for å hjelpe deg i gang.
              </p>
              <div className="inline-flex items-center gap-2 bg-ghl-green/10 text-ghl-green rounded-full px-4 py-2 text-sm font-semibold">
                <span className="w-2 h-2 bg-ghl-green rounded-full animate-pulse" />
                Rådgivere tilgjengelige nå
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
