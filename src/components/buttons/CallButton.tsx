import React from 'react';
import Link from 'next/link';

interface CallButtonProps {
  phoneNumber?: string;
  label?: string;
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost';
}

export default function CallButton({
  phoneNumber = "+905555555555",
  label = "Bizi Ara",
  className = "",
  variant = 'primary'
}: CallButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-button rounded-full transition-colors duration-200";
  
  const variants = {
    primary: "bg-primary text-on-primary hover:bg-surface-tint shadow-sm transition-all px-6 py-3",
    outline: "border border-outline-variant text-on-surface hover:bg-surface-container transition-all px-6 py-3",
    ghost: "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all px-4 py-2"
  };

  const variantClasses = variants[variant];

  return (
    <Link 
      href={`tel:${phoneNumber}`} 
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      <span className="material-symbols-outlined text-[20px]">call</span>
      <span>{label}</span>
    </Link>
  );
}
