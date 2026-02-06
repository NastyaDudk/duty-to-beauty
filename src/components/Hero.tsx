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
    pt-[64px] sm:pt-24 lg:pt-24
    pb-12 sm:pb-20 lg:pb-24
  "
>
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-stretch">
          {/* LEFT */}
          <div className="flex flex-col animate-fade-in">
            {/* TEXT */}
            <div className="space-y-5 sm:space-y-7">
              <h1
  className="
    mt-5 sm:mt-0
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
    flex flex-col items-center gap-2 text-center
    mt-1
    sm:mt-0
    sm:flex-row sm:items-center sm:gap-4 sm:text-left
  "
>
                <span className="text-xs sm:text-sm tracking-[0.25em] uppercase">
                  New collection
                </span>

                <span className="rounded-lg border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-primary">
                  Upcycled ties
                </span>
              </div>

              {/* TEXT */}
             <p
  className="
    text-muted-foreground whitespace-pre-line
    text-[1.05rem] sm:text-[1.15rem] lg:text-[1.3rem]
    leading-[1.6]
    text-center sm:text-left
    mx-auto sm:mx-0
    max-w-[520px] lg:max-w-[600px]
    pt-3 sm:pt-10 lg:pt-8
  "
>
{`Re:SILK is a limited drop of silk sleep mask and scrunchie sets, created from deadstock premium men’s silk ties — reimagined into pieces of calm, care, and conscious living.

Only 50 sets were created, and each one is truly one of a kind.

Upcycled. Thoughtful. Limited.`}
              </p>
            </div>

            {/* BUTTONS — НЕ ТРОГАЕМ ПО СТИЛЮ, ТОЛЬКО ОТСТУП */}
            <div
              className="
                mt-8 sm:mt-auto
                pt-6 sm:pt-10
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

          {/* RIGHT — desktop only */}
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