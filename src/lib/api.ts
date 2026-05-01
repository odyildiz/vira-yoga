export const storageBaseUrl = process.env.NEXT_PUBLIC_STORAGE_BASE_URL || "https://odyildiz.github.io/vira-yoga/";

import { Schedule, WeeklyScheduleItem, ClassDetails, ClassInfo, Teacher, BlogPost, Membership, ContactInfo } from "@/types";

export const fetchSchedules = async (): Promise<Schedule[]> => {
  return [
    {
      id: "1",
      startTime: "07:00",
      endTime: "07:00 - 08:00",
      duration: 60,
      title: "Sabah Vinyasası",
      level: "Her Seviye",
      instructor: "Sarah Jenkins",
      studio: "Stüdyo A",
    },
    {
      id: "2",
      startTime: "12:15",
      endTime: "12:15 - 13:00",
      duration: 45,
      title: "Gün Ortası Sıfırlama Akışı",
      level: "Her Seviye",
      instructor: "Marcus Chen",
      studio: "Stüdyo B",
    },
    {
      id: "3",
      startTime: "18:00",
      endTime: "18:00 - 19:15",
      duration: 75,
      title: "Derin Yin ve Yenilenme",
      level: "İleri Seviye",
      instructor: "Elena Rostova",
      studio: "Bekleme Listesi",
      opacity: 60,
    },
  ];
};

export const fetchWeeklySchedules = async (): Promise<WeeklyScheduleItem[]> => {
  return [
    { id: 1, day: 'Pazartesi', start: '09:00', end: '10:00', name: 'Hatha Yoga', teacher: 'Ayşe', level: 'Her Seviye', type: 'Hatha', tags: ['Yeni başlayanlara uygun', 'Dengeli tempo'] },
    { id: 2, day: 'Pazartesi', start: '19:00', end: '20:00', name: 'Vinyasa Yoga', teacher: 'Mert', level: 'Orta Seviye', type: 'Vinyasa', tags: ['Dinamik', 'Akış odaklı'] },
    { id: 3, day: 'Salı', start: '10:00', end: '11:00', name: 'Yin Yoga', teacher: 'Zeynep', level: 'Her Seviye', type: 'Yin', tags: ['Sakin', 'Gevşeme odaklı'] },
    { id: 4, day: 'Salı', start: '18:30', end: '19:30', name: 'Başlangıç Yoga', teacher: 'Ayşe', level: 'Başlangıç', type: 'Hatha', tags: ['Yeni başlayanlara uygun', 'Temel duruşlar'] },
    { id: 5, day: 'Çarşamba', start: '09:00', end: '10:00', name: 'Nefes ve Meditasyon', teacher: 'Zeynep', level: 'Her Seviye', type: 'Nefes', tags: ['Nefes odaklı', 'Sakin'] },
    { id: 6, day: 'Çarşamba', start: '19:00', end: '20:00', name: 'Hatha Yoga', teacher: 'Ayşe', level: 'Her Seviye', type: 'Hatha', tags: ['Yeni başlayanlara uygun', 'Dengeli tempo'] },
    { id: 7, day: 'Perşembe', start: '18:30', end: '19:30', name: 'Vinyasa Yoga', teacher: 'Mert', level: 'Orta Seviye', type: 'Vinyasa', tags: ['Dinamik', 'Akış odaklı'] },
    { id: 8, day: 'Cuma', start: '10:00', end: '11:00', name: 'Yin Yoga', teacher: 'Zeynep', level: 'Her Seviye', type: 'Yin', tags: ['Sakin', 'Gevşeme odaklı'] },
    { id: 9, day: 'Cumartesi', start: '11:00', end: '12:00', name: 'Başlangıç Yoga', teacher: 'Ayşe', level: 'Başlangıç', type: 'Hatha', tags: ['Yeni başlayanlara uygun', 'Temel duruşlar'] },
  ];
};

export const fetchClassDetailsMap = async (): Promise<Record<string, ClassDetails>> => {
  return {
    'Hatha Yoga': {
      description: 'Duruş, nefes ve beden farkındalığını dengeli şekilde çalışmak isteyenler için uygundur.',
      suitableFor: 'Yeni başlayanlar ve sakin tempoda pratik yapmak isteyenler.',
      image: "/images/class-detail-1.jpg",
      ctas: [{ label: 'WhatsApp’tan Sor', type: 'primary', link: 'https://wa.me/905551234567' }, { label: 'Bizi Ara', type: 'secondary', link: 'tel:+905551234567' }]
    },
    'Vinyasa Yoga': {
      description: 'Nefesle hareketi birleştiren, daha akışkan ve dinamik bir yoga pratiğidir.',
      suitableFor: 'Daha hareketli bir ders isteyen ve temel yoga deneyimi olan kişiler.',
      image: "/images/class-detail-2.jpg",
      ctas: [{ label: 'WhatsApp’tan Sor', type: 'primary', link: 'https://wa.me/905551234567' }, { label: 'Bizi Ara', type: 'secondary', link: 'tel:+905551234567' }]
    },
    'Yin Yoga': {
      description: 'Daha yavaş, sakin ve gevşeme odaklı bir pratik arayanlar için uygundur.',
      suitableFor: 'Her seviyeden katılımcı için uygundur.',
      image: "/images/class-detail-3.jpg",
      ctas: [{ label: 'WhatsApp’tan Sor', type: 'primary', link: 'https://wa.me/905551234567' }, { label: 'Bizi Ara', type: 'secondary', link: 'tel:+905551234567' }]
    },
    'Başlangıç Yoga': {
      description: 'Yoga’ya yeni başlayanlar için temel duruşların ve nefes farkındalığının anlatıldığı derstir.',
      suitableFor: 'Daha önce yoga yapmamış kişiler.',
      image: "/images/class-detail-4.jpg",
      ctas: [{ label: 'Bu Ders Bana Uygun mu?', type: 'secondary', link: 'https://wa.me/905551234567' }, { label: 'WhatsApp’tan Sor', type: 'primary', link: 'https://wa.me/905551234567' }]
    },
    'Nefes ve Meditasyon': {
      description: 'Nefes farkındalığı, odaklanma ve zihinsel sakinlik üzerine çalışılır.',
      suitableFor: 'Sakin bir pratik isteyen herkes.',
      image: "/images/class-detail-5.jpg",
      ctas: [{ label: 'WhatsApp’tan Sor', type: 'primary', link: 'https://wa.me/905551234567' }, { label: 'Bizi Ara', type: 'secondary', link: 'tel:+905551234567' }]
    }
  };
};

export const fetchClasses = async (): Promise<ClassInfo[]> => {
  return [
    {
      id: "1",
      title: "Vinyasa Akışı",
      scheduleType: "Vinyasa",
      description: "Nefesi harekete bağlayan, ısı, güç ve akıcılık oluşturmak için tasarlanmış dinamik bir pratik. Şehrin gerginliğini atmak için mükemmel.",
      duration: 60,
      image: "image/class/vinyasa-class-image.png",
      colSpan: 2,
    },
    {
      id: "2",
      title: "Yin Yoga",
      scheduleType: "Yin",
      description: "Bağ dokularını hedefleyen derin, pasif duruşlar. Tempolu şehir hayatı için gerekli bir dengeleyici.",
      duration: 75,
      image: "image/class/yin-yoga-class-image.avif",
    },
    {
      id: "3",
      title: "Rehberli Meditasyon",
      scheduleType: "Meditasyon",
      description: "Rehberli nefes çalışmaları ve farkındalık teknikleri ile odaklanma ve zihinsel netlik geliştirin.",
      duration: 30,
      image: "image/class/meditasyon-class-image.jpeg",
    },
    {
      id: "4",
      title: "Hamak Akışı",
      scheduleType: "Vinyasa",
      description: "Nefesi harekete bağlayan, ısı, güç ve akıcılık oluşturmak için tasarlanmış dinamik bir pratik. Şehrin gerginliğini atmak için mükemmel.",
      duration: 60,
      image: "image/class/hamak-class-image.jpg",
      colSpan: 2,
    },
  ];
};

export const fetchTeachers = async (): Promise<Teacher[]> => {
  return [
    {
      id: "1",
      name: "Selen Sena Şenocak",
      specialty: "Hatha Yoga, Başlangıç Yoga",
      image: "image/teacher/teacher-selen-sena-senocak.jpg",
      bio: "Derslerinde güvenli hizalanma, nefes ve beden farkındalığına odaklanır. Yeni başlayanlar için dengeleyici bir alan sunar.",
      classes: ["Başlangıç Yoga", "Hatha Yoga"],
      socials: {
        instagram: "https://www.instagram.com/selensenocak/"
      },
    },
    {
      id: "2",
      name: "Yogi Kazım",
      specialty: "Vinyasa Yoga, Dinamik Pratik",
      image: "image/teacher/teacher-yogi-kazim.jpeg",
      bio: "Nefesle hareketi birleştiren akışkan ve dinamik dersler sunar.",
      classes: ["Vinyasa Yoga"],
      socials: {
        instagram: "#",
        twitter: "#"
      },
    },
    {
      id: "3",
      name: "Zeynep Aral",
      specialty: "Yin Yoga, Nefes ve Meditasyon",
      image: "/image/teacher/teacher-zeynep-aral.webp",
      bio: "Sakinlik, gevşeme ve içsel farkındalık üzerine alan açar.",
      classes: ["Yin Yoga", "Nefes ve Meditasyon"],
      socials: {
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: "4",
      name: "Elif Yılmaz",
      specialty: "Özel Ders, Başlangıç Yoga",
      image: "/images/teacher-4.jpg",
      bio: "Kişinin seviyesine ve ihtiyacına göre güvenli, sade ve destekleyici bir pratik oluşturur.",
      classes: ["Özel Ders", "Başlangıç Yoga"],
      socials: {
        instagram: "#",
        twitter: "#",
      },
    },
  ];
};

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  return [
    {
      id: "1",
      title: "İlk Yoga Dersine Nasıl Hazırlanılır?",
      excerpt: "İlk ders öncesi kıyafet, mat, zamanlama ve dikkat etmen gereken temel noktalar.",
      slug: "ilk-yoga-dersine-nasil-hazirlanilir",
      image: "/image/blog/blog-1.jpg",
      readTime: "4 dk okuma",
      category: "Yeni Başlayanlar",
      content: [
        { body: "İlk yoga dersine gelmeden önce her şeyi bilmen gerekmez. Ne giyeceğini, hangi dersten başlayacağını veya derste ne yapacağını merak etmen çok normal. Bu rehber, ilk ders öncesi kafandaki temel soruları sade şekilde cevaplamak için hazırlandı." },
        { heading: "Ne giymeli?", body: "Rahat hareket edebileceğin kıyafetler tercih edebilirsin. Kıyafetinin çok bol ya da hareketini kısıtlayacak kadar dar olmaması yeterlidir. Ders sırasında ayakkabı kullanılmaz; yoga genellikle çıplak ayakla yapılır." },
        { heading: "Mat getirmem gerekiyor mu?", body: "Stüdyoda mat kullanımı hakkında güncel bilgi almak için derse gelmeden önce bizimle iletişime geçebilirsin. Kendi matını kullanmak istersen yanında getirebilirsin." },
        { heading: "Derse ne kadar erken gelmeliyim?", body: "İlk gelişinde dersten 10–15 dakika önce stüdyoda olmanı öneririz. Böylece stüdyoyu tanıyabilir, eğitmenle kısa bir şekilde konuşabilir ve derse daha rahat hazırlanabilirsin." },
        { heading: "Ders öncesi yemek yemeli miyim?", body: "Ders öncesinde çok ağır yemek yememeni öneririz. Kendini rahat hissetmen için derse çok tok gelmemek daha iyi olabilir." },
        { heading: "Sağlık durumumu söylemeli miyim?", body: "Hamilelik, sakatlık, kronik rahatsızlık veya özel bir sağlık durumun varsa dersten önce doktoruna danışmanı ve eğitmenini bilgilendirmeni öneririz. Bu bilgi, ders sırasında daha güvenli ve uygun yönlendirme yapılmasına yardımcı olur." },
        { heading: "İlk dersten sonra nasıl devam ederim?", body: "İlk dersinden sonra nasıl hissettiğini değerlendirebilir, sana uygun ders ve paket seçeneklerini birlikte konuşabiliriz.", inlineCta: { text: "Paketleri İncele", href: "/uyelik-paketleri" } },
        { heading: "Kısaca", body: "Yoga'ya başlamak için hazır, esnek veya deneyimli olman gerekmez. İlk adım, kendine uygun bir ders seçmek ve stüdyoya açık bir zihinle gelmektir. Hangi dersle başlayacağından emin değilsen, bize yazabilir veya arayabilirsin." },
      ],
    },
    {
      id: "2",
      title: "Yoga İçin Esnek Olmak Gerekir mi?",
      excerpt: "Yoga'ya başlamak için esnek olman gerekmez. Pratik, bedeni tanımakla başlar.",
      slug: "yoga-icin-esnek-olmak-gerekir-mi",
      image: "/image/blog/blog-2.jpg",
      readTime: "3 dk okuma",
      category: "Yeni Başlayanlar",
      content: [
        { body: "\"Yoga yapayım ama çok esnek değilim\" diye düşünüyorsan, bu yazı tam sana göre. Esneklik yoga için bir ön koşul değil, zamanla gelişen bir yan etkidir." },
        { heading: "Yoga esneklikle başlamaz", body: "Yoga, bedenini tanımak, nefesini fark etmek ve kendi ritminde hareket etmekle başlar. Daha önce yoga yapmamış olman veya bazı hareketlerde zorlanman son derece normaldir." },
        { heading: "Peki ya zor pozlar?", body: "İlk derslerde amaç kendinizi zorlamak değil, bedeninizi güvenli şekilde tanımaktır. Eğitmen her harekette alternatif seçenekler sunar; o anki bedeninizle çalışırsınız." },
        { heading: "Esneklik zamanla artar", body: "Düzenli pratikle esneklik kendiliğinden gelişir — ama bu hedefiniz olmak zorunda değil. Birçok kişi yoga yapmaya sakinleşmek, zihinsel netlik veya beden farkındalığı için başlar." },
        { heading: "Sonuç", body: "Esnek olmak yoga için bir şart değil. Önemli olan başlamak ve kendi ritminde ilerlemek. Sana uygun dersi birlikte seçmek istersen bize ulaşabilirsin.", inlineCta: { text: "Dersleri İncele", href: "/dersler" } },
      ],
    },
    {
      id: "3",
      title: "Hatha Yoga Kimler İçin Uygun?",
      excerpt: "Hatha Yoga'nın temposunu, seviyesini ve kimler için iyi bir başlangıç olabileceğini anlattık.",
      slug: "hatha-yoga-kimler-icin-uygun",
      image: "/image/blog/blog-3.jpg",
      readTime: "4 dk okuma",
      category: "Ders Türleri",
      content: [
        { body: "Hatha Yoga, yoga pratiğinin temel taşlarından biridir. Nefes, duruş ve beden farkındalığını dengeli bir tempoda ele alır; bu yönüyle pek çok kişi için sağlam bir başlangıç noktası olabilir." },
        { heading: "Hatha Yoga nasıl bir pratiktir?", body: "Vinyasa'ya kıyasla daha yavaş tempolu, her duruşta daha fazla zaman harcanan bir yapısı vardır. Bu da hem hareketi hem de nefesi fark etmek için daha fazla alan sunar." },
        { heading: "Kimler için uygundur?", body: "Daha önce yoga yapmamış kişiler, sakin tempoda çalışmak isteyenler ve temel duruşları öğrenmek isteyen herkes Hatha Yoga'yı tercih edebilir." },
        { heading: "Neden iyi bir başlangıç?", body: "Hareketlerin daha yavaş ilerlemesi, eğitmenin her duruşu açıklama fırsatı bulmasına olanak tanır. Bu da özellikle ilk derslerinde daha fazla yönlendirmeye ihtiyaç duyabileceğin dönemde avantaj sağlar." },
        { heading: "Vira Yoga'da Hatha dersleri", body: "Vira Yoga'daki Hatha derslerimizde nefes, temel duruşlar ve beden farkındalığı üzerinde duruyoruz.", inlineCta: { text: "Ders Programını Gör", href: "/ders-programi" } },
      ],
    },
    {
      id: "4",
      title: "Vinyasa Yoga Nedir?",
      excerpt: "Nefesle hareketi birleştiren daha akışkan ve dinamik yoga pratiğini tanıyalım.",
      slug: "vinyasa-yoga-nedir",
      image: "/image/blog/blog-4.jpg",
      readTime: "4 dk okuma",
      category: "Ders Türleri",
      content: [
        { body: "Vinyasa Yoga, hareketlerin nefesle senkronize edildiği, akışkan ve dinamik bir yoga pratiğidir. Her hareket bir nefesle başlar ve biter; bu ritim pratiği hem fiziksel hem de zihinsel bir odaklanma haline getirir." },
        { heading: "Nasıl bir tempoda ilerler?", body: "Hatha Yoga'ya kıyasla daha hızlı bir temposu vardır. Duruşlar arasındaki geçişler sürekli akar; bu nedenle pratik boyunca zihin meşgul kalır ve günlük düşüncelerden uzaklaşılır." },
        { heading: "Kim için uygundur?", body: "Temel yoga deneyimi olan, daha hareketli bir pratik arayanlar ve fiziksel olarak aktif bir ders isteyen kişiler için uygundur." },
        { heading: "Vinyasa Yoga ne sağlar?", body: "Güç, esneklik ve denge gelişimine katkıda bulunur. Aynı zamanda nefes farkındalığını güçlendirir ve stres azaltmada etkili olabilir." },
        { heading: "Vira Yoga'da Vinyasa", body: "Vinyasa derslerimizin sana uygun olup olmadığını öğrenmek için bize ulaşabilirsin.", inlineCta: { text: "Dersleri İncele", href: "/dersler" } },
      ],
    },
    {
      id: "5",
      title: "Yin Yoga Neden Daha Sakin Bir Pratiktir?",
      excerpt: "Yin Yoga'nın yavaş temposunu, gevşeme odaklı yapısını ve kimler için uygun olduğunu anlattık.",
      slug: "yin-yoga-neden-daha-sakin-bir-pratiktir",
      image: "/image/blog/blog-5.jpg",
      readTime: "4 dk okuma",
      category: "Ders Türleri",
      content: [
        { body: "Yin Yoga, yoga pratiğinin en sakin ve içe dönük formlarından biridir. Uzun süreli duruşlar, derin bağ dokusu çalışması ve zihinsel sessizliğe davet eden yapısıyla diğer yoga türlerinden belirgin biçimde ayrılır." },
        { heading: "Yin Yoga nasıl çalışır?", body: "Hareketlerin çoğu yerde yapılır ve her duruş 3 ila 5 dakika boyunca tutulur. Bu uzun bekleme süresi, kasların değil; bağ dokularının, eklemlerin ve fasyaların çalışmasına olanak tanır." },
        { heading: "Neden sakin olarak tanımlanır?", body: "Yin Yoga'da müdahale etmemek, nefesle var olmak ve bedeni olduğu haliyle gözlemlemek ön plandadır." },
        { heading: "Kimler için uygundur?", body: "Her seviyeden katılımcıya uygun olup özellikle stresli bir yaşam temposuna sahip olanlar ve dinginleşmek isteyenler için değerli bir pratik olabilir." },
        { heading: "Aktif pratiklerle dengeleme", body: "Vinyasa gibi daha dinamik derslerin yanında Yin Yoga pratiği, hem bedeni hem de zihni dengelemeye yardımcı olabilir.", inlineCta: { text: "Ders Programını Gör", href: "/ders-programi" } },
      ],
    },
    {
      id: "6",
      title: "Nefes Farkındalığı Neden Önemlidir?",
      excerpt: "Nefesi fark etmek, pratik sırasında bedeni ve zihni daha sakin izlemeye yardımcı olabilir.",
      slug: "nefes-farkindaligi-neden-onemlidir",
      image: "/image/blog/blog-6.jpg",
      readTime: "3 dk okuma",
      category: "Pratik & Farkındalık",
      content: [
        { body: "Nefes, yoga pratiğinin merkezinde yer alır. Ancak günlük hayatta çoğumuz nefes almayı otomatik, fark edilmeden gerçekleşen bir şey olarak yaşarız. Yoga, bizi nefesimizin farkına varmaya davet eder." },
        { heading: "Nefes farkındalığı ne sağlar?", body: "Dikkatini nefese yöneltmek, zihni şimdiki ana bağlar. Bu, pratiğin hem fiziksel hem de zihinsel boyutunu derinleştirir." },
        { heading: "Yogada nefes nasıl kullanılır?", body: "Farklı yoga türleri farklı nefes teknikleri kullanır. Vinyasa'da nefes, hareketleri yönlendiren bir motor gibidir. Yin'de ise derin sakin nefes, bedeni dinginleştirmeye davet eder." },
        { heading: "Basit bir öneri", body: "Gün içinde bir an dur ve birkaç derin nefes al. Nefesin bedenine girişini ve çıkışını hissetmeye çalış. Bu basit pratik, farkındalık için iyi bir başlangıç noktası olabilir." },
        { heading: "Vira Yoga'da nefes çalışması", body: "Nefes ve Meditasyon derslerimizde bu konuya daha derinlemesine yer veriyoruz.", inlineCta: { text: "Dersleri Keşfet", href: "/dersler" } },
      ],
    },
    {
      id: "7",
      title: "Meditasyona Başlamak İçin Küçük Bir Rehber",
      excerpt: "Meditasyona yeni başlayanlar için sade, uygulanabilir ve kısa bir başlangıç rehberi.",
      slug: "meditasyona-baslamak-icin-kucuk-bir-rehber",
      image: "/image/blog/blog-7.jpg",
      readTime: "5 dk okuma",
      category: "Pratik & Farkındalık",
      content: [
        { body: "Meditasyon, zihni tamamen boşaltmak anlamına gelmez. Düşüncelerin geldiğini fark etmek, onlara tutunmadan geçip gitmelerine izin vermek ve tekrar nefese dönmek — bu döngünün kendisi meditasyondur." },
        { heading: "Nereden başlamalı?", body: "Meditasyona başlamak için özel bir ekipman, uygulama veya uzun süre gerekmez. Rahat oturduğun, birkaç dakika sessiz kalabileceğin bir ortam yeterlidir." },
        { heading: "Basit bir başlangıç pratiği", body: "Rahat bir oturuş pozisyonu bul. Gözlerini kapat ya da hafifçe önüne bak. Nefesin girişini ve çıkışını hissetmeye çalış. Dikkatinin dağıldığını fark ettiğinde, yargılamadan yeniden nefese dön." },
        { heading: "Ne kadar sürmeli?", body: "Başlangıç için 5 dakika bile yeterlidir. Önemli olan düzenlilik; uzun ama seyrek seanslardan çok, kısa ama düzenli pratik daha faydalı olabilir." },
        { heading: "Vira Yoga'da meditasyon", body: "Nefes ve Meditasyon derslerimizde rehberli pratikler sunuyoruz.", inlineCta: { text: "Ders Programını Gör", href: "/ders-programi" } },
      ],
    },
    {
      id: "8",
      title: "Vira Yoga'da İlk Gün Seni Neler Bekler?",
      excerpt: "Stüdyoya ilk gelişinde karşılaşacağın süreci ve ders öncesi küçük detayları anlattık.",
      slug: "vira-yogada-ilk-gun-seni-neler-bekler",
      image: "/image/blog/blog-8.jpg",
      readTime: "4 dk okuma",
      category: "Stüdyo Hayatı",
      content: [
        { body: "Yeni bir stüdyoya ilk kez gelmek kimi zaman tedirgin edici hissettirilebilir. Ne yapman gerektiğini bilmemek, nereye gideceğini merak etmek normal. Bu yazıda Vira Yoga'ya ilk gelişinde seni neler beklediğini paylaşıyoruz." },
        { heading: "Kapıdan girerken", body: "Stüdyoya geldiğinde seni karşılarız. İlk kez geldiğini söylemen yeterli — seni yönlendiririz, soruların varsa cevaplarız ve eğitmenle tanışmanı sağlarız." },
        { heading: "Ders öncesinde", body: "Mümkünse dersten 10–15 dakika önce gelmen, hem stüdyoyu tanıman hem de hazırlanman açısından daha rahat bir başlangıç yapmanı sağlar." },
        { heading: "Ders sırasında", body: "Eğitmen sana nefes, duruş ve geçişler konusunda yönlendirme yapar. Zorlandığın bir harekette durabilir, dinlenebilir ya da daha basit bir alternatifi tercih edebilirsin." },
        { heading: "Ders sonrasında", body: "Dersin nasıl geçtiğini konuşmak, sana uygun diğer dersleri veya paket seçeneklerini öğrenmek istersen ders sonrasında bizimle sohbet edebilirsin.", inlineCta: { text: "Bize Ulaş", href: "/#contact" } },
      ],
    },
  ];
};

export const fetchBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const posts = await fetchBlogPosts();
  return posts.find((p) => p.slug === slug) ?? null;
};

export const fetchMemberships = async (): Promise<Membership[]> => {
  return [
    {
      id: "1",
      title: "Tek Ders",
      description: "Stüdyoyu ve dersleri deneyimlemek için",
      price: "₺X",
      features: ["1 grup ders hakkı", "Seçili grup derslerinde geçerli"],
      buttonText: "Satın Al",
    },
    {
      id: "2",
      title: "Başlangıç Paketi",
      description: "Yoga pratiğini keşfetmek isteyenler için",
      price: "₺X",
      highlight: "YENİ BAŞLAYANLAR İÇİN ÖNERİLİR",
      features: [
        "X grup ders hakkı",
        "Geçerlilik süresi: X gün",
        "Temel derslere katılım imkanı",
      ],
      buttonText: "Hemen Başla",
    },
    {
      id: "3",
      title: "8 Ders Paketi",
      description: "Esnek zamanlı düzenli pratik",
      price: "₺X",
      features: [
        "8 grup ders hakkı",
        "Geçerlilik süresi: X gün",
        "Tüm grup derslerinde geçerli",
      ],
      buttonText: "Satın Al",
    },
    {
      id: "4",
      title: "1 Ay Sınırsız",
      description: "Düzenli ve yoğun pratik için ideal",
      price: "₺X",
      priceSuffix: " /ay",
      features: ["Sınırsız stüdyo dersi", "Geçerlilik süresi: 30 gün"],
      buttonText: "Satın Al",
    },
    {
      id: "5",
      title: "3 Ay Sınırsız",
      description: "Uzun dönemli rutin oluşturmak için",
      price: "₺X",
      priceSuffix: " /3 ay",
      features: ["Sınırsız stüdyo dersi", "Geçerlilik süresi: 90 gün"],
      buttonText: "Satın Al",
    },
  ];
};

export const fetchContacts = async (): Promise<ContactInfo[]> => {
  return [
    {
      id: "1",
      icon: "location_on",
      title: "Adres",
      details: "Vira Yoga Stüdyosu\nModa Cad. No: 123\nKadıköy, İstanbul",
      action: {
        text: "Yol Tarifi Al",
        icon: "directions",
        href: "https://maps.google.com",
        target: "_blank",
        variant: "outline",
      },
    },
    {
      id: "2",
      icon: "call",
      title: "Telefon",
      details: "+90 (555) 123 45 67\nHafta içi: 09:00 - 20:00",
      action: {
        text: "Bizi Ara",
        icon: "call",
        href: "tel:+905551234567",
        variant: "primary",
      },
    },
    {
      id: "3",
      icon: "mail",
      title: "E-posta",
      details: "info@virayoga.com\niletisim@virayoga.com",
      action: {
        text: "E-mail Gönder",
        icon: "mail",
        href: "mailto:info@virayoga.com",
        variant: "outline",
      },
    },
  ];
};
