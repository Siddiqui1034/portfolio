"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { motion} from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/experience", title: "Experience" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
      zIndex: 999,
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
      zIndex: 999,
    },
  };

  const menuList = {
    closed: {
      x: "100vh",
    },
    moved: {
      x: 0,
      transition:{
        when: "beforeChildren",
        staggerChildren: 1
      }
    },
  };

  const listItmeVariant = {
    top:{
      x:-10,
      opacity:0
    },
    end:{
      x:0,
      opacity:1,

    }
  }

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link, ind) => {
          return (
            <NavLink key={`link_${ind}`} link={link} />
          );
        })}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-2 p-1 ">Nausheen</span>
          <span className="w-16 h-8 rounded-md flex items-center justify-center bg-white text-black p-1">
            Siddiqui
          </span>
        </Link>
      </div>

      {/* Social Icon */}
      <div className="hidden md:flex gap-4 w-1/3 justify-center">
        <Link href="https://github.com/Siddiqui103">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/contact">
          <Image className="rounded-full" src="/mail.png" alt="" width={24} height={24} />
        </Link>
        <Link href="www.linkedin.com/in/siddiqui1411">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>

      {/* Responsive Menu */}
      <div className="lg:hidden">
        {/* Menu Button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-999 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={topVariants}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={centerVariants}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={bottomVariants}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {/* Menu Items */}
        {open && (
          <motion.div
            variants={menuList}
            initial="closed"
            animate="moved"
            className="glass z-40 absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center gap-8 text-4xl justify-center"
          >
            {links.map((link, ind) => {
              return (
                <motion.div key={`link_${ind}`} variants={listItmeVariant} initial="top" animate="end" >
                  <Link href={link.url} key={link.title}>
                    {link.title}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>

    </div>
  );
};
export default Navbar;
