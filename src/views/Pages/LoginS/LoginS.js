



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
              this.props.history.push('/home/listepatients'); //redirection mrigla zeda
            }
      }

    })
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

 <section className="banner_partee">
     </section>



    {/* Sing in  Form */}
        <section className="banner_part">
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
                  <span>Identifier</span></Button>
                </Col>
                <Col xs="6" className="text-right">

                  <Button color="info" className=" s px-1"><span>mot de passe oublié</span></Button>

                </Col>

                </Row>

                <Link to="register" className="fr">
                <span className="d-flex align-item-center justify-content-center p-4 notreg "> Créer un compte</span>

                </Link>

            </Form>

              </div>






         </div>
          </div>
        </section>







      </div>
    );
  }
}

export default LoginS;


