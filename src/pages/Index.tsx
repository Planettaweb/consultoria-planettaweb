import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Portfolio } from '@/components/sections/Portfolio'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'

const Index = () => {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  )
}

export default Index
