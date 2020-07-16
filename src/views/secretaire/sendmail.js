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
import axios from 'axios'


class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      rdv:{
        nom: "",
        prenom: "",
        email: "",
        tel: "",
       },
       to :'',
      subject : '',
      text : ''
    };
    // const [inputs, setInputs] = useState({email: '', name: '', subject: '', description: ''})
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  componentDidMount(){
    this.getOne();
    }
    
    getOne(){
        fetch("http://localhost:5000/rdv/getbyid/"+localStorage.getItem ("idc"),
        {method:"GET"})
          .then(response => response.json())
          .then(data => {
            console.log("GETONE", data);
            this.setState({rdv:data})    })
      }
    
     

  handelSubmit(){
   
     axios.post("http://localhost:5000/email/send",{
  
      to : this.state.rdv.email ,
      subject :'Rendez-vous accepter',
      text:'votre rdv est a: '+this.state.rdv.heure+'le'+this.state.rdv.date,
        })
        .then(res => {
            console.log("respose", res.data);
            if (res.data['status'] === "error") {
              alert(" verifier votre adresse")
            }
            else {
              alert("Email Envoyer ! ");
              window.location.href = "/#/home/listerendezvous"
            }
  
          })
      }

      
    
  
    reset()
    {
        this.setState({to:"",subject:"",text:""})
    }


    
onChange= (event) => {
  this.setState({to: event.target.value});
  this.setState({subject: event.target.value});
  this.setState({text: event.target.value});

 
}
  render() {
    return (
      <div className="animated fadeIn">
       
             
        <Row>
          
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Envoyer email</strong> 
              </CardHeader>
              <CardBody>
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-email">to</Label>
                    </Col>

                    <Col xs="12" md="9">
                      <Input type="email" id="hf-email" name="hf-email" 
                      placeholder="" autoComplete="email"
                      defaultValue={this.state.rdv.email}
                    onChange={event => this.setState({to: event.target.value})}/> 
                    </Col>


                  
                  </FormGroup>
                  {/* <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-password">subject</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="texte" placeholder="hello"
                       value={this.state.subject} 
                     onChange={evt => this.setState({subject: evt.target.value})}/>
                    </Col>
                  </FormGroup> */}

{/* 
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Text</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="Content..." 
                             defaultValue="votre rdv est accepter '{state.rdv.heure}'"
                    //  onChange={evt => this.setState({text: evt.target.value})}
                    />
                    </Col>
                  </FormGroup> */}
                </Form>
              </CardBody>
            
              <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick={this.handelSubmit.bind(this)}><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger" onClick={this.reset.bind(this)}><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    
    );
  }
}

export default Forms;