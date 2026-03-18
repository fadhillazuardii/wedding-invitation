"use client";

import React from "react";
import { motion } from "motion/react";
import { Card } from "../ui/card";
import { Calendar, Clock } from "lucide-react";

interface HeroSectionProps {
  groomName: string;
  brideName: string;
  akadDate: string;
  akadTime: string;
  resepsiDate: string;
  resepsiTime: string;
  // Placeholder countdown values - replace with useCountdown hook
  countdown?: { days: number; hours: number; minutes: number; seconds: number };
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
    },
  }),
};

export default function HeroSection({
  groomName,
  brideName,
  akadDate,
  akadTime,
  resepsiDate,
  resepsiTime,
  countdown = { days: 42, hours: 8, minutes: 30, seconds: 0 },
}: HeroSectionProps) {
  const countdownItems = [
    { label: "Hari", value: countdown.days },
    { label: "Jam", value: countdown.hours },
    { label: "Menit", value: countdown.minutes },
    { label: "Detik", value: countdown.seconds },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden px-6 py-24">
      <div className="relative z-10 max-w 2xl mx-auto text-center">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-rose-400 tracking-[0.4em] text-xs uppercase mb-6 font-light"
        >
          The Wedding of
        </motion.p>

        {/* Names */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          {groomName}
        </motion.h1>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-4 my-4"
        >
          <div className="h-px w-16 bg-rose-200" />
          <span
            className="text-rose-400 text-3xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            &
          </span>
          <div className="h-px w-16 bg-rose-200" />
        </motion.div>

        <motion.h1
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-6xl md:text-8xl text-stone-700 leading-none mb-10"
        >
          {brideName}
        </motion.h1>

        {/* Date and Time Info */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-stone-400 text-sm"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-rose-300" />
            <span>
              {akadDate} &middot; {akadTime}
            </span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-rose-200" />
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-rose-300" />
            <span>
              {resepsiDate} &middot; {resepsiTime}
            </span>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <Card className="border-rose-200 bg-white/80 backdrop-blur-sm shadow-rose-100" />
          <p className="text-stone-400 text-xs tracking-widest uppercase mb-5 font-light">
            Menghitung hari
          </p>
        </motion.div>
      </div>
    </section>
  );
}
