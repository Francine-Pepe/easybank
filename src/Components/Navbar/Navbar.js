import "./Navbar.css";
import Logo from "./../Images/logo.svg";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a href="#about" className="logo">
          <img src={Logo} alt="logo_easybank" />
        </a>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="11">
            <g fill="#2D314D" fill-rule="evenodd">
              <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
            </g>
          </svg>
        </label>
        <div className="menu">
          <ul className="list">
            <li className="list_container">
              <a href="#home">Home</a>
            </li>
            <li className="list_container">
              <a href="#about">About</a>
            </li>
            <li className="list_container">
              <a href="#contact">Contact</a>
            </li>
            <li className="list_container">
              <a href="#blog">Blog</a>
            </li>
            <li className="list_container">
              <a href="#careers">Carreers</a>
            </li>
          </ul>
        </div>
        <div className="opacity_container">
          <div className="link_container">
            <a href="/">Request Invite</a>
          </div>
        </div>
      </nav>
    </>
  );
}
