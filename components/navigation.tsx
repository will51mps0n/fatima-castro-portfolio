"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "Projects", href: "/projects" },
    { label: "Images", href: "/images" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white px-6 py-6 flex justify-between items-start pointer-events-none">
        <Link href="/" className="flex flex-col pointer-events-auto">
          <span className="font-bold text-lg tracking-tighter uppercase">
            Fatima Castro
          </span>
          <span className="text-xs tracking-widest opacity-60 mt-1">
            M.Arch Rice Candidate
          </span>
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto group flex items-center gap-2"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-zinc-950 z-[60] text-white flex flex-col"
          >
            <div className="flex justify-between items-start px-6 py-6">
              <Link href="/" className="flex flex-col" onClick={() => setIsOpen(false)}>
                <span className="font-bold text-lg tracking-tighter uppercase">
                  Fatima Castro
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-2 hover:text-zinc-400 transition-colors"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 md:px-24 lg:px-40">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl mx-auto">
                <ul className="flex flex-col gap-4">
                  {navItems.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-5xl md:text-7xl font-light tracking-tighter hover:ml-4 transition-all duration-300 block group"
                      >
                        {item.label}
                        <span className="text-lg ml-2 opacity-0 group-hover:opacity-100 align-top text-zinc-500 transition-opacity">
                          0{i + 1}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="hidden md:flex flex-col justify-end pb-4 text-zinc-500">
                  <p className="text-sm max-w-xs leading-relaxed">
                    Architecture student passionate about environmental design and sustainable building practices. Currently pursuing my Master's at Rice University while gaining hands-on experience in the field.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-8 text-xs uppercase tracking-widest">
                    <div>
                      <p className="text-white mb-2">Houston, TX</p>
                      <p>B.EnvD Texas A&M</p>
                      <p>M.Arch Rice Candidate</p>
                    </div>
                    <div>
                      <p className="text-white mb-2">Connect</p>
                      <a href="https://instagram.com/fatineux" className="hover:text-white cursor-pointer block">
                        Instagram
                      </a>
                      <a href="https://linkedin.com/in/fatineux" className="hover:text-white cursor-pointer block">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
