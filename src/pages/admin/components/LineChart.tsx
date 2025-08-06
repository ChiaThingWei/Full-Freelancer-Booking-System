// components/MonthlyCompletedLineChart.tsx
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
  } from 'recharts';
  
  interface ChartData {
    month: string
    count: number
  }
  
  export default function MonthlyCompletedLineChart({ data }: { data: ChartData[] }) {
    return (
      <div className="w-full md:pr-4 h-80">
        <h2 className="text-xl font-semibold mb-4 p-2">Completed Bookings (Last 12 Months)</h2>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
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
  