import { Linkedin, Twitter, Github, GraduationCap, Mail } from 'lucide-react';
import { HERO_IMAGE, PERSONAL_INFO, SOCIAL_LINKS } from '../config';

const socialLinks = [
  { icon: Linkedin,     href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
  { icon: Twitter,      href: SOCIAL_LINKS.twitter,  label: 'X (Twitter)' },
  { icon: Github,       href: SOCIAL_LINKS.github,   label: 'GitHub' },
  { icon: GraduationCap, href: SOCIAL_LINKS.orcid,  label: 'ORCID' },
  { icon: Mail,          href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
];

const Hero = () => (
  <section className="relative w-full min-h-screen bg-[#F4F6F8] overflow-hidden z-10">
    <div className="w-full min-h-screen px-4 sm:px-6 lg:px-[6vw] py-[8vh] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[5vw]">

      {/* ── Left: text ─────────────────────────────────────── */}
      <div className="flex flex-col justify-center w-full lg:w-[45vw] order-2 lg:order-1 pt-16 lg:pt-0">
        {/* Eyebrow label */}
        <div className="hero-socials mb-5">
          <span className="section-label" style={{ marginBottom: 0 }}>
            PhD Researcher
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-[clamp(44px,7.5vw,96px)] font-semibold leading-[0.88] tracking-[-0.02em] text-[#0B0D10] mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          <span className="hero-word"><span>Nicholas</span></span>
          <span className="hero-word"><span>Anakwue</span></span>
        </h1>

        {/* Sub-headline */}
        <p className="hero-subheadline text-base lg:text-lg text-[#0B0D10]/70 mb-2 max-w-md leading-relaxed">
          {PERSONAL_INFO.title},{' '}
          <span className="text-[#C8332E] font-medium">{PERSONAL_INFO.institution}</span>
        </p>
        <p className="hero-subheadline text-sm text-[#0B0D10]/50 mb-8 max-w-md" style={{ animationDelay: '0.38s' }}>
          Digital politics · Social movements · Computational social science
        </p>

        {/* CTA */}
        <div className="hero-cta mb-8 border-l-2 border-[#C8332E]/30 pl-4">
          <p className="text-xs text-[#6B7280] mb-0.5 font-mono tracking-wide uppercase">Collaborate</p>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-sm text-[#0B0D10] font-medium text-link"
          >
            {PERSONAL_INFO.email}
          </a>
        </div>

        {/* Social icons */}
        <div className="hero-socials flex items-center gap-2.5">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label={s.label}
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* ── Right: portrait ─────────────────────────────────── */}
      <div className="w-full max-w-[300px] sm:max-w-[360px] lg:max-w-none lg:w-[36vw] lg:h-[76vh] order-1 lg:order-2">
        <div className="hero-portrait relative w-full aspect-square lg:aspect-auto lg:h-full rounded-xl overflow-hidden img-zoom"
          style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.12)' }}>
          <img
            src={HERO_IMAGE}
            alt={PERSONAL_INFO.name}
            className="w-full h-full object-cover"
          />
          {/* Subtle red corner accent */}
          <span className="absolute bottom-0 right-0 w-16 h-16 bg-[#C8332E]/10 pointer-events-none" />
        </div>
      </div>

    </div>

    {/* Scroll indicator */}
    <div className="hero-cta absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
      <span className="font-mono text-[0.55rem] tracking-[0.14em] uppercase text-[#0B0D10]">Scroll</span>
      <span className="w-[1px] h-8 bg-[#0B0D10] animate-[pulse_2s_ease-in-out_infinite]" />
    </div>
  </section>
);

export default Hero;
