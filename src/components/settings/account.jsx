import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import AddAccountForm from './account/addAccountForm'
import EditAccountForm from './account/editAccountForm'
import AccountTable from './account/accountTable'
import http from '../../services/httpService'

const Account = (props) => {
    // const { apiAccount } = props.apiAccount;
    const initialFormState = {
        _id: null,
        'name': "",
        'consumerId': "",
        "employeeId": "",
        "expirationDate": ""
    }

    // const [ apiAccount, setApiAccount ] = useState(apiaccountData)
    const [ apiAccount, setApiAccount ] = useState([])
    const [ currentApiAccount, setCurrentApiAccount ] = useState(initialFormState)
    const [ editing, setEditing ] = useState(false)

    useEffect( () => {
        fetchApiAccount();
    }, ['apiAccount'])    

    const fetchApiAccount = () => {
        http.get('/api-account').then(function (response) {
            setApiAccount(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    } 

    const addAccount = async account => {
        const data = {
            "name": account.name,
            "consumerId": account.consumerId,
            "employeeId": account.employeeId,
            "expirationDate": account.expirationDate
        }

        await http.post('/api-account', data )
        .then( (response) => {
            setApiAccount( accounts => [...accounts, response.data ] );
        }).catch( (error) => {
            console.log(error);
        })
    }

    const updateAccount = async (id, account) => {
        await http.put(`/api-account/${id}`,account).then( (response) => {
            const newAccounts = apiAccount.filter( item => item._id != id );
            setApiAccount([...newAccounts, response.data ] );
        }).catch( (error) => {

        })
        setEditing(false)
    }

    const deleteAccount = (id, account) => {
        http.delete(`/api-account/${id}`).then( (response) => {
            fetchApiAccount();
        }).catch( (error) => {

        })
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
                            <AddAccountForm addAccount={addAccount}/>
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