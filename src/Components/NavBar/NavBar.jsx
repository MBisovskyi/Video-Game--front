import "./NavBar.css";
import navbarImg from "./assets/navbar.jpg";

const NavBar = (props) => {
  return (
    <div className="navbar-wrap">
      <img src={navbarImg} alt="banner" />
      <div>
        VideoGamer <span>Data</span>
      </div>
    </div>
  );
};

export default NavBar;
