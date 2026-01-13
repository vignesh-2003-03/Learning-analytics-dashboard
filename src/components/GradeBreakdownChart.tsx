import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const pieColors = [
  "#60A5FA",
  "#10B981",
  "#FB923C",
  "#F472B6",
  "#E5E7EB",
];

const GradeBreakdownChart = ({
  data,
  isDark,
  cardBg,
  borderColor,
}) => {
  return (
    <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
      <h3 className="text-lg font-semibold mb-4">
        Learners Details Breakdown
      </h3>

      <div className="flex items-center gap-8">
        <ResponsiveContainer width="60%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={120}
              dataKey="percent"
              label={({ percent }) => `${percent}%`}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={pieColors[index]} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#1F2937" : "#FFFFFF",
                border: `1px solid ${isDark ? "#374151" : "#E5E7EB"}`,
                borderRadius: "8px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="space-y-2">
          {data.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span
                className="w-4 h-4 rounded"
                style={{ backgroundColor: pieColors[idx] }}
              ></span>
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradeBreakdownChart;
