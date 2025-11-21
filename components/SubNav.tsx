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
      {/* Desktop View: Bordered Inline List */}
      <div className="hidden md:inline-flex flex-wrap justify-center items-center border border-ds-magenta px-8 py-3 gap-x-8 gap-y-4 text-sm  tracking-wider uppercase">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`transition-colors ${
              active === item.id
                ? "text-white font-black "
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
