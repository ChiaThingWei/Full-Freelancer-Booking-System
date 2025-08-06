import React from 'react'

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


const data = [
    { name: 'Wedding', value: 40 },
    { name: 'Portrait', value: 25 },
    { name: 'Event', value: 15 },
    { name: 'Product', value: 10 },
    { name: 'Graduation', value: 5 },
    { name: 'Others', value: 5 },
  ];

const DistributionChart = () => {
   return (
    <div className="w-full md:w-1/2 h-80">
      <h2 className="text-xl font-semibold mb-4 p-2">Distribution of Service Types</h2>
      
      <div className='mx-auto  h-80'>
        <ResponsiveContainer>
            <BarChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="2 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
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