const About = () => {
  // картинка из public
  const collectionImg = `${import.meta.env.BASE_URL}silk-collection.jpg`;

  return (
    <section id="about" className="py-24 bg-silk-charcoal">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-2 border border-gold/30" />
            <img
              src={collectionImg}
              alt="re:silk collection by Silk4me — upcycled silk accessories"
              className="relative w-full h-[500px] object-contain bg-background p-8"
              draggable={false}
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-gold uppercase tracking-[0.3em] text-sm">
                About the collection
              </p>

              <h2 className="text-3xl md:text-4xl font-serif font-light text-background">
                re:silk —<br />
                <span className="text-gold">a new life for silk</span>
              </h2>
            </div>

            <div className="space-y-6 text-background/80 leading-relaxed">
              <p>
                Beyond trends. Beyond seasons. Always conscious. Always relevant.
                re:silk is a collection of sleep masks created from vintage silk
                neckties — carefully selected, upcycled, and reimagined into modern
                essentials.
              </p>

              <p>
                Each piece is made from natural Mulberry silk, giving forgotten
                materials a second life while preserving the softness,
                breathability, and gentle care silk is known for.
              </p>

              <p>
                re:silk is about mindful fashion — reducing waste, respecting
                craftsmanship, and choosing beauty with meaning. Limited by the
                availability of materials, every item is truly one of a kind.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-gold pl-4">
                <p className="text-2xl font-serif text-background">
                  Mulberry silk
                </p>
                <p className="text-sm text-background/70">
                  Upcycled premium material
                </p>
              </div>

              <div className="border-l-2 border-gold pl-4">
                <p className="text-2xl font-serif text-background">re:silk</p>
                <p className="text-sm text-background/70">
                  Made in Ukraine, consciously
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;