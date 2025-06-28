import style from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <div>Launchpad NIIT</div>
      <ul>
        <li className={`${style.navItem} `}>
          <Link to="/launchpad/profile">Profile</Link>
        </li>
        <li className={`${style.navItem} `}>
          <Link to="/launchpad/experts">Experts</Link>
        </li>
        <li className={`${style.navItem} `}>
          <Link to="/launchpad/appointments">Appointments</Link>
        </li>
        <li className={`${style.navItem} `}>
          <Link to="/launchpad/events">Events</Link>
        </li>
        <li className={`${style.navItem} `}>
          <Link to="/launchpad/jobs">Jobs</Link>
        </li>
        <li className={`${style.navItem} `}>
          <Link to="/launchpad/notifications">Notifications</Link>
        </li>
        <li className={`${style.navItem} `}>
          <Link to="/launchpad/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
