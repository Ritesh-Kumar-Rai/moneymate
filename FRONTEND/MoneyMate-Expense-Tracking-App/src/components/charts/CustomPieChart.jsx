import React from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const CustomPieChart = () => {

  const data = [
    {
      amount: 2000,
      category: "Travel"
    },
    {
      amount: 1000,
      category: "Travel"
    },
    {
      amount: 1750,
      category: "Utilities"
    },
    {
      amount: 200,
      category: "Bills"
    },
    {
      amount: 750,
      category: "Electronics"
    },
  ];

  const colors = ["#f2ad50", "#154c79", "#abdbe3", "#873e23"];
  console.log("Pie Chart runned!");

  return (
    <div className='mt-10' style={{ width: '100%', height: '500px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={100}>
          <Pie data={data} cx={'50%'} cy={'50%'} outerRadius={150} dataKey='amount' nameKey='category' fill='rgb(28 35 56)' label>
            {data.map((each_data, index) => <Cell key={each_data + "_" + index} fill={colors[index % colors.length]} />)}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: 'transparent', backdropFilter: 'blur(10px)', color: '#fff', borderRadius: '10px' }}
            formatter={(value) => `₹${value}`}
            labelFormatter={(label) => `Category: ${label}`}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
};

export default CustomPieChart;