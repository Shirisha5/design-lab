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

    const imageUrls = Array.from(
      new Set(
        projects.flatMap((p) => [p.thumbnail, ...(p.screenshots || [])])
      )
    );

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

    const minTimePromise = new Promise((resolve) => setTimeout(resolve, 1400));

    const ctx = gsap.context(() => {
      gsap.fromTo(
        brandRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );

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

      Promise.all([preloadPromise, minTimePromise]).then(() => {
        if (isCancelled) return;

        const exitTl = gsap.timeline();

        exitTl.to(gliderRef.current, {
          x: 0,
          scaleX: 2.5,
          duration: 0.35,
          ease: "power2.out",
          onStart: () => gliderTween.pause(),
        });

        exitTl.to([brandRef.current, trackRef.current], {
          opacity: 0,
          y: -10,
          duration: 0.3,
          ease: "power2.in",
        });

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
        <div ref={brandRef} className="loader-brand-stack">
          <div className="loader-logo-title">
            <span className="loader-square-icon">■</span>
            <span className="loader-brand-name">SC_</span>
          </div>
          <div className="loader-sub-brand">DESIGN LAB</div>
          <div className="loader-tagline">IDEAS. EXPERIMENTS. INTERFACES</div>
        </div>

        <div ref={trackRef} className="loader-track-line">
          <div ref={gliderRef} className="loader-gliding-bar"></div>
        </div>
      </div>
    </div>
  );
}
