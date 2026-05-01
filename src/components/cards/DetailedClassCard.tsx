import Link from "next/link";

interface DetailedClassCardProps {
  title: string;
  description: string;
  level: string;
  tempo: string;
  duration: string;
  actionText: string;
  actionHref: string;
  note?: string;
  scheduleSlug?: string;
}

export default function DetailedClassCard({
  title,
  description,
  level,
  tempo,
  duration,
  actionText,
  actionHref,
  note,
  scheduleSlug,
}: DetailedClassCardProps) {
  const resolvedHref = scheduleSlug
    ? `/ders-programi?type=${encodeURIComponent(scheduleSlug)}`
    : actionHref;

  return (
    <div className="class-card bg-surface-container-lowest border border-surface-dim rounded-2xl p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">
        <h3 className="font-h3 text-xl font-bold mb-3">{title}</h3>
      </div>
      <div className="flex-grow mb-6">
        <p className="text-sm mb-4 leading-relaxed">{description}</p>
      </div>
      <div className="flex flex-col gap-3 mt-auto">
        <Link
          href={resolvedHref}
          className="text-center bg-primary text-white font-button text-sm px-4 py-2.5 rounded-full hover:bg-orange-600 transition-colors w-full shadow-sm"
        >
          {actionText}
        </Link>
        {note && (
          <p className="text-[10px] text-center text-on-surface-variant mt-2 italic">
            {note}
          </p>
        )}
      </div>
    </div>
  );
}
