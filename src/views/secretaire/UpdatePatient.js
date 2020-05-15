

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
 import axios from 'axios';
 
 class Forms extends Component {
 
   constructor(props) {
     super(props);
 
     this.toggle = this.toggle.bind(this);
     this.toggleFade = this.toggleFade.bind(this);
     this.state = {
       collapse: true,
       fadeIn: true,
       timeout: 300,
       Id: this.props.match.params.id,
       patient:{
        nom: "",
        prenom: "",
        address: "",
        email: "",
        tel: "",
        date_naissance:"",
        genre:""
       },
       nom: "",
       prenom: "",
       address: "",
       email: "",
       tel: "",
       date_naissance:"",
       genre:"",
   } }
 
   toggle() {
     this.setState({ collapse: !this.state.collapse });
   }
 
   toggleFade() {
     this.setState((prevState) => { return { fadeIn: !prevState }});
   }



 
 
 
   reset()
   {
       this.setState({nom:""})
   }
 
 
 
 onchange= (event) => {
     this.setState({nom: event.target.value});
     this.setState({prenom: event.target.value});
     this.setState({email: event.target.value});
     this.setState({genre: event.target.value});
     this.setState({tel: event.target.value});
     this.setState({date_naissance: event.target.value});
     this.setState({address: event.target.value});
   }
 
  

 componentDidMount(){
 this.getOne();
 }
 
 getOne(){
     fetch("http://localhost:5000/patient/getbyid/"+localStorage.getItem ("idc"),
     {method:"GET"})
       .then(response => response.json())
       .then(data => {
         console.log("GETONE", data);
         this.setState({patient:data})    })
   }
 
   handelSubmit() {   
    console.log("state", this.state.nom,this.state.prenom ,this.state.email
    ,this.state.genre ,this.state.address,this.state.tel,this.state.date_naissance);
    if (this.state.nom === "") {
      this.state.nom= this.state.patient.nom
      }
       if (this.state.prenom === "") {
      this.state.prenom= this.state.patient.prenom
      }
      if (this.state.email === "") {
        this.state.email= this.state.patient.email
        }
         if (this.state.genre === "") {
        this.state.genre= this.state.patient.genre
        }
        
        if (this.state.address === "") {
          this.state.address= this.state.patient.address
          }
           if (this.state.tel === "") {
          this.state.tel= this.state.patient.tel
          }
          if (this.state.date_naissance === "") {
            this.state.date_naissance= this.state.patient.date_naissance
            }
             
            
        
     axios.put("http://localhost:5000/patient/update/" + localStorage.getItem("idc"),
       {
        nom:this.state.nom,
        prenom:this.state.prenom,
        genre:this.state.genre,
        address:this.state.address,
        email:this.state.email,
        password:this.state.password,
        tel:this.state.tel,
        date_naissance:this.state.date_naissance

         
       })
       .then(res => {
         console.log("data", res.data);
         window.location.href = "/#/home/listepatient"
       })  }
  





 render() {
     return (
       <div classnom="animated fadeIn">
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
                      <Input   defaultValue={this.state.patient.nom}
                     onChange={event => this.setState({nom: event.target.value})}
                       type="text" id="text-input" name="text-input"/>
  
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">prenom</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.patient.prenom}
                      onChange={this.handleChange}
                       type="text" id="text-input" name="text-input"/>

                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.patient.address}
                      onChange={this.handleChange}
                       type="text" id="text-input" name="text-input"/>

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="email-input">Email </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.patient.email}
                      onChange={this.handleChange}
                       type="email" id="email-input" name="email-input"  autoComplete="email"/>

                    </Col>
                  </FormGroup>



                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">date naissance </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input defaultValue={this.state.patient.date_naissance}
                     onChange={this.handleChange}
                       type="date" id="date-input" name="date-input"  />
                    </Col>
                  </FormGroup>
              

              <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="tel-input">telephone</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input defaultValue={this.state.patient.tel}
                      onChange={this.handleChange}
                      type="number" id="tel" name="tel" autoComplete="tel" />

                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Col md="3">
                      <Label>Genre</Label>
                    </Col>
                    <Col md="9">
                    <select className="select-css" name="select" id="select" required placeholder="Genre"  defaultValue={this.state.patient.genre}
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
                <Button onClick={this.handelSubmit} type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Envoyer</Button>
                <Button  onClick={this.reset} type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Annuler</Button>
              </CardFooter>
            </Card>

          </Col>

        </Row>

       </div>
     );
   }
 }
 
 export default Forms;
 