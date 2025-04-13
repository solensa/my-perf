import Image from "next/image";
import { TabType, content } from "../toggle";
import { VideoPlayer } from "./VideoPlayer";

interface TabContentProps {
  activeTab: TabType;
}

export function TabContent({ activeTab }: TabContentProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-lg mb-6">{content[activeTab].description}</p>

      <div className="h-[68px] ">
        {activeTab === "role-plays" && (
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-8 rounded-md transition-colors cursor-pointer"
            onClick={() => window.open("https://www.linkedin.com/learning/ai-coaching", "_blank")}
          >
            {content["role-plays"].buttonText}
          </button>
        )}
      </div>

      {/* Fixed size container for media */}
      <div className="w-[1024px] h-[517px] rounded-4xl overflow-hidden shadow-2xl border-8 border-white/40 drop-shadow-[0_0_10px_rgba(255,237,0,0.6)] z-20">
        {activeTab === "coach" && <VideoPlayer videoSrc={content.coach.videoSrc} />}
        {activeTab === "role-plays" && <VideoPlayer videoSrc={content["role-plays"].videoSrc} />}
        {activeTab === "goal" && <VideoPlayer videoSrc={content["goal"].videoSrc} />}
      </div>
    </div>
  );
}
