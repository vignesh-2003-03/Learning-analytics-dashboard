import React, { useState, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";
import TopControls from "./TopControls";
import KpiCards from "./KpiCards";
import CourseProgressChart from "./CourseProgressChart";
import PassPercentageChart from "./PassPercentageChart";
import AssessmentDonutChart from "./AssessmentDonutChart";
import GradeBreakdownChart from "./GradeBreakdownChart";
import DistrictRanking from "./DistrictRanking";
import { COLORS, mockData2024, mockData2025 } from "./data";
// import { mockData2024, mockData2025, COLORS } from "./data";

const Dashboard = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("dashboard-theme");
    return saved || "dark";
  });

  const [year, setYear] = useState("2024");
  const [period, setPeriod] = useState("Monthly");
  const [district, setDistrict] = useState("All District");
  const [rankBy, setRankBy] = useState("Enrollment");
  const [data, setData] = useState(mockData2024);

  useEffect(() => {
    localStorage.setItem("dashboard-theme", theme);
  }, [theme]);

  useEffect(() => {
    setData(year === "2024" ? mockData2024 : mockData2025);
  }, [year]);

  const isDark = theme === "dark";

  const bgClass = isDark ? "bg-gray-900" : "bg-gray-100";
  const cardBg = isDark ? "bg-gray-800" : "bg-white";
  const textPrimary = isDark ? "text-white" : "text-gray-900";
  const textSecondary = isDark ? "text-gray-400" : "text-gray-600";
  const borderColor = isDark ? "border-gray-700" : "border-gray-200";

  const filteredCourseProgress =
    district === "All District"
      ? data.courseProgress
      : data.courseProgress.filter((d) => d.district === district);

  const passStatsData = [
    { name: "Overall Learners", value: data.passStats.overallLearners, color: COLORS.blue },
    { name: "Assessment taken", value: data.passStats.assessmentTaken, color: COLORS.cyan },
    { name: "Passed", value: data.passStats.passed, color: COLORS.green },
    { name: "Failed", value: data.passStats.failed, color: COLORS.red },
  ];

  const donutData = [
    { name: "Assessment completed", value: data.assessmentCompletion.completedPercent, color: COLORS.blue },
    { name: "Assessment not completed", value: data.assessmentCompletion.notCompletedPercent, color: COLORS.orange },
  ];

  const sortedDistricts = [...data.districtRanking.districts].sort((a, b) => {
    if (rankBy === "Enrollment") return b.enrolled - a.enrolled;
    if (rankBy === "Pass %") return b.completionRatePercent - a.completionRatePercent;
    return a.rank - b.rank;
  });

  return (
    <div className={`min-h-screen ${bgClass} ${textPrimary} p-6`}>
      <DashboardHeader year={year} setYear={setYear} isDark={isDark} setTheme={setTheme} />

      <TopControls
        year={year}
        period={period}
        setPeriod={setPeriod}
        district={district}
        setDistrict={setDistrict}
        isDark={isDark}
        cardBg={cardBg}
        borderColor={borderColor}
        textPrimary={textPrimary}
      />

      <KpiCards data={data.summary} cardBg={cardBg} borderColor={borderColor} textSecondary={textSecondary} />

      <div className="grid grid-cols-2 gap-6 mb-6">
        <CourseProgressChart
          data={filteredCourseProgress}
          isDark={isDark}
          cardBg={cardBg}
          borderColor={borderColor}
        />
        <PassPercentageChart
          data={passStatsData}
          total={data.passStats.overallLearners}
          isDark={isDark}
          cardBg={cardBg}
          borderColor={borderColor}
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <AssessmentDonutChart
          data={donutData}
          completion={data.assessmentCompletion}
          isDark={isDark}
          cardBg={cardBg}
          borderColor={borderColor}
        />
        <GradeBreakdownChart
          data={data.gradeBreakdown}
          isDark={isDark}
          cardBg={cardBg}
          borderColor={borderColor}
        />
      </div>

      <DistrictRanking
        districts={sortedDistricts}
        rankBy={rankBy}
        setRankBy={setRankBy}
        isDark={isDark}
        cardBg={cardBg}
        borderColor={borderColor}
        textPrimary={textPrimary}
      />
    </div>
  );
};

export default Dashboard;
