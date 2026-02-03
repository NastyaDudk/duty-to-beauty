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
        relative overflow-hidden
        pt-24 sm:pt-28 lg:pt-24
        pb-20
      "
    >
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* GRID — растягиваем по высоте */}
        <div className="grid lg:grid-cols-2 gap-14 items-stretch">
          {/* LEFT */}
          <div className="flex flex-col animate-fade-in">
            {/* TEXT */}
            <div className="space-y-7">
              <h1
                className="
                  font-serif font-medium text-foreground
                  text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                  leading-[1.05]
                "
              >
                Re:SILK
              </h1>

              <p
                className="
                  text-muted-foreground leading-relaxed max-w-xl whitespace-pre-line
                  text-base sm:text-lg lg:text-xl
                "
              >
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
                  flex flex-wrap gap-4 pt-2
                  items-center
                  justify-center text-center
                  sm:justify-start sm:text-left
                "
              >
                <span className="text-xs sm:text-sm tracking-[0.25em] uppercase">
                  New collection
                </span>

                <span className="rounded-lg border border-primary/40 bg-primary/10 px-5 py-2 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-primary">
                  Upcycled ties
                </span>
              </div>
            </div>

            {/* BUTTONS — ЯКОРЬ НИЗА */}
            <div
              className="
                mt-10 sm:mt-auto
                pt-8 sm:pt-10
                flex flex-col gap-4
                sm:flex-row sm:items-start
              "
            >
              <Button
                variant="luxury"
                size="lg"
                onClick={scrollToContact}
                className="w-full sm:w-[300px]"
              >
                Check availability
              </Button>

              <Button
                variant="luxuryOutline"
                size="lg"
                onClick={goToCollection}
                className="w-full sm:w-[300px]"
              >
                Reserve your piece
              </Button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative hidden lg:flex flex-col">
            {/* картинку ПРИЖИМАЕМ ВНИЗ */}
            <div className="mt-auto">
              <div className="border-[2.5px] border-border/70 p-[6px]">
                <div className="relative overflow-hidden">
                  <img
                    src={heroImg}
                    alt="Re:SILK — upcycled silk sleep mask with scrunchie strap"
                    className="w-full h-[600px] object-cover"
                    style={{ objectPosition: "80% 92%" }} // было: "80% bottom"
                    draggable={false}
                  />

                  <a
                    href={PRODUCT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      absolute right-[14%] top-[62%]
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
              </div>
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