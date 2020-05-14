import dotenv from  'dotenv'
import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter,CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import image from '../logo.png';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import axios from 'axios';
import JwtDecode from 'jwt-decode';

class LoginP extends Component {

  constructor(props) {
    super(props);

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      nom:"",
      prenom:"",
      address:"",
      genre:"",
      date_naissance:"",
      email:"",
      tel:"",
      password:"",

    };

    dotenv.config()

  }



  handleSubmit = () => {


    // let token = localStorage.getItem("token");
    // if (!token) {
    //     token = "";
    // }
    axios.post("http://localhost:5000/patient/addpatient", {
      nom:this.state.nom,
      prenom:this.state.prenom,
      genre:this.state.genre,
      address:this.state.address,
      email:this.state.email,
      password:this.state.password,
      tel:this.state.tel,
      date_naissance:this.state.date_naissance,


    },


  )   .then(res=>{
    console.log("data",res.data)
    window.location.href="/#/loginpatient"
  })
}



onchange= (event) => {
  this.setState({email: event.target.value});
  this.setState({password: event.target.value});
  this.setState({nom: event.target.value});
  this.setState({prenom: event.target.value});
  this.setState({address: event.target.value});
  this.setState({genre: event.target.value});
  this.setState({tel: event.target.value});
  this.setState({email: event.target.value});
  this.setState({date_naissance: event.target.value});
  this.setState({password: event.target.value});

}

  render() {
    return (


      <div>
             <ToastsContainer store={ToastsStore} />

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
</li>

                 
                 
                 
                  </ul>

  
                </div>
               
              </nav>
            </div>
          </div>
        </div>
      </header>

     




 {/* Sign up form */}
 <section className="signup">
          <div className="containere">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">S'inscrire</h2>

                <Form method="" className="f" >

                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-user"></i>
                  </InputGroupText>
                </InputGroupAddon>
                    <Input defaultValue={this.state.nom}
                      onChange={evenement=>this.setState({nom:evenement.target.value})} type="text" name="nom" id="nom" placeholder="nom" />
                  </InputGroup>

                  <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-user"></i>
                  </InputGroupText>
                </InputGroupAddon>
                    <Input defaultValue={this.state.prenom}
                      onChange={evenement=>this.setState({prenom:evenement.target.value})} type="text" name="prenom"  placeholder="prenom" />
                  </InputGroup>

                  <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                  <InputGroupText>
               <span>@</span>    
                  </InputGroupText>
                </InputGroupAddon>
                    <Input defaultValue={this.state.email}
                      onChange={evenement=>this.setState({email:evenement.target.value})} type="email" name="email"  placeholder=" Email" />
                  </InputGroup>

                  <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-lock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                    <Input defaultValue={this.state.password}
                      onChange={evenement=>this.setState({password:evenement.target.value})} type="password" name="pass"  placeholder="mot de passe" />
                </InputGroup>
               
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-lock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                    <Input defaultValue={this.state.password}
                      onChange={evenement=>this.setState({password:evenement.target.value})} type="password" name="re_pass"  placeholder="Confirmer mot de passe" />
                  </InputGroup>

                  <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <span>+216</span>
                  </InputGroupText>
                </InputGroupAddon>
                    <Input defaultValue={this.state.tel}
                      onChange={evenement=>this.setState({tel:evenement.target.value})} type="Number" name="re_pass"  placeholder="Téléphone" />
                  </InputGroup>

                  <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-location-pin"></i>
                  </InputGroupText>
                </InputGroupAddon>
                    <Input   defaultValue={this.state.address}
                      onChange={evenement=>this.setState({address:evenement.target.value})} type="text" name="re_pass"  placeholder="adresse" />
                  </InputGroup>

                  <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-calendar"></i>
                  </InputGroupText>
                </InputGroupAddon>
                    <Input defaultValue={this.state.date_naissance}
                      onChange={evenement=>this.setState({date_naissance:evenement.target.value})} type="Date" name="re_pass"  placeholder="date" />
                 </InputGroup>


                 <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                  <i className="fa fa-venus-mars"></i> 
                  </InputGroupText>
                </InputGroupAddon>
                  <select className="select-css" name="select" id="select" required placeholder="Genre"  defaultValue={this.state.genre}
                    onChange={evenement=>this.setState({genre:evenement.target.value})}>
                    <option value={"0"}> Choisir votre genre </option>
                            <option value="Femme"> Femme</option>
                             <option value="Homme">  Homme </option>
                   </select>
                  </InputGroup>




                  <div className="form-group">
                    <Input type="checkbox" name="agree-term" id="agree-term" className="agree-term"  required/>
                    <label htmlFor="agree-term" className="label-agree-term"><span><span /></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                  </div>



                  <Col xs="6">
                  <Button color="info" className="xl px-5 " onClick={this.handleSubmit}  >
               S'inscrir</Button>
                </Col>



                </Form>

              </div>
              <div className="signup-image">
                <figure><img src="images/signup-imagep.jpg" alt="sing up image" /></figure>
                <Link to="loginpatient" className="signup-image-link">Je suis déjà membre</Link>
              </div>
            </div>
          </div>
        </section>










<footer className="footer">
  <div className="parallax_background parallax-window k" data-parallax="scroll" data-speed="0.8" />
  <div className="footer_content">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 footer_col">
          <div className="footer_about">
            <div className="logo">
              <a href="#">Medium<span /></a>
            </div>
            <div className="footer_about_text">Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</div>
            <div className="footer_social">
              <ul className="d-flex flex-row align-items-center justify-content-start">
                <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-behance" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
              </ul>
            </div>
            <div className="copyright">
              Copyright © All rights reserved | This template is made with
              <i className="fa fa-heart-o" aria-hidden="true" /> by
              <a href="https://colorlib.com" target="_blank">Rawia Agili</a>
            </div>
          </div>
        </div>
        <div className="col-lg-5 footer_col">
          <div className="footer_contact">
            <div className="footer_contact_title">Quick Contact</div>
            <div className="footer_contact_form_container">
              <form action="#" className="footer_contact_form" id="footer_contact_form">
                <div className="d-flex flex-xl-row flex-column align-items-center justify-content-between">
                  <Input type="text" className="footer_contact_Input" placeholder="Name" required="required" />
                  <Input type="email" className="footer_contact_Input" placeholder="E-mail" required="required" />
                </div>
                <textarea className="footer_contact_input footer_contact_textarea" placeholder="Message" required="required" defaultValue={""} />
                <button className="footer_contact_button">send message</button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-4 footer_col">
          <div className="footer_hours">
            <div className="footer_hours_title">Opening Hours</div>
            <ul className="hours_list">
              <li className="d-flex flex-row align-items-center justify-content-start">
                <div>Monday – Thursday</div>
                <div className="ml-auto">8.00 – 19.00</div>
              </li>
              <li className="d-flex flex-row align-items-center justify-content-start">
                <div>Friday</div>
                <div className="ml-auto">8.00 - 18.30</div>
              </li>
              <li className="d-flex flex-row align-items-center justify-content-start">
                <div>Saturday</div>
                <div className="ml-auto">9.30 – 17.00</div>
              </li>
              <li className="d-flex flex-row align-items-center justify-content-start">
                <div>Sunday</div>
                <div className="ml-auto">9.30 – 15.00</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer_bar">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="footer_bar_content d-flex flex-sm-row flex-column align-items-lg-center align-items-start justify-content-start">
            <nav className="footer_nav">
              <ul className="d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="news.html">News</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
            <div className="footer_links">
              <ul className="d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                <li><a href="#">Help Desk</a></li>
                <li><a href="#">Emergency Services</a></li>
                <li><a href="#">Appointment</a></li>
              </ul>
            </div>
            <div className="footer_phone ml-lg-auto">
              <i className="fa fa-phone" aria-hidden="true" />
              <span>+34 586 778 8892</span>
            </div>
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

export default LoginP;
