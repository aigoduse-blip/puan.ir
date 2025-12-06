
import React from 'react';

export type Page = 'home' | 'services' | 'pricing' | 'about' | 'contact' | 'blog' | 'blog-detail' | 'templates' | 'template-detail' | 'service-detail' | 'demo' | 'careers';

interface NavigationContextType {
  page: Page;
  setPage: (page: Page) => void;
  serviceId: string | null;
  setServiceId: (id: string | null) => void;
  blogPostId: string | null;
  setBlogPostId: (id: string | null) => void;
  templateId: string | null;
  setTemplateId: (id: string | null) => void;
  scrollToSection: (sectionId: string) => void;
}

export const NavigationContext = React.createContext<NavigationContextType>({
  page: 'home',
  setPage: () => {},
  serviceId: null,
  setServiceId: () => {},
  blogPostId: null,
  setBlogPostId: () => {},
  templateId: null,
  setTemplateId: () => {},
  scrollToSection: () => {},
});
