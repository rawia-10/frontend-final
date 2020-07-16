



import dotenv from  'dotenv'
import React, { Component, } from 'react';
import { Button, Card, CardBody, CardFooter,CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import image from '../logo.png';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import axios from 'axios';
import JwtDecode from 'jwt-decode';

class LoginP extends Component {
  state = {
    email : null ,
    password: null
}
constructor(props) {
    super(props);

    this.login = this.login.bind(this);
}
 
login(event){
    //Authorization: Basic YWRtaW46YWRtaW4=
    //alert('begin login');
        axios.post('http://localhost:5000/patient/login', {
            'email': this.state.email ,
            'password': this.state.password
        },{
            headers: { 'content-type': 'multipart/form-data' }
        }).then(response => {
            // handle success
            localStorage.setItem('Authorization',response.data.authorisation );
            localStorage.setItem('User', JSON.stringify(response.data.user ) );

            this.props.history.push('/login');
           
        })
        .catch((error) => {
            // handle error
            console.log("login ko :" , error);
        });


    event.preventDefault();
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
                <Col xs="8">
                <Button color="info" className="s px-5 " onClick={this.login}  >
                  <span>Connexion</span></Button>
                </Col>
              
                </Row>
                <br></br>
                <Link to="/reset" className=" s px-1"><span>mot de passe oublié </span></Link>
                <Link to="registerP" className="fr">
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

export default LoginP;


// constructor(props) {
//   super(props);

//   this.state = {
//     collapse: true,
//     fadeIn: true,
//     timeout: 300,
//     email:"",
//     password:"",
//     erreur:false,
//     EmailErr: "",
//     PasswordErr: "",


//   };

//   dotenv.config()

// }



// Login=()=> {
// axios.post("http://localhost:5000/patient/login", {
//   email: this.state.email,
//   password: this.state.password
// })
//   .then(res => {

//     if (res.data['status'] === "error") {
//       alert(" verifier votre login ou password")
//     }
//     else {


//        console.log(res.data.data.token);

//        //console.log(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(res)).data)).user);



//           if (res.data.data.user.__t=== 'patient' ) {
//             localStorage.setItem('role', res.data.data.user.__t);
//             this.props.history.push('/login'); //redirection mrigla zeda
//           }
//     }

//   })}

// validate = () => {

// let isError = false;

// const errors = {
//   EmailErr: "",
//   PasswordErr: "",
// }

// console.log("login ",this.state.email);
// console.log("pws ",this.state.password);



// const regex1=/^[a-zA-Z0-9._-]+$/;


// if ((this.state.email==="")||(this.state.Emaemailil.length > 30)||!regex1.test(this.state.email)) {

//   isError = true;
//   errors.EmailErr = "Veuillez verifier votre Email";
// }


// if ((this.state.password==="")||(this.state.password.length > 20)) {

//   isError = true;
//   errors.PasswordErr = "veuillez verifier votre mot de passe";
// }



// if (isError) {
//   this.setState({
//     ...this.state,
//     ...errors
//   })
// }

// console.log("errrr ", isError)


// this.setState({
//   erreur:isError
// })

// return isError;
// }
