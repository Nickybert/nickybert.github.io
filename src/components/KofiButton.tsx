
const KofiButton = () => {
  return (
    <a
      href="https://ko-fi.com/nickanakwue"
      target="_blank"
      rel="noopener noreferrer"

      className="fixed bottom-6 right-6 z-[9000] flex items-center gap-2 rounded-full bg-[#7A9D54] px-4 py-3 font-mono text-sm font-semibold tracking-wider text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
      aria-label="Support me on Ko-fi"
    >
      {}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        {/* Steam */}
        <path d="M7 4v3" />
        <path d="M12 3v3" />
        <path d="M17 4v3" />
        {/* Handleless Matcha Bowl */}
        <path d="M4 10h16a1 1 0 0 1 1 1c0 5-4.5 9-9 9s-9-4-9-9a1 1 0 0 1 1-1z" />
      </svg>
      <span className="uppercase tracking-widest text-xs">Buy me a matcha</span>
    </a>
  );
};

export default KofiButton;
