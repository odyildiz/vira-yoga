import { Schedule, ClassInfo, Teacher, BlogPost, Membership, ContactInfo } from "@/types";

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
      name: "Sarah Jenkins",
      specialty: "Vinyasa & Hatha",
      socials: {
        instagram: "#",
        twitter: "#",
      },
    },
    {
      id: "2",
      name: "Marcus Chen",
      specialty: "Ashtanga & Meditasyon",
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
    },
    {
      id: "2",
      title: "Yin Yoga'nın Derinliklerine İn",
      excerpt: "Bedenin derin dokularına ulaşmanın yolları ve faydaları.",
      slug: "yin-yoganin-derinliklerine-in",
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
