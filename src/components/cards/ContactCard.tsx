import Link from "next/link";
import { ContactInfo } from "@/types";
import CallButton from "../buttons/CallButton";
import WhatsAppButton from "../buttons/WhatsAppButton";

interface Props {
  contact: ContactInfo;
}

export default function ContactCard({ contact }: Props) {
  const { action } = contact;

  // Extract phone number for components if it's a phone link
  const rawPhone = action.href.startsWith("tel:") ? action.href.replace("tel:", "") : "+905551234567";
  const waPhone = rawPhone.replace("+", "");

  return (
    <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant text-center flex flex-col items-center">
      <span className="material-symbols-outlined text-primary text-4xl mb-4 block">
        {contact.icon}
      </span>
      <h3 className="font-h3 text-xl text-on-background mb-2">{contact.title}</h3>
      <p className="text-on-surface-variant text-sm mb-4 whitespace-pre-wrap">
        {contact.details}
      </p>

      {/* Primary variant is typically for Call */}
      {action.variant === "primary" ? (
        <div className="mt-auto flex flex-col gap-3 w-full">
          <CallButton 
            phoneNumber={rawPhone} 
            label={action.text || "Bizi Ara"} 
            className="w-full" 
            variant="primary"
          />
          <WhatsAppButton 
            phoneNumber={waPhone} 
            label="WhatsApp'tan Yaz" 
            className="w-full" 
            variant="outline"
          />
        </div>
      ) : (
        <Link
          href={action.href}
          target={action.target}
          className="mt-auto w-full bg-surface-container-lowest text-on-surface border border-outline-variant font-button px-6 py-3 rounded-full hover:bg-surface-container transition-all duration-300 flex items-center justify-center gap-2"
        >
          {action.icon && (
            <span className="material-symbols-outlined text-[20px]">
              {action.icon}
            </span>
          )}
          {action.text}
        </Link>
      )}
    </div>
  );
}
