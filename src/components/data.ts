// COLORS
export const COLORS = {
  blue: "#60A5FA",
  cyan: "#22D3EE",
  green: "#10B981",
  orange: "#FB923C",
  pink: "#F472B6",
  red: "#EF4444",
  purple: "#A78BFA",
  gray: "#9CA3AF",
};

// MOCK DATA 2024
export const mockData2024 = {
  summary: {
    totalLearners: 23100,
    male: 13000,
    female: 10000,
    others: 100,
    activeLearners: 9312,
    engagedLearners: 785,
  },
  courseProgress: [
    { district: "Ariyalur", below: 55, average: 40, good: 5 },
    { district: "Chennai", below: 30, average: 40, good: 30 },
    { district: "Coimbatore", below: 20, average: 70, good: 10 },
    { district: "Cuddalore", below: 70, average: 30, good: 0 },
    { district: "Dharmapuri", below: 10, average: 0, good: 90 },
    { district: "Dindigul", below: 20, average: 40, good: 40 },
    { district: "Erode", below: 20, average: 80, good: 0 },
    { district: "Kallakurichi", below: 80, average: 10, good: 10 },
    { district: "Karur", below: 35, average: 65, good: 0 },
    { district: "Madurai", below: 60, average: 20, good: 20 },
  ],
  passStats: {
    overallLearners: 23312,
    assessmentTaken: 18563,
    passed: 13500,
    failed: 5063,
  },
  assessmentCompletion: {
    completedPercent: 68,
    notCompletedPercent: 32,
  },
  gradeBreakdown: [
    { grade: "A", label: "A - Grade (>80)", percent: 48 },
    { grade: "B", label: "B - Grade (>60)", percent: 32 },
    { grade: "C", label: "C - Grade (>50)", percent: 35 },
    { grade: "D", label: "D - Grade (>30)", percent: 13 },
    { grade: "E", label: "E - Grade (0)", percent: 12 },
  ],
  districtRanking: {
    districts: [
      { district: "Ariyalur", rank: 1, enrolled: 2100, completionRatePercent: 86 },
      { district: "Coimbatore", rank: 2, enrolled: 2500, completionRatePercent: 84 },
      { district: "Erode", rank: 3, enrolled: 2300, completionRatePercent: 85 },
      { district: "Kallakurichi", rank: 4, enrolled: 2200, completionRatePercent: 84 },
      { district: "Madurai", rank: 5, enrolled: 2400, completionRatePercent: 83 },
    ],
  },
};

// MOCK DATA 2025
export const mockData2025 = {
  ...mockData2024,
  summary: {
    totalLearners: 28875,
    male: 16250,
    female: 12500,
    others: 125,
    activeLearners: 11640,
    engagedLearners: 981,
  },
  assessmentCompletion: {
    completedPercent: 75,
    notCompletedPercent: 25,
  },
};
