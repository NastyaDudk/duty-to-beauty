import { Sparkles, Wind, Crown, Shield } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Exceptional softness",
    description:
      "Natural silk feels incredibly gentle on the skin, offering a sense of comfort and refined luxury with every wear.",
  },
  {
    icon: Wind,
    title: "Breathable & lightweight",
    description:
      "Silk’s natural fibers allow the skin to breathe, helping maintain comfort in different temperatures throughout the day.",
  },
  {
    icon: Crown,
    title: "Timeless elegance",
    description:
      "The subtle sheen and fluid texture of silk create a refined, understated look that never goes out of style.",
  },
  {
    icon: Shield,
    title: "Made to last",
    description:
      "With proper care, silk accessories retain their beauty and quality over time — a conscious alternative to disposable fashion.",
  },
];

const Benefits = () => {
  return (
    <section id="collection" className="py-24 bg-background">
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