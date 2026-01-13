const DistrictRankCard = ({ data, index }) => (
  <div className="bg-gray-700 p-4 rounded-lg">
    <div className="text-sm text-gray-400">{data.district}</div>
    <div className="text-4xl font-bold">{index + 1}</div>
  </div>
);

export default DistrictRankCard;
