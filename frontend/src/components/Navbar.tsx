import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
      <div>
        <Link to="/" className="text-2xl md:text-3xl font-semibold">
          Findy
        </Link>
      </div>
      <div className="flex items-center justify-end gap-1 md:gap-2">
        <Link to="/recommended" className="font-semibold text-gray-500">
          Recommended
        </Link>
        <Link to="/searchlist" className="font-semibold text-gray-500">
          Search
        </Link>
        <Link to="/register" className="font-semibold text-gray-500">
          Register
        </Link>
        <Link to="/login" className="font-semibold text-gray-500">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
