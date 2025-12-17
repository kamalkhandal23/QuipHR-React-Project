import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import WelcomePage from "../pages/WelcomePage";
import Forbidden from "../pages/Forbidden";
import ProtectedRoute from "./ProtectedRoute";
import { getEnabledRoutes } from "../utils/permissionUtils";

const enabledRoutes = getEnabledRoutes();

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {enabledRoutes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={
              <ProtectedRoute>
                <WelcomePage />
              </ProtectedRoute>
            }
          />
        ))}

        <Route path="/" element={<Navigate to={enabledRoutes[0].path} />} />
        <Route path="/403" element={<Forbidden />} />
        <Route path="*" element={<Navigate to="/403" />} />
      </Route>
    </Routes>
  );
}
