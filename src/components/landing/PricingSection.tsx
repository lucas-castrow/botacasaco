import React from "react";
import PriceCard from "../pricing/PriceCard";
import { motion } from "framer-motion";

const PricingSection = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Choose the plan that works best for you
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
          <PriceCard
            title="Basic"
            price="5.99"
            features={[
              "1 AI-generated image",
              "High-quality output",
              "24/7 support",
              "Quick generation",
            ]}
            delay={0.2}
          />
          <PriceCard
            title="Pro"
            price="19.99"
            features={[
              "5 AI-generated images",
              "Priority processing",
              "24/7 premium support",
              "Advanced customization",
            ]}
            isPopular
            delay={0.4}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
