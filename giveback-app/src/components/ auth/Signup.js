import React, {Component} from 'react'
import { reduxForm, Field} from 'redux-form'
//helper function 

import { compose } from 'redux'

import { connect } from 'react-redux'
import * as actions from '../../components/actions'
//wire up signup action creator to this form 


//have to call handleSubmit with reduxForm 

class Signup extends Component {
    onSubmit = (formProps) => {
       this.props.signup(formProps)

    }


    render(){
        const {handleSubmit} = this.props

        return(
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email </label>
                    <Field
                    name="email"
                    type="text"
                    component="input"
                    autoComplete="none"
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field
                    name="password"
                    type="password"
                    component="input"
                    autoComplete="none"
                    />
                </fieldset>
                <button className="signup">Sign Up</button>
            </form>
    
        )
    }
}

export default compose(
    connect(null, actions), 
    //state, actions object 
    //null bc we don't have state right now 
    reduxForm({form: 'signup'})
)(Signup)

//componse = apply multiple HOF to a single component = Singup in this case 