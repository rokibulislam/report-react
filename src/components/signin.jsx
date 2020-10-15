import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Link, withRouter } from 'react-router-dom'
import http from '../services/httpService'
import { login } from '../store/actions/authAction'

const SignIn = (props) => {

    const [state , setState] = useState({
        email : "",
        password : "",
        error: {}
    })

    const handleChange = (e) => {
        const {name , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const { t } = useTranslation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const payload = {
                "email":  state.email,
                "password":state.password,
            }

            props.login( payload, props.history );

        } catch (ex) {

        }
    }

    const { email, password, error } = state;

    return ( 
    <div className="triplex-signup-form-bg d-flex align-items-center flex-wrap">
        <div>
            <h3 className="sign-up-title"> { t('Sign In') }.</h3>
            <p className="subtitle">
                { t('Incididunt do ipsum laboris eiusmod anim elit proident qui non labore labore aliquip irure.') }
            </p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label"> { t('Your e-mail') } </label>
                    <span>
                        <input type="email" placeholder="" id="email" name="email" 
                        className={ error.name ? "form-control form-input is-invalid" : "form-control form-input" }
                        value={state.email} onChange={handleChange}/>
                        { error.name && ( <span className="text-danger"> {error.name} </span> )}
                    </span>
                </div>
                
                <div className="form-group">
                    <span>
                        <label  className="form-label"> { t('Password') } </label>
                        <input type="password" id="password" placeholder="at least 8 character" name="password"
                               className={ error.name ? "form-control form-input is-invalid" : "form-control form-input" } 
                                value={state.password} onChange={handleChange}
                            /> 
                        { error.password && ( <span className="text-danger"> {error.password} </span> )}
                    </span>
                </div>

                <div className="row">
                    <div className="col-6">
                        <div className="form-check">
                            <input id="exampleCheck1" type="checkbox" className="form-check-input" />
                            <label htmlFor="exampleCheck1" className="form-check-label">
                            { t('Keep me sign in') }
                            </label>
                        </div>
                    </div>
                    <div className="col-6">
                        <Link to="/dashboard" className="link-color">
                        { t('Forgot Password') }?
                        </Link>
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" onClick={handleSubmit} className="mt-5 btn btn-lg tplx-btn w-100 d-flex justify-content-center align-items-center">
                        { t('Sign In') }
                    </button>
                </div>

            </form>
            
            {/* <a href="/dashboard"  className="mt-5 btn btn-lg tplx-btn w-100 d-flex justify-content-center align-items-center">
            { t('Sign In') }
            </a> */}
            <p className="login-text ml-5">
                { t('Don’t have any account yet') }?
                <Link to="/register" className="link-color"> { t('Sign Up') }</Link>
            </p>
        </div>
    </div>
    );
}


const mapStateToProps = state => ({
    auth: state.auth  
})
 
export default withRouter( connect( mapStateToProps, { login } ) (SignIn) );