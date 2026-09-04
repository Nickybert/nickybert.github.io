import { Coffee } from 'lucide-react';

const KofiButton = () => {
  return (
    
      href="https://ko-fi.com/nickanakwue"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9000] flex items-center gap-2 rounded-full bg-[#6F4E37] px-4 py-3 font-mono text-sm font-semibold tracking-wider text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:bg-[#5A3E2B]"
      aria-label="Support Nicholas on Ko-fi"
    >
      <Coffee className="h-4 w-4" />
      <span className="uppercase tracking-widest text-xs">Buy me a coffee</span>
    </a>
  );
};

export default KofiButton;
