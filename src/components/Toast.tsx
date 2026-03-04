"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { Box } from "@willow/ui-kit";
import { Check, X } from "lucide-react";

type ToastVariant = "success" | "error";

interface Toast {
  id: number;
  message: string;
  variant: ToastVariant;
}

interface ToastContextValue {
  showToast: (message: string, variant?: ToastVariant) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

let toastId = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, variant: ToastVariant = "success") => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message, variant }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast stack */}
      <Box
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        {toasts.map((toast) => (
          <Box
            key={toast.id}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 1.25,
              borderRadius: "8px",
              bgcolor: toast.variant === "success" ? "#059669" : "#DC2626",
              color: "white",
              fontSize: "13px",
              fontWeight: 500,
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              pointerEvents: "auto",
              animation: "slideIn 0.2s ease-out",
              "@keyframes slideIn": {
                from: { opacity: 0, transform: "translateY(8px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            {toast.variant === "success" ? (
              <Check size={14} strokeWidth={3} />
            ) : (
              <X size={14} strokeWidth={3} />
            )}
            {toast.message}
          </Box>
        ))}
      </Box>
    </ToastContext.Provider>
  );
}
