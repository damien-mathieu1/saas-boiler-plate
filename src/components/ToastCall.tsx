"use client";

import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

export function ToastCall({
  message,
  variant,
  title,
  children,
}: {
  message: string;
  variant?: "default" | "destructive";
  title?: string;
  children?: React.ReactNode;
}) {
  const { toast } = useToast();

  useEffect(() => {
    if (message) {
      toast({
        variant: variant || "default",
        title: title || "Uh oh! Something went wrong.",
        description: message,
      });
    }
  }, [message, toast]);

  return <>{children}</>;
}
