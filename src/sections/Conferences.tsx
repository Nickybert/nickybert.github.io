import { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

const conferences = [
  {
    before: 'Anakwue, N. (August 26-28, 2026). Panel Convenor, "Digital Citizenship, Political Belonging and Statehood in Contemporary Africa",',
    venue:  'Forthcoming SGAS–VAD Conference 2026,',
    after:  'University of Basel, Switzerland.',
    year: '2026',
    location: 'Basel, Switzerland',
  },
  {
    before: 'Anakwue, N. (February, 2026). "Insider, Outsider and Networked: Navigating Positionality, Power and Trust in Studying Hashtag-driven Protest Movements in Sub-Saharan Africa",',
    venue:  'PhD Seminar Series in International Political Sociology (2025-2026),',
    after:  'DoingIPS, Imperial College, London, UK.',
    year: '2026',
    location: 'London, UK',
  },
  {
    before: 'Anakwue, N. (February, 2026). "The Shapes of Digital Contention in Sub-Saharan Africa: A Comparative ERGM Analysis of #EndSARS and #ThisFlag",',
    venue:  'Work-in-Progress Seminar Series,',
    after:  'Centre for Governance and Democracy (CGD), Queen Mary University of London, London, UK.',
    year: '2026',
    location: 'London, UK',
  },
  {
    before: 'Anakwue, N. (November, 2025). "Intellectual Elites, Digital Reconstruction and Historical Memory: A Case Study of the #ThisFlag Movement",',
    venue:  'African Studies Association (US), Annual Meeting,',
    after:  'Atlanta, US.',
    year: '2025',
    location: 'Atlanta, US',  
  },
  {
    before: 'Anakwue, N. (November, 2025). "Mobilising the Past for Contemporary Activism in the #ThisFlag Movement",',
    venue:  'African Studies Association (US), Annual Meeting,',
    after:  'Atlanta, US.',
    year: '2025',
    location: 'Atlanta, US',
  },
  {
    before: 'Anakwue, N. (June, 2025). "Tweets and the Streets: Mobilising Collective Political Identities in #EndSARS and #ThisFlag",',
    venue:  'Alternate Futures and Political Protest (AFPP) Conference,',
    after:  'University of Manchester, UK.',
    year: '2025',
    location: 'Manchester, UK',
  },
  {
    before: 'Anakwue, N. (July, 2024). "Re-imagining Political Identity: EndSARS and its Impact on Tilly\'s WUNC Framework",',
    venue:  'Digital Politics and Social Movements Workshop,',
    after:  'University of York, UK.',
    year: '2024',
    location: 'York, UK',  },
  {
    before: 'Anakwue, N. (September, 2020). "Re-centering Africa in the Study of Ancient Philosophy: The Legacy of Ancient Egyptian Philosophy",',
    venue:  'Critical Ancient World Studies Workshop,',
    after:  'University of Oxford, UK.',
    year: '2020',
    location: 'Oxford, UK',  },
];

const Conferences = () => {
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll<HTMLElement>('.conf-item') ?? [];
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('conf-item--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((el: HTMLElement) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .conf-item {
          opacity: 0;
          transform: translateX(-14px);
          transition: opacity 0.45s ease, transform 0.45s ease;
        }
        .conf-item--visible {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

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

            <div className="space-y-5" ref={listRef}>
              {conferences.map((conf, i) => (
                <div
                  key={i}
                  className="conf-item flex items-start gap-4 sm:gap-6"
                  style={{ transitionDelay: `${i * 55}ms` }}
                >
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
                    <p className="text-[14px] text-[#0B0D10]/80 leading-relaxed mb-2">
                    {conf.before} <em>{conf.venue}</em> {conf.after}
                    </p>
                    <div className="flex items-center gap-1.5 text-[#0B0D10]/35">
                      <MapPin size={11} />
                      <span className="font-mono text-[0.58rem] tracking-[0.08em]">
                        {conf.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Conferences;
