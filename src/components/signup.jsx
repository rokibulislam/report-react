import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Signup = () => {
    
    const { t } = useTranslation()

    return ( 
        <React.Fragment>
            <div className="triplex-signup-form-bg d-flex align-items-center flex-wrap">
                <div>
                    <h3 className="sign-up-title"> { t('Signup') } </h3>
                    <p className="subtitle">
                        Incididunt do ipsum laboris eiusmod anim elit proident qui non labore labore aliquip irure. .
                    </p>
                    <div className="form-group has-error">
                        <label htmlFor="inputError" className="form-label"> { t('Your Name') }</label>
                        <span>
                            <input id="inputError" type="text" placeholder="Tarik Eamin" className="form-control form-input" />
                            <span className="text-danger"></span>
                        </span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="" className="form-label"> { t('Your e-mail') }</label>
                        <span>
                            <input type="text" placeholder="test@eample.com" className="form-control form-input" />
                            <span className="text-danger"></span>
                        </span>
                    </div>

                    <div className="form-group">
                        <span>
                            <label for="" className="form-label"> { t('Password') } </label>
                            <input type="password" placeholder="at least 8 character" className="form-control form-input" />
                            <span className="text-danger"></span>
                        </span>
                    </div>

                    <div className="form-group">
                        <label for="" className="form-label"> { t('Confirm Password') } </label>
                        <input type="password" placeholder="Repeat your password again" className="form-control form-input" />
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
                    <button className="mt-5 btn btn-lg tplx-btn"> { t('Create Account') } </button>
                    <p className="login-text ml-5">
                        { t('Already have an account?Account') }
                        <Link to="/login" className="link-color"> { t('Log In') } </Link>
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Signup;