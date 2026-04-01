import React from "react";
import {
  Wifi,
  ShieldCheck,
  Headphones,
  Zap,
  Menu,
  ArrowRight,
} from "lucide-react";

export default function In9veLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter">
            IN<span className="text-brand">9</span>VE
          </div>

          <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-wider">
            <a href="#planos" className="hover:text-brand transition">
              Planos
            </a>
            <a href="#cobertura" className="hover:text-brand transition">
              Cobertura
            </a>
            <a
              href="https://wa.me/558007898989"
              target="blank"
              className="hover:text-brand transition"
            >
              Suporte
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative bg-dark py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-brand font-bold tracking-[0.2em] uppercase mb-4 block">
              Conexão Sem Limites
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              A internet que <br />
              <span className="text-brand">inova</span> seu mundo.
            </h1>
            <p className="text-gray-400 text-lg lg:text-xl mb-10 max-w-xl">
              Fibra óptica de ultravelocidade para você navegar, trabalhar e
              jogar com a estabilidade que só a In9ve oferece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/558007898989"
                target="blank"
                className="bg-brand text-dark px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
              >
                Assinar Agora
              </a>
              <a
                href="#planos"
                className="border border-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition"
              >
                Ver Planos
              </a>
            </div>
          </div>
        </div>
        {/* Decorativo de fundo */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand/10 to-transparent hidden lg:block" />
      </header>

      {/* --- PLANOS --- */}
      <section id="planos" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Escolha sua Velocidade</h2>
            <p className="text-gray-600">
              Planos pensados para cada necessidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-8 items-stretch px-4 md:px-0">
            {" "}
            {/* items-end ajuda a dar ritmo visual */}
            {[
              {
                mega: "300",
                preco: "89",
                popular: false,
                ultra: false,
                apps: [],
              },
              {
                mega: "500",
                preco: "119",
                popular: true,
                ultra: false,
                apps: ["Disney+", "Max"],
              },
              {
                mega: "1 Giga",
                preco: "159",
                popular: false,
                ultra: true,
                apps: ["Disney+", "Max"],
              },
            ].map((plano, i) => (
              <div
                key={i}
                className={`relative p-8 rounded-[2rem] transition-all duration-500 flex flex-col 
        ${
          plano.ultra
            ? "bg-gradient-to-b from-dark to-[#1a1a1a] text-white scale-110 shadow-[0_20px_50px_rgba(255,191,0,0.15)] border-2 border-brand z-20 h-[520px]"
            : plano.popular
              ? "bg-dark text-white scale-105 shadow-xl border border-gray-800 z-10 h-[480px]"
              : "bg-white border border-gray-100 h-[450px]"
        }`}
              >
                {/* SELO DE DESTAQUE */}
                {plano.ultra && (
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand text-dark text-[10px] font-black py-2 px-8 rounded-full tracking-[0.3em] uppercase shadow-lg animate-pulse">
                    EXPERIÊNCIA ULTRA
                  </span>
                )}

                {plano.popular && !plano.ultra && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-200 text-dark text-[10px] font-black py-1.5 px-6 rounded-full tracking-widest uppercase">
                    MAIS VENDIDO
                  </span>
                )}

                <div className="mb-4">
                  <h3
                    className={`text-2xl font-black ${plano.ultra ? "text-brand" : ""}`}
                  >
                    {plano.mega} {plano.mega.includes("Giga") ? "" : "Mega"}
                  </h3>
                  {plano.ultra && (
                    <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mt-1">
                      Velocidade Máxima
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <span
                    className={`text-5xl font-black ${plano.ultra ? "text-white" : "text-brand"}`}
                  >
                    R$ {plano.preco}
                  </span>
                  <span className="text-gray-500 font-medium text-sm">
                    /mês
                  </span>
                </div>

                {/* DESTAQUE ULTRA */}
                {plano.apps.length > 0 && (
                  <div
                    className={`mb-6 p-4 rounded-2xl flex flex-wrap gap-3 items-center ${plano.ultra ? "bg-brand/10 border border-brand/20" : "bg-white/5 border border-white/10"}`}
                  >
                    <span className="text-[10px] uppercase font-black text-brand block w-full tracking-tighter">
                      Streamings Inclusos:
                    </span>
                    {plano.apps.map((app) => (
                      <span
                        key={app}
                        className="text-xs font-black flex items-center gap-1"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand" />{" "}
                        {app}
                      </span>
                    ))}
                  </div>
                )}

                <ul className="space-y-3 mb-8 flex-grow text-sm">
                  <li className="flex items-center gap-3">
                    <Zap size={14} className="text-brand" /> Fibra Dedicada
                  </li>
                  <li className="flex items-center gap-3">
                    <Wifi size={14} className="text-brand" /> Roteador Wi-Fi 6
                    Giga
                  </li>
                  {plano.ultra && (
                    <li className="flex items-center gap-3 font-bold text-brand">
                      <ShieldCheck size={14} /> Instalação Prioritária
                    </li>
                  )}
                  <li className="flex items-center gap-3 text-gray-400">
                    <Headphones size={14} className="text-brand" /> Suporte 24h
                  </li>
                </ul>

                <a
                  href={`https://wa.me/55DDDNUMERO?text=Olá! Quero o Plano Ultra de 1 Giga`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-2xl font-black transition-all block text-center uppercase text-xs tracking-widest ${
                    plano.ultra
                      ? "bg-brand text-dark hover:scale-105 shadow-[0_10px_20px_rgba(255,191,0,0.2)]"
                      : plano.popular
                        ? "bg-white text-dark hover:bg-brand"
                        : "bg-dark text-white hover:bg-brand hover:text-dark"
                  }`}
                >
                  Assinar Agora
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DIFERENCIAIS --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Por que escolher a <span className="text-brand">In9ve</span>?
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-brand/10 p-4 rounded-2xl h-fit">
                  <Headphones className="text-brand" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Suporte Humanizado</h4>
                  <p className="text-gray-600">
                    Nada de robôs. Nossa equipe está pronta para te atender de
                    forma ágil e real.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-brand/10 p-4 rounded-2xl h-fit">
                  <Zap className="text-brand" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Ultra Estabilidade</h4>
                  <p className="text-gray-600">
                    Tecnologia de ponta para garantir que sua conexão não caia
                    nos momentos importantes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-[2rem] h-[400px] overflow-hidden">
            <div className="w-full h-full bg-dark flex items-center justify-center text-brand font-black text-6xl">
              IN9VE
            </div>
          </div>
        </div>
      </section>
      {/* --- SEÇÃO DE COBERTURA --- */}
      <section id="cobertura" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block bg-brand/10 text-brand px-4 py-1 rounded-full text-sm font-bold mb-4 tracking-wider">
            PRESENTE NA REGIÃO
          </div>
          <h2 className="text-4xl font-bold mb-6">Nossa Cobertura</h2>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
            Estamos expandindo nossa rede de ultravelocidade para conectar cada
            vez mais famílias e negócios no interior.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Altaneira",
              "Campos Sales",
              "Nova Olinda",
              "Potengi",
              "Salitre",
              "Santana do Cariri",
            ].map((cidade, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-brand hover:border-brand transition-all duration-300"
              >
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <svg
                    className="text-brand w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="font-bold text-gray-800 group-hover:text-dark">
                  {cidade}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-dark text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h4 className="text-xl font-bold mb-2">
                Sua cidade ainda não aparece aqui?
              </h4>
              <p className="text-gray-400">
                Estamos em constante expansão. Deixe seu interesse registrado!
              </p>
            </div>
            <a
              href="https://wa.me/558007898989"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand text-dark px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_20px_rgba(255,191,0,0.3)] transition-all relative z-10"
            >
              <div>Quero a In9ve na </div>
              minha cidade
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-black mb-6">
              IN<span className="text-brand">9</span>VE
            </div>
            <p className="text-gray-400">
              Conectando pessoas e negócios com a melhor tecnologia de fibra
              óptica do mercado.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6">Links</h5>
            <ul className="text-gray-400 space-y-3">
              <li>
                <a
                  href="https://fast.com/pt/"
                  className="hover:text-brand"
                  target="_blank"
                >
                  Teste de Velocidade
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/558007898989"
                  className="hover:text-brand"
                  target="_blank"
                >
                  2ª Via de Fatura
                </a>
              </li>
              <li>
                <a href="/politicas" className="hover:text-brand">
                  Políticas de Privacidade
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Atendimento</h5>
            <p className="text-gray-400">
              Suporte 24/7 disponível via WhatsApp e telefone.
            </p>
            <p className="text-brand font-black mt-4">+55 800 789 8989</p>
          </div>
          <div className="bg-brand/10 p-6 rounded-3xl border border-brand/20">
            <h5 className="font-bold mb-2">Fale com um Consultor</h5>
            <p className="text-gray-400 text-sm mb-4">
              Receba uma oferta exclusiva hoje mesmo.
            </p>
            <a
              href="https://wa.me/558007898989"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand text-dark w-full py-3 rounded-xl font-black uppercase text-xs tracking-widest inline-block text-center hover:bg-yellow-500 transition-colors"
            >
              QUERO AGORA
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-500 text-sm">
          © 2026 In9ve Provedora de Internet. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
