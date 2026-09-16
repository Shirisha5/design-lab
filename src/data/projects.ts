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
    id: "portfolio",
    experimentNo: "EXPERIMENT_001",
    title: "KRONOS MINIMA",
    tagline:
      "An interactive portfolio journey through a world beyond the ordinary.",
    thumbnail: "/Work/portfolio/s1.png",
    screenshots: [
      "/Work/portfolio/s1.png",
      "/Work/portfolio/s2.png",
      "/Work/portfolio/s3.png",
      "/Work/portfolio/s4.png",
      "/Work/portfolio/s5.png",
      "/Work/portfolio/s6.png",
      "/Work/portfolio/s7.png",
    ],
    liveUrl: "https://shirishac-dev.vercel.app/",
    status: "Live",
    description: `Kronos Minima is an immersive 3D portfolio set on a futuristic planet, designed as an interactive journey through four distinct stations — Home, Work, Lab, and About. Built with Three.js, React Three Fiber, and GSAP, each environment reveals a different part of the developer's work, experiments, and story.`,
    techStack: [
      { name: "Three.js", icon: "🟢" },
      { name: "GLSL", icon: "🟣" },
    ],
    highlights: [
      "Four interactive stations",
      "Immersive spatial navigation",
      "Cinematic camera transitions",
      "Smooth Scroll Transitions",
      "Interactive Lab Core",
    ],
  },
  {
    id: "luxe-interior",
    experimentNo: "EXPERIMENT_002",
    title: "Luxe Interior",
    tagline: "Where architectural precision becomes quiet dwelling",
    thumbnail: "/Work/Luxe/lx2.png",
    screenshots: [
      "/Work/Luxe/lx1.png",
      "/Work/Luxe/lx2.png",
      "/Work/Luxe/lx3.png",
      "/Work/Luxe/lx4.png",
      "/Work/Luxe/lx5.png",
      "/Work/Luxe/lx6.png",
      "/Work/Luxe/lx7.png",
    ],
    liveUrl: "https://luxe-interior-psi.vercel.app/",
    status: "Live",
    description:
      `The Luxe Interior web application is an interactive, editorial 3D architectural portfolio
engineered with React 19, Three.js, React Three Fiber (R3F), GSAP, and Studio Freight
Lenis. It showcases a Scandinavian modern interior pavilion through real-time procedural
wireframes, custom GLSL.`,
    techStack: [
      { name: "Three.js", icon: "🟢" },
      { name: "GLSL", icon: "🟣" },
    ],
    highlights: [
      "Three.js & Scene Architecture",
      "Procedural wireframing technnique",
      " Animation & Scroll Approach",
      "Custom Shader Techniques (GLSL)",
      "Atmospheric Day/Night Interpolation",
    ],
  },
  {
    id: "pixie-bloomlands",
    experimentNo: "EXPERIMENT_003",
    title: "Pixie Bloomlands",
    tagline: "An Interactive 3D WebGL Storytelling Experience",
    thumbnail: "/Work/pixie/PB6.png",
    screenshots: [
      "/Work/pixie/PB1.png",
      "/Work/pixie/PB2.png",
      "/Work/pixie/PB3.png",
      "/Work/pixie/PB4.png",
      "/Work/pixie/PB5.png",
      "/Work/pixie/PB6.png",
    ],
    liveUrl: "https://pixiebloomlands.vercel.app/",
    status: "Live",
    description:
      `Pixie Bloomlands is an immersive, browser-based 3D microsite built with React Three Fiber and GSAP. Designed with an enchanted dark-fantasy aesthetic, the project guides visitors through a stylized woodland environment using scroll-driven camera flight paths, custom WebGL lighting, and real-time interactive low-poly assets.`,
    techStack: [
      { name: "Three.js", icon: "🟢" },
      { name: "GLSL", icon: "🟣" },
    ],
    highlights: [
      "Scroll-Driven Camera Choreography",
      "Low-Poly 3D Environment,Whimsical Mushroom Cottages",
      "Real-Time WebGL Shaders & Lighting",
      "Interactive 3D Butterfly Guide",
    ],
  },
  {
    id: "animal-kingdom",
    experimentNo: "EXPERIMENT_004",
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
    experimentNo: "EXPERIMENT_005",
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
    experimentNo: "EXPERIMENT_006",
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
    experimentNo: "EXPERIMENT_007",
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
    experimentNo: "EXPERIMENT_008",
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
    experimentNo: "EXPERIMENT_009",
    title: "Golden Hour",
    tagline: "A cinematic web experience",
    thumbnail: "/Work/cine/p2.png",
    screenshots: ["/Work/cine/p1.png", "/Work/cine/p2.png", "/Work/cine/p3.png", "/Work/cine/p4.png"],
    liveUrl: "https://cinematic-web-experience.vercel.app/",
    status: "Live",
    description:
      "This project is an interactive, browser-based 3D cinematic narrative built to explore the boundaries of real-time web performance. Structured across four distinct visual acts, it guides users through dramatic shifts in atmospheric lighting, skybox color grading, and ambient density. The experience leverages advanced graphics techniques, combining custom particle dynamics with realistic environmental simulations. Designed with a modern frontend architecture, it bridges high-fidelity creative visual storytelling and performant web technologies. Ultimately, it serves as a technical showcase demonstrating how desktop-grade graphical depth can run smoothly inside standard web browsers",
    techStack: [
      { name: "React", icon: "⚛️" },
      { name: "DnD Kit", icon: "🧲" },
      { name: "JSON Schema", icon: "📋" },
      { name: "TypeScript", icon: "🔵" },
    ],
    highlights: [
      "4-Act Visual Progression",
      "Custom Shader-Based Rain",
      "Choreographed Camera & Motion",
      "Threejs Responsive Design",
    ],
  },
  {
    id: "cine-mad",
    experimentNo: "EXPERIMENT_010",
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
    experimentNo: "EXPERIMENT_011",
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
