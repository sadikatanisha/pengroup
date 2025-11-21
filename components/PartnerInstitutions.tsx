import Image from "next/image";

export default function PartnerInstitutions() {
  return (
    <section className="bg-ds-navy w-full text-white py-24">
      <div className="px-6 md:px-2 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase relative inline-block">
              Partner
              <br />
              Institutions
              <span className="absolute bottom-2 left-0 w-[60%] h-4 bg-ds-pink -z-10"></span>
            </h2>

            <div className="text-gray-300 text-lg leading-relaxed space-y-2 max-w-xl">
              <p>Pur partners description here</p>
              <p className="wrap-break-word">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam eaque nulla sit vero unde dolor iusto architecto
                dignissimos vel error!
              </p>
            </div>
          </div>

          {/* Right Column: Logos */}
          <div className="flex flex-col justify-center space-y-12 lg:pl-12">
            {/* Logo 1 - Ravensbourne Placeholder */}
            <div className="flex items-center gap-6 group">
              <div className="relative w-20 h-20 shrink-0 bg-white p-2">
                <Image
                  src="/logo-1.png"
                  alt="Ravensbourne Logo Icon"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="text-3xl md:text-4xl font-bold leading-none">
                Ravensbourne
                <br />
                University London
              </div>
            </div>

            {/* Logo 2 - Arts University Plymouth Placeholder */}
            <div className="flex items-center gap-6 group">
              <div className="relative w-20 h-20 shrink-0 bg-white p-2">
                <Image
                  src="/logo-2.png"
                  alt="Arts University Plymouth Logo Icon"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="text-3xl md:text-4xl font-bold leading-none uppercase">
                Arts
                <br />
                University
                <br />
                Plymouth
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
