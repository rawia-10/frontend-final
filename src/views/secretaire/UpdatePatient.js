import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import { connect } from 'react-redux'
import axios from 'axios'
import { ToastsContainer, ToastsStore } from 'react-toasts';



class UpdatePatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      Id: this.props.match.params.id,
      nom: "",
      prenom: "",
      address: "",
      email: "",
      tel: "",
      date_naissance:"",
      genre:"",
     
    };
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

  handleSubmit = () => {
    let token = localStorage.getItem("token");
    if (!token) {
        token = "";
    }
    axios.put("http://127.0.0.1:8000/patient/modify", {
      Id: this.state.Id,
      nom: this.state.nom,
      prenom: this.state.prenom,
      address: this.state.address,
      tel: this.state.tel,
      email: this.state.email,
      genre:this.state.genre,
     

    }, {
      headers: {
          Authorization: 'Bearer ' + token
      }
      }).then(success => {
        // if status 200 OK
        if (typeof (success.data.error) != "undefined" && success.data.error !== "") {
          ToastsStore.error(success.data.error)
        } else if (typeof (success.data.message) != "undefined" && success.data.message !== "") {
          ToastsStore.success(success.data.message)
          this.props.history.push("/home/listepatient");
        }
      }).catch(err => {
        if (err.status === 401) {
          this.props.history.push("login");
        }
        ToastsStore.error("Server error")
      })
  }

  getPatient = () => {

    axios.get(`http://127.0.0.1:8000/patient/get/${this.props.match.params.id}`,
        {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            }
        })

        .then((u) => {
            this.setState({
                nom: u.data.data.data.nom,
                prenom: u.data.data.data.prenom,
                address: u.data.data.data.address,
                email: u.data.data.data.email,
                tel: u.data.data.data.tel,
                date_naissance: u.data.data.data.date_naissance,
                genre: u.data.data.data.genre,
               
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
        {/*<ToastsContainer store={ToastsStore} />*/}
        <div className='contact-list-container'>
          <div className="animated fadeIn">
        

            <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Modifier Patient</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">

                  <FormGroup row>
                     <Col md="3">
                      <Label htmlFor="text-input">nom</Label>
                    </Col> 
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.nom}
                      onChange={this.handleChange}
                       type="text" id="text-input" name="text-input"/>

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">prenom</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.prenom}
                      onChange={this.handleChange}
                       type="text" id="text-input" name="text-input"/>

                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.address}
                      onChange={this.handleChange}
                       type="text" id="text-input" name="text-input"/>

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="email-input">Email </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.email}
                      onChange={this.handleChange}
                       type="email" id="email-input" name="email-input"  autoComplete="email"/>

                    </Col>
                  </FormGroup>



                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">date naissance </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input defaultValue={this.state.date_naissance}
                     onChange={this.handleChange}
                       type="date" id="date-input" name="date-input"  />
                    </Col>
                  </FormGroup>
              

              <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="tel-input">telephone</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input defaultValue={this.state.tel}
                      onChange={this.handleChange}
                      type="number" id="tel" name="tel" autoComplete="tel" />

                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Col md="3">
                      <Label>Genre</Label>
                    </Col>
                    <Col md="9">
                    <select className="select-css" name="select" id="select" required placeholder="Genre"  defaultValue={this.state.genre}
                    onChange={this.handleChange}>
                    <option value={"0"}> Choisir votre genre </option>
                            <option value="Femme"> Femme</option>
                             <option value="Homme">  Homme </option>        
                   </select>

                    </Col>
                  </FormGroup>

</Form>
              </CardBody>
              <CardFooter>
                <Button onClick={this.handleSubmit} type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Envoyer</Button>
                <Button  onClick={this.reset} type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Annuler</Button>
              </CardFooter>
            </Card>

          </Col>

        </Row>

         
          </div>
        </div>

      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    patient: state.patientReducer
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    PatientInfoReducer: patient => {
      dispatch({
        type: 'PATIENT_INFO',
        patient
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdatePatient);
