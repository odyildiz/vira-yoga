import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeacherCard from "@/components/cards/TeacherCard";
import FAQItem from "@/components/FAQItem";
import Contact from "@/components/Contact";
import { fetchTeachers } from "@/lib/api";

export const metadata: Metadata = {
  title: "Eğitmenler | Vira Yoga",
  description: "Vira Yoga eğitmenlerini, verdikleri dersleri ve yoga yaklaşımlarını inceleyin.",
};

const faqs = [
  {
    question: "Hangi eğitmenin dersi bana uygun?",
    answer: "Yoga deneyimine, ihtiyacına ve tercih ettiğin ders temposuna göre birlikte karar verebiliriz.",
  },
  {
    question: "Yeni başlayanlar için hangi eğitmen uygun?",
    answer: "Başlangıç Yoga ve Hatha Yoga dersleri yeni başlayanlar için uygun olabilir. Programdan bu dersleri inceleyebilirsin.",
  },
  {
    question: "Özel ders için eğitmen seçebilir miyim?",
    answer: "Özel derslerde eğitmen uygunluğu ve ihtiyacına göre planlama yapılır. Detaylı bilgi için bizimle iletişime geçebilirsin.",
  },
  {
    question: "Eğitmenlerin ders saatlerini nereden görebilirim?",
    answer: "Ders Programı sayfasından eğitmenlere göre ders saatlerini inceleyebilirsin.",
  },
  {
    question: "Derse başlamadan önce bilgi alabilir miyim?",
    answer: "Evet. Hangi ders veya eğitmenin sana uygun olduğundan emin değilsen bizi arayabilir ya da WhatsApp’tan yazabilirsin.",
  },
];

export default async function EgitmenlerPage() {
  const teachers = await fetchTeachers();

  return (
    <>
      <Navbar />

      <main className="flex-grow pb-24 md:pb-0">
        {/* 1. Hero Section */}
        <header className="relative w-full h-[350px] md:h-[450px] flex items-center overflow-hidden bg-on-background mt-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Yoga Instructor"
          />
          <div className="relative z-20 px-8 md:px-16 lg:px-24 w-full flex flex-col items-center md:items-start text-center md:text-left mt-16 md:mt-24 max-w-7xl mx-auto">
            <h1 className="font-h1 text-[36px] md:text-[56px] text-white tracking-widest mb-4 drop-shadow-md">
              Eğitmenler
            </h1>
            <p className="font-body-lg text-white/90 max-w-2xl mb-8 drop-shadow-sm">
              Vira Yoga eğitmenlerini, ders yaklaşımlarını ve verdikleri dersleri inceleyebilirsin.
            </p>
          </div>
        </header>

        {/* 2. Instructor Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-12 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </section>

        {/* 3. Teaching Approach Section */}
        <section className="bg-surface-container-low border-t border-b border-surface-dim py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-h2 text-3xl mb-4 text-on-background">Ders Yaklaşımımız</h2>
              <p className="text-on-surface-variant leading-relaxed">
                Vira Yoga’da her öğrencinin kendi ritminde ilerlemesini önemseriz. Derslerde güvenli hareket, nefes farkındalığı ve destekleyici bir alan oluşturmak önceliğimizdir.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-2xl border border-surface-dim text-center shadow-sm">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-[28px]">health_and_safety</span>
                </div>
                <h3 className="font-h3 text-xl font-bold mb-3">Güvenli Pratik</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Derslerde bedeni zorlamadan, farkındalıkla hareket etmeye odaklanılır.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-2xl border border-surface-dim text-center shadow-sm">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-[28px]">self_improvement</span>
                </div>
                <h3 className="font-h3 text-xl font-bold mb-3">Kendi Ritminde İlerleme</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Her öğrencinin deneyimi ve ihtiyacı farklıdır. Pratik buna göre desteklenir.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-2xl border border-surface-dim text-center shadow-sm">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-[28px]">diversity_1</span>
                </div>
                <h3 className="font-h3 text-xl font-bold mb-3">Destekleyici Alan</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Yeni başlayanlar ve düzenli pratik yapanlar için sakin ve yargısız bir ortam sunulur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SHORT FAQ SECTION */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-20">
          <h2 className="font-h2 text-3xl text-center mb-10 text-on-background">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        <Contact title="Eğitmenlerle İlgili Soruların Mı Var?" description="Hangi eğitmenin dersine katılacağından emin değilsen bize ulaşabilirsin." />
      </main>

      <Footer />

      {/* 5. Mobile Sticky Contact Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-surface-dim shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 flex justify-around items-center p-3">
        <a
          href="tel:+905555555555"
          className="flex flex-col items-center text-on-surface-variant hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[22px] mb-1">call</span>
          <span className="text-[10px] font-bold">Ara</span>
        </a>
        <div className="w-px h-8 bg-surface-dim"></div>
        <a
          href="https://wa.me/905555555555"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[22px] mb-1">chat</span>
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>
        <div className="w-px h-8 bg-surface-dim"></div>
        <a
          href="/ders-programi"
          className="flex flex-col items-center text-on-surface-variant hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[22px] mb-1">calendar_month</span>
          <span className="text-[10px] font-bold">Program</span>
        </a>
      </div>
    </>
  );
}
