import { Socket } from "socket.io-client";
import { create } from "zustand";
export interface AppUser {
  name: string,
  email: string,
  _id: number
}

const getStoredUser = (): AppUser | null => {
  const storedUser = localStorage.getItem("user");
  if (!storedUser) return null;
  try {
    return JSON.parse(storedUser);
  } catch (error) {
    console.error("Error parsing stored user:", error);
    return null;
  }
};
const getJwt = (): string | null => {
  const storedJwt = localStorage.getItem("jwt");
  if (!storedJwt) return null;
  return storedJwt;
};
export interface IGlobalState {
  isMobile: boolean;
  setIsMobile: (val: boolean) => void;
  jwt: string | null;
  user: AppUser | null;
  setUser: (user: AppUser) => void;
  setJwt: (val: string) => void;
  socket: Socket | null;
  setSocket: (socket: Socket) => void;
  logout: () => void;
}
/*
  setUser: (user: AppUser) => {
  
    set(() => ({ user }));
  },
*/
export const useGlobalState = create<IGlobalState>((set) => ({
  socket: null,
  setSocket: (socket: Socket) => set(() => ({ socket })),
  user: getStoredUser(),
  setUser: (user: AppUser) => {
    localStorage.setItem("user", JSON.stringify(user));
    set(() => ({ user }))
  },
  isMobile: false,
  setIsMobile: (isMobile: boolean) => set(() => ({ isMobile })),
  jwt: getJwt(),
  setJwt: (jwt) => {
    localStorage.setItem("jwt", jwt);
    set(() => ({ jwt }))
  },
  logout: () => {
    set({ jwt: null, user: null })
  }
}));
