import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yogaya Yeni Başlayanlar | Vira Yoga",
  description: "Yoga’ya yeni başlıyorsan Vira Yoga’da ilk ders sürecini, ne getirmen gerektiğini ve sana uygun dersi nasıl seçeceğini keşfet.",
};

export default function YeniBaslayanlarPage() {
  return (
    <>
      <Navbar solid={true} />

      {/* 2. REASSURANCE SECTION */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-20 px-8 md:px-16 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-h2 text-3xl md:text-4xl text-on-background mb-4">Başlamak için hazır olman gerekmiyor</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
              Yoga’ya başlamak için esnek, güçlü ya da deneyimli olman gerekmez. Başlangıç, bedenini tanımak ve kendi ritmini fark etmekle başlar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-surface-variant text-center">
              <div className="w-12 h-12 bg-primary-container text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined">self_improvement</span>
              </div>
              <h3 className="font-h3 text-xl mb-3 text-on-background">Esnek olman gerekmez</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Yoga esnek olmakla başlamaz. Bedeninin bugünkü halini fark ederek, adım adım ilerlersin.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-surface-variant text-center">
              <div className="w-12 h-12 bg-primary-container text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined">waving_hand</span>
              </div>
              <h3 className="font-h3 text-xl mb-3 text-on-background">Daha önce deneyimin olmasa da katılabilirsin</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                İlk kez gelen öğrenciler için açıklayıcı ve yönlendirici bir yaklaşım sunarız.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-surface-variant text-center">
              <div className="w-12 h-12 bg-primary-container text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined">vital_signs</span>
              </div>
              <h3 className="font-h3 text-xl mb-3 text-on-background">Kendi ritminde ilerlersin</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Ders sırasında bedenini dinlemen ve sana iyi gelen seviyede kalman desteklenir.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-surface-variant text-center">
              <div className="w-12 h-12 bg-primary-container text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined">handshake</span>
              </div>
              <h3 className="font-h3 text-xl mb-3 text-on-background">Sana uygun dersi birlikte seçeriz</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Deneyimin, beklentin ve varsa fiziksel hassasiyetlerin doğrultusunda doğru başlangıcı birlikte belirleriz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STEP-BY-STEP STARTING JOURNEY */}
      <section className="py-20 px-8 md:px-16 bg-surface-container-low">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-h2 text-3xl md:text-4xl text-on-background mb-4">İlk dersine nasıl hazırlanırsın?</h2>
            <p className="text-on-surface-variant text-lg">
              Vira Yoga’da ilk ders süreci basit ve anlaşılır ilerler. Aşağıdaki adımları takip ederek kendini daha rahat hissedebilirsin.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outline-variant before:to-transparent">
            {/* Step 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-surface-container-low bg-primary text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">1</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-surface p-6 rounded-2xl shadow-sm border border-surface-variant">
                <h3 className="font-h3 text-xl text-on-background mb-2">Bize ulaş</h3>
                <p className="text-on-surface-variant text-sm mb-4">
                  Derslere başlamadan önce bizi arayabilir, WhatsApp’tan yazabilir ya da stüdyomuza uğrayabilirsin. İlk kez geleceğini söylemen yeterli.
                </p>
                <Link href="#contact" className="text-primary font-button hover:underline inline-flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">call</span> Bize Ulaş
                </Link>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-surface-container-low bg-primary text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">2</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-surface p-6 rounded-2xl shadow-sm border border-surface-variant">
                <h3 className="font-h3 text-xl text-on-background mb-2">Sana uygun dersi birlikte seçelim</h3>
                <p className="text-on-surface-variant text-sm">
                  Daha önce yoga yapıp yapmadığını, nasıl bir pratik aradığını ve varsa dikkat etmemiz gereken fiziksel hassasiyetlerini konuşuruz. Buna göre sana en uygun başlangıç dersini öneririz.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-surface-container-low bg-primary text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">3</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-surface p-6 rounded-2xl shadow-sm border border-surface-variant">
                <h3 className="font-h3 text-xl text-on-background mb-2">Dersten biraz önce gel</h3>
                <p className="text-on-surface-variant text-sm">
                  İlk gelişinde dersten 10–15 dakika önce stüdyoda olmanı öneririz. Böylece ortamı tanıyabilir, eğitmenle kısa bir şekilde konuşabilir ve derse rahatça hazırlanabilirsin.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-surface-container-low bg-primary text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">4</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-surface p-6 rounded-2xl shadow-sm border border-surface-variant">
                <h3 className="font-h3 text-xl text-on-background mb-2">İlk dersini kendi ritminde deneyimle</h3>
                <p className="text-on-surface-variant text-sm">
                  Ders boyunca her hareketi mükemmel yapmak zorunda değilsin. Eğitmenin yönlendirmelerini takip ederek, bedenini dinleyerek ve ihtiyacın olduğunda dinlenerek pratiğe katılabilirsin.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-surface-container-low bg-primary text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">5</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-surface p-6 rounded-2xl shadow-sm border border-surface-variant">
                <h3 className="font-h3 text-xl text-on-background mb-2">Devam planını birlikte konuşalım</h3>
                <p className="text-on-surface-variant text-sm">
                  İlk dersten sonra nasıl hissettiğini, hangi derslerin sana daha uygun olabileceğini ve nasıl devam etmek istediğini birlikte değerlendirebiliriz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT TO EXPECT IN YOUR FIRST CLASS */}
      <section className="py-20 px-8 md:px-16 bg-surface">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-h2 text-3xl md:text-4xl text-on-background text-center mb-12">İlk derste seni ne bekler?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary-container p-8 rounded-2xl">
              <h3 className="font-h3 text-xl text-on-background mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">login</span> Ders öncesi
              </h3>
              <p className="text-on-surface-variant text-sm">
                Stüdyoya geldiğinde seni karşılarız. İlk kez geldiğini bizimle paylaşabilir, aklındaki soruları sorabilir ve eğitmenle kısa bir şekilde konuşabilirsin.
              </p>
            </div>
            <div className="bg-secondary-container p-8 rounded-2xl">
              <h3 className="font-h3 text-xl text-on-background mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">accessibility_new</span> Ders sırasında
              </h3>
              <p className="text-on-surface-variant text-sm">
                Eğitmenin nefes, duruş ve geçişler için seni yönlendirir. Zorlandığın yerde durabilir, dinlenebilir veya hareketleri kendi seviyene göre uyarlayabilirsin.
              </p>
            </div>
            <div className="bg-secondary-container p-8 rounded-2xl">
              <h3 className="font-h3 text-xl text-on-background mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">spa</span> Ders sonrası
              </h3>
              <p className="text-on-surface-variant text-sm">
                Ders sonrasında nasıl hissettiğini değerlendirebilir, sana uygun diğer dersleri ve devam seçeneklerini birlikte konuşabiliriz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRACTICAL PREPARATION SECTION */}
      <section className="py-20 px-8 md:px-16 bg-surface-container-low">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-h2 text-3xl md:text-4xl text-on-background text-center mb-12">Gelmeden önce bilmen gerekenler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-surface p-5 rounded-2xl border border-surface-variant shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-container text-primary rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">apparel</span>
              </div>
              <p className="text-on-background text-sm font-medium leading-snug">Rahat ve esnek kıyafetler giy.</p>
            </div>
            <div className="bg-surface p-5 rounded-2xl border border-surface-variant shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-container text-primary rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">sports_gymnastics</span>
              </div>
              <p className="text-on-background text-sm font-medium leading-snug">Kendi matını getirebilir veya stüdyodan alabilirsin.</p>
            </div>
            <div className="bg-surface p-5 rounded-2xl border border-surface-variant shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-container text-primary rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <p className="text-on-background text-sm font-medium leading-snug">Hazırlanmak için dersten 15 dakika önce gel.</p>
            </div>
            <div className="bg-surface p-5 rounded-2xl border border-surface-variant shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-container text-primary rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">restaurant</span>
              </div>
              <p className="text-on-background text-sm font-medium leading-snug">Ders öncesinde ağır yemek yemekten kaçın.</p>
            </div>
            <div className="bg-surface p-5 rounded-2xl border border-surface-variant shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-container text-primary rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">devices_off</span>
              </div>
              <p className="text-on-background text-sm font-medium leading-snug">Derse girmeden önce telefonunu sessize al.</p>
            </div>
            <div className="bg-surface p-5 rounded-2xl border border-surface-variant shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-container text-primary rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">monitor_heart</span>
              </div>
              <p className="text-on-background text-sm font-medium leading-snug">Varsa sağlık durumunu ve sakatlığını eğitmenle paylaş.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHICH CLASS SHOULD I START WITH? */}
      <section className="py-20 px-8 md:px-16 bg-surface">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-h2 text-3xl md:text-4xl text-on-background mb-4">Hangi dersle başlayabilirim?</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg mb-12">
            İlk dersini seçerken tek başına karar vermek zorunda değilsin. Yine de başlangıç için sana fikir verebilecek bazı ders türleri şunlar olabilir:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12 max-w-4xl mx-auto">
            <div className="bg-surface-container-low p-8 rounded-2xl border border-surface-variant">
              <span className="inline-block bg-primary-container text-on-primary-container text-xs font-bold px-3 py-1 rounded-full mb-4">Temel Adımlar</span>
              <h3 className="font-h3 text-xl text-on-background mb-3">Başlangıç Dersleri</h3>
              <p className="text-on-surface-variant text-sm">
                Yoga'ya yeni başlayanlar için temel duruşların ve nefes farkındalığının anlatıldığı sakin tempolu pratiklerdir.
              </p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-2xl border border-surface-variant">
              <span className="inline-block bg-primary-container text-on-primary-container text-xs font-bold px-3 py-1 rounded-full mb-4">Ortak Pratik</span>
              <h3 className="font-h3 text-xl text-on-background mb-3">Her Seviye Dersler</h3>
              <p className="text-on-surface-variant text-sm">
                Daha önce deneyimi olmayanların da katılabileceği, eğitmenin alternatif seçenekler sunduğu kapsayıcı pratiklerdir.
              </p>
            </div>
          </div>

          <p className="text-on-surface-variant text-md mb-6">
            Sana en uygun dersi birlikte seçmek için bizi arayabilir ya da WhatsApp’tan yazabilirsin.
          </p>
          <Link href="/#schedule" className="inline-block bg-surface text-on-surface border border-outline-variant font-button px-8 py-3 rounded-full hover:bg-surface-container transition-all duration-300">
            Ders Programını Gör
          </Link>
        </div>
      </section>

      {/* 7. COMMON BEGINNER QUESTIONS */}
      <section className="py-20 px-8 md:px-16 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-h2 text-3xl md:text-4xl text-on-background text-center mb-10">Yeni başlayanların en çok sorduğu sorular</h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="bg-surface rounded-xl border border-surface-variant overflow-hidden group">
              <summary className="font-bold text-on-background p-6 cursor-pointer flex justify-between items-center hover:bg-surface-container-lowest transition-colors list-none [&::-webkit-details-marker]:hidden">
                Daha önce hiç yoga yapmadım, yine de katılabilir miyim?
                <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform duration-300">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant text-sm animate-[sweep_0.3s_ease-in-out]">
                Evet. Daha önce yoga yapmamış kişiler için uygun ders seçenekleri bulunur. İlk gelişinde seni yönlendirir ve seviyene uygun bir başlangıç yapmana yardımcı oluruz.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-surface rounded-xl border border-surface-variant overflow-hidden group">
              <summary className="font-bold text-on-background p-6 cursor-pointer flex justify-between items-center hover:bg-surface-container-lowest transition-colors list-none [&::-webkit-details-marker]:hidden">
                Esnek değilim, sorun olur mu?
                <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform duration-300">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant text-sm animate-[sweep_0.3s_ease-in-out]">
                Hayır. Yoga esnek olmak için yapılan bir yarış değildir. Bedenini tanımak, nefesini fark etmek ve kendi ritminde ilerlemekle başlar.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-surface rounded-xl border border-surface-variant overflow-hidden group">
              <summary className="font-bold text-on-background p-6 cursor-pointer flex justify-between items-center hover:bg-surface-container-lowest transition-colors list-none [&::-webkit-details-marker]:hidden">
                İlk derste zorlanırsam ne olur?
                <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform duration-300">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant text-sm animate-[sweep_0.3s_ease-in-out]">
                Zorlandığın yerde dinlenebilir, hareketi daha basit bir şekilde uygulayabilir veya eğitmenin yönlendirmesiyle kendi seviyene göre uyarlayabilirsin.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="bg-surface rounded-xl border border-surface-variant overflow-hidden group">
              <summary className="font-bold text-on-background p-6 cursor-pointer flex justify-between items-center hover:bg-surface-container-lowest transition-colors list-none [&::-webkit-details-marker]:hidden">
                Hangi derse katılmam gerektiğini bilmiyorum, ne yapmalıyım?
                <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform duration-300">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant text-sm animate-[sweep_0.3s_ease-in-out]">
                Bizi arayabilir ya da WhatsApp’tan yazabilirsin. Deneyimini ve beklentini dinleyerek sana uygun başlangıç dersini birlikte seçebiliriz.
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="bg-surface rounded-xl border border-surface-variant overflow-hidden group">
              <summary className="font-bold text-on-background p-6 cursor-pointer flex justify-between items-center hover:bg-surface-container-lowest transition-colors list-none [&::-webkit-details-marker]:hidden">
                Online kayıt yapmam gerekiyor mu?
                <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform duration-300">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant text-sm animate-[sweep_0.3s_ease-in-out]">
                Hayır. Şu anda online kayıt ya da form doldurma süreci bulunmuyor. Derslere katılım ve güncel uygunluk bilgisi için bizi arayabilir veya stüdyomuza uğrayabilirsin.
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="bg-surface rounded-xl border border-surface-variant overflow-hidden group">
              <summary className="font-bold text-on-background p-6 cursor-pointer flex justify-between items-center hover:bg-surface-container-lowest transition-colors list-none [&::-webkit-details-marker]:hidden">
                İlk dersten sonra devam etmek zorunda mıyım?
                <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform duration-300">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant text-sm animate-[sweep_0.3s_ease-in-out]">
                Hayır. İlk dersinden sonra nasıl hissettiğini değerlendirebilir, devam etmek istersen sana uygun dersleri ve seçenekleri birlikte konuşabiliriz.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <Contact title="Aklına Takılan Bir Şey mi Var?" description="Yoga’ya başlangıç süreciyle ilgili soruların için bizimle her zaman iletişime geçebilirsin." />

      <Footer />

      {/* Sticky Mobile Contact Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-surface border-t border-surface-variant shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 flex justify-between px-2 py-3 gap-2">
        <Link href="#contact" className="flex-1 flex flex-col items-center justify-center gap-1 text-primary hover:text-surface-tint">
          <span className="material-symbols-outlined text-[24px]">call</span>
          <span className="text-[10px] font-bold">Bize Ulaş</span>
        </Link>
        <div className="w-px h-8 bg-surface-variant self-center"></div>
        <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center gap-1 text-green-600 hover:text-green-700">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.48-1.459-1.653-1.756-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          <span className="text-[10px] font-bold">WhatsApp&apos;tan Yaz</span>
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