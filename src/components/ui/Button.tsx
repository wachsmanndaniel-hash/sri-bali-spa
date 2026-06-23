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
      "bg-[#C9A56A] text-white hover:bg-[#B89357] shadow-lg hover:shadow-xl",
    outline:
      "border border-white bg-transparent text-white hover:bg-white hover:text-[#2B2B2B]",
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