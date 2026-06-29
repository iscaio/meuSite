export default function Home({ onNavigate }) {
  return (
    <main className="bg-[#0e0e0e] min-h-screen flex items-center justify-center px-6 font-mono">
      <div className="w-full max-w-[440px]">
        {/* Nome */}
        <h1 className="animate-fade-in opacity-0 text-[#f0f0f0] text-[1.05rem] font-medium tracking-tight mb-1">
          Caio Andrade
        </h1>

        {/* Localização */}
        <p className="animate-fade-in-d1 opacity-0 text-[#555] text-[0.75rem] mb-7">
          Campina Grande — PB, Brasil
        </p>

        {/* Curso */}
        <p className="animate-fade-in-d2 opacity-0 text-[#777] text-[0.78rem] mb-1">
          Análise e Desenvolvimento de Sistemas
        </p>

        {/* Role + GitHub */}
        <p className="animate-fade-in-d3 opacity-0 text-[#777] text-[0.78rem] mb-8">
          Programador Full Stack, Java, Python, Node [
          <a
            href="https://github.com/iscaio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#aaa] border-b border-[#444] hover:text-[#f0f0f0] hover:border-[#888] transition-colors duration-150"
          >
            Github
          </a>
          ]
        </p>

        {/* Ações */}
        <div className="animate-fade-in-d4 opacity-0 flex items-center gap-4">
          <button
            onClick={() => onNavigate("portfolio")}
            className="text-[0.78rem] text-[#d4d4d4] border-b border-[#444] hover:text-white hover:border-[#999] transition-colors duration-150 bg-transparent cursor-pointer"
          >
            Saiba mais
          </button>

          <span className="text-[#2a2a2a] text-[0.78rem] select-none">/</span>

          <a
            href="/curriculo.pdf"
            download
            className="text-[0.78rem] text-[#555] hover:text-[#aaa] transition-colors duration-150"
          >
            Baixar currículo
          </a>
        </div>
      </div>
    </main>
  );
}
