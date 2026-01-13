import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts';
import { Users, UserCheck, Zap, ChevronLeft, ChevronRight, Calendar, ChevronDown } from 'lucide-react';

// Mock data for 2024
const mockData2024 = {
  summary: {
    totalLearners: 23100,
    male: 13000,
    female: 10000,
    others: 100,
    activeLearners: 9312,
    engagedLearners: 785
  },
  courseProgress: [
    { district: 'Ariyalur', below: 55, average: 40, good: 5 },
    { district: 'Chennai', below: 30, average: 40, good: 30 },
    { district: 'Coimbatore', below: 20, average: 70, good: 10 },
    { district: 'Cuddalore', below: 70, average: 30, good: 0 },
    { district: 'Dharmapuri', below: 10, average: 0, good: 90 },
    { district: 'Dindigul', below: 20, average: 40, good: 40 },
    { district: 'Erode', below: 20, average: 80, good: 0 },
    { district: 'Kallakurichi', below: 80, average: 10, good: 10 },
    { district: 'Karur', below: 35, average: 65, good: 0 },
    { district: 'Madurai', below: 60, average: 20, good: 20 }
  ],
  passStats: {
    overallLearners: 23312,
    assessmentTaken: 18563,
    passed: 13500,
    failed: 5063
  },
  assessmentCompletion: {
    completedPercent: 68,
    notCompletedPercent: 32
  },
  gradeBreakdown: [
    { grade: 'A', label: 'A - Grade (>80)', percent: 48 },
    { grade: 'B', label: 'B - Grade (>60)', percent: 32 },
    { grade: 'C', label: 'C - Grade (>50)', percent: 35 },
    { grade: 'D', label: 'D - Grade (>30)', percent: 13 },
    { grade: 'E', label: 'E - Grade (0)', percent: 12 }
  ],
  districtRanking: {
    districts: [
      { district: 'Ariyalur', rank: 1, enrolled: 2100, male: 1200, female: 850, others: 50, passed: 1800, assessmentCompleted: 1900, completionRatePercent: 86 },
      { district: 'Coimbatore', rank: 2, enrolled: 2500, male: 1400, female: 1050, others: 50, passed: 2100, assessmentCompleted: 2200, completionRatePercent: 84 },
      { district: 'Erode', rank: 3, enrolled: 2300, male: 1300, female: 950, others: 50, passed: 1950, assessmentCompleted: 2050, completionRatePercent: 85 },
      { district: 'Kallakurichi', rank: 4, enrolled: 2200, male: 1250, female: 900, others: 50, passed: 1850, assessmentCompleted: 1950, completionRatePercent: 84 },
      { district: 'Madurai', rank: 5, enrolled: 2400, male: 1350, female: 1000, others: 50, passed: 2000, assessmentCompleted: 2100, completionRatePercent: 83 },
      { district: 'Dharmapuri', rank: 6, enrolled: 2000, male: 1150, female: 800, others: 50, passed: 1700, assessmentCompleted: 1800, completionRatePercent: 85 },
      { district: 'Dindigul', rank: 7, enrolled: 2300, male: 1300, female: 950, others: 50, passed: 1900, assessmentCompleted: 2000, completionRatePercent: 83 },
      { district: 'Chennai', rank: 8, enrolled: 2600, male: 1500, female: 1050, others: 50, passed: 2150, assessmentCompleted: 2250, completionRatePercent: 83 },
      { district: 'Cuddalore', rank: 9, enrolled: 2100, male: 1200, female: 850, others: 50, passed: 1750, assessmentCompleted: 1850, completionRatePercent: 83 },
      { district: 'Karur', rank: 10, enrolled: 2300, male: 1300, female: 950, others: 50, passed: 1900, assessmentCompleted: 2000, completionRatePercent: 82 }
    ]
  }
};

// Mock data for 2025 (improved by ~25%)
const mockData2025 = {
  summary: {
    totalLearners: 28875,
    male: 16250,
    female: 12500,
    others: 125,
    activeLearners: 11640,
    engagedLearners: 981
  },
  courseProgress: [
    { district: 'Ariyalur', below: 41, average: 50, good: 9 },
    { district: 'Chennai', below: 23, average: 50, good: 27 },
    { district: 'Coimbatore', below: 15, average: 65, good: 20 },
    { district: 'Cuddalore', below: 53, average: 37, good: 10 },
    { district: 'Dharmapuri', below: 8, average: 10, good: 82 },
    { district: 'Dindigul', below: 15, average: 50, good: 35 },
    { district: 'Erode', below: 15, average: 70, good: 15 },
    { district: 'Kallakurichi', below: 60, average: 25, good: 15 },
    { district: 'Karur', below: 26, average: 59, good: 15 },
    { district: 'Madurai', below: 45, average: 30, good: 25 }
  ],
  passStats: {
    overallLearners: 29140,
    assessmentTaken: 23204,
    passed: 16875,
    failed: 6329
  },
  assessmentCompletion: {
    completedPercent: 75,
    notCompletedPercent: 25
  },
  gradeBreakdown: [
    { grade: 'A', label: 'A - Grade (>80)', percent: 60 },
    { grade: 'B', label: 'B - Grade (>60)', percent: 40 },
    { grade: 'C', label: 'C - Grade (>50)', percent: 28 },
    { grade: 'D', label: 'D - Grade (>30)', percent: 10 },
    { grade: 'E', label: 'E - Grade (0)', percent: 9 }
  ],
  districtRanking: {
    districts: [
      { district: 'Ariyalur', rank: 1, enrolled: 2625, male: 1500, female: 1063, others: 62, passed: 2250, assessmentCompleted: 2375, completionRatePercent: 90 },
      { district: 'Coimbatore', rank: 2, enrolled: 3125, male: 1750, female: 1313, others: 62, passed: 2625, assessmentCompleted: 2750, completionRatePercent: 88 },
      { district: 'Erode', rank: 3, enrolled: 2875, male: 1625, female: 1188, others: 62, passed: 2438, assessmentCompleted: 2563, completionRatePercent: 89 },
      { district: 'Kallakurichi', rank: 4, enrolled: 2750, male: 1563, female: 1125, others: 62, passed: 2313, assessmentCompleted: 2438, completionRatePercent: 88 },
      { district: 'Madurai', rank: 5, enrolled: 3000, male: 1688, female: 1250, others: 62, passed: 2500, assessmentCompleted: 2625, completionRatePercent: 87 },
      { district: 'Dharmapuri', rank: 6, enrolled: 2500, male: 1438, female: 1000, others: 62, passed: 2125, assessmentCompleted: 2250, completionRatePercent: 89 },
      { district: 'Dindigul', rank: 7, enrolled: 2875, male: 1625, female: 1188, others: 62, passed: 2375, assessmentCompleted: 2500, completionRatePercent: 87 },
      { district: 'Chennai', rank: 8, enrolled: 3250, male: 1875, female: 1313, others: 62, passed: 2688, assessmentCompleted: 2813, completionRatePercent: 87 },
      { district: 'Cuddalore', rank: 9, enrolled: 2625, male: 1500, female: 1063, others: 62, passed: 2188, assessmentCompleted: 2313, completionRatePercent: 87 },
      { district: 'Karur', rank: 10, enrolled: 2875, male: 1625, female: 1188, others: 62, passed: 2375, assessmentCompleted: 2500, completionRatePercent: 86 }
    ]
  }
};

const COLORS = {
  blue: '#60A5FA',
  cyan: '#22D3EE',
  green: '#10B981',
  orange: '#FB923C',
  pink: '#F472B6',
  red: '#EF4444',
  purple: '#A78BFA',
  gray: '#9CA3AF'
};

const Dashboard = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('dashboard-theme');
    return saved || 'dark';
  });
  const [year, setYear] = useState('2024');
  const [period, setPeriod] = useState('Monthly');
  const [district, setDistrict] = useState('All District');
  const [rankBy, setRankBy] = useState('Enrollment');
  const [data, setData] = useState(mockData2024);

  useEffect(() => {
    localStorage.setItem('dashboard-theme', theme);
  }, [theme]);

  useEffect(() => {
    setData(year === '2024' ? mockData2024 : mockData2025);
  }, [year]);

  const isDark = theme === 'dark';

  const bgClass = isDark ? 'bg-gray-900' : 'bg-gray-100';
  const cardBg = isDark ? 'bg-gray-800' : 'bg-white';
  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-gray-400' : 'text-gray-600';
  const borderColor = isDark ? 'border-gray-700' : 'border-gray-200';

  // Filter course progress data
  const filteredCourseProgress = district === 'All District' 
    ? data.courseProgress 
    : data.courseProgress.filter(d => d.district === district);

  // Prepare horizontal bar data
  const passStatsData = [
    { name: 'Overall Learners', value: data.passStats.overallLearners, color: COLORS.blue },
    { name: 'Assessment taken', value: data.passStats.assessmentTaken, color: COLORS.cyan },
    { name: 'Passed', value: data.passStats.passed, color: COLORS.green },
    { name: 'Failed', value: data.passStats.failed, color: COLORS.red }
  ];

  // Prepare donut data
  const donutData = [
    { name: 'Assessment completed', value: data.assessmentCompletion.completedPercent, color: COLORS.blue },
    { name: 'Assessment not completed', value: data.assessmentCompletion.notCompletedPercent, color: COLORS.orange }
  ];

  // Prepare pie data
  const pieColors = [COLORS.blue, COLORS.green, COLORS.orange, COLORS.pink, '#E5E7EB'];

  // Sort districts by selected ranking
  const sortedDistricts = [...data.districtRanking.districts].sort((a, b) => {
    if (rankBy === 'Enrollment') return b.enrolled - a.enrolled;
    if (rankBy === 'Pass %') return b.completionRatePercent - a.completionRatePercent;
    return a.rank - b.rank;
  });

  const districtOptions = ['All District', 'Ariyalur', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Karur', 'Madurai'];

  return (
    <div className={`min-h-screen ${bgClass} ${textPrimary} p-6 transition-colors duration-300`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        
        <div className="flex gap-4 items-center">
          {/* Year Selector */}
          <div className="flex gap-2">
            <button
              onClick={() => setYear('2024')}
              className={`px-4 py-2 rounded ${year === '2024' ? (isDark ? 'bg-blue-600' : 'bg-blue-500') : (isDark ? 'bg-gray-700' : 'bg-gray-200')} text-white transition-colors`}
            >
              2024
            </button>
            <button
              onClick={() => setYear('2025')}
              className={`px-4 py-2 rounded ${year === '2025' ? (isDark ? 'bg-blue-600' : 'bg-blue-500') : (isDark ? 'bg-gray-700' : 'bg-gray-200')} text-white transition-colors`}
            >
              2025
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`px-4 py-2 rounded ${isDark ? 'bg-gray-700' : 'bg-gray-200'} transition-colors`}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      {/* Top Controls */}
      <div className={`${cardBg} rounded-lg p-4 mb-6 flex justify-between items-center border ${borderColor}`}>
        <div className="flex gap-2">
          <button className={`p-2 rounded ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setPeriod('Monthly')}
            className={`px-4 py-2 rounded border ${period === 'Monthly' ? (isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300') : borderColor}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setPeriod('Quarterly')}
            className={`px-4 py-2 rounded border ${period === 'Quarterly' ? (isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300') : borderColor}`}
          >
            Quarterly
          </button>
          <button className={`p-2 rounded ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <ChevronRight size={20} />
          </button>
        </div>

        <div className={`flex items-center gap-2 px-4 py-2 rounded border ${borderColor}`}>
          <Calendar size={18} />
          <span className="text-sm">01 Jan, {year} - 31 Dec {year}</span>
        </div>

        <div className="relative">
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className={`${cardBg} ${textPrimary} px-4 py-2 pr-10 rounded border ${borderColor} appearance-none cursor-pointer`}
          >
            {districtOptions.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className={`${cardBg} rounded-lg p-4 border ${borderColor}`}>
          <div className="flex items-center gap-2 mb-2">
            <Users size={24} className={textSecondary} />
            <span className={`text-sm ${textSecondary}`}>Total Learner enrolled</span>
          </div>
          <div className="text-3xl font-bold">{data.summary.totalLearners.toLocaleString()}</div>
        </div>

        <div className={`${cardBg} rounded-lg p-4 border ${borderColor}`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">👨</span>
            <span className={`text-sm ${textSecondary}`}>Male</span>
          </div>
          <div className="text-3xl font-bold text-blue-400">{data.summary.male.toLocaleString()}</div>
        </div>

        <div className={`${cardBg} rounded-lg p-4 border ${borderColor}`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">👩</span>
            <span className={`text-sm ${textSecondary}`}>Female</span>
          </div>
          <div className="text-3xl font-bold text-pink-400">{data.summary.female.toLocaleString()}</div>
        </div>

        <div className={`${cardBg} rounded-lg p-4 border ${borderColor}`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🧑</span>
            <span className={`text-sm ${textSecondary}`}>Others</span>
          </div>
          <div className="text-3xl font-bold text-purple-400">{data.summary.others.toLocaleString()}</div>
        </div>

        <div className={`${cardBg} rounded-lg p-4 border ${borderColor}`}>
          <div className="flex items-center gap-2 mb-2">
            <UserCheck size={24} className="text-green-400" />
            <span className={`text-sm ${textSecondary}`}>Active Learners</span>
          </div>
          <div className="text-3xl font-bold text-green-400">{data.summary.activeLearners.toLocaleString()}</div>
        </div>

        <div className={`${cardBg} rounded-lg p-4 border ${borderColor}`}>
          <div className="flex items-center gap-2 mb-2">
            <Zap size={24} className="text-orange-400" />
            <span className={`text-sm ${textSecondary}`}>Engaged Learners</span>
          </div>
          <div className="text-3xl font-bold text-orange-400">{data.summary.engagedLearners.toLocaleString()}</div>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Course Progress Chart */}
        <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Course progress rate</h3>
            <div className="flex gap-4 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>Below
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS.green}}></span>Average
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS.blue}}></span>Good
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={filteredCourseProgress}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#E5E7EB'} />
              <XAxis dataKey="district" tick={{ fill: isDark ? '#9CA3AF' : '#6B7280', fontSize: 12 }} />
              <YAxis tick={{ fill: isDark ? '#9CA3AF' : '#6B7280' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
                  border: `1px solid ${isDark ? '#374151' : '#E5E7EB'}`,
                  borderRadius: '8px',
                  color: isDark ? '#FFFFFF' : '#000000'
                }}
              />
              <Bar dataKey="below" fill={COLORS.red} />
              <Bar dataKey="average" fill={COLORS.green} />
              <Bar dataKey="good" fill={COLORS.blue} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pass Percentage Chart */}
        <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
          <h3 className="text-lg font-semibold mb-4">Pass Percentage</h3>
          <div className="space-y-4">
            {passStatsData.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1 text-sm">
                  <span>{item.name}</span>
                  <span className="font-semibold">{item.value.toLocaleString()}</span>
                </div>
                <div className={`h-8 rounded ${isDark ? 'bg-gray-700' : 'bg-gray-200'} relative overflow-hidden`}>
                  <div
                    className="h-full flex items-center px-2 text-xs font-semibold text-white"
                    style={{
                      width: `${(item.value / data.passStats.overallLearners) * 100}%`,
                      backgroundColor: item.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Assessment Score Donut */}
        <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
          <h3 className="text-lg font-semibold mb-4">Average assessment score</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={donutData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={2}
                dataKey="value"
              >
                {donutData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <Label
                  value="All Districts"
                  position="center"
                  style={{ fontSize: '16px', fontWeight: 'bold', fill: isDark ? '#FFFFFF' : '#000000' }}
                />
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
                  border: `1px solid ${isDark ? '#374151' : '#E5E7EB'}`,
                  borderRadius: '8px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-around mt-4">
            <div className="text-center">
              <div className="text-sm text-gray-400">Assessment completed</div>
              <div className="text-xl font-bold">{data.assessmentCompletion.completedPercent}%</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400">Assessment not completed</div>
              <div className="text-xl font-bold">{data.assessmentCompletion.notCompletedPercent}%</div>
            </div>
          </div>
        </div>

        {/* Grade Breakdown Pie */}
        <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
          <h3 className="text-lg font-semibold mb-4">Learners Details Breakdown</h3>
          <div className="flex items-center gap-8">
            <ResponsiveContainer width="60%" height={300}>
              <PieChart>
                <Pie
                  data={data.gradeBreakdown}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  dataKey="percent"
                  label={({ percent }) => `${percent}%`}
                >
                  {data.gradeBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
                    border: `1px solid ${isDark ? '#374151' : '#E5E7EB'}`,
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2">
              {data.gradeBreakdown.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded" style={{backgroundColor: pieColors[idx]}}></span>
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* District Ranking */}
      <div className={`${cardBg} rounded-lg p-6 border ${borderColor}`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">District Ranking</h3>
          <div className="relative">
            <select
              value={rankBy}
              onChange={(e) => setRankBy(e.target.value)}
              className={`${cardBg} ${textPrimary} px-4 py-2 pr-10 rounded border ${borderColor} appearance-none cursor-pointer`}
            >
              <option value="Enrollment">Rank by Enrolment</option>
              <option value="Pass %">Rank by Pass %</option>
            </select>
            <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {sortedDistricts.slice(0, 10).map((d, idx) => (
            <div key={d.district} className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4 border ${borderColor}`}>
              <div className="text-sm text-gray-400 mb-2">{d.district}</div>
              <div className="flex items-baseline gap-2">
                <div className="text-4xl font-bold">{idx + 1}</div>
                <div className="text-lg">
                  {idx === 0 ? 'st' : idx === 1 ? 'nd' : idx === 2 ? 'rd' : 'th'}
                </div>
                <div className="ml-auto text-sm text-gray-400">Rank</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;