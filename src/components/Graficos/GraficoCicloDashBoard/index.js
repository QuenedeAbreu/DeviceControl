
import React, { useState, useCallback } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
  Legend
} from "recharts";
import Faker from 'faker';
const data = [
  // { name: "Group A", value: 400 },
  // { name: "Group B", value: 300 },
  // { name: "Group C", value: 300 },
  // { name: "Group D", value: 100 }
];

const inData = () => {
  while (data.length < 5) {
    data.push({
      name: `Bloco ${Faker.random.alpha().toUpperCase()}`,
      value: Faker.random.number({ min: 0, max: 10000 }),
    });
  }
}
inData();

const renderActiveShape = (props) => {
  // const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    // midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    // value,
    // name
  } = props;
  // const sin = Math.sin(-RADIAN * midAngle);
  // const cos = Math.cos(-RADIAN * midAngle);
  // const sx = cx + (outerRadius + 10) * cos;
  // const sy = cy + (outerRadius + 10) * sin;
  // const mx = cx + (outerRadius + 30) * cos;
  // const my = cy + (outerRadius + 30) * sin;
  // const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  // const ey = my;
  // const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={-10} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <text x={cx} y={cy} dy={10} textAnchor="middle" fill={fill}>
        {`${(percent * 100).toFixed(2)}%`}
      </text>
      <text x={cx} y={cy} dy={30} textAnchor="middle" fill={fill}>
        {payload.value}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  );
};

const COLORS = ["#577590", "#43aa8b", "#90be6d", "#f9c74f", "#f8961e", "#f3722c", "#f94144", "#f48a02", "#f7b502", "#f9de02", "#fcfc02"];

function Grafico() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart >
        <Legend height={-90} />
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          onMouseEnter={onPieEnter}
          data={data}
          innerRadius={50}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
export default Grafico;