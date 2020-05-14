import React, { Component } from 'react';
import SearchField from 'react-search-field';
import { Badge, Card,Form, CardBody,Button, CardHeader, Col, Pagination, PaginationItem, PaginationLink,  Table
, CardFooter,CardGroup,  Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row}
from 'reactstrap';
import image from '../logo.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios'
import ItemMedecin from './itemmedecin'
import './List.css'

import dotenv from  'dotenv'
let prev  = 0;
let next  = 0;
let last  = 0;
let first = 0;


class Tables extends Component {

    constructor(){
        super()
        this.state={

          medecin: [],
          currentPage: 1,
      todosPerPage: 5,

        keyword:""

    };
    this.handleClick = this.handleClick.bind(this);

    this.handleLastClick = this.handleLastClick.bind(this);

    this.handleFirstClick = this.handleFirstClick.bind(this);
    }

    handleClick(event) {

        event.preventDefault();

       this.setState({
             currentPage: Number(event.target.id)
           });
         }

 handleLastClick(event) {

        event.preventDefault();

         this.setState({
             currentPage:last
           });
         }
handleFirstClick(event) {

        event.preventDefault();

        this.setState({
             currentPage:1
           });
         }
         componentDidMount() {
          this.getAll();
        }

        getAll() {
          fetch("http://localhost:5000/medecin/getall", {method: "GET"})
            .then(response => response.json())

            .then(data => {
              console.log("medecin", data);
              this.setState({medecin: data})
            })
        }



handlechange=(e)=>{
 this.setState({keyword:e.target.value})
}
  render() {

    let {medecin, currentPage, todosPerPage} = this.state;


    // Logic for displaying current todos

    let indexOfLastTodo = currentPage * todosPerPage;

    let indexOfFirstTodo = indexOfLastTodo - todosPerPage;

    let currentTodos = medecin.slice(indexOfFirstTodo, indexOfLastTodo);


    prev = currentPage > 0 ? (currentPage - 1) : 0;

    last = Math.ceil(medecin.length / todosPerPage);

    next = (last === currentPage) ? currentPage : currentPage + 1;



    // Logic for displaying page numbers

    let pageNumbers = [];

    for (let i = 1; i <= last; i++) {
      pageNumbers.push(i);
    }


    return (
        <div>


        <header class="header" id="header">
   <div>
     <div class="header_top">
       <div class="container">
         <div class="row">
           <div class="col">
             <div class="header_top_content d-flex flex-row align-items-center justify-content-start">
               <div class="logo">
               <img  src={image} alt=""/>
               </div>
               <div class="header_top_extra d-flex flex-row align-items-center justify-content-start ml-auto">


<div className="p-3 d-flex bout">
<Link to="loginpatient">
          <button type="button" class="btn btn-danger patient">
        <span>Patient</span>
          </button></Link>

          <Link to="loginmedecin">
          <button type="button" class="btn btn-danger med">
            <span>Medecin</span>
          </button></Link>

          <Link to="loginsecretaire">
          <button type="button" class="btn btn-danger secreatire">
          <span>Secretaire</span>
          </button></Link>

         </div>
               </div>
               <div class="hamburger ml-auto"><i class="fa fa-bars" aria-hidden="true"></i></div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div class="header_nav" id="header_nav_pin">
       <div class="header_nav_inner">
         <div class="header_nav_container">
           <div class="container">
             <div class="row">
               <div class="col">
                 <div class="header_nav_content d-flex flex-row align-items-center justify-content-start">
                   <nav class="main_nav">
                     <ul class="d-flex flex-row align-items-center justify-content-start">
                       <li><a href="index.html">Accueil</a></li>
                       <li><a href="about.html">A Propos</a></li>
                       <li><a href="services.html">Services</a></li>
                       {/* <li><a href="news.html">News</a></li> */}
                       <Link to="contact" class="wht"><li>Contact</li></Link>
                     </ul>
                   </nav>
                   <div class="search_content d-flex flex-row align-items-center justify-content-end ml-auto">
                     <form action="#" id="search_container_form" class="search_container_form">
                       <input type="text" class="search_container_input" placeholder="Search" required="required"/>
                       <button class="search_container_button"><i class="fa fa-search" aria-hidden="true"></i></button>
                     </form>
                   </div>




                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </header>

 <div class="menu trans_500"></div>
 <div class="homee"></div>


      <section>




      <Row>
 <Col>
   <Card>
     <CardHeader>
       <i className="icon-list"></i> Liste des medecins
     </CardHeader>
     <CardBody>
     <div class="search">
                      <input type="text" class="searchTerm" placeholder="Que cherchez-vous?" onChange={this.handlechange}/>
                      <button type="submit" class="searchButton">
                          <i class="fa fa-search"></i>
                      </button>
                  </div>
       <Table hover bordered striped responsive size="xl">
         <thead>
         <tr>
         <th>nom et prenom</th>
        <th>adresse</th>
       { /*<th>specialite</th>*/}
         <th>Action</th>
         </tr>
         </thead>

         <tbody>
    {currentTodos.filter(item => item.nom.toUpperCase().includes(this.state.keyword.toUpperCase().trim())).map((item, index) =>{


       return(
         <tr key={index}>
         <td>{item.nom} {item.prenom}</td>
         <td>{item.address}</td>

         {/*fas en gras fa simple*/}
        <td>
        <i class='fa fa-edit fa-lg mt-4' style={{color:"green"}} onClick = {evt => this.handleClickEdit(evt,item._id)}></i>
        <i class='fa fa-trash fa-lg mt-4' style={{color:"red"}}
          onClick = {evt => this.handleClickDelete(evt,item._id)}></i>
        </td>
         </tr>


       )

      })}

         </tbody>
       </Table>

     </CardBody>
   </Card>
 </Col>
</Row>
  </section>






  <footer className="footer">
  <div className="parallax_background parallax-window k" data-parallax="scroll" data-speed="0.8" />
  <div className="footer_content">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 footer_col">
          <div className="footer_about">
            <div className="logo">
              <a href="#">Medium<span /></a>
            </div>
            <div className="footer_about_text">Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</div>
            <div className="footer_social">
              <ul className="d-flex flex-row align-items-center justify-content-start">
                <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-behance" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
              </ul>
            </div>
            <div className="copyright">
              Copyright © All rights reserved | This template is made with
              <i className="fa fa-heart-o" aria-hidden="true" /> by
              <a href="https://colorlib.com" target="_blank">Rawia Agili</a>
            </div>
          </div>
        </div>
        <div className="col-lg-5 footer_col">
          <div className="footer_contact">
            <div className="footer_contact_title">Quick Contact</div>
            <div className="footer_contact_form_container">
              <form action="#" className="footer_contact_form" id="footer_contact_form">
                <div className="d-flex flex-xl-row flex-column align-items-center justify-content-between">
                  <input type="text" className="footer_contact_input" placeholder="Name" required="required" />
                  <input type="email" className="footer_contact_input" placeholder="E-mail" required="required" />
                </div>
                <textarea className="footer_contact_input footer_contact_textarea" placeholder="Message" required="required" defaultValue={""} />
                <button className="footer_contact_button">send message</button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-4 footer_col">
          <div className="footer_hours">
            <div className="footer_hours_title">Opening Hours</div>
            <ul className="hours_list">
              <li className="d-flex flex-row align-items-center justify-content-start">
                <div>Monday – Thursday</div>
                <div className="ml-auto">8.00 – 19.00</div>
              </li>
              <li className="d-flex flex-row align-items-center justify-content-start">
                <div>Friday</div>
                <div className="ml-auto">8.00 - 18.30</div>
              </li>
              <li className="d-flex flex-row align-items-center justify-content-start">
                <div>Saturday</div>
                <div className="ml-auto">9.30 – 17.00</div>
              </li>
              <li className="d-flex flex-row align-items-center justify-content-start">
                <div>Sunday</div>
                <div className="ml-auto">9.30 – 15.00</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer_bar">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="footer_bar_content d-flex flex-sm-row flex-column align-items-lg-center align-items-start justify-content-start">
            <nav className="footer_nav">
              <ul className="d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="news.html">News</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
            <div className="footer_links">
              <ul className="d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                <li><a href="#">Help Desk</a></li>
                <li><a href="#">Emergency Services</a></li>
                <li><a href="#">Appointment</a></li>
              </ul>
            </div>
            <div className="footer_phone ml-lg-auto">
              <i className="fa fa-phone" aria-hidden="true" />
              <span>+34 586 778 8892</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>


      </div>
      );
  }
}




export default Tables;

