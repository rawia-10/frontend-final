import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
// import image from './images/logo.png'



class contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
     
       
       
       
       
       
       
       
       <div>
          <header class="header" id="header">
          <div>
            <div class="header_top">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="header_top_content d-flex flex-row align-items-center justify-content-start">
                      <div class="logo">
                      {/* <img  src={image} alt=""/> */}
                      </div>
                      <div class="header_top_extra d-flex flex-row align-items-center justify-content-start ml-auto">
                  
  
  <div className="p-3 d-flex bout">
              
                <Link to="">
                 <button type="button" class="btn btn-danger patient">
               <span>Patient</span>
                 </button></Link>
  
                 <Link to="loginmedecin">
                 <button type="button" class="btn btn-danger med">
                   <span>Medecin</span>
                 </button></Link>
  
                 <Link to="loginsecretaire">
                 <button type="button" class="btn btn-danger secreatire">
                 <span>Secretaire</span>
                 </button></Link>
  
  
                </div>
                      </div>
                      <div class="hamburger ml-auto"><i class="fa fa-bars" aria-hidden="true"></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="header_nav" id="header_nav_pin">
              <div class="header_nav_inner">
                <div class="header_nav_container">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <div class="header_nav_content d-flex flex-row align-items-center justify-content-start">
                          <nav class="main_nav">
                            <ul class="d-flex flex-row align-items-center justify-content-start">
                              <li><a href="index.html">Accueil</a></li>
                              <li><a href="about.html">A Propos</a></li>
                              <li><a href="services.html">Services</a></li>
                              {/* <li><a href="news.html">News</a></li> */}
                              <Link to="contact" class="wht"><li>Contact</li></Link>
                            </ul>
                          </nav>
                          <div class="search_content d-flex flex-row align-items-center justify-content-end ml-auto">
                            <form action="#" id="search_container_form" class="search_container_form">
                              <input type="text" class="search_container_input" placeholder="Search" required="required"/>
                              <button class="search_container_button"><i class="fa fa-search" aria-hidden="true"></i></button>
                            </form>
                          </div>
  
                          
     
  
  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
       

    <div className="col-lg-5 footer_col">
    <div className="footer_contact">
      <div className="footer_contact_title">Quick Contact</div>
      <div className="footer_contact_form_container">
        <form action="#" className="footer_contact_form" id="footer_contact_form">
          <div className="d-flex flex-xl-row flex-column align-items-center justify-content-between">
            <input type="text" className="footer_contact_input" placeholder="Name" required="required" />
            <input type="email" className="footer_contact_input" placeholder="E-mail" required="required" />
          </div>
          <textarea className="footer_contact_input footer_contact_textarea" placeholder="Message" required="required" defaultValue={""} />
          <button className="footer_contact_button">send message</button>
        </form>
      </div>
    </div>
    </div>
    </div>
 




        );
    }
}
 
export default contact;