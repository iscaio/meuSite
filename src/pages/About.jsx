const projects = [
  {
    name: "Projeto 01",
    description: "Descrição breve do projeto",
    url: "https://github.com/iscaio",
  },
  {
    name: "Projeto 02",
    description: "Descrição breve do projeto",
    url: "https://github.com/iscaio",
  },
  {
    name: "Projeto 03",
    description: "Descrição breve do projeto",
    url: "https://github.com/iscaio",
  },
];

const courses = [
  "Análise e Desenvolvimento de Sistemas — [instituição]",
  "Certificação / Curso 01 — [plataforma]",
  "Certificação / Curso 02 — [plataforma]",
];

export default function About({ onNavigate }) {
  return (
    <main className="bg-white min-h-screen font-mono">
      <div className="max-w-[600px] mx-auto px-6 py-14">
        {/* Voltar */}
        <button
          onClick={() => onNavigate("home")}
          className="text-[0.72rem] text-[#bbb] hover:text-[#444] transition-colors duration-150 mb-12 flex items-center gap-1 bg-transparent cursor-pointer"
        >
          ← voltar
        </button>

        {/* Foto */}
        <div className="mb-8">
          <div className="w-20 h-20 rounded-full bg-[#f0f0f0] border border-[#e0e0e0] flex items-center justify-center overflow-hidden">
            <img
              src="/images.png"
              alt="Caio Victor"
              className="w-full h-full object-cover"
            />
            <span className="text-[0.6rem] text-[#ccc] text-center leading-relaxed"></span>
          </div>
        </div>

        {/* Nome + sub */}
        <p className="text-[0.95rem] font-medium text-[#111] mb-1">
          Caio Victor
        </p>
        <p className="text-[0.72rem] text-[#aaa] mb-10">
          Campina Grande — PB, Brasil
        </p>

        <Divider />

        {/* História */}
        <Section label="História">
          <p className="text-[0.76rem] text-[#666] leading-[1.85]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cresci em
            Campina Grande fascinado por tecnologia e resolução de problemas.
            Comecei a programar cedo e nunca parei — cada projeto é uma
            oportunidade de aprender algo novo e construir coisas que fazem
            sentido para as pessoas.
          </p>
          <p className="text-[0.76rem] text-[#666] leading-[1.85] mt-4">
            Atualmente curso Análise e Desenvolvimento de Sistemas e atuo como
            desenvolvedor full stack, trabalhando com projetos que vão do front
            ao banco de dados. Acredito que bom código é aquele que resolve o
            problema e é fácil de manter.
          </p>
        </Section>

        <Divider />

        {/* Projetos */}
        <Section label="Projetos">
          <ul className="flex flex-col gap-2">
            {projects.map((p) => (
              <li
                key={p.name}
                className="flex items-baseline gap-3 text-[0.76rem] text-[#666]"
              >
                <span className="text-[#ccc] shrink-0">—</span>
                <span>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#444] border-b border-[#e0e0e0] hover:text-[#111] hover:border-[#aaa] transition-colors duration-150"
                  >
                    {p.name}
                  </a>
                  &nbsp;&mdash; {p.description}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Divider />

        {/* Cursos */}
        <Section label="Cursos & Formação">
          <ul className="flex flex-col gap-2">
            {courses.map((c) => (
              <li
                key={c}
                className="flex items-baseline gap-3 text-[0.76rem] text-[#666]"
              >
                <span className="text-[#ccc] shrink-0">—</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </main>
  );
}

function Section({ label, children }) {
  return (
    <div className="mb-10">
      <p className="text-[0.62rem] text-[#ccc] uppercase tracking-[0.12em] mb-4">
        {label}
      </p>
      {children}
    </div>
  );
}

function Divider() {
  return <div className="w-full h-px bg-[#f0f0f0] mb-10" />;
}
