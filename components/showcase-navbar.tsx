"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ScrollLink } from "react-scroll";

const ShowcaseNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-5 shadow-md md:mx-auto xl:w-4/5 2xl:w-[68%] my-5 rounded-lg">
      <div className="flex justify-between items-center mx-6 md:px-8">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo/logo.webp"
            alt="Bird Logo"
            width={1000}
            height={1000}
            className="w-28"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-x-10 text-gray-700 font-medium text-lg">
          <Link href="/showcase" className="hover:text-green-900">
            Showcase
          </Link>
          <Link href="/" className="hover:text-green-900">
            Services
          </Link>
          <Link href="/" className="hover:text-green-900">
            Process
          </Link>
          <Link href="/" className="hover:text-green-900">
            Guarantees
          </Link>
        </div>

        {/* Book a Call Button (Desktop) */}
        <div className="hidden md:flex">
          <Link
            href="/meeting"
            className="py-3 px-6 text-lg hover:bg-[#06402B] rounded-[6px] border-2 
            border-black dark:border-white bg-[#121212] text-white transition duration-200 
            hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]"
          >
            Book a call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-md mt-4 rounded-lg">
          <Link
            href="/showcase"
            className="py-4 w-full text-center border-b text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Showcase
          </Link>
          <Link
            href="/"
            className="py-4 w-full text-center border-b text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/"
            className="py-4 w-full text-center border-b text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Process
          </Link>
          <Link
            href="/"
            className="py-4 w-full text-center border-b text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Guarantees
          </Link>
          <Link
            href="/meeting"
            className="py-4 w-full text-center bg-[#121212] text-white hover:bg-[#06402B]"
            onClick={() => setIsOpen(false)}
          >
            Book a call
          </Link>
        </div>
      )}
    </nav>
  );
};

export default ShowcaseNavbar;
