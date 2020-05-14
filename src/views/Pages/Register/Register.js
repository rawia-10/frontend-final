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
 {/* Sign up form */}
 <section className="signup">
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



      </div>



    );
  }
}

export default Register;
