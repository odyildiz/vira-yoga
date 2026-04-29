import Link from "next/link";
import { fetchSchedules } from "@/lib/api";
import ScheduleCard from "./cards/ScheduleCard";

export default async function Schedule() {
  const schedules = await fetchSchedules();

  return (
    <section id="schedule" className="py-xxl px-gutter max-w-max_width mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-xl border-b border-surface-dim pb-4">
        <div className="flex-1">
          <h2 className="font-h2 text-h2 text-on-background">Bugünün Programı</h2>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Link
            href="/ders-programi"
            className="font-button text-button px-6 py-2 border border-outline rounded-full hover:bg-surface-container transition-colors duration-300"
          >
            Tüm Haftayı Gör
          </Link>
        </div>
      </div>
      <div className="space-y-4">
        {schedules.map((schedule) => (
          <ScheduleCard key={schedule.id} schedule={schedule} />
        ))}
      </div>
    </section>
  );
}
