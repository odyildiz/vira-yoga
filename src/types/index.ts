export interface Schedule {
  id: string;
  startTime: string;
  endTime: string;
  duration: number;
  title: string;
  level: string;
  instructor: string;
  studio: string;
  opacity?: number;
  image?: string;
}

export interface WeeklyScheduleItem {
  id: number;
  day: string;
  start: string;
  end: string;
  name: string;
  teacher: string;
  level: string;
  type: string;
  tags: string[];
}

export interface ClassDetails {
  description: string;
  suitableFor: string;
  ctas: { label: string; type: "primary" | "secondary"; link: string }[];
}

export interface ClassInfo {
  id: string;
  title: string;
  description: string;
  duration: number;
  image: string;
  colSpan?: number;
}

export interface Teacher {
  id: string;
  name: string;
  specialty: string;
  image?: string;
  socials: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
}

export interface BlogPostSection {
  heading?: string;
  body: string;
  inlineCta?: { text: string; href: string };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  image?: string;
  readTime?: string;
  category?: string;
  content?: BlogPostSection[];
}

export interface Membership {
  id: string;
  title: string;
  description: string;
  price: string;
  priceSuffix?: string;
  features: string[];
  highlight?: string;
  buttonText: string;
  image?: string;
}

export interface ContactInfo {
  id: string;
  icon: string;
  title: string;
  details: React.ReactNode | string;
  image?: string;
  action: {
    text: string;
    icon?: string;
    href: string;
    target?: string;
    variant: "outline" | "primary" | "green";
  };
}
