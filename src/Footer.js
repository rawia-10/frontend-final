
import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (

            <div>
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
 
export default Footer;