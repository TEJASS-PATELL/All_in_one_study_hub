import React from "react";
import { lazy } from "react";
import LoginPage from "../Pages/Login";
import SignUpPage from "../Pages/Signup";
const Discussion = lazy(() => import("../Layouts/DashboardLayout/Discussion"));
const GovJobSearch = lazy(() => import("../Pages/Government/GovJobSearch"));
const PrivateJobSearch = lazy(() => import("../Pages/Private/PrivateJobSearch"));
const ITJobsearch = lazy(() => import("../Pages/IT/ITJobsearch"));
const StudyMaterial = lazy(() => import("../Pages/Government/StudyMaterial"));
const StudyPlan = lazy(() => import("../Pages/Government/StudyPlane"));
const PracticeExam = lazy(() => import("../Pages/Government/PracticeExam"));
const ExamDay = lazy(() => import("../Pages/Government/ExamDay"));
const AITools = lazy(() => import("../Pages/AITools"));
const ItRoadmapPage = lazy(() => import("../Pages/IT/ITJobRoadmap"));
const JobPlatformsPage = lazy(() => import("../Pages/IT/ITJobSearchPlatform"));
const ITJobSection = lazy(() => import("../Pages/IT/ITJobSection"));
const ITJobresources = lazy(() => import("../Pages/IT/ITJobresources"));
const ForeignJobsPage = lazy(() => import("../Pages/ForeignJobsPage"));
const JobSearch = lazy(() => import("../Pages/Home"));
import ProtectedRoute from "../security/ProtectedRoute";
import ComingSoon from "../Pages/Coming";
import EnterEmail from "../Components/EnterEmail";
import ResetPassword from "../Components/ResetPassword";
import VerifyAccount from "../Components/VerifyEmail";
import Interview from "../Layouts/DashboardLayout/Interview";
const ChatRoom = lazy(() => import('../Layouts/DashboardLayout/ChatRoom'));
const Roadmap = lazy(() => import("../Layouts/DashboardLayout/Roadmap"));
const TodoPage = lazy(() => import("../Layouts/DashboardLayout/TodoPage"));
const Layout = lazy(() => import("../Layouts/Layout"));
const DashboardLayout = lazy(() => import("../Layouts/DashboardLayout/DashboardLayout"));

export const routers = [
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/verify-account/", element: <VerifyAccount /> },
  { path: "/forgot-password", element: <EnterEmail /> },
  { path: "/reset-password/:token", element: <ResetPassword /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          { path: "roadmap", element: <Roadmap /> },
          { index: true, element: <TodoPage /> },
          { path: "experience", element: <Discussion /> },
          { path: "chatroom", element: <ChatRoom /> },
          { path: "ai-interview", element: <Interview /> },
        ],
      },
    ],
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
          { path: "/private-jobs/free-study-resources", element: <ComingSoon /> },
          { path: "/private-jobs/searching", element: <ComingSoon /> },
          { path: "/it-jobs/ITJobSection-platform", element: <ITJobSection /> },
          { path: "/it-jobs/ITJobresources-platform", element: <ITJobresources /> },
          { path: "/foreign-jobs", element: <ForeignJobsPage /> },
        ],
      },
    ],
  },
];
