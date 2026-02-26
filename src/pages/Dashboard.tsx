import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useSignalGenerator } from "@/hooks/useSignalGenerator";
import { useTrialStatus } from "@/hooks/useTrialStatus";
import { DepositModal } from "@/components/DepositModal";
import {
  TrendingUp,
  TrendingDown,
  Clock,
  DollarSign,
  Lock,
  Brain,
  Copy,
  BarChart3,
  Zap,
  History,
  Phone,
  Calendar,
  LogOut,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [leadName, setLeadName] = useState("");
  const [depositModalOpen, setDepositModalOpen] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const signals = useSignalGenerator();
  const trial = useTrialStatus();

  useEffect(() => {
    const leadData = localStorage.getItem("smartrader_lead");
    if (!leadData) {
      navigate("/registrer");
      return;
    }
    const parsed = JSON.parse(leadData);
    setLeadName(parsed.name || "");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("smartrader_lead");
    navigate("/");
  };

  const lockedFeatures = [
    { icon: Zap, title: "Automatisert trading", desc: "AI handler automatisk 24/7" },
    { icon: History, title: "Full signalhistorikk", desc: "Se alle tidligere signaler" },
    { icon: BarChart3, title: "Porteføljeanalyse", desc: "Detaljert analyse av din portefølje" },
    { icon: Brain, title: "AI-strategier", desc: "Avanserte tradingstrategier" },
    { icon: Copy, title: "Kopier trader", desc: "Kopier topp-tradernes handler automatisk" },
  ];

  return (
    <div className="min-h-screen bg-ghl-navy">
      {/* Top bar */}
      <header className="border-b border-white/10 bg-white/5">
        <div className="ghl-inner flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-ghl-yellow flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-ghl-navy" />
            </div>
            <span className="font-heading text-lg font-bold text-white">SmartTrader</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/60 hidden sm:block">Hei, {leadName}</span>
            <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10" onClick={handleLogout}>
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="ghl-inner py-8 space-y-6">
        {/* Trial status */}
        <Card className="bg-white/5 border-white/10 p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-ghl-yellow" />
                <h2 className="text-lg font-bold text-white font-heading">
                  {trial.isExpired
                    ? "Prøveperioden er utløpt"
                    : `Gratis prøveperiode – ${trial.daysLeft}d ${trial.hoursLeft % 24}t igjen`}
                </h2>
              </div>
              <p className="text-sm text-white/60">Fullfør deposit for å aktivere full tilgang</p>
            </div>
            <Button variant="ghl-primary" onClick={() => setDepositModalOpen(true)} className="shrink-0">
              <DollarSign className="w-4 h-4 mr-1" />
              Gjør deposit – 250 USD
            </Button>
          </div>
          <Progress value={trial.isExpired ? 100 : ((3 - trial.daysLeft) / 3) * 100} className="mt-4 h-2 bg-white/10" />
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Signal feed */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 border-white/10 overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-ghl-green rounded-full animate-pulse" />
                  <h3 className="font-bold text-white font-heading">Live Trading Signaler</h3>
                </div>
                <span className="text-xs text-white/40">Oppdateres automatisk</span>
              </div>
              <div className="max-h-[500px] overflow-y-auto">
                {signals.map(signal => (
                  <div key={signal.id} className="flex items-center justify-between py-3 px-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${signal.isWin ? 'bg-ghl-green/20' : 'bg-destructive/20'}`}>
                        {signal.isWin ? <TrendingUp className="w-4 h-4 text-ghl-green" /> : <TrendingDown className="w-4 h-4 text-destructive" />}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-white">{signal.instrument}</span>
                        <span className="text-xs text-white/40 ml-2">#{signal.signalId}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-bold ${signal.isWin ? 'text-ghl-green' : 'text-destructive'}`}>
                        {signal.isWin ? '+' : '−'}{signal.amount} USD
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${signal.isWin ? 'bg-ghl-green/20 text-ghl-green' : 'bg-destructive/20 text-destructive'}`}>
                        {signal.isWin ? 'Vunnet' : 'Tapt'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            {/* VIP advisor */}
            <Card className="bg-white/5 border-white/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-ghl-yellow/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-ghl-yellow" />
                </div>
                <div>
                  <h3 className="font-bold text-white font-heading text-sm">VIP-rådgiver</h3>
                  <span className="text-xs text-ghl-green flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-ghl-green rounded-full" /> Tildelt
                  </span>
                </div>
              </div>
              <p className="text-sm text-white/60 mb-4">
                Din personlige rådgiver er tildelt og vil kontakte deg.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-white/20 text-white hover:bg-white/10"
                onClick={() => setBookingConfirmed(true)}
              >
                <Calendar className="w-4 h-4 mr-1" />
                {bookingConfirmed ? "Samtale booket ✓" : "Book samtale"}
              </Button>
            </Card>

            {/* Quick stats */}
            <Card className="bg-white/5 border-white/10 p-6">
              <h3 className="font-bold text-white font-heading text-sm mb-4">Plattformstatistikk</h3>
              <div className="space-y-3">
                {[
                  { label: "Aktive tradere", value: "2.847+" },
                  { label: "Vinnerrate", value: "82.4%" },
                  { label: "Snitt daglig avkastning", value: "+342 USD" },
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-white/60">{stat.label}</span>
                    <span className="font-bold text-ghl-yellow">{stat.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Locked features grid */}
        <div>
          <h3 className="text-lg font-bold text-white font-heading mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-ghl-yellow" />
            Låste funksjoner
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {lockedFeatures.map((feature, i) => (
              <Card key={i} className="bg-white/5 border-white/10 p-5 relative overflow-hidden group">
                <div className="blur-[2px] pointer-events-none">
                  <feature.icon className="w-8 h-8 text-ghl-blue mb-3" />
                  <h4 className="font-bold text-white text-sm mb-1 font-heading">{feature.title}</h4>
                  <p className="text-xs text-white/50">{feature.desc}</p>
                </div>
                <div className="absolute inset-0 bg-ghl-navy/70 flex flex-col items-center justify-center p-4">
                  <Lock className="w-6 h-6 text-ghl-yellow mb-2" />
                  <p className="text-xs text-white/80 text-center mb-2">Lås opp med deposit</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-ghl-yellow/50 text-ghl-yellow hover:bg-ghl-yellow/10 text-xs"
                    onClick={() => setDepositModalOpen(true)}
                  >
                    250 USD
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <DepositModal open={depositModalOpen} onOpenChange={setDepositModalOpen} />
    </div>
  );
};

export default Dashboard;
