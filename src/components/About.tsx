const About = () => {
  const collectionImg = `${import.meta.env.BASE_URL}silktie.JPG`;

  return (
    <section id="about" className="bg-silk-charcoal pt-24 pb-28">
      <div className="container mx-auto px-6">
        {/* items-start — идеальное выравнивание по верху */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* IMAGE */}
          <div className="relative">
            {/* аккуратная рамка, без absolute */}
            <div className="border-[2.5px] border-gold/50 p-2">
              <img
                src={collectionImg}
                alt="Re:SILK — reclaimed silk neckties reworked into sleep accessories"
                className="
                  block
                  w-full
                  h-[520px]
                  lg:h-[600px]
                  object-cover
                  object-[50%_55%]
                "
                draggable={false}
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col">

            {/* Headings */}
            <div className="mb-10">
              <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
                About the collection
              </p>

              <h2 className="text-3xl md:text-4xl font-serif font-light text-background leading-tight">
                Re:SILK —<br />
                <span className="text-gold">a new life for silk</span>
              </h2>
            </div>

            {/* Text */}
            <div className="space-y-6 text-background/80 text-lg leading-[1.75] max-w-xl font-normal">
              <p>
                Beyond trends. Beyond seasons. Always conscious. Always relevant.
                Re:SILK is a collection of sleep masks created from reclaimed silk
                neckties — carefully selected, upcycled, and reimagined into modern
                essentials.
              </p>

              <p>
                Each piece is made from natural Mulberry silk, giving forgotten
                materials a second life while preserving the softness,
                breathability, and gentle care silk is known for.
              </p>

              <p>
                Re:SILK represents mindful fashion — reducing waste, respecting
                craftsmanship, and choosing beauty with meaning. Limited by the
                availability of materials, every item is truly one of a kind.
              </p>
            </div>

            {/* FACTS — опущены ниже, спокойный финал блока */}
            <div className="mt-11 grid grid-cols-2 gap-10">
              <div className="border-l-2 border-gold pl-4">
                <p className="text-2xl font-serif text-background">
                  Mulberry silk
                </p>
                <p className="text-sm text-background/70">
                  Premium textile
                </p>
              </div>

              <div className="border-l-2 border-gold pl-4">
                <p className="text-2xl font-serif text-background">
                  Re:SILK
                </p>
                <p className="text-sm text-background/70 whitespace-nowrap">
                  Made consciously in Ukraine
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