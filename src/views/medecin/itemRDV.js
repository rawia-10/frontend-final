import React, { Component } from 'react';
// import axios from 'axios'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios';

class ItemRdv extends Component {
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

    deleterdv = () => {
      const { item } = this.props
      axios.delete(`http://127.0.0.1:8000/rdv/delete/${item.Id}`)
          .then(() => this.props.deleteRdvReducer(item.Id))
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
               <td >{item.tel}</td>
               <td>{item.date}</td>
               <td>{item.heure}</td>
                <td >
                    <div className="row ">
                    <Link to={`/medecin/info/${item.Id}`}>
                        <div name="col-xs-4 col-md-3 d-flex justify-content-end">
                            <i className="fa fa-info-circle t-green fa-lg" onClick={this.getRdv}></i>
                        </div>
                     </Link>


                        <div className="col-xs-4 col-md-3 d-flex justify-content-center">
                            <i className="fa fa-trash t-red fa-lg" onClick={this.deleteRdv} ></i>
                        </div>

                        <Link to={`/medecin/update/${item.Id}`}>
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
        deleteRdvReducer: Id => {
            dispatch({
                type: 'REMOVE_RDV',
                Id
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(ItemRdv);
