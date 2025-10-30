export type NavLinkItem = {
    title: string;
    path: string;
  };
  
  const navigationLinks: NavLinkItem[] = [
    { title: 'About', path: '/about' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Skills', path: '/skills' },
  ];
  
  export default navigationLinks;  