export default function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-bold text-sm tracking-tight text-[#1a1a1a] uppercase">MAILCLAW</span>

          <p className="text-xs text-[#a3a3a3]">
            Powered by OpenClaw &middot; MIT License
          </p>

          <div className="flex items-center gap-4 text-sm text-[#737373]">
            <a href="#" className="hover:text-[#1a1a1a] transition-colors duration-200">
              GitHub
            </a>
            <a href="#" className="hover:text-[#1a1a1a] transition-colors duration-200">
              npm
            </a>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-[#d4d4d4]">
            &copy; 2026 MailClaw
          </p>
        </div>
      </div>
    </footer>
  );
}
