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

const formSchema = z.object({
  name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Forneça um endereço de e-mail válido'),
  subject: z.string().min(2, 'Por favor, informe o assunto'),
  message: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres'),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate email dispatch process
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)

    toast({
      title: 'Mensagem Enviada com Sucesso!',
      description: 'Sua mensagem foi encaminhada. Entraremos em contato em breve.',
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
                Nome
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
                    placeholder="seu@email.com.br"
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
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 font-semibold text-sm md:text-base">
                  Assunto
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Qual o assunto do seu contato?"
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
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-semibold text-sm md:text-base">
                Mensagem
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Como podemos ajudar?"
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
              Enviando...
            </>
          ) : (
            'Enviar'
          )}
        </Button>
      </form>
    </Form>
  )
}
