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
            password:"",
            specialite:"",
            CreatedAt: "",
            UpdatedAt: ""
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
  <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Connexion
  </a>
  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    
  <Link to="loginpatient" >
  <a className="dropdown-item" >Patient</a>
  </Link>
  <Link to="loginsecretaire" >
    <a className="dropdown-item">Secretaire</a>
  </Link> 
  <Link to="loginmedecin" >
  <a className="dropdown-item">Medecin</a>
 </Link>

  </div>
</li>

 {/* <li className="nav-item dropdown">
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
</li> */}

                 
                 
                 
                  </ul>

  
                </div>
               
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section className="banner_partee">
     </section>
      <section>


{/* <div className="animated fadeIn"> */}


                 
                 
                   
      <section className="sign-in p-5">
         
          <div className="containere">
           
            <div className="signin-content ">
              <div className="signin-image col-lg-5">
               
              <img src={`http://localhost:5000/medecin/getfile/${this.state.image}`}height="250" width="250"/>
              </div>
              <div className="col-lg-4">
              <h3 className="font-weight-bold"> {this.state.nom} {this.state.prenom} </h3>
              <p className="text-muted">{this.state.address}</p>
              <p className="fa fa-phone"> {this.state.tel}  </p><br></br>
              <p className="fa fa-phone"> {this.state.fix}</p> <br></br>
              <p className="icon-envelope"> {this.state.email}</p>
             
              </div>
              </div>
              <hr style={{border: '1px solid black'}} />
              <table>
                <th> <h3>Qualification professionnelle</h3></th>
                <tr>
                  <td>
                  <b>Professionnel de santé </b>
                  
                  </td>
                  <td>
                  <h3 className="font-weight-bold"> {this.state.nom} {this.state.prenom} </h3>
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
              </table>
        
             
              
              

         <div className="signin-content ">
              <div className="signin-image col-lg-5">
               
              {/* <img src={`http://localhost:5000/medecin/getfile/${this.state.image}`}height="250" width="250"/> */}
              </div>
              <div className="col-lg-4">
              
              <Form method="" className="f" >


              <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                
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
                      onChange={evenement=>this.setState({prenom:evenement.target.value})}
                       type="text" id="text-input" name="text-input"/>
                    
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
                      <Label htmlFor="text-input">tel</Label>
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
                

</Form>
            
 




</Form>

    </div>
         </div>
          </div>
         
        </section>
              
                   
                
                        {/* <Row>
                            <Col xs="12" sm="12" md="12">
                                <Card>
                                    <CardBody>
                                        <h1 className="h1 text-center text-success font-weight-bold">Medecin Info</h1>
                                        <hr></hr>
                                        <div className="table-responsive">
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
                                                        <td className="font-weight-bold">Address</td>
                                                        <td>{this.state.address}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">Email</td>
                                                        <td>{this.state.email}</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="font-weight-bold">Telephone</td>
                                                    <td>{this.state.tel}</td>
                                                </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">genre</td>
                                                        <td>{this.state.genre}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">date naissance</td>
                                                        <td>{this.state.date_naissance}</td>
                                                    </tr>

                                                    <tr>
                                                        <td className="font-weight-bold">specialite</td>
                                                        <td>{this.state.specialite}</td>
                                                    </tr>

                                                   

                                                    <tr>
                                                        <td className="font-weight-bold">Created at</td>
                                                        <td>
                                                            <Moment format="DD-MM-YYYY">{this.state.createdAt}</Moment>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">Updated at</td>
                                                        <td>
                                                            <Moment format="DD-MM-YYYY">{this.state.updatedAt}</Moment>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <Link   to='medecin'>
                                                    <div className=" d-flex justify-content-start pl-5 ">
                                                        <button type="button" name="" id="" className="btn btn-danger listinfo font-weight-bold w-25 btn-lg ">
                                                            <i className="fa fa-refresh pr-3 "></i> <span >List</span></button>
                                                    </div>
                                                </Link>
                                            </table>

                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                   */}
                    
            </section>
           
            <footer className="footer-area">
  <div className="footer section_padding">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-xl-2 col-md-4 col-sm-6 single-footer-widget">
          <a href="#" className="footer_logo"> <img src="img/logo.png" alt="logo"/> </a>
        </div>
        <div className="col-xl-2 col-sm-6 col-md-4 single-footer-widget">
          <h4>Liens rapides</h4>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">A propos</a></li>

            <li><a href="#">Connexion</a></li>
          
          </ul>
        </div>
        <div className="col-xl-6 col-sm-6 col-md-6 single-footer-widget">
        <div className="regervation_part_iner">
        <form>
                  <h2>Envoyer Email</h2>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input type="email" className="form-control" id="inputEmail4" placeholder="Nom" />
                    </div>
                    <div className="form-group col-md-6">
                      <input type="password" className="form-control" id="inputPassword4" placeholder="Email " />
                    </div>
                    
                
                    <div className="form-group col-md-12">
                      <textarea className="form-control" id="Textarea" rows={4} placeholder="Message " defaultValue={""} />
                    </div>
                  </div>
                  <div className="regerv_btn">
                    <a href="#" className="btn_2">Envoyer</a>
                  </div>
                </form>
                </div>
              
        </div>
        
      </div>
    </div>
  </div>
  
</footer>


           
            </div>
        );
    }
}
export default Medecininfo;
