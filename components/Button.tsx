"use client";

import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles = `
    relative inline-block px-6 py-3 rounded-xl 
    bg-brand text-white font-medium text-sm
    transition-all duration-300
    hover:scale-105
    hover:shadow-lg hover:shadow-blue-500/20
    active:scale-95
  `;

  // 🔗 ако има href → Link
  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${className}`}>
        {children}
      </Link>
    );
  }

  // 🔘 ако нема → button
  return (
    <button onClick={onClick} className={`${baseStyles} ${className}`}>
      {children}
    </button>
  );
}