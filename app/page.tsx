"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { CustomCursor } from "@/components/custom-cursor";

export default function HomePage() {
  return (
    <div className="font-sans bg-zinc-100 text-zinc-900 h-screen w-full selection:bg-zinc-200 selection:text-black overflow-hidden">
      <CustomCursor />
      <Navigation />

      <section className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-20"></div>
        </div>

        <div className="z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center">
          <h1 className="text-[9vw] md:text-[7vw] leading-[0.85] font-normal tracking-tighter text-zinc-900 uppercase text-center">
            Architecture
            <br className="mb-8" />
            <span className="block mt-8">Portfolio</span>
          </h1>
        </div>
      </section>
    </div>
  );
}
