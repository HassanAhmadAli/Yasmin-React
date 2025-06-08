import { Socket } from "socket.io-client";
import { create } from "zustand";

export interface IGlobalState {
  isMobile: boolean;
  setIsMobile: (val: boolean) => void;
  jwt: string;
  setJwt: (val: string) => void;
  socket: Socket | null;
  setSocket: (socket: Socket) => void;
}
export const useGlobalState = create<IGlobalState>((set) => ({
  socket: null,
  setSocket: (socket: Socket) => set(() => ({ socket })),
  isMobile: false,
  setIsMobile: (val: boolean) => set(() => ({ isMobile: val })),
  jwt: "",
  setJwt: () => set((state) => ({})),
}));
