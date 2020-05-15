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
              
                 
                 
                  </ul>

  
                </div>
               
              </nav>
            </div>
          </div>
        </div>
      </header>
      <section className="banner_partee">
     </section>

     




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



        <section >
     </section>






        <footer className="footer-area">
  <div className="footer section_padding">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-xl-2 col-md-4 col-sm-6 single-footer-widget">
          <a href="#" className="footer_logo"> <img src="img/logo.png" alt="#" className="imgf"/> </a>
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

export default LoginP;
