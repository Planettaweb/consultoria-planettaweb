import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Quanto tempo demora para desenvolver um site ou sistema?',
    answer:
      'O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Sites institucionais levam em média de 2 a 4 semanas, enquanto sistemas complexos podem levar de 2 a 6 meses. Após o escopo definido, fornecemos um cronograma detalhado e entregas em etapas.',
  },
  {
    question: 'Vocês oferecem suporte após a entrega do projeto?',
    answer:
      'Sim! A Planettaweb oferece pacotes de suporte e manutenção contínua para garantir que seu site ou sistema continue operando com máxima performance, segurança e sempre atualizado após o lançamento.',
  },
  {
    question: 'Como funciona o desenvolvimento de BI e Análise de Dados?',
    answer:
      'Nossa consultoria de dados conecta e consolida suas fontes de dados, cria modelagens precisas e desenvolve painéis interativos (Dashboards em Power BI ou ferramentas customizadas) para que você possa tomar decisões baseadas em dados em tempo real.',
  },
  {
    question: 'Os sites desenvolvidos são otimizados para o Google (SEO)?',
    answer:
      'Absolutamente. Todos os nossos projetos web são desenvolvidos seguindo as melhores práticas de SEO técnico, performance avançada (Core Web Vitals) e responsividade, garantindo uma base sólida para um bom ranqueamento orgânico.',
  },
  {
    question: 'Vocês trabalham com metodologias ágeis?',
    answer:
      'Sim, utilizamos metodologias ágeis (como Scrum e Kanban) integradas ao nosso fluxo de trabalho para garantir entregas incrementais de valor, maior transparência e flexibilidade para adaptações durante o desenvolvimento.',
  },
]

export function FAQ() {
  return (
    <section className="py-24 bg-[#0a0f1c]" id="faq">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Perguntas Frequentes</h2>
          <p className="text-lg text-gray-400">
            Tire suas dúvidas sobre nossos serviços, metodologia e processo de trabalho.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#0f172a] border border-gray-800/50 rounded-xl px-6 data-[state=open]:border-orange-500/50 data-[state=open]:bg-[#0f172a]/80 transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-white hover:text-orange-400 py-6 text-lg font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
