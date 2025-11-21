import React from "react";

interface SubNavProps {
  active: "courses" | "campuses" | "partner" | "testimonials" | "stories";
}

export default function SubNav({ active }: SubNavProps) {
  const navItems = [
    { id: "courses", label: "Courses" },
    { id: "campuses", label: "Campuses" },
    { id: "partner", label: "Partner Institutions" },
    { id: "testimonials", label: "Student Testimonials" },
    { id: "stories", label: "Stories" },
  ];

  return (
    <div className="flex justify-center mb-12 md:mb-20 w-full px-6">
      {/* Desktop/Tablet View */}
      <div className="hidden md:inline-flex flex-wrap justify-center items-center border border-ds-magenta px-4 py-3 gap-x-6 gap-y-4 text-sm tracking-wider uppercase">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`transition-colors ${
              active === item.id
                ? "text-white uppercase font-bold"
                : "text-gray-400 hover:text-white uppercase"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile View - Wrap Items */}
      <div className="md:hidden flex flex-wrap justify-center items-center border border-ds-magenta px-4 py-3 gap-x-4 gap-y-2 w-full">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`text-ds-xs tracking-wider uppercase whitespace-nowrap transition-colors ${
              active === item.id
                ? "text-white font-bold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
