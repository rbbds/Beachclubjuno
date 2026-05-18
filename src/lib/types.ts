export interface SanityImage {
  _type: 'image';
  asset: { _ref: string; _type: string };
  hotspot?: { x: number; y: number; height: number; width: number };
}

export interface Artist {
  name: string;
  photo: SanityImage;
  bio: string;
}

export interface SanityEvent {
  _id: string;
  title: string;
  slug: { current: string };
  date: string;
  time: string;
  doorsOpen: string;
  price: string;
  category: 'Comedy' | 'Jazz' | 'Theater' | 'Pop & Dans' | 'Speciaal' | 'Bruiloften' | 'Zakelijke events' | 'Particuliere events';
  description: string;
  image: SanityImage;
  artist: Artist;
  featured: boolean;
  order: number;
  ticket_url?: string;
}

export interface OpeningHour { days: string; hours: string; }

export interface SiteSettings {
  phone: string;
  email: string;
  address: { street: string; postal: string; city: string };
  openingHours: OpeningHour[];
  instagram: string;
  facebook: string;
  mapsEmbed: string;
}

export interface WatersportActivity {
  _id: string;
  title: string;
  cardTitle: string;
  image: SanityImage;
  description: string;
  extraLine?: string;
  buttonText: string;
  buttonLink: string;
  order: number;
}

export interface FaqItem { question: string; answer: string; }
export interface FaqGroup { label: string; items: FaqItem[]; }
