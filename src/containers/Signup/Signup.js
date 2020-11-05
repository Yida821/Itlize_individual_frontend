import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


import Input from '../../components/UI/Input/Input'; 
import Button from '../../components/UI/Button/Button'

import './Signup.css'
import * as actions from '../../store/actions/index'
class Signup extends Component {

    state = {
        controls: {
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'username',
                    placeholder: 'Username'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            role: {
                elementType: 'input',
                elementConfig: {
                    type: 'role',
                    placeholder: 'Role'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            }
        },
        isSignup: true
    };

    componentDidMount() {
        console.log("Signup componentDidMount", this.props)
    }

    checkValidity ( value, rules ) {
        let isValid = true;
        if ( !rules ) {
            return true;
        }

        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }

        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid
        }

        if ( rules.maxLength ) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if ( rules.isEmail ) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test( value ) && isValid
        }

        if ( rules.isNumeric ) {
            const pattern = /^\d+$/;
            isValid = pattern.test( value ) && isValid
        }

        return isValid;
    }

    inputChangedHandler = ( event, controlName ) => {
        //console.log("controlName", this.state.controls);
          const updatedControls = {
              ...this.state.controls,
              [controlName]: {
                  ...this.state.controls[controlName],
                  value: event.target.value,
                  valid: this.checkValidity( event.target.value, this.state.controls[controlName].validation ),
                  touched: true
              }
          };
          console.log("updateControls", updatedControls);
          console.log(this.state);
          this.setState( { controls: updatedControls } );
  
      }


    submitHandler = ( event ) => {
        event.preventDefault();
        console.log(" Signupevent.preventDefault() ", event.preventDefault() )
        
        this.props.onSignup( this.state.controls.username.value, this.state.controls.email.value, this.state.controls.password.value, this.state.controls.role.value );
        this.props.onSetSignUpRedirectPath();
    }  


    

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push(
               { id : key,
                config : this.state.controls[key]}
            )
        }
        console.log("formElementsArray",formElementsArray)
    
        let form = formElementsArray.map( formElement => (
            <Input 
                key={formElement.id}
                elementType={formElement.config.elementType} // input
                elementConfig={formElement.config.elementConfig} // username, password, email, role
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );

        let signupRedirect = null;
        if (this.props.success) {
            console.log("signupredirect " , this.props.signupRedirect)
            signupRedirect = <Redirect to={this.props.signupRedirect}/>
        }

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }
        return (
            
            <div className="Signup">
                <h1>Joole</h1>
                <h4>Building Product Selection Platform</h4>
                {signupRedirect}
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <button className = "SignUpButton">Sign Up!</button>
                </form>
             
            </div>
        );
    }
}

// export default Signup;

const mapStateToProps = state => {
    return {
        loading: state.signup.loading,
        error: state.signup.error,
        success : state.signup.success,
        fail : state.signup.fail,
        signupRedirect: state.signup.signupRedirectPath
    };
};



const mapDispatchToProps = dispatch => {
    return {
      // onAuth: ( email, password, isSignup ) => dispatch({type:actionTypes.AUTH_START}）,
        onSignup: ( username, email, password, role ) => dispatch( actions.signup( username, email, password, role ) ),
        onSetSignUpRedirectPath: () => dispatch(actions.setSignUpRedirectPath('/login'))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Signup );