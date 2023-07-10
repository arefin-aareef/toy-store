import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import userImg from "../../assets/user.png";
import logo from "../../assets/logo.jpg";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));

    navigate('/')
  };

  const navItems = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/alltoys">All Toys</ActiveLink>
      </li>
      {user?.email && (
        <>
          <li>
            <ActiveLink to="/mytoys">My Toys</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/addtoys">Add Toys</ActiveLink>
          </li>
        </>
      )}
      <li>
        <ActiveLink to="/blogs">Blogs</ActiveLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="flex items-center justify-center lg:hidden">
        <img style={{ width: "60px" }} src={logo} alt="" />
        <h2 className="text-xl ml-3 font-bold">Pyrates Toy</h2>
      </div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <div className="flex items-center">
            <img
              style={{ width: "60px" }}
              src={logo}
              alt=""
              className="hidden sm:block mt-1"
            />
            <Link
              to="/"
              className="btn btn-ghost normal-case text-xl hidden sm:block pt-2"
            >
              Pyrates Toy
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user && (
            <img
              title={user.displayName ? user.displayName : user.email}
              className="me-2 rounded-full"
              style={{ width: "40px" }}
              src={user.photoURL ? user.photoURL : userImg}
            />
          )}
          {user?.email ? (
            <button className="btn" onClick={handleLogout}>
              Log Out
            </button>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
