import { storageBaseUrl } from "@/lib/api";
import { Teacher } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: Props) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div className="bg-surface-container-lowest border border-surface-dim rounded-3xl p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow text-center relative overflow-hidden">
      {/* Larger image container */}
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-surface-container-high mx-auto mb-6 flex items-center justify-center border-[6px] border-primary/10 overflow-hidden relative shrink-0">
        {teacher.image ? (
          <Image
            src={`${storageBaseUrl}${teacher.image}`}
            alt={teacher.name}
            fill
            className="object-cover"
          />
        ) : (
          <span className="text-5xl text-primary font-bold font-serif">
            {getInitials(teacher.name)}
          </span>
        )}
      </div>

      <h3 className="font-h3 text-2xl font-bold mb-1 text-on-background">
        {teacher.name}
      </h3>
      <p className="text-primary font-semibold text-sm mb-5">
        {teacher.specialty}
      </p>
      
      {teacher.bio && (
        <p className="text-on-surface-variant text-sm mb-8 flex-grow leading-relaxed">
          {teacher.bio}
        </p>
      )}



      {/* View Schedule Button */}
      <div className="mt-auto mb-6">
        <Link
          href={`/ders-programi?teacher=${encodeURIComponent(teacher.name.split(" ")[0])}`}
          className="inline-block border border-primary text-primary font-button text-sm px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-colors"
        >
          Programı Gör
        </Link>
      </div>

      {/* Social Media Buttons */}
      <div className="flex justify-center gap-4 border-t border-surface-dim pt-6">
        {teacher.socials.instagram && (
          <a
            href={teacher.socials.instagram}
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        )}
        {teacher.socials.linkedin && (
          <a
            href={teacher.socials.linkedin}
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        )}
        {teacher.socials.twitter && (
          <a
            href={teacher.socials.twitter}
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-colors"
            aria-label="X (Twitter)"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </a>
        )}
        {teacher.socials.facebook && (
          <a
            href={teacher.socials.facebook}
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
