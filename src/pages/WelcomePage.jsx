import { useLocation } from "react-router-dom";

export default function WelcomePage() {
  const location = useLocation();

  return (
    <div className="text-2xl font-semibold">
      Welcome to <span className="text-blue-600">{location.pathname}</span>
    </div>
  );
}
