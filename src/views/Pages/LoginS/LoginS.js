



import dotenv from  'dotenv'
import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter,CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import image from '../logo.png';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import axios from 'axios';
import JwtDecode from 'jwt-decode';

class LoginS extends Component {

  constructor(props) {
    super(props);

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,

      email:"",

      password:""
    };

    dotenv.config()

  }




Login=()=> {
  axios.post("http://localhost:5000/secretaire/login", {
    email:this.state.email,
    password:this.state.password
  })
    .then(res => {

      if (res.data['status'] === "error") {
        alert(" verifier votre login ou password")
      }
      else {


         console.log(res.data.data.token);

         //console.log(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(res)).data)).user);



            if (res.data.data.user.role.nom=== 'secretaire' ) {
              localStorage.setItem('role', res.data.data.user.role.nom);
              this.props.history.push('/home/listepatient'); //redirection mrigla zeda
            }
      }

    })
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



    {/* Sing in  Form */}
        <section className="banner-areaa">
          <div className="containere">
            <div className="signin-content ">
              <div className="signin-image col-lg-5">
                <figure><img src="images/signin-image.jpg" alt="sing up image" /></figure>

              </div>
              <div className="col-lg-4">
              <Form className="f">
              <h1 className="text" >S'identifier</h1>
              <p className="text">Connectez-vous à votre compte</p>

              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-user"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="text" name="email"
                 placeholder="E-mail" autoComplete="off"
                value={this.state.email}
                onChange={event => this.setState({email: event.target.value})} />
              </InputGroup>



              <InputGroup className="mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-lock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="password" name="password"  placeholder="mot de passe"
                autoComplete="current-password" value={this.state.password}
                onChange={event => this.setState({password: event.target.value})}/>
              </InputGroup>


              <Row>
                <Col xs="6">
                  <Button color="info" className="s px-5 " onClick={this.Login}  >
                  <span>Connexion</span></Button>
                </Col>
              

                </Row>
                <br></br>
                <a href="" className=" s px-1"><span>mot de passe oublié</span></a>

                <Link to="register" className="fr">
                <span className="d-flex align-item-center justify-content-center p-4 notreg "> Créer un compte</span>

                </Link>

            </Form>

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

export default LoginS;


