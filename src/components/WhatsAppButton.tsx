import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const phoneNumber = '5541996352036'
  const message = 'Olá! Gostaria de saber mais sobre os serviços da Planettaweb.'

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#1ebd5a] text-white shadow-xl shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-1 transition-all duration-300 z-50 flex items-center justify-center group"
      aria-label="Fale conosco no WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />

      {/* Pulse effect rings */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-20 animate-ping" />
    </button>
  )
}
