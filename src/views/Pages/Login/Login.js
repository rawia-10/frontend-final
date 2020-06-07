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
 

{/* Header Area Starts */}
<header className="header-area">
        <div id="header">
          <div className="container">
            <div className="row align-items-center justify-content-between d-flex">
              <div id="logo">
                <a href="index.html"><img src="assets/images/logo/logo.png" alt="" title /></a>
              </div>
              <nav id="nav-menu-container">
                <ul className="nav-menu">
                  <li className="menu-active"><Link to="login">Accueil</Link></li>
                  <li><Link to="login">A Propos</Link></li>
                  <li><Link to="login">Contact</Link></li>
                  <li className="nav-item dropdown">
                   <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Connexion
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="loginpatient" >
               <a className="dropdown-item" >Patient</a>
                </Link>
                 <Link to="loginsecretaire" >
               <a className="dropdown-item">Secrétaire</a>
                 </Link> 
               <Link to="loginmedecin" >
                 <a className="dropdown-item">Medecin</a>
              </Link>
            </div>
            </li>
                  	          				          
                </ul>
              </nav>{/* #nav-menu-container */}		    		
            </div>
          </div>
        </div>
      </header>
      {/* Header Area End */}

   {/* Banner Area Starts */}
   <section className="banner-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h4>Caring for better life</h4>
             <h1> Meilleurs Soins &amp;
                  Meilleur Médecin</h1>
              <Link to="/Medecin" className="btn_2">Rechercher votre Médecin</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Area End */}   

 {/* Welcome Area Starts */}
 <section className="welcome-area section-padding3">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="welcome-img">
                <img src="assets/images/welcome.png" alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="welcome-text mt-5 mt-lg-0">
                <h2>Bienvenue dans notre site
</h2>
                <p><b>MyDoc</b> est un service complet de gestion de cabinet médical,
                qui optimise votre organisation et vous fait gagner du temps. Avec <b>MyDoc</b>,
                 vous partagez vos disponibilités en temps réel avec vos patients selon vos critères,
                  tout en gardant la main sur votre agenda médical.</p>
                {/* <a href="#" className="template-btn mt-3">apprendre encore plus</a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Welcome Area End */}



      {/* footer */}
      <footer className="hotline-area text-center section-padding">
      <div className="container">
      <div className="row">
     
      <div className="col-xl-5 col-lg-3">
        <div className="appointment-form text-center mt-5 mt-lg-0">
          <h3 className="mb-5">Contacter nous</h3>
          <form action="#">
            <div className="form-group">
              <input type="text" placeholder="Your Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'nom'" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'" required /> 
            </div>
            <div className="form-group">
              <textarea name="message" cols={20} rows={7} placeholder="Message" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Message'" required defaultValue={""} />
            </div>
            <a href="#" className="template-btn">Envoyer</a>
          </form>
        </div>
      </div> 
    
     <div className="col-xl-5 col-lg-3">
           
              <h2>Emergency hotline</h2>
              <span>(+01) – 256 567 550</span>
              {/* <p className="pt-3">We provide 24/7 customer support. Please feel free to contact us <br />for emergency case.</p> */}
            </div>
          </div>
        </div>
      </footer>
      {/* footer end */}

  </div>

    );
  }
}

export default Login;
