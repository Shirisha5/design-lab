import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { projects } from "../data/projects";
import "./Preloader.css";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const gliderRef = useRef<HTMLDivElement>(null);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    // Collect all project thumbnail & screenshot URLs for real asset loading
    const imageUrls = Array.from(
      new Set(
        projects.flatMap((p) => [p.thumbnail, ...(p.screenshots || [])])
      )
    );

    // Real Image Preloader Promise
    const preloadPromise = Promise.all(
      imageUrls.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => resolve();
          })
      )
    );

    // Minimum display duration promise for smooth aesthetic transition (1.4s)
    const minTimePromise = new Promise((resolve) => setTimeout(resolve, 1400));

    const ctx = gsap.context(() => {
      // 1. Initial fade-in of brand elements
      gsap.fromTo(
        brandRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );

      // 2. Gliding Black Bar looping animation from left to right center
      const gliderTween = gsap.fromTo(
        gliderRef.current,
        { x: -140 },
        {
          x: 140,
          duration: 0.9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );

      // 3. When REAL loading finishes, complete the transition
      Promise.all([preloadPromise, minTimePromise]).then(() => {
        if (isCancelled) return;

        // Smooth exit timeline
        const exitTl = gsap.timeline();

        // Pause looping glider softly and center it
        exitTl.to(gliderRef.current, {
          x: 0,
          scaleX: 2.5,
          duration: 0.35,
          ease: "power2.out",
          onStart: () => gliderTween.pause(),
        });

        // Fade out center content
        exitTl.to([brandRef.current, trackRef.current], {
          opacity: 0,
          y: -10,
          duration: 0.3,
          ease: "power2.in",
        });

        // Slide up full screen preloader curtain
        exitTl.to(containerRef.current, {
          yPercent: -100,
          duration: 0.75,
          ease: "power4.inOut",
          onStart: () => {
            onComplete();
          },
          onComplete: () => {
            setIsFinished(true);
          },
        });
      });
    }, containerRef);

    return () => {
      isCancelled = true;
      ctx.revert();
    };
  }, [onComplete]);

  if (isFinished) return null;

  return (
    <div ref={containerRef} className="preloader-overlay custom-minimal-loader">
      <div className="loader-center-content">
        {/* Top Brand Stack */}
        <div ref={brandRef} className="loader-brand-stack">
          <div className="loader-logo-title">
            <span className="loader-square-icon">■</span>
            <span className="loader-brand-name">SC_</span>
          </div>
          <div className="loader-sub-brand">DESIGN LAB</div>
          <div className="loader-tagline">IDEAS. EXPERIMENTS. INTERFACES</div>
        </div>

        {/* Center Progress Line Track with Gliding Black Bar */}
        <div ref={trackRef} className="loader-track-line">
          <div ref={gliderRef} className="loader-gliding-bar"></div>
        </div>
      </div>
    </div>
  );
}
