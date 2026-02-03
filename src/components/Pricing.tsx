import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const priceFacts = [
  "Individual pricing for each piece",
  "Sleep mask with matching elastic scrunchie",
  "Handcrafted in small batches",
  "Made from reclaimed Mulberry silk neckties",
  "Availability depends on sourced materials",
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
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* TEXT */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary uppercase tracking-[0.3em] text-sm">
                Pricing
              </p>

              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground leading-tight">
                Thoughtful pricing for a{" "}
                <span className="text-primary">limited collection</span>
              </h2>
            </div>

            <p className="text-foreground/70 leading-relaxed max-w-xl text-base md:text-[1.05rem]">
              Re:SILK pieces are not mass-produced, which means there is no fixed
              price. Each set is priced individually based on the silk, its
              condition, craftsmanship, and finishing.
            </p>

            <p className="text-foreground/70 leading-relaxed max-w-xl text-base md:text-[1.05rem]">
              Every piece includes a silk sleep mask paired with a matching
              elastic scrunchie — carefully assembled from reclaimed materials.
            </p>

            <ul className="space-y-4">
              {priceFacts.map((fact, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/80 leading-relaxed">
                    {fact}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <p className="text-sm text-foreground/60 mb-4">
                To check availability and receive the current price, please
                contact us directly.
              </p>

              <Button size="lg" onClick={scrollToContact} className="w-auto px-10">
                Ask for price & availability
              </Button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="bg-card border border-border/50 p-8">
              {/* ТОЛЬКО БЕЖЕВАЯ РАМКА (без салатового фона) */}
              <div className="border-[2.5px] border-gold/40 p-2">
                <div className="overflow-hidden">
                  <img
                    src={featuredImg}
                    alt="Re:SILK — silk sleep mask with matching scrunchie"
                    className="
                      w-full
                      h-[270px] sm:h-[340px] lg:h-[320px]
                      object-cover
                      object-[60%_95%]
                    "
                    draggable={false}
                  />
                </div>
              </div>

              <div className="text-center space-y-4 mt-7">
                <p className="text-xs tracking-[0.25em] uppercase text-foreground/60">
                  Example set
                </p>

                <h3 className="text-2xl font-serif text-foreground">
                  Re:SILK Sleep Mask &amp; Scrunchie
                </h3>

                <p className="text-sm text-foreground/65 leading-relaxed max-w-sm mx-auto">
                  Each set is priced individually — no two are exactly the same.
                </p>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-primary font-serif text-xl">
                    Price on request
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /IMAGE */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;