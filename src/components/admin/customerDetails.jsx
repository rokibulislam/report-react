import React from 'react'
import { connect } from 'react-redux';

const CustomerDetails = () => {
    return ( 
        <React.Fragment>
            <div className="card table-content-selected">
                <div className="customer">
                    <div className="customer__img text-center">
                        <img src="images/super-admin/customer.png" alt="customer__or__company__name__here"/>
                    </div>
                    <div className="row justify-content-center">
                        <div className="div">
                            <div className="customer__name">Wade Warren</div>
                            <div className="customer__phone">+0123456789</div>
                        </div>

                        <div className="divider divider--vertical mx-4" style={{ height: "48px", opacity: "0.1" }}></div>

                        <div className="div">
                            <div className="customer__company">Bluth Company</div>
                            <div className="customer__email">email@domain.com</div>
                        </div>
                    </div>
                </div>

                <div className="customer__details mt-5">
                    <h4 className="card-title">Customers Details</h4>

                    <div className="table-responsive">
                        <table className="table">
                            <thead className="border-0">
                            <tr className="font-weight-bold">
                                <th scope="col">Name</th>
                                <th scope="col">info</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Current plan</td>
                                    <td className="color-green">Basic</td>
                                </tr>
                                <tr>
                                    <td>API accounts</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>Monthly cost</td>
                                    <td>$30</td>
                                </tr>
                                <tr>
                                    <td>Total const</td>
                                    <td>$3000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetails);
