import React, { Component } from 'react';
import SearchField from 'react-search-field';
import { Badge, Card,Form, CardBody,Button, CardHeader, Col, Pagination, PaginationItem, PaginationLink,  Table 
, CardFooter,CardGroup,  Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row}
from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios'
import ItemSecretaire from './itemS'
import './List.css'
import { ToastsContainer, ToastsStore } from 'react-toasts';
import dotenv from  'dotenv'
let prev  = 0;
let next  = 0;
let last  = 0;
let first = 0;


class Tables extends Component {

    constructor(){
        super()
        this.state={



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


         componentDidMount = () => {
          let token = localStorage.getItem("token");
          if (!token) {
              token = "";
          }
          axios.get("http://127.0.0.1:8000/secretaire/list",

              {
                  headers: {
                      Authorization: 'Bearer ' + token
                  }
              }).then((res) => {
                  this.props.updateSecretaireReducer(res.data.data.data);
              }).catch(e => {
                  if (e.status === 401) {
                      this.props.history.push("login");
                    } else {
                        // show error
                    }
              });
        }



handlechange=(e)=>{
 this.setState({keyword:e.target.value}) 
}
  render() {
    let {secretaires, currentPage, todosPerPage} = this.props;


    return (
        <div>
        <ToastsContainer store={ToastsStore} />

       


      <section>
 



      <Row>
 <Col>
   <Card>
     <CardHeader>
       <i className="icon-list"></i> Liste des secretaire
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
       
         <th>Action</th>
         </tr>
         </thead>

         <tbody>
    {secretaires.filter(el => el.nom.toUpperCase().includes(this.state.keyword.toUpperCase().trim())).map((el, index) => <ItemSecretaire key={index} item={el} />)}
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

const mapStateToProps = (state) => {
  return {
    secretaires: state.secretaireReducer
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
      updateSecretaireReducer: secretaires => {
          dispatch({
              type: 'UPDATE_SECRETAIRE',
              secretaires
          })
      }
  }

  
}



export default connect(mapStateToProps, mapDispatchToProps)(Tables);

