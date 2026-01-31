import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Upcycled silk from reclaimed neckties",
  "Soft, breathable feel for nightly comfort",
  "Gentle on skin and hair",
  "Comfortable elastic strap (no hard ties)",
  "Each piece is one of a kind",
  "Limited drop — made in small batches",
];

const Pricing = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // картинка из public (работает и локально, и на GitHub Pages)
  const featuredImg = `${import.meta.env.BASE_URL}SILK4ME%20(362).jpg`;

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary uppercase tracking-[0.3em] text-sm">
                Details
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground">
                A small-batch drop built on{" "}
                <span className="text-primary">craft + reuse</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Re:SILK isn’t mass-produced. Each mask is made from reclaimed silk
              neckties, then carefully reworked into a comfortable sleep piece
              with a soft elastic strap. Limited by the fabrics we can source —
              and that’s exactly the point.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">
                Pricing depends on the specific fabric, finishing, and edition.
                Message us to get availability and the current price.
              </p>
              <Button variant="luxury" size="lg" onClick={scrollToContact}>
                Ask for availability
              </Button>
            </div>
          </div>

          {/* Image Card */}
          <div className="relative">
            <div className="bg-card border border-border/50 p-8">
              <div className="bg-background p-8 mb-6">
                <img
                  src={featuredImg}
                  alt="Re:SILK — upcycled silk accessory"
                  className="w-full h-[300px] object-contain"
                  draggable={false}
                />
              </div>

              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  Featured piece
                </p>
                <h3 className="text-2xl font-serif text-foreground">
                  Re:SILK Sleep Mask
                </h3>
                <p className="text-muted-foreground text-sm">
                  A sleep essential made from reclaimed silk neckties. Soft,
                  comfortable, and designed to feel gentle on skin and hair —
                  with a flexible elastic strap for an easy fit.
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-primary font-serif text-xl">
                    Limited small-batch drop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;