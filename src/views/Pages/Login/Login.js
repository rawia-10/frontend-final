import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import image from './images/logo.png'
import image1 from "./images/info_1.jpg"
import image2 from "./images/info_2.jpg"
import image3 from "./images/info_2.jpg"
import image4 from "./images/icon_2.svg"
import image5 from "./images/icon_3.svg"
import image6 from "./images/icon_4.svg"
import image7 from "./images/icon_5.svg"
import image8 from "./images/icon_6.svg"
import image9 from "./images/dept_1.jpg"
import image10 from "./images/dept_2.jpg"
import image11 from "./images/dept_3.jpg"
import image12 from "./images/dept_4.jpg"
import image13 from "./images/latest_1.jpg"
import image14 from "./images/latest_2.jpg"
import image15 from "./images/latest_3.jpg"
import image16 from "./images/doc_5.jpg"


class Login extends Component {




  render() {


    return (
     <div>
  <header className="main_menu home_menu">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" > <img src="img/logo.png" alt="logo" /> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse main-menu-item justify-content-center" id="navbarSupportedContent">
                  <ul className="navbar-nav align-items-center">
                    <li className="nav-item active">
                    <Link to="login" className="nav-link">Accueil</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="login" className="nav-link">A Propos</Link>
                    </li>

                  

                    <li className="nav-item">
                    <Link to="login" className="nav-link">Contact</Link>
                    </li>
                 
   <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Connexion
  </a>
  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    
  <Link to="loginpatient" >
  <a className="dropdown-item" >Patient</a>
  </Link>
  <Link to="loginsecretaire" >
    <a className="dropdown-item">Secretaire</a>
  </Link> 
  <Link to="loginmedecin" >
  <a className="dropdown-item">Medecin</a>
 </Link>

  </div>
</li>

 {/* <li className="nav-item dropdown">
 <span className="nav-link">Connexion</span> 
<div className="dropdown-menu" aria-labelledby="navbarDropdown">
<Link to="loginpatient" >
              <a className="btn_2 d-none d-lg-block" href="#">Patient</a>
              </Link>
              <div>
              <Link to="loginsecretaire" >
              <a className="btn_2 d-none d-lg-block" href="#">Secretaire</a>
              </Link> </div>
              <Link to="loginmedecin" >
              <a className="btn_2 d-none d-lg-block" href="#">Medecin</a>
              </Link>
 
</div>
</li> */}

                 
                 
                 
                  </ul>

  
                </div>
               
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section className="banner_part">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-xl-5">
              <div className="banner_text">
                <div className="banner_text_iner">
                  <h5>Nous Sommes À Votre Écoute</h5>
                  <h1>Meilleurs Soins &amp;
                  Meilleur Médecin</h1>
                
                  <Link to="/Medecin" className="btn_2">Rechercher votre Médecin</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="banner_img">
                <img src="img/banner_img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="about_us padding_top">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 col-lg-6">
              <div className="about_us_img">
                <img src="img/top_service.png" alt="" />
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="about_us_text">
                <h2>À propos de nous</h2>
                <p><b>MyDoc</b> est une plateforme innovante qui vous permet de trouver rapidement un médecin le plus proche de chez vous et de prendre rendez-vous en ligne gratuitement.</p>
               <p><b>MyDoc</b> est un service complet de gestion de cabinet médical,
                qui optimise votre organisation et vous fait gagner du temps. Avec <b>MyDoc</b>, vous partagez vos disponibilités en temps réel avec vos patients selon vos critères, tout en gardant la main sur votre agenda médical.</p>
                {/* <a className="btn_2 " href="#">learn more</a> */}
                <div className="banner_item">
                  <div className="single_item">
                    <img src="img/icon/banner_1.svg" alt="" />
                    <h5>Urgence</h5>
                  </div>
                  <div className="single_item">
                    <img src="img/icon/banner_2.svg" alt="" />
                    <h5>Rendez-vous</h5>
                  </div>
                  <div className="single_item">
                    <img src="img/icon/banner_3.svg" alt="" />
                    <h5>Qualifié</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature_part">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section_tittle text-center">
                <h2>Our services</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-3 col-sm-12">
              <div className="single_feature">
                <div className="single_feature_part">
                  <span className="single_feature_icon"><img src="img/icon/feature_1.svg" alt="" /></span>
                  <h4>Better Future</h4>
                  <p>Darkness multiply rule Which from without life creature blessed
                    give moveth moveth seas make day which divided our have.</p>
                </div>
              </div>
              <div className="single_feature">
                <div className="single_feature_part">
                  <span className="single_feature_icon"><img src="img/icon/feature_2.svg" alt="" /></span>
                  <h4>Better Future</h4>
                  <p>Darkness multiply rule Which from without life creature blessed
                    give moveth moveth seas make day which divided our have.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="single_feature_img">
                <img src="img/service.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="single_feature">
                <div className="single_feature_part">
                  <span className="single_feature_icon"><img src="img/icon/feature_1.svg" alt="" /></span>
                  <h4>Better Future</h4>
                  <p>Darkness multiply rule Which from without life creature blessed
                    give moveth moveth seas make day which divided our have.</p>
                </div>
              </div>
              <div className="single_feature">
                <div className="single_feature_part">
                  <span className="single_feature_icon"><img src="img/icon/feature_2.svg" alt="" /></span>
                  <h4>Better Future</h4>
                  <p>Darkness multiply rule Which from without life creature blessed
                    give moveth moveth seas make day which divided our have.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="our_depertment section_padding">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-12">
              <div className="depertment_content">
                <div className="row justify-content-center">
                  <div className="col-xl-8">
                    <h2>Our Depertment</h2>
                    <div className="row">
                      <div className="col-lg-6 col-sm-6">
                        <div className="single_our_depertment">
                          <span className="our_depertment_icon"><img src="img/icon/feature_2.svg" alt="" /></span>
                          <h4>Better Future</h4>
                          <p>Darkness multiply rule Which from without life creature blessed
                            give moveth moveth seas make day which divided our have.</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6">
                        <div className="single_our_depertment">
                          <span className="our_depertment_icon"><img src="img/icon/feature_2.svg" alt="" /></span>
                          <h4>Better Future</h4>
                          <p>Darkness multiply rule Which from without life creature blessed
                            give moveth moveth seas make day which divided our have.</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6">
                        <div className="single_our_depertment">
                          <span className="our_depertment_icon"><img src="img/icon/feature_2.svg" alt="" /></span>
                          <h4>Better Future</h4>
                          <p>Darkness multiply rule Which from without life creature blessed
                            give moveth moveth seas make day which divided our have.</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6">
                        <div className="single_our_depertment">
                          <span className="our_depertment_icon"><img src="img/icon/feature_2.svg" alt="" /></span>
                          <h4>Better Future</h4>
                          <p>Darkness multiply rule Which from without life creature blessed
                            give moveth moveth seas make day which divided our have.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* <section className="doctor_part section_padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section_tittle text-center">
                <h2> Experienced Doctors</h2>
                <p>Face replenish sea good winged bearing years air divide wasHave night male also</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="single_blog_item">
                <div className="single_blog_img">
                  <img src="img/doctor/doctor_1.png" alt="doctor" />
                  <div className="social_icon">
                    <ul>
                      <li><a href="#"> <i className="ti-facebook" /> </a></li>
                      <li><a href="#"> <i className="ti-twitter-alt" /> </a></li>
                      <li><a href="#"> <i className="ti-instagram" /> </a></li>
                      <li><a href="#"> <i className="ti-skype" /> </a></li>
                    </ul>
                  </div>
                </div>
                <div className="single_text">
                  <div className="single_blog_text">
                    <h3>DR Adam Billiard</h3>
                    <p>Heart specialist</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="single_blog_item">
                <div className="single_blog_img">
                  <img src="img/doctor/doctor_4.png" alt="doctor" />
                  <div className="social_icon">
                    <ul>
                      <li><a href="#"> <i className="ti-facebook" /> </a></li>
                      <li><a href="#"> <i className="ti-twitter-alt" /> </a></li>
                      <li><a href="#"> <i className="ti-instagram" /> </a></li>
                      <li><a href="#"> <i className="ti-skype" /> </a></li>
                    </ul>
                  </div>
                </div>
                <div className="single_text">
                  <div className="single_blog_text">
                    <h3>DR Adam Billiard</h3>
                    <p>Medicine specialist</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="single_blog_item">
                <div className="single_blog_img">
                  <img src="img/doctor/doctor_2.png" alt="doctor" />
                  <div className="social_icon">
                    <ul>
                      <li><a href="#"> <i className="ti-facebook" /> </a></li>
                      <li><a href="#"> <i className="ti-twitter-alt" /> </a></li>
                      <li><a href="#"> <i className="ti-instagram" /> </a></li>
                      <li><a href="#"> <i className="ti-skype" /> </a></li>
                    </ul>
                  </div>
                </div>
                <div className="single_text">
                  <div className="single_blog_text">
                    <h3>DR Fred Macyard</h3>
                    <p>CHeart specialist</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="single_blog_item">
                <div className="single_blog_img">
                  <img src="img/doctor/doctor_3.png" alt="doctor" />
                  <div className="social_icon">
                    <ul>
                      <li><a href="#"> <i className="ti-facebook" /> </a></li>
                      <li><a href="#"> <i className="ti-twitter-alt" /> </a></li>
                      <li><a href="#"> <i className="ti-instagram" /> </a></li>
                      <li><a href="#"> <i className="ti-skype" /> </a></li>
                    </ul>
                  </div>
                </div>
                <div className="single_text">
                  <div className="single_blog_text">
                    <h3>DR Justin Stuard</h3>
                    <p>Heart specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      {/* <section className="regervation_part section_padding">
        <div className="container">
          <div className="row align-items-center regervation_content">
            <div className="col-lg-7">
              <div className="regervation_part_iner">
                <form>
                  <h2>Make an Appointment</h2>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input type="email" className="form-control" id="inputEmail4" placeholder="Name" />
                    </div>
                    <div className="form-group col-md-6">
                      <input type="password" className="form-control" id="inputPassword4" placeholder="Email address" />
                    </div>
                    <div className="form-group col-md-6">
                      <select className="form-control" id="Select">
                        <option value={1} selected>Select service</option>
                        <option value={2}>Name of service</option>
                        <option value={3}>Name of service</option>
                        <option value={4}>Name of service</option>
                        <option value={5}>Name of service</option>
                      </select>
                    </div>
                    <div className="form-group time_icon col-md-6">
                      <select className="form-control" id="Select2">
                        <option value selected>Time</option>
                        <option value={1}>8 AM TO 10AM</option>
                        <option value={1}>10 AM TO 12PM</option>
                        <option value={1}>12PM TO 2PM</option>
                        <option value={1}>2PM TO 4PM</option>
                        <option value={1}>4PM TO 6PM</option>
                        <option value={1}>6PM TO 8PM</option>
                        <option value={1}>4PM TO 10PM</option>
                        <option value={1}>10PM TO 12PM</option>
                      </select>
                    </div>
                    <div className="form-group col-md-12">
                      <textarea className="form-control" id="Textarea" rows={4} placeholder="Your Note " defaultValue={""} />
                    </div>
                  </div>
                  <div className="regerv_btn">
                    <a href="#" className="btn_2">Make an Appointment</a>
                  </div>
                </form>
              
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="reservation_img">
                <img src="img/reservation.png" alt="" className="reservation_img_iner" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

     <footer className="footer-area">
  <div className="footer section_padding">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-xl-2 col-md-4 col-sm-6 single-footer-widget">
          <a href="#" className="footer_logo"> <img src="img/logo.png" alt="logo"/> </a>
        </div>
        <div className="col-xl-2 col-sm-6 col-md-4 single-footer-widget">
          <h4>Liens rapides</h4>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">A propos</a></li>

            <li><a href="#">Connexion</a></li>
          
          </ul>
        </div>
        <div className="col-xl-6 col-sm-6 col-md-6 single-footer-widget">
        <div className="regervation_part_iner">
        <form>
                  <h2>Envoyer Email</h2>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input type="email" className="form-control" id="inputEmail4" placeholder="Nom" />
                    </div>
                    <div className="form-group col-md-6">
                      <input type="password" className="form-control" id="inputPassword4" placeholder="Email " />
                    </div>
                    
                
                    <div className="form-group col-md-12">
                      <textarea className="form-control" id="Textarea" rows={4} placeholder="Message " defaultValue={""} />
                    </div>
                  </div>
                  <div className="regerv_btn">
                    <a href="#" className="btn_2">Envoyer</a>
                  </div>
                </form>
                </div>
              
        </div>
        
      </div>
    </div>
  </div>
  
</footer>





     



  </div>

    );
  }
}

export default Login;
