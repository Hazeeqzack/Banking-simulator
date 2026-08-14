import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import ProtectedRoute from "./routes/ProtectedRoute";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Transfer from "./pages/Transfer";
import Profile from "./pages/Profile";
import TransactionDetail from "./pages/TransactionDetail";


function App() {
  return (
    <Routes>
      {/* Login */}

      <Route path="/login" element={<Login />} />

      {/* Protected Pages */}

      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/history" element={<History />} />

        <Route path="/transfer" element={<Transfer />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/transaction/:id" element={<TransactionDetail />} />

      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
