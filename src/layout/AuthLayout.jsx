import React from 'react';


const Layout = (props) => {
    return ( 
        <React.Fragment>
        <div className="container-fluid triplex-main">
            <div className="row">
                <div className="col-12">
                    <div className="row stre">
                        <div className="col-5">
                            { props.children }
                        </div>
                        <div className="col-1"></div>
                        <div className="col-6">
                            <div className="top-bar">
                                <img src="images/tripletex-old-logo.png" alt="Tripletex logo" className="float-right mt-3 mr-4" />
                            </div>
                            <div className="signup-page-slider mt-5 pt-5">
                                <div className="account-bg mt-4"></div>
                                <h3 className="text-white text-center">Add Multiple Account</h3>
                                <p className="text-white text-center">
                                    Incididunt do ipsum laboris eiusmod anim elit proident qui non labore labore aliquip irure. .
                                </p>
                                <div className="scroll-bg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}
 
export default Layout;