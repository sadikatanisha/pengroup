"use client";

import Image from "next/image";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  generateFakeTestimonials,
  Testimonial,
} from "@/utils/generateFakeTestimonials";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    setTestimonials(generateFakeTestimonials(4));
  }, []);

  return (
    <section className="bg-ds-navy w-full text-white py-24 overflow-hidden">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-black uppercase relative inline-block">
          Student
          <br />
          Testimonials
          <span className="absolute bottom-2 left-0 w-[20%] h-4 bg-ds-blue-light/50 -z-10"></span>
        </h2>
      </div>
      {/* Cards Slider/Grid */}
      <div className="w-full overflow-hidden pb-12 pt-24">
        {testimonials.length > 0 && (
          <div className="flex gap-12 w-max animate-scroll">
            {/* Original + Duplicate for seamless scrolling */}
            {[...testimonials, ...testimonials].map((student, index) => (
              <div
                key={`${student.id}-${index}`}
                className="relative w-[320px] h-[400px]  group transform rotate-6 hover:rotate-6 transition-transform duration-300 mx-8"
              >
                {/* Pink Border Container */}
                <div className="absolute inset-0 border-2 border-ds-magenta z-20 pointer-events-none"></div>

                {/* Image & Overlay */}
                <div className="relative w-full h-full overflow-hidden bg-ds-navy">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                  />
                  {/* Blue Overlay */}
                  <div className="absolute inset-0 bg-ds-navy/50 mix-blend-overlay z-10"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-30 flex flex-col justify-end p-8 pb-12 transform -rotate-10">
                  <div className="mb-6">
                    <h3 className="text-3xl font-black uppercase leading-[0.9] mb-2 text-white drop-shadow-lg">
                      '{student.quote}'
                    </h3>
                  </div>

                  <div className="text-sm font-bold tracking-wider mb-4 text-ds-blue-light uppercase">
                    {student.name} \ {student.age} \ {student.course}
                  </div>

                  <div className="flex gap-4 text-white">
                    <a
                      href="#"
                      className="hover:text-ds-blue-light transition-colors"
                    >
                      <FaFacebookF size={20} />
                    </a>
                    <a
                      href="#"
                      className="hover:text-ds-blue-light transition-colors"
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a
                      href="#"
                      className="hover:text-ds-blue-light transition-colors"
                    >
                      <FaLinkedinIn size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
