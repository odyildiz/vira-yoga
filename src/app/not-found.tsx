import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function NotFound() {
  return (
    <>
      <Navbar solid />
      <main className="flex-grow flex flex-col items-center justify-center pt-32 pb-24 px-6 text-center min-h-[70vh]">
        <h1 className="font-h1 text-[64px] md:text-[96px] text-primary mb-6">404</h1>
        <h2 className="font-h2 text-[32px] md:text-[40px] text-on-background mb-4">Sayfa Bulunamadı</h2>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mb-12 mx-auto">
          Aradığınız sayfa silinmiş, adı değiştirilmiş veya geçici olarak ulaşılamıyor olabilir. 
          Vira Yoga&apos;nın sunduğu diğer içeriklere göz atmaya ne dersiniz?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/ders-programi"
            className="inline-block text-center bg-primary text-on-primary font-button text-button px-8 py-4 rounded-full hover:bg-surface-tint transition-all duration-300 shadow-[0_8px_24px_rgba(249,115,22,0.2)] hover:-translate-y-1 w-full sm:w-auto"
          >
            Ders Programını Gör
          </Link>
          <Link
            href="/uyelik-paketleri"
            className="inline-block text-center bg-surface-container-high text-on-background font-button text-button px-8 py-4 rounded-full hover:bg-surface-dim transition-all duration-300 w-full sm:w-auto hover:-translate-y-1"
          >
            Üyelik Paketlerini Gör
          </Link>
        </div>
      </main>
      <Contact 
        title="Bizimle İletişime Geçin" 
        description="Sorularınız, ders paketleri veya stüdyomuz hakkında detaylı bilgi almak için buradayız." 
      />
      <Footer />
    </>
  );
}
