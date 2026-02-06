import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const priceFacts = [
  "Sleep mask with matching scrunchie",
  "Handcrafted in small batches",
  "Made from cycled Mulberry silk ties",
];

const Pricing = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const featuredImg = `${import.meta.env.BASE_URL}tiemask.jpg`;

  return (
    <section
  id="pricing"
  className="
    bg-background
    py-14 sm:py-20 lg:py-24
  "
>
      <div className="container mx-auto px-6">
        {/* ✅ items-stretch = колонки одной высоты на десктопе */}
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* TEXT */}
          <div className="flex flex-col h-full">
            {/* верхний блок */}
            <div className="space-y-8">
              <div className="space-y-4 text-center lg:text-left">
                <p className="text-primary uppercase tracking-[0.3em] text-sm">
                  Pricing
                </p>

                <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground leading-tight">
                  Thoughtful pricing for a{" "}
                  <span className="text-primary">limited collection</span>
                </h2>
              </div>

              {/* ✅ больше на десктопе, читабельнее */}
              <p
                className="
                  text-foreground/70
                  leading-[1.75]
                  max-w-xl
                  text-[1.05rem] md:text-[1.15rem] lg:text-[1.3rem]
                  mx-auto lg:mx-0
                  text-center lg:text-left
                "
              >
                For €56, you receive the silk sleep mask set, with the scrunchie
                added as a complimentary gift.
              </p>

              <p
                className="
                  text-foreground/70
                  leading-[1.75]
                  max-w-xl
                  text-[1.05rem] md:text-[1.15rem] lg:text-[1.3rem]
                  mx-auto lg:mx-0
                  text-center lg:text-left
                  whitespace-pre-line
                "
              >
                {`A thoughtful Valentine’s Day present: a mask for him, a scrunchie for her.

For those who choose meaning over excess.`}
              </p>

              <ul className="space-y-4 max-w-xl mx-auto lg:mx-0">
                {priceFacts.map((fact, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 justify-center lg:justify-start"
                  >
                    <div className="mt-[6px] w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span
                      className="
                        text-foreground/80
                        leading-relaxed
                        text-[1.02rem] md:text-[1.08rem] lg:text-[1.15rem]
                      "
                    >
                      {fact}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ✅ низ якорим, чтобы совпасть по низу с картинкой */}
            <div className="mt-auto pt-10 text-center lg:text-left">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="px-10 w-full max-w-[340px] mx-auto lg:mx-0 lg:w-auto"
              >
                ASK FOR AVAILABILITY
              </Button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative flex flex-col h-full">
            <div className="bg-card border border-border/50 p-8 h-full flex flex-col">
              {/* только бежевая рамка */}
              <div className="border-[2.5px] border-gold/40 p-2">
                {/* ✅ одинаковый кадр на всех экранах */}
                <div className="relative overflow-hidden bg-background">
                  <div className="w-full aspect-[16/10]">
                    <img
                      src={featuredImg}
                      alt="Re:SILK — silk sleep mask with matching scrunchie"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "50% 95%" }}
                      draggable={false}
                    />
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4 mt-7">
                <p className="text-xs tracking-[0.25em] uppercase text-foreground/60">
                  Example set
                </p>

                <h3 className="text-2xl font-serif text-foreground">
                  Re:SILK Sleep Mask &amp; Scrunchie
                </h3>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-primary font-serif text-xl">
                    Price on request
                  </p>
                </div>
              </div>

              {/* ✅ чтобы карточка по высоте держалась ровно */}
              <div className="mt-auto" />
            </div>
          </div>
          {/* /IMAGE */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;