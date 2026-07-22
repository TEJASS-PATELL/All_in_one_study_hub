import React from "react";
import { lazy } from "react";
import LoginPage from "../pages/Home/Login";
import SignUpPage from "../pages/Home/Signup";
const Discussion = lazy(() => import("../layouts/Dashboard/Discussion"));
const GovJobSearch = lazy(() => import("../pages/Government/GovJobSearch"));
const PrivateJobSearch = lazy(() => import("../pages/Private/PrivateJobSearch"));
const ITJobsearch = lazy(() => import("../pages/IT/ITJobsearch"));
const StudyMaterial = lazy(() => import("../pages/Government/StudyMaterial"));
const StudyPlan = lazy(() => import("../pages/Government/StudyPlane"));
const PracticeExam = lazy(() => import("../pages/Government/PracticeExam"));
const ExamDay = lazy(() => import("../pages/Government/ExamDay"));
const AITools = lazy(() => import("../pages/Home/AITools"));
const ItRoadmapPage = lazy(() => import("../pages/IT/ITJobRoadmap"));
const JobPlatformsPage = lazy(() => import("../pages/IT/ITJobSearchPlatform"));
const ITJobSection = lazy(() => import("../pages/IT/ITJobSection"));
const ITJobresources = lazy(() => import("../pages/IT/ITJobresources"));
const ForeignJobsPage = lazy(() => import("../pages/Home/ForeignJobsPage"));
const JobSearch = lazy(() => import("../pages/Home/Home"));
import ProtectedRoute from "../security/ProtectedRoute";
import ComingSoon from "../pages/Home/Coming";
import EnterEmail from "../components/EnterEmail";
import ResetPassword from "../components/ResetPassword";
import VerifyAccount from "../components/VerifyEmail";
import Interview from "../layouts/Dashboard/Interview";
const ChatRoom = lazy(() => import('../layouts/Dashboard/ChatRoom'));
const Roadmap = lazy(() => import("../layouts/Dashboard/Roadmap"));
const TodoPage = lazy(() => import("../layouts/Dashboard/TodoPage"));
const Layout = lazy(() => import("../layouts/Home/Layout"));
const DashboardLayout = lazy(() => import("../layouts/Dashboard/DashboardLayout"));

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
