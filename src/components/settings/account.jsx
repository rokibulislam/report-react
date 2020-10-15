import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import AddAccountForm from './account/addAccountForm'
import EditAccountForm from './account/editAccountForm'
import AccountTable from './account/accountTable'
import http from '../../services/httpService'

const Account = (props) => {
    // const { apiAccount } = props.apiAccount;

    const apiaccountData = [
		{ _id: 1, name: 'Tania', consumerId: 'floppydiskette', employeeId: 'rok', expirationDate: "2-4-20" },
		{ _id: 2, name: 'Craig', consumerId: 'siliconeidolon', employeeId: 'rok',expirationDate: "2-4-20" },
		{ _id: 3, name: 'Ben', consumerId: 'benisphere', employeeId: 'rok', expirationDate: "2-4-20" }
	]

    const initialFormState = {
        _id: null,
        'name': "",
        'consumerId': "",
        "employeeId": "",
        "expirationDate": ""
    }

    const [ apiAccount, setApiAccount ] = useState(apiaccountData)
    const [ currentApiAccount, setCurrentApiAccount ] = useState(initialFormState)
    const [ editing, setEditing ] = useState(false)

    useEffect( () => {
        http.get('/api-account')  .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    })    


    const addAccount = account => {

    }

    const updateAccount = (id, account) => {
        setEditing(false)
    }

    const deleteAccount = data => {
        
    }

    const editRow = account => {
        setEditing(true)
        setCurrentApiAccount(
            { 
                _id: account._id, 
                name: account.name,
                employeeId: account.employeeId,
                consumerId: account.consumerId,
                expirationDate: account.expirationDate,
            }
        )
    }

    return ( 
        <React.Fragment>
            <div className="row">
                <div className="col-12 col-lg-6">
                    { editing ? (
                        <>
                            <EditAccountForm
                                editing={editing}
                                setEditing={setEditing}
                                currentApiAccount={currentApiAccount}
                                updateAccount={updateAccount}
                            />
                        </>
                    ) : ( 
                        <>
                            <AddAccountForm/>
                        </>
                    )}
                </div>

                <div className="col-12 col-lg-5">
                    <AccountTable editRow={editRow} apiAccount={apiAccount} updateAccount={updateAccount} deleteAccount={deleteAccount}/>
                </div>
            </div>
        </React.Fragment>
    );
}

// const mapStateToProps = state => {
//     return {
//         'apiAccount': state.apiAccount
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
        
//     }
// }
 
// export default connect(mapStateToProps, mapDispatchToProps)(Account);

export default Account;