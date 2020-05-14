import React, { Component } from 'react';
// import axios from 'axios'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios';

class ItemPatient extends Component {
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

    deletepatient = () => {
      const { item } = this.props
      axios.delete(`http://127.0.0.1:8000/patient/delete/${item.Id}`)
          .then(() => this.props.deletePatientReducer(item.Id))
          .catch((err) => alert(err))
  }

    // deleteadmin = () => {
    //     let token = localStorage.getItem("token");
    //     if (!token) {
    //         token = "";
    //     }
    //     const { item } = this.props
    //     axios.delete(`http://127.0.0.1:5001/admin/${item.id}`,
    //     {
    //         headers: {
    //             Authorization: 'Bearer ' + token
    //         }})
    //         .then(() => this.props.deleteAdminReducer(item.id))
    //         .catch((err) => alert(err))
    // }


    render() {
        const { item } = this.props
        return (

            <tr>
                <td >{item.nom} {item.prenom}</td>
                <td >{item.email}</td>
                <td >{item.address}</td>
                <td >{item.tel}</td>
                <td>{item.genre} </td>
          <td>{item.date_naissance}</td>
                <td >
                    <div className="row ">
                    <Link to={`/medecin/info/${item.Id}`}>
                        <div name="col-xs-4 col-md-3 d-flex justify-content-end">
                            <i className="fa fa-info-circle t-green fa-lg" onClick={this.getPatient}></i>
                        </div>
                     </Link>


                        <div className="col-xs-4 col-md-3 d-flex justify-content-center">
                            <i className="fa fa-trash t-red fa-lg" onClick={this.deletepatient} ></i>
                        </div>

                        <Link to={`/medecin/update`}>
                        <div className="col-xs-4 col-md-3 d-flex  justify-content-start">
                            <i className="fa fa-edit t-green fa-lg"></i>
                        </div>
                         </Link>
                    </div>
                </td>
            </tr>

            //    </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePatientReducer: Id => {
            dispatch({
                type: 'REMOVE_PATIENT',
                Id
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(ItemPatient);
