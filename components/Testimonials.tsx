"use client";

import Image from "next/image";
import { faker } from "@faker-js/faker";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";

// Fallback static data
const staticTestimonials = [
  {
    id: "1",
    name: "Sarah Jenkins",
    age: 22,
    course: "Fashion Design",
    quote: "CREATIVITY UNLEASHED DAILY",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
  },
  {
    id: "2",
    name: "David Chen",
    age: 24,
    course: "Digital Marketing",
    quote: "INNOVATION AT ITS CORE",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    age: 21,
    course: "Photography",
    quote: "CAPTURING LIFE'S MOMENTS",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
  },
  {
    id: "4",
    name: "Michael Chang",
    age: 23,
    course: "Business Mgmt",
    quote: "LEADING THE FUTURE NOW",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
  },
];

const fetchTestimonials = async () => {
  try {
    const res = await fetch("https://fakerapi.it/api/v1/persons?_quantity=4");
    if (!res.ok) {
      console.error("Failed to fetch testimonials");
      return [];
    }
    const data = await res.json();
    console.log("Fetched testimonials data:", data);
    return data.data.map((person: any) => ({
      id: String(person.id),
      name: `${person.firstname} ${person.lastname}`,
      age: faker.number.int({ min: 18, max: 25 }),
      course: faker.helpers.arrayElement([
        "Graphic Design",
        "Fashion",
        "Photography",
        "Marketing",
        "Business",
      ]),
      quote: faker.lorem.words(4).toUpperCase(),
      image: person.image,
    }));
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(staticTestimonials);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchTestimonials();
      if (data && data.length > 0) {
        setTestimonials(data);
      }
    };
    loadData();
  }, []);

  return (
    <section className="bg-ds-navy w-full text-white py-24 overflow-hidden">
      <div className="px-6  max-w-7xl mx-auto mb-16">
        <h2 className="text-5xl md:text-6xl font-black uppercase relative inline-block">
          Student
          <br />
          Testimonials
          <span className="absolute bottom-2 left-0 w-[20%] h-4 bg-ds-blue-light/50 -z-10"></span>
        </h2>
      </div>
      <div className="w-full overflow-hidden pb-12 pt-24">
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
      </div>
    </section>
  );
}
