

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
       secretaire:{
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
 
 
 
 onChange= (event) => {
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
     fetch("http://localhost:5000/secretaire/getbyid/"+localStorage.getItem ("id"),
     {method:"GET"})
       .then(response => response.json())
       .then(data => {
         console.log("GETONE", data);
         this.setState({secretaire:data})    })
   }
 
   handelSubmit() {   
    // console.log("state", this.state.nom,this.state.prenom ,this.state.email
    // ,this.state.genre ,this.state.address,this.state.tel,this.state.date_naissance);
    if (this.state.nom === "") {
      this.state.nom= this.state.secretaire.nom
      }
       if (this.state.prenom === "") {
      this.state.prenom= this.state.secretaire.prenom
      }
      if (this.state.email === "") {
        this.state.email= this.state.secretaire.email
        }
         if (this.state.genre === "") {
        this.state.genre= this.state.secretaire.genre
        }
        
        if (this.state.address === "") {
          this.state.address= this.state.secretaire.address
          }
           if (this.state.tel === "") {
          this.state.tel= this.state.secretaire.tel
          }
          if (this.state.date_naissance === "") {
            this.state.date_naissance= this.state.secretaire.date_naissance
            }
             
            
        
     axios.put("http://localhost:5000/secretaire/update/" + localStorage.getItem("id"),
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
         window.location.href = "/#/secretaire/infos/:id"
       })  }
  





 render() {
     return (
       <div classnom="animated fadeIn">
         <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Modifier secretaire</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">

                  <FormGroup row>
                     <Col md="3">
                      <Label htmlFor="text-input">nom</Label>
                    </Col> 
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.secretaire.nom}
                     onChange={event => this.setState({nom: event.target.value})}
                       type="text" id="text-input" name="text-input"/>
  
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">prénom</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.secretaire.prenom}
                      onChange={event => this.setState({prenom: event.target.value})}
                       type="text" id="text-input" name="text-input"/>

                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">adresse</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.secretaire.address}
                        onChange={event => this.setState({address: event.target.value})}
                       type="text" id="text-input" name="text-input"/>

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="email-input">Email </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.secretaire.email}
                        onChange={event => this.setState({email: event.target.value})}
                       type="email" id="email-input" name="email-input"  autoComplete="email"/>

                    </Col>
                  </FormGroup>



                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">date naissance </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input defaultValue={this.state.secretaire.date_naissance}
                    onChange={event => this.setState({date_naissance: event.target.value})}
                       type="date" id="date-input" name="date-input"  />
                    </Col>
                  </FormGroup>
              

              <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="tel-input">Téléphone</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input defaultValue={this.state.secretaire.tel}
                       onChange={event => this.setState({tel: event.target.value})}
                      type="number" id="tel" name="tel" autoComplete="tel" />

                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Col md="3">
                      <Label>Genre</Label>
                    </Col>
                    <Col md="9">
                    <select className="select-css" name="select" id="select" required placeholder="Genre"  defaultValue={this.state.secretaire.genre}
                   onChange={event => this.setState({genre: event.target.value})}>
                    <option value={"0"}> Choisir votre genre </option>
                            <option value="Femme"> Femme</option>
                             <option value="Homme">  Homme </option>        
                   </select>

                    </Col>
                  </FormGroup>

</Form>
              </CardBody>
              <CardFooter>
                <Button onClick={this.handelSubmit.bind(this)} type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Envoyer</Button>
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
 