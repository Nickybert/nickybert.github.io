import { ExternalLink } from 'lucide-react';

interface PublicationEntry {
  before: string;
  venue: string;
  after: string;
  link: string;
  year: string;
  journal: string;
}

const publications: PublicationEntry[] = [
  {
    before: 'Anakwue, N. (2018). The African origins of Greek philosophy: Ancient Egypt in retrospect.',
    venue: 'Phronimon: Journal of the South African Society for Greek Philosophy and the Humanities,',
    after: '18: 167\u2013180.',
    link: 'https://unisapressjournals.co.za/index.php/Phronimon/article/view/2361',
    year: '2018',
    journal: 'Phronimon',
  },
  {
    before: 'Anakwue, N. (2017). Nietzschean will to power and the politics of personalities in public diplomacy.',
    venue: 'SocialScientia Journal of Social Sciences and Humanities,',
    after: '2(3): 1\u201315.',
    link: 'https://journals.aphriapub.com/index.php/SS/article/view/164',
    year: '2017',
    journal: 'SocialScientia',
  },
];

const Publications = () => (
  <section id="publications" className="relative w-full bg-[#F4F6F8] py-[6vh] lg:py-[8vh] z-40">
    <div className="w-full px-4 sm:px-6 lg:px-[6vw]">
      <div className="section-label animate-slide-left">Journal Articles</div>
      <h2 className="animate-slide-left text-[clamp(24px,2.6vw,36px)] font-semibold text-[#0B0D10] mb-8">
        Journal Articles
      </h2>
      <div className="space-y-4 stagger-children max-w-4xl">
        {publications.map((pub, i) => (
          <a
            key={i}
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-base card-link group block"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                {/* Meta row */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[0.58rem] tracking-[0.12em] uppercase text-[#C8332E]">
                    {pub.year}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#0B0D10]/20" />
                  <span className="font-mono text-[0.58rem] tracking-[0.1em] uppercase text-[#0B0D10]/40">
                    {pub.journal}
                  </span>
                </div>
                <p className="text-[14px] text-[#0B0D10]/80 leading-relaxed mb-2">
                    {pub.before} <em>{pub.venue}</em> {pub.after}
                    </p>
              </div>
              <ExternalLink
                size={14}
                className="shrink-0 mt-1 text-[#0B0D10]/20 group-hover:text-[#C8332E] transition-colors"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Publications;
