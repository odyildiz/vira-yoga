import Link from "next/link";
import { Schedule } from "@/types";

interface Props {
  schedule: Schedule;
}

export default function ScheduleCard({ schedule }: Props) {
  return (
    <div
      className={`flex flex-col md:flex-row items-start md:items-stretch bg-surface p-5 rounded-xl border border-surface-dim hover:border-primary/30 transition-colors duration-300 ${schedule.opacity === 60 ? "opacity-60" : ""
        }`}
    >
      {/* Time Column */}
      <div className="w-full md:w-32 flex-shrink-0 mb-4 md:mb-0 border-b md:border-b-0 md:border-r border-surface-dim pb-4 md:pb-0 md:pr-4 flex flex-row md:flex-col justify-between items-center md:items-start">
        <div>
          <span className="font-h3 text-2xl text-on-background block leading-none md:mb-1">
            {schedule.startTime}
          </span>
          <span className="font-body-md text-xs text-on-surface-variant">
            {schedule.endTime}
          </span>
        </div>
        <div className="mt-0 md:mt-2 text-xs font-button text-outline flex items-center gap-1 bg-surface-container md:bg-transparent px-2 py-1 md:p-0 rounded-md md:rounded-none">
          <span className="material-symbols-outlined text-[14px]">schedule</span>{" "}
          {schedule.duration} dk
        </div>
      </div>

      {/* Info Column */}
      <div className="flex-1 md:pl-6 mb-4 md:mb-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
          <h4 className="font-h3 text-lg text-on-background">{schedule.title}</h4>
          <span className="inline-block bg-primary/10 text-primary font-label-caps text-[10px] px-2 py-1 rounded-full w-max">
            {schedule.level}
          </span>
        </div>
        <p className="font-body-md text-sm text-on-surface-variant mb-3 flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">person</span>{" "}
          Eğitmen: {schedule.instructor}
        </p>
      </div>

      {/* Actions Column */}
      <div className="w-full md:w-auto flex flex-row flex-wrap md:flex-col justify-end gap-3 md:pl-4 border-t md:border-t-0 border-surface-dim pt-4 md:pt-0 items-center md:items-end">
        <Link
          href="/ders-programi"
          className="flex-1 md:flex-none text-center bg-surface-container text-on-background font-button text-sm px-6 py-2 rounded-full hover:bg-surface-dim transition-colors w-full md:w-auto"
        >
          Detay
        </Link>
        <Link
          href="tel:+905551234567"
          className="flex-1 md:flex-none text-center bg-primary text-on-primary font-button text-sm px-6 py-2 rounded-full hover:bg-surface-tint transition-colors shadow-sm flex items-center justify-center gap-2 w-full md:w-auto"
        >
          <span className="material-symbols-outlined text-[16px]">call</span>
          <span>Bizi Ara</span>
        </Link>
        <Link
          href={`https://wa.me/905551234567?text=${encodeURIComponent(`Merhaba, ${schedule.title} dersi hakkında bilgi almak istiyorum.`)}`}
          target="_blank"
          className="flex-1 md:flex-none text-center bg-white border border-[#25D366] text-[#25D366] font-button text-sm px-6 py-2 rounded-full hover:bg-[#25D366]/5 transition-colors flex items-center justify-center gap-2 w-full md:w-auto"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.48-1.459-1.653-1.756-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          <span>WhatsApp&apos;tan Yaz</span>
        </Link>
      </div>
    </div>
  );
}
