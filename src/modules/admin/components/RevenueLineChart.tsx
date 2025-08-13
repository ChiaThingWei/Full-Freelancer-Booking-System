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
      <div className="w-full md:pr-4 h-80 mb-10">
        <h2 className="text-xl font-semibold mb-4 p-2">Total Revenue (Last 12 Months)</h2>
        <ResponsiveContainer>
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
    );
  }
  