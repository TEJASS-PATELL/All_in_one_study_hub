import { lazy } from "react";
import Layout from "../Layouts/Layout";
import LoginPage from "../Pages/Login";
import SignUpPage from "../Pages/Signup";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Roadmap";
import Members from "../Pages/Members";
const Discussion = lazy(() => import("../Pages/Discussion"));
const GovJobSearch = lazy(() => import("../Pages/GovJobSearch"));
const PrivateJobSearch = lazy(() => import("../Pages/PrivateJobSearch"));
const ITJobsearch = lazy(() => import("../Pages/ITJobsearch"));
const StudyMaterial = lazy(() => import("../Pages/StudyMaterial"));
const StudyPlan = lazy(() => import("../Pages/StudyPlane"));
const PracticeExam = lazy(() => import("../Pages/PracticeExam"));
const ExamDay = lazy(() => import("../Pages/ExamDay"));
const AITools = lazy(() => import("../Pages/AITools"));
const ItRoadmapPage = lazy(() => import("../Pages/ITJobRoadmap"));
const JobPlatformsPage = lazy(() => import("../Pages/ITJobSearchPlatform"));
const ITJobSection = lazy(() => import("../Pages/ITJobSection"));
const ITJobresources = lazy(() => import("../Pages/ITJobresources"));
const ForeignJobsPage = lazy(() => import("../Pages/ForeignJobsPage"));
const JobSearch = lazy(() => import("../Pages/JobSearch"));
import ProtectedRoute from "../Components/ProtectedRoute"; 
import ComingSoon from "../Pages/Coming";

export const routers = [
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUpPage /> },

  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [{ path: "", element: <Dashboard /> }],
  },
  {
    path: "/roadmap",
    element: <ProtectedRoute />,
    children: [{ path: "", element: <Profile /> }],
  },
  {
    path: "/members",
    element: <ProtectedRoute />,
    children: [{ path: "", element: <Members /> }],
  },
  {
    path: "/discussion",
    element: <ProtectedRoute />,
    children: [{ path: "", element: <Discussion /> }],
  },
  {
    path: "/chatroom",
    element: <ProtectedRoute />,
    children: [{ path: "", element: <ComingSoon /> }],
  },
  {
    path: "/aiinterview",
    element: <ProtectedRoute />,
    children: [{ path: "", element: <ComingSoon /> }],
  },

  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <JobSearch /> },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/government-jobs", element: <GovJobSearch /> },
          { path: "/private-jobs", element: <PrivateJobSearch /> },
          { path: "/ai-tools", element: <AITools /> },
          { path: "/it-jobs", element: <ITJobsearch /> },
          { path: "/government-jobs/Study-Material", element: <StudyMaterial /> },
          { path: "/government-jobs/time-management", element: <StudyPlan /> },
          { path: "/government-jobs/practice-paper", element: <PracticeExam /> },
          { path: "/government-jobs/exam-day", element: <ExamDay /> },
          { path: "/it-jobs/practical-roadmap", element: <ItRoadmapPage /> },
          { path: "/it-jobs/ITjobsearch-platform", element: <JobPlatformsPage /> },
          { path: "/it-jobs/ITJobSection-platform", element: <ITJobSection /> },
          { path: "/it-jobs/ITJobresources-platform", element: <ITJobresources /> },
          { path: "/foreign-jobs", element: <ForeignJobsPage /> },
        ],
      },
    ],
  },
];
