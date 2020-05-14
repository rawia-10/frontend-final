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

   

   

    render() {
        const { item } = this.props
        return (

            <tr>
                <td >{item.nom} {item.prenom}</td>
                <td >{item.address}</td>
                 <td >{item.specialite}</td> 
                
              
                <td >
                    <div className="row ">
                     <Link to={`/infomedecin/${item.Id}`}>
                        <div name="col-xs-4 col-md-3 d-flex justify-content-end">
                            <button color="info" className="fancy-button bg-gradient1 " onClick={this.getmedecin}> Reserver</button>
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
        deletemedecinReducer: Id => {
            dispatch({
                type: 'REMOVE_medecin',
                Id
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(Itemmedecin);
