import React from 'react'

const Signup = () => {
    return ( 
        <React.Fragment>
            <div className="triplex-signup-form-bg d-flex align-items-center flex-wrap">
                <div>
                    <h3 className="sign-up-title">Signup</h3>
                    <p className="subtitle">
                        Incididunt do ipsum laboris eiusmod anim elit proident qui non labore labore aliquip irure. .
                    </p>
                    <div className="form-group has-error">
                        <label htmlFor="inputError" className="form-label">Your Name</label>
                        <span>
                            <input id="inputError" type="text" placeholder="Tarik Eamin" className="form-control form-input" />
                            <span className="text-danger"></span>
                        </span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="" className="form-label">Your e-mail</label>
                        <span>
                            <input type="text" placeholder="test@eample.com" className="form-control form-input" />
                            <span className="text-danger"></span>
                        </span>
                    </div>

                    <div className="form-group">
                        <span>
                            <label for="" className="form-label">Password</label>
                            <input type="password" placeholder="at least 8 character" className="form-control form-input" />
                            <span className="text-danger"></span>
                        </span>
                    </div>

                    <div className="form-group">
                        <label for="" className="form-label">Confirm Password</label>
                        <input type="password" placeholder="Repeat your password again" className="form-control form-input" />
                    </div>

                    <div className="form-check">
                        <input id="exampleCheck1" type="checkbox" className="form-check-input" />
                        <label for="exampleCheck1" className="form-check-label">
                            By creating an account you agree to the
                            <a href="#" className="link-color">terms of us</a> and our <a href="#" className="link-color"> privacy policy.</a>
                        </label>
                    </div>
                    <button className="mt-5 btn btn-lg tplx-btn">Create Account</button>
                    <p className="login-text ml-5">
                        Already have an account?Account
                        <a href="/login" className="link-color">Log In</a>
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Signup;