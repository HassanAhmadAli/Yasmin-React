import { Socket } from "socket.io-client";
import { create } from "zustand";
export interface AppUser {
  name: string,
  email: string,
  _id: number
}
export interface IGlobalState {
  isMobile: boolean;
  setIsMobile: (val: boolean) => void;
  jwt: string;
  user: AppUser | null;
  setUser: (user: AppUser) => void;
  setJwt: (val: string) => void;
  socket: Socket | null;
  setSocket: (socket: Socket) => void;
}
export const useGlobalState = create<IGlobalState>((set) => ({
  socket: null,
  user: null,
  setUser: (user: AppUser) => set(() => ({ user })),
  setSocket: (socket: Socket) => set(() => ({ socket })),
  isMobile: false,
  setIsMobile: (val: boolean) => set(() => ({ isMobile: val })),
  jwt: "",
  setJwt: () => set(() => ({})),
}));
