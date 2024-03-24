import dynamic from 'next/dynamic';
 
const Counter = dynamic(() => import('@/src/components/Counter'), {
  ssr: false,
});
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const Index = () => {
  return (
    <Layout header={1} footer={1}>
      {/*====== Start Banner Section ======*/}
      <section className="banner-section">
        {/*=== Hero Wrapper ===*/}
        <div className="hero-wrapper-one gray-bg">
          <div className="shape shape-one animate-float-y">
            <span>
              <img src="assets/images/hero/shape-1.png" alt="shape" />
            </span>
          </div>
          <div className="shape shape-two animate-float-x">
            <span>
              <img src="assets/images/hero/shape-2.png" alt="shape" />
            </span>
          </div>
          <div className="shape shape-three animate-float-x">
            <span>
              <img src="assets/images/hero/shape-3.png" alt="shape" />
            </span>
          </div>
          <div className="container">
            <div className="row align-items-lg-center">
              <div className="col-xl-6 col-lg-12">
                {/*=== Hero Content ===*/}
                <div className="hero-content">
                  <h1 className="wow fadeInUp" data-wow-delay=".4s">
                  Les environnements verts vous rendent heureux et fournissent de l’oxygène
                  </h1>
                  <p className="wow fadeInDown" data-wow-delay=".6s">
                  Nous fournissons un beau jardinage &amp;  Aménagement paysager
                  </p>
                  
                </div>
              </div>
              <div className="col-xl-6 col-lg-12">
                {/*=== Hero Image Box ===*/}
                <div
                  className="hero-image-box d-xl-block d-none wow fadeInRight"
                  data-wow-delay=".75s"
                >
                  <img
                    src="assets/images/hero/hero-three_one.jpg"
                    alt="Hero Image"
                  />
                  <div className="shape hero-svg">
                    <svg
                      width={237}
                      height={569}
                      viewBox="0 0 237 569"
                      fill="none"
                    >
                      <path
                        d="M0.552583 568.307L1.99989 0.226473C1.99989 0.226473 237.025 -9.37181 236.276 284.731C235.527 578.834 0.552583 568.307 0.552583 568.307Z"
                        fill="#F1D2A9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Banner Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section-two p-r z-1">
        {/*=== Features Wrapper ===*/}
        <div className="features-wrapper-two main-bg wow fadeInDown">
          <div className="shape shape-one">
            <span>
              <img src="assets/images/shape/leaf-5.png" alt="Leaf" />
            </span>
          </div>
          <div className="shape shape-two">
            <span>
              <img src="assets/images/shape/leaf-5.png" alt="Leaf" />
            </span>
          </div>
          <div className="shape shape-three">
            <span>
              <img src="assets/images/shape/leaf-5.png" alt="Leaf" />
            </span>
          </div>
          <div className="features-area pb-30">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                {/*=== Features Item ===*/}
                <div className="single-features-item-two mb-40 wow fadeInUp">
                  <div className="text">
                    <div className="icon">
                      <i className="fl-icon flaticon-watering-plants" />
                      <a href="#" className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </div>
                    <h5 className="title">Jardinage</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                {/*=== Features Item ===*/}
                <div className="single-features-item-two mb-40 wow fadeInDown">
                  <div className="text">
                    <div className="icon">
                      <i className="fl-icon flaticon-watering-plants" />
                      <a href="#" className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </div>
                    <h5 className="title">Pisciniste</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                {/*=== Features Item ===*/}
                <div className="single-features-item-two mb-40 wow fadeInUp">
                  <div className="text">
                    <div className="icon">
                      <i className="fl-icon flaticon-watering-plants" />
                      <a href="#" className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </div>
                    <h5 className="title">Sécurité Surveillance</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                {/*=== Features Item ===*/}
                <div className="single-features-item-two mb-40 wow fadeInUp">
                  <div className="text">
                    <div className="icon">
                      <i className="fl-icon flaticon-watering-plants" />
                      <a href="#" className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </div>
                    <h5 className="title">Nettoyage </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                {/*=== Features Item ===*/}
                <div className="single-features-item-two mb-40 wow fadeInUp">
                  <div className="text">
                    <div className="icon">
                      <i className="fl-icon flaticon-watering-plants" />
                      <a href="#" className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </div>
                    <h5 className="title">Entretien</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                {/*=== Features Item ===*/}
                <div className="single-features-item-two mb-40 wow fadeInUp">
                  <div className="text">
                    <div className="icon">
                      <i className="fl-icon flaticon-watering-plants" />
                      <a href="#" className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </div>
                    <h5 className="title">Plomberie & Electricité</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Counter Area ===*/}
          <div className="counter-area">
            <div className="row pt-70">
              <div className="col-lg-3 col-sm-6">
                {/*=== Counter Item ===*/}
                <div className="single-counter-item-two mb-30 wow fadeInDown">
                  <div className="inner-counter">
                    <div className="icon">
                      <i className="fas fa-check" />
                    </div>
                    <h2 className="number">
                      <Counter end={156} />
                    </h2>
                    <p>Projets Complet</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Counter Item ===*/}
                <div className="single-counter-item-two mb-30 wow fadeInUp">
                  <div className="inner-counter">
                    <div className="icon">
                      <i className="fas fa-check" />
                    </div>
                    <h2 className="number">
                      <Counter end={99} />%
                    </h2>
                    <p>Clients Satisfait</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Counter Item ===*/}
                <div className="single-counter-item-two mb-30 wow fadeInDown">
                  <div className="inner-counter">
                    <div className="icon">
                      <i className="fas fa-check" />
                    </div>
                    <h2 className="number">
                      <Counter end={25} />+
                    </h2>
                    <p>Membre Expert</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Counter Item ===*/}
                <div className="single-counter-item-two mb-30 wow fadeInUp">
                  <div className="inner-counter">
                    <div className="icon">
                      <i className="fas fa-check" />
                    </div>
                    <h2 className="number">
                      <Counter end={100} />+
                    </h2>
                    <p>Missions Accomplie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=== Experience Box ===*/}
        <div className="experience-box-two wow fadeInRight">
          <h2 className="number">
            <Counter end={3} />+
          </h2>
          <h6>Années d'experience</h6>
          <Link legacyBehavior href="/about">
            <a className="icon-btn">
              <i className="far fa-arrow-right" />
            </a>
          </Link>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Category Section ======*/}
      
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section">
        <div className="container-fluid">
          {/*=== About Wrapper ===*/}
          <div className="about-wrapper gray-bg wow fadeInUp">
            <div className="container">
              <div className="row align-items-xl-center">
                <div className="col-xl-5 col-lg-12">
                  {/*=== About Image Box ===*/}
                  <div className="about-two_image-box wow fadeInLeft">
                    <img src="assets/images/about/about-6.png" alt />
                  </div>
                </div>
                <div className="col-xl-7 col-lg-12">
                  {/*=== About Content Box ===*/}
                  <div className="about-three_content-box pl-lg-70 wow fadeInRight">
                    {/*=== Section Title ===*/}
                    <div className="section-title mb-25 wow fadeInUp">
                      <span className="sub-title">
                        <i className="flaticon-plant" />
                        A Propos de Nous
                      </span>
                      <h2>Un jardinage parfait le résultat de la nature</h2>
                    </div>
                    <p className="mb-40 wow fadeInDown">
                    Four Garden Season est une entreprise spécialisée dans l'entretien et la création de jardins, l'installation et la maintenance de piscines, ainsi que dans les services de sécurité et de surveillance. Forts d'une expertise approfondie dans ces domaines, nous sommes dédiés à transformer les espaces extérieurs en véritables havres de paix et de beauté.
<br />
                    Que ce soit pour concevoir des jardins éblouissants, entretenir des espaces verts impeccables ou installer des piscines de qualité supérieure, notre équipe compétente et passionnée s'engage à fournir des services exceptionnels à chaque étape du processus.
<br />
                    Chez Four Garden Season, nous comprenons l'importance de créer des environnements extérieurs qui reflètent le style et les préférences uniques de nos clients, tout en mettant l'accent sur la durabilité et la praticité. De plus, notre engagement envers la sécurité et la surveillance garantit la tranquillité d'esprit à nos clients, en veillant à ce que leurs espaces extérieurs soient sécurisés et protégés.                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Services Section ======*/}
      <section className="service-section pt-100 pb-20">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-100 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Nos Services
                </span>
                <h2>Nous fournissons un beau jardinage &amp; Aménagement paysager</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="flaticon-scissors" />
                </div>
                <div className="text">
                  <h4 className="title">
                    
                      <a>Nettoyage de Printemps</a>
                    
                  </h4>
                  <p>Offrez à votre espace extérieur une revitalisation avec notre service de nettoyage de printemps professionnel.</p>
                  <Link legacyBehavior href="#">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="icon">
                  <i className="flaticon-watering" />
                </div>
                <div className="text">
                  <h4 className="title">
                   
                      <a>Irrigation &amp; Drainage</a>
                    
                  </h4>
                  <p>Optimisez l'efficacité de votre système d'irrigation et drainage pour des espaces extérieurs sains et bien entretenus.</p>
                  <Link legacyBehavior href="#">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <i className="flaticon-yard" />
                </div>
                <div className="text">
                  <h4 className="title">
                    
                      <a>Entretien Exterieur</a>
                    
                  </h4>
                  <p>Maintenez l'élégance de vos espaces extérieurs avec notre service d'entretien professionnel sur mesure.</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="icon">
                  <i className="flaticon-growing" />
                </div>
                <div className="text">
                  <h4 className="title">
                    
                      <a>Fertilisation de la pelouse</a>
                    
                  </h4>
                  <p>Transformez votre pelouse en un tapis verdoyant luxuriant grâce à notre service de fertilisation expert.</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Services Section ======*/}
      {/*====== Start Project Section ======*/}
      <section className="project-section">
        <div className="container-fluid">
          {/*====== Project Slider ======*/}
          <Slider
            {...sliderProps.projectsSliderFour}
            className="projects-slider-four wow fadeInUp"
            data-wow-delay=".2s"
          >
            {/*====== Project Item ======*/}
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="assets/images/gallery/project-1.png"
                  alt="Project Image"
                />
                <div className="hover-content">
                  <div className="number">01</div>
                  <div className="text text-white">
                    <h3 className="title">
                      
                        <a>Entretien Jardin</a>
                      
                    </h3>
                    <p>Entretien professionnel pour vos extérieurs</p>
                    
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                        <a>Entretien Jardin</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Project Item ======*/}
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="assets/images/gallery/project-2.png"
                  alt="Project Image"
                />
                <div className="hover-content">
                  <div className="number">02</div>
                  <div className="text text-white">
                    <h3 className="title">
                        <a>Arrosage</a>
                    </h3>
                    <p>Arrosage automatisé à votre espace vert</p>
                    
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                        <a>Arrosage</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Project Item ======*/}
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="assets/images/gallery/project-3.png"
                  alt="Project Image"
                />
                <div className="hover-content">
                  <div className="number">03</div>
                  <div className="text text-white">
                    <h3 className="title">
                        <a>Nettoyage</a>
                    </h3>
                    <p>Expertise en entretien extérieur personnalisé</p>
                   
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                        <a>Nettoyage</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Project Item ======*/}
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="assets/images/gallery/project-4.png"
                  alt="Project Image"
                />
                <div className="hover-content">
                  <div className="number">04</div>
                  <div className="text text-white">
                    <h3 className="title">
                        <a>Plantation</a>
                    </h3>
                    <p>Création verdoyante, plantation sur mesure</p>
                    
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                        <a>Plantation</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Project Section ======*/}
      <br />
      <br />
      {/*====== Start Features Section ======*/}
      <section className="features-seciton pb-50">
        <div className="container">
          <div className="row align-items-xl-end">
            <div className="col-lg-6">
              {/*====== Features Image Box ======*/}
              <div className="features-image-box mb-50 wow fadeInLeft">
                <img
                  src="assets/images/features/features-10.png"
                  alt="Features Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== Features Content Box ======*/}
              <div className="features-content-box mb-50 wow fadeInRight">
                <div className="section-title mb-20">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    Jardin Modern
                  </span>
                  <h2>Nous proposons du paysage &amp; Plantations d'arbres</h2>
                </div>
                <p className="mb-35">
                Créateurs de paysages sur mesure, nous transformons vos espaces avec des plantations d'arbres soigneusement sélectionnés, pour une ambiance naturelle et harmonieuse.
                </p>
                <ul className="features-list">
                  <li>
                    <i className="fal fa-long-arrow-right" />
                    Qualité Jardinage
                  </li>
                  <li>
                    <i className="fal fa-long-arrow-right" />
                    Membres de l'équipe dédiés
                  </li>
                  <li>
                    <i className="fal fa-long-arrow-right" />
                    Service de garantie &amp; Aucun coût caché{" "}
                  </li>
                </ul>
                <Link legacyBehavior href="/contact">
                  <a className="main-btn primary-btn">Contacter Nous</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      <section className="testimonial-section">
        <div className="container-fluid">
          {/*=== Testimonial Wrapper ===*/}
          <div className="testimonial-quote-area p-r z-1 main-bg">
            <div className="shape shape-one">
              <span>
                <img src="assets/images/shape/leaf-4.png" alt="Leaf" />
              </span>
            </div>
            {/*====== Quote Area ======*/}
            <div className="quote-wrapper wow fadeInDown">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10 col-lg-12">
                    {/*=== Client Quote Box ===*/}
                    <div className="client-quote-box">
                      <div className="icon">
                        <i className="fal fa-long-arrow-right" />
                      </div>
                      <div className="text">
                        <h2 className="number">
                          <Counter end={150} />+
                        </h2>
                        <h4>
                          Total Clients Heureux de Notre Services{" "}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Testimonial Area ======*/}
            <div className="testimonial-area pt-70 pb-50 pl-15 pr-15 wow fadeInUp">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-1 order-md-1 order-2">
                    {/*=== Testimonial Dots ===*/}
                    <div className="testimonial-dots mb-20" />
                  </div>
                  <div className="col-lg-11 order-md-2 order-1">
                    {/*=== Testimonial Slider ===*/}
                    <Slider
                      {...sliderProps.testimonialSliderThree}
                      className="testimonial-slider-three mb-20"
                    >
                      {/*=== Testimonial Item ===*/}
                      <div className="single-testimonial-item-three d-flex">
                        <div className="testimonial-inner-content mb-30">
                          
                          <p>
                          Service exceptionnel ! L'équipe de Four Garden Season a transformé mon jardin en un véritable paradis vert. Impatient de passer mon été en famille dans cet endroit magnifique
                          </p>
                          <div className="quote-title">
                            
                            <div className="title">
                              <h6>M. Ahmed</h6>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      {/*=== Testimonial Item ===*/}
                      <div className="single-testimonial-item-three d-flex">
                        <div className="testimonial-inner-content mb-30">
                          
                          <p>
                          Je suis très reconnaissant pour les efforts fournis par l'équipe de Four Garden Season pour l'entretien de ma piscine. Elle est maintenant bien meilleure et je me sens en sécurité pour ma famille. Merci à vous !
                          </p>
                          <div className="quote-title">
                            
                            <div className="title">
                              <h6>Mme. Fatima</h6>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      {/*=== Testimonial Item ===*/}
                      <div className="single-testimonial-item-three d-flex">
                        <div className="testimonial-inner-content mb-30">
                          
                          <p>
                          Une expérience incroyable ! Four Garden Season a conçu ma jardin de rêve de manière spectaculaire. Je suis extrêmement satisfait du résultat final et je les recommande vivement à toute personne cherchant des services d'aménagement paysager.
                          </p>
                          <div className="quote-title">
                            
                            <div className="title">
                              <h6>M. Hassan</h6>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      {/*=== Testimonial Item ===*/}
                      <div className="single-testimonial-item-three d-flex">
                        <div className="testimonial-inner-content mb-30">
                          
                          <p>
                          Un service professionnel incomparable ! L'équipe de Four Garden Season a installé un système d'irrigation avancé dans mon jardin, et maintenant les plantes fleurissent de manière incroyable. Je suis très heureux et travaillerai à nouveau avec eux à l'avenir.
                          </p>
                          <div className="quote-title">
                            <div className="icon">
                              
                            </div>
                            <div className="title">
                              <h6>Dr. Mohameds</h6>
                              <p className="position">Senior Gardener</p>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Blog Section ======*/}
      
    </Layout>
  );
};
export default Index;
