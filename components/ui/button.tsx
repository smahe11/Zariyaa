import * as React from "react";
import clsx from "@/components/clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "outline";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

export function Button({ asChild, variant = "default", size = "md", className, children, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center px-4 py-2 font-medium shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-amber-600 text-white hover:bg-amber-700 focus:ring-amber-400",
    outline: "border border-slate-300 text-slate-800 hover:bg-slate-50"
  } as const;
  const sizes = {
    md: "h-10 rounded-lg",
    lg: "h-12 rounded-xl text-base px-5"
  } as const;

  if (asChild) {
    // @ts-ignore
    return React.cloneElement(children, {
      className: clsx(base, variants[variant], sizes[size], className, children.props?.className)
    });
  }
  return (
    <button className={clsx(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
