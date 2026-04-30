"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { WeeklyScheduleItem, ClassDetails } from "@/types";

interface Props {
  schedule: WeeklyScheduleItem[];
  classDetailsMap: Record<string, ClassDetails>;
}

export default function WeeklySchedule({ schedule, classDetailsMap }: Props) {
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filters, setFilters] = useState({
    level: "all",
    type: "all",
    teacher: "all",
  });

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClassId, setSelectedClassId] = useState<number | null>(null);

  const DAY_NAMES = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

  const dates = useMemo(() => {
    const today = new Date();
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() + i + currentWeekOffset * 7);
      const dayName = DAY_NAMES[d.getDay()];
      const dateStr =
        String(d.getDate()).padStart(2, "0") +
        "." +
        String(d.getMonth() + 1).padStart(2, "0") +
        "." +
        d.getFullYear();
      return { dateStr, dayName };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWeekOffset]);

  // Derive selected date and day name from index
  const selectedDate = dates[selectedIndex]?.dateStr ?? "";
  const selectedDayName = dates[selectedIndex]?.dayName ?? "";

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({ level: "all", type: "all", teacher: "all" });
  };

  const filteredSchedule = schedule.filter((item) => {
    return (
      item.day === selectedDayName &&
      (filters.level === "all" || item.level === filters.level) &&
      (filters.type === "all" || item.type === filters.type) &&
      (filters.teacher === "all" || item.teacher === filters.teacher)
    );
  });

  const hasClassesForDay = schedule.some((item) => item.day === selectedDayName);

  const openModal = (id: number) => {
    setSelectedClassId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedClassId(null);
    }, 300);
  };

  const selectedClass = schedule.find((i) => i.id === selectedClassId);
  const classDetails = selectedClass
    ? classDetailsMap[selectedClass.name] || classDetailsMap["Hatha Yoga"]
    : null;

  return (
    <>
      <div className="max-w-max_width mx-auto px-gutter py-xl pb-28 md:pb-xl">
        {/* Filters Section */}
        <section
          id="ScheduleFilters"
          className="mb-xl bg-surface p-6 rounded-xl border border-surface-dim"
        >
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Level Filter */}
              <div>
                <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-3 uppercase tracking-wider">
                  Seviye
                </h3>
                <select
                  value={filters.level}
                  onChange={(e) => handleFilterChange("level", e.target.value)}
                  className="w-full bg-surface-container-lowest border border-outline text-on-background rounded-lg px-4 py-2 font-body-md text-sm focus:ring-primary focus:border-primary"
                >
                  <option value="all">Tüm Seviyeler</option>
                  <option value="Yeni Başlayan">Yeni Başlayan</option>
                  <option value="Her Seviye">Her Seviye</option>
                  <option value="Orta Seviye">Orta Seviye</option>
                </select>
              </div>

              {/* Class Type Filter */}
              <div>
                <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-3 uppercase tracking-wider">
                  Ders Türü
                </h3>
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange("type", e.target.value)}
                  className="w-full bg-surface-container-lowest border border-outline text-on-background rounded-lg px-4 py-2 font-body-md text-sm focus:ring-primary focus:border-primary"
                >
                  <option value="all">Tüm Dersler</option>
                  <option value="Hatha">Hatha</option>
                  <option value="Vinyasa">Vinyasa</option>
                  <option value="Yin">Yin</option>
                  <option value="Nefes">Nefes</option>
                  <option value="Meditasyon">Meditasyon</option>
                </select>
              </div>

              {/* Teacher Filter */}
              <div>
                <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-3 uppercase tracking-wider">
                  Eğitmen
                </h3>
                <select
                  value={filters.teacher}
                  onChange={(e) => handleFilterChange("teacher", e.target.value)}
                  className="w-full bg-surface-container-lowest border border-outline text-on-background rounded-lg px-4 py-2 font-body-md text-sm focus:ring-primary focus:border-primary"
                >
                  <option value="all">Tüm Eğitmenler</option>
                  <option value="Ayşe">Ayşe</option>
                  <option value="Mert">Mert</option>
                  <option value="Zeynep">Zeynep</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Weekly Schedule Section */}
        <section id="WeeklySchedule">
          <div className="mb-8">
            <h2 className="font-h2 text-h2 text-on-background">Haftalık Program</h2>
            <p className="font-body-md text-on-surface-variant mt-2">
              Katılmak istediğin ders için önceden bilgi almanı öneririz.
            </p>
          </div>

          {/* Date Tabs */}
          <div className="flex items-center gap-2 pb-6 border-b border-surface-dim mb-8">
            <button
              onClick={() => { setCurrentWeekOffset((prev) => prev - 1); setSelectedIndex(0); }}
              className="p-2 rounded-full hover:bg-surface-container border border-transparent hover:border-outline transition-colors text-on-surface-variant flex-shrink-0 flex items-center justify-center"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="flex overflow-x-auto hide-scrollbar gap-3 flex-1 scroll-smooth min-w-0">
              {dates.map((dateObj, index) => {
                const isActive = index === selectedIndex;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`filter-date-btn whitespace-nowrap flex flex-col items-center justify-center px-4 py-2 md:px-6 md:py-3 border rounded-xl transition-colors duration-200 min-w-[80px] md:min-w-[120px] ${isActive
                        ? "active text-white bg-primary border-primary"
                        : "text-on-surface-variant hover:bg-surface-container bg-surface-container-lowest border-outline"
                      }`}
                  >
                    <span className="font-label-caps text-[10px] uppercase tracking-wider opacity-80 mb-1">
                      {dateObj.dayName}
                    </span>
                    <span className="font-button text-sm">{dateObj.dateStr}</span>
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => { setCurrentWeekOffset((prev) => prev + 1); setSelectedIndex(0); }}
              className="p-2 rounded-full hover:bg-surface-container border border-transparent hover:border-outline transition-colors text-on-surface-variant flex-shrink-0 flex items-center justify-center"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>

          <div className="space-y-12">
            {filteredSchedule.length === 0 ? (
              !hasClassesForDay ? (
                <div className="text-center py-12 bg-surface-container-lowest rounded-lg border border-surface-dim">
                  <p className="font-body-md text-on-surface-variant mb-4">
                    Bugün için planlanmış ders bulunmuyor.
                  </p>
                </div>
              ) : (
                <div className="text-center py-12 bg-surface-container-low rounded-xl border border-surface-dim">
                  <p className="font-body-md text-on-surface-variant mb-4">
                    Seçtiğiniz kriterlere uygun ders bulunamadı.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="text-primary font-button underline"
                  >
                    Filtreleri Temizle
                  </button>
                </div>
              )
            ) : (
              <div className="day-group">
                <h3 className="font-h3 text-xl text-primary border-b border-surface-dim pb-2 mb-6">
                  {selectedDayName}, {selectedDate}
                </h3>
                <div className="space-y-4">
                  {filteredSchedule.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col md:flex-row items-start md:items-stretch bg-surface p-5 rounded-xl border border-surface-dim hover:border-primary/30 transition-colors duration-300"
                    >
                      {/* Time Column */}
                      <div className="w-full md:w-32 flex-shrink-0 mb-4 md:mb-0 border-b md:border-b-0 md:border-r border-surface-dim pb-4 md:pb-0 md:pr-4 flex flex-row md:flex-col justify-between items-center md:items-start">
                        <div>
                          <span className="font-h3 text-2xl text-on-background block leading-none md:mb-1">
                            {item.start}
                          </span>
                          <span className="font-body-md text-xs text-on-surface-variant">
                            {item.start} - {item.end}
                          </span>
                        </div>
                        <div className="mt-0 md:mt-2 text-xs font-button text-outline flex items-center gap-1 bg-surface-container md:bg-transparent px-2 py-1 md:p-0 rounded-md md:rounded-none">
                          <span className="material-symbols-outlined text-[14px]">
                            schedule
                          </span>{" "}
                          60 dk
                        </div>
                      </div>

                      {/* Info Column */}
                      <div className="flex-1 md:pl-6 mb-4 md:mb-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <h4 className="font-h3 text-lg text-on-background">
                            {item.name}
                          </h4>
                          <span className="inline-block bg-primary/10 text-primary font-label-caps text-[10px] px-2 py-1 rounded-full w-max">
                            {item.level}
                          </span>
                        </div>
                        <p className="font-body-md text-sm text-on-surface-variant mb-3 flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">
                            person
                          </span>{" "}
                          Eğitmen: {item.teacher}
                        </p>
                        <div className="flex flex-wrap">
                          {item.tags.slice(0, 2).map((tag, idx) => (
                            <span
                              key={idx}
                              className="inline-block bg-surface-dim text-on-surface-variant font-label-caps text-[10px] px-2 py-1 rounded-full mr-2 mb-2"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions Column */}
                      <div className="w-full md:w-auto flex flex-row md:flex-col justify-end gap-3 md:pl-4 border-t md:border-t-0 border-surface-dim pt-4 md:pt-0 items-center md:items-end">
                        <button
                          onClick={() => openModal(item.id)}
                          className="flex-1 md:flex-none text-center bg-primary text-on-primary font-button text-sm px-6 py-2 rounded-full hover:bg-surface-tint transition-colors shadow-sm"
                        >
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
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Class Detail Modal */}
      {isModalOpen && selectedClass && classDetails && (
        <div
          id="modal-overlay"
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-end md:items-center justify-center transition-opacity"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            id="modal-content"
            className="bg-surface w-full md:w-[500px] rounded-t-2xl md:rounded-2xl shadow-2xl transition-transform duration-300 max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span
                    id="modal-level"
                    className="inline-block bg-secondary/10 text-secondary font-label-caps text-[10px] px-2 py-1 rounded-full mb-2"
                  >
                    {selectedClass.level}
                  </span>
                  <h3 id="modal-title" className="font-h3 text-2xl text-on-background">
                    {selectedClass.name}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  className="text-on-surface-variant hover:text-primary p-1 bg-surface-container rounded-full"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-surface-dim">
                <div>
                  <span className="font-label-caps text-xs text-outline block mb-1">
                    Eğitmen
                  </span>
                  <p className="font-button text-sm text-on-background">
                    {selectedClass.teacher}
                  </p>
                </div>
                <div>
                  <span className="font-label-caps text-xs text-outline block mb-1">
                    Saat
                  </span>
                  <p className="font-button text-sm text-on-background">
                    {selectedClass.day}, {selectedClass.start} - {selectedClass.end}
                  </p>
                </div>
                <div>
                  <span className="font-label-caps text-xs text-outline block mb-1">
                    Süre
                  </span>
                  <p className="font-button text-sm text-on-background">60 Dk</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-body-md text-sm text-on-surface-variant mb-4">
                  {classDetails.description}
                </p>
                <h4 className="font-button text-sm text-on-background mb-1">
                  Kimler için uygun?
                </h4>
                <p className="font-body-md text-sm text-on-surface-variant">
                  {classDetails.suitableFor}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {classDetails.ctas.map((cta, idx) => (
                  <Link
                    key={idx}
                    href={cta.link}
                    target={cta.link.startsWith("http") ? "_blank" : "_self"}
                    className={`w-full text-center font-button text-sm px-6 py-3 rounded-full transition-colors ${cta.type === "primary"
                        ? "bg-primary text-on-primary hover:bg-surface-tint"
                        : "bg-white border border-outline text-on-surface-variant hover:bg-surface"
                      }`}
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
