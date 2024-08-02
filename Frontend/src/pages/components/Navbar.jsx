import { Link } from "react-router-dom";
import logo from "../../../public/logo.svg";
const Navbar = () => {
  return (
    <div className="navbar bg-teal-950 p-4 lg:p-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="bg-teal-950 menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <Link
              to="/home"
              className="no-underline uppercase text-lg font-bold text-gray-100 px-4"
            >
              Home
            </Link>
            <Link className="no-underline uppercase text-lg font-bold text-gray-100 px-4">
              Features
            </Link>
            <Link className="no-underline uppercase text-lg font-bold text-gray-100 px-4">
              About
            </Link>
            <Link className="no-underline uppercase text-lg font-bold text-gray-100 px-4 mr-4">
              Contact Us
            </Link>
          </ul>
        </div>
        <img src={logo} className="h-8 w-auto" />
        <Link className="btn btn-ghost text-2xl text-gray-100" to="/">
          Vocal List
        </Link>
      </div>
      <div className="navbar-end">
        <ul className="hidden lg:flex menu menu-horizontal flex lg:space-x-2">
          <li>
            <Link
              className="no-underline uppercase text-lg font-bold text-gray-100"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="no-underline uppercase text-lg font-bold text-gray-100"
              to="/features"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              className="no-underline uppercase text-lg font-bold text-gray-100"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="no-underline uppercase text-lg font-bold text-gray-100"
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <Link
          to="/signup"
          className="btn bg-custom-orange text-gray-100 hover:bg-custom-orange-dark"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
