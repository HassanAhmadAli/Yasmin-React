import { create } from "zustand";

export interface IGlobalState {
  isMobile: boolean;
  setIsMobile:(val:boolean) => void;
}
export const useGlobalState = create<IGlobalState>((set) => ({
  isMobile: false,
  setIsMobile: (val: boolean) => set(() => ({ isMobile: val })),
}));
