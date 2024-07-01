import { CgArrowLongLeft } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import "../Navbar/Navbar.css"

function Navbar() {
  const location = useLocation();

  return (
    <nav className="flex shrink justify-between mb-10 nav">
      {location.pathname === "/" ? (
        <div className="w-5 h-5 rounded-[50%] bg-[#00997e] bg-gradient-to-tr from-[#ffffff] hover:animate-spin"></div>
      ) : (
        <Link
          to="/"
          className="flex text-[#605c5c] cursor-pointer hover:text-[#00997e]"
        >
          {" "}
          <CgArrowLongLeft className="mt-1" /> home
        </Link>
      )}
      <div className="flex gap-4 text-[#605c5c] cursor-pointer">
        <Link to={"/colophon"} className="hover:text-[#00997e] hover:underline">
          colophon
        </Link>
        <Link to={"/contact"} className="hover:text-[#00997e] hover:underline">
          contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
