import { Link } from "react-router-dom";

export default function Found() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      {/* Logo */}
      <img
        src="/logo.png" // 🔄 replace with your NavsaTech logo path
        alt="NavsaTech Logo"
        className="w-24 h-24 mb-6"
      />

      {/* Heading */}
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Page Not Found
      </h2>

      {/* Message */}
      <p className="text-gray-500 mb-6">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Back Home Button */}
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>

      {/* Footer note */}
      <p className="mt-10 text-sm text-gray-400">
        © {new Date().getFullYear()} NavsaTech | Developed by Suraj 🚀
      </p>
    </div>
  );
}
