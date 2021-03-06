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
        this.state={
        rendezvous:[],
        currentPage: 1,
        todosPerPage: 5,
        date:"",
        heure:"",
        lieu:"",
        etat:"",
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
    
         

 getall(){
            /* fetch :get
            axios:post/put */
            fetch("http://localhost:5000/rdv/getall",{method:"GET"})
            .then(response=>response.json())
            .then(data=>{
                console.log("rendezvous",data) //juste pour le test
                this.setState({rendezvous:data})
            })
        }
componentDidMount()
        {
        this.getall()
        }

            
            
                
           
handleClickEdit(e,id){
  e.preventDefault();
    console.log("id",id);
    localStorage.setItem("idc",id);
      window.location.href="/#/secretaire/sendmail"
                 }           
        
            
 handelChange=(e)=>{
              this.setState({keyword:e.target.value})
            }
  render() {
    let {rendezvous, currentPage, todosPerPage} = this.state;

 
    // Logic for displaying current todos
    
    let indexOfLastTodo = currentPage * todosPerPage;
      
  let indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      
  let currentTodos = rendezvous.slice(indexOfFirstTodo, indexOfLastTodo);
  
     
   prev = currentPage > 0 ? (currentPage - 1) : 0;
     
   last = Math.ceil(rendezvous.length / todosPerPage);
      
  next = (last === currentPage) ? currentPage : currentPage + 1;
  
  
    
    // Logic for displaying page numbers
      
  let pageNumbers = [];
     
   for (let i = 1; i <= last; i++) {
        pageNumbers.push(i);
      }
  
    return (
       
             
      <div className="animated fadeIn">
       <br></br>
       <Link to="/home/ajoutrendezvous">     <Button className="button1" color="info" style={{position: "absolute", right: "0"}}>Ajouter rendez-vous</Button></Link>
    
        <Row>
       <Col xs="12" lg="6"><img src="../img/rdv.png" /> Rendez-vous</Col>
      
        </Row>


        <Row>

         
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>  Liste rendezvous
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
                  <th>nom & prenom</th>
                    <th>date</th>
                    <th>heure</th>
                    <th>email</th>
                    <th>Téléphone</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>{
                   
                   currentTodos.filter(item =>item.date.toUpperCase().includes(this.state.keyword.toUpperCase().trim())).map((item,index)=>{
                   return(
                   <tr key={index}>
                       <td>{item.nom} {item.prenom}</td>
                   <td>{item.date}</td>
                   <td>{item.heure}</td>
                   <td>{item.email}</td>
                   <td>{item.tel}</td>
                  
                   <td>
                  {/* // <div className="App"> */}
       
                  <Link to="/secretaire/sendmail">
                    <button type="button" name="" id="" onClick={evt=>this.handleClickEdit(evt,item._id)} className="btn btn-success font-weight-bold "  >
                    <i className="fa fa-send pr-2"></i> Accept</button>
                    </Link>

                    <button type="button" name="" id="" className="btn btn-dangerr font-weight-bold  ">
                    <i className="fa fa-refresh pr-2"></i> Refuse</button>
                  
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

      </div>

    );
  }
}

export default Tables;