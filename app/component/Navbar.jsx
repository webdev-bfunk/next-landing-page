"use client";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex justify-between items-center">
        <div className="pt-2">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-brightRed">
            Pricing
          </Link>
          <Link href="/" className="hover:text-brightRed">
            Product
          </Link>
          <Link href="/" className="hover:text-brightRed">
            About Us
          </Link>
          <Link href="/" className="hover:text-brightRed">
            Careers
          </Link>
          <Link href="/" className="hover:text-brightRed">
            Community
          </Link>
        </div>
        <Link
          href="/"
          className="hover:bg-brightRedLight p-2 px-4  text-white bg-brightRed rounded-full hidden md:block"
        >
          Get Started
        </Link>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none "
        >
          {open ? <RxCross2 size={25} /> : <AiOutlineMenu size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden transition-all duration-300 ease-in-out">
          <div
            id="menu"
            className="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <Link href="/" className="hover:bg-brightRed px-10 py-2 rounded-lg">
              Pricing
            </Link>
            <Link href="/" className="hover:bg-brightRed px-10 py-2 rounded-lg">
              Product
            </Link>
            <Link href="/" className="hover:bg-brightRed px-10 py-2 rounded-lg">
              About Us
            </Link>
            <Link href="/" className="hover:bg-brightRed px-10 py-2 rounded-lg">
              Careers
            </Link>
            <Link href="/" className="hover:bg-brightRed px-10 py-2 rounded-lg">
              Community
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
