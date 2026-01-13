import { Users } from "lucide-react";

const DashboardHeader = ({ year, setYear, isDark, setTheme }) => (
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-2xl font-bold">Dashboard</h1>

    <div className="flex gap-4">
      <button onClick={() => setYear("2024")} className="px-4 py-2 bg-blue-600 rounded">2024</button>
      <button onClick={() => setYear("2025")} className="px-4 py-2 bg-blue-600 rounded">2025</button>
      <button onClick={() => setTheme(isDark ? "light" : "dark")} className="px-4 py-2 rounded">
        {isDark ? "☀️" : "🌙"}
      </button>
    </div>
  </div>
);

export default DashboardHeader;
