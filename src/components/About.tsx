const About = () => {
  const collectionImg = `${import.meta.env.BASE_URL}silktie.JPG`;

  return (
    <section id="about" className="bg-silk-charcoal pt-24 pb-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="border-[2.5px] border-gold/50 p-2 w-full max-w-[560px]">
              <img
                src={collectionImg}
                alt="Re:SILK — reclaimed silk neckties reworked into sleep accessories"
                className="
                  block w-full
                  h-[405px] sm:h-[480px] lg:h-[620px]
                  object-cover object-[50%_55%]
                "
                draggable={false}
              />
            </div>
          </div>

          {/* CONTENT — РОВНО ПО РАМКЕ */}
          <div className="lg:h-[636px] flex flex-col justify-between">
            {/* TOP */}
            <div>
              {/* Headings */}
              <div className="mb-10 max-w-xl">
                <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">
                  About the drop
                </p>

                <h2 className="text-3xl md:text-4xl font-serif font-light text-background leading-tight mt-10">
                  Re:SILK  
                  <span className="text-gold"> — a new life for silk</span>
                </h2>
              </div>

          {/* Text — ниже и чуть крупнее */}
<div
  className="
    mt-20
    space-y-6
    text-background/80
    text-[1.3rem]
    leading-[1.8]
    max-w-xl
  "
>
  <p>
    Rooted in conscious consumption, Re:SILK gives new life to
    premium silk that once went unworn, partially replacing newly
    produced material with existing deadstock.
  </p>

  <p>
    Each set includes a silk sleep mask and matching scrunchie.
    The mask is made entirely of natural silk — inside and out,
    with silk fiber filling — making it breathable, cool on the
    skin, and comfortable throughout the night — unlike most
    masks on the market that use synthetic fillings.
  </p>
</div>
            </div>

            {/* BOTTOM — ФАКТЫ РОВНО ПО НИЗУ РАМКИ */}
            <div className="grid grid-cols-2 gap-6 max-w-xl">
              <div className="border-l-2 border-gold pl-4">
                <p className="text-2xl font-serif text-background">
                  Mulberry silk
                </p>
                <p className="text-sm uppercase tracking-wide text-background/70">
                  Deadstock sourced in Europe
                </p>
              </div>

              <div className="border-l-2 border-gold pl-4">
                <p className="text-2xl font-serif text-background">
                  Re:SILK
                </p>
                <p className="text-sm uppercase tracking-wide text-background/70">
                  Upcycled consciously in Ukraine
                </p>
              </div>
            </div>
          </div>
          {/* /CONTENT */}
        </div>
      </div>
    </section>
  );
};

export default About;