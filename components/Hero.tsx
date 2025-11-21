import Image from "next/image";

export default function Hero() {
  return (
    <div className="pt-24 px-6 md:px-2 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 items-center">
        <div className="space-y-8 z-10 relative -mt-2 md:-mt-24 lg:-mt-54">
          <div className="space-y-1">
            <h2 className="text-ds-5xl md:text-[5rem] font-black tracking-tight uppercase">
              Welcome
            </h2>
            <h2 className="text-ds-5xl md:text-[5rem] leading-[0.8] md:leading-[0.9] font-black tracking-tight uppercase">
              To VCAD
            </h2>
          </div>

          <p className="text-md md:text-lg   max-w-xl  text-white leading-relaxed">
            Our team at Victoria College of Arts and Design is passionate about
            creating innovative projects and generating new ideas. We work with
            a variety of experts and esteemed companies using a collaborative
            approach. Located in London's Design District, we have valuable
            connections within our industry. Search our latest courses.
          </p>

          <div>
            <button className="bg-ds-blue-light text-ds-navy font-bold text-lg px-8 py-4 hover:bg-white transition-colors duration-300 cursor-pointer">
              Apply Now
            </button>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-0 h-[600px] md:h-[800px] w-full">
          {/* Image 1: Fashion (Top Left) */}
          <div className="absolute  -top-8 lg:-left-[8%] w-[45%] h-[45%] z-20 transform -rotate-1">
            <div className="w-full h-full border-2 border-ds-magenta overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 bg-gray-200">
              <Image
                src="/hero/hero-img-1.jpg"
                alt="Fashion model"
                fill
                className="object-cover "
              />
            </div>
            {/* FASHION Label */}
            <div className="absolute top-4 -left-8 bg-ds-pink text-white font-bold px-6 py-2 text-xl md:text-2xl transform -rotate-12 shadow-lg">
              FASHION
            </div>
          </div>

          {/* Image 2: Photography (Top Right) */}
          <div className="absolute -top-8 right-0 lg:right-10 w-[48%] h-[40%] z-20 ">
            <div className="w-full h-full border-2 border-ds-magenta overflow-hidden relative bg-gray-200">
              <Image
                src="/hero/hero-img-2.png"
                alt="Photography"
                fill
                className="object-cover"
              />
            </div>
            {/* PHOTOGRAPHY Label */}
            <div className="absolute -top-4 right-8 bg-ds-magenta text-white font-bold px-6 py-2 text-xl md:text-2xl transform rotate-6 shadow-lg z-30">
              PHOTOGRAPHY
            </div>
          </div>

          {/* Image 3: Bottom Left (Under Fashion) */}
          <div className="absolute bottom-[28%] left-[8%] w-[38%] h-[45%] z-10 ">
            <div className="w-full h-full border-2 border-ds-magenta overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 bg-gray-200">
              <Image
                src="/hero/hero-img-3.jpg"
                alt="Graphic Design"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Image 4: Bottom Right (Under Photography) */}
          <div className="absolute bottom-[30%] right-[2%] w-[42%] h-[48%] z-10 transform -rotate-1">
            <div className="w-full h-full border-2 border-ds-magenta overflow-hidden relative  bg-gray-200">
              <Image
                src="/hero/hero-img-4.jpg"
                alt="Marketing"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Floating Labels */}

          {/* MEDIA Label (Bottom Left of Fashion Image) */}
          <div className="absolute top-[35%] left-[-10%] z-30 bg-ds-cyan text-black font-bold px-4 py-2 text-lg md:text-2xl transform rotate-12 shadow-lg">
            MEDIA
          </div>

          {/* GRAPHIC DESIGN Label (Crossing Fashion Image) */}
          <div className="absolute top-[28%] left-[15%] z-30 bg-ds-navy text-ds-cyan font-bold px-6 py-3 text-lg md:text-2xl transform -rotate-6 shadow-xl border border-ds-cyan/20 whitespace-nowrap">
            GRAPHIC DESIGN
          </div>

          {/* BUSINESS Label (Crossing Photography Image) */}
          <div className="absolute top-[35%] right-[-2%] md:right-[5%] z-30 bg-ds-navy text-white font-bold px-6 py-3 text-lg md:text-2xl transform rotate-12 shadow-xl border border-white/10">
            BUSINESS
          </div>

          {/* MANAGEMENT Label (Crossing Bottom Left Image) */}
          <div className="absolute bottom-[40%] left-[-5%] z-30 bg-ds-navy text-ds-magenta font-bold px-6 py-3 text-lg md:text-2xl transform  shadow-xl border border-ds-magenta/20">
            MANAGEMENT
          </div>

          {/* MARKETING Label (Crossing Bottom Right Image) */}
          <div className="absolute bottom-[45%] right-[28%] z-30 bg-ds-blue-light text-white font-bold px-6 py-3 text-lg md:text-2xl transform -rotate-12 shadow-lg">
            MARKETING
          </div>
        </div>
      </div>
    </div>
  );
}
