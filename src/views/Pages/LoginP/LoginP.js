



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
      email:"",
      password:"",
      erreur:false,
      EmailErr: "",
      PasswordErr: "",


    };

    dotenv.config()

  }



Login=()=> {
  axios.post("http://localhost:5000/patient/login", {
    email: this.state.email,
    password: this.state.password
  })
    .then(res => {

      if (res.data['status'] === "error") {
        alert(" verifier votre login ou password")
      }
      else {


         console.log(res.data.data.token);

         //console.log(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(res)).data)).user);



            if (res.data.data.user.role.nom=== 'patient' ) {
              localStorage.setItem('role', res.data.data.user.role.nom);
              this.props.history.push('/Info'); //redirection mrigla zeda
            }
      }

    })}

validate = () => {

  let isError = false;

  const errors = {
    EmailErr: "",
    PasswordErr: "",
  }

  console.log("login ",this.state.email);
  console.log("pws ",this.state.password);



  const regex1=/^[a-zA-Z0-9._-]+$/;


  if ((this.state.email==="")||(this.state.Emaemailil.length > 30)||!regex1.test(this.state.email)) {

    isError = true;
    errors.EmailErr = "Veuillez verifier votre Email";
  }


  if ((this.state.password==="")||(this.state.password.length > 20)) {

    isError = true;
    errors.PasswordErr = "veuillez verifier votre mot de passe";
  }



  if (isError) {
    this.setState({
      ...this.state,
      ...errors
    })
  }

  console.log("errrr ", isError)


  this.setState({
    erreur:isError
  })

  return isError;
}


  handleChange = (e) => {

		if (e.target.name === 'email') {
			this.setState({ email: e.target.value });
		}

		if (e.target.name === 'password') {
			this.setState({ password: e.target.value });
		}
	};

  render() {
    const { item } = this.props

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
        <section className="sign-in">
          <div className="containere">
            <div className="signin-content ">
              <div className="signin-image col-lg-5">
                <figure><img src="images/signin-imagep.jpg" alt="sing up image" /></figure>

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
                <Input type="text" name="email" onChange={this.handleChange} placeholder="E-mail" autoComplete="off"
                value={this.state.email} />
              </InputGroup>
              {

                this.state.erreur===false ?

                    <p >{this.state.emailERR}</p>:null

            }
            {

                this.state.erreur===true ?

                    <p style ={{color:"red", fontSize:'13px'}}>{this.state.emailERR}</p>:null

            }


              <InputGroup className="mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-lock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input type="password" name="password" onChange={this.handleChange} placeholder="mot de passe"
                autoComplete="current-password" value={this.state.password} />
              </InputGroup>

              {

                this.state.erreur===false ?

                    <p >{this.state.passwordERR}</p>:null

            }
            {

                this.state.erreur===true ?

                    <p style ={{color:"red", fontSize:'13px'}}>{this.state.passwordERR}</p>:null

            }
              <Row>
                <Col xs="6">
                  <Button color="info" className="s px-5 " onClick={this.Login}  >
                  <span>S'identifier</span></Button>
                </Col>
                <Col xs="6" className="text-right">

                  <Button color="info" className=" s px-1"><span>mot de passe oublié </span></Button>

                </Col>

                </Row>

                <Link to="registerP" className="fr">
                <span className="d-flex align-item-center justify-content-center p-4 notreg "> Créer un compte</span>

                </Link>

            </Form>

              </div>






         </div>
          </div>
        </section>
        <footer className="footer-area">
  <div className="footer section_padding">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-xl-2 col-md-4 col-sm-6 single-footer-widget">
          <a href="#" className="footer_logo"> <img src="img/logo.png" alt="#" /> </a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
          <div className="social_logo">
            <a href="#"><i className="ti-facebook" /></a>
            <a href="#"> <i className="ti-twitter" /> </a>
            <a href="#"><i className="ti-instagram" /></a>
            <a href="#"><i className="ti-skype" /></a>
          </div>
        </div>
        <div className="col-xl-2 col-sm-6 col-md-4 single-footer-widget">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Department</a></li>
            <li><a href="#"> Online payment</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Department</a></li>
          </ul>
        </div>
        <div className="col-xl-2 col-sm-6 col-md-4 single-footer-widget">
          <h4>Explore</h4>
          <ul>
            <li><a href="#">In the community</a></li>
            <li><a href="#">IU health foundation</a></li>
            <li><a href="#">Family support </a></li>
            <li><a href="#">Business solution</a></li>
            <li><a href="#">Community clinic</a></li>
          </ul>
        </div>
        <div className="col-xl-2 col-sm-6 col-md-6 single-footer-widget">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Lights were season</a></li>
            <li><a href="#"> Their is let wherein</a></li>
            <li><a href="#">which given over</a></li>
            <li><a href="#">Without given She</a></li>
            <li><a href="#">Isn two signs think</a></li>
          </ul>
        </div>
        <div className="col-xl-3 col-sm-6 col-md-6 single-footer-widget">
          <h4>Newsletter</h4>
          <p>Seed good winged wherein which night multiply
            midst does not fruitful</p>
          <div className="form-wrap" id="mc_embed_signup">
            <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="form-inline">
              <input className="form-control" name="EMAIL" placeholder="Your Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address '" required type="email" />
              <button className="click-btn btn btn-default text-uppercase"> <i className="ti-angle-right" />
              </button>
              <div style={{position: 'absolute', left: '-5000px'}}>
                <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex={-1} defaultValue type="text" />
              </div>
              <div className="info" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright_part">
    <div className="container">
      <div className="row align-items-center">
        <p className="footer-text m-0 col-lg-8 col-md-12">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          Copyright © All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
        </p>
        <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
          <a href="#"><i className="ti-facebook" /></a>
          <a href="#"> <i className="ti-twitter" /> </a>
          <a href="#"><i className="ti-instagram" /></a>
          <a href="#"><i className="ti-skype" /></a>
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


