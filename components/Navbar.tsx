import Image from "next/image";
import { IoMenuOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between  py-6  w-full bg-transparent ">
      <div className="flex items-center gap-3 max-w-7xl mx-auto w-full justify-between">
        <div className="flex items-center gap-3">
          {/* Logo Icon */}
          <Image
            src="/logo.png"
            width={120}
            height={120}
            alt="VCAD Logo"
            className="object-contain"
          />
        </div>

        {/* Menu Icon */}
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
          <IoMenuOutline size={24} />
        </button>
      </div>
    </header>
  );
}
