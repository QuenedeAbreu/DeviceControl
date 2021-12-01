import React from 'react';
import Faker from 'faker';
import {
  ResponsiveContainer,
  AreaChart,
  Tooltip,
  Area,
  Legend,
  // LineChart,
  // Line,
  XAxis,
  YAxis,
} from 'recharts';
function Grafico(props) {
  const data = [
    // { name: "A", uv: 4564, pv: 6564 },
    // { name: "B", uv: 6564, pv: 1564 },
    // { name: "C", uv: 4564, pv: 7561 },
    // { name: "D", uv: 5564, pv: 7594 },
    // { name: "E", uv: 9564, pv: 144 },
    // { name: "F", uv: 4564, pv: 846 },
    // { name: "G", uv: 4564, pv: 6564 }

  ];

  const inData = () => {
    while (data.length < 10) {
      data.push({
        name: Faker.date.month(),
        Quantidade: Faker.random.number({ min: 0, max: 10000 }),
        Consertos: Faker.random.number({ min: 0, max: 10000 }),
      });
    }
  }
  inData();
  // console.log(data);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        {/* <CartesianGrid strokeDasharray="1 0" /> */}
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="Quantidade" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="Consertos" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
    </ResponsiveContainer>
  );

}

export default Grafico;
