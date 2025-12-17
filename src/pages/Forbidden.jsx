import { useNavigate } from "react-router-dom";

export default function Forbidden() {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">403</h1>
      <p className="text-xl font-semibold mb-2">
        Access Forbidden
      </p>
      <p className="text-gray-500 mb-6">
        You don’t have permission to view this page.
      </p>

      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go to Dashboard
      </button>
    </div>
  );
}
