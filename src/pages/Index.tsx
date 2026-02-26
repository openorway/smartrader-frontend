import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { SignalFeed } from "@/components/SignalFeed";
import { HowItWorks } from "@/components/HowItWorks";
import { VIPAdvisor } from "@/components/VIPAdvisor";
import { DepositLock } from "@/components/DepositLock";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <SignalFeed blurred />
      <HowItWorks />
      <VIPAdvisor />
      <DepositLock />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
