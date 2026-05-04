import { storageBaseUrl } from "@/lib/api";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DetailedClassCard from "@/components/cards/DetailedClassCard";
import FAQItem from "@/components/FAQItem";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/buttons/WhatsAppButton";

export const metadata: Metadata = {
  title: "Dersler | Vira Yoga",
  description: "Vira Yoga’da Başlangıç Yoga, Hatha, Vinyasa, Yin, Nefes ve Meditasyon derslerini inceleyin. Size uygun dersi birlikte seçelim.",
  openGraph: {
    title: "Dersler | Vira Yoga",
    description: "Vira Yoga’da Başlangıç Yoga, Hatha, Vinyasa, Yin, Nefes ve Meditasyon derslerini inceleyin. Size uygun dersi birlikte seçelim.",
    url: "https://virayoga.com/dersler",
  },
  alternates: {
    canonical: "https://virayoga.com/dersler",
  },
};

export default function DerslerPage() {
  const classes = [
    {
      title: "Başlangıç Yoga",
      description: "Yoga'ya yeni başlayanlar için temel duruşların ve nefes farkındalığının anlatıldığı derstir.",
      level: "Başlangıç",
      tempo: "Sakin",
      duration: "60 dk",
      actionText: "Programı Gör",
      actionHref: "/ders-programi",
      scheduleSlug: "Hatha",
    },
    {
      title: "Hatha Yoga",
      description: "Duruş, nefes ve beden farkındalığını dengeli şekilde çalışmak isteyenler için uygundur.",
      level: "Her Seviye",
      tempo: "Dengeli",
      duration: "60 dk",
      actionText: "Programı Gör",
      actionHref: "/ders-programi",
      scheduleSlug: "Hatha",
    },
    {
      title: "Vinyasa Yoga",
      description: "Nefesle hareketi birleştiren, akışkan ve daha dinamik bir yoga pratiğidir.",
      level: "Orta Seviye",
      tempo: "Dinamik",
      duration: "60 dk",
      actionText: "Programı Gör",
      actionHref: "/ders-programi",
      scheduleSlug: "Vinyasa",
    },
    {
      title: "Yin Yoga",
      description: "Daha yavaş, sakin ve gevşeme odaklı bir pratik arayanlar için uygundur.",
      level: "Her Seviye",
      tempo: "Sakin",
      duration: "60 dk",
      actionText: "Programı Gör",
      actionHref: "/ders-programi",
      scheduleSlug: "Yin",
    },
    {
      title: "Nefes ve Meditasyon",
      description: "Nefes farkındalığı, odaklanma ve zihinsel sakinlik üzerine çalışılır.",
      level: "Her Seviye",
      tempo: "Sakin",
      duration: "45-60 dk",
      actionText: "Programı Gör",
      actionHref: "/ders-programi",
      scheduleSlug: "Nefes",
    },
    {
      title: "Özel Ders",
      description: "Kişisel ihtiyaçlara, seviyeye ve hedeflere göre birebir planlanan yoga dersidir.",
      level: "Kişiye Özel",
      tempo: "Kişiye Özel",
      duration: "60 dk",
      actionText: "Bizi Ara",
      actionHref: "tel:+905555555555",
      note: "Özel dersler grup ders paketlerinden ayrı değerlendirilir."
    }
  ];

  const faqs = [
    {
      question: "Daha önce yoga yapmadım, hangi derse katılmalıyım?",
      answer: "Başlangıç Yoga veya Hatha Yoga ile başlayabilirsin. Emin değilsen bizi arayarak destek alabilirsin."
    },
    {
      question: "Vinyasa Yoga yeni başlayanlar için uygun mu?",
      answer: "Vinyasa daha dinamik bir derstir. Daha önce yoga deneyimin yoksa önce Başlangıç Yoga veya Hatha Yoga önerilir."
    },
    {
      question: "Yin Yoga her seviye için uygun mu?",
      answer: "Evet, Yin Yoga daha sakin ve yavaş tempolu olduğu için birçok katılımcı için uygundur."
    },
    {
      question: "Özel ders alabilir miyim?",
      answer: "Evet. Özel dersler kişisel ihtiyaçlara göre planlanır ve grup ders paketlerinden ayrı değerlendirilir."
    },
    {
      question: "Ders seçmeden önce bilgi alabilir miyim?",
      answer: "Evet. Yoga deneyimine ve ihtiyacına göre sana uygun dersi birlikte seçebiliriz."
    }
  ];

  return (
    <>
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <header className="relative w-full h-[350px] md:h-[450px] flex items-center overflow-hidden bg-on-background mt-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <Image
            src={`${storageBaseUrl}/image/hero/dersler-page-hero-image.avif`}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Vira Yoga'da farklı seviyelere uygun yoga dersleri"
            fill
            priority
          />
          <div className="relative z-20 px-8 md:px-16 lg:px-24 w-full flex flex-col items-center md:items-start text-center md:text-left mt-16 md:mt-24 max-w-7xl mx-auto">
            <h1 className="font-h1 text-[36px] md:text-[56px] text-white tracking-widest mb-4 drop-shadow-md">Dersler</h1>
            <p className="font-body-lg text-white/90 max-w-2xl mb-8 drop-shadow-sm">
              Yoga deneyimine, ihtiyacına ve günlük ritmine göre sana uygun dersleri inceleyebilirsin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/ders-programi" className="inline-block text-center bg-primary text-on-primary font-button text-sm px-8 py-3.5 rounded-full hover:bg-surface-tint transition-all duration-300 shadow-[0_8px_24px_rgba(249,115,22,0.2)]">
                Ders Programını Gör
              </Link>
            </div>
          </div>
        </header>

        {/* 2. Class Types Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mt-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((cls, idx) => (
              <DetailedClassCard key={idx} {...cls} />
            ))}
          </div>
        </section>

        {/* 3. BEGINNER NOTE SECTION */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 mb-24">
          <div className="bg-surface-container-low rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-primary-container shadow-sm">
            <div className="flex-1">
              <h2 className="font-h2 text-2xl mb-4 text-primary">Yoga’ya Yeni Başlıyorsan</h2>
              <p className="mb-6 text-on-surface-variant leading-relaxed">
                Esnek, güçlü veya deneyimli olman gerekmez. İlk dersinde seni yönlendirir, seviyene uygun bir başlangıç yapmana yardımcı oluruz.
              </p>
              <ul className="text-sm text-on-surface-variant space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span>İlk gelişinde 10-15 dakika erken gelmeni öneririz.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span>Hangi dersle başlayacağını bilmiyorsan bizi arayabilirsin.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span>Rahat hareket edebileceğin kıyafetler tercih edebilirsin.</span>
                </li>
              </ul>
              <WhatsAppButton
                phoneNumber="905555555555"
                label="Bu Ders Bana Uygun mu?"
                variant="primary"
              />
            </div>
          </div>
        </section>

        {/* 4. SHORT FAQ SECTION */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 mb-24">
          <h2 className="font-h2 text-3xl text-center mb-8">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* 5. CONTACT SECTION */}
        <Contact title="Sana En Uygun Dersi Birlikte Seçelim" description="Ders türleri hakkında detaylı bilgi almak veya seviyene uygun dersi belirlemek için bize ulaş." />
      </main>

      <Footer />

      {/* 6. Mobile Sticky Contact Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-surface-dim flex justify-around items-center p-3 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <a href="tel:+905555555555" className="flex flex-col items-center text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[22px] mb-1">call</span>
          <span className="text-[10px] font-bold">Ara</span>
        </a>
        <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-primary transition-colors">
          <span className="material-symbols-outlined text-[22px] mb-1">chat</span>
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>
        <Link href="/ders-programi" className="flex flex-col items-center text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[22px] mb-1">calendar_month</span>
          <span className="text-[10px] font-bold">Program</span>
        </Link>
      </div>
    </>
  );
}
