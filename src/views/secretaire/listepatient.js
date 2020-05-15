import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

import {Link} from 'react-router-dom'

let prev  = 0;
let next  = 0;
let last  = 0;
let first = 0;
class Tables extends Component {

    constructor(){
        super()
        this.state={// declaration des attribue
            patient:[],
        currentPage: 1,
        todosPerPage: 5
  
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
         
       //apres constructor et avant render
       handleFirstClick(event) {
          
        event.preventDefault();
          
        this.setState({
             currentPage:1
           });
         }



handleClickEdit(e,id){
          e.preventDefault();
            console.log("id",id);
            localStorage.setItem("idc",id);
              window.location.href="/#/home/"
                         } 

getall(){
    /* fetch :get
    axios:post/put */
    fetch("http://localhost:5000/patient/getall",{method:"GET"})
    .then(response=>response.json())
    .then(data=>{
        console.log("patient",data) //juste pour le test
        this.setState({patient:data})
    })
}
componentDidMount()
{
this.getall()
}

handleClickDelete(e,id){
  e.preventDefault();
  console.log("id",id);
  this.remove(id);
           }
  
  
      
           
  remove(id)
  {
    fetch("http://localhost:5000/patient/delete/"+id,{method:"DELETE"})
    .then(response=>response.json())
    .then(data=>{
        console.log("remove",data) ;
        this.getall();
  }  )
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
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Liste des patient
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>name</th>
                    <th>prenom</th>
                    <th>date naissance</th>
                    <th>genre</th>
                    <th>email</th>
                    <th>adresse</th>
                    <th>Télephone</th>
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
                   {/* <td> <img src={`http://localhost:5000/patient/getfile/${item.image}`}height="50" width="50"/> */}
                  
                   <Link to={`/secretaire/info/${item._id}`}>
                    
                            <i className="fa fa-info-circle t-green fa-lg" onClick={this.getPatient}></i>
                       
                  </Link>

                  <i class='fa fa-edit fa-lg mt-4' style={{color:"green"}} 
                   onClick={evt=>this.handleClickEdit(evt,item._id)}
                   ></i>
                   
                    <i 
                   onClick={evt=>this.handleClickDelete(evt,item._id)}
                    
                    class='fa fa-trash fa-lg mt-4' style={{color:"red"}}
                    ></i></td>
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

        
      </div>

    );
  }
}

export default Tables;
