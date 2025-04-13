import { cn } from "../utils";
import { TabType } from "../toggle";

interface TabToggleProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export function TabToggle({ activeTab, setActiveTab }: TabToggleProps) {
  return (
    <div className="relative w-full max-w-3xl mb-8">
      <div className="bg-black/30 backdrop-blur-sm rounded-full p-1.5 flex border border-[#3B3B3B]">
        <button
          onClick={() => setActiveTab("coach")}
          className={cn(
            "flex-1 py-3 px-2 rounded-full text-center transition-all duration-200 text-sm cursor-pointer",
            activeTab === "coach"
              ? "bg-white/20 text-white border border-white/20"
              : "text-gray-400 hover:text-white"
          )}
        >
          AI Coach in SuccessFactors
        </button>
        <button
          onClick={() => setActiveTab("role-plays")}
          className={cn(
            "flex-1 py-3 px-2 rounded-full text-center transition-all duration-200 text-sm cursor-pointer",
            activeTab === "role-plays"
              ? "bg-white/20 text-white border border-white/20"
              : "text-gray-400 hover:text-white"
          )}
        >
          AI Role-Plays On LinkedIn Learning
        </button>
        <button
          onClick={() => setActiveTab("goal")}
          className={cn(
            "flex-1 py-3 px-2 rounded-full text-center transition-all duration-200 text-sm cursor-pointer",
            activeTab === "goal"
              ? "bg-white/20 text-white border border-white/20"
              : "text-gray-400 hover:text-white"
          )}
        >
          Goal Sharing in SuccessFactors
        </button>
      </div>
    </div>
  );
}
