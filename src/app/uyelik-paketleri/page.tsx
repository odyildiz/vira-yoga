import { storageBaseUrl } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Memberships from "@/components/Memberships";
import { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Üyelik Paketleri ve Fiyatlar | Vira Yoga",
  description: "Vira Yoga üyelik paketleri, grup ders seçenekleri, ödeme yöntemleri ve üyelik koşulları hakkında bilgi alın. Size uygun paketi birlikte seçelim.",
};

export default function UyelikPaketleriPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pb-24 md:pb-0">
        <header className="relative w-full h-[350px] md:h-[450px] flex items-center overflow-hidden bg-on-background mt-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${storageBaseUrl}/image/hero/uyelikler-page-hero-image.avif`}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Yoga Studio"
          />
          <div className="relative z-20 px-8 md:px-16 lg:px-24 w-full flex flex-col items-center md:items-start text-center md:text-left mt-16 md:mt-24 max-w-7xl mx-auto">
            <h1 className="font-h1 text-[36px] md:text-[56px] text-white tracking-widest mb-4 drop-shadow-md">
              Üyelik Paketleri
            </h1>
            <p className="font-body-lg text-white/90 max-w-2xl mb-8 drop-shadow-sm">
              Sana uygun üyelik paketini seçerek pratiğine dilediğin gibi yön ver.
            </p>
          </div>
        </header>

        {/* 1. PACKAGE CARDS SECTION */}
        <Memberships hideHeader={true} />

        {/* 2. MEMBERSHIP TERMS SECTION */}
        <section className="py-20 px-8 md:px-16 bg-surface-container-low">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-h2 text-h2 text-on-background mb-4">Üyelik Koşulları</h2>
              <p className="text-on-surface-variant">
                Paket satın almadan önce kullanım koşullarını incelemeni öneririz. Aşağıdaki bilgiler genel bilgilendirme amaçlıdır; güncel detaylar için stüdyomuzla iletişime geçebilirsin.
              </p>
            </div>

            <div className="space-y-4">
              {/* Term 1 */}
              <details className="group bg-surface-container rounded-xl border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-on-background hover:text-primary transition-colors">
                  Paket Kullanım Süresi
                  <span className="relative ml-1.5 h-5 w-5 shrink-0 text-primary">
                    <span className="material-symbols-outlined absolute inset-0 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant">
                  <p>Her paketin belirli bir geçerlilik süresi vardır. Ders haklarının bu süre içinde kullanılması gerekir. Geçerlilik süresi paket türüne göre değişebilir.</p>
                </div>
              </details>

              {/* Term 2 */}
              <details className="group bg-surface-container rounded-xl border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-on-background hover:text-primary transition-colors">
                  Ders Katılımı ve Kontenjan
                  <span className="relative ml-1.5 h-5 w-5 shrink-0 text-primary">
                    <span className="material-symbols-outlined absolute inset-0 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant">
                  <p>Dersler kontenjanla sınırlıdır. Katılmak istediğin ders için önceden bizi arayarak veya WhatsApp üzerinden bilgi almanı öneririz.</p>
                </div>
              </details>

              {/* Term 3 */}
              <details className="group bg-surface-container rounded-xl border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-on-background hover:text-primary transition-colors">
                  Paketlerin Kapsamı
                  <span className="relative ml-1.5 h-5 w-5 shrink-0 text-primary">
                    <span className="material-symbols-outlined absolute inset-0 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant">
                  <p>Grup ders paketleri yalnızca grup yoga dersleri için geçerlidir. Özel dersler, workshoplar ve etkinlikler ayrıca ücretlendirilebilir.</p>
                </div>
              </details>

              {/* Term 4 */}
              <details className="group bg-surface-container rounded-xl border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-on-background hover:text-primary transition-colors">
                  Paket Başlangıç Tarihi
                  <span className="relative ml-1.5 h-5 w-5 shrink-0 text-primary">
                    <span className="material-symbols-outlined absolute inset-0 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant">
                  <p>Paket başlangıç tarihi, paket satın alma veya ilk kullanım tarihine göre belirlenebilir. Detaylar paket seçimi sırasında paylaşılır.</p>
                </div>
              </details>

              {/* Term 5 */}
              <details className="group bg-surface-container rounded-xl border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-on-background hover:text-primary transition-colors">
                  Dondurma ve Uzatma
                  <span className="relative ml-1.5 h-5 w-5 shrink-0 text-primary">
                    <span className="material-symbols-outlined absolute inset-0 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant">
                  <p>Paket dondurma veya süre uzatma koşulları paket türüne göre değişebilir. Sağlık durumu veya özel durumlar için stüdyomuzla iletişime geçebilirsin.</p>
                </div>
              </details>

              {/* Term 6 */}
              <details className="group bg-surface-container rounded-xl border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-on-background hover:text-primary transition-colors">
                  İade ve Devir
                  <span className="relative ml-1.5 h-5 w-5 shrink-0 text-primary">
                    <span className="material-symbols-outlined absolute inset-0 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant">
                  <p>Satın alınan paketlerde iade ve başka bir kişiye devir koşulları stüdyo politikalarına göre değerlendirilir. Paket almadan önce detayları bizimle görüşmeni öneririz.</p>
                </div>
              </details>

              {/* Term 7 */}
              <details className="group bg-surface-container rounded-xl border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-on-background hover:text-primary transition-colors">
                  Sağlık Durumu ve Bilgilendirme
                  <span className="relative ml-1.5 h-5 w-5 shrink-0 text-primary">
                    <span className="material-symbols-outlined absolute inset-0 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant">
                  <p>Hamilelik, sakatlık, kronik rahatsızlık veya özel bir sağlık durumun varsa derse katılmadan önce doktoruna danışmanı ve eğitmenini bilgilendirmeni öneririz.</p>
                </div>
              </details>

              {/* Term 8 */}
              <details className="group bg-surface-container rounded-xl border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-on-background hover:text-primary transition-colors">
                  Geç Kalma ve Ders Düzeni
                  <span className="relative ml-1.5 h-5 w-5 shrink-0 text-primary">
                    <span className="material-symbols-outlined absolute inset-0 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant">
                  <p>Ders akışının bozulmaması için ders saatinden 10-15 dakika önce stüdyoda olmanı öneririz. Geç kalma durumunda derse katılım eğitmen veya stüdyo düzenine göre değerlendirilebilir.</p>
                </div>
              </details>
            </div>

            <div className="mt-8 bg-primary/10 border border-primary/20 rounded-xl p-6 flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1">info</span>
              <div>
                <h4 className="font-bold text-on-background mb-1">Not</h4>
                <p className="text-sm text-on-surface-variant">Üyelik koşulları, paket içerikleri ve fiyatlar dönemsel olarak güncellenebilir. En güncel bilgi için bizimle iletişime geçebilirsin.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PAYMENT OPTIONS SECTION */}
        <section className="py-20 px-8 md:px-16 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-h2 text-h2 text-on-background mb-4">Ödeme Seçenekleri</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">
                Paket ödemeleri için farklı ödeme seçenekleri sunulabilir. Güncel ödeme yöntemleri hakkında detaylı bilgi almak için bizimle iletişime geçebilirsin.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 shadow-sm text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-4 block">payments</span>
                <h3 className="font-semibold text-on-background mb-2">Nakit Ödeme</h3>
                <p className="text-sm text-on-surface-variant">Paket ödemeni stüdyoda nakit olarak gerçekleştirebilirsin.</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 shadow-sm text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-4 block">credit_card</span>
                <h3 className="font-semibold text-on-background mb-2">Kredi / Banka Kartı</h3>
                <p className="text-sm text-on-surface-variant">Stüdyoda kredi kartı veya banka kartı ile ödeme seçeneği sunulabilir.</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 shadow-sm text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-4 block">account_balance</span>
                <h3 className="font-semibold text-on-background mb-2">Havale / EFT</h3>
                <p className="text-sm text-on-surface-variant">Uygun durumlarda banka havalesi veya EFT ile ödeme yapılabilir. Ödeme açıklaması ve hesap bilgileri için bizimle iletişime geçebilirsin.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FAQ SECTION */}
        <section className="py-20 px-8 md:px-16 bg-surface-container-low">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-h2 text-h2 text-on-background mb-4">Sık Sorulan Sorular</h2>
            </div>

            <div className="space-y-4">
              <details className="group border-b border-outline-variant/30 pb-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between py-2 font-semibold text-on-background hover:text-primary transition-colors">
                  İlk kez yoga yapacağım, hangi paketi seçmeliyim?
                  <span className="relative ml-1.5 h-5 w-5 shrink-0 text-primary">
                    <span className="material-symbols-outlined absolute inset-0 transition-transform duration-300 group-open:rotate-180">add</span>
                  </span>
                </summary>
                <div className="pt-2 text-on-surface-variant">
                  <p>İlk kez yoga yapacaksan Tek Ders veya Başlangıç Paketi ile başlamanı öneririz. Hangi dersin sana uygun olduğundan emin değilsen, bizi arayarak destek alabilirsin.</p>
                </div>
              </details>

              <details className="group border-b border-outline-variant/30 pb-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between py-2 font-semibold text-on-background hover:text-primary transition-colors">
                  Paketler tüm derslerde geçerli mi?
                  <span className="relative ml-1.5 h-5 w-5 shrink-0 text-primary">
                    <span className="material-symbols-outlined absolute inset-0 transition-transform duration-300 group-open:rotate-180">add</span>
                  </span>
                </summary>
                <div className="pt-2 text-on-surface-variant">
                  <p>Grup ders paketleri genellikle grup yoga derslerinde geçerlidir. Özel dersler, workshoplar ve etkinlikler paket kapsamına dahil olmayabilir. Detaylar için bizimle iletişime geçebilirsin.</p>
                </div>
              </details>

              <details className="group border-b border-outline-variant/30 pb-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between py-2 font-semibold text-on-background hover:text-primary transition-colors">
                  Derse katılmak için rezervasyon gerekiyor mu?
                  <span className="relative ml-1.5 h-5 w-5 shrink-0 text-primary">
                    <span className="material-symbols-outlined absolute inset-0 transition-transform duration-300 group-open:rotate-180">add</span>
                  </span>
                </summary>
                <div className="pt-2 text-on-surface-variant">
                  <p>Ders kontenjanları sınırlı olabileceği için katılım öncesinde bizi aramanı veya WhatsApp’tan yazmanı öneririz.</p>
                </div>
              </details>

              <details className="group border-b border-outline-variant/30 pb-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between py-2 font-semibold text-on-background hover:text-primary transition-colors">
                  Kullanmadığım ders hakları devreder mi?
                  <span className="relative ml-1.5 h-5 w-5 shrink-0 text-primary">
                    <span className="material-symbols-outlined absolute inset-0 transition-transform duration-300 group-open:rotate-180">add</span>
                  </span>
                </summary>
                <div className="pt-2 text-on-surface-variant">
                  <p>Kullanılmayan ders haklarının devri veya süre uzatımı paket koşullarına göre değişebilir. Paket satın almadan önce detayları öğrenmeni öneririz.</p>
                </div>
              </details>

              <details className="group border-b border-outline-variant/30 pb-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between py-2 font-semibold text-on-background hover:text-primary transition-colors">
                  Paketimi dondurabilir miyim?
                  <span className="relative ml-1.5 h-5 w-5 shrink-0 text-primary">
                    <span className="material-symbols-outlined absolute inset-0 transition-transform duration-300 group-open:rotate-180">add</span>
                  </span>
                </summary>
                <div className="pt-2 text-on-surface-variant">
                  <p>Paket dondurma koşulları paket türüne ve duruma göre değerlendirilebilir. Sağlık veya özel durumlarda stüdyomuzla iletişime geçebilirsin.</p>
                </div>
              </details>

              <details className="group border-b border-outline-variant/30 pb-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between py-2 font-semibold text-on-background hover:text-primary transition-colors">
                  Ödemeyi online yapabilir miyim?
                  <span className="relative ml-1.5 h-5 w-5 shrink-0 text-primary">
                    <span className="material-symbols-outlined absolute inset-0 transition-transform duration-300 group-open:rotate-180">add</span>
                  </span>
                </summary>
                <div className="pt-2 text-on-surface-variant">
                  <p>Şu anda online ödeme veya online kayıt sistemi kullanılmamaktadır. Ödeme seçenekleri hakkında bilgi almak için bizi arayabilir veya stüdyomuza uğrayabilirsin.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* 5. FINAL CONTACT SECTION */}
        <Contact title="İlk adımı birlikte atalım" description="Yoga’ya nereden başlayacağını bilmiyorsan yalnız değilsin. Seni tanımak, sorularını cevaplamak ve sana uygun ilk dersi birlikte seçmek için buradayız." />
      </main>

      <Footer />
    </>
  );
}
