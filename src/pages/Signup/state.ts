import { create } from "zustand";
interface ISignupState {
  isSubmitting: boolean;
  showPassword: boolean;
  showConfirmPassword: boolean;
  toggleIsSubmitting: () => void;
  toggleShowPassword: () => void;
  toggleShowConfirmPassword: () => void;
  setIsSubmitting: (val: boolean) => void;
}
export const useSignupStore = create<ISignupState>((set) => ({
  isSubmitting: false,
  showPassword: false,
  showConfirmPassword: false,
  setIsSubmitting: (val: boolean) => set(() => ({ isSubmitting: val })),
  toggleIsSubmitting: () =>
    set((state) => ({ isSubmitting: !state.isSubmitting })),
  toggleShowPassword: () =>
    set((state) => ({ showPassword: !state.showPassword })),
  toggleShowConfirmPassword: () =>
    set((state) => ({ showConfirmPassword: !state.showConfirmPassword })),
}));
