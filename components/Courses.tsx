import Image from "next/image";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import SubNav from "./SubNav";

export default function Courses() {
  return (
    <section className="bg-ds-navy  px-6 md:px-2 max-w-7xl mx-auto w-full text-white">
      <SubNav active="courses" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="relative h-[400px] md:h-[400px] w-full max-w-sm mx-auto lg:mx-0">
          <div className="absolute inset-0 border border-white">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1570833181606-e694d0560b0c?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Fashion magazines stacked"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight relative inline-block">
            What will you
            <br />
            study?
            <span className="absolute bottom-2 left-0 w-full h-4 bg-ds-blue-light/90 -z-10"></span>
          </h2>

          <p className="text-lg text-white leading-relaxed max-w-xl">
            If you join Victoria College of Arts and Design, you can expect the
            highest calibre of teaching, cutting-edge facilities, and
            exceptional industry connections, which will help to prepare you for
            a rewarding career in the creative and tech industries.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-ds-blue-light text-ds-navy font-bold px-8 py-3 hover:bg-white transition-colors">
              View Courses
            </button>
            <button className="border border-white/30 text-white font-bold px-8 py-3 hover:bg-white/10 transition-colors">
              Download Prospectus
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Quote & Video */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Quote */}
        <div className="relative max-w-lg">
          <div className="text-white mb-6">
            <BiSolidQuoteLeft size={60} />
          </div>
          <h3 className="text-4xl md:text-5xl font-black leading-[1.1] mb-6 pl-16">
            A World where <br />
            <span className="text-ds-blue-light">EVERYONE</span> has <br />
            the <span className="text-ds-blue-light">opportunity</span> <br />
            to fulfil their <br />
            potential
          </h3>
          <div className="text-white flex justify-end mt-4">
            <BiSolidQuoteRight size={60} />
          </div>
        </div>

        {/* Right Video/CTA Area */}
        <div className="relative">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
              alt="Students collaborating"
              fill
              className="object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group cursor-pointer">
              <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm transition-transform group-hover:scale-110">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1"
                >
                  <path
                    d="M8 5V19L19 12L8 5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Blue CTA Box Overlay */}
          <div className="bg-[#05145A] p-8 md:p-12 absolute -bottom-24 right-0 left-8 md:-left-12 shadow-xl z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h4 className="text-2xl md:text-3xl font-bold leading-tight">
                  There's Still Time
                  <br />
                  to Apply for
                  <br />
                  September 2025
                </h4>
              </div>
              <button className="bg-ds-blue-light text-ds-navy text-sm font-bold px-6 py-3 hover:bg-white transition-colors whitespace-nowrap">
                View Courses
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for the overlay box */}
      <div className="h-24 lg:h-0"></div>
    </section>
  );
}
