import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

const AddAccountForm = (props) => {
    const { t } = useTranslation();
    
    const initialFormState = {
        _id: null,
        'Name': "",
        'consumerId': "",
        "employeeId": "",
        "expirationDate": ""
    }
    
    const [ apiAccount , setApiAccount] = useState(initialFormState);

    const handleChange = (e) => {
        const {name , value} = e.target   
        setApiAccount(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const addAccount = (event) => {
        event.preventDefault();
        try {
            
            // const payload = {
            //     "email":  state.Name,
            //     "password":state.consumerId,
            //     "employeeId": state.employeeId,
            //     "expirationDate": state.expirationDate
            // }

            // console.log(state);

        } catch (ex) {

        }
    }

    return ( 
        <React.Fragment>
            <div className="card card--add-api">
                <h5 className="card-title mb-3"> { t('Add Account') }</h5>

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
                    <button onClick={addAccount} className="btn btn-primary mr-3"> { t('Add Account') } </button>
                    <button className="btn btn-outline-primary"> { t('Clear') } </button>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default AddAccountForm;