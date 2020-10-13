import React from 'react'
import { useTranslation } from 'react-i18next'

const SignIn = () => {

    const { t } = useTranslation();

    return ( 
    <div className="triplex-signup-form-bg d-flex align-items-center flex-wrap">
        <div>
            <h3 className="sign-up-title"> { t('Sign In') }.</h3>
            <p className="subtitle">
            { t('Incididunt do ipsum laboris eiusmod anim elit proident qui non labore labore aliquip irure.') }
            </p>
            <div className="form-group">
                <label className="form-label"> { t('Your e-mail') } </label>
                <span><input type="text" placeholder="test@eample.com" className="form-control form-input" /><span className="text-danger"></span></span>
            </div>
            <div className="form-group">
                <span><label  className="form-label"> { t('Password') } </label>
                    <input type="password" placeholder="at least 8 character" className="form-control form-input" /> <span className="text-danger"></span></span>
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
                    <a href="/dashboard" className="link-color">
                    { t('Forgot Password') }?
                    </a>
                </div>
            </div>
            <a href="/dashboard" className="mt-5 btn btn-lg tplx-btn w-100 d-flex justify-content-center align-items-center">
            { t('Sign In') }
            </a>
            <p className="login-text ml-5">
                { t('Don’t have any account yet') }?
                <a href="/signup" className="link-color"> { t('Sign Up') }</a>
            </p>
        </div>
    </div>
    );
}
 
export default SignIn;