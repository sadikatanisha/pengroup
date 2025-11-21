import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-ds-navy w-full text-white py-12  border-white/10">
      <div className="px-2 md:px-6 max-w-7xl mx-auto pt-44">
        <div className="flex flex-col md:flex-row justify-between items-end md:items-end gap-8">
          <div className="">
            <div className="relative w-30 h-30">
              <Image
                src="/logo.png"
                alt="VCAD Logo"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-xs text-gray-400">
              © 2025 Victoria College of Arts and Design. All rights reserved.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <div className="flex flex-wrap items-center border border-ds-blue-light px-6 py-3 gap-6 text-sm md:text-base text-ds-blue-light">
              <a href="#" className="hover:text-white transition-colors">
                Policies
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact us
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Meet the Team
              </a>

              <div className="flex items-center gap-4 ml-auto md:ml-4 border-l border-white/20 pl-6">
                <a href="#" className="hover:text-white transition-colors">
                  <FaFacebookF size={16} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <FaInstagram size={16} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
