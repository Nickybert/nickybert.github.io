import { ExternalLink } from 'lucide-react';

const books = [
  {
    citation:
      "Anakwue N. (2025). Sharlene Swartz, Tarryn De Kock, and Catherine A. Odora Hoppers, eds. Transformative Leadership in African Contexts: Strategies for Social Change. Cape Town: HSRC Press, 2024. African Studies Review, doi:10.1017/asr.2025.10062",
    link: "https://www.cambridge.org/core/journals/african-studies-review/article/sharlene-swartz-tarryn-de-kock-and-catherine-a-odora-hoppers-eds-transformative-leadership-in-african-contexts-strategies-for-social-change-cape-town-south-africa-hsrc-press-2024-462-pp-index-4500-paper-isbn-9780796926616/DECE6334DCDDD2418AFC9FFB4CDD6588",
    year: "2025",
    type: "Book Review",
  },
  {
    citation:
      "Ogbechie, R. & Anakwue, N. (2024). The role of management in business: The virtuous manager. In S. U. Ogbu & R. Ogbechie (Eds.). Business Ethics in Africa (Vol. I). Cham: Palgrave Macmillan.",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-64427-6_7",
    year: "2024",
    type: "Book Chapter",
  },
  {
    citation:
      "Anakwue, N. (2023). Re-centering Africa in the study of ancient philosophy: The legacy of ancient Egyptian philosophy. In M. Ward & M. Umachandran (Eds.). Critical Ancient World Studies: The Case for Forgetting Classics. London: Routledge.",
    link: "https://www.taylorfrancis.com/chapters/oa-edit/10.4324/9781003222637-6/recentring-africa-study-ancient-philosophy-nicholas-chukwudike-anakwue",
    year: "2023",
    type: "Book Chapter",
  },
  {
    citation:
      "Ogbechie, R. & Anakwue, N. (2018). Ethical principles and practices in Africa. In U. Uzo & A. Kinoti (Eds.). Indigenous management practices in Africa – Advanced Series in Management, Vol. 19. Bingley: Emerald.",
    link: "https://bookstore.emerald.com/indigenous-management-practices-in-africa-hb-9781787548497.html",
    year: "2018",
    type: "Book Chapter",
  },
];

const Books = () => (
  <section className="relative w-full bg-[#F4F6F8] py-[6vh] lg:py-[8vh] z-40">
    <div className="w-full px-4 sm:px-6 lg:px-[6vw]">
      <div className="section-label animate-slide-left">Books</div>
      <h2 className="animate-slide-left text-[clamp(24px,2.6vw,36px)] font-semibold text-[#0B0D10] mb-8">
        Book Chapters &amp; Reviews
      </h2>

      <div className="space-y-4 stagger-children max-w-4xl">
        {books.map((book, i) => (
          <a
            key={i}
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-base card-link group block"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[0.58rem] tracking-[0.12em] uppercase text-[#C8332E]">
                    {book.year}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#0B0D10]/20" />
                  <span className="font-mono text-[0.58rem] tracking-[0.1em] uppercase text-[#0B0D10]/40">
                    {book.type}
                  </span>
                </div>
                <p className="text-[14px] text-[#0B0D10]/80 leading-relaxed">{book.citation}</p>
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

export default Books;
