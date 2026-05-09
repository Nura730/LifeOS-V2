import { Routes, Route } from "react-router-dom"

import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import ProtectedRoute from "./routes/ProtectedRoute"
import HabitsPage from "./pages/HabitsPage"
import TasksPage from "./pages/TasksPage"
import AnalyticsPage from "./pages/AnalyticsPage"
import CheckInPage from "./pages/CheckInPage"
import TimelinePage from "./pages/TimelinePage"
import FocusPage from "./pages/FocusPage"

function App() {
  return (
    <Routes>
      <Route
        path="/register"
        element={<RegisterPage />}
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/habits"
  element={<HabitsPage />}
/>

<Route
  path="/tasks"
  element={<TasksPage />}
/>

<Route
  path="/analytics"
  element={<AnalyticsPage />}
/>

<Route
  path="/checkins"
  element={<CheckInPage />}
/>

<Route
  path="/timeline"
  element={<TimelinePage />}
/>
<Route
  path="/focus"
  element={<FocusPage />}
/>

    </Routes>
  )
}

export default App