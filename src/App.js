import React, { Component } from 'react';
import { HashRouter, Route,Router, Switch,Redirect, BrowserRouter} from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';


// import Navbar from './Navbar';
// import Footer from './Footer'
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const AdminLogin = React.lazy(() => import('./views/Pages/Login/loginA'));
const Reset = React.lazy(() => import('./views/Pages/Reset'));
const Newpwd = React.lazy(() => import('./views/Pages/Newpwd'));
const Login = React.lazy(() => import('./views/Pages/Login'));
const Logins = React.lazy(() => import('./views/Pages/LoginS'));
const LoginM = React.lazy(() => import('./views/Pages/LoginM'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const LoginAdmin = React.lazy(() => import('./views/Pages/LoginAdmin'));
const RegisterM =React.lazy(()=>import('./views/Pages/RegisterM'));
const Patient =React.lazy(()=>import('./views/Pages/Info.js'));
const LoginP =React.lazy(()=>import('./views/Pages/LoginP'));
const Medecin =React.lazy(()=>import('./views/Pages/medecin'));
const Medecininfo =React.lazy(()=>import('./views/Pages/medecin'));
const Rdv =React.lazy(()=>import('./views/Pages/Rdv'));
const RegisterP = React.lazy(() => import('./views/Pages/RegisterP'));
const Infomedecin  = React.lazy(() => import('./views/Pages/medecin/medecinInfo'))
const Pdf  = React.lazy(() => import('./views/Pages/Pdf'))
class App extends Component {
 

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
          {/* <Navbar/> */}
            <Switch>
            {/* <Route exact path="/loginadmin" name="Login admin Page" render={props => <AdminLogin {...props}/>} /> */}
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/loginsecretaire" name="Login Page" render={props => <Logins {...props}/>} />
              <Route exact path="/reset" name="Login Page" render={props => <Reset {...props}/>} />
              <Route exact path="/reset/:token" name="Login Page" render={props => <Newpwd {...props}/>} />
              <Route exact path="/loginmedecin" name="Login Page" render={props => <LoginM {...props}/>} />
              <Route exact path="/loginpatient" name="Login Page" render={props => <LoginP {...props}/>} />
              <Route exact path="/infomedecin/:id" name="Login Page" render={props => <Infomedecin {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />7
              <Route exact path="/registerP" name="Register Page" render={props => <RegisterP {...props}/>} />
              <Route exact path="/registerM" name="Register Page" render={props => <RegisterM {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/login/admin" name="Page 500" render={props => <LoginAdmin {...props}/>} />

              <Route exact path="/pdf" name="Page 500" render={props => <Pdf {...props}/>} />
            
              <Route exact path="/patient/:id" name="Page Patient" render={props => <Patient {...props}/>} />  
              <Route exact path="/Medecin" name="Page Medecin" render={props => <Medecin {...props}/>} /> 
              <Route exact path="/rdv" name="Page rendez-vous" render={props => <Rdv {...props}/>} /> 

              <Route exact path="/Medecininfo" name="Page Medecin" render={props => <Medecininfo {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
              
              </Switch>
              {/* <Footer/> */}
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
