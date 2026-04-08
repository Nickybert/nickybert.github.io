// ── Africa image ──────────────

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
            I am a recipient of the{' '}
            <a href="https://liss-dtp.ac.uk/students/nicholas-anakwue/" target="_blank" rel="noopener noreferrer" className="text-link font-medium">
              2023 LISS DTP Studentship and International Doctoral Scholar Award
            </a>
            , by the Economic and Social Research Council (ESRC) / UK Research and Innovation (UKRI).
          </p>
          <p>
            My research sits at the intersection of computational social science, African digital politics, 
            and technology governance — a convergence that makes me equally credible in academic research and product strategy rooms.
          </p>
          <p>
            As an ESRC-funded PhD candidate at Queen Mary University of London, 
            I build and analyse large-scale social networks to understand how protest movements in sub-Saharan Africa, 
            particularly in Nigeria and Zimbabwe, mobilise collective political identity through digital platforms. 
            My methods rigorously utilise Exponential Random Graph Models, Dynamic Network Actor Models, 
            in-depth qualitative interviews across five actor strata, and original fieldwork insights conducted in Lagos, Nigeria. 
            My theoretical contribution extends connective action theory through the lens of network architecture to a logic of collection, 
            showing how the structural shape of digital conversation either concentrates or distributes political agency.
          </p>
          <p>
            Before the academy, I spent years building things: growth strategies for African tech startups in civictech, media and e-commerce, 
            and constructing investment memos for seed-stage ventures. 
            I’m a DreamVC LIVC Fellow, a former Venture Partner at Republic, 
            a Pitch Champion at the London Venture Crawl, 
            and the winner of Queen Mary's 3-Minute Thesis competition at both faculty and university levels.
I am also published in top peer-reviewed journals and edited volumes from Routledge and Palgrave Macmillan, and have papers under review at <em>Contention</em>.
            I have also presented my research at conferences and seminars the LSE, QMUL, Oxford, Manchester, and the African Studies Association's Annual Meeting, 
            and peer-reviewed for five top-tier academic journals. 
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
