
import { ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: ReactNode;
  features: string[];
  benefits: string[];
  useCases?: string[];
  cta: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  contact?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface Template {
  id: string;
  title: string;
  category: string;
  price: string;
  users: number;
  image: string;
}
