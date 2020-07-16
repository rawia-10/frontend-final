import React, { Component } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom'
import dotenv from  'dotenv'
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
import image from '../logo.png';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import axios from 'axios';
import JwtDecode from 'jwt-decode';
import Switch from "react-switch";


class Medecininfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            Id: this.props.match.params.Id,
            nom:"",
            prenom:"",
            address:"",
            genre:"",
            image:"",
            date_naissance:"",
            email:"",
            tel:"",
            assurance_maladie:"",
            fix:"",
            password:"",
            specialite:"",
            CreatedAt: "",
            UpdatedAt: "",
           
            patient:{
              tel:"",
              fix:"",
              nom:"",
            prenom:"",
            address:"",
            genre:"",
            image:"",
            date_naissance:"",
            email:"",
            assurance_maladie:"",
            diplome:""
            }
        };
    }

    getMedecin(){
        fetch(`http://localhost:5000/medecin/getbyid/${this.props.match.params.id}`,
        {method:"GET"})
          .then(response => response.json()) 
          .then(data => {
            console.log("GETONE", data);
       
            
            this.setState(data)           
        })
      }
    

  componentDidMount = () => {
      this.getMedecin();
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
              <Link to="login"><img src="assets/images/logo/logo.png" alt="" title /></Link>
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
           
            <div className="signin-content ">
              {/* <div className="signin-image col-lg-5"> */}
               
              <img src={`http://localhost:5000/medecin/getfile/${this.state.image}`}height="250" width="250"/>
              {/* </div> */}
              <div className="col-lg-4">
              <h2 className="font-weight-bold"> {this.state.nom} {this.state.prenom} </h2>
              <p className="text-muted">{this.state.address}</p>
              <p className="fa fa-phone"> {this.state.tel}  </p><br></br>
              <p className="fa fa-phone" style={{fontStyle:'bold'}}> {this.state.fix}</p> <br></br>
              <p className="icon-envelope"> {this.state.email}</p>
             
              </div>
              

              </div>
                <hr style={{border: '1px  black'}} />  
             
             
              
              <table>
                <th> <h3>Qualification professionnelle</h3></th>
                <tr>
                  <td>
                  <b>Professionnel de santé </b>
                  
                  </td>
                  <td>
                  <p className="font-weight-bold"> {this.state.nom} {this.state.prenom} </p>
                  </td>
                </tr>
                <tr>
                  <td>
                  <b>  Spécialités</b>
                  </td>
                  <td>
                  <p className="font-weight-bold">{this.state.specialite}</p>
                  </td>
                </tr>
              
                <th> <h3>Informations pratiques</h3></th>
                <tr>
                  <td>
                  <b>Assurance maladie</b>
                  
                  </td>
                  <td>
                  <p className="font-weight-bold"> {this.state.assurance_maladie}  </p>
                  </td>
                </tr>
                <th> <h3>Informations pratiques</h3></th>
                <tr>
                  <td>
                  <b>Diplome</b>
                  
                  </td>
                  <td>
                  <p className="font-weight-bold"> {this.state.diplome}  </p>
                  </td>
                </tr>
              </table>
        






        
             
              <Link to="/rdv">  <Button  type="submit" size="xl" color="primary"><i className="fa fa-dot-circle-o"></i> Prendre rendez-vous</Button></Link>
         
          </div>
         
        </section>
              
       {/* footer  */}           
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
export default Medecininfo;
