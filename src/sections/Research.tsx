import { FileText, FlaskConical, BookOpen } from 'lucide-react';

// bg-[#F4F6F8] with section-light
const Research = () => (
  <section id="research" className="relative w-full section-light py-[6vh] lg:py-[8vh] z-40 transition-colors duration-300">
    <div className="w-full px-4 sm:px-6 lg:px-[6vw]">

      <div className="section-label animate-slide-left">Research &amp; Teaching</div>

      {/* text-[#0B0D10] with text-foreground */}
      <h2 className="animate-slide-left text-[clamp(24px,2.6vw,36px)] font-semibold text-foreground transition-colors duration-300 mb-8">
        Research &amp; Teaching
      </h2>

      {/* CV link */}
      <div className="animate-on-scroll mb-8">
        {/* bg-white with bg-card, text-[#0B0D10] with text-foreground, and border-[#0B0D10]/10 with border-border */}
        <a
          href="https://drive.google.com/file/d/14vxkJUvja2bGCLV_SH-O2jWUqAhuAA6I/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-card rounded-lg px-4 py-2.5 text-sm font-medium text-foreground border border-border hover:border-[#C8332E] hover:text-[#C8332E] transition-all duration-300 group"
          style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
        >
          <FileText size={17} className="text-[#C8332E]" />
          <span>View Updated CV</span>
          {/* text-[#0B0D10]/30 with text-muted-foreground */}
          <span className="ml-1 text-muted-foreground group-hover:text-[#C8332E]/60 transition-colors">↗</span>
        </a>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl">

        {/* Work in Progress */}
        <div className="animate-slide-left card-base">
          <div className="flex items-center gap-2.5 mb-4">
            <FlaskConical size={17} className="text-[#C8332E] shrink-0" />
            <h3 className="text-sm font-semibold text-foreground font-mono tracking-wide uppercase transition-colors duration-300">
              Work in Progress
            </h3>
          </div>
          <ul className="space-y-3">
            {/* text-[#0B0D10]/75 with text-muted-foreground */}
            <li className="flex items-start gap-2.5 text-[14px] text-muted-foreground leading-relaxed transition-colors duration-300">
              <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#C8332E]/50 shrink-0" />
              Comparative DyNAM and ERGM modelling of Twitter interaction networks across #EndSARS and #ThisFlag protest movements.
            </li>
            <li className="flex items-start gap-2.5 text-[14px] text-muted-foreground leading-relaxed transition-colors duration-300">
              <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#C8332E]/50 shrink-0" />
              Thematic analysis of qualitative interview data from protest actors from the core and periphery of #EndSARS and #ThisFlag protest movements.
            </li>
          </ul>
        </div>

        {/* Teaching */}
        <div className="animate-slide-right card-base">
          <div className="flex items-center gap-2.5 mb-4">
            <BookOpen size={17} className="text-[#C8332E] shrink-0" />
            <h3 className="text-sm font-semibold text-foreground font-mono tracking-wide uppercase transition-colors duration-300">
              Teaching
            </h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-[14px] text-muted-foreground leading-relaxed transition-colors duration-300">
              <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#C8332E]/50 shrink-0" />
              <span>
                {/* text-[#0B0D10] with text-foreground */}
                <span className="font-medium text-foreground transition-colors duration-300">POL113 – Politics in Action</span>
                <br />Queen Mary University of London
              </span>
            </li>
            <li className="flex items-start gap-2.5 text-[14px] text-muted-foreground leading-relaxed transition-colors duration-300">
              <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#C8332E]/50 shrink-0" />
              <span>
                <span className="font-medium text-foreground transition-colors duration-300">POL109 – Global Histories</span>
                <br />Queen Mary University of London
              </span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
);

export default Research;
