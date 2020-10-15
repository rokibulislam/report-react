import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';

const EditAccountForm = (props) => {

    const { t } = useTranslation();

    const [ apiAccount, setApiAccount ] = useState(props.currentApiAccount)

    useEffect(
      () => {
        setApiAccount(props.currentApiAccount)
      },
      [ props ]
    )

    const handleChange = event => {
        const { name, value } = event.target
    
        setApiAccount({ ...apiAccount, [name]: value })
      }

    const updateAccount = () => {
        props.updateAccount(apiAccount.id, apiAccount)
    }

    return ( 
        <>
            <div className="card card--add-api">
                <h5 className="card-title mb-3"> { t('Edit Account') }</h5>

                <div className="form-group">
                    <label for="Name"> { t('Account Name' ) } </label>
                    <input type="text" className="form-control" id="Name" name="name" value={apiAccount.name} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label for="consumerId"> { t('Consumer ID') } </label>
                    <input type="text" className="form-control" id="consumerId" name="consumerId" value={apiAccount.consumerId} onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label for="employeeId"> { t('Employee ID') } </label>
                    <input type="text" className="form-control" id="employeeId" name="employeeId" value={apiAccount.employeeId} onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label for="expirationDate"> { t('Expiration Date') }</label>
                    <input type="date" className="form-control" id="expirationDate" name="expirationDate" value={apiAccount.expirationDate} onChange={handleChange}/>
                </div>

                <div className="form-cta mt-4">
                    <button onClick={updateAccount} className="btn btn-primary mr-3"> { t('Update Account') } </button>
                    <button className="btn btn-primary mr-3" onClick={() => props.setEditing(false)} className="button muted-button">
                        { t('Cancel') }
                    </button>
                </div>
            </div>
        </>
    );
}
 
export default EditAccountForm;