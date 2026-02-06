import { Sparkles, Wind, Crown, Shield } from "lucide-react";

const benefits = [
    {
    icon: Crown,
    title: "Temperature-regulating & breathable",
    description:
      "The natural silk filling of sleep masks helps regulate temperature and allows airflow, keeping skin comfortable throughout the night — unlike synthetic fabrics that can trap heat and moisture, encouraging bacteria buildup and sleep creases.",
  },
  {
    icon: Sparkles,
    title: "Better sleep quality",
    description:
      "Sleeping in a silk sleep mask helps block light, supporting natural melatonin production — the «hormone of youth and beauty.",
  },
   {
    icon: Shield,
    title: "Naturally anti-aging",
    description:
      "Silk contains sericin and fibroin, natural proteins known for their moisturizing and protective properties, which help support skin elasticity, reduce moisture loss, and promote smoother-looking skin over time.",
  },
  {
    icon: Wind,
    title: "Gentle on skin and hair",
    description:
      "Silk reduces friction, helping prevent sleep creases on the skin and minimizing hair breakage, pulling, and tension.",
  },
];

const Benefits = () => {
  return (
   <section
  id="collection"
  className="
    bg-background
    py-14 sm:py-20 lg:py-24
  "
>
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm">
            Benefits
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground">
            Why choose <span className="text-primary">natural silk</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 bg-card border border-border/50 hover:border-gold/50 transition-all duration-500"
            >
              <div className="mb-6">
                <benefit.icon
                  className="w-10 h-10 text-primary group-hover:text-gold group-hover:scale-110 transition-all duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg font-serif text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;