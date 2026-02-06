import { Star } from "lucide-react";

const reviews = [
  {
    name: "Emily R.",
    role: "Creative Director",
    text: "Silk really works for the delicate skin around the eyes and the idea behind it really matters to me - giving premium materials a second life.",
    rating: 4.9,
  },
  {
    name: "Sophie M.",
    role: "Fashion Buyer",
    text: "I love that no two pieces are the same. The mask is soft, comfortable and scrunchie is very gentle. It feels like something really personal.",
    rating: 4.7,
  },
  {
    name: "Laura H.",
    role: "Wellness Consultant",
    text: "I’m very sensitive to fabrics, especially for my face. Re:SILK works perfectly for me — breathable, soft, smooth and without irritations.",
    rating: 5,
  },
];

const trustItems = [
  {
    title: "Upcycled materials",
    text: "Created from reclaimed silk neckties. Each piece carries a unique pattern and history.",
  },
  {
    title: "Handcrafted",
    text: "Each piece is carefully handmade in Ukraine by skilled artisans, with attention to detail and respect for traditional craftsmanship.",
  },
  {
    title: "Limited drops",
    text: "Small-batch production based on available vintage silk. No overproduction, no waste.",
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
        <Star key={`e-${i}`} className="h-4 w-4 text-primary/30" />
      ))}
    </div>
  );
}

const Reviews = () => {
  return (
   <section
  id="reviews"
  className="
    bg-silk-charcoal
    text-background
    py-14 sm:py-20 lg:py-24
  "
>
      <div className="container mx-auto px-6">
        {/* Header (чтобы блок не начинался “в лоб”) */}
        <div className="mb-10 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm">
            Reviews
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-serif font-light text-background">
            Loved by those who choose meaning
          </h2>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="
                bg-background
                text-foreground
                p-8 md:p-9
                border border-border/40
                shadow-[0_1px_0_rgba(0,0,0,0.03)]
              "
            >
              <Stars rating={r.rating} />

              <p
                className="
                  mt-5
                  text-[15px] md:text-base
                  leading-7 md:leading-8
                  text-foreground/80
                "
              >
                “{r.text}”
              </p>

              <div className="mt-7 pt-6 border-t border-border/40">
                <p className="font-serif text-lg leading-none">{r.name}</p>
                <p className="mt-2 text-sm text-foreground/60">{r.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust section */}
        <div className="mt-16 grid md:grid-cols-3 gap-10 text-center">
          {trustItems.map((it) => (
            <div key={it.title} className="px-2">
              <p className="text-sm text-gold uppercase tracking-[0.3em]">
                {it.title}
              </p>
              <p className="mt-4 text-base md:text-[17px] leading-7 text-background/75 max-w-sm mx-auto">
                {it.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;