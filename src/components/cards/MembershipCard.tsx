import Link from "next/link";
import { Membership } from "@/types";

interface Props {
  membership: Membership;
}

export default function MembershipCard({ membership }: Props) {
  const isHighlighted = !!membership.highlight;

  return (
    <div
      className={`rounded-xl p-8 flex flex-col h-full ${
        isHighlighted
          ? "bg-surface-container-low border-2 border-primary relative shadow-lg transform md:-translate-y-4"
          : "bg-surface-container-lowest border border-outline-variant hover:border-primary transition-colors duration-300"
      }`}
    >
      {isHighlighted && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-on-primary font-label-caps text-xs px-4 py-1 rounded-full tracking-wider whitespace-nowrap">
          {membership.highlight}
        </div>
      )}
      <h3 className="font-h3 text-2xl text-on-background mb-2">
        {membership.title}
      </h3>
      <p className="text-on-surface-variant text-sm mb-6">
        {membership.description}
      </p>
      <div className="text-4xl font-serif text-primary mb-6">
        {membership.price}
        {membership.priceSuffix && (
          <span className="text-lg text-on-surface-variant font-body-md">
            {membership.priceSuffix}
          </span>
        )}
      </div>
      <ul className="space-y-4 mb-8 flex-1">
        {membership.features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-center space-x-3 text-on-surface-variant"
          >
            <span className="material-symbols-outlined text-primary text-sm">
              check_circle
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-3 w-full mt-auto">
        <Link
          href="tel:+905551234567"
          className={`w-full text-center font-button text-button px-6 py-3 rounded-full transition-colors duration-300 block ${
            isHighlighted
              ? "bg-primary text-on-primary hover:bg-surface-tint"
              : "border border-primary text-primary hover:bg-primary/5"
          }`}
        >
          Bizi Ara
        </Link>
        <Link
          href={`https://wa.me/905551234567?text=${encodeURIComponent(`Merhaba, ${membership.title} paketiniz hakkında bilgi almak istiyorum.`)}`}
          target="_blank"
          className="w-full text-center font-button text-button px-6 py-3 rounded-full border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/5 transition-colors duration-300 flex items-center justify-center gap-1"
        >
          WhatsApp'tan Yaz
        </Link>
      </div>
    </div>
  );
}
