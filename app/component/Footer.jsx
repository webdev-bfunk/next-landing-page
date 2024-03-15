import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            &copy; Copyright 2024. All Rights Reserved.
          </div>
          <div className="">
            <Link href="/">
              <Image
                src="/logo-white.svg"
                alt="logo"
                height={100}
                width={200}
                className=""
              />
            </Link>
          </div>
          <div className="flex justify-center space-x-4 items-center">
            <Link href="/" className="hover:bg-brightRed hover:rounded-full">
              <Image
                src="/icon-facebook.svg"
                alt="logo"
                height={25}
                width={25}
              />
            </Link>
            <Link href="/" className="hover:bg-brightRed hover:rounded-full">
              <Image
                src="/icon-twitter.svg"
                alt="logo"
                height={25}
                width={25}
              />
            </Link>
            <Link href="/" className="hover:bg-brightRed hover:rounded-full">
              <Image
                src="/icon-youtube.svg"
                alt="logo"
                height={25}
                width={25}
              />
            </Link>
            <Link href="/" className="hover:bg-brightRed hover:rounded-full">
              <Image
                src="/icon-instagram.svg"
                alt="logo"
                height={25}
                width={25}
              />
            </Link>
            <Link href="/" className="hover:bg-brightRed hover:rounded-full">
              <Image
                src="/icon-pinterest.svg"
                alt="logo"
                height={25}
                width={25}
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <Link href="/" className="hover:text-brightRed">
              Home
            </Link>
            <Link href="/" className="hover:text-brightRed">
              Pricing
            </Link>
            <Link href="/" className="hover:text-brightRed">
              Products
            </Link>
            <Link href="/" className="hover:text-brightRed">
              About
            </Link>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <Link href="/" className="hover:text-brightRed">
              Careers
            </Link>
            <Link href="/" className="hover:text-brightRed">
              Community
            </Link>
            <Link href="/" className="hover:text-brightRed">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                text="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            &copy; Copyright 2024 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
