import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader,Button, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

import {Link} from 'react-router-dom'

let prev  = 0;
let next  = 0;
let last  = 0;
let first = 0;
class Tables extends Component {

    constructor(){
        super()
        this.state={// declaration des attribue
            medecin:[],
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




getall(){

    fetch("http://localhost:5000/medecin/getall",{method:"GET"})
    .then(response=>response.json())
    .then(data=>{
        console.log("medecin",data) //juste pour le test
        this.setState({medecin:data})
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
    fetch("http://localhost:5000/medecin/delete/"+id,{method:"DELETE"})
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
      <div className="animated fadeIn">
        <Row> 
          <Col xs="12" lg="6"><img src="/img/team.png" style={{height: '70px', width:'70px'}} /> medecin</Col>
          <Col  xs="12" lg="6">
     <Link to="/admin/ajoutmedecin">     <Button color="info">Ajouter medecin</Button></Link>
     </Col>
        </Row>
        <Row>
          {/*  */}
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                 Liste medecin
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
                  <th>Photo</th>
                  <th>nom </th>
                    <th>prenom</th>
                    <th>adresse</th> 
                    <th>Télephone</th>
                    <th>Spécialité</th>
                   
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>{
                   currentTodos.filter(item =>item.nom.toUpperCase().includes(this.state.keyword.toUpperCase().trim())).map((item,index)=>{
                   return(
                   <tr key={index}>
                   <td>   <img src={`http://localhost:5000/medecin/getfile/${item.image}`}height="50" width="50"/></td>

                   <td>{item.nom} </td>
                   <td>{item.prenom}</td>
                   <td>{item.address}</td>
                   <td>{item.tel}</td>
                   <td>{item.specialite}</td>
                   <td>

<Link to={`/admin/medecininfo/${item._id}`}>
<button type="button" name="" id="" className="btn btn-info font-weight-bold "  >
<i className="fa fa-info pr-2"></i> info</button>
</Link>
<button type="button" name="" id="" className="btn btn-success font-weight-bold "  >
<i className="fa fa-send pr-2"></i> Accept</button>
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
