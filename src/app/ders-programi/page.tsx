import { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WeeklySchedule from "@/components/WeeklySchedule";
import Contact from "@/components/Contact";
import { fetchWeeklySchedules, fetchClassDetailsMap } from "@/lib/api";

export const metadata: Metadata = {
  title: "Ders Programı | Vira Yoga",
  description: "Vira Yoga haftalık ders saatlerini inceleyin. Hatha, Vinyasa, Yin Yoga ve daha fazlası için uygun derse kolayca ulaşın.",
};

export default async function DersProgramiPage() {
  const schedule = await fetchWeeklySchedules();
  const classDetailsMap = await fetchClassDetailsMap();

  return (
    <>
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <header className="relative w-full h-[350px] md:h-[450px] flex items-center overflow-hidden bg-on-background">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Yoga Studio"
          />
          <div className="relative z-20 px-6 md:px-16 lg:px-24 w-full flex flex-col items-center md:items-start text-center md:text-left mt-16 md:mt-24 max-w-7xl mx-auto">
            <h1 className="font-h1 text-[30px] md:text-[56px] text-white tracking-widest mb-4 drop-shadow-md">
              Ders Programı
            </h1>
            <p className="font-body-lg text-white/90 max-w-2xl mb-8 drop-shadow-sm text-base md:text-lg">
              Haftalık ders saatlerini inceleyebilir, sana uygun dersi bulmak için programımıza göz atabilirsin.
            </p>
          </div>
        </header>

        <Suspense fallback={<div className="py-24 text-center">Yükleniyor...</div>}>
          <WeeklySchedule schedule={schedule} classDetailsMap={classDetailsMap} />
        </Suspense>

        <Contact title="Programla İlgili Bilgi Al" description="Ders saatleri, kontenjan durumu veya katılmak istediğin ders hakkında bize yazabilirsin." />

      </main>

      <Footer />

      {/* Mobile Sticky Contact Bar */}
      <div
        id="StickyContactBar"
        className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-surface-dim shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 flex justify-around items-center p-3"
      >
        <a
          href="tel:+905551234567"
          className="flex flex-col items-center text-on-surface-variant hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[22px] mb-1">call</span>
          <span className="text-[10px] font-bold">Ara</span>
        </a>
        <div className="w-px h-8 bg-surface-dim"></div>
        <a
          href="https://wa.me/905551234567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[22px] mb-1">chat</span>
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>
        <div className="w-px h-8 bg-surface-dim"></div>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-on-surface-variant hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[22px] mb-1">directions</span>
          <span className="text-[10px] font-bold">Yol Tarifi</span>
        </a>
      </div>
    </>
  );
}
