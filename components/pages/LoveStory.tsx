"use client";

import React from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Heart, Coffee, Stars } from "lucide-react";

interface StoryItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}
const storyItems: StoryItem[] = [
  {
    year: "2020",
    title: "The Meeting",
    description: "We met at a coffee shop and instantly connected.",
    icon: <Coffee size={24} color="#f43f5e" />,
  },
  {
    year: "2021",
    title: "First Date",
    description: "Our first date was magical under the stars.",
    icon: <Stars size={24} color="#f43f5e" />,
  },
  {
    year: "2022",
    title: "Falling in Love",
    description: "We fell in love and started our beautiful journey together.",
    icon: <Heart size={24} color="#f43f5e" />,
  },
  {
    year: "2023",
    title: "Engagement",
    description: "We became engaged and excited about our future together.",
    icon: <Heart size={24} color="#f43f5e" />,
  },
  {
    year: "2024",
    title: "Wedding Plans",
    description: "We started planning our dream wedding together.",
    icon: <Heart size={24} color="#f43f5e" />,
  },
];

function TimelineItem({
  story,
  index,
  isLast,
}: {
  story: StoryItem;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-start gap-0">
      {/* left timeline */}
      <div className={`flex-1 ${isEven ? "pr-8 text-right" : "invisible"}`}>
        {isEvent && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-rose-400 text-sm font-light tracking-wider">
              {story.year}
            </span>
            <h3 className="text-xl text-stone-700 mt-1 mb-2">{story.title}</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              {story.description}
            </p>
          </motion.div>
        )}
      </div>

      {/* center timeline */}
      <div className="flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-12 h-12 rounded-full bg-rose-400 text-white flex items-center justify-center shadow-md shadow-rose-200 shrink-0"
        >
          {story.icon}
        </motion.div>
      </div>

      {/* right timeline */}
      <div>
        <div>
          <span className="text-rose-400 text-sm font-light tracking-wider">
            {story.year}
          </span>
          <h3 className="text-xl text-stone-700 mt-1 mb-2">{story.title}</h3>
          <p className="text-stone-400 text-sm leading-relaxed">
            {story.description}
          </p>
        </div>
      </div>
    </div>
  );
}

interface LoveStoryProps {}
