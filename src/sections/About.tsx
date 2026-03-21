// ── Africa SVG with animated research-node dots ──────────────

import { AFRICA_IMAGE } from '../config';

const About = () => (
  <section id="about" className="relative w-full min-h-[80vh] bg-[#F4F6F8] overflow-hidden z-20 py-[7vh] lg:py-[9vh]">
    <div className="w-full h-full px-4 sm:px-6 lg:px-[6vw] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[4vw]">

      {/* Africa Graphic */}
      <div className="animate-slide-left w-[55vw] sm:w-[40vw] lg:w-[30vw] h-[34vh] lg:h-[58vh] shrink-0">
        <img src={AFRICA_IMAGE} alt="Africa" className="w-full h-full object-contain" />
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

        
      </div>

    </div>
  </section>
);

export default About;
