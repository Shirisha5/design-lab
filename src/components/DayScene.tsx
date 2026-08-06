export default function DayScene() {
  return (
    <svg
      viewBox="0 0 260 130"
      xmlns="http://www.w3.org/2000/svg"
      className="garden-svg"
      aria-hidden="true"
    >
      <defs>
        <style>{`
          .ft-bee      { animation: ft-bee-float 4s ease-in-out infinite; }
          .ft-fall-a   { animation: ft-fall-a   7s linear infinite; }
          .ft-fall-b   { animation: ft-fall-b   9s linear infinite 2.5s; }
          .ft-fall-c   { animation: ft-fall-c   8s linear infinite 4.5s; }
          .ft-fall-d   { animation: ft-fall-d  10s linear infinite 1s; }
          .ft-fall-e   { animation: ft-fall-e   7.5s linear infinite 3s; }
          .ft-fall-f   { animation: ft-fall-f   9.5s linear infinite 5s; }
          .ft-fall-leaf  { animation: ft-fall-leaf  8s linear infinite 1s; }
          .ft-fall-leaf2 { animation: ft-fall-leaf2 9s linear infinite 3.5s; }
          .ft-fall-leaf3 { animation: ft-fall-leaf3 7.5s linear infinite 6s; }
          @keyframes ft-bee-float {
            0%, 100% { transform: translate(0,0); }
            50%      { transform: translate(-6px, -4px); }
          }
          @keyframes ft-fall-a {
            0%   { transform: translate(0,0)   rotate(0deg);   opacity:0; }
            10%  { opacity:0.85; }
            90%  { opacity:0.75; }
            100% { transform: translate(-25px,110px) rotate(125deg); opacity:0; }
          }
          @keyframes ft-fall-b {
            0%   { transform: translate(0,0)  rotate(0deg);   opacity:0; }
            12%  { opacity:0.75; }
            88%  { opacity:0.75; }
            100% { transform: translate(25px,105px) rotate(-95deg); opacity:0; }
          }
          @keyframes ft-fall-c {
            0%   { transform: translate(0,0)   rotate(0deg);   opacity:0; }
            15%  { opacity:0.7; }
            85%  { opacity:0.7; }
            100% { transform: translate(-18px,108px) rotate(80deg); opacity:0; }
          }
          @keyframes ft-fall-d {
            0%   { transform: translate(0,0)  rotate(0deg);   opacity:0; }
            8%   { opacity:0.8; }
            88%  { opacity:0.8; }
            100% { transform: translate(20px,112px) rotate(-110deg); opacity:0; }
          }
          @keyframes ft-fall-e {
            0%   { transform: translate(0,0)  rotate(0deg);   opacity:0; }
            10%  { opacity:0.7; }
            90%  { opacity:0.7; }
            100% { transform: translate(-22px,108px) rotate(100deg); opacity:0; }
          }
          @keyframes ft-fall-f {
            0%   { transform: translate(0,0)  rotate(0deg);   opacity:0; }
            12%  { opacity:0.75; }
            85%  { opacity:0.75; }
            100% { transform: translate(24px,110px) rotate(-85deg); opacity:0; }
          }
          @keyframes ft-fall-leaf {
            0%   { transform: translate(0,0)  rotate(0deg);   opacity:0; }
            10%  { opacity:0.9; }
            85%  { opacity:0.9; }
            100% { transform: translate(-15px,112px) rotate(-50deg); opacity:0; }
          }
          @keyframes ft-fall-leaf2 {
            0%   { transform: translate(0,0)  rotate(0deg);   opacity:0; }
            10%  { opacity:0.85; }
            85%  { opacity:0.85; }
            100% { transform: translate(18px,110px) rotate(45deg); opacity:0; }
          }
          @keyframes ft-fall-leaf3 {
            0%   { transform: translate(0,0)  rotate(0deg);   opacity:0; }
            10%  { opacity:0.8; }
            85%  { opacity:0.8; }
            100% { transform: translate(-16px,108px) rotate(-60deg); opacity:0; }
          }
        `}</style>
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

      {/* Left grass tufts */}
      <g fill="#6B7A45">
        <path d="M14 112 Q12 103 10 99 Q11 105 9 112Z" />
        <path d="M14 112 Q16 102 18 98 Q17 105 18 112Z" />
        <path d="M14 112 Q14 101 14 97 Q15 105 15 112Z" />
      </g>
      <g fill="#6B7A45" transform="translate(46,0)">
        <path d="M14 112 Q12 105 10 101 Q11 107 9 112Z" />
        <path d="M14 112 Q16 104 18 100 Q17 107 18 112Z" />
        <path d="M14 112 Q14 103 14 99 Q15 107 15 112Z" />
      </g>

      {/* Taller green leafy plant left */}
      <g>
        <path
          d="M18 112 Q15 92 13 72"
          stroke="#6B7A45"
          strokeWidth="1.5"
          fill="none"
        />
        <path d="M13 72 Q8 67 4 75 Q9 79 13 72Z" fill="#6B7A45" />
        <path d="M15 90 Q22 84 26 91 Q19 94 15 90Z" fill="#6B7A45" />
        <path d="M17 101 Q10 97 7 104 Q13 106 17 101Z" fill="#6B7A45" />
      </g>

      {/* Smaller bud stem left */}
      <g>
        <path
          d="M50 112 Q48 95 52 82 M49 98 Q42 93 40 95"
          fill="none"
          stroke="#6B7A45"
          strokeWidth="1"
        />
        <circle cx="52" cy="82" r="2" fill="#C97A5A" />
        <circle cx="40" cy="95" r="2" fill="#E8A0AA" />
      </g>

      {/* Mushroom */}
      <g transform="translate(68,90)">
        <rect x="5" y="14" width="8" height="9" rx="2" fill="#EED5B7" />
        <path d="M0 14 Q9 -2 18 14Z" fill="#C0594A" />
        <circle cx="6" cy="9" r="2" fill="white" opacity="0.85" />
        <circle cx="12" cy="6" r="1.5" fill="white" opacity="0.85" />
        <circle cx="14" cy="12" r="1.2" fill="white" opacity="0.7" />
      </g>

      {/* Tortoise sitting ON y=112 line */}
      <g transform="translate(105,112)">
        <g className="ft-bob">
          {/* shadow */}
          <ellipse cx="20" cy="1" rx="16" ry="2.5" fill="#000" opacity="0.08" />
          {/* tail */}
          <path
            d="M4 -3 Q0 -1 2 0"
            stroke="#6B7A45"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* back legs */}
          <ellipse cx="8" cy="-2" rx="5" ry="2.5" fill="#7A8C50" />
          <ellipse cx="32" cy="-2" rx="5" ry="2.5" fill="#7A8C50" />
          {/* body */}
          <ellipse cx="20" cy="-10" rx="15" ry="9" fill="#7A8C50" />
          {/* shell dome */}
          <ellipse cx="20" cy="-13" rx="13" ry="9" fill="#6B7A45" />
          {/* shell hex patches */}
          <ellipse
            cx="20"
            cy="-14"
            rx="6"
            ry="5"
            fill="#5A6A38"
            opacity="0.7"
          />
          <ellipse
            cx="12"
            cy="-16"
            rx="4"
            ry="3.5"
            fill="#5A6A38"
            opacity="0.5"
          />
          <ellipse
            cx="28"
            cy="-16"
            rx="4"
            ry="3.5"
            fill="#5A6A38"
            opacity="0.5"
          />
          <ellipse
            cx="20"
            cy="-20"
            rx="3.5"
            ry="3"
            fill="#5A6A38"
            opacity="0.4"
          />
          {/* head */}
          <ellipse cx="35" cy="-9" rx="5.5" ry="4.5" fill="#8A9D60" />
          {/* eye */}
          <circle cx="37" cy="-10.5" r="1.5" fill="#2C3E20" />
          <circle cx="37.5" cy="-11" r="0.5" fill="white" />
          {/* smile */}
          <path
            d="M34 -8 Q36 -6 38 -8"
            stroke="#2C3E20"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </g>

      {/* Right grass */}
      <g fill="#6B7A45" transform="translate(160,0)">
        <path d="M14 112 Q12 102 10 98 Q11 107 9 112Z" />
        <path d="M14 112 Q16 103 18 99 Q17 107 18 112Z" />
        <path d="M14 112 Q14 101 14 97 Q15 107 15 112Z" />
      </g>

      {/* Flower right */}
      {/* <g transform="translate(170,82)">
        <path
          d="M10 30 Q12 15 10 5"
          stroke="#6B7A45"
          strokeWidth="1.2"
          fill="none"
        />
        <path d="M11 20 Q5 16 2 22 Q8 23 11 20Z" fill="#6B7A45" />
        <path d="M10 15 Q17 12 20 18 Q14 19 10 15Z" fill="#6B7A45" />
        <g transform="translate(10, 5)">
          <ellipse cx="0" cy="-5" rx="3" ry="5" fill="#E8A0AA" />
          <ellipse
            cx="5"
            cy="-2"
            rx="5"
            ry="3"
            fill="#E8A0AA"
            transform="rotate(35)"
          />
          <ellipse
            cx="4"
            cy="4"
            rx="3"
            ry="5"
            fill="#E8A0AA"
            transform="rotate(75)"
          />
          <ellipse
            cx="-4"
            cy="4"
            rx="3"
            ry="5"
            fill="#E8A0AA"
            transform="rotate(115)"
          />
          <ellipse
            cx="-5"
            cy="-2"
            rx="5"
            ry="3"
            fill="#E8A0AA"
            transform="rotate(155)"
          />
          <circle cx="0" cy="0" r="2.5" fill="#C97A5A" />
        </g>
      </g> */}

      {/* Tall bud stem right */}
      <g transform="translate(220,62)">
        <path
          d="M10 50 Q12 25 7 10"
          stroke="#6B7A45"
          strokeWidth="1.2"
          fill="none"
        />
        <circle cx="7" cy="10" r="2.5" fill="#C97A5A" />
        <circle cx="15" cy="22" r="2" fill="#E8A0AA" />
        <circle cx="2" cy="32" r="2" fill="#E8A0AA" />
        <path
          d="M10 25 Q14 23 15 22"
          stroke="#6B7A45"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M9 33 Q3 32 2 32"
          stroke="#6B7A45"
          strokeWidth="0.8"
          fill="none"
        />
      </g>

      {/* Sparkle star — static, end of trail */}
      <g transform="translate(246,108)">
        <path d="M0-6 Q1-1 6 0 Q1 1 0 6 Q-1 1 -6 0 Q-1-1 0-6Z" fill="#C97A5A" />
      </g>

      {/* Bee */}
      <g transform="translate(195, 55)">
        <g className="ft-bee">
          <ellipse cx="0" cy="0" rx="4" ry="3" fill="#F5C842" />
          <path d="M-1 -3 L-1 3 M1 -3 L1 3" stroke="#222" strokeWidth="1" />
          <ellipse
            cx="-1"
            cy="-4"
            rx="2"
            ry="3"
            fill="#fff"
            opacity="0.7"
            transform="rotate(-20)"
          />
          <ellipse
            cx="1"
            cy="-4"
            rx="1.5"
            ry="2.5"
            fill="#fff"
            opacity="0.7"
            transform="rotate(20)"
          />
        </g>
      </g>

      {/* Dotted wind trails and sky details */}

      <path
        d="M80 37 Q80.5 40 83 40 Q80.5 40 80 43 Q79.5 40 77 40 Q79.5 40 80 37Z"
        fill="#C97A5A"
        opacity="0.5"
      />
      <path
        d="M160 27 Q160.5 30 163 30 Q160.5 30 160 33 Q159.5 30 157 30 Q159.5 30 160 27Z"
        fill="#C97A5A"
        opacity="0.5"
      />

      {/* Falling leaf 1 */}
      <g transform="translate(123,2)">
        <g className="ft-fall-leaf">
          <path d="M4 0 Q10 -8 6 -12 Q0 -8 4 0Z" fill="#7A9440" />
          <path d="M4 0 Q-2 -8 2 -12 Q8 -8 4 0Z" fill="#6B7A45" opacity="0.6" />
          <line
            x1="4"
            y1="0"
            x2="4"
            y2="-12"
            stroke="#5A6A38"
            strokeWidth="0.7"
          />
        </g>
      </g>

      {/* Falling leaf 2 */}
      <g transform="translate(22,4)">
        <g className="ft-fall-leaf2">
          <path d="M4 0 Q10 -8 6 -12 Q0 -8 4 0Z" fill="#7A9440" />
          <path d="M4 0 Q-2 -8 2 -12 Q8 -8 4 0Z" fill="#6B7A45" opacity="0.6" />
          <line
            x1="4"
            y1="0"
            x2="4"
            y2="-12"
            stroke="#5A6A38"
            strokeWidth="0.7"
          />
        </g>
      </g>

      {/* Falling leaf 3 */}
      <g transform="translate(218,6)">
        <g className="ft-fall-leaf3">
          <path d="M4 0 Q10 -8 6 -12 Q0 -8 4 0Z" fill="#8A9D60" />
          <path d="M4 0 Q-2 -8 2 -12 Q8 -8 4 0Z" fill="#7A8C50" opacity="0.6" />
          <line
            x1="4"
            y1="0"
            x2="4"
            y2="-12"
            stroke="#5A6A38"
            strokeWidth="0.7"
          />
        </g>
      </g>

      {/* Falling petals */}
      <g transform="translate(93,5)">
        <g className="ft-fall-a">
          <ellipse
            cx="0"
            cy="-3"
            rx="2.5"
            ry="4"
            fill="#E8A0AA"
            opacity="0.85"
            transform="rotate(0)"
          />
          <ellipse
            cx="3"
            cy="-1"
            rx="2.5"
            ry="4"
            fill="#E8A0AA"
            opacity="0.85"
            transform="rotate(72)"
          />
          <ellipse
            cx="2"
            cy="2"
            rx="2.5"
            ry="4"
            fill="#E8A0AA"
            opacity="0.85"
            transform="rotate(144)"
          />
          <ellipse
            cx="-2"
            cy="2"
            rx="2.5"
            ry="4"
            fill="#E8A0AA"
            opacity="0.85"
            transform="rotate(216)"
          />
          <ellipse
            cx="-3"
            cy="-1"
            rx="2.5"
            ry="4"
            fill="#E8A0AA"
            opacity="0.85"
            transform="rotate(288)"
          />
          <circle cx="0" cy="0" r="1.8" fill="#F5C842" />
        </g>
      </g>
      <g transform="translate(157,0)">
        <g className="ft-fall-b">
          <ellipse
            cx="0"
            cy="-2.5"
            rx="2"
            ry="3.5"
            fill="#F0B8C0"
            opacity="0.8"
            transform="rotate(0)"
          />
          <ellipse
            cx="2.5"
            cy="-1"
            rx="2"
            ry="3.5"
            fill="#F0B8C0"
            opacity="0.8"
            transform="rotate(72)"
          />
          <ellipse
            cx="1.5"
            cy="2"
            rx="2"
            ry="3.5"
            fill="#F0B8C0"
            opacity="0.8"
            transform="rotate(144)"
          />
          <ellipse
            cx="-1.5"
            cy="2"
            rx="2"
            ry="3.5"
            fill="#F0B8C0"
            opacity="0.8"
            transform="rotate(216)"
          />
          <ellipse
            cx="-2.5"
            cy="-1"
            rx="2"
            ry="3.5"
            fill="#F0B8C0"
            opacity="0.8"
            transform="rotate(288)"
          />
          <circle cx="0" cy="0" r="1.5" fill="#F5C842" />
        </g>
      </g>
      <g transform="translate(68,7)">
        <g className="ft-fall-c">
          <ellipse
            cx="0"
            cy="-2"
            rx="1.8"
            ry="3"
            fill="#E8B8D0"
            opacity="0.75"
            transform="rotate(0)"
          />
          <ellipse
            cx="2"
            cy="0"
            rx="1.8"
            ry="3"
            fill="#E8B8D0"
            opacity="0.75"
            transform="rotate(60)"
          />
          <ellipse
            cx="1"
            cy="2"
            rx="1.8"
            ry="3"
            fill="#E8B8D0"
            opacity="0.75"
            transform="rotate(120)"
          />
          <ellipse
            cx="-1"
            cy="2"
            rx="1.8"
            ry="3"
            fill="#E8B8D0"
            opacity="0.75"
            transform="rotate(180)"
          />
          <ellipse
            cx="-2"
            cy="0"
            rx="1.8"
            ry="3"
            fill="#E8B8D0"
            opacity="0.75"
            transform="rotate(240)"
          />
          <ellipse
            cx="0"
            cy="-2"
            rx="1.8"
            ry="3"
            fill="#E8B8D0"
            opacity="0.75"
            transform="rotate(300)"
          />
          <circle cx="0" cy="0" r="1.3" fill="#F5C842" />
        </g>
      </g>
      <g transform="translate(30,10)">
        <g className="ft-fall-d">
          <ellipse
            cx="0"
            cy="-3"
            rx="2.5"
            ry="4"
            fill="#F5C0C8"
            opacity="0.8"
            transform="rotate(0)"
          />
          <ellipse
            cx="3"
            cy="-1"
            rx="2.5"
            ry="4"
            fill="#F5C0C8"
            opacity="0.8"
            transform="rotate(72)"
          />
          <ellipse
            cx="2"
            cy="2"
            rx="2.5"
            ry="4"
            fill="#F5C0C8"
            opacity="0.8"
            transform="rotate(144)"
          />
          <ellipse
            cx="-2"
            cy="2"
            rx="2.5"
            ry="4"
            fill="#F5C0C8"
            opacity="0.8"
            transform="rotate(216)"
          />
          <ellipse
            cx="-3"
            cy="-1"
            rx="2.5"
            ry="4"
            fill="#F5C0C8"
            opacity="0.8"
            transform="rotate(288)"
          />
          <circle cx="0" cy="0" r="1.8" fill="#F5C842" />
        </g>
      </g>
      <g transform="translate(195,3)">
        <g className="ft-fall-e">
          <ellipse
            cx="0"
            cy="-2.5"
            rx="2"
            ry="3.5"
            fill="#E8A0AA"
            opacity="0.8"
            transform="rotate(0)"
          />
          <ellipse
            cx="2.5"
            cy="-1"
            rx="2"
            ry="3.5"
            fill="#E8A0AA"
            opacity="0.8"
            transform="rotate(72)"
          />
          <ellipse
            cx="1.5"
            cy="2"
            rx="2"
            ry="3.5"
            fill="#E8A0AA"
            opacity="0.8"
            transform="rotate(144)"
          />
          <ellipse
            cx="-1.5"
            cy="2"
            rx="2"
            ry="3.5"
            fill="#E8A0AA"
            opacity="0.8"
            transform="rotate(216)"
          />
          <ellipse
            cx="-2.5"
            cy="-1"
            rx="2"
            ry="3.5"
            fill="#E8A0AA"
            opacity="0.8"
            transform="rotate(288)"
          />
          <circle cx="0" cy="0" r="1.5" fill="#F5C842" />
        </g>
      </g>
      <g transform="translate(235,8)">
        <g className="ft-fall-f">
          <ellipse
            cx="0"
            cy="-2"
            rx="1.8"
            ry="3"
            fill="#F0C0D0"
            opacity="0.75"
            transform="rotate(0)"
          />
          <ellipse
            cx="2"
            cy="0"
            rx="1.8"
            ry="3"
            fill="#F0C0D0"
            opacity="0.75"
            transform="rotate(60)"
          />
          <ellipse
            cx="1"
            cy="2"
            rx="1.8"
            ry="3"
            fill="#F0C0D0"
            opacity="0.75"
            transform="rotate(120)"
          />
          <ellipse
            cx="-1"
            cy="2"
            rx="1.8"
            ry="3"
            fill="#F0C0D0"
            opacity="0.75"
            transform="rotate(180)"
          />
          <ellipse
            cx="-2"
            cy="0"
            rx="1.8"
            ry="3"
            fill="#F0C0D0"
            opacity="0.75"
            transform="rotate(240)"
          />
          <ellipse
            cx="0"
            cy="-2"
            rx="1.8"
            ry="3"
            fill="#F0C0D0"
            opacity="0.75"
            transform="rotate(300)"
          />
          <circle cx="0" cy="0" r="1.3" fill="#F5C842" />
        </g>
      </g>
    </svg>
  );
}
