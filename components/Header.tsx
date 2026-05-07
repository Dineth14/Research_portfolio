type HeaderItem = {
  href: string;
  label: string;
};

type HeaderProps = {
  items: HeaderItem[];
};

export function Header({ items }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#about">
          Dineth Perera
        </a>
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
