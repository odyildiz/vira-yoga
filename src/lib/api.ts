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
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=600&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop",
    },
  ];
};

export const fetchWeeklySchedules = async (): Promise<WeeklyScheduleItem[]> => {
  return [
    { id: 1, day: 'Pazartesi', start: '09:00', end: '10:00', name: 'Hatha Yoga', teacher: 'Ayşe', level: 'Her Seviye', type: 'Hatha', tags: ['Yeni başlayanlara uygun', 'Dengeli tempo'] },
    { id: 2, day: 'Pazartesi', start: '19:00', end: '20:00', name: 'Vinyasa Yoga', teacher: 'Mert', level: 'Orta Seviye', type: 'Vinyasa', tags: ['Dinamik', 'Akış odaklı'] },
    { id: 3, day: 'Salı', start: '10:00', end: '11:00', name: 'Yin Yoga', teacher: 'Zeynep', level: 'Her Seviye', type: 'Yin', tags: ['Sakin', 'Gevşeme odaklı'] },
    { id: 4, day: 'Salı', start: '18:30', end: '19:30', name: 'Başlangıç Yoga', teacher: 'Ayşe', level: 'Yeni Başlayan', type: 'Hatha', tags: ['Yeni başlayanlara uygun', 'Temel duruşlar'] },
    { id: 5, day: 'Çarşamba', start: '09:00', end: '10:00', name: 'Nefes ve Meditasyon', teacher: 'Zeynep', level: 'Her Seviye', type: 'Nefes', tags: ['Nefes odaklı', 'Sakin'] },
    { id: 6, day: 'Çarşamba', start: '19:00', end: '20:00', name: 'Hatha Yoga', teacher: 'Ayşe', level: 'Her Seviye', type: 'Hatha', tags: ['Yeni başlayanlara uygun', 'Dengeli tempo'] },
    { id: 7, day: 'Perşembe', start: '18:30', end: '19:30', name: 'Vinyasa Yoga', teacher: 'Mert', level: 'Orta Seviye', type: 'Vinyasa', tags: ['Dinamik', 'Akış odaklı'] },
    { id: 8, day: 'Cuma', start: '10:00', end: '11:00', name: 'Yin Yoga', teacher: 'Zeynep', level: 'Her Seviye', type: 'Yin', tags: ['Sakin', 'Gevşeme odaklı'] },
    { id: 9, day: 'Cumartesi', start: '11:00', end: '12:00', name: 'Başlangıç Yoga', teacher: 'Ayşe', level: 'Yeni Başlayan', type: 'Hatha', tags: ['Yeni başlayanlara uygun', 'Temel duruşlar'] },
  ];
};

export const fetchClassDetailsMap = async (): Promise<Record<string, ClassDetails>> => {
  return {
    'Hatha Yoga': {
        description: 'Duruş, nefes ve beden farkındalığını dengeli şekilde çalışmak isteyenler için uygundur.',
        suitableFor: 'Yeni başlayanlar ve sakin tempoda pratik yapmak isteyenler.',
        ctas: [{label: 'WhatsApp’tan Sor', type: 'primary', link: 'https://wa.me/905551234567'}, {label: 'Bizi Ara', type: 'secondary', link: 'tel:+905551234567'}]
    },
    'Vinyasa Yoga': {
        description: 'Nefesle hareketi birleştiren, daha akışkan ve dinamik bir yoga pratiğidir.',
        suitableFor: 'Daha hareketli bir ders isteyen ve temel yoga deneyimi olan kişiler.',
        ctas: [{label: 'WhatsApp’tan Sor', type: 'primary', link: 'https://wa.me/905551234567'}, {label: 'Bizi Ara', type: 'secondary', link: 'tel:+905551234567'}]
    },
    'Yin Yoga': {
        description: 'Daha yavaş, sakin ve gevşeme odaklı bir pratik arayanlar için uygundur.',
        suitableFor: 'Her seviyeden katılımcı için uygundur.',
        ctas: [{label: 'WhatsApp’tan Sor', type: 'primary', link: 'https://wa.me/905551234567'}, {label: 'Bizi Ara', type: 'secondary', link: 'tel:+905551234567'}]
    },
    'Başlangıç Yoga': {
        description: 'Yoga’ya yeni başlayanlar için temel duruşların ve nefes farkındalığının anlatıldığı derstir.',
        suitableFor: 'Daha önce yoga yapmamış kişiler.',
        ctas: [{label: 'Bu Ders Bana Uygun mu?', type: 'secondary', link: 'https://wa.me/905551234567'}, {label: 'WhatsApp’tan Sor', type: 'primary', link: 'https://wa.me/905551234567'}]
    },
    'Nefes ve Meditasyon': {
        description: 'Nefes farkındalığı, odaklanma ve zihinsel sakinlik üzerine çalışılır.',
        suitableFor: 'Sakin bir pratik isteyen herkes.',
        ctas: [{label: 'WhatsApp’tan Sor', type: 'primary', link: 'https://wa.me/905551234567'}, {label: 'Bizi Ara', type: 'secondary', link: 'tel:+905551234567'}]
    }
  };
};

export const fetchClasses = async (): Promise<ClassInfo[]> => {
  return [
    {
      id: "1",
      title: "Vinyasa Akışı",
      description: "Nefesi harekete bağlayan, ısı, güç ve akıcılık oluşturmak için tasarlanmış dinamik bir pratik. Şehrin gerginliğini atmak için mükemmel.",
      duration: 60,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6T8YGtWtdYnzpujYnvXhzoiF4MsJYqpl5yIwswQQ5xY80PQPr7iOw_C5EoqdCR_SEJRuB1_3T2H39YOvvqQWfuPY_mMzaRYtW6n8WSgYFsWJEZcJdVRDClwRTyoB4h7j8Hji5biKVD3wCYauRNCaYlZFkhNQtIzjWCHeCl-pjV9EL5HXhhKiYve0NyvVzIp3f9McnAXskpcvPVjFwXHvEYk72YkyT4eNqSZgMdHMYHGUEF49oi6A__Su-PpFhuHqiPvrmFfUDjwqN",
      colSpan: 2,
    },
    {
      id: "2",
      title: "Yin Yoga",
      description: "Bağ dokularını hedefleyen derin, pasif duruşlar. Tempolu şehir hayatı için gerekli bir dengeleyici.",
      duration: 75,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "3",
      title: "Rehberli Meditasyon",
      description: "Rehberli nefes çalışmaları ve farkındalık teknikleri ile odaklanma ve zihinsel netlik geliştirin.",
      duration: 30,
      image: "https://images.pexels.com/photos/32062397/pexels-photo-32062397/free-photo-of-group-meditation-session-in-yoga-class.jpeg",
    },
    {
      id: "4",
      title: "Hamak Akışı",
      description: "Nefesi harekete bağlayan, ısı, güç ve akıcılık oluşturmak için tasarlanmış dinamik bir pratik. Şehrin gerginliğini atmak için mükemmel.",
      duration: 60,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Aerial_Yoga.jpg/500px-Aerial_Yoga.jpg",
      colSpan: 2,
    },
  ];
};

export const fetchTeachers = async (): Promise<Teacher[]> => {
  return [
    {
      id: "1",
      name: "Selen Şenocak",
      specialty: "Vinyasa & Hatha & Aerial",
      image: "https://instagram.fist11-1.fna.fbcdn.net/v/t51.82787-15/625880335_18344065954225315_5651658455366894653_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MjY4MTU4MjY1Nzk3OTE3NTEyOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY4MHg2ODAuc2RyLkMzIn0%3D&_nc_ohc=CvEo2EXaF18Q7kNvwE5RorB&_nc_oc=AdqxksdwM1zKBDXRN6DE-a183By77lF1lxfgdpgjfzbV2GiwymjrOUy66NWOcef09M8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fist11-1.fna&_nc_gid=_FeBJLcp9AJUCpmD53LBIg&_nc_ss=7a22e&oh=00_Af3cBA5QKRfWxFsrVrTm3wzUE01CwTTWIeNtvQ4-sRgUew&oe=69F6C028",
      socials: {
        instagram: "https://www.instagram.com/selensenocak/",
      },
    },
    {
      id: "2",
      name: "Marcus Chen",
      specialty: "Ashtanga & Meditasyon",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
      socials: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      id: "3",
      name: "Elena Rostova",
      specialty: "Yin Yoga & Restoratif",
      image: "https://images.unsplash.com/photo-1517436073-3b1b1160a57e?q=80&w=600&auto=format&fit=crop",
      socials: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
      },
    },
  ];
};

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  return [
    {
      id: "1",
      title: "Şehir Hayatında Topraklanmak",
      excerpt: "Günlük koşuşturmaca içinde merkezimizi nasıl bulabiliriz?",
      slug: "sehir-hayatinda-topraklanmak",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "2",
      title: "Yin Yoga'nın Derinliklerine İn",
      excerpt: "Bedenin derin dokularına ulaşmanın yolları ve faydaları.",
      slug: "yin-yoganin-derinliklerine-in",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop",
    },
  ];
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
      image: "https://images.unsplash.com/photo-1552196563-552592f13b63?q=80&w=600&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1517436073-3b1b1160a57e?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "4",
      title: "1 Ay Sınırsız",
      description: "Düzenli ve yoğun pratik için ideal",
      price: "₺X",
      priceSuffix: " /ay",
      features: ["Sınırsız stüdyo dersi", "Geçerlilik süresi: 30 gün"],
      buttonText: "Satın Al",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "5",
      title: "3 Ay Sınırsız",
      description: "Uzun dönemli rutin oluşturmak için",
      price: "₺X",
      priceSuffix: " /3 ay",
      features: ["Sınırsız stüdyo dersi", "Geçerlilik süresi: 90 gün"],
      buttonText: "Satın Al",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=600&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1497250681554-182325dd7872?q=80&w=600&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=600&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=600&auto=format&fit=crop",
      action: {
        text: "E-mail Gönder",
        icon: "mail",
        href: "mailto:info@virayoga.com",
        variant: "outline",
      },
    },
  ];
};
