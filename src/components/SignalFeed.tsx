import { useSignalGenerator, TradingSignal } from "@/hooks/useSignalGenerator";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, TrendingDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

interface SignalFeedProps {
  blurred?: boolean;
  maxItems?: number;
}

const SignalRow = ({ signal }: { signal: TradingSignal }) => {
  const timeAgo = () => {
    const diff = Date.now() - signal.timestamp.getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'Nå';
    if (mins < 60) return `${mins}m siden`;
    return `${Math.floor(mins / 60)}t siden`;
  };

  return (
    <div className="flex items-center justify-between py-3 px-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${signal.isWin ? 'bg-ghl-green/20' : 'bg-destructive/20'}`}>
          {signal.isWin ? (
            <TrendingUp className="w-4 h-4 text-ghl-green" />
          ) : (
            <TrendingDown className="w-4 h-4 text-destructive" />
          )}
        </div>
        <div>
          <span className="text-sm font-semibold text-white">{signal.instrument}</span>
          <span className="text-xs text-white/50 ml-2">Signal #{signal.signalId}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className={`text-sm font-bold ${signal.isWin ? 'text-ghl-green' : 'text-destructive'}`}>
          {signal.isWin ? '+' : '−'}{signal.amount} USD
        </span>
        <span className="text-xs text-white/40 min-w-[60px] text-right">{timeAgo()}</span>
      </div>
    </div>
  );
};

export const SignalFeed = ({ blurred = false, maxItems = 10 }: SignalFeedProps) => {
  const signals = useSignalGenerator();
  const anim = useScrollAnimation();
  const displaySignals = signals.slice(0, maxItems);

  return (
    <section className="py-20 lg:py-28 bg-ghl-navy">
      <div className="ghl-inner">
        <div
          ref={anim.ref}
          className={`text-center mb-12 scroll-reveal ${anim.isVisible ? 'visible' : ''}`}
        >
          <span className="inline-block text-ghl-yellow font-semibold text-sm uppercase tracking-wider mb-4">
            Live signaler
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
            Se hva som skjer akkurat nå
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Våre AI-signaler genererer kontinuerlig handler med høy treffsikkerhet. Registrer deg for full tilgang.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden ${blurred ? 'select-none' : ''}`}>
            {/* Feed header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-ghl-green rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white/80">Live Trading Feed</span>
              </div>
              <span className="text-xs text-white/50">{signals.length} signaler</span>
            </div>

            {/* Signal rows */}
            <div className={blurred ? 'blur-sm pointer-events-none' : ''}>
              {displaySignals.map(signal => (
                <SignalRow key={signal.id} signal={signal} />
              ))}
            </div>
          </div>

          {/* Blur overlay CTA */}
          {blurred && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-ghl-navy/60 backdrop-blur-[2px] rounded-2xl">
              <p className="text-white text-lg font-semibold mb-4 text-center px-4">
                Registrer deg for å se alle signaler
              </p>
              <Link to="/registrer">
                <Button variant="ghl-primary" size="xl" className="group">
                  Prøv 3 dager gratis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
