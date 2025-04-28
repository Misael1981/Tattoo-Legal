import "./HeaderMobile.css";
import Logo from "/images/logo_tattoo-legal.svg";
import { TiHomeOutline } from "react-icons/ti";
import { RiInfoCardFill } from "react-icons/ri";
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
              <TiHomeOutline size={30} />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <RiInfoCardFill size={30} />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#gallery-tattoo">
              <GrGallery size={30} />
              <span>Gallery Tattoo</span>
            </a>
          </li>
          <li>
            <a href="#gallery-instagram">
              <FaInstagram size={30} />
              <span>Gallery Instagram</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <MdContactPhone size={30} />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderMobile;
