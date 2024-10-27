type NavLink = {
  href: string;
  text: string;
};

export function getNavLinks(locale: string): NavLink[] {
  const links: Record<string, NavLink[]> = {
    es: [
      { href: '/servicios', text: 'Servicios' },
      { href: '/sobre-mi', text: 'Sobre Mí' },
      { href: '/blog', text: 'Blog' },
      { href: '/contacto', text: 'Contacto' },
    ],
    ca: [
      { href: '/serveis', text: 'Serveis' },
      { href: '/sobre-mi', text: 'Sobre Mi' },
      { href: '/blog', text: 'Blog' },
      { href: '/contacte', text: 'Contacte' },
    ],
    en: [
      { href: '/services', text: 'Services' },
      { href: '/about', text: 'About' },
      { href: '/blog', text: 'Blog' },
      { href: '/contact', text: 'Contact' },
    ],
  };

  return links[locale] || links.es;
}