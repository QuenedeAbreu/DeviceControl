import React from 'react';
import Faker from 'faker';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
} from 'recharts';
function Grafico(props) {
  const data = [];

  const inData = () => {
    while (data.length < 10) {
      data.push({
        uv: Faker.random.number({ min: 0, max: 100 }),
      });
    }
  }
  inData();
  return (
    <ResponsiveContainer width="100%" height={30}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="uv" stroke={props.color} dot="" >
          <XAxis dataKey="name" />
          <YAxis ataKey="name" />
        </Line >
      </LineChart>
    </ResponsiveContainer>
  );

}

export default Grafico;
