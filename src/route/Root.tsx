import { NavLink, Outlet } from "react-router-dom";
const Root = () => {
  let navClass = "nav-link";

  return (
    <>
      {/* <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to={"/"}
                  aria-current="page"
                  className={({ isActive }) =>
                    isActive ? `${navClass} active` : navClass
                  }
                ></NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? `${navClass} active` : navClass
                  }
                ></NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/post"}
                  className={({ isActive }) =>
                    isActive ? `${navClass} active` : navClass
                  }
                >
                  Post
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/counter"}
                  className={
                  }
                >
                  counter
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${navClass} active` : navClass
                  }
                  to="#"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${navClass} active` : navClass
                  }
                  to={"/post"}
                >
                  post
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${navClass} active` : navClass
                  }
                  to={"/counter"}
                >
                  counter
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container m-auto pt-5">
        <Outlet />
      </div>
    </>
  );
};
export default Root;
