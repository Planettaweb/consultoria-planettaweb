import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'
import { Testimonials } from '@/components/sections/Testimonials'
import { Portfolio } from '@/components/sections/Portfolio'

export default function Index() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
