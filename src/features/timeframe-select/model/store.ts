import { create } from "zustand";

type TimeframeState = {
  timeframe: string;
  setTimeframe: (timeframe: string) => void;
};

export const useTimeframeStore = create<TimeframeState>((set) => ({
  timeframe: "24 Hours",
  setTimeframe: (timeframe) => set({ timeframe }),
}));
