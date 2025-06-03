import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow bg-white">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        Return Pocket
      </Link>
      <div className="space-x-4">
        <Link to="/faq" className="text-gray-700 hover:underline">FAQ</Link>
      </div>
    </nav>
  );
}
