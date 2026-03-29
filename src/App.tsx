import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from '@/pages/Index'
import NotFound from '@/pages/NotFound'
import CriacaoDeSites from '@/pages/servicos/CriacaoDeSites'
import SistemasParaInternet from '@/pages/servicos/SistemasParaInternet'
import DataAnalysis from '@/pages/servicos/DataAnalysis'
import Portfolio from '@/pages/Portfolio'
import PortfolioMockup from '@/pages/PortfolioMockup'
import Metodologia from '@/pages/Metodologia'
import { Layout } from '@/components/Layout'
import { Toaster } from '@/components/ui/sonner'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/servicos/criacao-de-sites" element={<CriacaoDeSites />} />
          <Route path="/servicos/sistemas-para-internet" element={<SistemasParaInternet />} />
          <Route path="/servicos/data-analysis-ia-bi" element={<DataAnalysis />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioMockup />} />
          <Route path="/metodologia" element={<Metodologia />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster theme="dark" position="top-right" />
    </BrowserRouter>
  )
}
