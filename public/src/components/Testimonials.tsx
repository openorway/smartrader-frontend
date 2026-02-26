import { Card } from "@/components/ui/card";
import { Star, Quote, BadgeCheck, Wallet } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

import thomasImg from "@/assets/testimonials/thomas-eriksen.jpg";
import kristineImg from "@/assets/testimonials/kristine-moen.jpg";
import andersImg from "@/assets/testimonials/anders-haugen.jpg";
import mariaImg from "@/assets/testimonials/maria-johansen.jpg";
import erikImg from "@/assets/testimonials/erik-nilsen.jpg";
import liseImg from "@/assets/testimonials/lise-andersen.jpg";

const testimonials = [
  {
    name: "Thomas Eriksen",
    location: "Oslo",
    profit: "+1 230 USD",
    period: "på 3 dager",
    text: "Var skeptisk i starten, men etter 3 dager med gratis tilgang var jeg overbevist. Rådgiveren min hjalp meg hele veien. SmartTrader fungerer virkelig!",
    image: thomasImg
  },
  {
    name: "Kristine Moen",
    location: "Bergen",
    profit: "+870 USD",
    period: "første uken",
    text: "Som alenemor har jeg ikke tid til komplisert trading. SmartTrader gjør alt automatisk. Rådgiveren hjalp meg å komme i gang på under 10 minutter.",
    image: kristineImg
  },
  {
    name: "Anders Haugen",
    location: "Trondheim",
    profit: "+2 450 USD",
    period: "på 2 uker",
    text: "Jeg nølte lenge, men da jeg så at det var gratis å prøve i 3 dager tenkte jeg: hvorfor ikke? Nå angrer jeg bare på at jeg ikke startet før.",
    image: andersImg
  },
  {
    name: "Maria Johansen",
    location: "Stavanger",
    profit: "+690 USD",
    period: "på 2 dager",
    text: "Den personlige rådgiveren ga meg trygghet. AI-teknologien fungerer virkelig – signalene treffer gang på gang. Anbefaler til alle!",
    image: mariaImg
  },
  {
    name: "Erik Nilsen",
    location: "Kristiansand",
    profit: "+1 780 USD",
    period: "på 4 dager",
    text: "Testet gratis i 3 dager og ble overbevist. Deposit på 250 USD var ingenting sammenlignet med det jeg har tjent. Fantastisk plattform!",
    image: erikImg
  },
  {
    name: "Lise Andersen",
    location: "Drammen",
    profit: "+540 USD",
    period: "per dag i snitt",
    text: "Perfekt for oss som ikke har tid til å følge med på markedet. Alt skjer automatisk med AI-en, og VIP-rådgiveren er alltid tilgjengelig.",
    image: liseImg
  }
];

export const Testimonials = () => {
  const headerAnim = useScrollAnimation();
  const { containerRef, visibleItems } = useStaggeredAnimation(testimonials.length, 100);
  const statsAnim = useScrollAnimation();

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="ghl-inner">
        <div
          ref={headerAnim.ref}
          className={`text-center mb-16 scroll-reveal ${headerAnim.isVisible ? 'visible' : ''}`}
        >
          <span className="inline-block text-ghl-green font-semibold text-sm uppercase tracking-wider mb-4">
            Ekte resultater fra ekte medlemmer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ghl-navy mb-6 font-heading">
            Se hva andre tjener med SmartTrader
          </h2>
          <p className="text-lg text-ghl-gray max-w-2xl mx-auto">
            Over 2 000 medlemmer bruker allerede SmartTrader. De startet alle med 3 dager gratis.
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`ghl-card p-6 lg:p-8 relative scroll-reveal ${visibleItems[index] ? 'visible' : ''}`}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-ghl-blue/10" />
              
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-ghl-navy">{testimonial.name}</span>
                    <BadgeCheck className="w-4 h-4 text-ghl-blue" />
                  </div>
                  <div className="text-sm text-ghl-gray">{testimonial.location}</div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-ghl-green/10 text-ghl-green rounded-full px-3 py-1.5 mb-4">
                <Wallet className="w-4 h-4" />
                <span className="font-bold">{testimonial.profit}</span>
                <span className="text-sm opacity-80">{testimonial.period}</span>
              </div>
              
              <p className="text-ghl-gray leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-ghl-yellow text-ghl-yellow" />
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div
          ref={statsAnim.ref}
          className={`mt-12 flex flex-wrap justify-center gap-8 lg:gap-16 bg-ghl-lightblue rounded-2xl p-8 scroll-reveal ${statsAnim.isVisible ? 'visible' : ''}`}
        >
          {[
            { value: "2 000+", label: "Aktive medlemmer" },
            { value: "82%", label: "Vinnerrate" },
            { value: "4.8/5", label: "Gjennomsnittlig rating" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-ghl-navy">{stat.value}</div>
              <div className="text-sm text-ghl-gray">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
