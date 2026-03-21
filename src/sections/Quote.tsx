import { RAWLS_IMAGE } from '../config';

const Quote = () => (
  <section className="relative w-full bg-[#0B0D10] overflow-hidden z-30 py-[7vh] lg:py-[9vh]">
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8332E]/40 to-transparent" />

    <div className="w-full px-4 sm:px-6 lg:px-[6vw]">
      <div className="animate-on-scroll max-w-4xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-[5vw]">

        <div className="flex-1">
          <span className="block text-[72px] lg:text-[88px] leading-[0.7] text-[#C8332E] font-bold font-mono">
            &ldquo;
          </span>
          <p className="text-[clamp(17px,1.9vw,22px)] font-normal leading-[1.6] text-[#F4F6F8]/90 mt-1"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic' }}>
            One practicable aim of justice as fairness is to provide an acceptable
            philosophical and moral basis for democratic institutions.
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="w-[64px] h-[64px] lg:w-[76px] lg:h-[76px] rounded-full overflow-hidden border-2 border-[#C8332E]/30 img-zoom">
            <img src={RAWLS_IMAGE} alt="John Rawls" className="w-full h-full object-cover grayscale" />
          </div>
          <div>
            <p className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-[#F4F6F8]/50 mb-0.5">
              &mdash; John Rawls
            </p>
            <p className="text-xs text-[#F4F6F8]/35">Political Philosopher</p>
          </div>
        </div>

      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8332E]/30 to-transparent" />
  </section>
);

export default Quote;