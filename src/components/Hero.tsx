 import { Button } from "@/components/ui/button";

const COLLECTION_URL =
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
        pt-[92px] sm:pt-28 lg:pt-24
        pb-20
      "
    >
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-stretch">
          {/* LEFT */}
          <div className="flex flex-col animate-fade-in">
            {/* TOP BLOCK (на мобилке ниже и без пустоты) */}
            <div className="space-y-7 mt-6 sm:mt-0">
              <h1
                className="
                  font-serif font-medium text-foreground
                  text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                  leading-[1.05]
                  text-center sm:text-left
                "
              >
                Re:SILK
              </h1>

              {/* TAGS */}
              <div
                className="
                  flex flex-col items-center text-center gap-3
                  sm:flex-row sm:items-center sm:text-left sm:gap-4
                  mt-3 pt-8 lg:pt-50
                "
              >
                <span className="text-xs sm:text-sm tracking-[0.25em] uppercase">
                  New collection
                </span>

                <span className="rounded-lg border border-primary/40 bg-primary/10 px-5 py-2 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-primary">
                  Upcycled ties
                </span>
              </div>

              {/* TEXT — СДЕЛАЛИ БОЛЬШЕ */}
             <p
  className="
    text-muted-foreground whitespace-pre-line
    text-[1.05rem] sm:text-[1.15rem] lg:text-[1.3rem]
    leading-[1.7]
    text-center sm:text-left
    mx-auto sm:mx-0
    max-w-[520px] lg:max-w-[600px]
    pt-12 lg:pt-8
  "
>
                {`Re:SILK is a limited drop of silk sleep mask and scrunchie sets, created from deadstock premium men’s silk ties — reimagined into pieces of calm, care, and conscious living.

Only 50 sets were created, and each one is truly one of a kind.

Upcycled. Thoughtful. Limited.`}
              </p>
            </div>

            {/* BUTTONS — НЕ ТРОГАЕМ */}
            <div
              className="
                mt-10 sm:mt-auto
                pt-8 sm:pt-10
                flex flex-col gap-4
                items-center
                sm:flex-row sm:items-start
              "
            >
              <Button
                variant="luxury"
                size="lg"
                onClick={scrollToContact}
                className="w-[240px] sm:w-[300px]"
              >
                Check availability
              </Button>

              <Button
                variant="luxuryOutline"
                size="lg"
                onClick={goToCollection}
                className="w-[240px] sm:w-[300px]"
              >
                Reserve your piece
              </Button>
            </div>
          </div>

          {/* RIGHT (desktop only) */}
          <div className="relative hidden lg:flex flex-col">
            <div className="mt-auto">
              <div className="border-[2.5px] border-border/70 p-[6px]">
                <div className="relative overflow-hidden">
                  <img
                    src={heroImg}
                    alt="Re:SILK — upcycled silk sleep mask with scrunchie strap"
                    className="w-full h-[600px] object-cover"
                    style={{ objectPosition: "80% 92%" }}
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /RIGHT */}
        </div>
      </div>
    </section>
  );
};

export default Hero;