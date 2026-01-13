import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { COLORS } from "./data";

const CourseProgressChart = ({
  data,
  isDark,
  cardBg,
  borderColor,
}) => {
  const isSingleDistrict = data.length === 1;

  return (
    <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
      <h3 className="text-lg font-semibold mb-4">
        Course progress rate
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={isDark ? "#374151" : "#E5E7EB"}
          />

          <XAxis
            dataKey="district"
            tick={{ fill: isDark ? "#9CA3AF" : "#6B7280", fontSize: 12 }}
          />

          <YAxis
            domain={[0, 100]}
            tick={{ fill: isDark ? "#9CA3AF" : "#6B7280" }}
          />

          <Tooltip />

          <Bar
            dataKey="below"
            fill={COLORS.red}
            stackId={isSingleDistrict ? "a" : undefined}
          />
          <Bar
            dataKey="average"
            fill={COLORS.green}
            stackId={isSingleDistrict ? "a" : undefined}
          />
          <Bar
            dataKey="good"
            fill={COLORS.blue}
            stackId={isSingleDistrict ? "a" : undefined}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CourseProgressChart;
