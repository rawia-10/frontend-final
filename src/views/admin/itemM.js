import React, { Component } from 'react';
// import axios from 'axios'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios';

class Itemmedecin extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300
        };

    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }

   
    deletemedecin = () => {
        const { item } = this.props
        axios.delete(`http://127.0.0.1:8000/medecin/delete/${item.Id}`)
            .then(() => this.props.deletemedecinReducer(item.Id))
            .catch((err) => alert(err))
    }
   

    render() {
        const { item } = this.props
        return (

            <tr>
                <td >{item.nom} {item.prenom}</td>
                
                 <td >{item.specialite}</td> 
                 <td >{item.address}</td>
                
              
                <td >
                <div className="row ">
                     {/* <Link to={`/admin/medecininfo/${item.Id}`}>
                        <div name="col-xs-4 col-md-3 d-flex justify-content-end">
                            <i className="fa fa-info-circle t-green fa-lg" onClick={this.getMedecin}></i>
                        </div>
                        </Link> */}
                        <Link to={`/admin/medecininfo/${item.Id}`}>
                        <div name="col-xs-4 col-md-3 d-flex justify-content-start">
                    <button type="button" name="" id="" className="btn btn-info font-weight-bold "  >
                    <i className="fa fa-info pr-2"></i> info</button>
                     </div>
                     </Link>

                        <div name="col-xs-4 col-md-3 d-flex justify-content-start">
                    <button type="button" name="" id="" className="btn btn-success font-weight-bold "  >
                    <i className="fa fa-send pr-2"></i> Accept</button>
                     </div>

                    <div className="col-xs-4 col-md-3 d-flex  justify-content-start">

                    <button type="button" name="" id="" className="btn btn-dangerr font-weight-bold  ">
                    <i className="fa fa-refresh pr-2"></i> Refuse</button>
                  </div>
                           {/* 
                        <div className="col-xs-4 col-md-3 d-flex justify-content-center">
                            <i className="fa fa-trash t-red fa-lg" onClick={this.deletemedecin} ></i>
                        </div>
                        
                        <Link to={`/admin/update/${item.Id}`}>
                        <div className="col-xs-4 col-md-3 d-flex  justify-content-start">
                            <i className="fa fa-edit t-green fa-lg"></i>
                        </div>
                         </Link> */}
                    </div>
                </td>
            </tr>

            //    </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletemedecinReducer: Id => {
            dispatch({
                type: 'REMOVE_MEDECIN',
                Id
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(Itemmedecin);
