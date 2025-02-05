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
            Planos sem fidelidade
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Escolha a opção que funciona melhor para você
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
          <PriceCard
            option="basic"
            title="Casual"
            price="5.99"
            features={[
              "1 imagem gerada por IA",
              "Saída de alta qualidade",
              "Geração rápida",
            ]}
            delay={0.2}
          />
          <PriceCard
            option="pro"
            title="Pro"
            price="11.99"
            features={[
              "2 imagens gerada por IA",
              "Processamento prioritário",
              "Personalização de parâmetros avançada",
              "Melhore detalhes na geração da imagem",
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