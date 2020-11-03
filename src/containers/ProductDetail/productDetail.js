import React, {Component} from 'react';
import SearchHeader from '../../containers/SearchHeader/SearchHeader'
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar'
import FanPic3 from '../../static/images/fan3.jpg'
import Button from '@material-ui/core/Button';

import './productDetail.css'


class ProductDetail extends Component {


    componentDidMount() {
        console.log("Product Detail componentDidMount", this.props)
        //this.props.searchUniqueCate();
    
    }
    
    render() {
        return (
            <>
          
            <SearchHeader></SearchHeader>
            <div className = "whole">
           
            <div className = "catSubModel">
                <a href = 'http://localhost:3006/search'>{this.props.category[0]}</a>
                <span> {'>'}  </span>
                <a href = 'http://localhost:3006/productItem'>{this.props.subCategory}</a>
                <span> {'>'}  </span>
                <a href = '/http://localhost:3006/productDetail'>{this.props.selectedProduct.model}</a>
            </div>
            <div className = "imgManSerModel">
            {/* <Avatar alt="product image" src={FanPic3} /> */}
            <img src = {FanPic3}></img>
                <span>{this.props.selectedProduct.manufacturer}/ </span>
                <span>{this.props.selectedProduct.series} / </span>
                <span>{this.props.selectedProduct.model} / </span>
                <button>Add to</button>
                {/* <Button size="small" variant="contained" color="primary">
                    Add to
                </Button> */}
            </div>
            <div  className = "summaryDetailsDocumentContact">
            <span align = "left">Product Summary</span>
            <span align="right">Product Details</span>
            <span align="right">Product Document</span>
            <span align="right">Contact</span>
            </div>

            <h4 className = "ProductDetail">Product Detail</h4>

    <table className = "TableHeader">
        
        <tbody>
        <tr className = "td_gray">
        <td >SERIES INFORMATION</td>
        </tr>
        <tr>
            <td>Airfoil Finishes – Caramel Bamboo or Cocoa Bamboo</td>
        </tr>
        <tr className = "td_gray">
            <td>Airfoils – Moso bamboo – 60” diameter</td>
        </tr>
        <tr>
            <td>Airfoils – Moso bamboo – 60” diameter</td>
        </tr>
        <tr className = "td_gray">
            <td>Hardware Finishes – Satin Nickel, Oil-Rubbed Bronze, Black or White</td>
        </tr>
        <tr>
            <td>Motor – EC motor with digital inverter drive</td>
        </tr>
        <tr className = "td_gray">
            <td>Exceeds ENERGY STAR fan efficiency requirements by up to 1200%</td>

        </tr>
        <tr>
            <td>Motor – EC motor with digital inverter drive</td>
        </tr>
        <tr className = "td_gray">
            <td>Exceeds ENERGY STAR fan efficiency requirements by up to 1200%</td>

        </tr>
        <tr>
            <td>Motor – EC motor with digital inverter drive</td>
        </tr>
        <tr className = "td_gray">
            <td>Exceeds ENERGY STAR fan efficiency requirements by up to 1200%</td>

        </tr>
        <tr>
            <td>Motor – EC motor with digital inverter drive</td>
        </tr>
        
        
        </tbody>
       
    </table>

{/* <table className = "TableBody">
    <tr>
        <td>SERIES INFORMATION</td>
    </tr>
    <tr>
        <td>Airfoil Finishes – Caramel Bamboo or Cocoa Bamboo</td>
    </tr>
    <tr>
        <td>Airfoils – Moso bamboo – 60” diameter</td>
    </tr>
    <tr>
        <td>Airfoils – Moso bamboo – 60” diameter</td>
    </tr>
    <tr>
        <td>Hardware Finishes – Satin Nickel, Oil-Rubbed Bronze, Black or White</td>
    </tr>
    <tr>
        <td>Motor – EC motor with digital inverter drive</td>
    </tr>
    <tr>
        <td>Exceeds ENERGY STAR fan efficiency requirements by up to 1200%</td>
    </tr>
</table> */}


       
                </div>
            </>
        )
    }

}
const mapStateToProps = state => {
  return {
    
    category : state.search.category,
    subCategory : state.search.subCategory,
    //   productList : state.search.productList,
    selectedProduct : state.product.selectedProduct, 
    //   comparedProducts : state.product.comparedProducts,
    //   productRedirectPath: state.product.productRedirectPath
      
  };
};

const mapDispatchToProps = dispatch => {
  return {
//    onUpdateSelectedProduct : (selectedProduct) => dispatch(actions.setSelectedProduct(selectedProduct)),   
//    onSetProductRedirectPath: () => dispatch(actions.setProductRedirectPath("/productDetail")),
      
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( ProductDetail );



