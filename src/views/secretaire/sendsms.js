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
  
class sendsms extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          phone :'',
      subject : '',
      text : '',
         }
    }
    handelSubmit(){
   
        axios.post("http://localhost:5000/sms/send",{
     
         phone : this.state.phone ,
         text:this.state.text,
           })
           .then(res => {
               console.log("respose", res.data);
               if (res.data['status'] === "error") {
                 alert(" verifier votre adresse")
               }
               else {
                 alert("sms est envoyer ! ");
                 window.location.href = "/#/home/listerendezvous"
               }
     
             })
         }
   
         
       
     
       reset()
       {
           this.setState({phone:"",text:""})
       }
   
   
       
   onChange= (event) => {
     this.setState({phone: event.target.value});
     this.setState({text: event.target.value});
   
    
   }


    render() { 
        return ( <div>
            
       
             
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
                     defaultValue={this.state.phone}
                     onChange={evenement=>this.setState({phone:evenement.target.value})} />
                   </Col>

                 </FormGroup>
             

                 <FormGroup row>
                   <Col md="3">
                     <Label htmlFor="textarea-input">Text</Label>
                   </Col>
                   <Col xs="12" md="9">
                     <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                            placeholder="message..." 
                            value={this.state.text} 
                    onChange={evt => this.setState({text: evt.target.value})}/>
                   </Col>
                 </FormGroup>
               </Form>
             </CardBody>
           
             <CardFooter>
             {/*  */}
               <Button type="submit" size="sm" onClick={this.handelSubmit.bind(this)} color="primary" ><i className="fa fa-dot-circle-o"></i> Submit</Button>
               <Button type="reset" size="sm" color="danger" ><i className="fa fa-ban"></i> Reset</Button>
             </CardFooter>
           </Card>
         </Col>
       </Row>
    
   
        </div> );
    }
}
 
export default sendsms;