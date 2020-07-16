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
import * as ReactDOM from 'react-dom';import { TimePicker } from '@progress/kendo-react-dateinputs';
import axios from 'axios';
import { DateTime } from 'react-datetime-bootstrap';
import { Link } from 'react-router-dom';
import image from '../logo.png';

class Forms extends Component {
  logs = [];
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      date:"",
      heure:"",
      patient:{
        email:"",
        tel:"",
        nom:"",
        prenom:"",
        id:"",
      }
     
      

    };
  }

  toggle() {
    
    this.setState({ collapse: !this.state.collapse,_id: localStorage.getItem("id")  });
    

  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  getPatient(){
    let id = localStorage.getItem('id')
    fetch(`http://localhost:5000/patient/getbyid/`+id,
    {method:"GET"})
      .then(response => response.json()) 
      .then(data => {
        console.log("GETONE", data);
   
        
        this.setState(data)           
    })
  }


componentDidMount = () => {
  this.getPatient();
}
  handelSubmit()
  {
      console.log("state",this.state.date, this.state.heure,this.state.tel,this.state.email,this.state.nom,this.state.prenom)
     
      axios.post("http://localhost:5000/rdv/addrdv",{
      date:this.state.date,
      heure:this.state.heure,
      tel:this.state.tel,
      email:this.state.email,
       nom:this.state.nom,
       prenom:this.state.prenom,
      
      })
.then(res=>{
    console.log("data",res.data);
    alert("rendez-vous ajoutez avec succes")
    // window.location.href="/#/home/listerendezvous"
})

  }


  reset()
  {
      this.setState({date:"",heure:"",email:"",tel:"",nom:"",prenom:""})
  }



onChange= (event) => {
    this.setState({date: event.target.value});
    this.setState({heure: event.target.value});
    
   
  }

//   handleChange = (event) => {
//     this.logs.unshift("change: " + event.target.value);
// }
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
      <div className="banner-areaa">
      <div className="containere">
      <div className="signup-form">
    <br></br>
      <Form method="" className="f" >
{/*                 
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
                      onChange={evenement=>this.setState({prenom:evenement.target.value})} type="text" name="nom" id="nom" placeholder="prénom" />
                  </InputGroup> 
           */}
                  <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                  <i className="icon-calendar"></i>
                  </InputGroupText>
                </InputGroupAddon>
                    <Input defaultValue={this.state.date} required
                      onChange={evenement=>this.setState({date:evenement.target.value})} type="Date" name="re_pass" id="re_pass" placeholder="date" />
                 </InputGroup>
             

                 <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                  <i className="fa fa-clock-o"></i> 
                  </InputGroupText>
                </InputGroupAddon>

                  <select className="select-css" name="select" id="select" required placeholder="Heure"  defaultValue={this.state.heure}
                    onChange={evenement=>this.setState({heure:evenement.target.value})}>
                     <option value={"0"}> Choisir Heure </option>
                            <option value="8 H"> 8H</option>
                             <option value="9 H"> 9H </option>       
                             <option value="10 H"> 10H</option>
                             <option value="11 H">  11H </option>  
                             <option value="14 H"> 14H</option>
                             <option value="15 H">  15H </option>   
                             <option value="16 H"> 16H</option>
                            
                   </select>

                  </InputGroup>
                  <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td className="font-weight-bold">Nom</td>
                                                        <td>{this.state.nom}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">prenom</td>
                                                        <td>{this.state.prenom}</td>
                                                    </tr>
                                                  
                                                    <tr>
                                                        <td className="font-weight-bold">Email</td>
                                                        <td>{this.state.email}</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="font-weight-bold">Telephone</td>
                                                    <td>{this.state.tel}</td>
                                                </tr>
                                                    

                                                  
                                                  
                                                </tbody>
                                                

                                            </table>

       
{/*                 
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
                   <span>@</span>
                  </InputGroupText>
                </InputGroupAddon>
                    <Input defaultValue={this.state.email} required
                      onChange={evenement=>this.setState({email:evenement.target.value})} type="email" name="email" id="email" placeholder=" Email" />
                  </InputGroup>*/}

                  <Button onClick={this.handelSubmit.bind(this)} type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Envoyer</Button> 
          <Link to='/compte'>     <Button   type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Annuler</Button></Link>
             

</Form>
           
               
       </div>
      </div>
      </div>
   

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
    

      </div>
      
      );
  }
}

export default Forms;