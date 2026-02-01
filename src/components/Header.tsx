import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const FOREST = "#1f4c41";

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
  const toggleMenu = () => setIsOpen((v) => !v);

  // ✅ lock body scroll when mobile menu open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // ✅ close on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

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
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu();
    }
  };

  const linkClass =
    "uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors duration-300";

  // ✅ logo must be in /public/logo.png (transparent PNG)
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;

  return (
    <>
      {/* TOP BAR */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
        <div className="container mx-auto px-6">
          <div className="flex h-[76px] items-center justify-between">
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
                className="h-12 w-12 object-contain bg-transparent transition-transform duration-300 group-hover:scale-105"
                draggable={false}
              />

              <span className="text-[28px] font-serif tracking-[0.35em] text-foreground leading-none">
                SILK
                <span style={{ color: FOREST }}>4</span>
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
                    className={`text-sm ${linkClass}`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => go(item)}
                    className={`text-sm ${linkClass}`}
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
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-white">
          {/* TOP LINE */}
          <div className="flex items-center justify-between px-6 h-[76px] border-b border-black/5">
            <div className="flex items-center gap-3">
              <img
                src={logoSrc}
                alt="Silk4me logo"
                className="h-11 w-11 object-contain"
                draggable={false}
              />
              <span className="text-[24px] font-serif tracking-[0.33em] text-foreground leading-none">
                SILK<span style={{ color: FOREST }}>4</span>ME
              </span>
            </div>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="text-foreground"
            >
              <X size={30} />
            </button>
          </div>

          {/* CENTER MENU */}
          <nav className="h-[calc(100vh-76px)] flex flex-col items-center justify-center gap-10 px-6 text-center">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="text-xl uppercase tracking-[0.35em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => go(item)}
                  className="text-xl uppercase tracking-[0.35em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              )
            )}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;