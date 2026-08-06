import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { projects } from "../data/projects";
import "./DesignLab.css";

interface DesignLabProps {
  theme?: "day" | "night";
  isLoaded?: boolean;
}

export default function DesignLab({ isLoaded = true }: DesignLabProps) {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoaded) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate header items
      tl.fromTo(
        ".anim-header-item",
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
      );

      // Animate intro section
      tl.fromTo(
        ".lab-intro-section",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.2",
      );

      // Animate project cards stagger
      tl.fromTo(
        ".sharp-project-card",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.1 },
        "-=0.3",
      );
    }, mainRef);

    return () => ctx.revert();
  }, [isLoaded]);

  return (
    <div ref={mainRef} className="design-lab-app sharp-minimal-app">
      {/* ── Intro Section (Flexed with View Mode Control) ── */}
      <section className="lab-intro-section" id="works">
        <div className="intro-text-block">
          <div className="intro-tier-small">
            ALL PROJECTS ({projects.length})
          </div>

          <h1 className="intro-tier-big">IDEAS. EXPERIMENTS. INTERFACES</h1>

          <p className="intro-tier-sub">
            A complete record of interactive web applications, creative tools,
            and visual experiments.
          </p>
        </div>
      </section>

      {/* ── Main Project Showcase Grid ── */}
      <main className={`sharp-project-grid double-column`}>
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="sharp-project-card"
            aria-label={`Open ${project.title}`}
          >
            {/* Image Box */}
            <div className="card-image-box">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="card-screenshot-img"
              />
            </div>

            {/* Project Name & Subtitle below Image */}
            <div className="card-meta-below">
              <h3 className="card-project-name">{project.title}</h3>
              <p className="card-project-subtitle">{project.tagline}</p>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
