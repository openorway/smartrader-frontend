import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, DollarSign } from "lucide-react";

interface DepositModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DepositModal = ({ open, onOpenChange }: DepositModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="w-16 h-16 bg-ghl-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <DollarSign className="w-8 h-8 text-ghl-navy" />
          </div>
          <DialogTitle className="text-center text-xl font-heading">
            Aktiver full tilgang
          </DialogTitle>
          <DialogDescription className="text-center">
            Et deposit på 250 USD låser opp alle funksjoner i SmartTrader.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="bg-ghl-lightblue rounded-xl p-4 space-y-3">
            {[
              "Automatisert AI-trading 24/7",
              "Full signalhistorikk",
              "AI-strategier og porteføljeanalyse",
              "Kopier topp-tradere automatisk",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-ghl-green flex-shrink-0" />
                <span className="text-ghl-navy">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center text-sm text-ghl-gray">
            <p className="mb-4">
              Din VIP-rådgiver vil kontakte deg med instruksjoner for å gjennomføre deposit.
            </p>
            <div className="flex items-center justify-center gap-2 text-ghl-green">
              <Shield className="w-4 h-4" />
              <span className="font-medium">Trygg og sikker prosess</span>
            </div>
          </div>

          <Button
            variant="ghl-primary"
            className="w-full"
            size="xl"
            onClick={() => onOpenChange(false)}
          >
            Forstått – jeg venter på rådgiver
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
