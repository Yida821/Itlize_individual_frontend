import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import './SearchHeader.css'

class SearchHeader extends Component {

    componentDidMount() {
        console.log("SearchHeader componentDidMount", this.props)
        // this.props.searchUniqueCate();

    }
    render() {
        return (
            <>
            <div className = "Header">
            <span className = "Logo">Joole</span>
            
             <select className = "Selection">
                <option className = "HeaderOption">{this.props.subCategory}</option>
             </select>
             <input type="text"  />
            
                <span className = "Project">Project</span>
                <span className = "Person">Person</span>
            </div>
            </>
            
          
        )
    }

}
const mapStateToProps = state => {
    return {
        subCategory: state.search.subCategory,
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


export default connect( mapStateToProps, mapDispatchToProps )( SearchHeader );