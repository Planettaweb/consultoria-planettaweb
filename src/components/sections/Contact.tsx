import { Mail, Phone, MapPin } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'

export function Contact() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-slate-100">
      <div className="container px-4 md:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-5 bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border border-slate-100 mx-0">
          <div className="lg:col-span-2 p-8 md:p-10 lg:p-14 bg-secondary text-white relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 tracking-tight">
                Entre em contato
              </h2>
              <p className="text-blue-100 text-base md:text-lg mb-8 md:mb-12 leading-relaxed">
                Dê o primeiro passo para transformar os dados da sua empresa em resultados reais.
                Preencha o formulário e um especialista entrará em contato.
              </p>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 md:p-3 rounded-lg shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">E-mail</h4>
                    <p className="text-blue-200 text-sm md:text-base break-all">
                      contato@planettaweb.com.br
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 md:p-3 rounded-lg shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Telefone / WhatsApp</h4>
                    <p className="text-blue-200 text-sm md:text-base">(41) 99635-2036</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 md:p-3 rounded-lg shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Endereço Base</h4>
                    <p className="text-blue-200 text-sm md:text-base leading-relaxed">
                      Atendimento remoto em todo Brasil
                      <br />
                      Base de operações: Curitiba - PR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 p-6 md:p-10 lg:p-14 bg-white">
            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-6 md:mb-8">
              Envie uma mensagem
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
