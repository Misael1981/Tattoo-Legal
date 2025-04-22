import "./HeaderMobile.css";
import Logo from "/images/logo_tattoo-legal.svg";
import { FcAbout } from "react-icons/fc";
import { GrGallery } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

const HeaderMobile = () => {
  return (
    <header className="header-mobile">
      <div className="logo__container">
        <a href="/" aria-label="Página Inicial Tattoo Legal">
          <h1>
            <img src={Logo} alt="Logo Tattoo Legal" />
          </h1>
        </a>
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <a href="#about">
              <FcAbout size={40} />
              About
            </a>
          </li>
          <li>
            <a href="#gallery-tattoo">
              <GrGallery size={30} />
              Gallery Tattoo
            </a>
          </li>
          <li>
            <a href="#gallery-instagram">
              <FaInstagram size={30} />
              Gallery Instagram
            </a>
          </li>
          <li>
            <a href="#contact">
              <MdContactPhone size={30} />
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderMobile;
