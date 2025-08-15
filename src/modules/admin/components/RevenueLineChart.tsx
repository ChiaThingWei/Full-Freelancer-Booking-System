// components/MonthlyCompletedLineChart.tsx
import { YearlyCompletedTotal } from '@/lib/hooks/useBookingQuery';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
  } from 'recharts';
  
 
  export default function MonthlyRevenueLineChart() {

    
      const {data: statsData, isLoading, error} = YearlyCompletedTotal()
    
      console.log(statsData)
      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Failed to load</div>;

    return (
      <div className="w-full  h-[500px]  bg-white rounded-xl shadow-sm md:pr-4 pb-10  mb-10 lg:mb-0">
        <h2 className="text-xl font-semibold mb-10 p-4">Total Revenue 
          <span className=' text-sm text-gray-400'><br/>Last 12 months</span>
        </h2>
        <div className='pr-6'>
        <ResponsiveContainer height={300}>
          <LineChart data={statsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="totalConfirmedFee"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
        </div>
      </div>
    );
  }
  