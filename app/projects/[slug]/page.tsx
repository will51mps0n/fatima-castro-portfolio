"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { CustomCursor } from "@/components/custom-cursor";
import { notFound } from "next/navigation";

const PROJECTS_DATA: Record<string, {
  title: string;
  description: string;
  location: string;
  year: string;
  category: string;
  size: string;
  images: string[];
}> = {
  "project-1": {
    title: "Project 1",
    description: "A stunning residential retreat that harmonizes with its natural surroundings, featuring floor-to-ceiling windows and sustainable materials.",
    location: "Houston, TX",
    year: "2024",
    category: "Residential",
    size: "4,200 sqft",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2400",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2400",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2400",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2400",
    ],
  },
  "project-2": {
    title: "Project 2",
    description: "An innovative commercial space designed for collaboration and creativity, with open floor plans and abundant natural light.",
    location: "Austin, TX",
    year: "2023",
    category: "Commercial",
    size: "12,500 sqft",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2400",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2400",
      "https://images.unsplash.com/photo-1554435493-93422e8220c8?q=80&w=2400",
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2400",
    ],
  },
  "project-3": {
    title: "Project 3",
    description: "A cultural center that celebrates local heritage while embracing contemporary design principles and community engagement.",
    location: "Dallas, TX",
    year: "2023",
    category: "Cultural",
    size: "28,000 sqft",
    images: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2400",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2400",
      "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?q=80&w=2400",
      "https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=2400",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2400",
      "https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=2400",
    ],
  },
  "project-4": {
    title: "Project 4",
    description: "A mixed-use development that seamlessly integrates residential, retail, and public spaces in an urban environment.",
    location: "San Antonio, TX",
    year: "2022",
    category: "Mixed-Use",
    size: "45,000 sqft",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2400",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2400",
      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2400",
      "https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=2400",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2400",
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2400",
    ],
  },
};

const KITTY_IPSUM = [
  "Meow meow paw at your fat belly. Hide from vacuum cleaner stare at ceiling light, yet touch water with paw then recoil in horror. Cat is love, cat is life purr when being pet but yowling nonstop the whole night.",
  "Scratch the furniture then look at human with puppy eyes. Sleep nonstop for food then look cutely at you. Run in circles around the house at 3am because the floor is lava.",
  "Knock everything off the table and watch it fall. Sit on the laptop when human is working. Demand to be let outside then immediately want back in.",
  "Climb the curtains and refuse to come down. Ignore the expensive cat bed, sleep in the cardboard box instead. Meow loudly until food bowl is refilled.",
  "Chase the red dot endlessly. Sit in the sunny spot and judge everyone who walks by. Knock over the plant and act innocent.",
  "Nap in the most inconvenient spot possible. Wake up human at 5am for breakfast. Purr loudly while kneading the blanket.",
];

const ALL_PROJECTS = ["project-1", "project-2", "project-3", "project-4"];

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = PROJECTS_DATA[slug];

  if (!project) {
    notFound();
  }

  const otherProjects = ALL_PROJECTS.filter((p) => p !== slug).slice(0, 3);

  return (
    <div className="font-sans bg-white text-zinc-900 min-h-screen w-full selection:bg-zinc-200 selection:text-black overflow-x-hidden">
      <CustomCursor />
      <Navigation />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Back Link */}
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors mb-12"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Projects
          </Link>

          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 border-b border-zinc-200 pb-12">
            <div className="lg:col-span-8">
              <h1 className="text-5xl md:text-7xl font-light tracking-tighter uppercase mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-zinc-600 max-w-2xl">
                {project.description}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end">
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">
                    Location
                  </p>
                  <p>{project.location}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">
                    Year
                  </p>
                  <p>{project.year}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">
                    Category
                  </p>
                  <p>{project.category}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">
                    Size
                  </p>
                  <p>{project.size}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Layered Grid of Images and Text */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Row 1 */}
            <div className="md:col-span-7 group">
              <div className="relative overflow-hidden aspect-[4/3] bg-zinc-100">
                <img
                  src={project.images[0] || "/placeholder.svg"}
                  alt={`${project.title} - Image 1`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="md:col-span-5 flex items-center">
              <p className="text-lg leading-relaxed text-zinc-600">
                {KITTY_IPSUM[0]}
              </p>
            </div>

            {/* Row 2 */}
            <div className="md:col-span-4 md:col-start-2 flex items-center order-2 md:order-1">
              <p className="text-lg leading-relaxed text-zinc-600">
                {KITTY_IPSUM[1]}
              </p>
            </div>
            <div className="md:col-span-6 group order-1 md:order-2">
              <div className="relative overflow-hidden aspect-[3/4] bg-zinc-100">
                <img
                  src={project.images[1] || "/placeholder.svg"}
                  alt={`${project.title} - Image 2`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="md:col-span-5 group">
              <div className="relative overflow-hidden aspect-square bg-zinc-100">
                <img
                  src={project.images[2] || "/placeholder.svg"}
                  alt={`${project.title} - Image 3`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="md:col-span-7 group">
              <div className="relative overflow-hidden aspect-[16/9] bg-zinc-100">
                <img
                  src={project.images[3] || "/placeholder.svg"}
                  alt={`${project.title} - Image 4`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            {/* Row 4 - Text spanning */}
            <div className="md:col-span-8 md:col-start-3 py-12">
              <p className="text-2xl md:text-3xl leading-relaxed text-zinc-700 font-light">
                {KITTY_IPSUM[2]}
              </p>
            </div>

            {/* Row 5 */}
            <div className="md:col-span-6 group">
              <div className="relative overflow-hidden aspect-[4/5] bg-zinc-100">
                <img
                  src={project.images[4] || "/placeholder.svg"}
                  alt={`${project.title} - Image 5`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="md:col-span-6 flex flex-col gap-6">
              <p className="text-lg leading-relaxed text-zinc-600">
                {KITTY_IPSUM[3]}
              </p>
              <div className="group flex-1">
                <div className="relative overflow-hidden h-full min-h-[300px] bg-zinc-100">
                  <img
                    src={project.images[5] || "/placeholder.svg"}
                    alt={`${project.title} - Image 6`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Final Row - Quote */}
            <div className="md:col-span-10 md:col-start-2 py-16 border-t border-zinc-200 mt-8">
              <blockquote className="text-3xl md:text-4xl font-light tracking-tight text-zinc-800 text-center">
                "{KITTY_IPSUM[4]}"
              </blockquote>
            </div>
          </div>

          {/* Navigation to other projects */}
          <div className="mt-24 border-t border-zinc-200 pt-12">
            <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-8">
              Other Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map((projectSlug) => {
                const otherProject = PROJECTS_DATA[projectSlug];
                return (
                  <Link
                    key={projectSlug}
                    href={`/projects/${projectSlug}`}
                    className="group"
                  >
                    <div className="relative overflow-hidden aspect-[4/3] mb-4 bg-zinc-100">
                      <img
                        src={otherProject.images[0] || "/placeholder.svg"}
                        alt={otherProject.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="text-lg font-medium tracking-tight group-hover:text-zinc-600 transition-colors">
                      {otherProject.title}
                    </h4>
                    <p className="text-sm text-zinc-500">
                      {otherProject.location}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
