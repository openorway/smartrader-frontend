import { TrendingUp, Mail, Phone, MapPin, Shield, Lock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-ghl-navy text-white py-16">
      <div className="ghl-inner">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-ghl-yellow flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-ghl-navy" />
              </div>
              <span className="text-xl font-bold font-heading">SmartTrader</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed max-w-md">
              Avansert AI-tradingplattform med personlig VIP-rådgiver. 
              Vi hjelper deg å tjene penger – helt automatisk.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-ghl-yellow" />
                <span>Trygg plattform</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-ghl-yellow" />
                <span>256-bit SSL</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 font-heading">Kom i gang</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {[
                { text: "Prøv 3 dager gratis", href: "/registrer" },
                { text: "Slik fungerer det", href: "#how-it-works" },
                { text: "Fordeler", href: "#features" },
                { text: "Resultater", href: "#testimonials" }
              ].map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="hover:text-ghl-yellow transition-colors">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 font-heading">Kontakt</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-ghl-yellow flex-shrink-0" />
                <a href="mailto:hei@smartrader.no" className="hover:text-ghl-yellow transition-colors">hei@smartrader.no</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-ghl-yellow flex-shrink-0" />
                <a href="tel:+4721234567" className="hover:text-ghl-yellow transition-colors">+47 21 23 45 67</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-ghl-yellow flex-shrink-0" />
                <span>Oslo, Norge</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <div>© {new Date().getFullYear()} SmartTrader. Alle rettigheter forbeholdt.</div>
            <div className="flex flex-wrap justify-center gap-6">
              {["Personvern", "Vilkår", "Cookies"].map((link) => (
                <a key={link} href="#" className="hover:text-ghl-yellow transition-colors">{link}</a>
              ))}
            </div>
          </div>
          
          <p className="mt-6 text-xs text-white/40 text-center max-w-3xl mx-auto">
            Risikovarsel: Trading innebærer risiko. Tidligere resultater er ingen garanti for fremtidige resultater. 
            Invester aldri mer enn du har råd til å tape.
          </p>
        </div>
      </div>
    </footer>
  );
};
