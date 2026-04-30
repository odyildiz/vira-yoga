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
        <div className="flex flex-wrap">
          <span className="inline-block bg-surface-dim text-on-surface-variant font-label-caps text-[10px] px-2 py-1 rounded-full mr-2 mb-2">
            {schedule.studio}
          </span>
        </div>
      </div>

      {/* Actions Column */}
      <div className="w-full md:w-auto flex flex-row md:flex-col justify-end gap-3 md:pl-4 border-t md:border-t-0 border-surface-dim pt-4 md:pt-0 items-center md:items-end">
        <button className="flex-1 md:flex-none text-center bg-primary text-on-primary font-button text-sm px-6 py-2 rounded-full hover:bg-surface-tint transition-colors shadow-sm">
          Bilgi Al
        </button>
        <Link
          href="https://wa.me/905551234567"
          target="_blank"
          className="flex-1 md:flex-none text-center bg-white border border-outline text-on-surface-variant font-button text-sm px-6 py-2 rounded-full hover:bg-surface transition-colors flex items-center justify-center gap-1"
        >
          WhatsApp
        </Link>
      </div>
    </div>
  );
}
