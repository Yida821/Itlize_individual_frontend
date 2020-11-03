import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import SearchHeader from '../../containers/SearchHeader/SearchHeader'
import FanPic3 from '../../static/images/fan3.jpg'

class Compare  extends Component {



    componentDidMount() {
        console.log("Product compare componentDidMount", this.props)
       // this.props.searchUniqueCate();
    
      }


    render() {


        let table = this.props.comparedProducts.map ((eachProduct, index)  => (
            
            <tr>
                            <th><img src = {FanPic3}></img></th>
           
           
                            
            
                            <th>{eachProduct.manufacturer}</th>
        
            
                            <th>{eachProduct.series}</th>
            
            
                            <th>{eachProduct.model}</th>
            
            
                           
            
            
                            <th>{eachProduct.userType}</th>
            
            
                            <th>{eachProduct.application}</th>
            
        
                            <th>{eachProduct.mountingLocation}</th>
            
            
                            <th>{eachProduct.accessories}</th>
            
            
                            <th>{eachProduct.modelYear}</th>
            
           
                          
           
           
                            <th>{eachProduct.airFlow}</th>
           
           
                            <th>{eachProduct.power}</th>
           
           
                            <th>{eachProduct.operatingVoltage}</th>
           
           
                            <th>{eachProduct.fanSpeed}</th>
            
                            
            </tr>
                        
            
        ))
        return (
            <div >
                <SearchHeader></SearchHeader>
                <div className = "whole">
                    <div className = "catSubModel">
                        <a href = 'http://localhost:3006/search'>Mechanical</a>
                        <span> {'>'}  </span>
                        <a href = 'http://localhost:3006/productItem'>HAVC Fans</a>
                        <span> {'>'}  </span>
                        <a href = '/http://localhost:3006/productDetail'>Compare</a>
                    </div>
                    <div className = "tableclass">
                    <table className = "tableCompare">
                        <thead>
                            <tr>
                                <th>pic</th>
                                <th>Manufacturer</th>
                                <th>Series</th>
                                <th>Model</th>
                                <th>Use Type</th>
                                <th>Application</th>
                                <th>Mounting Location</th>
                                <th>Accessories</th>
                                <th>Model year</th>
                                <th>Airflow (CFM)</th>
                                <th>Power (W)</th>
                                <th>Operating voltage (VAC)</th>
                                <th>Fan speed (RPM)</th>
                            </tr>

                        </thead>
                        <tbody>
                            {table}

                        </tbody>
                    </table>
                    </div>
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