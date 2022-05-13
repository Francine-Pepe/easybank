import "./Navbar.css";
import Logo from "./../Images/logo.svg";
import RequestButton from "../Button/RequestButton";
import Dropdown from "./Dropdown";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a href="#about" className="logo">
          <img src={Logo} alt="logo_easybank" />
        </a>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler">
          <Dropdown />
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
        <div className="request_button">
          <RequestButton />
        </div>
      </nav>
    </>
  );
}
