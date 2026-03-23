import { MapPin } from 'lucide-react';

const conferences = [
  {
    citation: 'Anakwue, N. (August 26-28, 2026). Panel Convenor, "Digital Citizenship, Political Belonging and Statehood in Contemporary Africa", Forthcoming SGAS–VAD Conference 2026, University of Basel, Switzerland.',
    year: '2026',
    location: 'Basel, Switzerland',
  },
  {
    citation: 'Anakwue, N. (November, 2025). "Intellectual Elites, Digital Reconstruction and Historical Memory: A Case Study of the #ThisFlag Movement", African Studies Association (US), Annual Meeting, Atlanta, US.',
    year: '2025',
    location: 'Atlanta, US',
  },
  {
    citation: 'Anakwue, N. (November, 2025). "Mobilising the Past for Contemporary Activism in the #ThisFlag Movement", African Studies Association (US), Annual Meeting, Atlanta, US.',
    year: '2025',
    location: 'Atlanta, US',
  },
  {
    citation: 'Anakwue, N. (June, 2025). "Tweets and the Streets: Mobilising Collective Political Identities in #EndSARS and #ThisFlag", Alternate Futures and Political Protest (AFPP) Conference, University of Manchester, UK.',
    year: '2025',
    location: 'Manchester, UK',
  },
  {
    citation: 'Anakwue, N. (July, 2024). "Re-imagining political identity: EndSARS and its impact on Tilly\'s WUNC framework", Digital Politics and Social Movements Workshop, University of York, UK.',
    year: '2024',
    location: 'York, UK',
  },
  {
    citation: 'Anakwue, N. (September, 2020). "Re-centering Africa in the study of ancient philosophy: The legacy of ancient Egyptian philosophy", Critical Ancient World Studies Workshop, University of Oxford, UK.',
    year: '2020',
    location: 'Oxford, UK',
  },
];

const Conferences = () => (
  <section className="relative w-full bg-[#F4F6F8] py-[6vh] lg:py-[8vh] z-40">
    <div className="w-full px-4 sm:px-6 lg:px-[6vw]">
      <div className="section-label animate-slide-left">Conferences</div>
      <h2 className="animate-slide-left text-[clamp(24px,2.6vw,36px)] font-semibold text-[#0B0D10] mb-8">
        Conferences &amp; Workshops
      </h2>

      {/* Timeline layout */}
      <div className="max-w-4xl relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[2.35rem] top-0 bottom-0 w-[1px] bg-[#0B0D10]/08 hidden sm:block" />

        <div className="space-y-5 stagger-children">
          {conferences.map((conf, i) => (
            <div key={i} className="flex items-start gap-4 sm:gap-6">
              {/* Year badge */}
              <div className="shrink-0 flex flex-col items-center gap-1 hidden sm:flex">
                <span className="font-mono text-[0.6rem] tracking-[0.1em] text-[#C8332E] bg-[#C8332E]/8 px-1.5 py-0.5 rounded z-10">
                  {conf.year}
                </span>
                <div className="w-1.5 h-1.5 rounded-full border-2 border-[#C8332E] bg-[#F4F6F8] z-10" />
              </div>

              {/* Card */}
              <div className="card-base flex-1">
                {/* Mobile year */}
                <div className="flex items-center gap-2 mb-2 sm:hidden">
                  <span className="font-mono text-[0.58rem] tracking-[0.12em] uppercase text-[#C8332E]">
                    {conf.year}
                  </span>
                </div>
                <p className="text-[14px] text-[#0B0D10]/80 leading-relaxed mb-2">{conf.citation}</p>
                <div className="flex items-center gap-1.5 text-[#0B0D10]/35">
                  <MapPin size={11} />
                  <span className="font-mono text-[0.58rem] tracking-[0.08em]">{conf.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Conferences;
