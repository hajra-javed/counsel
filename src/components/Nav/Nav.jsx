import style from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <div>Launchpad NIIT</div>
      <ul>
        <li className={`${style.navItem} `}>
          <Link to="/profile">Profile</Link>
        </li>
        <li className={`${style.navItem} `}>
          <Link to="/experts">Experts</Link>
        </li>
        <li className={`${style.navItem} `}>
          <Link to="/appointments">Appointments</Link>
        </li>
        <li className={`${style.navItem} `}>
          <Link to="/events">Events</Link>
        </li>
        <li className={`${style.navItem} `}>
          <Link to="/jobs">Jobs</Link>
        </li>
        <li className={`${style.navItem} `}>
          <Link to="/notifications">Notifications</Link>
        </li>
        <li className={`${style.navItem} `}>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
