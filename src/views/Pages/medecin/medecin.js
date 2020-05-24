import React, { Component } from 'react';
import SearchField from 'react-search-field';
import { Badge, Card,Form, CardBody,Button, CardHeader, Col, Pagination, PaginationItem, PaginationLink,  Table
, CardFooter,CardGroup,  Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row}
from 'reactstrap';
import image from '../logo.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios'
import ItemMedecin from './itemmedecin'
import './List.css'

import dotenv from  'dotenv'
let prev  = 0;
let next  = 0;
let last  = 0;
let first = 0;


class Tables extends Component {

    constructor(){
        super()
        this.state={

          medecin: [],
          currentPage: 1,
      todosPerPage: 5,

        keyword:""

    };
    this.handleClick = this.handleClick.bind(this);

    this.handleLastClick = this.handleLastClick.bind(this);

    this.handleFirstClick = this.handleFirstClick.bind(this);
    }

    handleClick(event) {

        event.preventDefault();

       this.setState({
             currentPage: Number(event.target.id)
           });
         }

 handleLastClick(event) {

        event.preventDefault();

         this.setState({
             currentPage:last
           });
         }
handleFirstClick(event) {

        event.preventDefault();

        this.setState({
             currentPage:1
           });
         }
         componentDidMount() {
          this.getAll();
        }

        getAll() {
          fetch("http://localhost:5000/medecin/getall", {method: "GET"})
            .then(response => response.json())

            .then(data => {
              console.log("medecin", data);
              this.setState({medecin: data})
            })
        }



handlechange=(e)=>{
 this.setState({keyword:e.target.value})
}
  render() {

    let {medecin, currentPage, todosPerPage} = this.state;


    // Logic for displaying current todos

    let indexOfLastTodo = currentPage * todosPerPage;

    let indexOfFirstTodo = indexOfLastTodo - todosPerPage;

    let currentTodos = medecin.slice(indexOfFirstTodo, indexOfLastTodo);


    prev = currentPage > 0 ? (currentPage - 1) : 0;

    last = Math.ceil(medecin.length / todosPerPage);

    next = (last === currentPage) ? currentPage : currentPage + 1;



    // Logic for displaying page numbers

    let pageNumbers = [];

    for (let i = 1; i <= last; i++) {
      pageNumbers.push(i);
    }


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


      <section>




      <Row>
 <Col>
   <Card>
     <CardHeader>
       <i className="icon-list"></i> Liste des medecins
     </CardHeader>
     <CardBody>
     <div class="search">
                      <input type="text" class="searchTerm" placeholder="Que cherchez-vous?" onChange={this.handlechange}/>
                      <button type="submit" class="searchButton">
                          <i class="fa fa-search"></i>
                      </button>
                  </div>
       <Table hover bordered striped responsive size="xl">
         <thead>
         <tr>
         <th>nom et prenom</th>
        <th>adresse</th>
       <th>specialite</th>
         <th>Action</th>
         </tr>
         </thead>

         <tbody>
    {currentTodos.filter(item => item.nom.toUpperCase().includes(this.state.keyword.toUpperCase().trim())).map((item, index) =>{


       return(
         <tr key={index}>
         <td>{item.nom} {item.prenom}</td>
         <td>{item.address}</td>
       <td>{item.specialite}</td>
         {/*fas en gras fa simple*/}
        <td>
        {/* <i class='fa fa-edit fa-lg mt-4' style={{color:"green"}} onClick = {evt => this.handleClickEdit(evt,item._id)}></i>
        <i class='fa fa-trash fa-lg mt-4' style={{color:"red"}}
          onClick = {evt => this.handleClickDelete(evt,item._id)}></i> */}
            <Link to={`/infomedecin/${item._id}`}>
      
            <button type="button" className="btn btn-info font-weight-bold  ">Prendre rendez-vous</button>
              </Link>
        </td>
         </tr>


       )

      })}

         </tbody>
       </Table>

     </CardBody>
   </Card>
 </Col>
</Row>
  </section>






      </div>
      );
  }
}




export default Tables;

