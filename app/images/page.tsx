"use client";

import React from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { CustomCursor } from "@/components/custom-cursor";
import { PROJECTS } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <div className="font-sans bg-white text-zinc-900 min-h-screen w-full selection:bg-zinc-200 selection:text-black overflow-x-hidden">
      <CustomCursor />
      <Navigation />

      <section className="pt-32 pb-24 bg-white text-zinc-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-20 border-b border-zinc-200 pb-6">
            <h1 className="text-4xl md:text-6xl font-light tracking-tighter uppercase">
              Images
            </h1>
            <span className="text-xs tracking-widest hidden md:block">
              2018 — 2024
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-24">
            {PROJECTS.map((project, index) => (
              <Link
                key={project.id}
                href={`/images/${project.slug}`}
                className={`group flex flex-col ${index % 2 === 1 ? "md:mt-32" : ""}`}
              >
                <div className="relative overflow-hidden aspect-[4/5] mb-6 bg-zinc-100">
                  <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/10 transition-colors duration-500 z-10"></div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                </div>

                <div className="flex justify-between items-start border-t border-zinc-200 pt-4">
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-500">{project.location}</p>
                  </div>
                  <div className="text-right hidden md:block">
                    <p className="text-sm">{project.year}</p>
                    <p className="text-sm text-zinc-500">{project.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
