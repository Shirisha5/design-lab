export interface Project {
  id: string;
  experimentNo: string;
  title: string;
  tagline: string;
  thumbnail: string;
  screenshots: string[];
  videoUrl?: string;
  liveUrl: string | null;
  status: "Live" | "In Progress" | "Archived" | "Template";
  description: string;
  techStack: { name: string; icon: string }[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "animal-kingdom",
    experimentNo: "EXPERIMENT_001",
    title: "Animal Kingdom",
    tagline: "An interactive wildlife archive ",
    thumbnail: "/Work/animalKingdom/EnterScreen.png",
    screenshots: [
      "/Work/animalKingdom/Loader.png",
      "/Work/animalKingdom/EnterScreen.png",
      "/Work/animalKingdom/AK1.png",
      "/Work/animalKingdom/AK2.png",
      "/Work/animalKingdom/AK3.png",
      "/Work/animalKingdom/AK4.png",
    ],
    liveUrl: "https://animal-kingdom-archive.vercel.app/",
    status: "Live",
    description:
      "An interactive wildlife archive built with Three.js, featuring custom liquid and pixel distortion effects that transform every image into an immersive experience.",
    techStack: [
      { name: "Three.js", icon: "🟢" },
      { name: "GLSL", icon: "🟣" },
    ],
    highlights: [
      "Pixel and Liquid Distortion",
      "GSAP-Powered Animations",
      "Interactive Image Stack",
      "Smooth Scroll Transitions",
      "WebGL Shader Effects",
    ],
  },
  {
    id: "apex-interceptor",
    experimentNo: "EXPERIMENT_002",
    title: "Apex Interceptor",
    tagline: "A cinematic vehicle experience",
    thumbnail: "/Work/apex/Apex2.png",
    screenshots: [
      "/Work/apex/Apex2.png",
      "/Work/apex/Apex1.png",
      "/Work/apex/Apex3.png",
      "/Work/apex/Apex4.png",
      "/Work/apex/Apex5.png",
      "/Work/apex/Apex6.png",
      "/Work/apex/Apex7.png",
    ],
    liveUrl: "https://apex-interceptor.vercel.app/",
    status: "Live",
    description:
      "A cinematic vehicle experience combining custom lighting, an animated grid environment, and GSAP-powered scroll interactions to showcase a futuristic tactical interceptor",
    techStack: [
      { name: "Three.js", icon: "🟢" },
      { name: "CSS Grid", icon: "🟠" },
      { name: "TypeScript", icon: "🔵" },
      { name: "CodeMirror", icon: "📝" },
    ],
    highlights: [
      "Animated Grid Environment",
      "Custom Lighting & Atmosphere",
      "GSAP Scroll Interactions",
    ],
  },
  {
    id: "flutter",
    experimentNo: "EXPERIMENT_003",
    title: "Flutter",
    tagline: "An interactive butterfly artwork",
    thumbnail: "/Work/Flutter/Flutter.png",
    screenshots: ["/Work/Flutter/Flutter.png"],
    liveUrl: "http://flutter-particles.vercel.app/",
    status: "Live",
    description:
      "A butterfly sculpted from 22,000 drifting particles.Pixels sampled from a source image are transformed into thousands of animated particles, brought to life with procedural 3D noise and interactive cursor repulsion.",
    techStack: [
      { name: "React", icon: "⚛️" },
      { name: "PokéAPI", icon: "🔴" },
      { name: "Chart.js", icon: "📊" },
      { name: "CSS Modules", icon: "🎨" },
    ],
    highlights: [
      "22,000 GPU-Driven Particles",
      "Image-to-Particle Morphing",
      "Interactive Cursor Repulsion",
      "Procedural 3D Noise Animation",
    ],
  },
  {
    id: "spirit-world",
    experimentNo: "EXPERIMENT_004",
    title: "The Art of Ghibli",
    tagline: "An immersive visual exploration of Studio Ghibli art",
    thumbnail: "/Work/spiritWorld/home.png",
    screenshots: [
      "/Work/spiritWorld/enterscreen.png",
      "/Work/spiritWorld/home.png",
      "/Work/spiritWorld/ghiblimovies.png",
      "/Work/spiritWorld/moviereel.png",
      "/Work/spiritWorld/ghiblimovies.png",
      "/Work/spiritWorld/characters.png",
    ],
    liveUrl: "https://spiritworld.vercel.app/",
    status: "In Progress",
    description:
      "The Art of Ghibli: An interactive ghibli tribute archive. Crafted with gsap",
    techStack: [
      { name: "Web Audio API", icon: "🎵" },
      { name: "React", icon: "⚛️" },
      { name: "Canvas", icon: "🖼️" },
      { name: "TypeScript", icon: "🔵" },
    ],
    highlights: [
      "GSAP-Powered Animations",
      "Smooth Scroll Transitions",
      "Interactive Image Gallery",
      "Responsive Layout",
    ],
  },
  {
    id: "lumi",
    experimentNo: "EXPERIMENT_005",
    title: "Luminescent",
    tagline: "An audio-reactive WebGL experience",
    thumbnail: "/Work/Luminescent/Luminescent.png",
    screenshots: ["/Work/Luminescent/Luminescent.png"],
    liveUrl: "https://luminescent-audio.vercel.app/",
    status: "Live",
    description:
      "For LUMINESCENT, I streamed live microphone frequencies via the Web Audio API directly into WebGL via React Three Fiber—updating the 3D vectors fluidly without UI re-renders. The layout pairs custom GLSL noise shading for a tactile, frosted-glass grain texture with a clean, editorial typography framework.",
    techStack: [
      { name: "Web Audio API", icon: "🎵" },
      { name: "Canvas Particles", icon: "✨" },
      { name: "React", icon: "⚛️" },
      { name: "Vite", icon: "⚡" },
    ],
    highlights: [
      "Web Audio API Integration",
      "Real-time Audio Visualization",
      "GLSL Frosted Glass Shading",
    ],
  },
  {
    id: "cine-web",
    experimentNo: "EXPERIMENT_006",
    title: "Golden Hour",
    tagline: "A cinematic web experience",
    thumbnail: "/Work/cine/p2.png",
    screenshots: ["/Work/cine/p1.png", "/Work/cine/p2.png"],
    liveUrl: "https://cinematic-web-experience.vercel.app/",
    status: "Live",
    description:
      "A cinematic web experience inspired by the music of Guns N' Roses and the timeless aesthetic of classic anime, featuring a seamless transition from sun to moon with immersive atmospheric visuals and dynamic environmental effects",
    techStack: [
      { name: "React", icon: "⚛️" },
      { name: "DnD Kit", icon: "🧲" },
      { name: "JSON Schema", icon: "📋" },
      { name: "TypeScript", icon: "🔵" },
    ],
    highlights: [
      "Animated Day–Night Cycle",
      "GSAP-Powered Scene Transitions",
      "Dynamic Lighting & Atmosphere",
      "Three.js Environment Rendering",
    ],
  },
  {
    id: "cine-mad",
    experimentNo: "EXPERIMENT_007",
    title: "CineMad",
    tagline: "A movie recommendation website",
    thumbnail: "/Work/Cinemad/p4.png",
    screenshots: [
      "/Work/Cinemad/p2.png",
      "/Work/Cinemad/p4.png",
      "/Work/Cinemad/p5.png",
    ],
    liveUrl: "null",
    status: "Template",
    description:
      "A movie recommendation website focused on a clean, modern UI with a thoughtfully designed and implemented layout",
    techStack: [
      { name: "React", icon: "⚛️" },
      { name: "CSS Variables", icon: "🎨" },
      { name: "Storybook", icon: "📖" },
      { name: "Figma API", icon: "🖌️" },
    ],
    highlights: [
      "Modern UI Design",
      "Responsive Layout",
      "Movie Discovery Interface",
    ],
  },
  {
    id: "tourism",
    experimentNo: "EXPERIMENT_008",
    title: "Tourism Website",
    tagline: "Experience the soul of Tamil Nadu through every journey.",
    thumbnail: "/Work/Tourism/t1.png",
    screenshots: [
      "/Work/Tourism/t1.png",
      "/Work/Tourism/t2.png",
      "/Work/Tourism/t3.png",
      "/Work/Tourism/t4.png",
    ],
    liveUrl: "null",
    status: "Template",
    description:
      "A tourism website showcasing the rich culture, heritage, and iconic destinations of Tamil Nadu through an engaging and visually immersive experience.",
    techStack: [
      { name: "D3.js", icon: "📈" },
      { name: "React", icon: "⚛️" },
      { name: "Papa Parse", icon: "📂" },
      { name: "TypeScript", icon: "🔵" },
    ],
    highlights: [
      "Immersive Visual Layout",
      "Responsive User Interface",
      "Destination Showcase",
    ],
  },
];
