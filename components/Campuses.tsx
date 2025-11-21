import Image from "next/image";
import SubNav from "./SubNav";

const campuses = [
  {
    id: "canary-wharf",
    name: "Canary Wharf",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    id: "borough",
    name: "Borough",
    image:
      "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=600&q=80",
  },
  {
    id: "manchester",
    name: "Manchester",
    image:
      "https://images.unsplash.com/photo-1583318522313-f52f47155908?w=600&q=80",
  },
];

export default function Campuses() {
  return (
    <section className="bg-ds-navy w-full text-white relative">
      <div className="relative w-full">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-ds-navy z-0"></div>

        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-[#122772] z-0"></div>

        {/* Floating Labels */}
        <div className="absolute top-[30%] left-[10%] z-20 bg-ds-pink text-white font-bold px-6 py-3 text-lg transform -rotate-6 shadow-lg hidden md:block">
          CANARY WHARF
        </div>

        <div className="absolute bottom-[25%] left-[15%] z-20 bg-ds-blue-light text-ds-navy font-bold px-6 py-3 text-lg transform 12deg shadow-lg rotate-6 hidden md:block">
          MANCHESTER
        </div>

        <div className="absolute bottom-[40%] right-[10%] z-20 bg-ds-cyan text-ds-navy font-bold px-6 py-3 text-lg transform 12deg shadow-lg -rotate-6 hidden md:block">
          BOROUGH
        </div>

        {/* Main Grid Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12 flex justify-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-1.5 w-full max-w-2xl mx-auto">
            {campuses.map((campus) => (
              <div
                key={campus.id}
                className="group relative h-[350px] w-full md:w-1/3 bg-gray-200 transition-transform hover:-translate-y-2 duration-300"
              >
                <div className="absolute top-0 left-0 right-0 bg-ds-blue-light p-2 z-10 flex justify-between items-center">
                  <span className="font-bold text-ds-navy uppercase tracking-wider text-xs md:text-sm">
                    {campus.name}
                  </span>
                  <span className="text-ds-navy font-bold text-lg">→</span>
                </div>
                <div className="relative w-full h-full">
                  <Image
                    src={campus.image}
                    alt={`${campus.name} Campus`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Text Section - with lighter blue background */}
      <div className="bg-[#122772] pb-24 px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto relative z-20">
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 relative inline-block">
            Campuses
            <span className="absolute bottom-2 left-0 w-full h-4 bg-ds-blue-light/50 -z-10"></span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We have multiple locations across the UK, all strategically situated
            in vibrant city centers and easily accessible by public transport.
          </p>
        </div>
      </div>
    </section>
  );
}
