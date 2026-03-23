import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Qual o prazo médio de um projeto?',
    answer:
      'O prazo varia de acordo com a complexidade. Projetos de sites corporativos levam em média de 3 a 5 semanas. Já integrações complexas de BI ou desenvolvimento de sistemas personalizados podem levar de 2 a 4 meses. Definimos o cronograma exato durante a fase de planejamento.',
  },
  {
    question: 'Como é garantida a segurança dos nossos dados?',
    answer:
      'Trabalhamos em conformidade com a LGPD e utilizamos as melhores práticas de segurança da informação, incluindo criptografia ponta a ponta, controle de acesso rigoroso e hospedagem em servidores cloud certificados (AWS, Azure ou Google Cloud).',
  },
  {
    question: 'A consultoria atende empresas de qual porte?',
    answer:
      'Atendemos desde startups em fase de tração até empresas de médio e grande porte que buscam otimizar seus processos através da tecnologia. Nossas soluções são escaláveis e se adaptam à realidade do seu negócio.',
  },
  {
    question: 'Vocês oferecem suporte após a entrega?',
    answer:
      'Sim! Todos os nossos projetos incluem um período de garantia e suporte técnico gratuito pós-lançamento. Além disso, oferecemos planos de manutenção evolutiva para garantir que sua tecnologia acompanhe o crescimento da empresa.',
  },
]

export function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600 text-lg">
            Tire suas dúvidas sobre nosso modelo de trabalho e soluções.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-6 data-[state=open]:bg-slate-50 data-[state=open]:border-slate-200 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-secondary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
