"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { WeeklyScheduleItem, ClassDetails } from "@/types";

interface Props {
  schedule: WeeklyScheduleItem[];
  classDetailsMap: Record<string, ClassDetails>;
}

const DAY_NAMES = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
const MONTH_NAMES = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

function ScheduleContent({ schedule, classDetailsMap }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filters = {
    level: searchParams.get("level") || "all",
    type: searchParams.get("type") || "all",
    teacher: searchParams.get("teacher") || "all",
  };

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    const params = new URLSearchParams(searchParams.toString());
    
    if (newFilters.level !== "all") params.set("level", newFilters.level);
    else params.delete("level");
    
    if (newFilters.type !== "all") params.set("type", newFilters.type);
    else params.delete("type");
    
    if (newFilters.teacher !== "all") params.set("teacher", newFilters.teacher);
    else params.delete("teacher");
    
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const resetFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("level");
    params.delete("type");
    params.delete("teacher");
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const [viewMode, setViewMode] = useState<"daily" | "monthly">("daily");

  const [selectedDateObj, setSelectedDateObj] = useState<Date>(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  });

  const [monthlyBaseDate, setMonthlyBaseDate] = useState<Date>(() => {
    const d = new Date();
    d.setDate(1);
    d.setHours(0, 0, 0, 0);
    return d;
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== "daily") return;
      if (e.key === "ArrowLeft") {
        setSelectedDateObj((prev) => {
          const newDate = new Date(prev);
          newDate.setDate(prev.getDate() - 1);
          return newDate;
        });
      } else if (e.key === "ArrowRight") {
        setSelectedDateObj((prev) => {
          const newDate = new Date(prev);
          newDate.setDate(prev.getDate() + 1);
          return newDate;
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewMode]);

  const dailyDates = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(selectedDateObj);
      d.setDate(selectedDateObj.getDate() - 3 + i);
      const dayName = DAY_NAMES[d.getDay()];
      const dateStr =
        String(d.getDate()).padStart(2, "0") +
        "." +
        String(d.getMonth() + 1).padStart(2, "0") +
        "." +
        d.getFullYear();
      return { dateObj: d, dateStr, dayName };
    });
  }, [selectedDateObj]);

  const monthDays = useMemo(() => {
    const year = monthlyBaseDate.getFullYear();
    const month = monthlyBaseDate.getMonth();
    const days: (Date | null)[] = [];
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOffset = firstDay === 0 ? 6 : firstDay - 1;

    for (let i = 0; i < firstDayOffset; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const d = new Date(year, month, i);
      d.setHours(0,0,0,0);
      days.push(d);
    }
    return days;
  }, [monthlyBaseDate]);

  const hasClassOnDayName = (dayName: string) => {
    return schedule.some(item =>
      item.day === dayName &&
      (filters.level === "all" || item.level === filters.level) &&
      (filters.type === "all" || item.type === filters.type) &&
      (filters.teacher === "all" || item.teacher === filters.teacher)
    );
  };

  const selectedDayName = DAY_NAMES[selectedDateObj.getDay()];
  const selectedDateStr = String(selectedDateObj.getDate()).padStart(2, "0") + "." + String(selectedDateObj.getMonth() + 1).padStart(2, "0") + "." + selectedDateObj.getFullYear();

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClassId, setSelectedClassId] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

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

  const hasActiveFilters = filters.level !== "all" || filters.type !== "all" || filters.teacher !== "all";

  return (
    <>
      <div className="max-w-max_width mx-auto px-gutter py-xl pb-28 md:pb-xl">
        {/* Filters Section */}
        <section
          id="ScheduleFilters"
          className="mb-xl bg-surface p-4 md:p-6 rounded-xl border border-surface-dim"
        >
          <div className="grid grid-cols-3 gap-3 md:gap-6">
            {/* Level Filter */}
            <div>
              <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-wider text-[10px] md:text-xs">
                Seviye
              </h3>
              <select
                value={filters.level}
                onChange={(e) => handleFilterChange("level", e.target.value)}
                className="w-full bg-surface-container-lowest border border-outline text-on-background rounded-lg px-2 md:px-4 py-2 font-body-md text-xs md:text-sm focus:ring-primary focus:border-primary"
              >
                <option value="all">Tümü</option>
                <option value="Başlangıç">Başlangıç</option>
                <option value="Her Seviye">Her Seviye</option>
                <option value="Orta Seviye">Orta Seviye</option>
              </select>
            </div>

            {/* Class Type Filter */}
            <div>
              <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-wider text-[10px] md:text-xs">
                Ders Türü
              </h3>
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange("type", e.target.value)}
                className="w-full bg-surface-container-lowest border border-outline text-on-background rounded-lg px-2 md:px-4 py-2 font-body-md text-xs md:text-sm focus:ring-primary focus:border-primary"
              >
                <option value="all">Tümü</option>
                <option value="Hatha">Hatha</option>
                <option value="Vinyasa">Vinyasa</option>
                <option value="Yin">Yin</option>
                <option value="Nefes">Nefes</option>
                <option value="Meditasyon">Meditasyon</option>
              </select>
            </div>

            {/* Teacher Filter */}
            <div>
              <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-wider text-[10px] md:text-xs">
                Eğitmen
              </h3>
              <select
                value={filters.teacher}
                onChange={(e) => handleFilterChange("teacher", e.target.value)}
                className="w-full bg-surface-container-lowest border border-outline text-on-background rounded-lg px-2 md:px-4 py-2 font-body-md text-xs md:text-sm focus:ring-primary focus:border-primary"
              >
                <option value="all">Tümü</option>
                <option value="Ayşe">Ayşe</option>
                <option value="Mert">Mert</option>
                <option value="Zeynep">Zeynep</option>
              </select>
            </div>
          </div>
        </section>

        {/* Weekly Schedule Section */}
        <section id="WeeklySchedule">
          <div className="mb-6">
            <div className="flex flex-row items-center justify-between gap-4">
              <h2 className="font-h2 text-2xl md:text-h2 text-on-background">Ders Programı</h2>
              
              {/* View Mode Toggle */}
              <div className="flex bg-surface-container-low rounded-lg p-1 border border-surface-dim shrink-0">
                <button
                  onClick={() => setViewMode("daily")}
                  className={`px-3 md:px-4 py-1.5 md:py-2 rounded-md font-button text-xs md:text-sm transition-colors ${viewMode === "daily" ? "bg-primary text-white shadow-sm" : "text-on-surface-variant hover:bg-surface-container"}`}
                >
                  Günlük
                </button>
                <button
                  onClick={() => setViewMode("monthly")}
                  className={`px-3 md:px-4 py-1.5 md:py-2 rounded-md font-button text-xs md:text-sm transition-colors ${viewMode === "monthly" ? "bg-primary text-white shadow-sm" : "text-on-surface-variant hover:bg-surface-container"}`}
                >
                  Aylık
                </button>
              </div>
            </div>
          </div>

          {/* Filter Summary */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 mb-4 p-3 bg-surface-container-low rounded-lg border border-surface-dim">
              <span className="material-symbols-outlined text-[16px] text-on-surface-variant shrink-0">filter_alt</span>
              <div className="flex flex-wrap gap-1.5 flex-1">
                {filters.level !== "all" && (
                  <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-button px-2.5 py-1 rounded-full border border-primary/20">
                    {filters.level}
                    <button onClick={() => handleFilterChange("level", "all")} className="hover:opacity-70 transition-opacity ml-0.5">
                      <span className="material-symbols-outlined text-[13px]">close</span>
                    </button>
                  </span>
                )}
                {filters.type !== "all" && (
                  <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-button px-2.5 py-1 rounded-full border border-primary/20">
                    {filters.type}
                    <button onClick={() => handleFilterChange("type", "all")} className="hover:opacity-70 transition-opacity ml-0.5">
                      <span className="material-symbols-outlined text-[13px]">close</span>
                    </button>
                  </span>
                )}
                {filters.teacher !== "all" && (
                  <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-button px-2.5 py-1 rounded-full border border-primary/20">
                    {filters.teacher}
                    <button onClick={() => handleFilterChange("teacher", "all")} className="hover:opacity-70 transition-opacity ml-0.5">
                      <span className="material-symbols-outlined text-[13px]">close</span>
                    </button>
                  </span>
                )}
              </div>
              <button
                onClick={resetFilters}
                className="text-xs text-on-surface-variant hover:text-primary font-button flex items-center gap-0.5 transition-colors shrink-0"
              >
                <span className="material-symbols-outlined text-[14px]">delete_sweep</span>
                <span className="hidden sm:inline">Temizle</span>
              </button>
            </div>
          )}

          {/* Date Selector */}
          <div className="mb-8">
            {viewMode === "daily" ? (
              <div className="flex items-center gap-2 pb-4 border-b border-surface-dim md:justify-center">
                <button
                  onClick={() => {
                    setSelectedDateObj((prev) => {
                      const newDate = new Date(prev);
                      newDate.setDate(prev.getDate() - 1);
                      return newDate;
                    });
                  }}
                  className="p-2 rounded-full hover:bg-surface-container border border-transparent hover:border-outline transition-colors text-on-surface-variant flex-shrink-0 flex items-center justify-center"
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>

                {/* Mobile Single Day View */}
                <div className="flex md:hidden flex-1 justify-center items-center py-2">
                  <button className="flex flex-col items-center justify-center px-6 py-3 border rounded-xl active text-white bg-primary border-primary min-w-[120px]">
                    <span className="font-label-caps text-[10px] uppercase tracking-wider opacity-80 mb-1">
                      {selectedDayName}
                    </span>
                    <span className="font-button text-sm">{selectedDateStr}</span>
                    {hasClassOnDayName(selectedDayName) && (
                      <span className="w-1.5 h-1.5 rounded-full mt-1 bg-white"></span>
                    )}
                  </button>
                </div>

                {/* Desktop 7-Day View */}
                <div className="hidden md:flex overflow-x-auto hide-scrollbar gap-2 flex-1 scroll-smooth min-w-0 py-2 justify-center">
                  {dailyDates.map((dateItem, index) => {
                    const isActive = dateItem.dateObj.getTime() === selectedDateObj.getTime();
                    const hasClass = hasClassOnDayName(dateItem.dayName);
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedDateObj(dateItem.dateObj)}
                        className={`filter-date-btn whitespace-nowrap flex flex-col items-center justify-center px-4 py-2 md:px-6 md:py-3 border rounded-xl transition-colors duration-200 min-w-[80px] md:min-w-[120px] ${
                          isActive
                            ? "active text-white bg-primary border-primary"
                            : "text-on-surface-variant hover:bg-surface-container bg-surface-container-lowest border-outline"
                        }`}
                      >
                        <span className="font-label-caps text-[10px] uppercase tracking-wider opacity-80 mb-1">
                          {dateItem.dayName}
                        </span>
                        <span className="font-button text-sm">{dateItem.dateStr}</span>
                        {hasClass && (
                          <span className={`w-1.5 h-1.5 rounded-full mt-1 ${isActive ? "bg-white" : "bg-primary"}`}></span>
                        )}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => {
                    setSelectedDateObj((prev) => {
                      const newDate = new Date(prev);
                      newDate.setDate(prev.getDate() + 1);
                      return newDate;
                    });
                  }}
                  className="p-2 rounded-full hover:bg-surface-container border border-transparent hover:border-outline transition-colors text-on-surface-variant flex-shrink-0 flex items-center justify-center"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            ) : (
              <div className="bg-surface p-4 md:p-6 rounded-xl border border-surface-dim">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => {
                      const newDate = new Date(monthlyBaseDate);
                      newDate.setMonth(monthlyBaseDate.getMonth() - 1);
                      setMonthlyBaseDate(newDate);
                    }}
                    className="p-1.5 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant"
                  >
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <h3 className="font-h3 text-lg">
                    {MONTH_NAMES[monthlyBaseDate.getMonth()]} {monthlyBaseDate.getFullYear()}
                  </h3>
                  <button
                    onClick={() => {
                      const newDate = new Date(monthlyBaseDate);
                      newDate.setMonth(monthlyBaseDate.getMonth() + 1);
                      setMonthlyBaseDate(newDate);
                    }}
                    className="p-1.5 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant"
                  >
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  {["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"].map(day => (
                    <div key={day} className="text-[10px] font-label-caps text-on-surface-variant py-1">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {monthDays.map((dateObj, i) => {
                    if (!dateObj) return <div key={`empty-${i}`} className="p-2"></div>;
                    const isActive = dateObj.getTime() === selectedDateObj.getTime();
                    const hasClass = hasClassOnDayName(DAY_NAMES[dateObj.getDay()]);
                    const isToday = new Date().setHours(0,0,0,0) === dateObj.getTime();
                    
                    return (
                      <button
                        key={i}
                        onClick={() => setSelectedDateObj(dateObj)}
                        className={`relative h-12 md:h-14 w-full flex flex-col items-center justify-center rounded-lg text-sm font-button transition-colors ${
                          isActive 
                            ? "bg-primary text-white" 
                            : isToday ? "bg-primary/10 text-primary border border-primary/20" : "text-on-background hover:bg-surface-container"
                        }`}
                      >
                        <span>{dateObj.getDate()}</span>
                        {hasClass && (
                          <span className={`w-1.5 h-1.5 rounded-full mt-0.5 ${isActive ? "bg-white" : "bg-primary"}`}></span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-12">
            {filteredSchedule.length === 0 ? (
              !hasClassesForDay ? (
                <div className="text-center py-12 bg-surface-container-lowest rounded-lg border border-surface-dim">
                  <p className="font-body-md text-on-surface-variant mb-4">
                    Seçili gün için planlanmış ders bulunmuyor.
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
                  {selectedDayName}, {selectedDateStr}
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
                      </div>

                      {/* Actions Column */}
                      <div className="w-full md:w-auto flex flex-row justify-end gap-3 md:pl-4 border-t md:border-t-0 border-surface-dim pt-4 md:pt-0 items-center">
                        <button
                          onClick={() => openModal(item.id)}
                          className="flex-1 md:flex-none text-center bg-surface-container text-on-background font-button text-sm px-4 py-2 rounded-full hover:bg-surface-dim transition-colors"
                        >
                          Detay
                        </button>
                        <Link
                          href={`https://wa.me/905551234567?text=${encodeURIComponent(`Merhaba, ${item.name} dersi hakkında bilgi almak istiyorum.`)}`}
                          target="_blank"
                          className="flex-1 md:flex-none text-center bg-white border border-[#25D366] text-[#25D366] font-button text-sm px-4 py-2 rounded-full hover:bg-[#25D366]/5 transition-colors flex items-center justify-center gap-1"
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

export default function WeeklySchedule(props: Props) {
  return (
    <Suspense fallback={<div className="py-24 text-center">Yükleniyor...</div>}>
      <ScheduleContent {...props} />
    </Suspense>
  );
}
