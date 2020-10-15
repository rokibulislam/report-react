import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next'
import http from '../../services/httpService'
const PasswordChanage = () => {
    const { t } = useTranslation();

    const [state , setState] = useState({

    })

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
 
        try {
            
 

        } catch (ex) {

        }
    }

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}
 
export default PasswordChanage;