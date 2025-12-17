import { Navigate, useLocation } from "react-router-dom";
import { isRouteAllowed } from "../utils/permissionUtils";

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const allowed = isRouteAllowed(location.pathname);

  if (!allowed) {
    return <Navigate to="/403" replace />;
  }

  return children;
}
