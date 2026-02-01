import { Button } from "@/components/ui/button";

const COLLECTION_URL =
  "https://silk4.me/ua/shop_ua/resilk_sleep_mask__scrunchie_ua/";
const PRODUCT_URL =
  "https://silk4.me/ua/shop_ua/resilk_sleep_mask__scrunchie_ua/";

const Hero = () => {
  const heroImg = `${import.meta.env.BASE_URL}girlwithscrunchie.jpg`;

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goToCollection = () => {
    window.open(COLLECTION_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="
        relative min-h-screen flex items-center overflow-hidden
        pt-20 sm:pt-24 lg:pt-14
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div className="space-y-7 animate-fade-in">
            <div className="space-y-3">
              <button
                type="button"
                onClick={goToCollection}
                className="text-left group"
                aria-label="Go to Re:SILK collection"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground group-hover:text-primary transition-colors">
                  Re:SILK
                </h1>
              </button>
            </div>

            <p className="text-muted-foreground text-xl leading-relaxed max-w-xl whitespace-pre-line">
{`Re:SILK is a new chapter of silk.

A collection of sleep masks with elastic straps,
crafted from reclaimed silk neckties.

Each piece is one of a kind —
carefully reworked to support your sleep,
your skin, and your hair.

Upcycled. Thoughtful. Limited.`}
            </p>

            <div
              className="
                mt-6 flex flex-col items-center text-center gap-3
                sm:flex-row sm:items-center sm:text-left sm:justify-start sm:gap-4
              "
            >
              <span className="text-sm tracking-[0.25em] uppercase text-foreground">
                New collection
              </span>

              <span
                className="
                  rounded-lg border border-primary/40 bg-primary/10
                  px-5 py-2 text-sm font-semibold
                  tracking-[0.3em] uppercase text-primary
                "
              >
                Upcycled ties
              </span>
            </div>

            <div
              className="
                flex flex-col items-center gap-4 pt-6
                sm:flex-row sm:items-start
              "
            >
              <Button
                variant="luxury"
                size="lg"
                onClick={scrollToContact}
                className="w-full max-w-[320px] sm:w-[320px]"
              >
                Learn more
              </Button>

              <Button
                variant="luxuryOutline"
                size="lg"
                onClick={goToCollection}
                className="w-full max-w-[320px] sm:w-[320px]"
              >
                View Re:SILK
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-border/50 max-w-xl">
              <div className="text-center">
                <div className="text-4xl font-medium text-foreground">100%</div>
                <p className="mt-1 text-sm uppercase tracking-wide text-muted-foreground">
                  Mulberry silk
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-medium text-foreground">1/1</div>
                <p className="mt-1 text-sm uppercase tracking-wide text-muted-foreground">
                  one of a kind
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-medium text-foreground">Re</div>
                <p className="mt-1 text-sm uppercase tracking-wide text-muted-foreground">
                  Recycled
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />

            <div className="relative overflow-hidden">
              <img
                src={heroImg}
                alt="Re:SILK — upcycled silk sleep mask with scrunchie strap"
                // ВАЖНО: обрезаем СВЕРХУ, сохраняем низ (руки/маска/скранчи)
                className="w-full h-[600px] object-cover"
                style={{ objectPosition: "80% bottom" }}
                draggable={false}
              />

              {/* Бейдж поднимаем наверх в белую зону */}
              <a
                href={PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  absolute right-[20%] top-[60%]
                  bg-background/90 backdrop-blur-sm
                  border border-border/50
                  px-6 py-4 max-w-[360px]
                  shadow-sm hover:shadow-md transition-shadow
                "
                style={{ animation: "badge-float 3.6s ease-in-out infinite" }}
              >
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2 text-center">
                  New drop
                </p>
                <p className="text-lg font-serif text-foreground">
                  Re:SILK sleep mask with scrunchie
                </p>
                <p className="mt-2 text-xs underline underline-offset-4 text-muted-foreground text-center">
                  Open product page
                </p>
              </a>
            </div>

            <style>{`
              @keyframes badge-float {
                0% { transform: translate(0,0); }
                50% { transform: translate(40px, -30px); }
                100% { transform: translate(0,0); }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;