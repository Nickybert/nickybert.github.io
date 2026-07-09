import { Coffee } from 'lucide-react';

const KofiButton = () => {
  return (
    <a
      href="https://ko-fi.com/nickanakwue"
      target="_blank"
      rel="noopener noreferrer"
      // Tailwind classes position it fixed in the bottom right, style it red, and add a hover scale effect
      className="fixed bottom-6 right-6 z-[9000] flex items-center gap-2 rounded-full bg-[#C8332E] px-4 py-3 font-mono text-sm font-semibold tracking-wider text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
      aria-label="Support me on Ko-fi"
    >
      <Coffee className="h-4 w-4" />
      <span className="uppercase tracking-widest text-xs">Buy me a coffee</span>
    </a>
  );
};

export default KofiButton;
