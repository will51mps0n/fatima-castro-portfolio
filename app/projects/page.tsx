"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { CustomCursor } from "@/components/custom-cursor";

const PROJECTS_LIST = [
  {
    id: 1,
    number: "01",
    title: "Project 1",
    category: "RESIDENTIAL",
    year: "2024",
    slug: "project-1",
  },
  {
    id: 2,
    number: "02",
    title: "Project 2",
    category: "COMMERCIAL",
    year: "2023",
    slug: "project-2",
  },
  {
    id: 3,
    number: "03",
    title: "Project 3",
    category: "CULTURAL",
    year: "2023",
    slug: "project-3",
  },
  {
    id: 4,
    number: "04",
    title: "Project 4",
    category: "MIXED-USE",
    year: "2022",
    slug: "project-4",
  },
];

export default function ProjectsPage() {
  return (
    <div className="font-sans bg-white text-zinc-900 min-h-screen w-full selection:bg-zinc-200 selection:text-black overflow-x-hidden">
      <CustomCursor />
      <Navigation />

      <section className="pt-32 pb-24 border-t border-zinc-200">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h1 className="text-4xl md:text-6xl font-light tracking-tighter uppercase">
              Selected Projects
            </h1>
          </div>

          <div className="flex flex-col">
            {PROJECTS_LIST.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group py-10 border-t border-zinc-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-zinc-50 transition-colors"
              >
                <div className="md:col-span-1 text-xs tracking-widest text-zinc-500">
                  {project.number}
                </div>
                <div className="md:col-span-7 text-2xl md:text-4xl font-light tracking-tight group-hover:pl-4 transition-all duration-300">
                  {project.title}
                </div>
                <div className="md:col-span-2 text-sm text-zinc-500">
                  {project.year}
                </div>
                <div className="md:col-span-2 flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest border border-zinc-200 px-3 py-1">
                    {project.category}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </Link>
            ))}
            <div className="w-full border-b border-zinc-200"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
