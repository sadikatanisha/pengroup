import Image from "next/image";

export default function Hero() {
  return (
    <div className="py-24 px-6 md:px-2 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 items-center">
        {/* Left Column: Content */}
        <div className="space-y-8 z-10 relative">
          <div className="space-y-1">
            <h2 className="text-ds-5xl md:text-[5rem] md:leading-[0.9] font-black tracking-tighter uppercase">
              Welcome
            </h2>
            <h2 className="text-ds-5xl md:text-[5rem] md:leading-[0.9] font-black tracking-tighter uppercase">
              To VCAD
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
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

        {/* Right Column: Image Collage */}
        <div className="relative mt-12 lg:mt-0 h-[600px] md:h-[800px] w-full">
          {/* Image 1: Fashion (Top Left) */}
          <div className="absolute top-0 left-[2%] w-[42%] h-[52%] z-20 transform -rotate-1">
            <div className="w-full h-full border-2 border-ds-magenta overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 bg-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
                alt="Fashion model"
                fill
                className="object-cover"
              />
            </div>
            {/* FASHION Label */}
            <div className="absolute top-4 -left-8 bg-ds-pink text-white font-bold px-6 py-2 text-xl md:text-2xl transform -rotate-12 shadow-lg">
              FASHION
            </div>
          </div>

          {/* Image 2: Photography (Top Right) */}
          <div className="absolute -top-8 right-0 w-[45%] h-[58%] z-20 transform rotate-1">
            <div className="w-full h-full border-2 border-ds-magenta overflow-hidden relative hover:scale-105 transition-all duration-500 bg-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1554080353-a576cf803bda?w=600&q=80"
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
          <div className="absolute bottom-[2%] left-[8%] w-[38%] h-[45%] z-10 transform rotate-2">
            <div className="w-full h-full border-2 border-ds-magenta overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 bg-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80"
                alt="Graphic Design"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Image 4: Bottom Right (Under Photography) */}
          <div className="absolute bottom-0 right-[2%] w-[42%] h-[45%] z-10 transform -rotate-1">
            <div className="w-full h-full border-2 border-ds-magenta overflow-hidden relative hover:scale-105 transition-all duration-500 bg-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80"
                alt="Marketing"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Floating Labels */}

          {/* MEDIA Label (Bottom Left of Fashion Image) */}
          <div className="absolute top-[45%] left-[-4%] z-30 bg-ds-cyan text-black font-bold px-4 py-2 text-lg md:text-2xl transform rotate-12 shadow-lg">
            MEDIA
          </div>

          {/* GRAPHIC DESIGN Label (Crossing Fashion Image) */}
          <div className="absolute top-[48%] left-[15%] z-30 bg-ds-navy text-ds-cyan font-bold px-6 py-3 text-lg md:text-2xl transform -rotate-6 shadow-xl border border-ds-cyan/20 whitespace-nowrap">
            GRAPHIC DESIGN
          </div>

          {/* BUSINESS Label (Crossing Photography Image) */}
          <div className="absolute top-[38%] right-[-2%] md:right-[5%] z-30 bg-ds-navy text-white font-bold px-6 py-3 text-lg md:text-2xl transform rotate-12 shadow-xl border border-white/10">
            BUSINESS
          </div>

          {/* MANAGEMENT Label (Crossing Bottom Left Image) */}
          <div className="absolute bottom-[15%] left-[-5%] z-30 bg-ds-navy text-ds-magenta font-bold px-6 py-3 text-lg md:text-2xl transform -rotate-2 shadow-xl border border-ds-magenta/20">
            MANAGEMENT
          </div>

          {/* MARKETING Label (Crossing Bottom Right Image) */}
          <div className="absolute bottom-[20%] right-[5%] z-30 bg-ds-blue-light text-white font-bold px-6 py-3 text-lg md:text-2xl transform -rotate-12 shadow-lg">
            MARKETING
          </div>
        </div>
      </div>
    </div>
  );
}
