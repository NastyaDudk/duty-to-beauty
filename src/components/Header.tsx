import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "About", href: "#about" },
    {
      label: "re:silk Collection",
      href: "https://silk4.me/ua/shop_ua/resilk_sleep_mask__scrunchie_ua/",
      external: true,
    },
    { label: "Pricing", href: "#pricing" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  const go = (itemOrHref: NavItem | string) => {
    const href = typeof itemOrHref === "string" ? itemOrHref : itemOrHref.href;
    const isExternal =
      typeof itemOrHref === "string"
        ? /^https?:\/\//i.test(href)
        : !!itemOrHref.external || /^https?:\/\//i.test(href);

    if (isExternal) {
      window.open(href, "_blank", "noopener,noreferrer");
      closeMenu();
      return;
    }

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      closeMenu();
      return;
    }

    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu();
    }
  };

  const linkClass =
    "text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300";

  // ✅ logo.png должен лежать в /public/logo.png
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo → Contact */}
          <button
            type="button"
            onClick={() => go("#contact")}
            className="flex items-center gap-3 group"
            aria-label="Get a consultation"
          >
            <img
              src={logoSrc}
              alt="Silk4me logo"
              className="h-8 w-8 object-contain transition-opacity group-hover:opacity-80"
              draggable={false}
            />
            <span className="text-2xl font-serif tracking-[0.3em] text-foreground">
              SILK<span className="text-primary">4</span>ME
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => go(item)}
                  className={linkClass}
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          {/* Mobile Button */}
          <button
            type="button"
            className="md:hidden text-foreground"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden pt-6 pb-4 border-t border-black/10 mt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`${linkClass} text-left`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => go(item)}
                    className={`${linkClass} text-left`}
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;