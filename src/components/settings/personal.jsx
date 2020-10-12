import React from 'react'
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next'

const Personal = () => {
    const { t } = useTranslation();

    return ( 
        <React.Fragment>
            <div className="row">
                <div className="col-12 col-xl-5 col-lg-6">
                    <div className="card card--profile">
                        <div className="card--profile__header mb-4">
                            <div className="card--profile__user d-flex  align-items-center align-content-center">
                                <div className="card--profile__img">
                                    <button className="btn edit-profile-image p-0">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10Z" fill="#2B9A9C"/>
                                            <path d="M12.0519 6.3342C12.1579 6.2283 12.2837 6.1442 12.4221 6.0869C12.5606 6.0295 12.709 6 12.8588 6C13.0087 6 13.1571 6.0295 13.2955 6.0869C13.434 6.1442 13.5598 6.2283 13.6658 6.3342C13.7717 6.4402 13.8558 6.566 13.9131 6.7045C13.9705 6.8429 14 6.9913 14 7.1412C14 7.291 13.9705 7.4394 13.9131 7.5779C13.8558 7.7163 13.7717 7.8421 13.6658 7.9481L8.219 13.3948L6 14L6.6052 11.781L12.0519 6.3342Z" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                    <img src="images/users/user-img-80.png" alt="user__or__company__name__here"/>
                                </div>

                                <div className="card--profile__info ml-3">
                                    <h5 className="card--profile__user__name">Tarik Eamin</h5>
                                    <span className="card--profile__user__role text-primary">
                                        { t('Account Owner') }
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="card--profile__body">
                            <div className="form-row">
                                <div className="form-group col">
                                    <label for="firstName"> { t('First Name') } </label>
                                    <input type="text" className="form-control" id="firstName" value="Jhon"/>
                                </div>

                                <div className="form-group col">
                                    <label for="lastName"> { t('Last Name') } </label>
                                    <input type="text" className="form-control" id="lastName" value="Snow"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label for="email"> { t('Email address') } </label>
                                <input type="email" className="form-control" id="email" value="jhon.snow@snow.com"/>
                            </div>

                            <div className="form-group">
                                <label for="phoneNo"> { t('Phone No') } </label>
                                <input type="tel" className="form-control" id="phoneNo" value="+123456789"/>
                            </div>

                            <div className="form-group">
                                <label for="companyName"> { t('Company Name') } </label>
                                <input type="text" className="form-control" id="companyName" value="Soly Group"/>
                            </div>

                            <div className="form-cta mt-4">
                                <button className="btn btn-primary mr-3"> { t('Save changes') } </button>
                                <button className="btn btn-outline-primary"> { t('Clear') }</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-xl-4 col-lg-6">
                    <div className="card card--password">
                        <h5 className="card-title mb-3"> { t('Change Password') } </h5>

                        <div className="form-group">
                            <label for="currentPassword"> { t('Current password') } </label>
                            <input type="password" className="form-control" id="currentPassword"/>
                        </div>


                        <div className="form-group">
                            <label for="newPassword"> { t('New password') } </label>
                            <input type="password" className="form-control" id="newPassword"/>
                        </div>


                        <div className="form-group">
                            <label for="confirmNewPassword"> { t('Confirm new password') } </label>
                            <input type="password" className="form-control" id="confirmNewPassword"/>
                        </div>

                        <div className="form-cta mt-2">
                            <button className="btn btn-primary mr-3"> { t('Change Password') } </button>
                            <button className="btn btn-outline-primary"> { t("Clear") } </button>
                        </div>
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
 
export default connect(mapStateToProps, mapDispatchToProps)(Personal);