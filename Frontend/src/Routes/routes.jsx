import React from "react";
import { lazy } from "react";
import Layout from "../Layouts/Layout";
import LoginPage from "../Pages/Login";
import SignUpPage from "../Pages/Signup";
import Profile from "../Pages/Roadmap";
import Members from "../Pages/Members";
const Discussion = lazy(() => import("../Pages/Discussion"));
const GovJobSearch = lazy(() => import("../Pages/GovernmentSection/GovJobSearch"));
const PrivateJobSearch = lazy(() => import("../Pages/PrivateSection/PrivateJobSearch"));
const ITJobsearch = lazy(() => import("../Pages/ItSection/ITJobsearch"));
const StudyMaterial = lazy(() => import("../Pages/GovernmentSection/StudyMaterial"));
const StudyPlan = lazy(() => import("../Pages/GovernmentSection/StudyPlane"));
const PracticeExam = lazy(() => import("../Pages/GovernmentSection/PracticeExam"));
const ExamDay = lazy(() => import("../Pages/GovernmentSection/ExamDay"));
const AITools = lazy(() => import("../Pages/AITools"));
const ItRoadmapPage = lazy(() => import("../Pages/ItSection/ITJobRoadmap"));
const Dashboard = lazy(() => import("../Pages/Dashboard"));
const JobPlatformsPage = lazy(() => import("../Pages/ItSection/ITJobSearchPlatform"));
const ITJobSection = lazy(() => import("../Pages/ItSection/ITJobSection"));
const ITJobresources = lazy(() => import("../Pages/ItSection/ITJobresources"));
const ForeignJobsPage = lazy(() => import("../Pages/ForeignJobsPage"));
const JobSearch = lazy(() => import("../Pages/JobSearch"));
import ProtectedRoute from "../Components/ProtectedRoute";
import ComingSoon from "../Pages/Coming";
import EnterEmail from "../Components/EnterEmail";
import ResetPassword from "../Components/ResetPassword";
import VerifyAccount from "../Components/VerifyEmail";

export const routers = [
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/verify-account/", element: <VerifyAccount /> },
  { path: "/forgot-password", element: <EnterEmail /> },
  { path: "/reset-password/:token", element: <ResetPassword /> },
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
