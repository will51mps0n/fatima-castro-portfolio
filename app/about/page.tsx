"use client";

import React from "react";
import { Navigation } from "@/components/navigation";
import { CustomCursor } from "@/components/custom-cursor";

export default function StudioPage() {
  return (
    <div className="font-sans bg-zinc-100 text-zinc-900 min-h-screen w-full selection:bg-zinc-200 selection:text-black overflow-x-hidden">
      <CustomCursor />
      <Navigation />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h1 className="text-xs font-bold uppercase tracking-widest mb-8 sticky top-32">
                About
              </h1>
            </div>
            <div className="lg:col-span-8">
              <p className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-12">
                Creating meaningful architecture through hands-on experience in design and community engagement.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed text-zinc-600">
                <p>
                  During my internship at Perkins Eastman in Dallas, I developed skills in AutoCAD and Enscape while working on diverse commercial projects. This experience taught me the importance of technical precision and collaborative design processes in professional practice.
                </p>
                <p>
                  My volunteer work as a Support Assistant with Habitat for Humanity in Bryan, Texas, provided meaningful exposure to residential construction and community-focused design. Additionally, serving as a Teaching Assistant at Kyushu University's LSPA Winter School expanded my perspective on international design approaches and educational methodologies.
                </p>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed text-zinc-600">
                <p>
                  At Texas A&M University, I served as Freedom by Design Chair and Marketing Officer for the American Institute of Architecture Students, where I led initiatives connecting design students with community service projects and developed communication strategies for student engagement.
                </p>
                <p>
                  These experiences have shaped my understanding of architecture as both a technical discipline and a tool for positive social impact, informing my current studies as I pursue my Master of Architecture at Rice University.
                </p>
              </div>

              <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-300 pt-8">
                {[
                  { label: "Education", value: "Rice" },
                  { label: "Experience", value: "Perkins Eastman" },
                  { label: "Focus", value: "Environmental" },
                  { label: "Location", value: "Houston" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="block text-lg font-medium mb-1">
                      {stat.value}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-zinc-500">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
