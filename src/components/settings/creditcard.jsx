import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

const CreditCard = () => {

    const { t } = useTranslation();


    return ( 
        <React.Fragment>
                    <div className="card card--payment-methods mt-4">
                        <div className="card--payment-methods__header mb-3 d-flex align-items-center justify-content-between">
                            <h5 className="card-title m-0"> { t('Credit / Debit Card') }</h5>

                            <button type="button" className="btn p-0 m-0 border-0 btn--add-pay-met">
                                <span className="text pr-1"> { t('add new') } </span>
                                <span className="icon-add">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="30" height="30" rx="10" fill="#2B9A9C" fill-opacity="0.2"/>
                                        <path d="M15 10V20M10 15H20" stroke="#158385" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <div className="card card--payment-info">
                            <div className="label mb-3 d-flex justify-content-between align-items-center align-content-center">
                                <span className="color-light"> { t('Your card info') } </span>
                                <span className="card-icon"><img src="images/card/mastercard.png" alt="mastercard"/></span>
                            </div>
                            <div className="card-details mb-3"> { t('Ending in 4039 | Expires 5/2022 | Postal / ZIP code: 2207') }</div>
                            <div className="cta">
                                <button className="btn btn-outline-primary w-auto" type="button"> { t('Remove this card') }. </button>
                            </div>
                        </div>

                        <div className="card card--payment-info">
                            <div className="label mb-3 d-flex justify-content-between align-items-center align-content-center">
                                <span className="color-light"> { t('Your card info') } </span>
                                <span className="card-icon"><img src="images/card/mastercard.png" alt="mastercard"/></span>
                            </div>
                            <div className="card-details mb-3"> { t('Ending in 4039 | Expires 5/2022 | Postal / ZIP code: 2207') }</div>
                            <div className="cta">
                                <button className="btn btn-outline-primary w-auto" type="button"> { t('Remove this card') }.</button>
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
 
export default connect(mapStateToProps, mapDispatchToProps)(CreditCard);
