const PassPercentageChart = ({ data, total, isDark, cardBg, borderColor }) => (
  <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
    <h3 className="mb-4 font-semibold">Pass Percentage</h3>
    {data.map((item, i) => (
      <div key={i} className="mb-3">
        <div className="flex justify-between text-sm">
          <span>{item.name}</span>
          <span>{item.value}</span>
        </div>
        <div className="h-6 bg-gray-700 rounded">
          <div
            className="h-full text-white px-2"
            style={{ width: `${(item.value / total) * 100}%`, backgroundColor: item.color }}
          />
        </div>
      </div>
    ))}
  </div>
);

export default PassPercentageChart;
