import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import gsap from "gsap";
import { projects } from "../data/projects";
import "./ProjectPage.css";

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setActiveImageIndex(0);

    if (!project) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".exhibit-animate",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 },
      );
    }, pageRef);

    return () => ctx.revert();
  }, [id, project]);

  if (!project) {
    return (
      <div className="sharp-project-page exhibit-layout">
        <div className="project-not-found">
          <h2>404</h2>
          <p>Project not found.</p>
          <Link to="/" className="sharp-back-btn">
            ← BACK TO LAB
          </Link>
        </div>
      </div>
    );
  }

  const screenshots =
    project.screenshots && project.screenshots.length > 0
      ? project.screenshots
      : [project.thumbnail];

  const currentImage = screenshots[activeImageIndex] || project.thumbnail;

  return (
    <div ref={pageRef} className="sharp-project-page exhibit-layout fade-in">
      <div className="exhibit-back-row exhibit-animate">
        <Link to="/" className="sharp-back-btn" id="back-to-lab">
          ← BACK TO LAB
        </Link>
      </div>

      <section className="exhibit-hero-grid">
        <div className="exhibit-info-col exhibit-animate">
          <h1 className="exhibit-title">{project.title}</h1>

          <div className="exhibit-status-row">
            <span className="exhibit-status-pill">
              <span className="status-green-dot">●</span>
              {project.status === "Live"
                ? "RELEASED"
                : project.status.toUpperCase()}
            </span>
          </div>

          <p className="exhibit-tagline">{project.tagline}</p>

          <hr className="exhibit-divider" />

          <div className="exhibit-meta-block">
            <h4 className="exhibit-meta-label">FEATURES</h4>
            <ul className="exhibit-features-list">
              {project.highlights && project.highlights.length > 0
                ? project.highlights.map((feat, idx) => (
                    <li key={idx} className="exhibit-feature-item">
                      — {feat}
                    </li>
                  ))
                : project.techStack.map((tech, idx) => (
                    <li key={idx} className="exhibit-feature-item">
                      — {tech.name}
                    </li>
                  ))}
            </ul>
          </div>

          {project?.liveUrl && project?.liveUrl !== "null" && (
            <div className="exhibit-meta-block">
              <h4 className="exhibit-meta-label">VIEW LIVE</h4>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="exhibit-live-url-link"
                id={`visit-live-${project.id}`}
              >
                {project.liveUrl.replace(/^https?:\/\//, "")}
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="link-arrow-icon"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          )}
        </div>

        <div className="exhibit-media-col exhibit-animate">
          <div className="exhibit-main-hero-card">
            <img
              src={currentImage}
              alt={`${project.title} screenshot`}
              className="exhibit-hero-img"
            />
          </div>

          {screenshots.length > 1 && (
            <div className="exhibit-thumbnail-strip">
              {screenshots.map((src, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`exhibit-thumb-card ${
                    activeImageIndex === idx ? "active" : ""
                  }`}
                  onClick={() => setActiveImageIndex(idx)}
                  aria-label={`Select screenshot ${idx + 1}`}
                >
                  <img
                    src={src}
                    alt={`${project.title} thumb ${idx + 1}`}
                    className="thumb-img"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <hr className="exhibit-section-divider exhibit-animate" />

      <section className="exhibit-about-section exhibit-animate">
        <h3 className="exhibit-about-label">ABOUT THE EXPERIMENT</h3>
        <p className="exhibit-about-body">{project.description}</p>
      </section>
    </div>
  );
}
