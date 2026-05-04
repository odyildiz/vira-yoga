"use client";

import { useState } from "react";
import Link from "next/link";
import ScheduleCard from "./cards/ScheduleCard";
import { Schedule } from "@/types";

interface Props {
  schedules: Schedule[];
}

export default function DailyScheduleClient({ schedules }: Props) {
  const [currentOffset, setCurrentOffset] = useState(0);

  const today = new Date();
  const currentDate = new Date(today);
  currentDate.setDate(today.getDate() + currentOffset);

  const formatDay = (date: Date) => {
    const days = [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
    ];
    return days[date.getDay()];
  };

  const formatDateStr = (date: Date) => {
    return `${date.getDate()} ${[
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık",
      ][date.getMonth()]
      }`;
  };

  const currentDayName = formatDay(currentDate);

  // Filter schedules based on the day. 
  // For the mock, we assign schedules to days or just filter by some logic.
  // Since original Schedule type has no day, we will just use the dayName to filter if it had one,
  // but for the sake of the mock, we can rotate the schedules or assign them.
  // Let's create a predictable subset of schedules for each day.
  const displaySchedules = schedules.filter((_, idx) => {
    const dayIndex = currentDate.getDay();
    // A simple mock logic to vary the schedule per day
    return (idx + dayIndex) % 2 === 0 || schedules.length <= 2;
  });

  // If array is empty, show at least one
  const finalSchedules = displaySchedules.length > 0 ? displaySchedules : schedules.slice(0, 1);

  return (
    <section id="schedule" className="py-xxl px-gutter max-w-max_width mx-auto">
      <div className="text-center mb-xl">
        <h2 className="font-h2 text-h2 text-on-background mb-4">Program</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-xl border-b border-surface-dim pb-4">
        <div className="flex-1 flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 w-[300px] md:w-[360px] mx-auto md:mx-0 shrink-0">
            <button
              onClick={() => setCurrentOffset((prev) => prev - 1)}
              className="p-2 rounded-full hover:bg-surface-container border border-transparent hover:border-outline transition-colors text-on-surface-variant flex items-center justify-center shrink-0"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="flex justify-center items-center px-1 min-w-0">
              <h2 className="font-h2 text-lg md:text-2xl text-on-background text-center leading-tight truncate w-full">
                {currentOffset === 0
                  ? "Bugünün Programı"
                  : `${formatDateStr(currentDate)} ${currentDayName}`}
              </h2>
            </div>
            <button
              onClick={() => setCurrentOffset((prev) => prev + 1)}
              className="p-2 rounded-full hover:bg-surface-container border border-transparent hover:border-outline transition-colors text-on-surface-variant flex items-center justify-center shrink-0"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-6 md:mt-0 w-full md:w-auto justify-center md:justify-end">
          <Link
            href="/ders-programi"
            className="font-button text-button px-6 py-2 border border-outline rounded-full hover:bg-surface-container transition-colors duration-300"
          >
            Tüm Haftayı Gör
          </Link>
        </div>
      </div>
      <div className="space-y-4">
        {finalSchedules.map((schedule) => (
          <ScheduleCard key={schedule.id} schedule={schedule} />
        ))}
      </div>
    </section>
  );
}
