"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import React from "react";
import {motion} from 'framer-motion'
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
    const pathName = usePathname()
  return (
    <AnimatePresence>
      <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-300 to-red-200">
        <motion.div className="w-screen h-screenfixed z-50 rounded-b-[100px]" 
        animate={{height:"0vh"}}
        exit={{height:"150vh"}}
        transition={{duration: 0.5, ease:"easeOut"}}
        />

        
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
