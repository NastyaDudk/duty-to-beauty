import { Star } from "lucide-react";

const reviews = [
  {
    name: "Emily R.",
    role: "Creative Director",
    text: "Re:SILK feels thoughtful and intentional. The silk is beautiful, but what really matters to me is the idea behind it — giving premium materials a second life.",
    rating: 4.9,
  },
  {
    name: "Sophie M.",
    role: "Fashion Buyer",
    text: "I love that no two pieces are the same. The mask is soft, comfortable, and the elastic strap is very gentle. It feels like something personal, not mass-produced.",
    rating: 4.7,
  },
  {
    name: "Laura H.",
    role: "Wellness Consultant",
    text: "I’m very sensitive to fabrics, especially around my face. Re:SILK works perfectly for me — breathable, smooth, and without irritation.",
    rating: 5,
  },
];

const trustItems = [
  {
    title: "Upcycled materials",
    text: "Created from reclaimed silk neckties. Each piece carries a unique pattern and history.",
  },
  {
    title: "Limited drops",
    text: "Small-batch production based on available vintage silk. No overproduction, no waste.",
  },
  {
    title: "Designed with care",
    text: "Thoughtfully redesigned, cleaned, and finished to feel comfortable and refined.",
  },
];

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.4 && rating - full < 0.9;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-1" aria-label={`Rating ${rating} out of 5`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f-${i}`} className="h-4 w-4 fill-primary text-primary" />
      ))}

      {hasHalf && (
        <span className="relative inline-block h-4 w-4">
          <Star className="absolute inset-0 h-4 w-4 text-primary" />
          <span className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
            <Star className="h-4 w-4 fill-primary text-primary" />
          </span>
        </span>
      )}

      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e-${i}`} className="h-4 w-4 text-primary/40" />
      ))}
    </div>
  );
}

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-6">
        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-background text-foreground p-8 border border-border/50"
            >
              <Stars rating={r.rating} />

              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                “{r.text}”
              </p>

              <div className="mt-6">
                <p className="font-serif text-lg">{r.name}</p>
                <p className="text-sm text-muted-foreground">{r.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust section */}
        <div className="mt-14 grid md:grid-cols-3 gap-8 text-center">
          {trustItems.map((it) => (
            <div key={it.title} className="px-4">
              <p className="text-lg font-serif text-background">{it.title}</p>
              <p className="mt-2 text-sm text-background/70">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
