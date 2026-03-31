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
        {isEven && (
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
      <div className={`flex-1 ${!isEven ? "pl-8" : "invisible"}`}>
        {!isEven && (
          <div>
            <span className="text-rose-400 text-sm font-light tracking-wider">
              {story.year}
            </span>
            <h3 className="text-xl text-stone-700 mt-1 mb-2">{story.title}</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              {story.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

interface LoveStoryProps {
  stories?: StoryItem[];
}

export default function LoveStory({ stories = storyItems }: LoveStoryProps) {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-rose-400 tracking-[0.3em] text-xs uppercase mb-3 font-light">
            Our Journey
          </p>
          <h2 className="text-4xl text-stone-700">Love Story</h2>
          <div className="flex items-center justify-center mt-4 gap-3">
            <div className="h-px h-12 bg-rose-200" />
            <Heart className="w-4 h-4 text-rose-300 fill-rose-200" />
            <div className="h-px h-12 bg-rose-200" />
          </div>
        </motion.div>

        {/* Timeline Items  */}
        <div className="flex flex-col">
          {stories.map((story, index) => (
            <TimelineItem
              key={index}
              story={story}
              index={index}
              isLast={index === stories.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
