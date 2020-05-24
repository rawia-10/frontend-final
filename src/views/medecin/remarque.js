import React, { Component } from 'react';

import { ToastsContainer, ToastsStore } from 'react-toasts';
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
import { DateTime } from 'react-datetime-bootstrap';

class rqpatient extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
          collapse: true,
          fadeIn: true,
          timeout: 300,
          remarque:"",
    
        };
      }
    
      toggle() {
        this.setState({ collapse: !this.state.collapse });
      }
    
      toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState }});
      }
    
    
      onChange= (event) => {
        this.setState({remarque: event.target.value});
        
      }
     
      handelSubmit()
      {
        
          axios.post("http://localhost:5000/portfolio/addportfolio",{
            remarque:this.state.remarque,
         
         
          })
      .then(res=>{
        console.log("data",res.data);
        window.location.href="/#/home/listepatients"
      })
      
      }
      reset()
      {
          this.setState({remarque:""})
      }
  
      render() {
        return (
          <div className="animated fadeIn">
    
            <Row>
              <Col xs="12" md="12">
                <Card>
                  <CardHeader>
                    <strong>Ajout Patient</strong>
                  </CardHeader>
                  <CardBody>
                    <Form action=""  encType="multipart/form-data" className="form-horizontal">
    
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Remarque</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input   defaultValue={this.state.remarque}
                    onChange={evenement=>this.setState({remarque:evenement.target.value})}
                           type="textarea" id="text-input" name="text-input"/>
    
                        </Col>
                      </FormGroup>
    
    </Form>
                  </CardBody>
                  <CardFooter>
                    <Button onClick={this.handelSubmit.bind(this)} type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Ajouter</Button>
                    <Button  onClick={this.reset} type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Annuler</Button>
                  </CardFooter>
                </Card>
    
              </Col>
    
            </Row>
    
          </div>
        );
      }
    }
 
export default rqpatient;