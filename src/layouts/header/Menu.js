import Link from "next/link";

const Menu = () => {
  return (
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
  );
};
export default Menu;
