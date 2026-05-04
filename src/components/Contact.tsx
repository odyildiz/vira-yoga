import { fetchContacts } from "@/lib/api";
import ContactCard from "./cards/ContactCard";

interface Props {
  title?: string;
  description?: string;
}

export default async function Contact({ title = "İletişim", description = "Sorularınız için bizimle iletişime geçebilir veya stüdyomuzu ziyaret edebilirsiniz." }: Props) {
  const contacts = await fetchContacts();

  return (
    <section id="contact" className="py-xxl bg-surface px-gutter">
      <div className="max-w-max_width mx-auto">
        <div className="text-center mb-xl">
          <h2 className="font-h2 text-h2 text-on-background mb-4">{title}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </section>
  );
}
