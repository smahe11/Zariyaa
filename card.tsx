import * as React from "react";
import clsx from "@/components/clsx";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx("bg-white border border-amber-100", className)}>{children}</div>;
}
export function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx("px-4 pt-4", className)}>{children}</div>;
}
export function CardTitle({ className, children }: { className?: string; children: React.ReactNode }) {
  return <h4 className={clsx("font-semibold", className)}>{children}</h4>;
}
export function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx("px-4 pb-4", className)}>{children}</div>;
}
