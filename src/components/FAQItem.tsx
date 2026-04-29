"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-surface-dim rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-surface-container-low transition-colors"
      >
        <span className="font-bold pr-4 text-sm">{question}</span>
        <span
          className="material-symbols-outlined text-primary transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          expand_more
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-on-surface-variant text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
