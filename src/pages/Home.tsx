import { Link } from "react-router";

export function Home() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Home</h1>
      <Link
        to="/dashboard"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition "
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
