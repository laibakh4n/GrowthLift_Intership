import { NavLink } from "react-router-dom";

function Header() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-green-400 border-b-2 border-green-400 font-medium"
      : "text-gray-400 hover:text-green-400 transition-colors font-medium";

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-gray-900 border-b border-gray-800">
      <h1 className="text-2xl font-bold text-green-400">GrowthLift Intern</h1>
      <nav className="flex gap-6">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/projects" className={linkClass}>Projects</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;