import { YearlyServiceTotal } from '@/lib/hooks/useBookingQuery'
import dayjs from 'dayjs'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    CartesianGrid,
    Cell,
  } from 'recharts'

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F', '#FFBB28'];


const DistributionChart = () => {

  const {data: statsData, isLoading, error} = YearlyServiceTotal()

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load</div>;

   return (
    <div className=" bg-white rounded-xl shadow-sm  p-2">
      <h2 className="text-xl font-semibold p-2">Distribution of Service Types</h2>
      <p className='pl-2 pb-2 text-sm text-gray-400 font-semibold mb-10'>From {dayjs(statsData?.startDate).format('YYYY-MM-DD')}</p>
      
      
      <div className='mx-auto  h-80'>
        <ResponsiveContainer>
            <BarChart data={statsData?.serviceTotals} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="2 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {statsData?.serviceTotals.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
               
                ))}
            </Bar>
            </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default DistributionChart