import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { ToastContext } from "./toast-core";
import type { ToastItem, ToastVariant } from "./toast-core";

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timeouts = useRef<Record<string, number>>({});

  useEffect(() => {
    return () => {
      Object.values(timeouts.current).forEach((t) => clearTimeout(t));
      timeouts.current = {};
    };
  }, []);

  const remove = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const timer = timeouts.current[id];
    if (timer) {
      clearTimeout(timer);
      delete timeouts.current[id];
    }
  }, []);

  const show = useCallback(
    (message: string, opts?: { variant?: ToastVariant; durationMs?: number }) => {
      const id = Math.random().toString(36).slice(2);
      const toast: ToastItem = {
        id,
        message,
        variant: opts?.variant ?? "info",
        durationMs: opts?.durationMs ?? 3000,
      };
      setToasts((prev) => {
        const exists = prev.some(
          (t) => t.message === toast.message && (t.variant ?? "info") === (toast.variant ?? "info")
        );
        if (exists) return prev;
        return [...prev, toast];
      });
      const timer = window.setTimeout(() => remove(id), toast.durationMs);
      timeouts.current[id] = timer;
    },
    [remove]
  );

  const value = useMemo(() => ({ show }), [show]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastViewport toasts={toasts} onClose={remove} />
    </ToastContext.Provider>
  );
}

export function ToastViewport({ toasts, onClose }: { toasts: ToastItem[]; onClose: (id: string) => void }) {
  return (
    <div className="toast-viewport" aria-live="polite" aria-atomic="true">
      {toasts.map((t) => (
        <div key={t.id} className={`toast-item toast-${t.variant ?? "info"}`} role="status">
          <span className="toast-message">{t.message}</span>
          <button className="toast-close" onClick={() => onClose(t.id)} aria-label="Close">
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
