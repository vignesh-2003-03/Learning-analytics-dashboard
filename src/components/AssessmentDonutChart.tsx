import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Label } from "recharts";

const AssessmentDonutChart = ({
  data,
  completion,
  isDark,
  cardBg,
  borderColor,
}) => {
  return (
    <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
      <h3 className="text-lg font-semibold mb-4">
        Average assessment score
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={120}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}

            {/* CENTER LABEL (IMPORTANT) */}
            <Label
              value="All Districts"
              position="center"
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                fill: isDark ? "#FFFFFF" : "#000000",
              }}
            />
          </Pie>

          {/* TOOLTIP */}
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? "#1F2937" : "#FFFFFF",
              border: `1px solid ${isDark ? "#374151" : "#E5E7EB"}`,
              borderRadius: "8px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* TEXT BELOW CHART */}
      <div className="flex justify-around mt-4">
        <div className="text-center">
          <div className="text-sm text-gray-400">
            Assessment completed
          </div>
          <div className="text-xl font-bold">
            {completion.completedPercent}%
          </div>
        </div>

        <div className="text-center">
          <div className="text-sm text-gray-400">
            Assessment not completed
          </div>
          <div className="text-xl font-bold">
            {completion.notCompletedPercent}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentDonutChart;
