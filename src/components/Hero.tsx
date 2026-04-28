import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-stone-900/40 z-10"></div>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover shadow-[0_20px_50px_rgba(249,115,22,0.3)]"
      >
        <source src="/vira-yoga/yoga.mp4" type="video/mp4" />
      </video>
      <div className="relative z-20 px-8 md:px-16 lg:px-24 w-full flex flex-col items-start text-left mt-24">
        <h1 className="font-h1 text-[42px] leading-tight md:text-[64px] text-white tracking-widest mb-6 opacity-90 drop-shadow-md max-w-3xl">
          VİRA YOGA&apos;YA
          <br />
          HOŞ
          <br />
          GELDİNİZ
        </h1>
        <Link
          href="#contact"
          className="inline-block text-center bg-primary text-on-primary font-button text-button px-8 py-4 rounded-full hover:bg-surface-tint transition-all duration-300 shadow-[0_8px_24px_rgba(249,115,22,0.2)] hover:-translate-y-1"
        >
          Yogaya Yeni Başlayanlar
        </Link>
      </div>
    </header>
  );
}
