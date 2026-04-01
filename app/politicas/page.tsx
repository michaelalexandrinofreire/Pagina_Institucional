import Link from 'next/link';

export default function Politicas() {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
      {/* Header Simples */}
      <nav className="bg-dark py-6 px-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-brand font-black text-2xl tracking-tighter">
            IN9VE
          </Link>
          <Link href="/" className="text-white text-sm font-bold hover:text-brand transition">
            Voltar ao Início
          </Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto py-16 px-6 leading-relaxed">
        <h1 className="text-4xl font-black mb-8 text-dark">Política de Privacidade</h1>
        <p className="text-gray-500 mb-8 italic">Última atualização: 28 de março de 2026</p>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-dark">1. Coleta de Informações</h2>
            <p>
              Ao utilizar o site da <strong>In9ve</strong>, coletamos informações básicas para fornecer um serviço de internet de qualidade. Isso inclui dados fornecidos voluntariamente por você em nossos botões de interesse ou formulários, como nome, telefone e localização (cidade e bairro) para fins de verificação de cobertura em cidades como <strong>Altaneira, Campos Sales, Nova Olinda, Potengi, Salitre e Santana do Cariri</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-dark">2. Uso dos Dados</h2>
            <p>Os dados coletados são utilizados exclusivamente para:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Verificar a disponibilidade técnica do sinal de fibra óptica na sua região;</li>
              <li>Entrar em contato para efetivar a contratação de planos;</li>
              <li>Informar sobre a chegada da rede em novas áreas de cobertura.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-dark">3. Cookies e Navegação</h2>
            <p>
              Utilizamos cookies para melhorar sua experiência de navegação e entender como você interage com nosso site. Isso nos ajuda a otimizar o carregamento da página e a apresentação dos nossos planos de internet.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-dark">4. Segurança</h2>
            <p>
              A <strong>In9ve</strong> se compromete com a segurança dos seus dados. Implementamos medidas técnicas para proteger suas informações contra acessos não autorizados ou uso indevido, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-dark">5. Seus Direitos</h2>
            <p>
              Você tem o direito de solicitar a exclusão ou correção de seus dados a qualquer momento através dos nossos canais oficiais de atendimento (WhatsApp ou central telefônica).
            </p>
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-gray-100 text-sm text-gray-500">
          <p>© 2026 In9ve - Conectando o Cariri com Ultravelocidade.</p>
        </footer>
      </article>
    </main>
  );
}