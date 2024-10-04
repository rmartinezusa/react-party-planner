import { NavLink, Outlet } from "react-router-dom";
function Layout() {
    return(
        <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/events/new">Add a Event</NavLink>
        </nav>
        <Outlet />
      </header>
    );
}
export default Layout;