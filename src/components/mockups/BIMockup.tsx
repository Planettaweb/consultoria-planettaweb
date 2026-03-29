import { PortfolioItem } from '@/data/portfolio'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const barData = [
  { name: 'Jan', value: 400 },
  { name: 'Fev', value: 300 },
  { name: 'Mar', value: 550 },
  { name: 'Abr', value: 450 },
  { name: 'Mai', value: 600 },
  { name: 'Jun', value: 800 },
]

const pieData = [
  { name: 'A', value: 400 },
  { name: 'B', value: 300 },
  { name: 'C', value: 300 },
]

const COLORS = ['#1e3a8a', '#3b82f6', '#f59e0b']

const chartConfig = {
  value: {
    label: 'Valor',
    color: '#3b82f6',
  },
}

export function BIMockup({ item }: { item: PortfolioItem }) {
  const data = item.mockupData
  const chartType = data.chartType || 'bar'

  return (
    <div className="bg-slate-100 min-h-[700px] w-full p-6 text-slate-900 font-sans">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">{item.title}</h2>
          <p className="text-slate-500">Painel de Business Intelligence</p>
        </div>
        <div className="flex gap-3 shrink-0">
          <select className="bg-white border border-slate-200 rounded-md px-3 py-2 text-sm shadow-sm outline-none focus:border-[#1e3a8a]">
            <option>Últimos 6 meses</option>
            <option>Este ano</option>
          </select>
          <button className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors shadow-sm">
            Exportar Relatório
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mb-8">
        {data.stats?.map((s, i) => (
          <Card key={i} className="border-none shadow-md bg-white">
            <CardContent className="p-6">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                {s.label}
              </p>
              <div className="text-3xl font-bold text-[#1e3a8a]">{s.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 h-[350px]">
        <Card className="border-none shadow-md bg-white flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-slate-700">Evolução no Período</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow min-h-[250px]">
            <ChartContainer config={chartConfig} className="w-full h-full">
              <ResponsiveContainer width="100%" height="100%">
                {chartType === 'line' ? (
                  <LineChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#64748b' }}
                    />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                ) : chartType === 'pie' ? (
                  <PieChart>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                ) : (
                  <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#64748b' }}
                    />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md bg-white flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-slate-700">Composição</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow min-h-[250px]">
            <ChartContainer config={chartConfig} className="w-full h-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
