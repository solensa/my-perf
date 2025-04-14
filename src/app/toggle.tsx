"use client";

import { useState } from "react";
import { TabContent } from "./components/TabContent";
import { TabToggle } from "./components/TabToggle";
import { Header } from "./components/Header";
import Image from "next/image";
// import { DecorativeElements } from "./components/DecorativeElements";

export type TabType = "coach" | "role-plays" | "goal";

export const content = {
  coach: {
    title: "AI Coach in SuccessFactors",
    description: "Improve your goal writing with the help of the AI Coach",
    videoSrc: "/mp-coach.mp4", // Fixed the path to use public directory
  },
  "role-plays": {
    title: "AI Role-Plays On LinkedIn Learning",
    description:
      "Role-play performance conversations with real-time feedback and learning suggestions",
    videoSrc: "/mp-rp2.mp4",
    buttonText: "Try It",
  },
  goal: {
    title: "Goal Sharing in SuccessFactors",
    description: "Share and track goals with your team for better alignment",
    videoSrc: "/mp-share.mp4",
  },
};

export default function WhatsNewPage() {
  const [activeTab, setActiveTab] = useState<TabType>("coach");

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center px-4 py-12 overflow-hidden">
      {/* Gradient circle behind toggle */}
      <div className="absolute top-[0] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,#00a7b5_0%,#000000_70%)] opacity-30" />

      <Header />
      <TabToggle activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Fixed position container for media and decorative elements */}
      <div className="relative w-full flex justify-center">
        {/* Decorative Elements */}
        <div className="absolute top-[40%] left-[calc(50%-640px)] w-64 h-64 -translate-y-[50%] z-10">
          <Image
            src="/sq1.svg"
            alt="Decorative square"
            width={256}
            height={256}
            className="opacity-90"
          />
        </div>
        <div className="absolute top-[90%] right-[calc(50%-640px)] w-64 h-64 -translate-y-[50%] z-10">
          <Image
            src="/sq2.svg"
            alt="Decorative square"
            width={256}
            height={256}
            className="opacity-90"
          />
        </div>

        {/* Content */}
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
}
