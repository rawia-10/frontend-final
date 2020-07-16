import React, { Component } from 'react';
import { Badge, Card,Form, CardBody,Button, CardHeader, Col, Pagination, PaginationItem, PaginationLink,  Table
    , CardFooter,CardGroup, Modal, ModalBody, ModalFooter, ModalHeader, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row,
    FormGroup,Label}
    from 'reactstrap';
import axios from 'axios'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { ToastsContainer, ToastsStore } from 'react-toasts';


class PatientInfobyS extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            patient:[],
            Id: this.props.match.params.Id,
            nom:"",
            prenom:"",
            address:"",
            genre:"",
            date_naissance:"",
            email:"",
            tel:"",
            
            remarque:"",
            password:"",
            CreatedAt: "",
            UpdatedAt: "",
            modal: false,
         success: false,
        };
        
    this.toggleSuccess = this.toggleSuccess.bind(this);
    }
    toggleSuccess() {
        this.setState({
          success: !this.state.success,
        });
      }
    
      getPatient(){
        fetch(`http://localhost:5000/patient/getbyid/${this.props.match.params.id}`,
        {method:"GET"})
          .then(response => response.json()) 
          .then(data => {
            console.log("GETONE", data);
       
            
            this.setState(data)           
        })
      }
    

  componentDidMount = () => {
      this.getPatient();
  }


 
  
 

    render() {
        return (
            <section>
                <div className='contact-list-container'>

                    <div className="animated fadeIn">
                   
                        <Row>
                            <Col xs="12" sm="12" md="12">
                                <Card>
                                    <CardBody>
                                        <h1 className="h1 text-center text-success font-weight-bold">Patient Info</h1>
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
                                                        <td className="font-weight-bold">date_naissance</td>
                                                        <td>{this.state.date_naissance}</td>
                                                    </tr>

                                                    <tr>
                                                        <td className="font-weight-bold">Remarque</td>
                                                        <td>{this.state.remarque}</td>
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
                                                <Link   to='/home/listepatients'>
                                                    <div className=" d-flex justify-content-start pl-5 ">
                                                        <button  name="" id="" className="btn btn-danger listinfo font-weight-bold w-25 btn-lg ">
                                                            <i className="fa fa-refresh pr-3 "></i> <span >List</span></button>
                                                    </div>
                                                </Link>
                                                
                                            <Link to={`/medecin/remarque`} > 
                                             <button type="button"  className="btn btn-info listinfo font-weight-bold w-25 btn-lg " onClick={this.toggleSuccess} >
                                                <i className="fa fa-plus-square pr-3 "></i> <span >Ajouter</span></button> 
                                             </Link>   
                                                

                                            </table>

                                        </div>
                                    </CardBody>
                                    <CardBody>
          
         

         
         
        </CardBody>
   </Card>
</Col>
 </Row>
                       
                    </div>
                </div>

            </section>

        );
    }
}
export default PatientInfobyS;
