import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, DollarSign, Brain, Shield, Lock, Users } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    icon: Clock,
    question: "Hva skjer etter de 3 dagene gratis?",
    answer: "Etter prøveperioden trenger du å gjøre et deposit på 250 USD for å fortsette med full tilgang. Dette er din tradingkapital – ikke en kostnad. Du kan avslutte når som helst."
  },
  {
    icon: DollarSign,
    question: "Hva er deposit på 250 USD?",
    answer: "Depositen er din tradingkapital som brukes til å plassere handler. Det er ikke en avgift eller abonnement – det er penger som jobber for deg i markedet via SmartTraders AI-system."
  },
  {
    icon: Users,
    question: "Hva gjør VIP-rådgiveren?",
    answer: "Din personlige VIP-rådgiver kontakter deg etter registrering for å hjelpe deg i gang, lage en skreddersydd strategi og sikre at du får best mulig resultat med SmartTrader."
  },
  {
    icon: Brain,
    question: "Hvordan fungerer AI-tradingen?",
    answer: "SmartTraders AI analyserer tusenvis av markedsdata-punkter i sanntid ved hjelp av avansert maskinlæring. Algoritmen identifiserer lønnsomme mønstre og utfører handler automatisk 24/7."
  },
  {
    icon: Shield,
    question: "Er pengene mine trygge?",
    answer: "Absolutt. SmartTrader bruker banknivå-kryptering og regulerte betalingsløsninger. Du har full kontroll over innskudd og uttak til enhver tid."
  },
  {
    icon: Lock,
    question: "Kan jeg avslutte når som helst?",
    answer: "Ja, det er ingen bindingstid. Du kan avslutte når som helst. Prøveperioden er helt uforpliktende – ingen betaling kreves for de 3 gratis dagene."
  }
];

export const FAQ = () => {
  const headerAnim = useScrollAnimation();
  const { containerRef, visibleItems } = useStaggeredAnimation(faqs.length, 100);
  const badgesAnim = useScrollAnimation();

  return (
    <section id="faq" className="py-20 lg:py-28 bg-ghl-lightblue">
      <div className="ghl-inner">
        <div
          ref={headerAnim.ref}
          className={`text-center mb-16 scroll-reveal ${headerAnim.isVisible ? 'visible' : ''}`}
        >
          <span className="inline-block text-ghl-blue font-semibold text-sm uppercase tracking-wider mb-4">
            Vanlige spørsmål
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ghl-navy mb-6 font-heading">
            Alt du lurer på
          </h2>
          <p className="text-lg text-ghl-gray max-w-2xl mx-auto">
            Vi forstår at du har spørsmål. Her er svarene på det de fleste lurer på.
          </p>
        </div>

        <div ref={containerRef} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`bg-white border border-border/30 rounded-xl overflow-hidden px-6 shadow-sm scroll-reveal ${visibleItems[index] ? 'visible' : ''}`}
              >
                <AccordionTrigger className="hover:no-underline py-5 group">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-xl bg-ghl-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-ghl-blue/20 transition-colors">
                      <faq.icon className="w-5 h-5 text-ghl-blue" />
                    </div>
                    <span className="text-base lg:text-lg font-semibold text-ghl-navy group-hover:text-ghl-blue transition-colors">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-0">
                  <div className="pl-14 pr-4">
                    <p className="text-ghl-gray leading-relaxed">{faq.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div
          ref={badgesAnim.ref}
          className={`mt-12 flex flex-wrap justify-center gap-8 scroll-reveal ${badgesAnim.isVisible ? 'visible' : ''}`}
        >
          {[
            { icon: Shield, text: "100% trygt" },
            { icon: Lock, text: "Ingen binding" },
            { icon: Clock, text: "Avslutt når som helst" }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-ghl-gray">
              <badge.icon className="w-4 h-4 text-ghl-green" />
              <span className="text-sm">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
