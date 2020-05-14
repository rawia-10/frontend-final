




























import dotenv from  'dotenv'
import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter,CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import image from '../logo.png';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import axios from 'axios';
import JwtDecode from 'jwt-decode';

class LoginM extends Component {

  constructor(props) {
    super(props);

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      EmailErr: "",
      PasswordErr: "",
      email:"",
      password:"",
      erreur:false
    };

    dotenv.config()

  }





 Login=()=> {

    axios.post("http://localhost:5000/medecin/login", {
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



							if (res.data.data.user.role.nom=== 'medecin' ) {
                localStorage.setItem('role', res.data.data.user.role.nom);
								this.props.history.push('/home/listepatients');
							}
        }

      })
  }
  validate = () => {

    let isError = false;

    const errors = {

      passwordERR:'' ,
      emailERR:'',


    };

    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // const  regpassword =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

    if ((this.state.email==="")||!regEmail.test(this.state.email))  {

      isError = true;
      errors.emailERR = "Email must be a valid address, e.g myname@mydomaine.com";
  }

  //   if ((this.state.password==="")||!regpassword.test(this.state.password)) {

  //     isError = true;
  //     errors.passwordERR = "Password should contain at least 8 characters,where at least one number, one lower case and one upper case characters";
  // }

    if (isError) {
        this.setState({
            ...this.state,
            ...errors
        })
    }

    console.log("errrr ", isError);

    this.setState({
        erreur:isError
    });

    return isError;
};
  handleChange = (e) => {

		if (e.target.name === 'email') {
			this.setState({ email: e.target.value });
		}

		if (e.target.name === 'password') {
			this.setState({ password: e.target.value });
		}
	};

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
        <section className="sign-in">
          <div className="containere">
            <div className="signin-content ">
              <div className="signin-image col-lg-5">
                <figure><img src="images/signin-imagem.jpg" alt="sing up image" /></figure>

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
                <Input type="text" name="email" placeholder="E-mail" autoComplete="off"
                  defaultValue={this.state.email}
                onChange={evenement=>this.setState({email:evenement.target.value})}
                />
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
                  <span>Login</span></Button>
                </Col>
                <Col xs="6" className="text-right">

                <Button color="info" className=" s px-1"><span>mot de passe oublié </span></Button>

                </Col>

                </Row>

                <Link to="registerM" className="fr">
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

export default LoginM;


