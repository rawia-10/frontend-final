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
            nom:"",
            prenom:"",
            heure:"",
            date:"",
            email:"",
            tel:"",

        };
    }
    handleChange = e => {
      if (e.target.name === 'nom') {
        this.setState({ nom: e.target.value });
      }
      if (e.target.name === 'prenom') {
        this.setState({ prenom: e.target.value });
      }
      if (e.target.name === 'heure') {
        this.setState({ heure: e.target.value });
      }
      if (e.target.name === 'date') {
        this.setState({ date: e.target.value });
      }
      if (e.target.name === 'email') {
        this.setState({ email: e.target.value });
      }
      if (e.target.name === 'tel') {
        this.setState({ tel: e.target.value });
      }
  
    
  
  
  
  
  
    };
  

    handleSubmit = () => {

      axios.post("http://localhost:5000/rdv/addrdv", {
        nom:this.state.nom,
        prenom:this.state.prenom,
        heure:this.state.heure,
        email:this.state.email,
        tel:this.state.tel,
        date:this.state.date,
  
  
      },
  
  
    )   .then(res=>{
      console.log("data",res.data)
      window.location.href="/#/loginsecretaire"
    })
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
              <div className="signin-image col-lg-5">
               
           
              </div>
              <div className="col-lg-4">
              
             
             


              <Form action="" method="" encType="multipart/form-data" className="form-horizontal">
                
                <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">nom</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.nom}
                      onChange={evenement=>this.setState({nom:evenement.target.value})}
                       type="text" id="text-input" name="text-input"/>
                    
                    </Col>
                  </FormGroup> 
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">prenom</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.prenom} 
                      onChange={evenement=>this.setState({renom:evenement.target.value})}
                       type="text" id="text-input"/>
                    
                    </Col>
                  </FormGroup> 
          
                  
                <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">date  </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input defaultValue={this.state.date} 
                      onChange={evenement=>this.setState({date:evenement.target.value})}
                       type="date" id="date-input" name="date-input"  />
                    </Col>
                  </FormGroup>
             

       

       
                  <FormGroup row>
                    <Col md="3">
                      <Label>Heure</Label>
                    </Col>
                    <Col md="9">
                    <select className="select-css" name="select" id="select" required placeholder="Genre"  defaultValue={this.state.heure}
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

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Téléphone</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.tel} 
                      onChange={evenement=>this.setState({tel:evenement.target.value})}
                       type="text" id="text-input" name="text-input"/>
                    
                    </Col>
                  </FormGroup>            
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.email} 
                      onChange={evenement=>this.setState({email:evenement.target.value})}
                       type="text" id="text-input" name="text-input"/>
                    
                    </Col>
                  </FormGroup>
                  <FormGroup>
                  <Button color="info" className="xl px-5 "   onClick={this.handleSubmit.bind(this)}>
              Envoyer</Button> 
                  </FormGroup>
                

</Form>
             
 






    </div>
         </div>
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
