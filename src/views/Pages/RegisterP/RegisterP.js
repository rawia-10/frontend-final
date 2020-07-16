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


 {/* Sign up form */}
 <section className="banner-areaa">
          <div className="containere">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">S'inscrire</h2>

                <Form method="" className="f" >

                <InputGroup className="mb-3" >
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

export default LoginP;
