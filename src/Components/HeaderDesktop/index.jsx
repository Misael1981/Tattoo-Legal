import "./HeaderDesktop.css";
import Logo from "/images/logo_tattoo-legal.svg";

const HeaderDesktop = () => {
  return (
    <header className="header-desktop">
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Galley Tattoo</a>
          </li>
          <li>
            <a href="#">
              <h1>
                <img
                  className="header__logo"
                  src={Logo}
                  alt="Logo da Tattoo Legal"
                />
              </h1>
            </a>
          </li>
          <li>
            <a href="#">Gallery Instagram</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderDesktop;
