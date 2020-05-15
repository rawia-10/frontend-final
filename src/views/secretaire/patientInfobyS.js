import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import axios from 'axios'
import Moment from 'react-moment';
import { Link } from 'react-router-dom'



class PatientInfobyS extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            Id: this.props.match.params.Id,
            nom:"",
            prenom:"",
            address:"",
            genre:"",
            date_naissance:"",
            email:"",
            tel:"",
           
            password:"",
          
            CreatedAt: "",
            UpdatedAt: ""
        };
    }

    // getPatient = () => {
      
    //     fetch("http://localhost:5000/patient/getbyid", {method: "GET"})
    //     .then(response => response.json())

    //     .then(data => {
    //       console.log("patient", data);
    //       this.setState({patient: data})
    //     })
    
//   }
//   componentDidMount(){
//     this.getOne();
//     }
    
    getPatient(){
        fetch(`http://localhost:5000/patient/getbyid/${this.props.match.params._id}`)
        //   .then(response => response.json()) 
        .then((u) => {
            this.setState({
              nom: u.data.data.data.nom,
              prenom: u.data.data.data.prenom,
              address: u.data.data.data.address,
                email: u.data.data.data.email,
              
                tel: u.data.data.data.tel,
                genre: u.data.data.data.genre,
                date_naissance: u.data.data.data.date_naissance,
            
                CreatedAt: u.data.data.data.CreatedAt,
                UpdatedAt: u.data.data.data.UpdatedAt
            });
        })
        .catch((err) => alert(err))
        
        
        
        
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
                                                        <td className="font-weight-bold">date naissance</td>
                                                        <td>{this.state.date_naissance}</td>
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
                                                <Link   to='/home/listepatient'>
                                                    <div className=" d-flex justify-content-start pl-5 ">
                                                        <button type="button" name="" id="" className="btn btn-danger listinfo font-weight-bold w-25 btn-lg ">
                                                            <i className="fa fa-refresh pr-3 "></i> <span >List</span></button>
                                                    </div>
                                                </Link>
                                            </table>

                                        </div>
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
