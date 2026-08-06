import { useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import type { Project } from "../data/projects";
import "./ProjectModal.css";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  // Lock background body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Keyboard Escape shortcut
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen || !project) return null;

  return ReactDOM.createPortal(
    <div className="sharp-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="sharp-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Top Header Row */}
        <header className="modal-top-header">
          <button className="sharp-back-btn" onClick={onClose} aria-label="Close modal">
            ← Back
          </button>
          
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sharp-live-link"
          >
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Visit Live
          </a>
        </header>

        {/* Project Intro */}
        <div className="modal-project-intro">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-subtitle-tagline">{project.tagline}</p>
          <p className="modal-desc">{project.description}</p>
        </div>

        {/* Bento Photo Gallery — All photos listed uncropped */}
        <div className="bento-photo-gallery">
          {project.screenshots.map((src, idx) => {
            // Asymmetric bento grid span class for random aesthetic
            const spanClass =
              idx % 3 === 0
                ? "bento-img-wide"
                : idx % 3 === 1
                ? "bento-img-tall"
                : "bento-img-normal";

            return (
              <div key={idx} className={`bento-img-card ${spanClass}`}>
                <img
                  src={src}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="bento-screenshot-img"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>,
    document.body
  );
}
