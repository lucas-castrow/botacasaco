import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  delay?: number;
}

const PriceCard = ({
  title,
  price,
  features,
  isPopular = false,
  delay = 0,
}: PriceCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`relative rounded-2xl bg-[#2A2A2A] p-8 transition-all duration-300 ${isPopular ? "ring-2 ring-[#4A90E2]" : ""}`}
    >
      {isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#4A90E2] px-4 py-1 text-sm font-semibold text-white">
          Most Popular
        </span>
      )}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-bold text-white">${price}</span>
          <span className="ml-1 text-sm text-gray-400">/image</span>
        </div>
      </div>
      <ul className="mb-6 space-y-4">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className="flex items-center"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + index * 0.1 }}
          >
            <Check className="h-5 w-5 text-[#4A90E2] mr-2" />
            <span className="text-gray-300">{feature}</span>
          </motion.li>
        ))}
      </ul>
      <Button
        className="w-full bg-gradient-to-r from-[#8A2BE2] to-[#4A90E2] hover:opacity-90 transition-all duration-300 hover:scale-105"
        onClick={() => navigate("/generate")}
      >
        Try Now
      </Button>
    </motion.div>
  );
};

export default PriceCard;
