import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/listed"}>Listed Books</NavLink>
      </li>
      <li>
        <NavLink to={"/reads"}>Pages to Read</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-2xl text-white"
            >
              <AiOutlineMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <NavLink
            to={"/"}
            className="btn btn-ghost text-white text-xl hidden md:flex"
          >
            Book Heaven
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end ">
          <a className="btn btn-active">Sign In</a>
          <a className="btn btn-active btn-neutral mx-2">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
