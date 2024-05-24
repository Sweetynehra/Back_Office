import PropTypes from "prop-types";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../../src/assets/image.png';

const Layout = (props) => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <Link to="/" className="navbar-logo">
            <img src={logo} alt="Logo" />
          </Link>
        <div>
         <h2>Back Office Portal</h2>
        </div>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul>
              <li className="lis">
                <Link to="/">Home</Link>
              </li>
              <li className="lis">
                <Link to="/about">About</Link>
              </li>
              {/* <li className="lis">
                <Link to="/editor">Editor</Link>
              </li> */}
              <li className="lis">
                <Link to="/contact">Contact</Link>
              </li>
              {/* <li>
                {isAuthenticated ? (
                  <li>
                    <button
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                    >
                      Log Out
                    </button>
                  </li>
                ) : (
                  <li>
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                  </li>
                )}
              </li> */}
            </ul>
          </div>
        </div>
       
      </nav>

      <Outlet />
    </>
  );
};

Layout.defaultProps = {
  title: "AddSpherify",
};
Layout.propTypes = {
  title: PropTypes.string,
};

export default Layout;
