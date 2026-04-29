import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WeeklySchedule from "@/components/WeeklySchedule";
import Contact from "@/components/Contact";
import { fetchWeeklySchedules, fetchClassDetailsMap } from "@/lib/api";

export default async function DersProgramiPage() {
  const schedule = await fetchWeeklySchedules();
  const classDetailsMap = await fetchClassDetailsMap();

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full h-[350px] md:h-[450px] flex items-center overflow-hidden bg-on-background">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Yoga Studio"
        />
        <div className="relative z-20 px-8 md:px-16 lg:px-24 w-full flex flex-col items-center md:items-start text-center md:text-left mt-16 md:mt-24">
          <h1 className="font-h1 text-[36px] md:text-[56px] text-white tracking-widest mb-4 drop-shadow-md">
            Ders Programı
          </h1>
          <p className="font-body-lg text-white/90 max-w-2xl mb-8 drop-shadow-sm">
            Haftalık ders saatlerini inceleyebilir, sana uygun ders için bizi arayabilir
            veya WhatsApp’tan bilgi alabilirsin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-primary text-on-primary font-button text-button px-8 py-3 rounded-full hover:bg-surface-tint transition-all duration-300 shadow-[0_8px_24px_rgba(249,115,22,0.2)]"
            >
              WhatsApp’tan Sor
            </a>
            <a
              href="tel:+905551234567"
              className="inline-block text-center bg-white text-on-background font-button text-button px-8 py-3 rounded-full hover:bg-surface transition-all duration-300"
            >
              Bizi Ara
            </a>
          </div>
        </div>
      </header>

      {/* Quick Info Strip */}
      <div className="bg-surface-container-low border-b border-surface-dim py-4 px-gutter">
        <div className="max-w-max_width mx-auto flex flex-col md:flex-row justify-center md:justify-around items-center gap-4 text-center">
          <div className="flex items-center text-on-surface-variant space-x-2">
            <span className="material-symbols-outlined text-primary text-lg">
              schedule
            </span>
            <span className="font-body-md text-sm">Ders süresi: 60 dk</span>
          </div>
          <div className="flex items-center text-on-surface-variant space-x-2">
            <span className="material-symbols-outlined text-primary text-lg">
              door_front
            </span>
            <span className="font-body-md text-sm">
              İlk gelişte 10-15 dk erken gelmeni öneririz
            </span>
          </div>
          <div className="flex items-center text-on-surface-variant space-x-2">
            <span className="material-symbols-outlined text-primary text-lg">
              groups
            </span>
            <span className="font-body-md text-sm">
              Kontenjan için önceden bilgi alabilirsin
            </span>
          </div>
        </div>
      </div>

      <WeeklySchedule schedule={schedule} classDetailsMap={classDetailsMap} />

      <Contact />

      <Footer />

      {/* Mobile Sticky Contact Bar */}
      <div
        id="StickyContactBar"
        className="md:hidden fixed bottom-0 w-full bg-white border-t border-surface-dim shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-40 flex justify-between items-center p-2 px-4 pb-4"
      >
        <a
          href="tel:+905551234567"
          className="flex flex-col items-center text-on-surface-variant hover:text-primary w-1/3 py-2"
        >
          <span className="material-symbols-outlined text-xl mb-1">call</span>
          <span className="font-button text-[10px]">Ara</span>
        </a>
        <div className="w-px h-8 bg-surface-dim"></div>
        <a
          href="https://wa.me/905551234567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-primary w-1/3 py-2"
        >
          <span className="material-symbols-outlined text-xl mb-1">chat</span>
          <span className="font-button text-[10px]">WhatsApp</span>
        </a>
        <div className="w-px h-8 bg-surface-dim"></div>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-on-surface-variant hover:text-primary w-1/3 py-2"
        >
          <span className="material-symbols-outlined text-xl mb-1">directions</span>
          <span className="font-button text-[10px]">Yol Tarifi</span>
        </a>
      </div>
    </>
  );
}
