import { Linkedin, Twitter, Github, GraduationCap, Mail } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../config';

const socialLinks = [
  { icon: Linkedin,      href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
  { icon: Twitter,       href: SOCIAL_LINKS.twitter,  label: 'X (Twitter)' },
  { icon: Github,        href: SOCIAL_LINKS.github,   label: 'GitHub' },
  { icon: GraduationCap, href: SOCIAL_LINKS.orcid,    label: 'ORCID' },
];

const Contact = () => (
  <section id="contact" className="relative w-full bg-[#0B0D10] py-[7vh] lg:py-[9vh] z-50 overflow-hidden">
    {/* Background accent */}
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8332E]/35 to-transparent" />
    <div className="absolute -bottom-40 -right-40 w-72 h-72 rounded-full bg-[#C8332E]/5 blur-3xl pointer-events-none" />

    <div className="w-full px-4 sm:px-6 lg:px-[6vw]">
      <div className="max-w-2xl">
        {/* Label */}
        <div className="animate-on-scroll mb-4 flex items-center gap-2">
          <span className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-[#C8332E]">Contact</span>
          <span className="w-6 h-[1px] bg-[#C8332E]/40" />
        </div>

        <h2 className="animate-on-scroll text-[clamp(32px,4vw,52px)] font-semibold text-[#F4F6F8] mb-6 leading-[1.1]">
          Let's work<br />
          <span className="italic text-[#F4F6F8]/55">together.</span>
        </h2>

        <div className="animate-on-scroll delay-1">
          <p className="text-base text-[#F4F6F8]/60 mb-6 leading-relaxed max-w-sm">
            Open to collaborations, speaking invitations, and questions about my research.
          </p>

          {/* Email CTA */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group inline-flex items-center gap-3 text-[#F4F6F8] hover:text-[#C8332E] transition-colors duration-300 mb-8"
          >
            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#F4F6F8]/15 group-hover:border-[#C8332E] group-hover:bg-[#C8332E] transition-all duration-300">
              <Mail size={14} />
            </span>
            <span className="text-sm font-medium border-b border-[#F4F6F8]/15 group-hover:border-[#C8332E] pb-0.5 transition-colors">
              {PERSONAL_INFO.email}
            </span>
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn icon-btn-light"
                aria-label={s.label}
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="animate-on-scroll delay-2 mt-16 pt-6 border-t border-[#F4F6F8]/08 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[0.58rem] tracking-[0.1em] uppercase text-[#F4F6F8]/25">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}
        </p>
        <p className="font-mono text-[0.58rem] tracking-[0.1em] uppercase text-[#F4F6F8]/20">
          {PERSONAL_INFO.institution}
        </p>
      </div>
    </div>
  </section>
);

export default Contact;
