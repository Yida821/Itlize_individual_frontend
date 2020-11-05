import React, {Component} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import FanPic3 from '../../static/images/fan3.jpg'
// import FanPic4 from '../../static/images/fan4.jpg'
// import FanPic5 from '../../static/images/fan5.jpg'
import'./productItem.css'
import { connect } from 'react-redux';
import SearchHeader from '../../containers/SearchHeader/SearchHeader'
import * as actions from '../../store/actions/index'

import { Redirect } from 'react-router-dom';



class ProductItem extends Component {


  constructor(props) {
    super(props);
    this.cardOnClick = this.cardOnClick.bind(this);
    this.state = {
      isClicked : false
    }
  }

  componentDidMount() {
    console.log("ProductItem componentDidMount", this.props)
   // this.props.searchUniqueCate();

  }

  cardOnClick (index)  {
    console.log("ProductItem Componenet, card is clicked!")
    console.log("card index: ", index)
    //dispatch setSelectedProduct({object of a product id})
    this.props.onUpdateSelectedProduct(this.props.productList[index])
    // redirect to product detail page 
    this.props.onSetProductRedirectPath();
  }

  cardOnClick1  = () => {
    console.log("ProductItem Componenet, card is clicked!")

  }

  checkBoxOnCheck (index) {
    console.log("checkbox is checked!")
    console.log("card index: ", index)
    //dispatch updatep comparedProducts
    this.props.onSetComparedProduct(this.props.productList[index])

  }

  compareButtonOnClick = () => {
    console.log("compare button is clicked!")
     //dispatch redirect to compare page 
     this.props.onSetRedirectToCompare()
    //dispatch set compare is clicked => true
    this.props.onSetCompareClicked()
   

  }

  divOnClick = () => {
    console.log ("this div is click : show another div");
    console.log ("before set state this.state.isClicked : ", this.state.isClicked);
    
    let opposite =!this.state.isClicked;
    console.log ("opposite : ",opposite);
    this.setState({
      isClicked : opposite
    })
    console.log ("after set state this.state.isClicked : ", this.state.isClicked);
  }

  render()  {

    let redirectToCompare =  null;
      if (this.props.compareClicked === true) {
        console.log("redirect to compare", this.props.compareClicked)
        redirectToCompare = <Redirect to = {this.props.redirectToCompare}/>
      }

    let productRedirect = null;
        
        if (this.props.selectedProduct !== null) {
           console.log("redirect to productDetail " , this.props.productRedirectPath)
            productRedirect = <Redirect to={this.props.productRedirectPath}/>
        }


    let card = this.props.productList.map((eachProduct, index) =>(
      <Grid item xs = {3} key = {eachProduct.id}>
        <Card key = {eachProduct.id} style = {{width : 300}} >
          <CardActionArea onClick={() => this.cardOnClick(index)}>
            <CardMedia
            style = {{height : 140}}
              image={FanPic3}
              title="Contemplative Reptile"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {eachProduct.manufacturer}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {eachProduct.series}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {eachProduct.model}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {eachProduct.airFlow} CFM
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {eachProduct.fanSpeed} dBA at max speed
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {eachProduct.power} W at max speed
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {eachProduct.operatingVoltage} W at max speed
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Checkbox
            
            onChange={() => this.checkBoxOnCheck(index)} 
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>COMPARE</span>
          <Button size="small" variant="contained" color="primary">
            Add to
          </Button>
        </CardActions>
        </Card>
      </Grid>
    ))
    // const classes = makeStyles({
    //     root: {
    //       maxWidth: 100,
    //     },
    //     media: {
    //       height: 140,
    //     },
    //   });
   
        return (
         <div> 
          {redirectToCompare}
         {productRedirect}
        
         <SearchHeader></SearchHeader>
        
          <Grid container>
            <Grid item xs = {3}  key = "Grid-Blank">
            </Grid>
            <Grid item xs = {9} key = "Grid-Filter">
            <div className = "catSubcategory">
                <a>{this.props.category[0]}</a>
                <span> {'>'} </span>
                <a>{this.props.subCategory} /</a>
                <button className = "CompareButton" onClick = {this.compareButtonOnClick}>Compare</button>
            </div>
            </Grid>
          </Grid>

          <Grid container>
          <Grid item xs = {3}>
          <div className = "Filter">
          <div className = " FilterDiv"> <span>Search: </span><button >Save</button><button>Clear</button> </div>
          <div className = " FilterDiv"> <span>Product</span><span>Project</span> </div>
          <div className = " FilterDiv" onClick = {this.divOnClick}> <span>Product Type</span> <i class="fad fa-arrow-alt-square-down"></i> </div>
          <div className = " FilterDiv" style= {{display: this.state.isClicked ? '' : 'none'}} > <span>Model Year: </span> <input class = "InputModelYear"></input><span> - </span> <input className = "InputModelYear"></input>  </div>
          <div className = " FilterDiv"> <span>Technical Specifications</span>  </div>
          <div className = " FilterDiv"> <span>Brand</span> </div>
          <div className = " FilterDiv"> <span>Past Selections</span> </div>
          <div className = " FilterDiv"> <span>Certification</span> </div>
                {/* <table  className= "FilterTable">
                    <tbody className = "FilterTbody">
                      <td className = "FilterTbodyTd" >
                        <tr className = "FilterTbodyTr"><span>Search: </span><button>Save</button><button>Clear</button></tr>
                        <tr className = "FilterTbodyTr"><span>Product</span><span>Project</span></tr>
                        <tr className = "FilterTbodyTr">Product Type</tr>
                        <tr className = "FilterTbodyTr">Technical Specifications</tr>
                        <tr className = "FilterTbodyTr">Brand</tr>
                        <tr className = "FilterTbodyTr">Past Selections</tr>
                        <tr className = "FilterTbodyTr">Certification</tr>

                      </td>
                    </tbody>
                </table>  */}

            </div>
            </Grid>
            {/* <Grid item xs = {3} key = "Grid-Product" > </Grid> */}
            
           {card}
         
          </Grid>
  

        </div>
        );
          }  
}


const mapStateToProps = state => {
  return {
    
      // error: state.search.error,
      category : state.search.category,
      subCategory : state.search.subCategory,
      productList : state.search.productList,
      selectedProduct : state.product.selectedProduct, 
      comparedProducts : state.product.comparedProducts,
      productRedirectPath: state.product.productRedirectPath,
      compareClicked : state.product.compareClicked,
      redirectToCompare : state.product.redirectToCompare
      
  };
};

const mapDispatchToProps = dispatch => {
  return {
   onUpdateSelectedProduct : (selectedProduct) => dispatch(actions.setSelectedProduct(selectedProduct)),   
   onSetProductRedirectPath: () => dispatch(actions.setProductRedirectPath("/productDetail")),
   onSetComparedProduct: (product) => dispatch(actions.setComparedProduct(product)),
   onSetCompareClicked : () => dispatch(actions.setCompareClicked()),
   onSetRedirectToCompare : () => dispatch(actions.setRedirectToCompare("/compare"))
      // searchUniqueCate: () => dispatch(actions.searchUniqueCate()),
      // getProductList : (category, subCategory) => dispatch(actions.getProductLList(category, subCategory))
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( ProductItem );






  
 
  
    
