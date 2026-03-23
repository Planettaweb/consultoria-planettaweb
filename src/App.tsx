import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from '@/pages/Index'
import NotFound from '@/pages/NotFound'
import ServicePage from '@/pages/ServicePage'
import { Layout } from '@/components/Layout'
import { Toaster } from '@/components/ui/sonner'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/criacao-de-sites" element={<ServicePage type="criacao-de-sites" />} />
          <Route
            path="/sistemas-para-internet"
            element={<ServicePage type="sistemas-para-internet" />}
          />
          <Route path="/data-analysis-ia-bi" element={<ServicePage type="data-analysis-ia-bi" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster theme="dark" position="top-right" />
    </BrowserRouter>
  )
}
