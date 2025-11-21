import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Campuses from "@/components/Campuses";
import PartnerInstitutions from "@/components/PartnerInstitutions";
import Testimonials from "@/components/Testimonials";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <div className="min-h-screen bg-ds-navy text-white overflow-x-hidden font-sans">
      <main>
        <Hero />
        <Courses />
        <Campuses />
        <PartnerInstitutions />
        <Testimonials />
        <Stories />
      </main>
    </div>
  );
}
