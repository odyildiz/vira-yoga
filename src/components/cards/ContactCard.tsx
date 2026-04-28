import Link from "next/link";
import { ContactInfo } from "@/types";

interface Props {
  contact: ContactInfo;
}

export default function ContactCard({ contact }: Props) {
  const { action } = contact;

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
          <Link
            href={action.href}
            target={action.target}
            className="w-full bg-primary text-on-primary font-button px-6 py-3 rounded-full hover:bg-surface-tint transition-all duration-300 shadow-md flex items-center justify-center gap-2"
          >
            {action.icon && (
              <span className="material-symbols-outlined text-[20px]">
                {action.icon}
              </span>
            )}
            {action.text}
          </Link>
          {/* Mocked WhatsApp link if primary (custom logic based on HTML structure) */}
          <Link
            href="https://wa.me/905551234567"
            target="_blank"
            className="w-full bg-green-600 text-white font-button px-6 py-3 rounded-full hover:bg-green-700 transition-all duration-300 shadow-md flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.48-1.459-1.653-1.756-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            WhatsApp&apos;tan Yaz
          </Link>
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
