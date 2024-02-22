"use client";

import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.webp";
import { cx } from "@/utils";
import { useEffect, useState } from "react";
import Button from "../shared/Button";
import Hamburger from "../shared/Hamburger";
import Socials from "../shared/Socials";

const Header = () => {
  const [toggled, setToggled] = useState(false);
  const [isSticky, setSticky] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop && lastScrollTop > 100) {
        // downscroll
        setSticky(false);
      } else {
        // upscroll
        setSticky(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const handleToggle = () => {
    document.body.classList.toggle("overflow-clip");
    setToggled((prev) => {
      return !prev;
    });
  };

  return (
    <header
      className={cx(
        isSticky || toggled
          ? "sticky top-0 translate-y-0 transform shadow"
          : "-translate-y-full transform",
        "px-5 md:px-10 py-2 md:py-4 relative z-30 block w-full bg-bgLight backdrop-blur-lg transition-transform duration-500 ease-in-out"
      )}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="h-14 w-fit">
          <Image src={Logo} alt="logo" className="h-full w-auto" priority />
        </Link>
        <div className="md:flex gap-4 hidden">
          {navLinks.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className="text-dark font-semibold rounded-full px-4 py-1.5 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-accent/10"
            >
              {link.title}
            </Link>
          ))}
          <Socials />
        </div>

        {/* Mobile Navigation  */}
        <span className="flex md:hidden gap-12 items-center uppercase text-gray-dark text-sm tracking-widest font-medium">
          <span className={cx(toggled ? "text-white" : "", "text-dark z-30")}>
            <Hamburger toggled={toggled} handleToggle={handleToggle} />
          </span>
          <div
            className={cx(
              toggled ? "scale-y-100 " : "scale-y-0",
              "flex flex-col justify-around origin-top w-full bg-dark/90 shadow-sm absolute z-10 left-0 height__screen transform transition-transform duration-300 ease-in-out top-0"
            )}
          >
            <span className="max-w-sm mx-auto flex flex-col w-full tracking-wider font-bold text-white text-lg px-5 mt-20">
              {navLinks.map((link, index) => (
                <Link
                  href={link.path}
                  key={link.path}
                  className="py-6 text-center border-t border-white/20 hover:text-white/70"
                  onClick={handleToggle}
                >
                  {link.title}
                </Link>
              ))}
              <div className="border-t border-white/20 w-full" />
              <span onClick={handleToggle} className="mx-auto">
                <Button
                  text="Register"
                  href="/#registration"
                  className="mt-8 bg-transparent border-2 border-white w-full px-8 uppercase tracking-wider text-lg hover:bg-white hover:text-dark"
                />
              </span>
            </span>
            {/* Socials */}
            <div className="flex flex-col items-center text-light  mt-12">
              <h4 className="mb-4 text-center text-sm xs:text-base">
                Follow our socials:
              </h4>
              <Socials />
            </div>
          </div>
        </span>
      </nav>
    </header>
  );
};

export default Header;
