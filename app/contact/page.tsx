"use client";

import React from "react";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { CustomCursor } from "@/components/custom-cursor";

export default function ContactPage() {
  return (
    <div className="font-sans bg-zinc-950 text-white min-h-screen w-full selection:bg-zinc-800 selection:text-white overflow-x-hidden">
      <CustomCursor />
      <Navigation />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
            <div className="flex flex-col gap-8">
              <h1 className="text-2xl font-medium tracking-tight">
                Let's create thoughtful spaces together.
              </h1>
              <a
                href="mailto:fatimaiiicastro@gmail.com"
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-lg"
              >
                <Mail size={20} />
                fatimaiiicastro@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
                Location
              </h4>
              <p className="text-sm leading-relaxed text-zinc-300">
                Houston, Texas
                <br />
                United States
              </p>
              <p className="text-sm text-zinc-400">+1 (956) 207-0533</p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
                Education
              </h4>
              <p className="text-sm leading-relaxed text-zinc-300">
                Rice University
                <br />
                M.Arch Candidate
                <br />
                2024 - 2026
              </p>
              <p className="text-sm leading-relaxed text-zinc-300 mt-2">
                Texas A&M University
                <br />
                B.EnvD 2024
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
                Connect
              </h4>
              <div className="flex flex-col gap-2">
                <a
                  href="https://instagram.com/fatineux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors"
                >
                  <Instagram size={16} /> @fatineux
                </a>
                <a
                  href="https://linkedin.com/in/fatineux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end border-t border-zinc-800 pt-8">
            <div className="mb-8 md:mb-0">
              <h1 className="text-[15vw] md:text-[12vw] leading-[0.8] font-bold tracking-tighter text-zinc-900 uppercase select-none pointer-events-none">
                Fatima
              </h1>
            </div>
            <div className="flex gap-8 text-xs text-zinc-500 uppercase tracking-widest">
              <span>© 2024 Fatima Castro</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
