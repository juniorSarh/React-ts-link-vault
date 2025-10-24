import { createContext, useContext } from "react";

export type ToastVariant = "success" | "error" | "info" | "warning";

export type ToastItem = {
  id: string;
  message: string;
  variant?: ToastVariant;
  durationMs?: number;
};

export type ToastContextValue = {
  show: (message: string, opts?: { variant?: ToastVariant; durationMs?: number }) => void;
};

// Provide a safe default (no-op) so the context is never null at type level
export const ToastContext = createContext<ToastContextValue>({
  show: () => {},
});

export function useToast() {
  return useContext(ToastContext);
}
