import { useState } from 'react';
import { ExternalLink, ChevronDown } from 'lucide-react';

type Tab = 'publications' | 'awards' | 'talks' | 'roles';

const data = {
  publications: [
    {
      citation: 'Beach, M., Anakwue, N., Freeman-Jones, L. & Whalley, L. (October 25, 2024). "PGR students aren\'t hard to reach - and student staff can help". Wonkhe.',
      link: 'https://wonkhe.com/blogs-sus/pgr-students-arent-hard-to-reach-and-student-staff-can-help/',
      year: '2024',
    },
    {
      citation: 'Anakwue, N. (November 10, 2022). "Don\'t sleep, wake up: Monetising the creator\'s power in Africa". The Cable Nigeria News.',
      link: 'https://www.thecable.ng/dont-sleep-wake-up-monetising-the-creators-power-in-africa/',
      year: '2022',
    },
    {
      citation: 'Anakwue, N. (October 24, 2018). "Africapitalism in Nigeria and the mirage of discarding leadership excellence from national development discourse". The Nigerian Tribune Newspapers, Nigeria.',
      link: 'https://tribuneonlineng.com/africapitalism-in-nigeria-and-the-discarding-leadership-excellence-from-national-development-discourse/',
      year: '2018',
    },
    {
      citation: 'Anakwue, N. (December 8, 2015). "On the threshold: Building a new Nigeria". The Guardian Newspapers, Nigeria.',
      link: 'https://allafrica.com/stories/201512081367.html',
      year: '2015',
    },
    {
      citation: 'Anakwue, N. (July 25, 2013). "How to tackle corruption in Nigeria and the role of youths in its eradication". The Guardian Newspapers, Nigeria.',
      link: '#',
      year: '2013',
    },
  ],
  awards: [
    '1st Prize Winner, LISS DTP Winter Poster Competition, LISS DTP Winter Gathering 2024.',
    'Quarter Finalist, 3 Minute Thesis Award, VitaeUK National 3MT Competition 2024.',
    '1st Prize Winner, 3 Minute Thesis Award, Queen Mary University of London 2024.',
    'Pitch Champion, QMUL, London Venture Crawl Competition 2024.',
    'LISS DTP Studentship and International Doctoral Scholar Award — 2023.',
  ],
  talks: [
    'Podcast on Political Identity and Social Movement. Soro soke Podcast, 21st October, 2024.',
    'Improving student opportunity and engagement in PGR. Presentation at the Westminster Higher Education Forum Policy Conference, 15th April, 2024.',
  ],
  roles: [
    'Research Assistant, Centre for Governance and Democracy, DPIR, QMUL (July 2025 – Date).',
    'Member, Advisory Board, Generation Delta Project, University of Leeds, UK (May 2024 – Date).',
    'Postgraduate Research Representation Assistant, Queen Mary Students\' Union (October 2023 – December 2024).',
  ],
};

const tabLabels: { key: Tab; label: string }[] = [
  { key: 'publications', label: 'Op-Eds' },
  { key: 'awards',       label: 'Awards' },
  { key: 'talks',        label: 'Talks' },
  { key: 'roles',        label: 'Roles' },
];

const Engagements = () => {
  const [activeTab, setActiveTab] = useState<Tab>('publications');
  const [openMobile, setOpenMobile] = useState<Tab | null>('publications');

  return (
    <section id="engagements" className="relative w-full bg-[#F4F6F8] py-[6vh] lg:py-[8vh] z-40">
      <div className="w-full px-4 sm:px-6 lg:px-[6vw]">
        <div className="section-label animate-slide-left">Engagements</div>
        <h2 className="animate-slide-left text-[clamp(24px,2.6vw,36px)] font-semibold text-[#0B0D10] mb-8">
          Public Engagements
        </h2>

        <div className="max-w-4xl">
          {/* ── Desktop Tabs ────────────────────────────────── */}
          <div className="hidden sm:block">
            {/* Tab bar */}
            <div className="flex gap-0 border-b border-[#0B0D10]/10 mb-6">
              {tabLabels.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`relative px-5 py-2.5 font-mono text-[0.63rem] tracking-[0.12em] uppercase transition-colors
                    ${activeTab === key ? 'text-[#C8332E]' : 'text-[#0B0D10]/45 hover:text-[#0B0D10]/80'}`}
                >
                  {label}
                  {activeTab === key && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8332E] rounded-t-sm" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="animate-on-scroll animate-in space-y-3">
              {activeTab === 'publications' &&
                data.publications.map((pub, i) => (
                  <a
                    key={i}
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-base card-link group flex items-start justify-between gap-4"
                  >
                    <div className="flex-1">
                      <span className="font-mono text-[0.58rem] tracking-[0.1em] uppercase text-[#C8332E] block mb-1.5">
                        {pub.year}
                      </span>
                      <p className="text-[14px] text-[#0B0D10]/80 leading-relaxed">{pub.citation}</p>
                    </div>
                    <ExternalLink size={13} className="shrink-0 mt-1 text-[#0B0D10]/20 group-hover:text-[#C8332E] transition-colors" />
                  </a>
                ))}

              {activeTab === 'awards' &&
                data.awards.map((award, i) => (
                  <div key={i} className="card-base flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#C8332E]/60 shrink-0" />
                    <p className="text-[14px] text-[#0B0D10]/80 leading-relaxed">{award}</p>
                  </div>
                ))}

              {activeTab === 'talks' &&
                data.talks.map((talk, i) => (
                  <div key={i} className="card-base flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#C8332E]/60 shrink-0" />
                    <p className="text-[14px] text-[#0B0D10]/80 leading-relaxed">{talk}</p>
                  </div>
                ))}

              {activeTab === 'roles' &&
                data.roles.map((role, i) => (
                  <div key={i} className="card-base flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#C8332E]/60 shrink-0" />
                    <p className="text-[14px] text-[#0B0D10]/80 leading-relaxed">{role}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* ── Mobile Accordion ────────────────────────────── */}
          <div className="sm:hidden space-y-3 stagger-children">
            {tabLabels.map(({ key, label }) => {
              const isOpen = openMobile === key;
              return (
                <div key={key} className="bg-white rounded-lg overflow-hidden border border-[#0B0D10]/06"
                  style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                  <button
                    onClick={() => setOpenMobile(isOpen ? null : key)}
                    className="w-full flex items-center justify-between px-4 py-3.5"
                  >
                    <span className={`font-mono text-[0.63rem] tracking-[0.12em] uppercase ${isOpen ? 'text-[#C8332E]' : 'text-[#0B0D10]/70'}`}>
                      {label}
                    </span>
                    <ChevronDown
                      size={15}
                      className={`text-[#0B0D10]/30 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <div className={`overflow-hidden transition-all duration-400 ${isOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
                    <div className="px-4 pb-4 space-y-3 border-t border-[#0B0D10]/06 pt-3">
                      {key === 'publications' &&
                        data.publications.map((pub, i) => (
                          <a key={i} href={pub.link} target="_blank" rel="noopener noreferrer"
                            className="flex items-start gap-2 group">
                            <ExternalLink size={12} className="mt-0.5 shrink-0 text-[#C8332E]/60 group-hover:text-[#C8332E]" />
                            <p className="text-[13px] text-[#0B0D10]/75 leading-relaxed">{pub.citation}</p>
                          </a>
                        ))}
                      {key !== 'publications' &&
                        (data[key] as string[]).map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C8332E]/50 shrink-0" />
                            <p className="text-[13px] text-[#0B0D10]/75 leading-relaxed">{item}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engagements;
