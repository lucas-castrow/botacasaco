import React from "react";
import { motion } from "framer-motion";

const DemoSection = () => {
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
            Veja em Ação
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Veja como nossa IA transforma suas fotos instantaneamente
          </p>
        </motion.div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="overflow-hidden rounded-2xl bg-[#2A2A2A] p-4 hover:ring-2 hover:ring-[#4A90E2] transition-all duration-300">
              <img
                src="pose.jpg"
                alt="Modelo Pousando"
                className="rounded-lg w-full h-[300px] object-cover"
              />
              <p className="mt-4 text-center text-sm text-gray-400">
                1. Selecione a foto
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="overflow-hidden rounded-2xl bg-[#2A2A2A] p-4 hover:ring-2 hover:ring-[#4A90E2] transition-all duration-300">
              <img
                src="jacket.jpeg"
                alt="Item de Roupa"
                className="rounded-lg w-full h-[300px] object-cover"
              />
              <p className="mt-4 text-center text-sm text-gray-400">
                2. Selecione a roupa
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="overflow-hidden rounded-2xl bg-[#2A2A2A] p-4 hover:ring-2 hover:ring-[#4A90E2] transition-all duration-300">
              <img
                src="generated.webp"
                alt="Resultado da IA"
                className="rounded-lg w-full h-[300px] object-cover"
              />
              <p className="mt-4 text-center text-sm text-gray-400">
                3. Resultado gerado pela IA
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;