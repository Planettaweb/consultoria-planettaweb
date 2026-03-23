import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Portfolio } from '@/components/sections/Portfolio'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'

export default function Index() {
  return (
    <div className="flex flex-col w-full">
      <Hero />

      <section id="services" className="scroll-mt-[72px]">
        <Services />
      </section>

      <section id="about" className="scroll-mt-[72px]">
        <WhyChooseUs />
      </section>

      <section id="portfolio" className="scroll-mt-[72px]">
        <Portfolio />
      </section>

      <section id="testimonials" className="scroll-mt-[72px]">
        <Testimonials />
      </section>

      <section id="faq" className="scroll-mt-[72px]">
        <FAQ />
      </section>

      <section id="contact" className="scroll-mt-[72px]">
        <Contact />
      </section>
    </div>
  )
}
