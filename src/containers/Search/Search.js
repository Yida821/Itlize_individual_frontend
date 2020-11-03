import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


// import Input from '../../components/UI/Input/Input'; 
// import Button from '../../components/UI/Button/Button'
// import Select from '../../components/UI/Select/select'
import * as actions from '../../store/actions/index'
import './Search.css';
class Search extends Component {
    //get the unique category names from props => dispatch

    state = {
        value : ''
    }

    componentDidMount() {
        console.log("Search componentDidMount", this.props)
        this.props.searchUniqueCate();

    }

    inputOnChange = (event) => {
        this.setState({
                value : event.target.value
            })
        
        console.log("this.state.value" , this.state.value)
        

       

    }

    handleChange = (e) =>{ 
        this.setState({value: e.target.value});
       
      }

    handleKeyDown = (e) => {
        if (e.key ==='Enter') {
            console.log("this.state.value" , this.state.value);
            let subCate = this.state.value;
            this.props.passSubCate(subCate);

        }
    }

    buttonOnClick = (e) => {
        console.log("this button is clicked ")
        this.props.getProductList(this.props.category[0], this.props.subCategory);
        this.props.onSearchRedirectPath();
    }

    
    render() {
        let searchRedirect = null;
        console.log("prodct list length", this.props.productList.length)
        if (this.props.haveProductList) {
            console.log("searchRedirect " , this.props.searchRedirect)
            searchRedirect = <Redirect to={this.props.searchRedirect}/>
        }
        return (
           <>
            <div className = "Search">
                <h1>Joole</h1>
                <h4>Building Product Selection Platform</h4>
                {searchRedirect}
                <select>
                    {
                         this.props.category.map((category, index) => <option key = {index}>{category}</option> )
                    } 

                </select>
        
                <input type="text" value={this.state.value} onChange={this.handleChange} onKeyDown= {this.handleKeyDown} />
                <button onClick = {this.buttonOnClick}>Search</button>
            </div>
            
            </>
          )
    }

}

const mapStateToProps = state => {
    return {
      
        error: state.search.error,
        category : state.search.category,
        subCategory : state.search.subCategory,
        productList : state.search.productList,
        searchRedirect : state.search.searchRedirectPath,
        haveProductList : state.search.haveProductList
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        passSubCate: (subcate) => dispatch(actions.getSubCategory(subcate)),
        searchUniqueCate: () => dispatch(actions.searchUniqueCate()),
        getProductList : (category, subCategory) => dispatch(actions.getProductLList(category, subCategory)), 
        onSearchRedirectPath : () => dispatch(actions.setSearchRedirectPath('/productItem'))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Search );

