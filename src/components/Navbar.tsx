"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Chai Bucket</h1>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} absolute md:static bg-black w-full left-0 top-[60px] md:w-auto md:flex-row flex-col text-center md:text-left`}>
          <li ><Link href="/" className="block py-2 px-4 ml-5 hover:text-yellow-300">Home</Link></li>
          <li ><Link href="/menu" className="block py-2 px-4 hover:text-yellow-300">Menu</Link></li>
          <li ><Link href="#about" className="block py-2 px-4 hover:text-yellow-300">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}
