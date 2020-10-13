import React from 'react'
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import OrderHistory from './orderHistory'
import CreditCard from './creditcard'

const Billing = () => {

    const { t } = useTranslation();

    return ( 
        <React.Fragment>
            <div className="row">
                <div className="col-12 col-lg-4">
                    <div className="card card--membership">
                        <h5 className="card-title"> { t('Plan details') }</h5>
                        <div className="card card-plan-name">
                            <span className="text"> { t('Current Subscription') }</span>
                            <span className="name"> { t('Pro') } </span>
                        </div>
                        
                        <div className="card-plan-details-text my-3">
                            Your team subscription was canceled on April 8, 2020. Your team remains active through May 4, 2020 but will not be renewed. You can reactivate your subscription at any time.
                        </div>
                        
                        <div className="cta">
                            <button className="btn btn-outline-primary w-auto" type="button"> { t('Cancel subscription') }. </button>
                        </div>
                    </div>
                    <CreditCard/>
                </div>

                <div className="col-12 col-lg-7">
                    <OrderHistory/>
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
 
export default connect(mapStateToProps, mapDispatchToProps)(Billing);