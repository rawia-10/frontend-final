import React, { Component } from 'react';
import SearchField from 'react-search-field';
import { Badge, Card,Form, CardBody,Button, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } 
from 'reactstrap';
import { Link } from 'react-router-dom';

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
        todosPerPage: 5,
        keyword:"",
  
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
              window.location.href="/#/secretaire/update"
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


  handelChange=(e)=>{
    this.setState({keyword:e.target.value})
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
         <br></br>
         <Link to="/home/ajoutpatient">     <Button className="button1" color="info" style={{position: "absolute", right: "0"}}>Ajouter Patient</Button></Link>
        <Row> 
          <Col xs="12" lg="6"><img src="/img/team.png" style={{height: '500px width:50px'}} /> Patient</Col>
          <Col  xs="12" lg="6">
     
     </Col>
        </Row>
        <br></br>
     
        <Row>
          {/*  */}
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                 Liste Patient
              </CardHeader>
             <CardBody>
              <form action="#" class="menu_search_form">
        <input onChange={this.handelChange}
        type="text" class="menu_search_input" placeholder="Search" required="required"/>
        <button class="menu_search_button"><i class="fa fa-search" aria-hidden="true"></i></button>
         </form>
                <Table className="tablel" responsive bordered>
                  <thead>
                  <tr>
                  <th>nom </th>
                    <th>prénom</th>
                    {/* <th>date naissance</th>
                    <th>genre</th>
                    <th>email</th>*/}
                    <th>adresse</th> 
                    <th>Téléphone</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>{
                  //  currentTodos.filter(item =>item.nom.toUpperCase().includes(this.state.keyword.toUpperCase().trim())).map((item,index)=>{
                    currentTodos.map((item,index) =>{
                  return(
                   <tr key={index}>
                   <td>{item.nom} </td>
                   <td>{item.prenom}</td>
                   {/* <td>{item.date_naissance}</td> */}
                   {/* <td>{item.genre}</td>
                   <td>{item.email}</td> */}
                   <td>{item.address}</td>
                   <td>{item.tel}</td>
                   <td>
                  <div>


  <Link to={`/secretaire/info/${item._id}`}  className="view" title="view" data-toggle="tooltip">    <i className="fa fa-eye" style={{fontSize: '24px'}} /></Link> &nbsp; &nbsp;
  <i className="edit" title="Edit" data-toggle="tooltip"  onClick={evt=>this.handleClickEdit(evt,item._id)}  className="fa fa-edit" style={{fontSize: '24px',color:"green"}}></i> &nbsp; &nbsp;
  <i className="delete" title="Delete" data-toggle="tooltip" className="fa fa-trash-o" style={{fontSize: '24px', color: 'red'}} onClick={evt=>this.handleClickDelete(evt,item._id)}  ></i> &nbsp; &nbsp;

  </div>
                    </td>
                  </tr>
                 );
                })
                }
                  </tbody>
                </Table>
                <nav style={{right:"0"}}>
   
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
