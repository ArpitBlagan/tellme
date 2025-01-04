import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
      <div>
        <Link to="/" className="text-3xl text-semibol">
          Findy
        </Link>
      </div>
      <div className="flex items-center justify-end gap-2">
        <Link to="/searchlist">Search</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
