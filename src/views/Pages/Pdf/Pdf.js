import jsPDF from 'jspdf'
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
import { Link } from 'react-router-dom';


class App extends React.Component {
   
    constructor(props) {
        super(props)
        this.state ={
            date:"",
            heure:"",
            email:"",
            tel:"",
            nom:"",
            prenom:"",
        }
    };

    generatePDF = () => {
      var doc = new jsPDF('p', 'pt');
      

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
    doc.setFont('helvetica')
    doc.setFontType('normal')
      doc.text(20, 20, `${this.state.date}`)
      doc.text(20, 40, `${this.state.heure}`)
      doc.text(20, 60, `${this.state.nom}`)
      doc.text(20, 80, `${this.state.prenom}`)
      doc.setFont('helvetica')
      doc.setFontType('normal')
    //   doc.text(20, 60, 'This is the second title.')

    //   doc.setFont('helvetica')
    //   doc.setFontType('normal')
    //   doc.text(20, 100, 'This is the thrid title.')      

      doc.save('demo.pdf')
    }   
    
   render() {
      return (
         <div>
              <Form method="" className="f" >
                
                <InputGroup className="mb-3">
                     <InputGroupAddon addonType="prepend">
                     <InputGroupText>
                       <i className="icon-user"></i>
                     </InputGroupText>
                   </InputGroupAddon>
                       <Input defaultValue={this.state.nom} required
                         onChange={evenement=>this.setState({nom:evenement.target.value})} type="text" name="nom" id="nom" placeholder="nom" />
                     </InputGroup>
   
                     <InputGroup className="mb-3">
                     <InputGroupAddon addonType="prepend">
                     <InputGroupText>
                       <i className="icon-user"></i>
                     </InputGroupText>
                   </InputGroupAddon>
                       <Input defaultValue={this.state.prenom} required
                         onChange={evenement=>this.setState({prenom:evenement.target.value})} type="text" name="nom" id="nom" placeholder="prénom" />
                     </InputGroup> 
             
                     <InputGroup className="mb-3">
                     <InputGroupAddon addonType="prepend">
                     <InputGroupText>
                     <i className="icon-calendar"></i>
                     </InputGroupText>
                   </InputGroupAddon>
                       <Input defaultValue={this.state.date} required
                         onChange={evenement=>this.setState({date:evenement.target.value})} type="Date" name="re_pass" id="re_pass" placeholder="date" />
                    </InputGroup>
                
   
                    <InputGroup className="mb-3">
                     <InputGroupAddon addonType="prepend">
                     <InputGroupText>
                     <i className="fa fa-clock-o"></i> 
                     </InputGroupText>
                   </InputGroupAddon>
   
                     <select className="select-css" name="select" id="select" required placeholder="Heure"  defaultValue={this.state.heure}
                       onChange={evenement=>this.setState({heure:evenement.target.value})}>
                        <option value={"0"}> Choisir Heure </option>
                               <option value="8 H"> 8H</option>
                                <option value="9 H"> 9H </option>       
                                <option value="10 H"> 10H</option>
                                <option value="11 H">  11H </option>  
                                <option value="14 H"> 14H</option>
                                <option value="15 H">  15H </option>   
                                <option value="16 H"> 16H</option>
                               
                      </select>
   
                     </InputGroup>
   
          
                   
                     <InputGroup className="mb-3">
                     <InputGroupAddon addonType="prepend">
                     <InputGroupText>
                       <span>+216</span>
                     </InputGroupText>
                   </InputGroupAddon>
                       <Input defaultValue={this.state.tel} required
                         onChange={evenement=>this.setState({tel:evenement.target.value})} type="Number" name="re_pass" id="re_pass" placeholder="Téléphone" />
                     </InputGroup>
   
                     <InputGroup className="mb-3">
                     <InputGroupAddon addonType="prepend">
                     <InputGroupText>
                      <span>@</span>
                     </InputGroupText>
                   </InputGroupAddon>
                       <Input defaultValue={this.state.email} required
                         onChange={evenement=>this.setState({email:evenement.target.value})} type="email" name="email" id="email" placeholder=" Email" />
                     </InputGroup>
   
                     {/* <Button onClick={this.handelSubmit.bind(this)} type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Envoyer</Button>
                   <Button  onClick={this.reset.bind(this)} type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Annuler</Button> */}
                
   
   </Form>
          
            <button onClick={this.generatePDF} type="primary">Download PDF</button> 
         </div>
      );
   }
}

export default App;