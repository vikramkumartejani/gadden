import Link from "next/link";
const Default = () => {
  return (
    <footer className="footer-area text-white main-bg">
      <div className="container">
        {/*====== Footer Widget ======*/}
        <div className="footer-widget-area pt-80 pb-40">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget footer-about-widget mb-40 pr-lg-70 wow fadeInUp">
                <div className="widget-content">
                  <div className="footer-logo mb-25">
                    <Link legacyBehavior href="/index">
                      <a>
                        <img
                          src="assets/images/logo/logo-white.png"
                          alt="Logo"
                        />
                      </a>
                    </Link>
                  </div>
                  <p>
                  Four Garden Season, spécialiste en jardinage, création et entretien de jardins, services de pisciniste et de sécurité surveillance{" "}
                  </p>
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn filled-btn filled-white">
                      Contacter Nous
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget contact-info-widget mb-40 wow fadeInDown">
                <h4 className="widget-title">Contacter nous</h4>
                <div className="widget-content">
                  <ul className="info-list">
                    <li>86 gueliz Marrakech 40000</li>
                    <li>
                      <a href="mailto:four.season.garden.kech@gmail.com">four.season.garden.kech@gmail.com</a>
                    </li>
                    <li>
                      <a href="tel:+000(123)45688">+212 666666666</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget footer-experience-widget float-lg-right mb-40 wow fadeInDown">
                <div className="widget-content">
                  <div className="experience-box-two">
                    <h2 className="number">
                      <span className="count">3</span>+
                    </h2>
                    <h6>Années d'experience</h6>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=== Copyright Area ===*/}
        <div className="copyright-area">
          <div className="row">
            <div className="col-lg-6">
              {/*====== Copyright Text ======*/}
              <div className="copyright-text">
                <p>Copy© 2024 Four Garden Season</p>
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== Copyright Nav ======*/}
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Default;
