import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { TrendingUp, Shield, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Navn må ha minst 2 tegn").max(100),
  email: z.string().trim().email("Ugyldig e-postadresse").max(255),
  phone: z.string().trim().min(8, "Ugyldig telefonnummer").max(20),
});

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = leadSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("leads")
        .insert({
          name: result.data.name,
          email: result.data.email,
          phone: result.data.phone,
        })
        .select()
        .single();

      if (error) throw error;

      localStorage.setItem("smartrader_lead", JSON.stringify({
        id: data.id,
        name: data.name,
        trial_start: data.trial_start,
        has_deposited: data.has_deposited,
      }));

      navigate("/dashboard");
    } catch {
      toast({
        title: "Noe gikk galt",
        description: "Prøv igjen eller kontakt kundeservice.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-lg bg-ghl-yellow flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-ghl-navy" />
          </div>
          <span className="font-heading text-2xl font-bold text-white">SmartTrader</span>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h1 className="text-2xl font-bold text-ghl-navy mb-2 font-heading text-center">
            Opprett din konto
          </h1>
          <p className="text-ghl-gray text-center mb-6">
            Få 3 dager gratis tilgang – ingen betaling nødvendig
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Fullt navn</Label>
              <Input
                id="name"
                placeholder="Ola Nordmann"
                value={form.name}
                onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="email">E-post</Label>
              <Input
                id="email"
                type="email"
                placeholder="ola@eksempel.no"
                value={form.email}
                onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+47 123 45 678"
                value={form.phone}
                onChange={e => setForm(prev => ({ ...prev, phone: e.target.value }))}
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
            </div>

            <Button
              type="submit"
              variant="ghl-primary"
              size="xl"
              className="w-full group"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Start 3 dager gratis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 space-y-2">
            {[
              "3 dager helt gratis",
              "Ingen betalingsinformasjon kreves",
              "VIP-rådgiver kontakter deg",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-ghl-gray">
                <CheckCircle2 className="w-4 h-4 text-ghl-green flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6 text-white/60 text-sm">
          <Shield className="w-4 h-4" />
          <span>Dine data er trygge hos oss</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
