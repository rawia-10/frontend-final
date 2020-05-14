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
    
    
      handleSubmit = () => {
    
    
        let token = localStorage.getItem("token");
        if (!token) {
            token = "";
        }
        axios.post("http://127.0.0.1:8000/patient/register/${item.Id}", {
          remarque:this.state.remarque,
          
    
        },
    
      ).then(success => {
          // if status 200 OK
          if (typeof (success.data.error) != "undefined" && success.data.error !== "") {
            ToastsStore.error(success.data.error)
          } else if (typeof (success.data.message) != "undefined" && success.data.message !== "") {
            ToastsStore.success(success.data.message)
            this.props.history.push("/home/listepatients");
          }
        }).catch(err => {
          ToastsStore.error("Server error")
        })
    
    }
    
    
      reset()
      {
          this.setState({remarque:""})
      }
    
    
    
    onchange= (event) => {
        this.setState({remarque: event.target.value});
        
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
                    <Button onClick={this.handleSubmit} type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Ajouter</Button>
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