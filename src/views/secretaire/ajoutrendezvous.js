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
import * as ReactDOM from 'react-dom';import { TimePicker } from '@progress/kendo-react-dateinputs';
import axios from 'axios';
import { DateTime } from 'react-datetime-bootstrap';


class Forms extends Component {
  logs = [];
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      date:"",
      heure:"",
      email:"",
      tel:"",
      nom:"",
      prenom:"",
    
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  handelSubmit()
  {
      console.log("state",this.state.date, this.state.heure,this.state.tel,this.state.email,this.state.nom,this.state.prenom)
      axios.post("http://localhost:5000/rdv/addrdv",{
      date:this.state.date,
      heure:this.state.heure,
      tel:this.state.tel,
      email:this.state.email,
      nom:this.state.nom,
      prenom:this.state.prenom,
     
      })
.then(res=>{
    console.log("data",res.data);
    window.location.href="/#/home/listerendezvous"
})

  }


  reset()
  {
      this.setState({date:"",heure:"",email:"",tel:"",nom:"",prenom:""})
  }



onchange= (event) => {
    this.setState({date: event.target.value});
    this.setState({heure: event.target.value});
    this.setState({tel: event.target.value});
    this.setState({email: event.target.value});
    this.setState({nom: event.target.value});
    this.setState({prenom: event.target.value});
   
  }

  handleChange = (event) => {
    this.logs.unshift("change: " + event.target.value);

    
}
  render() {
    return (
      <div className="animated fadeIn">
       
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Ajout rendezvous</strong> 
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                
                <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">nom</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.nom} 
                      onChange={evenement=>this.setState({nom:evenement.target.value})}
                       type="text" id="text-input" name="text-input"/>
                    
                    </Col>
                  </FormGroup> 
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">prenom</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.prenom} 
                      onChange={evenement=>this.setState({prenom:evenement.target.value})}
                       type="text" id="text-input" name="text-input"/>
                    
                    </Col>
                  </FormGroup> 
          
                  
                <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">date  </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input defaultValue={this.state.date} 
                      onChange={evenement=>this.setState({date:evenement.target.value})}
                       type="date" id="date-input" name="date-input"  />
                    </Col>
                  </FormGroup>
             

       

       
 <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">heure</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.heure} 
                      onChange={evenement=>this.setState({heure:evenement.target.value})}
                       type="text" id="text-input" name="text-input"/>
                    
                    </Col>
                  </FormGroup> 
              
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">tel</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.tel} 
                      onChange={evenement=>this.setState({tel:evenement.target.value})}
                       type="text" id="text-input" name="text-input"/>
                    
                    </Col>
                  </FormGroup>            
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.email} 
                      onChange={evenement=>this.setState({email:evenement.target.value})}
                       type="text" id="text-input" name="text-input"/>
                    
                    </Col>
                  </FormGroup>
                

</Form>
              </CardBody>
              <CardFooter>
                <Button onClick={this.handelSubmit.bind(this)} type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Envoyer</Button>
                <Button  onClick={this.reset.bind(this)} type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Annuler</Button>
              </CardFooter>
            </Card>
            
          </Col>
         
        </Row>
      
      </div>
    );
  }
}

export default Forms;