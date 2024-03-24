import Link from "next/link";
import { Fragment, useState } from "react";
const MobileMenu = ({ handleShow, logo, extraClass, barIcon }) => {
  const [toggle, setToggle] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeSubMenu = (value) =>
      value == activeMenu ? { display: "block" } : { display: "none" };

  return (
    <Fragment>
      <div
        className={`header-navigation d-xl-none d-block breakpoint-on ${extraClass}`}
      >
        <div
          className={`nav-overlay ${toggle ? "active" : ""}`}
          onClick={() => setToggle(false)}
        />
        <div className="container-fluid">
          <div className="primary-menu">
            {/*====== Site Branding ======*/}
            <div className="site-branding">
              <Link legacyBehavior href="/">
                <a className="brand-logo">
                  <img
                    src={logo ? logo : "assets/images/logo/logo-black.png"}
                    alt="Site Logo"
                  />
                </a>
              </Link>
            </div>
            {/*====== Nav Menu ======*/}
            <div className={`nav-menu ${toggle ? "menu-on" : ""}`}>
              {/*====== Site Branding ======*/}
              <div className="mobile-logo mb-30 d-block d-xl-none">
                <Link legacyBehavior href="/index">
                  <a className="brand-logo">
                    <img
                      src={"assets/images/logo/logo-black.png"}
                      alt="Site Logo"
                    />
                  </a>
                </Link>
              </div>
              {/*=== Nav Search ===*/}
              
              {/*====== main Menu ======*/}
              <nav className="main-menu">
      <ul>
        <li className="menu-item has-children">
          <a href="#">
            Jardinage
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="/">
                Plantation
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                Entretien
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                Arrosage
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                Fertilisation
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                Décoration
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            Pisciniste
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="/">
                Entretien
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                Filtartion
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                Nettoyage terrassement
              </Link>
            </li>
            
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">
          Sécurité 
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="/">
                Instalation cameras
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                Systéme d'alerte
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                Systéme de Porte automatique
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            Nettoyage
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="/">
                Entretien Interieur
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                Entretien Externe
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                Vitres
              </Link>
            </li>
            
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            Entretien
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="/">
                Climatisation
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                Chauffage 
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
              Ventillation 
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            autres
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="/">
                Plomberie & Electricité
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                Entretien Permanent
              </Link>
            </li>
            
          </ul>
        </li>
      </ul>
    </nav>
              {/*====== Menu Button ======*/}
              <div className="menu-button mt-40 d-xl-none">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn secondary-btn">Contacter nous</a>
                </Link>
              </div>
            </div>
            {/*====== Nav Right Item ======*/}
            <div className="nav-right-item d-flex align-items-center">
              <div className="menu-button d-xl-block d-none">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn primary-btn">Contacter nous</a>
                </Link>
              </div>
              <div
                className="bar-button"
                data-toggle="modal"
                data-target="#sidebar-modal"
                onClick={handleShow}
              >
                <img
                  src={barIcon ? barIcon : "assets/images/bar.png"}
                  alt="Image"
                />
              </div>
              <div
                className="navbar-toggler"
                onClick={() => setToggle(!toggle)}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default MobileMenu;
