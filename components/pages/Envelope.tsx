"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EnvelopeProps {
  groomName: string;
  brideName: string;
  date: string;
  onOpen: () => void;
  isOpen: boolean;
}

export default function Envelope({
  groomName,
  brideName,
  date,
  onOpen,
  isOpen,
}: EnvelopeProps) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="envelope"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-rose-50 overflow-hidden"
        >
          {/* Background decorative petals */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-rose-200 opacity-40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Envelope illustration */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-8"
          >
            <div className="relative w-40 h-28 bg-white rounded-lg shadow-xl border border-rose-100 flex items-center justify-center">
              {/* Envelope flap lines */}
              <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden rounded-t-lg">
                <div
                  className="w-0 h-0 mx-auto"
                  style={{
                    borderLeft: "80px solid transparent",
                    borderRight: "80px solid transparent",
                    borderTop: "64px solid #ffe4e6",
                  }}
                />
              </div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10 mt-4"
              >
                <Heart className="w-10 h-10 text-rose-400 fill-rose-300" />
              </motion.div>
              {/* Envelope bottom fold lines */}
              <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden rounded-b-lg">
                <div
                  className="absolute bottom-0 left-0 w-0 h-0"
                  style={{
                    borderLeft: "0px solid transparent",
                    borderRight: "80px solid transparent",
                    borderBottom: "40px solid #ffe4e6",
                  }}
                />
                <div
                  className="absolute bottom-0 right-0 w-0 h-0"
                  style={{
                    borderLeft: "80px solid transparent",
                    borderRight: "0px solid transparent",
                    borderBottom: "40px solid #ffe4e6",
                  }}
                />
              </div>
            </div>
            {/* Wax seal */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-rose-400 border-2 border-rose-300 flex items-center justify-center shadow-md">
              <Heart className="w-4 h-4 text-white fill-white" />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center px-8"
          >
            <p className="text-stone-400 tracking-[0.3em] text-xs uppercase mb-4 font-light">
              Wedding Invitation
            </p>
            <h1
              className="text-4xl md:text-6xl text-stone-700 mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {groomName}
              <span className="text-rose-400 mx-3">&</span>
              {brideName}
            </h1>
            <p className="text-stone-400 tracking-widest text-sm mb-10 font-light">
              {date}
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={onOpen}
                className="bg-rose-400 hover:bg-rose-500 text-white px-10 py-6 rounded-full text-sm tracking-widest uppercase shadow-lg shadow-rose-200 transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Open Invitation
              </Button>
            </motion.div>
          </motion.div>

          {/* Decorative corners */}
          <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-rose-200 rounded-tl-lg" />
          <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-rose-200 rounded-tr-lg" />
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-rose-200 rounded-bl-lg" />
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-rose-200 rounded-br-lg" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
