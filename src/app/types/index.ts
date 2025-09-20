// src/types/index.ts
export interface Service {
  name: string;
  price: string;
  duration: string;
}

export interface ServiceCategory {
  category: string;
  items: Service[];
}

export interface GalleryImage {
  url: string;
  alt: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  service: string;
}

// src/lib/data.ts
import { ServiceCategory, GalleryImage, Testimonial } from '@/types';

export const services: ServiceCategory[] = [
  {
    category: "Lash Extensions",
    items: [
      { name: "Classic Lash Extensions", price: "RM120", duration: "2 hours" },
      { name: "Volume Lash Extensions", price: "RM150", duration: "2.5 hours" },
      { name: "Mega Volume Lashes", price: "RM180", duration: "3 hours" },
      { name: "Lash Lift & Tint", price: "RM80", duration: "1.5 hours" }
    ]
  },
  {
    category: "Brow Services",
    items: [
      { name: "Eyebrow Threading", price: "RM25", duration: "30 mins" },
      { name: "Brow Lamination", price: "RM70", duration: "1 hour" },
      { name: "Brow Tinting", price: "RM35", duration: "45 mins" },
      { name: "Brow Sculpting", price: "RM90", duration: "1.5 hours" }
    ]
  },
  {
    category: "Facial Treatments",
    items: [
      { name: "Classic Facial", price: "RM60", duration: "1 hour" },
      { name: "Hydrafacial", price: "RM120", duration: "1.5 hours" },
      { name: "Anti-Aging Treatment", price: "RM150", duration: "2 hours" },
      { name: "Acne Treatment", price: "RM80", duration: "1 hour" }
    ]
  }
];

export const galleryImages: GalleryImage[] = [
  { url: "/images/gallery/lash-1.jpg", alt: "Classic Lash Extensions" },
  { url: "/images/gallery/brow-1.jpg", alt: "Brow Lamination" },
  { url: "/images/gallery/lash-2.jpg", alt: "Volume Lash Extensions" },
  { url: "/images/gallery/facial-1.jpg", alt: "Hydrafacial Treatment" },
  { url: "/images/gallery/lash-3.jpg", alt: "Mega Volume Lashes" },
  { url: "/images/gallery/brow-2.jpg", alt: "Brow Sculpting" }
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Michelle",
    text: "Absolutely love my lash extensions! Zia is so professional and talented. My lashes look amazing and natural.",
    rating: 5,
    service: "Volume Lash Extensions"
  },
  {
    name: "Priya Kumar", 
    text: "Best brow lamination I've ever had! The results lasted for weeks and looked perfect every day.",
    rating: 5,
    service: "Brow Lamination"
  },
  {
    name: "Lisa Wong",
    text: "The facial treatment was incredibly relaxing and my skin has never looked better. Highly recommend!",
    rating: 5,
    service: "Hydrafacial"
  }
];

// src/lib/utils.ts
export const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

export const formatPrice = (price: string): string => {
  return price.replace('RM', 'RM ');
};

export const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};