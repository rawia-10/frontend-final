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
          image:"",
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




      <Row>
 <Col>
   <Card>
     
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
          <th>Photo</th>
         <th>nom et prénom</th>
        <th>adresse</th>
       <th>spécialité</th>
         <th>Action</th>
         </tr>
         </thead>

         <tbody>
    {currentTodos.filter(item => item.specialite.toUpperCase().includes(this.state.keyword.toUpperCase().trim())).map((item, index) =>{


       return(
         <tr key={index}>
            <td>   <img src={`http://localhost:5000/medecin/getfile/${item.image}`}height="50" width="50"/></td>
         <td>{item.nom} {item.prenom}</td>
         <td>{item.address}</td>
       <td>{item.specialite}</td>

        <td>
   
            <Link to={`/infomedecin/${item._id}`}>
      
            <button type="button" className="btn btn-info font-weight-bold  ">Prendre rendez-vous</button>
              </Link>
        </td>
         </tr>


       )

      })}

         </tbody>
       </Table>

       <nav>
   
   <Pagination>
    
    <PaginationItem>
      { prev === 0 ? <PaginationLink disabled>First</PaginationLink> :
        <PaginationLink onClick={this.handleFirstClick} id={prev} href={prev}>First</PaginationLink>
    }
    </PaginationItem>
    <PaginationItem>
      { prev === 0 ? <PaginationLink disabled>Prev</PaginationLink> :
        <PaginationLink onClick={this.handleClick} id={prev} href={prev}>Prev</PaginationLink>
    }
    </PaginationItem>
      {
        pageNumbers.map((number,i) =>
          <Pagination key= {i}>
            <PaginationItem active = {pageNumbers[currentPage-1] === (number) ? true : false} >
              <PaginationLink onClick={this.handleClick} href={number} key={number} id={number}>
                {number}
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        )}
  
      <PaginationItem>
        {
          currentPage === last ? <PaginationLink disabled>Next</PaginationLink> :
            <PaginationLink onClick={this.handleClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Next</PaginationLink>
        }
      </PaginationItem>
  
      <PaginationItem>
      {
        currentPage === last ? <PaginationLink disabled>Last</PaginationLink> :
        <PaginationLink onClick={this.handleLastClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Last</PaginationLink>
    }
    </PaginationItem>
    </Pagination>
    </nav>
             
                 
              

     </CardBody>
   </Card>
 </Col>
</Row>
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




export default Tables;

