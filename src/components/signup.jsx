import React, { useState} from 'react'
import { useTranslation } from 'react-i18next'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux';
import { register } from '../store/actions/authAction'

const Signup = (props) => {

    const [state , setState] = useState({
        name: "",
        email : "",
        password : "",
        confirmPassword: "",
        error: {}
    })

    const handleChange = (e) => {
        const {name , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
    }
    
    const { t } = useTranslation()

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            
            const payload = {
                "name": state.name,
                "email":state.email,
                "password": state.password
            }

            props.register( payload, props.history )

        } catch (ex) {

        }
    }

    const { name, email, password, confirmPassword, error } = state;

    return ( 
        <React.Fragment>
            <div className="triplex-signup-form-bg d-flex align-items-center flex-wrap">
                <div>
                    <h3 className="sign-up-title"> { t('Signup') } </h3>
                    <p className="subtitle">
                        Incididunt do ipsum laboris eiusmod anim elit proident qui non labore labore aliquip irure. .
                    </p>
                
                <form onSubmit={handleSubmit}>
                    <div className="form-group has-error">
                        <label htmlFor="name" className="form-label"> { t('Your Name') }</label>
                        <span>
                            <input id="name" type="text" placeholder="Enter Your Name" name="name" 
                                    className={ error.name ? "form-control form-input is-invalid" : "form-control form-input" } 
                                    value={state.name} onChange={handleChange}
                            />
                            { error.name && ( <span className="text-danger"> {error.name} </span> )}
                        </span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label"> { t('Your e-mail') }</label>
                        <span>
                            <input type="email" id="email" placeholder="Enter Your email" name="email" 
                                   className={ error.name ? "form-control form-input is-invalid" : "form-control form-input" } 
                                   value={state.email} onChange={handleChange}
                                />
                            { error.email && ( <span className="text-danger"> {error.email} </span> )}
                        </span>
                    </div>

                    <div className="form-group">
                        <span>
                            <label for="password" className="form-label"> { t('Password') } </label>
                            <input type="password" id="password" placeholder="at least 8 character" name="password" 
                                    className={ error.name ? "form-control form-input is-invalid" : "form-control form-input" }  
                                    value={state.password} onChange={handleChange}
                                />
                            { error.password && ( <span className="text-danger"> {error.password} </span> )}
                        </span>
                    </div>

                    <div className="form-group">
                        <label for="confirmPassword" className="form-label"> { t('Confirm Password') } </label>
                        <input type="password" id="confirmPassword" placeholder="Repeat your password again" name="confirmPassword" 
                            className={ error.name ? "form-control form-input is-invalid" : "form-control form-input" }
                            value={state.confirmPassword} onChange={handleChange}
                        />
                        { error.confirmPassword && ( <span className="text-danger"> {error.confirmPassword} </span> )}
                    </div>

                    <div className="form-check">
                        <input id="exampleCheck1" type="checkbox" className="form-check-input" />
                        <label for="exampleCheck1" className="form-check-label">
                            { t('By creating an account you agree to the') }
                            <Link to="#" className="link-color">  { t('terms of us') } </Link> 
                            { t('and our') }
                            <Link to="#" className="link-color"> { t('privacy policy')}.</Link>
                        </label>
                    </div>
                    
                    <button type="submit" className="mt-5 btn btn-lg tplx-btn"> { t('Create Account') } </button>
                
                </form>
                    
                    <p className="login-text ml-5">
                        { t('Already have an account?Account') }
                        <Link to="/login" className="link-color"> { t('Log In') } </Link>
                    </p>
               
                </div>
            </div>
        </React.Fragment>
    );
}
 
const mapStateToProps = state => ({
    auth: state.auth  
})

export default withRouter( connect( mapStateToProps, {
    register
} )(Signup) );