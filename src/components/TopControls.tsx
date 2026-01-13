import { ChevronLeft, ChevronRight, Calendar, ChevronDown } from "lucide-react";

const districts = [
  "All District","Ariyalur","Chennai","Coimbatore","Cuddalore",
  "Dharmapuri","Dindigul","Erode","Kallakurichi","Karur","Madurai"
];

const TopControls = ({
  year, period, setPeriod, district, setDistrict,
  isDark, cardBg, borderColor, textPrimary
}) => (
  <div className={`${cardBg} p-4 rounded-lg border ${borderColor} flex justify-between mb-6`}>
    <div className="flex gap-2">
      <ChevronLeft />
      <button onClick={() => setPeriod("Monthly")}>Monthly</button>
      <button onClick={() => setPeriod("Quarterly")}>Quarterly</button>
      <ChevronRight />
    </div>

    <div className="flex items-center gap-2">
      <Calendar size={18} />
      <span>01 Jan, {year} - 31 Dec {year}</span>
    </div>

    <select
      value={district}
      onChange={(e) => setDistrict(e.target.value)}
      className={`${cardBg} ${textPrimary} border ${borderColor}`}
    >
      {districts.map((d) => (
        <option key={d}>{d}</option>
      ))}
    </select>
  </div>
);

export default TopControls;
