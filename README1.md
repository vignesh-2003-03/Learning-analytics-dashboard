# Learning Analytics Dashboard

## Author
**Vigneshwaran**

---

## Project Overview

The Learning Analytics Dashboard is a responsive web application built using **React + TypeScript**.  
It visualizes learner performance, course progress, assessment completion, grades, and district-wise rankings using interactive charts and tables.

The dashboard supports:
- Year-based data switching (2024 / 2025)
- Light & Dark theme toggle
- Clean, professional UI matching the provided design mockups

---

## Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **Recharts** (for charts & graphs)
- **CSS Variables** (for theming)
- **JSON** (mock data source)

---

##  Project Structure

project/

│
├── src/
│ ├── components/
│ │ |── TopBar.tsx
│ │ |── ThemeToggle.tsx
│ │ |── KPICard.tsx
│ │ |── CourseProgressChart.tsx
│ │ |── AssessmentChart.tsx
│ │ |── GradeBreakdownChart.tsx
│ │ |── DistrictRankingTable.tsx
│ │ └──data.tsx
│ 
│── App.tsx
│── main.tsx
│── index.css
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md


