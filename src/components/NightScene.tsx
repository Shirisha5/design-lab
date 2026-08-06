export default function NightScene() {
  return (
    <svg
      viewBox="0 0 260 130"
      xmlns="http://www.w3.org/2000/svg"
      className="garden-svg"
      aria-hidden="true"
    >
      <defs>
        <style>{`
          .nt-bob  { animation: nt-bob  3s ease-in-out infinite; }
          .nt-ff1  { animation: nt-fly1 5s   ease-in-out infinite; }
          .nt-ff2  { animation: nt-fly2 6.5s ease-in-out infinite 1s; }
          .nt-ff3  { animation: nt-fly3 4.5s ease-in-out infinite 0.5s; }
          .nt-ff4  { animation: nt-fly4 7s   ease-in-out infinite 2s; }
          .nt-ff5  { animation: nt-fly5 5.5s ease-in-out infinite 1.5s; }
          .nt-ff6  { animation: nt-fly6 6s   ease-in-out infinite 3s; }
          .nt-ff7  { animation: nt-fly7 4s   ease-in-out infinite 0.8s; }
          .nt-ff8  { animation: nt-fly8 5.8s ease-in-out infinite 2.2s; }
          .nt-ff9  { animation: nt-fly9 6.2s ease-in-out infinite 1.2s; }
          .nt-ff10 { animation: nt-fly10 4.8s ease-in-out infinite 3.5s; }
          .nt-ff11 { animation: nt-fly11 7.2s ease-in-out infinite 0.3s; }
          .nt-star-white { animation: nt-twinkle-white 3s ease-in-out infinite; }
          .nt-fall-leaf1 { animation: nt-fall-leaf-anim1 8s linear infinite; }
          .nt-fall-leaf2 { animation: nt-fall-leaf-anim2 10s linear infinite 4s; }
          .nt-mush-glow { filter: drop-shadow(0 0 4px #C97A5A); }
          @keyframes nt-bob {
            0%,100% { transform: translateY(0); }
            50%     { transform: translateY(-2.5px); }
          }
          @keyframes nt-fly1  { 0%,100%{transform:translate(0,0);opacity:0.2;} 50%{transform:translate(-14px,-22px);opacity:1;} }
          @keyframes nt-fly2  { 0%,100%{transform:translate(0,0);opacity:0.15;} 50%{transform:translate(16px,-28px);opacity:0.9;} }
          @keyframes nt-fly3  { 0%,100%{transform:translate(0,0);opacity:0.3;} 50%{transform:translate(-8px,-18px);opacity:1;} }
          @keyframes nt-fly4  { 0%,100%{transform:translate(0,0);opacity:0.1;} 50%{transform:translate(20px,-32px);opacity:0.95;} }
          @keyframes nt-fly5  { 0%,100%{transform:translate(0,0);opacity:0.25;} 50%{transform:translate(-20px,-25px);opacity:1;} }
          @keyframes nt-fly6  { 0%,100%{transform:translate(0,0);opacity:0.1;} 50%{transform:translate(10px,-20px);opacity:0.8;} }
          @keyframes nt-fly7  { 0%,100%{transform:translate(0,0);opacity:0.2;} 50%{transform:translate(-18px,-30px);opacity:1;} }
          @keyframes nt-fly8  { 0%,100%{transform:translate(0,0);opacity:0.1;} 50%{transform:translate(22px,-35px);opacity:0.9;} }
          @keyframes nt-fly9  { 0%,100%{transform:translate(0,0);opacity:0.15;} 50%{transform:translate(-12px,-28px);opacity:1;} }
          @keyframes nt-fly10 { 0%,100%{transform:translate(0,0);opacity:0.2;} 50%{transform:translate(15px,-26px);opacity:0.85;} }
          @keyframes nt-fly11 { 0%,100%{transform:translate(0,0);opacity:0.1;} 50%{transform:translate(-10px,-32px);opacity:0.95;} }
          @keyframes nt-twinkle-white {
            0%, 100% { opacity: 0.3; transform: scale(0.8); }
            50%      { opacity: 1; transform: scale(1.2); }
          }
          @keyframes nt-fall-leaf-anim1 {
            0%   { transform: translate(0,0) rotate(0deg); opacity: 0; }
            10%  { opacity: 0.8; }
            90%  { opacity: 0.8; }
            100% { transform: translate(-20px, 110px) rotate(90deg); opacity: 0; }
          }
          @keyframes nt-fall-leaf-anim2 {
            0%   { transform: translate(0,0) rotate(0deg); opacity: 0; }
            10%  { opacity: 0.8; }
            90%  { opacity: 0.8; }
            100% { transform: translate(20px, 105px) rotate(-90deg); opacity: 0; }
          }
        `}</style>
        <radialGradient id="ffglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F0C87A" stopOpacity="1" />
          <stop offset="100%" stopColor="#F0C87A" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Dotted terracotta trail */}
      <line
        x1="4"
        y1="112"
        x2="256"
        y2="112"
        stroke="#C97A5A"
        strokeWidth="1.3"
        strokeDasharray="2.5 4.5"
        strokeLinecap="round"
      />

      {/* Left grass */}
      <g fill="#4A5830">
        <path d="M14 112 Q12 58 10 54 Q11 60 9 112Z" />
        <path d="M14 112 Q16 57 18 53 Q17 60 18 112Z" />
        <path d="M14 112 Q14 56 14 52 Q15 60 15 112Z" />
      </g>
      <g fill="#4A5830" transform="translate(46,0)">
        <path d="M14 112 Q12 60 10 56 Q11 62 9 112Z" />
        <path d="M14 112 Q16 59 18 55 Q17 62 18 112Z" />
        <path d="M14 112 Q14 58 14 54 Q15 62 15 112Z" />
      </g>

      {/* Glowing mushroom */}
      <g transform="translate(47,90)" className="nt-mush-glow">
        <rect
          x="5"
          y="14"
          width="8"
          height="9"
          rx="2"
          fill="#D4A87A"
        />
        <path d="M0 14 Q9 -2 18 14Z" fill="#C07A5A" />
        <circle cx="6" cy="9" r="2" fill="#FAE8D0" opacity="0.85" />
        <circle
          cx="12"
          cy="6"
          r="1.5"
          fill="#FAE8D0"
          opacity="0.85"
        />
        <circle
          cx="14"
          cy="12"
          r="1.2"
          fill="#FAE8D0"
          opacity="0.7"
        />
      </g>

      {/* ── Ladybug CENTERED sitting on y=112 line ── */}
      <g transform="translate(111,83)">
        <g className="nt-bob">
          {/* shadow */}
          <ellipse
            cx="18"
            cy="25"
            rx="13"
            ry="3"
            fill="#000"
            opacity="0.12"
          />
          {/* head */}
          <ellipse cx="30" cy="16" rx="5" ry="4.5" fill="#1A1A1A" />
          <circle
            cx="31.5"
            cy="14.5"
            r="1"
            fill="white"
            opacity="0.5"
          />
          {/* body */}
          <ellipse cx="17" cy="17" rx="13" ry="9" fill="#C03030" />
          {/* wing divider */}
          <line
            x1="17"
            y1="9"
            x2="17"
            y2="26"
            stroke="#1A1A1A"
            strokeWidth="1.2"
          />
          {/* spots */}
          <circle cx="10" cy="13" r="3" fill="#1A1A1A" />
          <circle cx="24" cy="13" r="3" fill="#1A1A1A" />
          <circle cx="10" cy="21" r="2.5" fill="#1A1A1A" />
          <circle cx="24" cy="21" r="2.5" fill="#1A1A1A" />
          {/* antennae */}
          <line
            x1="30"
            y1="12"
            x2="34"
            y2="7"
            stroke="#1A1A1A"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <circle cx="34.5" cy="6.5" r="1" fill="#1A1A1A" />
          <line
            x1="30"
            y1="12"
            x2="36"
            y2="11"
            stroke="#1A1A1A"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <circle cx="36.5" cy="10.5" r="1" fill="#1A1A1A" />
          {/* legs */}
          <line
            x1="10"
            y1="25"
            x2="6"
            y2="29"
            stroke="#1A1A1A"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <line
            x1="17"
            y1="26"
            x2="17"
            y2="29"
            stroke="#1A1A1A"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <line
            x1="24"
            y1="25"
            x2="28"
            y2="29"
            stroke="#1A1A1A"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </g>
      </g>

      {/* Right grass */}
      <g fill="#4A5830" transform="translate(160,0)">
        <path d="M14 112 Q12 57 10 53 Q11 62 9 112Z" />
        <path d="M14 112 Q16 58 18 54 Q17 62 18 112Z" />
        <path d="M14 112 Q14 56 14 52 Q15 62 15 112Z" />
      </g>

      {/* Small sprout */}
      <g transform="translate(212,99)">
        <line
          x1="5"
          y1="13"
          x2="5"
          y2="4"
          stroke="#4A5830"
          strokeWidth="1.2"
        />
        <path d="M5 8 Q10 4 11 0 Q6 3 5 8Z" fill="#4A5830" />
        <path d="M5 11 Q0 7 -1 3 Q4 6 5 11Z" fill="#3A4825" />
      </g>

      {/* Twinkling white stars spread across the whole sky area */}
      <g
        className="nt-star-white"
        style={{ transformOrigin: "25px 25px" }}
      >
        <path
          d="M25 22 Q25.5 25 28 25 Q25.5 25 25 28 Q24.5 25 22 25 Q24.5 25 25 22Z"
          fill="#ffffff"
        />
      </g>
      <g
        className="nt-star-white"
        style={{
          transformOrigin: "85px 15px",
          animationDelay: "0.5s",
        }}
      >
        <path
          d="M85 12 Q85.5 15 88 15 Q85.5 15 85 18 Q84.5 15 82 15 Q84.5 15 85 12Z"
          fill="#ffffff"
        />
      </g>
      <g
        className="nt-star-white"
        style={{
          transformOrigin: "145px 30px",
          animationDelay: "1s",
        }}
      >
        <path
          d="M145 27 Q145.5 30 148 30 Q145.5 30 145 33 Q144.5 30 142 30 Q144.5 30 145 27Z"
          fill="#ffffff"
        />
      </g>
      <g
        className="nt-star-white"
        style={{
          transformOrigin: "215px 20px",
          animationDelay: "1.5s",
        }}
      >
        <path
          d="M215 17 Q215.5 20 218 20 Q215.5 20 215 23 Q214.5 20 212 20 Q214.5 20 215 17Z"
          fill="#ffffff"
        />
      </g>
      <g
        className="nt-star-white"
        style={{
          transformOrigin: "50px 55px",
          animationDelay: "2s",
        }}
      >
        <path
          d="M50 52 Q50.5 55 53 55 Q50.5 55 50 58 Q49.5 55 47 55 Q49.5 55 50 52Z"
          fill="#ffffff"
        />
      </g>
      <g
        className="nt-star-white"
        style={{
          transformOrigin: "180px 45px",
          animationDelay: "0.8s",
        }}
      >
        <path
          d="M180 42 Q180.5 45 183 45 Q180.5 45 180 48 Q179.5 45 177 45 Q179.5 45 180 42Z"
          fill="#ffffff"
        />
      </g>
      <g
        className="nt-star-white"
        style={{
          transformOrigin: "235px 50px",
          animationDelay: "1.2s",
        }}
      >
        <path
          d="M235 47 Q235.5 50 238 50 Q235.5 50 235 53 Q234.5 50 232 50 Q234.5 50 235 47Z"
          fill="#ffffff"
        />
      </g>

      {/* ── Falling leaves at night ── */}
      <g transform="translate(60,5)">
        <g className="nt-fall-leaf1">
          <path
            d="M4 0 Q10 -8 6 -12 Q0 -8 4 0Z"
            fill="#4A5830"
            opacity="0.6"
          />
        </g>
      </g>
      <g transform="translate(200,10)">
        <g className="nt-fall-leaf2">
          <path
            d="M4 0 Q10 -8 6 -12 Q0 -8 4 0Z"
            fill="#3A4825"
            opacity="0.5"
          />
        </g>
      </g>

      {/* Twinkling orange/terracotta stars */}
      <g transform="translate(246,108)">
        <path
          d="M0-6 Q1-1 6 0 Q1 1 0 6 Q-1 1 -6 0 Q-1-1 0-6Z"
          fill="#C97A5A"
        />
      </g>
      <g transform="translate(30,73)">
        <path
          d="M0-4 Q0.7-0.7 4 0 Q0.7 0.7 0 4 Q-0.7 0.7 -4 0 Q-0.7-0.7 0-4Z"
          fill="#C97A5A"
          opacity="0.7"
        />
      </g>

      {/* Fireflies (glowing dots) */}
      <g className="nt-ff1">
        <circle
          cx="55"
          cy="65"
          r="4"
          fill="url(#ffglow)"
          opacity="0.5"
        />
        <circle cx="55" cy="65" r="2.2" fill="#F0C87A" />
      </g>
      <g className="nt-ff3">
        <circle
          cx="90"
          cy="60"
          r="4"
          fill="url(#ffglow)"
          opacity="0.5"
        />
        <circle cx="90" cy="60" r="2.2" fill="#F0C87A" />
      </g>
      <g className="nt-ff5">
        <circle
          cx="168"
          cy="70"
          r="3.5"
          fill="url(#ffglow)"
          opacity="0.45"
        />
        <circle cx="168" cy="70" r="1.8" fill="#F0D490" />
      </g>
      <g className="nt-ff6">
        <circle
          cx="220"
          cy="65"
          r="3.5"
          fill="url(#ffglow)"
          opacity="0.4"
        />
        <circle cx="220" cy="65" r="1.8" fill="#F0D490" />
      </g>
      <g className="nt-ff2">
        <circle
          cx="35"
          cy="48"
          r="4"
          fill="url(#ffglow)"
          opacity="0.45"
        />
        <circle cx="35" cy="48" r="2.2" fill="#F0C87A" />
      </g>
      <g className="nt-ff4">
        <circle
          cx="72"
          cy="43"
          r="3.5"
          fill="url(#ffglow)"
          opacity="0.4"
        />
        <circle cx="72" cy="43" r="1.8" fill="#F0D490" />
      </g>
      <g className="nt-ff7">
        <circle
          cx="155"
          cy="48"
          r="4"
          fill="url(#ffglow)"
          opacity="0.5"
        />
        <circle cx="155" cy="48" r="2.2" fill="#F0C87A" />
      </g>
      <g className="nt-ff8">
        <circle
          cx="193"
          cy="42"
          r="4"
          fill="url(#ffglow)"
          opacity="0.45"
        />
        <circle cx="193" cy="42" r="2.2" fill="#F0C87A" />
      </g>
      <g className="nt-ff9">
        <circle
          cx="240"
          cy="46"
          r="3.5"
          fill="url(#ffglow)"
          opacity="0.4"
        />
        <circle cx="240" cy="46" r="1.8" fill="#F0D490" />
      </g>
      <g className="nt-ff10">
        <circle
          cx="110"
          cy="30"
          r="3.5"
          fill="url(#ffglow)"
          opacity="0.4"
        />
        <circle cx="110" cy="30" r="1.8" fill="#F0D490" />
      </g>
      <g className="nt-ff11">
        <circle
          cx="210"
          cy="28"
          r="4"
          fill="url(#ffglow)"
          opacity="0.45"
        />
        <circle cx="210" cy="28" r="2.2" fill="#F0C87A" />
      </g>
    </svg>
  );
}
