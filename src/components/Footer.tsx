import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-silk-charcoal border-t border-background/10">
      <div
        className="
          container mx-auto px-6
          py-8 md:py-12
        "
      >
        <div
          className="
            flex flex-col items-center text-center
            gap-6
            md:grid md:grid-cols-3 md:items-center md:text-left
            md:gap-0
          "
        >
          {/* Logo */}
          <a
            href="#"
            className="
              text-xl md:text-2xl
              font-serif tracking-[0.3em]
              text-background
              md:justify-self-start
            "
          >
            SILK<span className="text-gold">4</span>ME
          </a>

          {/* Copyright */}
         <p className="
  text-sm text-background/70 leading-relaxed
  text-center
  md:whitespace-nowrap
">
  © 2026 Silk4me. All rights reserved.
  <span className="md:ml-2 block md:inline">
    Premium silk brand from Ukraine.
  </span>
</p>

          {/* Social Links */}
          <div
            className="
              flex items-center justify-center gap-4
              md:justify-self-end
              mt-2 md:mt-0
            "
          >
            <a
              href="https://www.instagram.com/silk4me"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-9 h-9 md:w-10 md:h-10
                border border-background/30
                flex items-center justify-center
                text-background/70
                hover:text-gold hover:border-gold
                transition-colors duration-300
              "
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100068452338885"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-9 h-9 md:w-10 md:h-10
                border border-background/30
                flex items-center justify-center
                text-background/70
                hover:text-gold hover:border-gold
                transition-colors duration-300
              "
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;