// ── Africa SVG with animated research-node dots ──────────────
const AfricaGraphic = () => (
  <svg viewBox="0 0 400 480" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Grid lines (subtle) */}
    {[80, 160, 240, 320, 400].map((x) => (
      <line key={`vg${x}`} x1={x} y1="0" x2={x} y2="480" stroke="#0B0D10" strokeWidth="0.3" opacity="0.08" />
    ))}
    {[60, 120, 180, 240, 300, 360, 420].map((y) => (
      <line key={`hg${y}`} x1="0" y1={y} x2="400" y2={y} stroke="#0B0D10" strokeWidth="0.3" opacity="0.08" />
    ))}

    {/* Continent silhouette */}
    <path
      d="M200 22C181 27 162 37 147 52C132 67 122 87 117 107C112 127 114 147 120 167C126 187 137 207 142 227C147 247 144 267 137 287C130 307 120 327 117 347C114 367 117 387 127 407C137 427 154 444 177 457C200 470 227 477 252 474C277 471 300 460 317 442C334 424 344 400 347 377C350 354 345 330 337 307C329 284 318 262 312 240C306 218 305 196 310 174C315 152 326 130 332 110C338 90 339 70 332 52C325 34 312 20 294 12C276 4 254 0 232 3C210 6 209 17 200 22Z"
      fill="#1C1F24"
      opacity="0.88"
    />

    {/* Red arc overlays */}
    <path d="M78 118 Q200 76 322 138" stroke="#C8332E" strokeWidth="22" strokeLinecap="round" fill="none" opacity="0.8" />
    <path d="M98 178 Q200 148 302 193" stroke="#C8332E" strokeWidth="16" strokeLinecap="round" fill="none" opacity="0.6" />

    {/* Animated research-node dots: Lagos, Harare, Nairobi, Accra */}
    <circle className="africa-dot" cx="168" cy="278" r="5" fill="#C8332E" />
    <circle className="africa-dot" cx="258" cy="318" r="5" fill="#C8332E" />
    <circle className="africa-dot" cx="272" cy="248" r="5" fill="#C8332E" />
    <circle className="africa-dot" cx="148" cy="248" r="5" fill="#C8332E" />

    {/* Node labels */}
    {[
      { x: 132, y: 295, label: 'Lagos' },
      { x: 262, y: 335, label: 'Harare' },
      { x: 276, y: 242, label: 'Nairobi' },
      { x: 100, y: 242, label: 'Accra' },
    ].map(({ x, y, label }) => (
      <text key={label} x={x} y={y} fill="#F4F6F8" fontSize="9" fontFamily="'IBM Plex Mono', monospace" opacity="0.6">
        {label}
      </text>
    ))}
  </svg>
);

// ─────────────────────────────────────────────────────────────

const About = () => (
  <section id="about" className="relative w-full min-h-[80vh] bg-[#F4F6F8] overflow-hidden z-20 py-[7vh] lg:py-[9vh]">
    <div className="w-full h-full px-4 sm:px-6 lg:px-[6vw] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[4vw]">

      {/* Africa Graphic */}
      <div className="animate-slide-left w-[55vw] sm:w-[40vw] lg:w-[30vw] h-[34vh] lg:h-[58vh] shrink-0">
        <AfricaGraphic />
      </div>

      {/* Bio */}
      <div className="animate-slide-right w-full lg:w-[52vw] max-w-2xl">
        <div className="section-label">About</div>
        <h2 className="text-[clamp(22px,2.2vw,30px)] font-semibold text-[#0B0D10] mb-5">
          Digital Politics &amp; Social Movements Researcher
        </h2>

        <div className="space-y-4 text-[15px] lg:text-[15.5px] leading-[1.75] text-[#0B0D10]/80">
          <p>
            Nicholas Anakwue is a recipient of the{' '}
            <a href="https://liss-dtp.ac.uk/students/nicholas-anakwue/" target="_blank" rel="noopener noreferrer" className="text-link font-medium">
              2023 LISS DTP Studentship and International Doctoral Scholar Award
            </a>
            , by the Economic and Social Research Council (ESRC) / UK Research and Innovation (UKRI).
          </p>
          <p>
            His doctoral research uses mixed methods to explore the formation and mobilisation of
            collective political identities in hashtag-driven protest movements in sub-Saharan Africa.
          </p>
          <p>
            He has research interests in digital politics, contention, comparative politics,
            African studies, and the politics of migration governance.
          </p>
        </div>

        {/* Keywords */}
        <div className="animate-on-scroll delay-2 mt-6 flex flex-wrap gap-2">
          {['#EndSARS', '#ThisFlag', 'Network Analysis', 'Connective Action', 'ERGM', 'Twitter'].map((tag) => (
            <span key={tag} className="font-mono text-[0.6rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-full border border-[#0B0D10]/12 text-[#0B0D10]/60 bg-white">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA line */}
        <div className="animate-on-scroll delay-3 mt-6 pt-5 border-t border-[#0B0D10]/8">
          <p className="text-xs text-[#C8332E] font-medium font-mono tracking-wide uppercase mb-1">
            Open to collaborations
          </p>
          <a href="mailto:n.c.anakwue@qmul.ac.uk" className="text-sm text-[#0B0D10] text-link font-medium">
            n.c.anakwue@qmul.ac.uk
          </a>
        </div>
      </div>

    </div>
  </section>
);

export default About;
