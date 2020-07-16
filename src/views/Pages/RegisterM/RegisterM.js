import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
       file:File,
      souscategorie:[],
     medecin:[],
      nom:"",
      prenom:"",
      address:"",
      genre:"",
      date_naissance:"",
      email:"",
      tel:"",
      fix:"",
      password:"",
      idsousCat:"",
      err:"",
      assurance_maladie:"",
      specialite:"",
      diplome:""


    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }


 

  async handelSubmit()
{
  const formdata=new FormData (); 
   formdata.append("nom",this.state.nom);
  formdata.append("prenom",this.state.prenom);
  formdata.append("email",this.state.email);
  formdata.append("password",this.state.password);
  formdata.append("image",this.state.file); 
  formdata.append("adresse",this.state.address);
  formdata.append("genre",this.state.genre);
  formdata.append("date naissance",this.state.date_naissance);
  formdata.append("téléphone",this.state.tel);
  formdata.append("Fix",this.state.fix);
  formdata.append("assurance maladie",this.state.assurance_maladie);
  formdata.append("specialite",this.state.specialite);
  formdata.append("diplome",this.state.diplome);
  // this.state.prenom, this.state.email, this.state.password
  // , this.state.image, this.state.address, this.state.genre, this.state.date_naissance
  // , this.state.tel, this.state.fix, this.state, this.state.assurance_maladie, this.state.specialite
  console.log("state",this.state.address,this.state.tel,this.state.fix,this.state.assurance_maladie);
  await axios.post("http://localhost:5000/medecin/addmedecin",formdata)
    .then (res=> {
      console.log ("data",res.data);
      window.location.href="/#/loginmedecin"
    })
}
  handleChangeFile=(evt)=>
  {
console.log("file",evt.target.files[0]);
const file =evt.target.files[0];
this.setState({file:file})
  }


  onchange= (event) => {
    this.setState({nom: event.target.value});
    this.setState({prenom: event.target.value});
    this.setState({email: event.target.value});
    this.setState({password: event.target.value});
    this.setState({image: event.target.value});
    this.setState({tel: event.target.value});
    this.setState({address: event.target.value});
    this.setState({date_naissance: event.target.value});
    this.setState({genre: event.target.value});
    this.setState({fix: event.target.value});
    this.setState({assurance_maladie: event.target.value});
    this.setState({specialite: event.target.value});
    this.setState({diplome: event.target.value});
  }




  render() {
    return (
      <div>
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
      
       <section className="banner-areaa">
       <div className="containere">
            <div className="signup-content">
              <div className="signup-form">
              <h2 className="form-title">S'inscrire</h2>
                <Form action="" method="post" encType="multipart/form-data" classnom="form-horizontal">
                 

              
                  <FormGroup row>
                    <Col >
                      <Label htmlFor="text-input">nom</Label>
                    </Col>
                    <Col xs="6" md="9">
                      <Input
                     value={this.state.nom} 
                     onChange={evt=>this.setState({nom:evt.target.value})}
                      type="text" id="text-input1" nom="text-input" placeholder="nom" />
                      
                    </Col>
                  </FormGroup>
                
                  <FormGroup row>
                    <Col >
                      <Label htmlFor="textarea-input">prénom</Label>
                    </Col>
                    <Col xs="6" md="9">
                      <Input
                        value={this.state.prenom} 
                        onChange={evt=>this.setState({prenom:evt.target.value})} type="text" nom="text-input2" id="text-inputt" rows="9"
                             placeholder="prénom" />
                    </Col>
                  </FormGroup>
                
                  <FormGroup row>
                    <Col >
                      <Label htmlFor="text-input">email</Label>
                    </Col>
                    <Col xs="6" md="9">
                      <Input
                        value={this.state.email} 
                        onChange={evt=>this.setState({email:evt.target.value})}
                      type="email" id="text-input" nom="text-input3" placeholder="email" />
                
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                
                <Col >
                    <Label htmlFor="text-input">spécialité</Label>
                  </Col>
                  <Col xs="6" md="9">

                  
                 <select className="select-css" name="select" id="select" required placeholder="specialite"  
                defaultValue={this.state.specialite}
                  onChange={evenement=>this.setState({specialite:evenement.target.value})}>
                  <option value={"0"}>  specialite </option>
                          <option > Dentiste</option>
                           <option> Cardiologue  </option>     
                           <option> Dermatologue  </option>   
                           <option>  Généraliste </option>      
                           <option>   </option>   
                           <option>   </option>   
                           <option>   </option>   
                           <option>   </option>   
                 </select> 
                 </Col>
                </FormGroup>               
                  <FormGroup row>
                    <Col>
                      <Label>mot de passe</Label>
                      </Col>
                    <Col xs="6" md="9">
                      <Input
                        value={this.state.password} 
                        onChange={evt=>this.setState({password:evt.target.value})}
                      type="password" id="text-input4" nom="text-input" placeholder="mot de passe" />
                
                    </Col>
                  </FormGroup>
                  
                  <FormGroup row>
                    <Col>
                      <Label > mot de passe</Label>
                      </Col>
                    <Col xs="9" md="9">
                      <Input
                        value={this.state.password} 
                        onChange={evt=>this.setState({password:evt.target.value})}
                      type="password" id="text-input44" nom="text-input" placeholder="Confirmer mot de passe" />
                
                    </Col>
                  </FormGroup>
                   



                  <FormGroup row>
                    <Col>
                      <Label htmlFor="text-input">date naissance</Label>
                    </Col>
                    <Col xs="6" md="9">
                      <Input
                     value={this.state.date_naissance} 
                     onChange={evt=>this.setState({date_naissance:evt.target.value})}
                      type="date" id="text-input6" nom="text-input" placeholder="date" />
                      
                    </Col>
                  </FormGroup>
                
                  <FormGroup row>
                    <Col >
                      <Label htmlFor="textarea-input">téléphone</Label>
                    </Col>
                    <Col xs="6" md="9">
                      <Input
                        value={this.state.tel} 
                        onChange={evt=>this.setState({tel:evt.target.value})} type="Number" nom="text-input55" id="text-input" rows="9"
                             placeholder="téléphone" />
                    </Col>
                  </FormGroup>

                   <FormGroup row>
                    <Col >
                      <Label htmlFor="textarea-input">Fix</Label>
                    </Col>
                    <Col xs="6" md="9">
                      <Input
                        value={this.state.fix} 
                        onChange={evt=>this.setState({fix:evt.target.value})} type="Number" nom="text-input55" id="text-input" rows="9"
                             placeholder="Fix" />
                    </Col>
                  </FormGroup>


                  <FormGroup row>
                
                <Col >
                    <Label htmlFor="text-input">assurance maladie</Label>
                  </Col>
                  <Col xs="6" md="9">

                  
                 <select className="select-css" name="select" id="select" required placeholder="assurance maladie"  
                defaultValue={this.state.assurance_maladie}
                  onChange={evenement=>this.setState({assurance_maladie:evenement.target.value})}>
                  {/* <option value={"0"}> Choisir votre genre </option>*/}
                          <option value="Oui"> Oui</option>
                           <option value="Nom">  Non </option>        
                 </select> 
                 </Col>
                </FormGroup>


                  <FormGroup row>
                    <Col >
                      <Label htmlFor="text-input">adresse</Label>
                    </Col>
                    <Col xs="6" md="9">
                      <Input
                        defaultValue={this.state.address}
                        onChange={evenement=>this.setState({address:evenement.target.value})}
                      type="email" id="text-input" nom="text-input33" placeholder="adresse" />
                
                    </Col>
                  </FormGroup>
                
                
                 
                 
                  <FormGroup row>
                
                  <Col >
                      <Label htmlFor="text-input">Genre</Label>
                    </Col>
                    <Col xs="6" md="9">
                  <select className="select-css" name="select" id="select" required placeholder="Genre"  defaultValue={this.state.genre}
                    onChange={evenement=>this.setState({genre:evenement.target.value})}>
                    <option value={"0"}> Choisir votre genre </option>
                            <option value="Femme"> Femme</option>
                             <option value="Homme">  Homme </option>        
                   </select>
                   </Col>
                  </FormGroup>



                  <FormGroup row>
                    <Col >
                      <Label htmlFor="file-input">Photo</Label>
                    </Col>
                    <Col xs="6" md="9">
                      <Input type="file" 
                      onChange={this.handleChangeFile}
                      id="file-input" nom="file-input" />
                    </Col>
                  </FormGroup>
                 
                  <FormGroup row hidden>
                    <Col md="3">
                      <Label classnom="custom-file" htmlFor="custom-file-input">Custom file input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Label classnom="custom-file">
                        <Input classnom="custom-file" type="file" id="custom-file-input" nom="file-input" />
                        <span classnom="custom-file-control"></span>
                      </Label>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col >
                      <Label htmlFor="file-input">Diplome</Label>
                    </Col>
                    <Col xs="6" md="9">
                    <Input
                        defaultValue={this.state.diplome}
                        onChange={evenement=>this.setState({diplome:evenement.target.value})}
                      type="textarea" id="text-input" nom="text-input33" placeholder="diplome" />
                    </Col>
                  </FormGroup>
                 
                </Form>
              <br></br>
                <Button 
                 onClick={this.handelSubmit.bind(this)}
                type="submit" size="sm" color="primary"><i classnom="fa fa-dot-circle-o"></i> Envoyer</Button>
                <Button type="reset" size="sm" color="danger"><i classnom="fa fa-ban"></i> Annuler</Button>
          
         
       </div>
       <div className="signup-image">
                <figure><img src="images/signup-imagem.jpg" alt="sing up image" /></figure>
                <Link to="loginmedecin" className="signup-image-link">Je suis déjà membre</Link>
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

export default Forms;
