import DistrictRankCard from "./DistrictRankCard";

const DistrictRanking = ({
  districts, rankBy, setRankBy,
  cardBg, borderColor, textPrimary
}) => (
  <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
    <div className="flex justify-between mb-4">
      <h3 className="font-semibold">District Ranking</h3>
      <select value={rankBy} onChange={(e) => setRankBy(e.target.value)}>
        <option value="Enrollment">Rank by Enrolment</option>
        <option value="Pass %">Rank by Pass %</option>
      </select>
    </div>

    <div className="grid grid-cols-5 gap-4">
      {districts.slice(0, 10).map((d, i) => (
        <DistrictRankCard key={d.district} data={d} index={i} />
      ))}
    </div>
  </div>
);

export default DistrictRanking;
