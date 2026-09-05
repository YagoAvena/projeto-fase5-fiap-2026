import { useEffect, useState } from "react";
import Logo from '../../img/AgroSmart.png'

function Header() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark", darkMode);

        localStorage.setItem(
            "theme",
            darkMode ? "dark" : "light"
        );
    }, [darkMode]);

    function toggleTheme() {
        setDarkMode((prev) => !prev);
    }

    function toggleMenu() {
        setIsMenuOpen((prev) => !prev);
    }

    return (
      <header className="header">
        <div className="header-left">
          <a href="./index.html" className="header-logo-link">
            <img
              src={Logo}
              alt="Logo AgroSmart"
              className="logo-image"
            />
          </a>

          <div className="menu-toggle" onClick={toggleMenu}>
            <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </div>

          <nav className={`header-nav-bar ${isMenuOpen ? "active" : ""}`}>
            <ul className="header-nav-list">
              <li className="header-nav-item">
                <a href="./rastreamento.html" className="header-nav-link">
                  Rastreamento
                </a>
              </li>

              <li className="header-nav-item">
                <a href="./quem-somos.html" className="header-nav-link">
                  Quem Somos
                </a>
              </li>

              <li className="header-nav-item">
                <a href="./fale-conosco.html" className="header-nav-link">
                  Fale Conosco
                </a>
              </li>

              <li className="header-nav-item">
                <a href="./marketplace.html" className="header-nav-link">
                  Marketplace
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-actions">
          <button
            className="theme-button"
            onClick={toggleTheme}
            aria-label="Alterar tema"
          >
            <i
              className={darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}
            ></i>
          </button>

          <button id="register-button">Criar conta</button>

          <button id="login-button">Entrar</button>
        </div>
      </header>
    );
} 

export default Header;