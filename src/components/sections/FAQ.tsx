import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Como funciona o processo de Criação de Sites?',
    answer:
      'Nossa equipe foca em construir plataformas de alta performance. Desenvolvemos desde landing pages otimizadas para conversão até sites corporativos completos, sempre priorizando a melhor experiência do usuário (UX/UI), SEO técnico e responsividade em todos os dispositivos.',
  },
  {
    question: 'Quais tipos de Sistemas para Internet vocês desenvolvem?',
    answer:
      'Criamos soluções sob medida para resolver problemas complexos do seu negócio. Isso inclui painéis administrativos customizados, CRMs, portais B2B/B2C, sistemas de gestão integrados e plataformas SaaS, sempre utilizando arquiteturas robustas e escaláveis.',
  },
  {
    question: 'Como a área de Data Analysis, IA & BI pode ajudar minha empresa?',
    answer:
      'Ajudamos você a tomar decisões baseadas em fatos, não em intuição. Estruturamos pipelines de dados, construímos dashboards interativos em tempo real (como Power BI) e aplicamos modelos preditivos de Inteligência Artificial para identificar tendências de mercado, otimizar custos operacionais e descobrir novas oportunidades de receita.',
  },
  {
    question: 'Qual o prazo médio de um projeto de tecnologia?',
    answer:
      'O prazo varia conforme a complexidade da solução. Projetos focados em presença digital e sites corporativos levam em média de 3 a 5 semanas. Integrações avançadas de dados, desenvolvimento de sistemas web complexos ou projetos de IA podem levar de 2 a 4 meses. O cronograma exato é definido e aprovado com você durante a fase inicial de planejamento.',
  },
]

export function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Tire suas dúvidas sobre nossas áreas de atuação e soluções.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-4 md:px-6 data-[state=open]:bg-slate-50 data-[state=open]:border-slate-200 transition-colors bg-white shadow-sm"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-secondary hover:no-underline py-4 md:py-6 hover:text-[#f59e0b] transition-colors gap-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-4 md:pb-6 text-sm md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
