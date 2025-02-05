import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import DemoSection from "@/components/landing/DemoSection";
import PricingSection from "@/components/landing/PricingSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#1A1A1A] flex flex-col">
      {/* <Header /> */}
      <main className="flex-1">
        <HeroSection />
        <DemoSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
