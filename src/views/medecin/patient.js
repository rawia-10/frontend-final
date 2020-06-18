import React, { Component } from 'react';
import SearchField from 'react-search-field';
import { Badge, Card,Form, CardBody,Button, CardHeader, Col, Pagination, PaginationItem, PaginationLink,  Table
, CardFooter,CardGroup, Modal, ModalBody, ModalFooter, ModalHeader, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row,
FormGroup,Label}
from 'reactstrap';
// import image from '../logo.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios'
import Itempatient from './itempatient'
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
        
          patient: [],
          currentPage: 1,
      todosPerPage: 5,
      info: false,
      remarque:"",
        keyword:""

    };
    this.toggleInfo = this.toggleInfo.bind(this);

    this.handleClick = this.handleClick.bind(this);

    this.handleLastClick = this.handleLastClick.bind(this);

    this.handleFirstClick = this.handleFirstClick.bind(this);
    }
   toggleInfo() {
    this.setState({
      info: !this.state.info,
    });
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
          fetch("http://localhost:5000/patient/getall", {method: "GET"})
            .then(response => response.json())

            .then(data => {
              console.log("patient", data);
              this.setState({patient: data})
            })
        }

        handelChange=(e)=>{
          this.setState({keyword:e.target.value})
        }

        handleChange = (e) => {
        
          if (e.target.name === "nom") {
            this.setState({ nom: e.target.value })
          }
          if (e.target.name === "prenom") {
            this.setState({ prenom: e.target.value })
          }
          if (e.target.name === "date") {
              this.setState({ date_naissance: e.target.value })
            }
          if (e.target.name === "address") {
            this.setState({ address: e.target.value })
          }
          if (e.target.name === "email") {
            this.setState({ email: e.target.value })
          }
          if (e.target.name === "telephone") {
            this.setState({ tel: e.target.value })
          }
          if (e.target.name === "genre") {
            this.setState({ genre: e.target.value })
          }
           
        }
       
      

   


  render() {

    let {patient, currentPage, todosPerPage} = this.state;


    // Logic for displaying current todos

    let indexOfLastTodo = currentPage * todosPerPage;

    let indexOfFirstTodo = indexOfLastTodo - todosPerPage;

    let currentTodos = patient.slice(indexOfFirstTodo, indexOfLastTodo);


    prev = currentPage > 0 ? (currentPage - 1) : 0;

    last = Math.ceil(patient.length / todosPerPage);

    next = (last === currentPage) ? currentPage : currentPage + 1;



    // Logic for displaying page numbers

    let pageNumbers = [];

    for (let i = 1; i <= last; i++) {
      pageNumbers.push(i);
    }


    return (
        <div>


      <section>

     

      <Row> 
          <Col xs="12" lg="6"><img src="../img/team.png" /> Patient</Col>
          <Col  xs="12" lg="6">
    {/* <Button color="info" onClick={this.toggleInfo}>Ajouter Remarque</Button> */}
     </Col>

        </Row>

      <Row>
     
      <Col xs="12" lg="12">
   <Card>
     <CardHeader>
     <i className="fa fa-align-justify"></i>  Liste des patients
     </CardHeader>
     <CardBody>
     <form action="#" class="menu_search_form">
        <input onChange={this.handelChange}
        type="text" class="menu_search_input" placeholder="Search" required="required"/>
        <button class="menu_search_button"><i class="fa fa-search" aria-hidden="true"></i></button>
</form>

       <Table hover bordered striped responsive size="xl">
         <thead>
         <tr>
         <th>name</th>
                    <th>prénom</th>
                    <th>date naissance</th>
                    <th>genre</th>
                    <th>email</th>
                    <th>adresse</th>
                    <th>Téléphone</th>
                    <th>Actions</th>
         </tr>
         </thead>

         <tbody>{
                   
                   currentTodos.map((item,index) =>{
                   return(
                   <tr key={index}>
                   <td>{item.nom}</td>
                   <td>{item.prenom}</td>
                   <td>{item.date_naissance}</td>
                   <td>{item.genre}</td>
                   <td>{item.email}</td>
                   <td>{item.address}</td>
                   <td>{item.tel}</td>
                   <td>
                   <Link to={`/medecin/info/${item._id}`}  className="view" title="view" data-toggle="tooltip">    <i className="fa fa-eye" style={{fontSize: '24px'}} /></Link>
                   {/* <Link to={`/medecin/info/${._id}`}>
                   <i className="fa fa-info-circle t-green fa-lg" onClick={this.getPatient}></i>
                  </Link> */}

                  
                   </td>
                   </tr>
                   );
                   })
                   }
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






      </div>
      );
  }
}




export default Tables;

