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
            See it in Action
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Watch how our AI transforms your photos instantly
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
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Model Pose"
                className="rounded-lg w-full h-[300px] object-cover"
              />
              <p className="mt-4 text-center text-sm text-gray-400">
                1. Your Photo
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
                src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Clothing Item"
                className="rounded-lg w-full h-[300px] object-cover"
              />
              <p className="mt-4 text-center text-sm text-gray-400">
                2. Select Clothing
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
                src="https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="AI Result"
                className="rounded-lg w-full h-[300px] object-cover"
              />
              <p className="mt-4 text-center text-sm text-gray-400">
                3. AI Generated Result
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;
