import React, { Component } from 'react';
import SearchField from 'react-search-field';
import { Badge, Card,Form, CardBody,Button, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table }
from 'reactstrap';
import { connect } from 'react-redux'
import axios from 'axios'
import ItemPatient from './itempatient'
import './List.css'
let prev  = 0;
let next  = 0;
let last  = 0;
let first = 0;


class Tables extends Component {

    constructor(){
        super()
        this.state={

   patient:[],
   nom:"",
   prenom:"",
   address:"",
   genre:"",
   date_naissance:"",
   email:"",
   tel:"",
   password:"",

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


            handlechange=(e)=>{
              this.setState({keyword:e.target.value})

                        }
  render() {
    let {patients, currentPage, todosPerPage} = this.props;


    return (



      <section>
     






      <Row>
 <Col>
   <Card>
     <CardHeader>
       <i className="icon-list"></i> Liste des patients
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
         <th>nom</th>
          <th>prenom</th>
            <th>adresse</th>
              <th>Telephone</th>
             <th>genre</th>
          <th>date naissance</th>
         <th>Action</th>
         </tr>
         </thead>

         <tbody>
    {patients.filter(el => el.nom.toUpperCase().includes(this.state.keyword.toUpperCase().trim())).map((el, index) => <ItemPatient key={index} item={el} />)}
         </tbody>
       </Table>

     </CardBody>
   </Card>
 </Col>
</Row>

  </section>





      );
  }
}

const mapStateToProps = (state) => {
  return {
      patients: state.patientReducer
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
      updatePatientReducer: patients => {
          dispatch({
              type: 'UPDATE_PATIENT',
              patients
          })
      }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Tables);

