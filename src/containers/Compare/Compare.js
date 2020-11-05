import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import SearchHeader from '../../containers/SearchHeader/SearchHeader'
import FanPic3 from '../../static/images/fan3.jpg'
import Axios from 'axios';
import './Compare.css'

class Compare  extends Component {



    componentDidMount() {
        console.log("Product compare componentDidMount", this.props)
       // this.props.searchUniqueCate();
       //component Axios
    
      }


    render() {


        let table = this.props.comparedProducts.map ((eachProduct, index)  => (
            
            <td>
                            <br></br>
                            <br></br>
                            <tr>{eachProduct.manufacturer}</tr>
                            <tr>{eachProduct.series}</tr>
                            <tr>{eachProduct.model}</tr>
                            <br></br>
                            <tr>{eachProduct.userType}</tr>
                            <tr>{eachProduct.application}</tr>
                            <tr>{eachProduct.mountingLocation}</tr>
                            <tr>{eachProduct.accessories}</tr>
                            <tr>{eachProduct.modelYear}</tr>
                            <br></br>
                            <tr>{eachProduct.airFlow}</tr>
                            <tr>{eachProduct.power}</tr>
                            <tr>{eachProduct.operatingVoltage}</tr>
                            <tr>{eachProduct.fanSpeed}</tr>
            
                            
            </td>
                        
            
        ))
        return (
            <div >
                <SearchHeader></SearchHeader>
                <div className = "whole">
                    <div className = "catSubModel">
                        <span>Mechanical</span>
                        <span> {'>'}  </span>
                        <span>HAVC Fans</span>
                        <span> {'>'}  </span>
                        <span>Compare</span>
                    </div>
                        <table className = "TableTbody">
                            <tbody>
                                <td>
                                    <tr>COLUMN</tr>
                                    <tr>DESCRIPTION</tr>
                                    <tr className = "Gray">Manufacturer</tr>
                                    <tr className = "Gray">Series</tr>
                                    <tr className = "Gray">Model</tr>
                                    <tr>TYPE</tr>
                                    <tr className = "Gray">Use Type</tr>
                                    <tr className = "Gray">Application</tr>
                                    <tr className = "Gray">Mounting Location</tr>
                                    <tr className = "Gray">Accessories</tr>
                                    <tr className = "Gray">Model year</tr>
                                    <tr>TECHNICAL SPECIFICATIONS</tr>
                                    <tr className = "Gray">Airflow (CFM)</tr>
                                    <tr className = "Gray">Power (W)</tr>
                                    <tr className = "Gray">Operating voltage (VAC)</tr>
                                    <tr className = "Gray">Fan speed (RPM)</tr>
                                </td>
                                {table}
                            </tbody>
                        </table>
                    </div>
            </div>
            
        )
    }

}

const mapStateToProps = state => {
    return {
        comparedProducts: state.product.comparedProducts,
        // error: state.auth.error,
        // isAuthenticated: state.auth.token !== null,
        // authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
      // onAuth: ( email, password, isSignup ) => dispatch({type:actionTypes.AUTH_START}）,
        // onAuth: ( email, password ) => dispatch( actions.auth( email, password ) ),
        // onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/search'))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Compare );