import { Mail, Phone, MapPin } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-100">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-5 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="lg:col-span-2 p-10 md:p-14 bg-secondary text-white relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Agende sua Consultoria Gratuita
              </h2>
              <p className="text-blue-100 text-lg mb-12 leading-relaxed">
                Dê o primeiro passo para transformar os dados da sua empresa em resultados reais.
                Preencha o formulário e um especialista entrará em contato.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">E-mail</h4>
                    <p className="text-blue-200">contato@planettaweb.com.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Telefone / WhatsApp</h4>
                    <p className="text-blue-200">(41) 99635-2036</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Endereço Base</h4>
                    <p className="text-blue-200 leading-relaxed">
                      Atendimento remoto em todo Brasil
                      <br />
                      Base de operações: Curitiba - PR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 p-10 md:p-14">
            <h3 className="text-2xl font-bold text-secondary mb-8">Envie uma mensagem</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
