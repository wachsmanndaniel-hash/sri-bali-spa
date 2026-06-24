import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
const variants = {
  primary:
    "border border-[#C9A56A]/40 bg-black/20 text-white backdrop-blur-md shadow-[0_0_10px_rgba(201,165,106,0.5),0_0_25px_rgba(201,165,106,0.25)] hover:border-[#C9A56A]/70 hover:shadow-[0_0_20px_rgba(201,165,106,0.8),0_0_50px_rgba(201,165,106,0.4)]",

  outline:
    "border border-white/20 bg-black/20 text-white backdrop-blur-md shadow-[0_0_8px_rgba(201,165,106,0.15)] hover:border-[#C9A56A]/50 hover:shadow-[0_0_15px_rgba(201,165,106,0.35),0_0_35px_rgba(201,165,106,0.15)]",
};

  return (
    <Link
      href={href}
      className={`
        inline-flex
        min-h-[58px]
        min-w-[230px]
        items-center
        justify-center
        rounded-full
        px-10
        py-5
        text-lg
        font-medium
        leading-none
        tracking-wide
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        active:scale-95
        ${variants[variant]}
        ${className}
      `}
    >
      <span className="whitespace-nowrap">
        {children}
      </span>
    </Link>
  );
}