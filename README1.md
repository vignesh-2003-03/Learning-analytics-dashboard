##Learning Analytics Dashboard

Author: Vigneshwaran

##Project Overview
===================

The Learning Analytics Dashboard is a responsive web application built using React + TypeScript.
It provides interactive visualizations to analyze learner performance, course progress, assessment completion, grade distribution, and district-wise rankings.

##Key Highlights
================

--Year-based data switching (2024 / 2025)

--Light and Dark theme toggle

--Interactive charts and KPI cards

--Clean, responsive, and professional UI

##Tech Stack
============

React 18

TypeScript

Vite

Recharts (Charts & Graphs)

CSS Variables (Theming)

JSON (Mock Data Source)


##Project Structure
===================
Learning-analytics-dashboard/
│
├── src/
│   ├── components/
│   │   ├── AssessmentChart.tsx
│   │   ├── CourseProgressChart.tsx
│   │   ├── Dashboard.tsx
│   │   ├── DashboardHeader.tsx
│   │   ├── data.ts
│   │   ├── DistrictRankCard.tsx
│   │   ├── DistrictRanking.tsx
│   │   ├── GradeBreakdownChart.tsx
│   │   ├── KpiCard.tsx
│   │   ├── KpiCards.tsx
│   │   ├── PassPercentageChart.tsx
│   │   └── TopControls.tsx
│
├── App.tsx
├── main.tsx
├── index.css
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md

##Build and Verification Instructions
=====================================

This section describes how to install, build, run, and verify the application.

##Prerequisites
===============

Ensure the following tools are installed:

Node.js (version 18 or higher recommended)

npm (included with Node.js)

A modern web browser (Chrome, Edge, or Firefox)

##Verify the installation:
=======================

node -v
npm -v

## Installation Steps
=====================

Clone the repository:

git clone <your-github-repository-url>


Navigate to the project directory:

cd learning-analytics-dashboard


#Install dependencies:
=====================

npm install

##Running the Application (Development Mode)
=========================

Start the development server:

npm run dev


Application runs at: http://localhost:5173/

Hot reload is enabled for development.

Building the Application (Production)
=====================================

Generate an optimized production build:

npm run build


Production-ready files are created in the dist/ directory.

##Previewing the Production Build
=================================

Preview the production build locally:

npm run preview


This step ensures the application works correctly after the build process.

##Verification Checklist:

Verify the following after running the application:

Application loads without errors

Year toggle switches data between 2024 and 2025

Light and Dark theme toggle works correctly

KPI cards display accurate values

Charts render correctly

District ranking table displays proper data

Layout is responsive across different screen sizes

##Troubleshooting:
==================

If dependency issues occur, reinstall dependencies:

rm -rf node_modules
npm install

##Deployment:
=============

The application can be deployed using:

Vercel

Netlify

GitHub Pages

Use the contents of the dist/ folder for deployment.

##License

This project is developed for learning and demonstration purposes.