
import dotenv from  'dotenv'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import axios from 'axios';
import JwtDecode from 'jwt-decode';
import './loginadmin.css'




class LoginAdmin extends Component {
  constructor(props) {
		super(props);

		this.state = {
			collapse: true,
			fadeIn: true,
			timeout: 300,
		  email: "",
    password: "",
    EmailErr: "",
    PasswordErr: "",
    erreur:false
    };

    dotenv.config()

	}



  handleChange = (e) => {

		if (e.target.name === 'email') {
			this.setState({ email: e.target.value });
		}

		if (e.target.name === 'password') {
			this.setState({ password: e.target.value });
		}
	};


  Login=()=> {
    axios.post("http://localhost:5000/admin/login", {
      email:this.state.email,
      password:this.state.password
    })
      .then(res => {
  
        if (res.data['status'] === "error") {
          alert(" verifier votre login ou password")
        }
        else {
  
  
           console.log(res.data.data.token);
  
           //console.log(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(res)).data)).user);
  
  
  
              if (res.data.data.user.role.nom=== 'admin' ) {
                localStorage.setItem('role', res.data.data.user.role.nom);
                this.props.history.push('/admin/listesecretaire'); //redirection mrigla zeda
              }
        }
  
      })
  }
  
  // validate = () => {

  //   let isError = false;

  //   const errors = {
  //     EmailErr: "",
  //     PasswordErr: "",
  //   }

  //   console.log("login ",this.state.email);
  //   console.log("pws ",this.state.password);



  //   const regex1=/^[a-zA-Z0-9._-]+$/;


  //   if ((this.state.email==="")||(this.state.Emaemailil.length > 30)||!regex1.test(this.state.email)) {

  //     isError = true;
  //     errors.EmailErr = "Veuillez verifier votre Email";
  //   }


  //   if ((this.state.password==="")||(this.state.password.length > 20)) {

  //     isError = true;
  //     errors.PasswordErr = "veuillez verifier votre mot de passe";
  //   }



  //   if (isError) {
  //     this.setState({
  //       ...this.state,
  //       ...errors
  //     })
  //   }

  //   console.log("errrr ", isError)


  //   this.setState({
  //     erreur:isError
  //   })

  //   return isError;
  // }
  render() {
    return (
      <div className="y">
      <div className="app flex-row align-items-center ">
      <Container>
        <ToastsContainer store={ToastsStore} />
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Email"
                        autoComplete="off"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                      />
                    </InputGroup>
                    {

                      this.state.erreur===false ?

                          <p >{this.state.emailERR}</p>:null

                  }
                  {

                      this.state.erreur===true ?

                          <p style ={{color:"red", fontSize:'13px'}}>{this.state.emailERR}</p>:null

                  }
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Password"
                        autoComplete="current-off"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                      />
                    </InputGroup>
                    {

                      this.state.erreur===false ?

                          <p >{this.state.passwordERR}</p>:null

                  }
                  {

                      this.state.erreur===true ?

                          <p style ={{color:"red", fontSize:'13px'}}>{this.state.passwordERR}</p>:null

                  }
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4" onClick={this.Login}>
                          Login
                        </Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">
                          Forgot password?
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
    </div>

   );
  }
}

export default LoginAdmin;
