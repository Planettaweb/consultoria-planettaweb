import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const formSchema = z.object({
  name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Forneça um endereço de e-mail válido'),
  phone: z.string().min(10, 'Forneça um número de telefone válido'),
  service: z.string().min(1, 'Por favor, selecione um serviço de interesse'),
  message: z.string().optional(),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate email dispatch process
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)

    toast({
      title: 'Solicitação Enviada com Sucesso!',
      description:
        'Sua mensagem foi encaminhada para nossos consultores. Entraremos em contato em breve.',
      className: 'bg-[#1e3a8a] text-white border-none',
    })

    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-semibold text-sm md:text-base">
                Nome Completo
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Seu nome completo"
                  className="bg-white border-slate-200 focus-visible:ring-[#f59e0b] h-11 md:h-10"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 font-medium text-xs" />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 font-semibold text-sm md:text-base">
                  E-mail
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="joao@empresa.com.br"
                    type="email"
                    className="bg-white border-slate-200 focus-visible:ring-[#f59e0b] h-11 md:h-10"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 font-medium text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 font-semibold text-sm md:text-base">
                  Telefone / WhatsApp
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="(41) 99999-9999"
                    type="tel"
                    className="bg-white border-slate-200 focus-visible:ring-[#f59e0b] h-11 md:h-10"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 font-medium text-xs" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-semibold text-sm md:text-base">
                Serviço de Interesse
              </FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white border-slate-200 focus:ring-[#f59e0b] h-11 md:h-10">
                    <SelectValue placeholder="Selecione a área principal" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="web">Criação de Sites</SelectItem>
                  <SelectItem value="sistemas">Sistemas para Internet</SelectItem>
                  <SelectItem value="dados">Data Analysis, IA & BI</SelectItem>
                  <SelectItem value="consultoria">Consultoria Geral</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500 font-medium text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-semibold text-sm md:text-base">
                Mensagem (Opcional)
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Conte um pouco mais sobre o seu desafio corporativo..."
                  className="bg-white border-slate-200 min-h-[120px] focus-visible:ring-[#f59e0b] resize-y"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 font-medium text-xs" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold h-12 md:h-14 text-base md:text-lg shadow-md transition-all hover:shadow-lg mt-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Processando Solicitação...
            </>
          ) : (
            'Agende sua Consultoria'
          )}
        </Button>
      </form>
    </Form>
  )
}
