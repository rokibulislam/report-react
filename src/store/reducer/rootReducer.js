import { combineReducers } from 'redux'
import authReducer from './authReducer';
import cashflowReducer from './cashflowReducer'
import profitReducer from './profitReducer'
import packageReducer from './packageReducer'
import clientReducer from './clientReducer'
import transactionReducer from './transactionReducer';
import apiAccountReducer from './apiaccountReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    cashflow: cashflowReducer,
    package: packageReducer,
    profit: profitReducer,
    client: clientReducer,
    transaction: transactionReducer,
    apiAccount: apiAccountReducer,
    user: userReducer,
})

export default rootReducer;