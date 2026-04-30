import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-xxl md:py-[120px] px-gutter max-w-max_width mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
        <div className="space-y-lg pr-0 md:pr-xl">
          <h2 className="font-h2 text-h2 text-on-background">Hakkımızda</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Şehrin kalbinde, Vira Yoga bir anlık mola sunar. Profesyonel boş alanın gücüne inanıyoruz—gürültüden uzaklaşıp nefesinizle, bedeninizle ve gerçek benliğinizle yeniden bağlantı kurabileceğiniz bir yer.
          </p>
          <div className="pt-md">
            <Link href="#about" className="text-primary font-button text-button border-b border-primary pb-1 hover:text-surface-tint transition-colors duration-300 flex inline-flex items-center space-x-2">
              <span>Hikayemizi Oku</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(239,217,180,0.3)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            alt="Sunlight streaming through tall windows onto wooden yoga studio floor with a single rolled mat" 
            className="absolute inset-0 w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0KhOy0aSWagfIxL2WU_DUzIvakRAg4_031NjFuXMHMwpLVjDRIfgUZDhBngIVhRCxrLWe1l1QF8YDyspf7iy1zTN8ACFxfnJb_pEWXLtdDEWYUTKyQiDX6C8QCVIPK2xxWBheTZc8sPAO4QKU7iPlbUjFbsRvcj9kqH9TVXcRBtQvsmjif0yAlTyXqGvB1OqWRMT4tEI18aoTzc-fU3TIiiOhGiyIiCbH6mJlmAPW6Yc7nyFJ6iwLiKHrOvyPCs7ld6eOUpIoUulD"
          />
        </div>
      </div>
    </section>
  );
}
