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
  phone: z.string().min(10, 'Forneça um número de telefone válido com DDD'),
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-semibold">Nome Completo</FormLabel>
              <FormControl>
                <Input
                  placeholder="Seu nome completo"
                  className="bg-white border-slate-200 focus-visible:ring-[#f59e0b]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 font-medium" />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 font-semibold">E-mail</FormLabel>
                <FormControl>
                  <Input
                    placeholder="joao@empresa.com.br"
                    className="bg-white border-slate-200 focus-visible:ring-[#f59e0b]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 font-medium" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 font-semibold">Telefone / WhatsApp</FormLabel>
                <FormControl>
                  <Input
                    placeholder="(41) 99999-9999"
                    className="bg-white border-slate-200 focus-visible:ring-[#f59e0b]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 font-medium" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-semibold">Serviço de Interesse</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white border-slate-200 focus:ring-[#f59e0b]">
                    <SelectValue placeholder="Selecione a área principal do seu projeto" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="web">Criação de Sites</SelectItem>
                  <SelectItem value="sistemas">Sistemas para Internet</SelectItem>
                  <SelectItem value="dados">Data Analysis, IA & BI</SelectItem>
                  <SelectItem value="consultoria">Consultoria Geral</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500 font-medium" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-semibold">Mensagem (Opcional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Conte um pouco mais sobre o seu desafio corporativo..."
                  className="bg-white border-slate-200 min-h-[100px] focus-visible:ring-[#f59e0b]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 font-medium" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold h-12 text-lg shadow-md transition-all hover:shadow-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Processando Solicitação...
            </>
          ) : (
            'Agende sua Consultoria Gratuita'
          )}
        </Button>
      </form>
    </Form>
  )
}
