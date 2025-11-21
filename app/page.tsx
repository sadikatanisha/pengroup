import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Campuses from "@/components/Campuses";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-ds-navy text-white overflow-x-hidden font-sans">
      <Navbar />

      <main>
        <Hero />
        <Courses />
        <Campuses />
        <Testimonials />
      </main>
    </div>
  );
}
