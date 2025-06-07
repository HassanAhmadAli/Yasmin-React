import { create } from "zustand";
interface ILoginState {
  isSubmitting: boolean;
  showPassword: boolean;
  toggleIsSubmitting: () => void;
  toggleShowPassword: () => void;
  setIsSubmitting: (val: boolean) => void;
}
export const useLoginStore = create<ILoginState>((set) => ({
  isSubmitting: false,
  showPassword: false,
  setIsSubmitting: (val: boolean) => set(() => ({ isSubmitting: val })),
  toggleIsSubmitting: () =>
    set((state) => ({ isSubmitting: !state.isSubmitting })),
  toggleShowPassword: () =>
    set((state) => ({ showPassword: !state.showPassword })),
}));
