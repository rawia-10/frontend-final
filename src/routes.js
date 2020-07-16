import React from 'react';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
//secrétaire
const ajoutpatient = React.lazy(() => import('./views/secretaire/ajoutpatient'));
const listepatient = React.lazy(() => import('./views/secretaire/listepatient'));
const ajoutrendezvous = React.lazy(() => import('./views/secretaire/ajoutrendezvous'));
const listerendezvous = React.lazy(() => import('./views/secretaire/listerendezvous'));
const LoginS =React.lazy(() => import('./views/Pages/LoginS/LoginS'));
const PatientInfobyS = React.lazy(() => import('./views/secretaire/patientInfobyS'));
const updateP = React.lazy(() => import('./views/secretaire/UpdatePatient'));
const sendmail = React.lazy(() => import('./views/secretaire/sendmail'));
const sendsms = React.lazy(() => import('./views/secretaire/sendsms'));
const secretaire = React.lazy(() => import('./views/secretaire/info'));
const updates = React.lazy(() => import('./views/secretaire/profil'));
//médecin
const listRDV = React.lazy(() => import('./views/medecin/rdv'));
const listeP = React.lazy(() => import('./views/medecin/patient'));
const LoginM =React.lazy(() => import('./views/Pages/LoginM/LoginM'));
const PatientInfo = React.lazy(() => import('./views/medecin/patientInfo'));
const remarqueP = React.lazy(() => import('./views/medecin/remarque'));
const updatePa = React.lazy(() => import('./views/medecin/UpdatePatient'));


//admin
const listeS = React.lazy(() => import('./views/admin/secretaire'));
const listeM = React.lazy(() => import('./views/admin/medecin'));
// const AdminLogin = React.lazy(() => import('./views/Pages/Login/loginA'));
const Medecininfo = React.lazy(() => import('./views/admin/medecininfo'));
const Secretaireinfo = React.lazy(() => import('./views/admin/secretaireinfo'));
const addsecretaire = React.lazy(() => import('./views/admin/ajoutsecretaire'));
const addmedecin = React.lazy(() => import('./views/admin/ajoutmedecin'));



//patient
const Infopatient=React.lazy(()=>import('./views/patient/infopatient'))
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },

  //secrétaire
  { path: '/home/ajoutpatient', exact: true, name: 'ajout patient', component: ajoutpatient },
  { path: '/home/listepatient', exact: true, name: 'liste patient', component: listepatient },
  { path: '/home/ajoutrendezvous', exact: true, name: 'ajout rendezvous', component: ajoutrendezvous },
  { path: '/home/listerendezvous', exact: true, name: 'liste rendezvous', component: listerendezvous },
   { path: '/secretaire/info/:id', exact: true, name: 'Patient info', component: PatientInfobyS },
  { path: '/secretaire/update', exact: true, name: 'Patient info', component: updateP },
  { path: '/secretaire/updates', exact: true, name: 'Patient info', component: updates },
  { path: '/secretaire/sendmail', exact: true, name: 'Patient info', component: sendmail },
  { path: '/secretaire/sendsms', exact: true, name: 'Patient info', component: sendsms },
  { path: '/secretaire/infos/:id', exact: true, name: 'secrétaire info', component: secretaire },
  //medecin
   { path: '/home/listepatients', exact: true, name: 'listepatient', component: listeP },
   { path: '/home/listerendezvouss', exact: true, name: 'liste rendezvous', component: listRDV },
   { path: '/medecin/info/:id', exact: true, name: 'Patient info', component: PatientInfo },
   { path: '/medecin/remarque', exact: true, name: 'Patient info', component: remarqueP },
   { path: '/medecin/update', exact: true, name: 'Patient info', component: updatePa },
  //admin
  // { path: '/admin/login',  exact: true, name: 'admin_login', component: AdminLogin },
  { path: '/admin/listesecretaire', exact: true, name: 'liste secretaire', component: listeS },
  { path: '/admin/listemedecin', exact: true, name: 'liste medecin', component: listeM },
  { path: '/admin/secretaireinfo/:id', exact: true, name: ' secretaire', component: Secretaireinfo },
  { path: '/admin/medecininfo/:id', exact: true, name: ' medecin', component: Medecininfo},
  { path: '/admin/ajoutsecretaire', exact: true, name: 'ajout  secretaire', component: addsecretaire},
  { path: '/admin/ajoutmedecin', exact: true, name: 'ajout  medecin', component: addmedecin},
 

  //patient
  { path: '/home/patientinfo/:id', exact: true, name: 'Infopatient', component: Infopatient},
];

export default routes;
