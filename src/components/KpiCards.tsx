import KpiCard from "./KpiCard";
import { Users, UserCheck, Zap } from "lucide-react";

const KpiCards = ({ data, cardBg, borderColor, textSecondary }) => (
  <div className="grid grid-cols-6 gap-4 mb-6">
    <KpiCard title="Total Learners" value={data.totalLearners} icon={<Users />} />
    <KpiCard title="Male" value={data.male} />
    <KpiCard title="Female" value={data.female} />
    <KpiCard title="Others" value={data.others} />
    <KpiCard title="Active" value={data.activeLearners} icon={<UserCheck />} />
    <KpiCard title="Engaged" value={data.engagedLearners} icon={<Zap />} />
  </div>
);

export default KpiCards;
