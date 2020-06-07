import React, { Component } from 'react';
import { Button, Card,FormGroup, CardBody, CardFooter, Label,Col,radio, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import image from '../logo.png';
import { ToastsContainer, ToastsStore } from 'react-toasts';
class Register extends Component {


  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
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
      medecin: [],
      idMed:"",

    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  handleChange = e => {
		if (e.target.name === 'nom') {
			this.setState({ nom: e.target.value });
    }
    if (e.target.name === 'prenom') {
			this.setState({ prenom: e.target.value });
    }
    if (e.target.name === 'address') {
			this.setState({ address: e.target.value });
    }
    if (e.target.name === 'genre') {
			this.setState({ genre: e.target.value });
    }
    if (e.target.name === 'date_naissance') {
			this.setState({ date_naissance: e.target.value });
    }
    if (e.target.name === 'email') {
			this.setState({ email: e.target.value });
    }
    if (e.target.name === 'tel') {
			this.setState({ tel: e.target.value });
		}

		if (e.target.name === 'password') {
			this.setState({ password: e.target.value });
    }





	};


  handleSubmit = () => {

    axios.post("http://localhost:5000/secretaire/addsecretaire", {
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
    window.location.href="/#/loginsecretaire"
  })
}


  // reset()
  // {
  //     this.setState({nom:"",prenom:"",email:"",address:"",genre:"",date_naissance:"",password:"",tel:""})
  // }


  componentDidMount()
  {
  this.getall()
  }
    getall(){
      /* fetch :get
      axios:post/put */
      fetch("http://localhost:5000/medecin/getall",{method:"GET"})
      .then(response=>response.json())
      .then(data=>{
          console.log("medecin",data) //juste pour le test
          this.setState({medecin:data})
      })
  }



  render() {

    return (


      <div >

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
                <FormGroup>
                    <Form action="" method="post">
                    
                    <Input type="select" nom="ccmonth" id="ccmonth"
                      value={this.state.idMed}
                           onChange={evt=>this.setState({idMed:evt.target.value})}>
                      {<option value={"0"}> Choisir Medecin </option>}
                      {
                        this.state.medecin.map((item) =>
                          <option value={item._id}>{item.nom}</option>
                        )
                      }                   
                       </Input>
                    </Form>
                  </FormGroup>
                <Form method="" className="f" >

                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-user"></i>
                  </InputGroupText>
                </InputGroupAddon>
                    <Input defaultValue={this.state.nom} required
                      onChange={evenement=>this.setState({nom:evenement.target.value})} type="text" name="nom" id="nom" placeholder="nom" />
                  </InputGroup>

                  <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-user"></i>
                  </InputGroupText>
                </InputGroupAddon>
                    <Input defaultValue={this.state.prenom} required
                      onChange={evenement=>this.setState({prenom:evenement.target.value})} type="text" name="prenom" id="prenom" placeholder="prenom" />
                  </InputGroup>

                  <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                   <span>@</span>
                  </InputGroupText>
                </InputGroupAddon>
                    <Input defaultValue={this.state.email} required
                      onChange={evenement=>this.setState({email:evenement.target.value})} type="email" name="email" id="email" placeholder=" Email" />
                  </InputGroup>

                  <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-lock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                    <Input defaultValue={this.state.password} required
                      onChange={evenement=>this.setState({password:evenement.target.value})} type="password" name="pass" id="pass" placeholder="mot de passe" />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-lock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                    <Input defaultValue={this.state.password} required
                      onChange={evenement=>this.setState({password:evenement.target.value})} type="password" name="re_pass" id="re_pass" placeholder="Confirmer mot de passe" />
                  </InputGroup>
  
                  <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <span>+216</span>
                  </InputGroupText>
                </InputGroupAddon>
                    <Input defaultValue={this.state.tel} required
                      onChange={evenement=>this.setState({tel:evenement.target.value})} type="Number" name="re_pass" id="re_pass" placeholder="Téléphone" />
                  </InputGroup>

                  <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                  <i className="icon-location-pin"></i>
                  </InputGroupText>
                </InputGroupAddon>
                    <Input   defaultValue={this.state.address} required
                      onChange={evenement=>this.setState({address:evenement.target.value})} type="text" name="re_pass" id="re_pass" placeholder="Adresse" />
                  </InputGroup>
                 
                  <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                  <i className="icon-calendar"></i>
                  </InputGroupText>
                </InputGroupAddon>
                    <Input defaultValue={this.state.date_naissance} required
                      onChange={evenement=>this.setState({date_naissance:evenement.target.value})} type="Date" name="re_pass" id="re_pass" placeholder="date" />
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
                <figure><img src="images/signup-image.jpg" alt="sing up image" /></figure>
                <Link to="loginsecretaire" className="signup-image-link">Je suis déjà membre</Link>
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

export default Register;
