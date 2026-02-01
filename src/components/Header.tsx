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
      label: "Re:SILK Collection",
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

    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      closeMenu();
    }
  };

  const linkClass =
    "text-sm uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors duration-300";

  // logo из public (прозрачный PNG!)
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
      <div className="container mx-auto px-6">
        <div className="flex h-[72px] items-center justify-between">
          {/* LOGO */}
          <button
            type="button"
            onClick={() => go("#contact")}
            className="flex items-center gap-4 group"
            aria-label="Go to contact"
          >
            <img
              src={logoSrc}
              alt="Silk4me logo"
              className="
                h-10 w-10 object-contain
                bg-transparent
                transition-transform duration-300
                group-hover:scale-105
              "
              draggable={false}
            />

            <span className="text-[26px] font-serif tracking-[0.35em] text-foreground">
              SILK
              <span className="text-[#1f4c41]">4</span>
              ME
            </span>
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
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

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            className="md:hidden text-foreground"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE NAV */}
        {isOpen && (
          <nav className="md:hidden pb-6 pt-4 border-t border-black/5">
            <div className="flex flex-col gap-5">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className={linkClass}
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
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;