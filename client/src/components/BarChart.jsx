import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export default function BarChartComponent({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date " />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="count" barSize={75} fill="#eb5e28" />
      </BarChart>
    </ResponsiveContainer>
  );
}
