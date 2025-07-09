interface NavigationItem {
  href: string;
  text: string;
  isActive?: boolean;
}

export const navigationItems: NavigationItem[] = [
  { href: 'home', text: 'Home', isActive: true },
  { href: 'about', text: 'About Me' },
  { href: 'portfolio', text: 'Portfolio' },
  { href: 'testimonials', text: 'Testimonials' },
  { href: 'blog', text: 'Blog' }
];
