const KpiCard = ({ title, value, icon }) => (
  <div className="bg-gray-800 p-4 rounded-lg">
    <div className="flex items-center gap-2 mb-2">
      {icon}
      <span className="text-sm">{title}</span>
    </div>
    <div className="text-3xl font-bold">{value.toLocaleString()}</div>
  </div>
);

export default KpiCard;
