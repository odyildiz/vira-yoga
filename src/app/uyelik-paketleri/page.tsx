import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Memberships from "@/components/Memberships";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Üyelik Paketleri ve Fiyatlar | Vira Yoga",
  description: "Vira Yoga üyelik paketleri, grup ders seçenekleri, ödeme yöntemleri ve üyelik koşulları hakkında bilgi alın. Size uygun paketi birlikte seçelim.",
};

export default function UyelikPaketleriPage() {
  return (
    <>
      <Navbar solid={true} />
      
      <main className="flex-grow pb-24 md:pb-0">
        {/* 1. PACKAGE CARDS SECTION */}
      <Memberships title="Pratiğine Uygun Paketi Seç" isMainHeading={true} />

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
      <section id="contact" className="py-24 px-8 md:px-16 bg-surface">
        <div className="max-w-4xl mx-auto text-center bg-secondary-container p-12 rounded-3xl border border-surface-variant shadow-sm">
          <h2 className="font-h2 text-3xl md:text-4xl text-on-background mb-4">İlk adımı birlikte atalım</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-8">
            Yoga’ya nereden başlayacağını bilmiyorsan yalnız değilsin. Seni tanımak, sorularını cevaplamak ve sana uygun ilk dersi birlikte seçmek için buradayız.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="tel:+905555555555"
              className="bg-primary text-on-primary font-button px-8 py-4 rounded-full hover:bg-surface-tint transition-all duration-300 shadow-md flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">call</span> Bizi Ara
            </Link>
            <Link
              href="https://wa.me/905555555555"
              target="_blank"
              className="bg-green-600 text-white font-button px-8 py-4 rounded-full hover:bg-green-700 transition-all duration-300 shadow-md flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.48-1.459-1.653-1.756-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              WhatsApp&apos;tan Yaz
            </Link>
            <Link
              href="https://maps.google.com/?q=Vira+Yoga"
              target="_blank"
              className="bg-surface-container-lowest text-on-surface border border-outline-variant font-button px-8 py-4 rounded-full hover:bg-surface-container transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">directions</span> Yol Tarifi Al
            </Link>
          </div>
          
          <p className="text-on-surface-variant text-sm mb-4">
            Dilersen önce ders programını inceleyebilir, ardından bize ulaşabilirsin.
          </p>
          <Link href="/ders-programi" className="text-primary font-bold hover:underline">
            Ders Programını Gör
          </Link>
        </div>
      </section>
      </main>

      <Footer />

      {/* Sticky Mobile Contact Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-surface border-t border-surface-variant shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 flex justify-between px-2 py-3 gap-2">
        <Link href="tel:+905555555555" className="flex-1 flex flex-col items-center justify-center gap-1 text-primary hover:text-surface-tint">
          <span className="material-symbols-outlined text-[24px]">call</span>
          <span className="text-[10px] font-bold">Ara</span>
        </Link>
        <div className="w-px h-8 bg-surface-variant self-center"></div>
        <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center gap-1 text-green-600 hover:text-green-700">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.48-1.459-1.653-1.756-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>
        <div className="w-px h-8 bg-surface-variant self-center"></div>
        <a href="https://maps.google.com/?q=Vira+Yoga" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center gap-1 text-on-surface-variant hover:text-on-surface">
          <span className="material-symbols-outlined text-[24px]">directions</span>
          <span className="text-[10px] font-bold">Yol Tarifi</span>
        </a>
      </div>
    </>
  );
}
