import Image from "next/image";

export default function Stories() {
  return (
    <section className="bg-ds-navy w-full text-white py-24">
      <div className="px-6 md:px-2 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black uppercase relative inline-block">
            Stories
            <span className="absolute bottom-2 left-0 w-full h-4 bg-[#122772] -z-10"></span>
          </h2>
        </div>

        <div className="space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-2  items-start">
            {/* Image */}
            <div className="relative h-[400px] md:h-[450px] w-full max-w-sm mx-auto lg:mx-0">
              <div className="absolute inset-0 border border-white ">
                <div className="relative w-full h-full overflow-hidden bg-gray-800">
                  <Image
                    src="/stories/story-1.jpg"
                    alt="Induction in VCAD"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-4xl md:text-5xl font-black uppercase leading-tight">
                Induction in VCAD
                <br />
                Canary Wharf
                <br />
                Campus
              </h3>

              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                If you join Victoria College of Arts and Design, you can expect
                the highest calibre of teaching, cutting-edge facilities, and
                exceptional industry connections, which will help to prepare you
                for a rewarding career in the creative and tech industries.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-ds-blue-light text-ds-navy font-bold px-8 py-3 hover:bg-white transition-colors">
                  Read article
                </button>
                <button className="border border-white/30 text-white font-bold px-8 py-3 hover:bg-white/10 transition-colors">
                  View full gallery
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
            {/* Image */}
            <div className="relative h-[400px] md:h-[500px] w-full max-w-sm mx-auto lg:mx-0">
              <div className="absolute inset-0 border border-white">
                <div className="relative w-full h-full overflow-hidden bg-gray-800">
                  <Image
                    src="/stories/story-2.jpg"
                    alt="Drawing Portfolio"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 pt-4">
              <h3 className="text-3xl md:text-4xl font-black uppercase leading-tight">
                Be ready for
                <br />
                applying! Five tips to
                <br />
                <span className="text-ds-magenta">Build your portfolio</span>
              </h3>

              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                If you join Victoria College of Arts and Design, you can expect
                the highest calibre of teaching, cutting-edge facilities, and
                exceptional industry connections, which will help to prepare you
                for a rewarding career in the creative and tech industries.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-ds-blue-light text-ds-navy font-bold px-8 py-3 hover:bg-white transition-colors">
                  Read article
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
