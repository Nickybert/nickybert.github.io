import { FileText, FlaskConical, BookOpen } from 'lucide-react';

const Research = () => (
  <section id="research" className="relative w-full bg-[#F4F6F8] py-[6vh] lg:py-[8vh] z-40">
    <div className="w-full px-4 sm:px-6 lg:px-[6vw]">

      <div className="section-label animate-slide-left">Research &amp; Teaching</div>
      <h2 className="animate-slide-left text-[clamp(24px,2.6vw,36px)] font-semibold text-[#0B0D10] mb-8">
        Research &amp; Teaching
      </h2>

      {/* CV link */}
      <div className="animate-on-scroll mb-8">
        <a
          href="https://drive.google.com/file/d/14vxkJUvja2bGCLV_SH-O2jWUqAhuAA6I/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-white rounded-lg px-4 py-2.5 text-sm font-medium text-[#0B0D10] border border-[#0B0D10]/10 hover:border-[#C8332E] hover:text-[#C8332E] transition-all duration-300 group"
          style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
        >
          <FileText size={17} className="text-[#C8332E]" />
          <span>View Updated CV</span>
          <span className="ml-1 text-[#0B0D10]/30 group-hover:text-[#C8332E]/60 transition-colors">↗</span>
        </a>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl">

        {/* Work in Progress */}
        <div className="animate-slide-left card-base">
          <div className="flex items-center gap-2.5 mb-4">
            <FlaskConical size={17} className="text-[#C8332E] shrink-0" />
            <h3 className="text-sm font-semibold text-[#0B0D10] font-mono tracking-wide uppercase">
              Work in Progress
            </h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-[14px] text-[#0B0D10]/75 leading-relaxed">
              <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#C8332E]/50 shrink-0" />
              DyNAM modelling of Twitter conversation networks across #EndSARS and #ThisFlag protest movements.
            </li>
            <li className="flex items-start gap-2.5 text-[14px] text-[#0B0D10]/75 leading-relaxed">
              <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#C8332E]/50 shrink-0" />
              Comparative ERGM analysis of community homophily and preferential attachment in hashtag-driven protest networks.
            </li>
          </ul>
        </div>

        {/* Teaching */}
        <div className="animate-slide-right card-base">
          <div className="flex items-center gap-2.5 mb-4">
            <BookOpen size={17} className="text-[#C8332E] shrink-0" />
            <h3 className="text-sm font-semibold text-[#0B0D10] font-mono tracking-wide uppercase">
              Teaching
            </h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-[14px] text-[#0B0D10]/75 leading-relaxed">
              <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#C8332E]/50 shrink-0" />
              <span>
                <span className="font-medium text-[#0B0D10]">POL113 – Politics in Action</span>
                <br />Queen Mary University of London
              </span>
            </li>
<li className="flex items-start gap-2.5 text-[14px] text-[#0B0D10]/75 leading-relaxed">
              <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#C8332E]/50 shrink-0" />
              <span>
                <span className="font-medium text-[#0B0D10]">POL109 – Global Histories</span>
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
