const projects = [
  {
    name: "Restaurante API (Gestão de Operações)",
    description:
      "Arquitetura de uma API para automação comercial, focada no gerenciamento de fluxo de pedidos, controle de estoque de pratos e cadastro de usuários.",
    url: "https://github.com/iscaio/RestauranteAPI",
  },
  {
    name: "Sistema de Autenticação & CRUD Segura",
    description:
      "Desenvolvimento de uma plataforma com foco em segurança da informação, utilizando autenticação via JWT (JSON Web Token, bcrypt).",
    url: "https://github.com/iscaio/Login-Node-CRUD",
  },
  {
    name: "E-commerce Nexari (Full Stack):",
    description:
      "Desenvolvimento de uma plataforma completa de comércio eletrônico integrando Frontend em React e Backend em Spring Boot. Autenticação segura, persistência de dados com MySQL e integração de CORS para comunicação entre serviços.",
    url: "https://github.com/iscaio/ecommerce_nexari",
  },
];

const courses = [
  "Análise e Desenvolvimento de Sistemas — [UniFacisa]]",
  "Administração de Empresas — [Nassau]",
  "Engenharia de Prompt — [Rockset]",
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
            Desenvolvedor de Software em transição de carreira, integrando
            sólida visão estratégica de negócios e empreendedorismo ao
            desenvolvimento técnico. Bacharel em Administração e graduando em
            Análise e Desenvolvimento de Sistemas, com foco em Engenharia de
            Software. Atualmente, desenvolvo APIs RESTful e sistemas web
            escaláveis utilizando Java (Spring Boot), Node.js e Python.
            Especialista em traduzir requisitos complexos de negócio em soluções
            tecnológicas funcionais, com experiência em gestão de projetos e
            metodologias ágeis.
          </p>
          <p className="text-[0.76rem] text-[#666] leading-[1.85] mt-4">
            Atualmente cursando Análise e Desenvolvimento de Sistemas e atuo
            como desenvolvedor full stack, trabalhando com projetos que vão do
            front ao banco de dados. Acredito que bom código é aquele que
            resolve o problema e é fácil de manter.
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

        {/* experiencia */}

        <Section label="Experiência Profissional">
          <p className="text-[0.76rem] text-[#666] leading-[1.85] mt-4">
            Proprietário e Gestor | IscaioWedding (Fotografia Profissional)
          </p>

          <p className="text-[0.76rem] text-[#666] leading-[1.85]">
            Gestão de Ciclo de Vida: Responsável pelo gerenciamento de ponta a
            ponta de projetos fotográficos, desde a prospecção e contrato até a
            entrega final sob prazos rigorosos.
          </p>
          <p className="text-[0.76rem] text-[#666] leading-[1.85] mt-4">
            Otimização de Processos: Implementação de fluxos de trabalho
            digitais e automação básica de contratos para aumentar a eficiência
            operacional da marca.
          </p>
          <p className="text-[0.76rem] text-[#666] leading-[1.85] mt-4">
            Soft Skills: Negociação direta com clientes, resolução de problemas
            em tempo real e gestão de marca.
          </p>
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
