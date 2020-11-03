import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import Auth from './containers/Auth/Auth';
import Signup from './containers/Signup/Signup'
import Search from  './containers/Search/Search'
import ProductItem from './components/ProductItem/productItem'
import MediaCard from './components/MediaCard/mediaCard'
import ProductDetail from './containers/ProductDetail/productDetail'
import Compare from './containers/Compare/Compare'

import'./App.css'
class App extends Component {

  componentDidMount () {
    console.log("App component did mount " , this.props);
    // this.props.onTryAutoSignup();
    // console.log("this.props.onTryAutoSignup();" , this.props.onTryAutoSignup())
  }

  render () {

    let routes = (
      <Switch>
      <Route path="/login" component={Auth} />
      <Route path="/signup" component={Signup} />
      <Route path="/search" component={Search} />
      <Route path="/productItem" component ={ProductItem} />
      <Route path="/mediaCard" component={MediaCard} />
      <Route path="/productDetail" component={ProductDetail}/>
      <Route path="/compare" component={Compare} />


      <Redirect to="/" />
    </Switch>
    );

    return (
      // style = {{backgroundColor: "lightblue"}}
      <div  className = "App">
  
        {routes}
      </div>
    )
  
    }
    
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );

