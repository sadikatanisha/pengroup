import Image from "next/image";

const campuses = [
  {
    id: "canary-wharf",
    name: "Canary Wharf",
    image:
      "https://images.unsplash.com/photo-1608227251578-88725e508f04?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "borough",
    name: "Borough",
    image:
      "https://images.unsplash.com/photo-1629412692955-181fa268087f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Qm9yb3VnaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "manchester",
    name: "Manchester",
    image:
      "https://images.unsplash.com/photo-1565987256449-a0b2d9dd1e1d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Campuses() {
  return (
    <section className="bg-ds-navy w-full text-white relative py-22 ">
      <div className="relative w-full pt-12">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-ds-navy z-0"></div>

        <div className="absolute bottom-0 left-0 right-0 h-3/5 bg-[#05145A] z-0"></div>

        <div className="absolute top-[30%] left-[10%] z-20 bg-ds-pink text-white font-bold px-6 py-3 text-lg transform -rotate-6 shadow-lg hidden md:block">
          CANARY WHARF
        </div>

        <div className="absolute bottom-[25%] left-[15%] z-20 bg-ds-blue-light text-ds-navy font-bold px-6 py-3 text-lg transform 12deg shadow-lg rotate-6 hidden md:block">
          MANCHESTER
        </div>

        <div className="absolute bottom-[40%] right-[10%] z-20 bg-ds-cyan text-ds-navy font-bold px-6 py-3 text-lg transform 12deg shadow-lg -rotate-6 hidden md:block">
          BOROUGH
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12 flex justify-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-1.5 w-full max-w-2xl mx-auto">
            {campuses.map((campus) => (
              <div
                key={campus.id}
                className="group relative h-80 w-50  md:w-1/3 bg-gray-200 transition-transform hover:-translate-y-2 duration-300"
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

      {/* Bottom Text Section  */}
      <div className="bg-[#05145A] pb-24 px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto relative z-20">
          <h2 className="text-4xl md:text-4xl font-black uppercase mb-6 relative inline-block">
            Campuses
            <span className="absolute bottom-2 left-0 w-full h-4 bg-ds-blue-light/90 -z-10"></span>
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
